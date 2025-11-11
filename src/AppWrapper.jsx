import { useState, useEffect } from 'react'
import App from './App.jsx'
import AppEnglish from './AppEnglish.jsx'
import { LanguageSelector } from './LanguageSelector.jsx'

export function AppWrapper() {
  // Default to English for India version
  const [language, setLanguage] = useState('en')

  // Check if language was previously selected
  useEffect(() => {
    const savedLanguage = localStorage.getItem('selectedLanguage')
    if (savedLanguage) {
      setLanguage(savedLanguage)
    }
    // Both English and Hindi are LTR (Left-to-Right)
    document.documentElement.dir = 'ltr'
    document.documentElement.lang = savedLanguage || 'en'
  }, [])

  const handleSelectLanguage = (lang) => {
    setLanguage(lang)
    localStorage.setItem('selectedLanguage', lang)
    // Both English and Hindi are LTR
    document.documentElement.dir = 'ltr'
    document.documentElement.lang = lang
  }

  const handleChangeLanguage = () => {
    // Toggle between English and Hindi
    const newLanguage = language === 'en' ? 'hi' : 'en'
    setLanguage(newLanguage)
    localStorage.setItem('selectedLanguage', newLanguage)
    // Both English and Hindi are LTR
    document.documentElement.dir = 'ltr'
    document.documentElement.lang = newLanguage
  }

  // English is default, Hindi is alternative
  if (language === 'hi') {
    return <App onChangeLanguage={handleChangeLanguage} />
  }

  return <AppEnglish onChangeLanguage={handleChangeLanguage} />
}
