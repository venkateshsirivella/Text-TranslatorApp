import React from 'react'
import { Copy, Check } from 'lucide-react'

const StringDisplay = ({ text, onCopy, copied }) => {
  return (
    <div className="relative">
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 border-2 border-dashed border-gray-300 dark:border-gray-600">
        {text ? (
          <div className="flex items-center justify-between">
            <span className="font-mono text-lg text-gray-900 dark:text-white break-all flex-1 mr-4">
              {text}
            </span>
            <button
              onClick={onCopy}
              className="flex-shrink-0 p-2 rounded-lg bg-white dark:bg-gray-700 shadow-sm hover:shadow-md transition-all duration-200 border border-gray-200 dark:border-gray-600"
              title="Copy to clipboard"
            >
              {copied ? (
                <Check className="w-5 h-5 text-green-500" />
              ) : (
                <Copy className="w-5 h-5 text-gray-500" />
              )}
            </button>
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-500 dark:text-gray-400 mb-2">
              No string generated yet
            </p>
            <p className="text-sm text-gray-400 dark:text-gray-500">
              Click "Generate New String" to create one
            </p>
          </div>
        )}
      </div>
      
      {text && (
        <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          Length: {text.length} characters
        </div>
      )}
    </div>
  )
}

export default StringDisplay