import { HashRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { PlacePage } from './pages/PlacePage'

// HashRouter keeps every entry shareable on a plain static host — no server
// rewrite needed. /#/place/little-limestone-lake just works, anywhere.
export default function App() {
  return (
    <HashRouter>
      <div className="min-h-screen bg-stone-50 text-stone-900">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/place/:slug" element={<PlacePage />} />
        </Routes>
      </div>
    </HashRouter>
  )
}
