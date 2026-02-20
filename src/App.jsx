import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './common/Layout'
import { About } from './pages/About'
import Project from './pages/Project'
import { Contact } from './pages/Contact'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout> <Home /> </Layout>} />
          <Route path="/about" element={<Layout> <About /> </Layout>} />
          <Route path="/projects" element={<Layout> <Project /> </Layout>} />
          <Route path="/contact" element={<Layout> <Contact /> </Layout>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
