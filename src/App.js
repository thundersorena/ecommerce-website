import { BrowserRouter } from 'react-router-dom';
import React, { createContext } from 'react';
import { ThemeModeProvider } from './component/RTL';
import Layout from './component/Layout';
import Home from './pages/Home';
import "./assets/css/Fonts.css";
import "./assets/css/custom.css";
function App() {
    return (
        <BrowserRouter>
            <ThemeModeProvider>
                <Home />
            </ThemeModeProvider>
        </BrowserRouter>
    );
}

export default App;
