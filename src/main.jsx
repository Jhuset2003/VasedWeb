import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {BrowserRouter} from "react-router-dom" 
import { SessionProvider } from './context/SessionContext'

import { ActivityProvider, AulaProvider } from './context/GlobalContext'

ReactDOM.createRoot(document.getElementById('root')).render(
    <SessionProvider>
      <AulaProvider>
        <ActivityProvider>
        <BrowserRouter>
            <App />    
        </BrowserRouter>
        </ActivityProvider>
      </AulaProvider>
    </SessionProvider>
)
