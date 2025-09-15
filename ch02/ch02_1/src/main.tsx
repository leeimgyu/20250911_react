import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

// 자바script로 물리적 돔 생성
// const pVirtualDOM = document.createElement('h1')
// pVirtualDOM.innerHTML = "Hello Physical DOM world!"
// document.body.appendChild(pVirtualDOM)

// 리액트로 가상 돔 생성후 물리적 돔에 mounted.
const pVirtualDOM = React.createElement('h1',null, "Hello Virtual DOM world!")
const root = createRoot(document.getElementById("root")!)
root.render(pVirtualDOM)
