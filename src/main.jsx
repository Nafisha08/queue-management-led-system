import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Layout from './components/Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Hardware from './components/Hardware/Hardware.jsx'
import Workflow from './components/Workflow/Workflow.jsx'
import Product from './components/Product/Product.jsx'
import Component from "./components/Component/Component.jsx"
import Contact from './components/Contact/Contact.jsx'
import EnquiryForm from './components/Enquiry/EnquiryForm.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />  // Changed from <App /> to <Home />
      },
      {
        path: "home",
        element: <Home />  // Changed from <App /> to <Home />
      },
      {
        path: "About",
        element:<About/>
      },
      {
        path: "Hardware",
        element:<Hardware/>
      },
      {
        path: "Workflow",
        element:<Workflow/>
      },
      {
        path: "Product",
        element: <Product />
      },
      {
        path: "Component",
        element: <Component />
      },
      {
        path: "Contact",
        element: <Contact />
      },
      {
        path: "EnquiryForm",  // Changed from "Enquiry"
        element: <EnquiryForm />
      }
      
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)