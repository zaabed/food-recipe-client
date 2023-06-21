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
import Registration from './components/registration&login/Registration/Registration';
import Login from './components/registration&login/Login/Login';
import AuthProvider from './providers/AuthProvider';
import ChefRecipes from './components/pages/Home/ChefRecipes/ChefRecipes';
import PrivateRoute from './privateRoute/PrivateRoute/PrivateRoute';
import Blogs from './components/pages/Blogs/Blogs';
import NotFound from './components/notFound/NotFound';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Banner></Banner>,
        loader: () => fetch('https://food-recipe-website-server-zaabed.vercel.app/chefDetails')
      },
      {
        path: ':id',
        element: <PrivateRoute><ChefRecipes></ChefRecipes></PrivateRoute>,
        loader: ({ params }) => fetch(`https://food-recipe-website-server-zaabed.vercel.app/chefDetails/${params.id}`)
      },
      {
        path: '/aboutUs',
        element: <AboutUs></AboutUs>
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>
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
  },
  {
    path: '*',
    element: <NotFound></NotFound>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
