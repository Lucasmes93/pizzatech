import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Menu from './pages/Menu/Menu.jsx'
import Admin from './pages/Admin/Admin'
import Landing from "./pages/Landing/Landing.jsx";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing/>} />
                <Route path="/Menu" element={<Menu />} />
                <Route path="/admin" element={<Admin />} />

            </Routes>
        </BrowserRouter>
    )
}

export default App
