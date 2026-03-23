/**
 * data.js — Single source of truth for all app data.
 *
 * All content is imported directly from the JSON files in src/data/json/.
 * No content is duplicated or hardcoded in components.
 * The `t(obj, lang)` helper (in LanguageContext) reads the correct language
 * key from any bilingual object at runtime.
 */

import profileJson        from './json/profile.json'
import businessJson       from './json/business.json'
import awardsJson         from './json/awards_and_titles.json'
import achievementsJson   from './json/achievements.json'
import eventJson          from './json/eventachievements.json'
import activityJson       from './json/activity.json'

// ─── Profile ────────────────────────────────────────────────────────────────
export const profile = profileJson

// ─── Business ───────────────────────────────────────────────────────────────
export const business = businessJson

// ─── Awards & Titles ────────────────────────────────────────────────────────
export const awards = awardsJson

// ─── Achievements ───────────────────────────────────────────────────────────
export const achievements = achievementsJson

// ─── Event Achievements ─────────────────────────────────────────────────────
export const eventachievements = eventJson

// ─── Activity ───────────────────────────────────────────────────────────────
export const activity = activityJson

// ─── Contact details (convenience re-export) ────────────────────────────────
export const contactDetails = awardsJson.contact_details
