import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.tsx'
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
import Profile from './Pages/Profile.tsx';
import Messages from './Pages/Messages.tsx';
import Analytics from './Pages/Analytics.tsx';
import Cart from './Pages/Cart.tsx';
import Saved from './Pages/Saved.tsx';
import Settings from  './Pages/Settings.tsx';

const router = createBrowserRouter(
    createRoutesFromElements(
      <Route >
        <Route path = "/" element = {<Home />} />
        <Route path = "/profile" element = {<Profile />} />
        <Route path = "/messages" element = {<Messages />} />
        <Route path = "/analytics" element = {<Analytics />} />
        <Route path = "/cart" element = {<Cart />} />
        <Route path = "/saved" element = {<Saved />} />
        <Route path = "/settings" element = {<Settings />} />
      </Route>
    )
)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
