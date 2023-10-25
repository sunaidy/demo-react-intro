import React from 'react'
import ReactDOM from 'react-dom/client'
import Square, { App } from './HelloApp'
import { FristApp } from './FirstApp'
import CounterApp from './CounterApp'
import { GitExperApp } from './GitExpertApp'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <FristApp title='Hola Suny'></FristApp>
    <Square></Square>
    <CounterApp value={10}/>
    <GitExperApp/>
  </React.StrictMode>,
)

