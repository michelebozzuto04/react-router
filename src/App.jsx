import { useState } from 'react'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import AboutPage from './pages/AboutPage'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import DefaultLayout from './layouts/DefaultLayout'
import SingleProductPage from './pages/SingleProductPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>
          <Route path='/' element={<HomePage />} />
          <Route path='/products' element={<ProductsPage />} />
          <Route path='/products/:id' element={<SingleProductPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/404' element={<NotFoundPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>

    </BrowserRouter>
  )
}

export default App
