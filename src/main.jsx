import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={ <Home></Home>}/>
      <Route path='/facturas' element={ <Facturas></Facturas>}/>
      <Route path='/productos' element={ <Productos></Productos>}/>
      <Route path='/clientes' element={ <Clienes></Clienes>}/>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
)
