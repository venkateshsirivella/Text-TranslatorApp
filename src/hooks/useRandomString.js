import { useState, useCallback, useEffect } from 'react'

const useRandomString = (options) => {
  const [randomString, setRandomString] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)

  // Generate character set based on options
  const generateCharacterSet = useCallback(() => {
    let charset = ''
    
    if (options.includeUppercase) {
      charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    }
    if (options.includeLowercase) {
      charset += 'abcdefghijklmnopqrstuvwxyz'
    }
    if (options.includeNumbers) {
      charset += '0123456789'
    }
    if (options.includeSymbols) {
      charset += '!@#$%^&*()_+-=[]{}|;:,.<>?'
    }
    if (options.customCharacters) {
      charset += options.customCharacters
    }
    
    return charset
  }, [options])

  // Generate random string
  const generateString = useCallback(() => {
    const charset = generateCharacterSet()
    
    if (!charset) {
      setRandomString('')
      return
    }

    setIsGenerating(true)
    
    // Simulate some processing time for better UX
    setTimeout(() => {
      let result = ''
      for (let i = 0; i < options.length; i++) {
        result += charset.charAt(Math.floor(Math.random() * charset.length))
      }
      setRandomString(result)
      setIsGenerating(false)
    }, 300)
  }, [options.length, generateCharacterSet])

  // Auto-generate when component mounts
  useEffect(() => {
    if (generateCharacterSet()) {
      generateString()
    }
  }, []) // Only run on mount

  // Clear string when no valid options are selected
  useEffect(() => {
    if (!generateCharacterSet()) {
      setRandomString('')
    }
  }, [generateCharacterSet])

  return {
    randomString,
    isGenerating,
    generateString
  }
}

export default useRandomString