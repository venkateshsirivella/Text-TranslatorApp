// utils/constants.js - UPDATED VERSION

// Microsoft Translator supported languages (130+ languages)
export const LANGUAGES = [
  { code: 'af', name: 'Afrikaans' },
  { code: 'sq', name: 'Albanian' },
  { code: 'am', name: 'Amharic' },
  { code: 'ar', name: 'Arabic' },
  { code: 'hy', name: 'Armenian' },
  { code: 'as', name: 'Assamese' },
  { code: 'az', name: 'Azerbaijani' },
  { code: 'bn', name: 'Bangla' },
  { code: 'ba', name: 'Bashkir' },
  { code: 'eu', name: 'Basque' },
  { code: 'bho', name: 'Bhojpuri' },
  { code: 'brx', name: 'Bodo' },
  { code: 'bs', name: 'Bosnian' },
  { code: 'bg', name: 'Bulgarian' },
  { code: 'yue', name: 'Cantonese (Traditional)' },
  { code: 'ca', name: 'Catalan' },
  { code: 'hne', name: 'Chhattisgarhi' },
  { code: 'lzh', name: 'Chinese (Literary)' },
  { code: 'zh-Hans', name: 'Chinese Simplified' },
  { code: 'zh-Hant', name: 'Chinese Traditional' },
  { code: 'sn', name: 'chiShona' },
  { code: 'hr', name: 'Croatian' },
  { code: 'cs', name: 'Czech' },
  { code: 'da', name: 'Danish' },
  { code: 'prs', name: 'Dari' },
  { code: 'dv', name: 'Divehi' },
  { code: 'doi', name: 'Dogri' },
  { code: 'nl', name: 'Dutch' },
  { code: 'en', name: 'English' },
  { code: 'et', name: 'Estonian' },
  { code: 'fo', name: 'Faroese' },
  { code: 'fj', name: 'Fijian' },
  { code: 'fil', name: 'Filipino' },
  { code: 'fi', name: 'Finnish' },
  { code: 'fr', name: 'French' },
  { code: 'fr-ca', name: 'French (Canada)' },
  { code: 'gl', name: 'Galician' },
  { code: 'ka', name: 'Georgian' },
  { code: 'de', name: 'German' },
  { code: 'el', name: 'Greek' },
  { code: 'gu', name: 'Gujarati' },
  { code: 'ht', name: 'Haitian Creole' },
  { code: 'ha', name: 'Hausa' },
  { code: 'he', name: 'Hebrew' },
  { code: 'hi', name: 'Hindi' },
  { code: 'mww', name: 'Hmong Daw' },
  { code: 'hu', name: 'Hungarian' },
  { code: 'is', name: 'Icelandic' },
  { code: 'ig', name: 'Igbo' },
  { code: 'id', name: 'Indonesian' },
  { code: 'ikt', name: 'Inuinnaqtun' },
  { code: 'iu', name: 'Inuktitut' },
  { code: 'iu-Latn', name: 'Inuktitut (Latin)' },
  { code: 'ga', name: 'Irish' },
  { code: 'it', name: 'Italian' },
  { code: 'ja', name: 'Japanese' },
  { code: 'kn', name: 'Kannada' },
  { code: 'ks', name: 'Kashmiri' },
  { code: 'kk', name: 'Kazakh' },
  { code: 'km', name: 'Khmer' },
  { code: 'rw', name: 'Kinyarwanda' },
  { code: 'tlh-Latn', name: 'Klingon' },
  { code: 'tlh-Piqd', name: 'Klingon (plqaD)' },
  { code: 'gom', name: 'Konkani' },
  { code: 'ko', name: 'Korean' },
  { code: 'ku', name: 'Kurdish (Central)' },
  { code: 'kmr', name: 'Kurdish (Northern)' },
  { code: 'ky', name: 'Kyrgyz' },
  { code: 'lo', name: 'Lao' },
  { code: 'lv', name: 'Latvian' },
  { code: 'ln', name: 'Lingala' },
  { code: 'lt', name: 'Lithuanian' },
  { code: 'dsb', name: 'Lower Sorbian' },
  { code: 'lug', name: 'Luganda' },
  { code: 'mk', name: 'Macedonian' },
  { code: 'mai', name: 'Maithili' },
  { code: 'mg', name: 'Malagasy' },
  { code: 'ms', name: 'Malay' },
  { code: 'ml', name: 'Malayalam' },
  { code: 'mt', name: 'Maltese' },
  { code: 'mni', name: 'Manipuri' },  
  { code: 'mi', name: 'Maori' },
  { code: 'mr', name: 'Marathi' },
  { code: 'mn-Cyrl', name: 'Mongolian (Cyrillic)' },
  { code: 'mn-Mong', name: 'Mongolian (Traditional)' },
  { code: 'my', name: 'Myanmar (Burmese)' },
  { code: 'ne', name: 'Nepali' },
  { code: 'nb', name: 'Norwegian' },
  { code: 'nya', name: 'Nyanja' },
  { code: 'or', name: 'Odia' },
  { code: 'ps', name: 'Pashto' },
  { code: 'fa', name: 'Persian' },
  { code: 'pl', name: 'Polish' },
  { code: 'pt', name: 'Portuguese (Brazil)' },
  { code: 'pt-pt', name: 'Portuguese (Portugal)' },
  { code: 'pa', name: 'Punjabi' },
  { code: 'otq', name: 'Querétaro Otomi' },
  { code: 'ro', name: 'Romanian' },
  { code: 'ru', name: 'Russian' },
  { code: 'sm', name: 'Samoan' },
  { code: 'sr-Cyrl', name: 'Serbian (Cyrillic)' },
  { code: 'sr-Latn', name: 'Serbian (Latin)' },
  { code: 'st', name: 'Sesotho' },
  { code: 'nso', name: 'Sesotho sa Leboa' },
  { code: 'tn', name: 'Setswana' },
  { code: 'sd', name: 'Sindhi' },
  { code: 'si', name: 'Sinhala' },
  { code: 'sk', name: 'Slovak' },
  { code: 'sl', name: 'Slovenian' },
  { code: 'so', name: 'Somali' },
  { code: 'es', name: 'Spanish' },
  { code: 'sw', name: 'Swahili' },
  { code: 'sv', name: 'Swedish' },
  { code: 'ty', name: 'Tahitian' },
  { code: 'ta', name: 'Tamil' },
  { code: 'tt', name: 'Tatar' },
  { code: 'te', name: 'Telugu' },
  { code: 'th', name: 'Thai' },
  { code: 'bo', name: 'Tibetan' },
  { code: 'ti', name: 'Tigrinya' },
  { code: 'to', name: 'Tongan' },
  { code: 'tr', name: 'Turkish' },
  { code: 'tk', name: 'Turkmen' },
  { code: 'uk', name: 'Ukrainian' },
  { code: 'hsb', name: 'Upper Sorbian' },
  { code: 'ur', name: 'Urdu' },
  { code: 'ug', name: 'Uyghur' },
  { code: 'uz', name: 'Uzbek (Latin)' },
  { code: 'vi', name: 'Vietnamese' },
  { code: 'cy', name: 'Welsh' },
  { code: 'xh', name: 'Xhosa' },
  { code: 'yo', name: 'Yoruba' },
  { code: 'yua', name: 'Yucatec Maya' },
  { code: 'zu', name: 'Zulu' }
];

// Dynamic language fetching function (future enhancement)
export const fetchSupportedLanguages = async () => {
  try {
    const response = await fetch('https://api.cognitive.microsofttranslator.com/languages?api-version=3.0&scope=translation');
    const data = await response.json();
    return Object.entries(data.translation).map(([code, info]) => ({
      code,
      name: info.name
    }));
  } catch (error) {
    console.warn('Failed to fetch dynamic languages, using static list');
    return LANGUAGES;
  }
};

// Rest of your constants remain the same...
export const CHARACTER_SETS = {
  UPPERCASE: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  LOWERCASE: 'abcdefghijklmnopqrstuvwxyz', 
  NUMBERS: '0123456789',
  SYMBOLS: '!@#$%^&*()_+-=[]{}|;:,.<>?'
};

export const DEFAULT_GENERATOR_OPTIONS = {
  length: 12,
  includeUppercase: true,
  includeLowercase: true,
  includeNumbers: true,
  includeSymbols: false,
  customCharacters: ''
};

export const API_CONFIG = {
  RAPIDAPI_BASE_URL: 'https://microsoft-translator-text.p.rapidapi.com',
  RAPIDAPI_HOST: 'microsoft-translator-text.p.rapidapi.com',
  TRANSLATION_API_VERSION: '3.0'
};

export const APP_CONFIG = {
  MAX_TEXT_LENGTH: 5000,
  MAX_HISTORY_ITEMS: 10,
  ANIMATION_DELAY: 300,
  COPY_FEEDBACK_DURATION: 2000,
  REALTIME_TRANSLATION_DELAY: 800 // New: debounce delay for real-time
};
