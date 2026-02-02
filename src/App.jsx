import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { DarkModeProvider } from './context/DarkModeContext'
import Layout from './components/Layout'

// শুধু কয়েকটি পেইজ ইম্পোর্ট করুন
import Home from './pages/Home'

function App() {
  return (
    <DarkModeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Layout>
      </Router>
    </DarkModeProvider>
  )
}

export default App