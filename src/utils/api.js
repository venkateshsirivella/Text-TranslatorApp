import axios from 'axios'

// Create axios instance for RapidAPI
const rapidAPI = axios.create({
  baseURL: 'https://microsoft-translator-text.p.rapidapi.com',
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_RAPIDAPI_KEY || 'f43debc286mshb7255502ac18c14p1fe2efjsn95bdf28c6e9e',
    'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com',
    'Content-Type': 'application/json'
  }
})

// Translate text function
export const translateText = async (text, sourceLang, targetLang) => {
  try {
    // If no API key is provided, return mock translation
    if (!import.meta.env.VITE_RAPIDAPI_KEY || import.meta.env.VITE_RAPIDAPI_KEY === 'f43debc286mshb7255502ac18c14p1fe2efjsn95bdf28c6e9e') {
      // Mock translation for demo purposes
      await new Promise(resolve => setTimeout(resolve, 1000)) // Simulate API delay
      return `[DEMO] Translated from ${sourceLang} to ${targetLang}: ${text}`
    }

    const response = await rapidAPI.post('/translate', [
      {
        Text: text
      }
    ], {
      params: {
        'api-version': '3.0',
        'from': sourceLang,
        'to': targetLang
      }
    })

    if (response.data && response.data[0] && response.data[0].translations && response.data[0].translations[0]) {
      return response.data[0].translations[0].text
    } else {
      throw new Error('Invalid response format from translation API')
    }
  } catch (error) {
    console.error('Translation error:', error)
    
    if (error.response) {
      // API responded with an error
      throw new Error(`Translation API error: ${error.response.data?.error?.message || 'Unknown error'}`)
    } else if (error.request) {
      // No response received
      throw new Error('No response from translation service. Please check your internet connection.')
    } else {
      // Other error
      throw new Error(`Translation failed: ${error.message}`)
    }
  }
}

// Alternative free translation function (using a mock service for demo)
export const translateTextMock = async (text, sourceLang, targetLang) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  // Mock translations for demo
  const mockTranslations = {
    'en-es': {
      'hello': 'hola',
      'world': 'mundo',
      'good morning': 'buenos días',
      'thank you': 'gracias',
      'how are you': 'cómo estás'
    },
    'es-en': {
      'hola': 'hello',
      'mundo': 'world',
      'buenos días': 'good morning',
      'gracias': 'thank you',
      'cómo estás': 'how are you'
    }
  }
  
  const key = `${sourceLang}-${targetLang}`
  const lowerText = text.toLowerCase()
  
  if (mockTranslations[key] && mockTranslations[key][lowerText]) {
    return mockTranslations[key][lowerText]
  }
  
  return `[MOCK] Translation from ${sourceLang} to ${targetLang}: ${text}`
}