// hooks/useTranslator.js - REAL-TIME VERSION

import { useState, useCallback, useEffect, useRef } from 'react'
import { translateText } from '../utils/api'
import { APP_CONFIG } from '../utils/constants'

const useTranslator = () => {
  const [translatedText, setTranslatedText] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [isRealTimeEnabled, setIsRealTimeEnabled] = useState(true)
  
  // References for managing real-time translation
  const debounceTimeoutRef = useRef(null)
  const currentRequestRef = useRef(null)

  // Real-time translation function with debouncing
  const translateRealTime = useCallback(async (text, sourceLang, targetLang) => {
    if (!text.trim() || !isRealTimeEnabled) {
      setTranslatedText('')
      return
    }

    // Clear existing timeout
    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current)
    }

    // Cancel previous request if still pending
    if (currentRequestRef.current) {
      currentRequestRef.current.cancelled = true
    }

    // Set loading state
    setLoading(true)
    setError(null)

    // Create new request controller
    const requestController = { cancelled: false }
    currentRequestRef.current = requestController

    // Debounce the translation
    debounceTimeoutRef.current = setTimeout(async () => {
      try {
        // Check if request was cancelled
        if (requestController.cancelled) return

        const result = await translateText(text, sourceLang, targetLang)
        
        // Check again after async operation
        if (requestController.cancelled) return

        setTranslatedText(result)
      } catch (err) {
        if (requestController.cancelled) return
        
        setError(err.message || 'Real-time translation failed')
        setTranslatedText('')
      } finally {
        if (!requestController.cancelled) {
          setLoading(false)
        }
      }
    }, APP_CONFIG.REALTIME_TRANSLATION_DELAY)

  }, [isRealTimeEnabled])

  // Manual translation function (for button-triggered translation)
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

  // Clear translation
  const clearTranslation = useCallback(() => {
    setTranslatedText('')
    setError(null)
    
    // Cancel any pending requests
    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current)
    }
    if (currentRequestRef.current) {
      currentRequestRef.current.cancelled = true
    }
  }, [])

  // Toggle real-time translation
  const toggleRealTime = useCallback(() => {
    setIsRealTimeEnabled(prev => !prev)
    if (!isRealTimeEnabled) {
      clearTranslation()
    }
  }, [isRealTimeEnabled, clearTranslation])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (debounceTimeoutRef.current) {
        clearTimeout(debounceTimeoutRef.current)
      }
      if (currentRequestRef.current) {
        currentRequestRef.current.cancelled = true
      }
    }
  }, [])

  return {
    translatedText,
    loading,
    error,
    isRealTimeEnabled,
    translate,
    translateRealTime,
    clearTranslation,
    toggleRealTime
  }
}

export default useTranslator
