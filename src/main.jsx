import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {BrowserRouter} from "react-router-dom" 
import { SessionProvider } from './context/SessionContext'
import { GlobalProvider } from './context/GlobalContext'


ReactDOM.createRoot(document.getElementById('root')).render(
    <SessionProvider>
        <GlobalProvider>
            <BrowserRouter>
                <App />    
            </BrowserRouter>
        </GlobalProvider>
    </SessionProvider>
)
