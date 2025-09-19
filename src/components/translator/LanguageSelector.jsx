import React from 'react'
import { LANGUAGES } from '../../utils/constants'

const LanguageSelector = ({ value, onChange, placeholder }) => {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="input-field"
    >
      <option value="" disabled>
        {placeholder}
      </option>
      {LANGUAGES.map((lang) => (
        <option key={lang.code} value={lang.code}>
          {lang.name}
        </option>
      ))}
    </select>
  )
}

export default LanguageSelector