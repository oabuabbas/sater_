---
layout: ../../layouts/LegalMarkdown.astro
title: Privacy Policy — Behind The Badge
description: "How Behind The Badge handles local saves, Android ads and optional Google Play purchases."
path: /behind-the-badge/privacy
effective: 6 September 2026
updated: 14 October 2026
applies_to: Behind The Badge (Android and web) — com.behindthebadge.game
publisher: SATER
contact: sater.studios@gmail.com
---

## The short version

Behind The Badge is a single-player football management game. It has **no accounts, no login, and no servers of ours**. Everything you do — your career, your club, your save files — is created on your device and stays on your device.

On Android, advertising is supplied by **Google AdMob**, which processes data as described below. Loading the web edition also sends normal network information such as IP addresses to its hosting provider. Support messages and device backups are separate from local gameplay.

We do not use analytics, crash reporting, tracking pixels, or any advertising network other than AdMob.

---

## 1. What the game itself collects

We operate no game-save server. We cannot see your saves, clubs, managers or local gameplay records. Support correspondence is described in §11.

The game stores the following **locally on your device only**:

| What | Where | Why |
|---|---|---|
| Save files (your career, club, generated players, league history and manager profile, including any name, age or appearance you enter) | Android: the app's private data directory, via Capacitor Filesystem. Web: your browser's IndexedDB. | Three manual save slots and autosave let you continue a career. |
| Settings (sound on/off, and similar preferences) | Local device storage. | So the game remembers your choices. |
| Achievements, cosmetic unlocks, ad-frequency counts, ad-free reward progress and ad-removal entitlement | Local device or browser storage, as applicable. | To remember achievements, rewards and whether automatic ads should be shown. |

The game does not upload these records to a SATER game server. Device backup settings may apply separately. Clearing local data can remove progress — see §7.

## 2. Permissions the app requests

The app declares one permission of its own:

- **`INTERNET`** — used for Android advertising and Google Play purchase services, not to upload career saves to SATER.

The Google Mobile Ads SDK additionally declares **`com.google.android.gms.permission.AD_ID`** and **`android.permission.ACCESS_ADSERVICES_AD_ID`**, which allow it to read your device's advertising identifier.

The game requests **no** access to your location, contacts, camera, microphone, photos, files outside its own directory, or any other sensitive permission.

## 3. Advertising, and what Google collects

The Android edition supports these advertising formats:

- **Rewarded ads**, which you choose for cosmetic club-crest designs, or three completed rewards for an hour without ads through the ad-free-hour option.
- **Interstitial video ads**, which may appear after awards ceremonies, at most twice per season, never during a live match.
- **Banner ads**, inside the sponsor board on supported screens.

The web edition has no AdMob ads. Fictional sponsor artwork is part of the simulation, not a third-party advertising request. The optional Android ad-removal purchase disables automatic interstitial and banner ads; rewarded videos remain voluntary.

Ads are served by **Google AdMob**. When an ad is requested or shown, Google may collect and process:

- your device's **advertising ID (AAID)**;
- your **IP address**, and coarse location derived from it;
- **device and app information** — model, operating system version, language, the app you are using;
- **ad interaction data** — that an ad was shown, viewed, clicked, or closed.

Google acts as an independent controller of this data. What it does with it is governed by Google's own policies, not ours:

- Google Privacy Policy — https://policies.google.com/privacy
- How Google uses information from sites or apps that use its services — https://policies.google.com/technologies/partner-sites

AdMob provides reporting on advertising activity and earnings. The game does not send advertising identifiers or IP addresses to a SATER game-save server. Google processes advertising information separately; support correspondence and store purchase records are distinct from advertising reports.

## 3a. Optional Google Play purchase

On Android, the game supports a one-time, non-consumable **ad-removal** purchase through Google Play, where the store product is available. The web edition has no purchases.

Google Play and the billing plugin process product, transaction and ownership information to complete or restore the purchase. The game remembers the ad-removal entitlement locally. We do not operate a purchase-validation server or receive your card or bank details through the game. Google retains payment and purchase records under its own policies and may make order information available to the developer for administration and support.

Restoring a purchase uses the relevant Google Play account; it does not upload or restore your career saves. If you send us an order number or receipt for support, we receive that information as part of your correspondence (§11). See [Google's Privacy Policy](https://policies.google.com/privacy) for Google's processing.

## 4. Consent, and how to change your mind

Where required, Google's UMP SDK manages advertising consent. Whether an ad can be requested depends on consent, region and provider configuration. Declining personalisation does not guarantee that a non-personalised ad will be available.

You can change or withdraw that choice at any time by clearing the app's data, or via the consent options Google's form provides where available.

**On any Android device**, regardless of where you live, you can limit advertising directly in the operating system:

> **Settings → Privacy → Ads** (or **Settings → Google → Ads**), where you can **delete your advertising ID** or **reset** it.

Deleting the advertising ID stops apps, including this one, from receiving it.

## 5. Children

Behind The Badge is a football management simulation intended for a **general audience**. It is **not directed at children under 13** (or the equivalent minimum age in your country), and we do not knowingly collect personal information from children.

The local manager-creation screen allows a name, age and appearance for the fictional character. These are saved on the device, not sent to SATER, and the character's age is not verification of the player's age. There is no game-account registration or email requirement. If you are a parent or guardian concerned about advertising, use the controls in §4 or remove the app and its local data; device backups may need separate attention.

If you contact us at `sater.studios@gmail.com`, we will assist as far as we are able. There is no game account for us to delete; any personal information in support correspondence is handled separately.

## 6. Your rights

For local gameplay records, you exercise access and deletion on your device because SATER holds no copy. If you have sent us personal information in a support message, contact us to make a request about that correspondence.

Where **Google** holds data associated with your advertising ID, you can exercise your rights directly with Google using the links in §3, and you can sever the connection at any time by deleting or resetting your advertising ID (§4).

- **EEA / UK:** advertising processing and device-storage access may require consent, including for some non-personalised ads. Use the available privacy controls.
- **California:** advertising processing may constitute sharing under applicable law. Use Google's privacy controls and Android advertising-ID settings, or contact us for help.

You always have the right to lodge a complaint with your local data protection authority.

## 7. Keeping and deleting data

SATER holds no copy of your local game data. You control it on your device:

- **Android:** clearing app storage or uninstalling can delete saves. SATER holds no cloud copy; device backup or transfer settings may separately apply.
- **Web edition:** clearing your browser's site data for the game deletes all saves.

Please note that **deletion is irreversible** — your save is your only copy.

Google's retention of advertising and purchase records is governed by its policies and legal obligations. Removing local game data does not delete those records or cancel an owned Google Play purchase.

## 8. Security

Android game data is stored in the app's private storage area. Web saves use browser storage. Advertising and hosting requests are separate network activity; no claim of perfect storage or transmission security is made.

No method of storage is perfectly secure, and a device that is lost, shared, or compromised may expose data held on it.

## 9. International transfers

The game does not transfer local career saves to SATER. Advertising, purchases, web hosting and support services may process their respective information outside your country, under the safeguards described in their providers' policies and applicable law.

## 10. Changes to this policy

If the game's data practices change — for example if analytics or SATER cloud saves are added — we will update this document and its review date. Material changes will be announced in the app, on the website or on the store listing as appropriate. Where required, new consent will be requested; this notice does not replace consent.

## 11. Contact

Questions about this policy or privacy in the game. If you contact us, we receive your address and the information you include and use it to respond:

**`sater.studios@gmail.com`**
