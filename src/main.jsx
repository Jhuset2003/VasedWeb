import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {BrowserRouter} from "react-router-dom" 

import { ActivityProvider, AulaProvider, UserProvider } from './context/GlobalContext'

ReactDOM.createRoot(document.getElementById('root')).render(
    <UserProvider>
      <AulaProvider>
        <ActivityProvider>
        <BrowserRouter>
            <App />    
        </BrowserRouter>
        </ActivityProvider>
      </AulaProvider>
    </UserProvider>
)
