import React, { useState } from 'react'
import { ArrowLeftRight, Loader2, Copy, Check } from 'lucide-react'
import useTranslator from '../../hooks/useTranslator'
import LanguageSelector from './LanguageSelector'

const TextTranslator = () => {
  const [sourceText, setSourceText] = useState('')
  const [sourceLang, setSourceLang] = useState('en')
  const [targetLang, setTargetLang] = useState('es')
  const [copied, setCopied] = useState(false)
  
  const { translatedText, loading, error, translate } = useTranslator()

  const handleTranslate = () => {
    if (sourceText.trim()) {
      translate(sourceText, sourceLang, targetLang)
    }
  }

  const handleSwapLanguages = () => {
    setSourceLang(targetLang)
    setTargetLang(sourceLang)
    if (translatedText) {
      setSourceText(translatedText)
    }
  }

  const copyToClipboard = async () => {
    if (translatedText) {
      try {
        await navigator.clipboard.writeText(translatedText)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      } catch (err) {
        console.error('Failed to copy text: ', err)
      }
    }
  }

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Text Translator
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Translate text between different languages instantly
          </p>
        </div>

        <div className="card animate-slide-up">
          {/* Language Selection */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                From
              </label>
              <LanguageSelector 
                value={sourceLang} 
                onChange={setSourceLang}
                placeholder="Source Language"
              />
            </div>
            
            <button
              onClick={handleSwapLanguages}
              className="mx-4 mt-6 p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
              title="Swap languages"
            >
              <ArrowLeftRight className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </button>
            
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                To
              </label>
              <LanguageSelector 
                value={targetLang} 
                onChange={setTargetLang}
                placeholder="Target Language"
              />
            </div>
          </div>

          {/* Text Input/Output Area */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Source Text */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Enter text to translate
              </label>
              <textarea
                value={sourceText}
                onChange={(e) => setSourceText(e.target.value)}
                placeholder="Type your text here..."
                rows={6}
                className="input-field resize-none"
                disabled={loading}
              />
              <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                {sourceText.length}/5000 characters
              </div>
            </div>

            {/* Translated Text */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Translation
              </label>
              <div className="relative">
                <textarea
                  value={translatedText}
                  readOnly
                  placeholder="Translation will appear here..."
                  rows={6}
                  className="input-field resize-none bg-gray-50 dark:bg-gray-800"
                />
                {translatedText && (
                  <button
                    onClick={copyToClipboard}
                    className="absolute top-2 right-2 p-2 rounded-lg bg-white dark:bg-gray-700 shadow-sm hover:shadow-md transition-all duration-200"
                    title="Copy translation"
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-green-500" />
                    ) : (
                      <Copy className="w-4 h-4 text-gray-500" />
                    )}
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
              <p className="text-red-600 dark:text-red-400 text-sm">
                {error}
              </p>
            </div>
          )}

          {/* Translate Button */}
          <div className="flex justify-center">
            <button
              onClick={handleTranslate}
              disabled={!sourceText.trim() || loading}
              className="btn-primary px-8 py-3 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Translating...</span>
                </>
              ) : (
                <span>Translate</span>
              )}
            </button>
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-8 card">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            How to use:
          </h3>
          <ol className="list-decimal list-inside space-y-2 text-gray-600 dark:text-gray-300">
            <li>Select your source and target languages</li>
            <li>Enter the text you want to translate</li>
            <li>Click the "Translate" button</li>
            <li>Copy the translation using the copy button</li>
            <li>Use the swap button to reverse translation direction</li>
          </ol>
        </div>
      </div>
    </div>
  )
}

export default TextTranslator