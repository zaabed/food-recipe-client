import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Main from './layout/Main.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Banner from './components/pages/Home/Banner/Banner';
import AboutUs from './components/pages/AboutUs/AboutUs';
import FAQ from './components/pages/FAQ/FAQ';
import ContactUs from './components/pages/Contact Us/ContactUs';
import Registration from './components/registration&login/Registration/Registration';
import Login from './components/registration&login/Login/Login';
import AuthProvider from './providers/AuthProvider';
import ChefRecipes from './components/pages/Home/ChefRecipes/ChefRecipes';
// import Chef from './components/pages/Home/Chef/Chef';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Banner></Banner>,
        loader: () => fetch('http://localhost:5000/chefDetails')
      },
      {
        path: ':id',
        element: <ChefRecipes></ChefRecipes>,
        loader: ({ params }) => fetch(`http://localhost:5000/chefDetails/${params.id}`)
      },
      {
        path: '/aboutUs',
        element: <AboutUs></AboutUs>
      },
      {
        path: '/faq',
        element: <FAQ></FAQ>
      },
      {
        path: '/contactUs',
        element: <ContactUs></ContactUs>
      },
      {
        path: '/register',
        element: <Registration></Registration>
      },
      {
        path: '/login',
        element: <Login></Login>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
