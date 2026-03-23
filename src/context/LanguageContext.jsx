/**
 * LanguageContext.jsx
 *
 * Global language state + helpers.
 * All bilingual JSON objects follow the shape: { english: "...", tamil: "..." }
 * The `t()` helper resolves the correct string at render time — no duplication needed.
 */

import { createContext, useContext, useState, useCallback } from 'react'

const LanguageContext = createContext(null)

export const LANGUAGES = {
  english: { code: 'english', label: 'EN',     nativeLabel: 'English' },
  tamil:   { code: 'tamil',   label: 'தமிழ்', nativeLabel: 'தமிழ்'  },
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('english')

  const toggle = useCallback(
    () => setLang(prev => prev === 'english' ? 'tamil' : 'english'),
    []
  )

  const setLanguage = useCallback((code) => {
    if (LANGUAGES[code]) setLang(code)
  }, [])

  return (
    <LanguageContext.Provider value={{ lang, toggle, setLanguage, LANGUAGES }}>
      {children}
    </LanguageContext.Provider>
  )
}

/**
 * useLang() — Hook to consume language state in any component.
 * Returns: { lang, toggle, setLanguage, LANGUAGES }
 */
export function useLang() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLang must be used inside <LanguageProvider>')
  return ctx
}

/**
 * t(obj, lang) — Translate helper.
 *
 * Resolves the correct language string from a bilingual object.
 *
 * Supported input shapes:
 *   • { english: "...", tamil: "..." }           → direct bilingual field
 *   • { english: { title, description }, ... }   → nested bilingual object
 *   • "plain string"                              → returned as-is
 *   • null / undefined                            → returns ""
 *
 * @param {object|string} obj  - Bilingual object or plain string
 * @param {string}        lang - Active language code ("english" | "tamil")
 * @returns {string|object}
 */
export function t(obj, lang) {
  if (obj === null || obj === undefined) return ''
  if (typeof obj === 'string') return obj
  if (typeof obj === 'number') return String(obj)
  // Standard bilingual shape
  if (obj[lang] !== undefined) return obj[lang]
  // Fallback to English
  if (obj['english'] !== undefined) return obj['english']
  return ''
}

/**
 * tField(obj, lang, field) — Pick a field from a nested bilingual object.
 *
 * Useful when JSON has: { english: { title: "...", description: "..." }, tamil: { ... } }
 *
 * @param {object} obj   - Bilingual container
 * @param {string} lang  - Active language
 * @param {string} field - Field name inside the language block
 * @returns {string}
 */
export function tField(obj, lang, field) {
  if (!obj) return ''
  const block = obj[lang] || obj['english'] || {}
  return block[field] || ''
}
