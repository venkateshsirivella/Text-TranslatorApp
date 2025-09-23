import { useState, useCallback } from 'react'
import { translateText } from '../utils/api'

const useTranslator = () => {
  const [translatedText, setTranslatedText] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const translate = useCallback(async (text, sourceLang, targetLang) => {
    if (!text.trim()) return

    setLoading(true)
    setError(null)
    
    try {
      const result = await translateText(text, sourceLang, targetLang)
      setTranslatedText(result)
    } catch (err) {
      setError(err.message || 'Translation failed. Please try again.')
      setTranslatedText('')
    } finally {
      setLoading(false)
    }
  }, [])

  const clearTranslation = useCallback(() => {
    setTranslatedText('')
    setError(null)
  }, [])

  return {
    translatedText,
    loading,
    error,
    translate,
    clearTranslation
  }
}

export default useTranslator