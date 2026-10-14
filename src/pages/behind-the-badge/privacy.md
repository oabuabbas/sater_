---
layout: ../../layouts/LegalMarkdown.astro
title: Privacy Policy — Behind The Badge
description: "How Behind The Badge handles local saves and advertising data."
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
| Save files (your career, clubs, players, league history) | Android: the app's private data directory, via Capacitor Filesystem. Web: your browser's IndexedDB. | So you can continue a career. |
| Settings (sound on/off, and similar preferences) | Local device storage. | So the game remembers your choices. |

The game does not upload these records to a SATER game server. Device backup settings may apply separately. Clearing local data can remove progress — see §7.

## 2. Permissions the app requests

The app declares one permission of its own:

- **`INTERNET`** — required solely to load ads.

The Google Mobile Ads SDK additionally declares **`com.google.android.gms.permission.AD_ID`** and **`android.permission.ACCESS_ADSERVICES_AD_ID`**, which allow it to read your device's advertising identifier.

The game requests **no** access to your location, contacts, camera, microphone, photos, files outside its own directory, or any other sensitive permission.

## 3. Advertising, and what Google collects

The game shows two kinds of ad:

- **Rewarded ads**, which you choose to watch in exchange for cosmetic club-crest designs.
- **Interstitial ads**, shown occasionally between screens. They are suppressed for the whole of a live match.

There are no other ads, no banner ads, and no ads inside matches.

Ads are served by **Google AdMob**. When an ad is requested or shown, Google may collect and process:

- your device's **advertising ID (AAID)**;
- your **IP address**, and coarse location derived from it;
- **device and app information** — model, operating system version, language, the app you are using;
- **ad interaction data** — that an ad was shown, viewed, clicked, or closed.

Google acts as an independent controller of this data. What it does with it is governed by Google's own policies, not ours:

- Google Privacy Policy — https://policies.google.com/privacy
- How Google uses information from sites or apps that use its services — https://policies.google.com/technologies/partner-sites

We receive only aggregate, non-identifying earnings reports (for example, "this many ads were shown"). We never receive your advertising ID, your IP address, or any information that identifies you.

**We make no in-app purchases available.** The game contains no payment mechanism, and we never collect payment details.

## 4. Consent, and how to change your mind

Where required, Google's UMP SDK manages advertising consent. Whether an ad can be requested depends on consent, region and provider configuration. Declining personalisation does not guarantee that a non-personalised ad will be available.

You can change or withdraw that choice at any time by clearing the app's data, or via the consent options Google's form provides where available.

**On any Android device**, regardless of where you live, you can limit advertising directly in the operating system:

> **Settings → Privacy → Ads** (or **Settings → Google → Ads**), where you can **delete your advertising ID** or **reset** it.

Deleting the advertising ID stops apps, including this one, from receiving it.

## 5. Children

Behind The Badge is a football management simulation intended for a **general audience**. It is **not directed at children under 13** (or the equivalent minimum age in your country), and we do not knowingly collect personal information from children.

The game asks for no name, age, email address, or any other personal detail, so we hold nothing to identify a child by. If you are a parent or guardian and believe a child has been shown advertising you did not consent to, you can delete or reset the advertising ID as described in §4, or uninstall the app, which removes all local data.

If you contact us at `sater.studios@gmail.com` we will assist as far as we are able — noting that, because we hold no data, there is no account for us to delete.

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

Google's retention of advertising data is governed by Google's policies.

## 8. Security

Android game data is stored in the app's private storage area. Web saves use browser storage. Advertising and hosting requests are separate network activity; no claim of perfect storage or transmission security is made.

No method of storage is perfectly secure, and a device that is lost, shared, or compromised may expose data held on it.

## 9. International transfers

We transfer nothing. Google may process advertising data on servers outside your country, including in the United States, under the safeguards described in Google's privacy policy.

## 10. Changes to this policy

If the game changes in a way that affects this policy — for example if analytics, cloud saves, or purchases are ever added — we will update this document and change the effective date at the top. Material changes will be announced in the app or on the store listing. Continuing to use the game after a change means you accept the updated policy.

## 11. Contact

Questions about this policy or privacy in the game. If you contact us, we receive your address and the information you include and use it to respond:

**`sater.studios@gmail.com`**
