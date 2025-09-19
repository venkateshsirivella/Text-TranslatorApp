import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import TextTranslator from './components/translator/TextTranslator'
import RandomStringGenerator from './components/random-generator/RandomStringGenerator'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/translator" element={<TextTranslator />} />
          <Route path="/random-generator" element={<RandomStringGenerator />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App