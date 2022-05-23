import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import reportWebVitals from '~/reportWebVitals'
import '~/index.css'
import { store } from '~/store'
import { SignUp } from '~/pages/SignUp'
import { Login } from '~/pages/Login'
import { Books } from '~/pages/Books'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement as HTMLElement)
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Books />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
