import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
// import 'rsuite/dist/rsuite.min.css';
import "rsuite/dist/rsuite-no-reset.min.css"; 
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./Pages/Home.tsx"

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path = "/" element = {<Home />} />
    )
)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
