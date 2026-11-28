import { chromium } from "playwright-core";
import assert from "node:assert/strict";
import { mkdir } from "node:fs/promises";

const origin = new URL(process.argv[2] ?? "http://127.0.0.1:4378").origin;
const browser = await chromium.launch({channel:"msedge", headless:true});
try {
  await mkdir(".shots", {recursive:true});
  for (const [locale, width] of [["ar",1440], ["ar",390], ["en",1280], ["en",375]]) {
    const phone = width < 500;
    const page = await browser.newPage({
      viewport:{width,height:phone ? 844 : 768}, hasTouch:phone, colorScheme:"light", reducedMotion:"reduce"
    });
    const errors = [];
    page.on("pageerror", error => errors.push(String(error)));
    const response = await page.goto(origin + (locale === "ar" ? "/ar/" : "/"));
    assert.equal(response.status(), 200);
    await page.evaluate(() => document.fonts.ready);
    assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth));
    await page.locator(".panorama").evaluate(image => image.decode());
    await page.screenshot({path:".shots/" + locale + "-" + width + ".png"});
    const roster = await page.locator("[data-roster]").evaluate(node => JSON.parse(node.dataset.roster));
    const slugs = [];
    for (const filter of await page.locator("[data-filter]").all()) {
      await filter.click();
      const group = page.locator("[data-group]:visible");
      assert.equal(await group.count(), 1);
      assert.equal(await filter.getAttribute("aria-current"), "true");
      for (const feature of await group.locator(".feature").all()) {
        const path = await feature.getAttribute("href");
        slugs.push(path.split("/").filter(Boolean).pop());
        assert.equal((await page.request.get(new URL(path,origin).href)).status(),200);
      }
      for (const item of await group.locator("[data-shot]").all()) {
        await item.click();
        await page.locator("dialog[open] .screen").evaluate(image => image.decode());
        await page.locator("dialog[open] button").click();
      }
    }
    assert.deepEqual(roster.map(item => item.slug).sort(), slugs.sort());
    for (const slug of ["the-duopoly","behind-the-badge","find-the-spy","lucky-draw"]) assert(slugs.includes(slug));
    const scoreIcons = page.locator(".cast img");
    await scoreIcons.evaluateAll(images => Promise.all(images.map(image => image.decode())));
    if (locale === "ar" && width === 1440) {
      await page.clock.install();
      await page.evaluate(() => {
        window.drawnIcons = [];
        const draw = CanvasRenderingContext2D.prototype.drawImage;
        CanvasRenderingContext2D.prototype.drawImage = function(image, ...args) {
          if (image instanceof HTMLImageElement) window.drawnIcons.push(new URL(image.src).pathname);
          return draw.call(this, image, ...args);
        };
      });
      // Restarting early must still cycle through the entire obstacle bag.
      for (let i = 0; i < roster.length; i++) {
        await page.locator("[data-start]").click();
        await page.clock.runFor(1150);
      }
      const encountered = await page.evaluate(() => [...new Set(window.drawnIcons)].sort());
      assert.deepEqual(encountered, roster.map(item => item.icon).sort());
    }
    if (locale === "ar") {
      await page.locator("[data-start]").click();
      await page.waitForFunction(() => Number(document.querySelector("[data-score]").textContent) > 2);
      const stage = page.locator("[data-stage]");
      if (phone) await stage.tap(); else await stage.press("Space");
      await page.waitForFunction(() => !document.querySelector("[data-card]").hidden, null, {timeout:12000});
      assert(Number(await page.locator("[data-best]").innerText()) > 0);
      await page.locator("[data-start]").click();
      await page.waitForFunction(() => Number(document.querySelector("[data-score]").textContent) > 1 && document.querySelector("[data-card]").hidden);
      await page.reload();
      assert(Number(await page.locator("[data-best]").innerText()) > 0);
    }
    for (const anchor of await page.locator(".credit, .story").all()) {
      const result = await page.request.get(new URL(await anchor.getAttribute("href"), origin).href);
      assert.equal(result.status(), 200);
    }
    // Check the complete launch journey, including opening each destination from the Mini collection.
    const prefix = locale === "ar" ? "/ar" : "";
    await page.goto(origin + prefix + "/sater-mini/");
    for (const slug of ["find-the-spy", "lucky-draw"]) {
      await page.locator("#mini-products a[href$='/" + slug + "/']").click();
      assert.equal(new URL(page.url()).pathname, prefix + "/" + slug + "/");
      if (slug === "find-the-spy") {
        assert.equal(await page.locator("main a[href='https://play.google.com/store/apps/details?id=com.sater.findthespy']").count(), 1);
      } else {
        assert.match(await page.locator("main .intro").innerText(), /In development|قيد التطوير/i);
      }
      await page.goBack();
    }
    for (const slug of ["find-the-spy-on-google-play", "introducing-sater-mini"]) {
      const article = await page.goto(origin + prefix + "/news/" + slug + "/");
      assert.equal(article.status(), 200);
      assert(await page.locator(".launch-actions").isVisible());
      assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth));
    }
    const toggle = page.locator("[data-theme-toggle]");
    await toggle.click();
    await page.reload();
    assert.equal(await page.locator("html").getAttribute("data-theme"), "dark");
    await page.locator("header a[hreflang]").first().click();
    assert.equal(await page.locator("html").getAttribute("lang"), locale === "ar" ? "en" : "ar");
    assert.deepEqual(errors, []);
    console.log(locale, width, "passed");
    await page.close();
  }
} finally { await browser.close(); }
