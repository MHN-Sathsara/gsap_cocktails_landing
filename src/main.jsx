import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { gsap } from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";

// Register the plugin
gsap.registerPlugin(CSSPlugin);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
