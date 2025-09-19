import React, { useState, useCallback, useEffect } from 'react'
import { RefreshCw, Copy, Check, Settings, Trash2 } from 'lucide-react'
import useRandomString from '../../hooks/useRandomString'
import StringDisplay from './StringDisplay'

const RandomStringGenerator = () => {
  const [options, setOptions] = useState({
    length: 12,
    includeUppercase: true,
    includeLowercase: true,
    includeNumbers: true,
    includeSymbols: false,
    customCharacters: ''
  })
  const [history, setHistory] = useState([])
  const [copied, setCopied] = useState('')
  const [showSettings, setShowSettings] = useState(false)

  const { randomString, isGenerating, generateString } = useRandomString(options)

  // Add generated string to history
  useEffect(() => {
    if (randomString && !history.includes(randomString)) {
      setHistory(prev => [randomString, ...prev.slice(0, 9)]) // Keep last 10
    }
  }, [randomString, history])

  const handleGenerate = useCallback(() => {
    generateString()
  }, [generateString])

  const handleOptionChange = useCallback((key, value) => {
    setOptions(prev => ({
      ...prev,
      [key]: value
    }))
  }, [])

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(text)
      setTimeout(() => setCopied(''), 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  const clearHistory = () => {
    setHistory([])
  }

  const isValidConfiguration = () => {
    return options.includeUppercase || 
           options.includeLowercase || 
           options.includeNumbers || 
           options.includeSymbols || 
           options.customCharacters.length > 0
  }

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Random String Generator
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Generate random strings with customizable options using React hooks
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Generator Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Generated String Display */}
            <div className="card animate-slide-up">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Generated String
                </h2>
                <button
                  onClick={() => setShowSettings(!showSettings)}
                  className="btn-secondary flex items-center space-x-2"
                >
                  <Settings className="w-4 h-4" />
                  <span>Settings</span>
                </button>
              </div>

              <StringDisplay 
                text={randomString}
                onCopy={() => copyToClipboard(randomString)}
                copied={copied === randomString}
              />

              <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleGenerate}
                  disabled={isGenerating || !isValidConfiguration()}
                  className="btn-primary flex items-center justify-center space-x-2 flex-1"
                >
                  <RefreshCw className={`w-5 h-5 ${isGenerating ? 'animate-spin' : ''}`} />
                  <span>{isGenerating ? 'Generating...' : 'Generate New String'}</span>
                </button>
              </div>

              {!isValidConfiguration() && (
                <div className="mt-4 p-3 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
                  <p className="text-yellow-600 dark:text-yellow-400 text-sm">
                    Please select at least one character type or add custom characters.
                  </p>
                </div>
              )}
            </div>

            {/* Settings Panel */}
            {showSettings && (
              <div className="card animate-slide-up">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Generator Settings
                </h3>

                {/* String Length */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    String Length: {options.length}
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="100"
                    value={options.length}
                    onChange={(e) => handleOptionChange('length', parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                    <span>1</span>
                    <span>100</span>
                  </div>
                </div>

                {/* Character Types */}
                <div className="space-y-3 mb-6">
                  <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Include Character Types:
                  </h4>
                  
                  {[
                    { key: 'includeUppercase', label: 'Uppercase Letters (A-Z)' },
                    { key: 'includeLowercase', label: 'Lowercase Letters (a-z)' },
                    { key: 'includeNumbers', label: 'Numbers (0-9)' },
                    { key: 'includeSymbols', label: 'Symbols (!@#$%^&*)' }
                  ].map(({ key, label }) => (
                    <label key={key} className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={options[key]}
                        onChange={(e) => handleOptionChange(key, e.target.checked)}
                        className="w-4 h-4 text-primary-600 bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded focus:ring-primary-500"
                      />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        {label}
                      </span>
                    </label>
                  ))}
                </div>

                {/* Custom Characters */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Custom Characters (optional)
                  </label>
                  <input
                    type="text"
                    value={options.customCharacters}
                    onChange={(e) => handleOptionChange('customCharacters', e.target.value)}
                    placeholder="Add your own characters..."
                    className="input-field"
                  />
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    Any characters you type here will be included in the generation
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* History Section */}
          <div className="space-y-6">
            <div className="card">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  History
                </h3>
                {history.length > 0 && (
                  <button
                    onClick={clearHistory}
                    className="text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 transition-colors duration-200"
                    title="Clear history"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}
              </div>

              {history.length === 0 ? (
                <p className="text-gray-500 dark:text-gray-400 text-sm text-center py-8">
                  Generated strings will appear here
                </p>
              ) : (
                <div className="space-y-2 max-h-96 overflow-y-auto">
                  {history.map((str, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg group"
                    >
                      <span className="font-mono text-sm text-gray-900 dark:text-white break-all flex-1 mr-2">
                        {str}
                      </span>
                      <button
                        onClick={() => copyToClipboard(str)}
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
                        title="Copy to clipboard"
                      >
                        {copied === str ? (
                          <Check className="w-4 h-4 text-green-500" />
                        ) : (
                          <Copy className="w-4 h-4 text-gray-500" />
                        )}
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RandomStringGenerator