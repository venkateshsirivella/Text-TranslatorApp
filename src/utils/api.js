import axios from 'axios';

// Create axios instance for RapidAPI Google Translate
const rapidAPI = axios.create({
  baseURL: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_RAPIDAPI_KEY, // ONLY use .env value
    'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com',
    'Content-Type': 'application/x-www-form-urlencoded'
  }
});

// Translate text function
export const translateText = async (text, sourceLang, targetLang) => {
  try {
    // If no API key is provided, return mock translation
    if (!import.meta.env.VITE_RAPIDAPI_KEY) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      return `[DEMO] Translated from ${sourceLang} to ${targetLang}: ${text}`;
    }

    // Prepare data for the POST body
    const body = new URLSearchParams({
      q: text,
      target: targetLang,
      source: sourceLang
    });

    const response = await rapidAPI.post('', body);

    if (
      response.data &&
      response.data.data &&
      response.data.data.translations &&
      response.data.data.translations[0]
    ) {
      return response.data.data.translations[0].translatedText;
    } else {
      throw new Error('Invalid response format from translation API');
    }
  } catch (error) {
    console.error('Translation error:', error);
    if (error.response) {
      throw new Error(
        `Translation API error: ${error.response.data?.error?.message || 'Unknown error'}`
      );
    } else if (error.request) {
      throw new Error('No response from translation service. Please check your internet connection.');
    } else {
      throw new Error(`Translation failed: ${error.message}`);
    }
  }
};

// Mock translation function (demo)
export const translateTextMock = async (text, sourceLang, targetLang) => {
  await new Promise(resolve => setTimeout(resolve, 1000));
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
  };

  const key = `${sourceLang}-${targetLang}`;
  const lowerText = text.toLowerCase();

  if (mockTranslations[key] && mockTranslations[key][lowerText]) {
    return mockTranslations[key][lowerText];
  }

  return `[MOCK] Translation from ${sourceLang} to ${targetLang}: ${text}`;
};
