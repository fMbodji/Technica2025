import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Landing from './pages/Landing'
import TierSelection from './pages/TierSelection'
import ProjectBuilder from './pages/ProjectBuilder'
import Gallery from './pages/Gallery'
import './styles/globals.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/tier-selection" element={<TierSelection />} />
        <Route path="/project-builder" element={<ProjectBuilder />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  )
}

export default App

