import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Menu from './component/Menu'
import Home from './component/Home'
import Ex1 from './component/Ex1'
import Ex2 from './component/Ex2'
import Pnf from './component/Pnf'

function App(props) {
    return (
        <BrowserRouter>
            <Menu/>
            <Routes>
                <Route path={`/`} element={<Home/>} />
                <Route path={`/ex1`} element={<Ex1/>} />
                <Route path={`/ex2`} element={<Ex2/>} />
                <Route path={`/*`} element={<Pnf/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App