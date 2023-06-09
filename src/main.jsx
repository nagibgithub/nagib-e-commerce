import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import Shop from './components/Shop/Shop';
import Home from './components/Layout/Home';
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/inventory';
import Login from './components/Login/Login';
import cartProductsLoader from './loaders/cartProductsLoaders';
import SignUp from './components/SignUp/SignUp';
import ProductDetails from './components/Product/ProductDetails';
import App from './App';
import AuthProvider from './components/Provider/AuthProvider';
import CheckOut from './components/CheckOut/CheckOut';
import PriveRoute from './components/PrivateRoute/PriveRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'shop',
        element: <Shop></Shop>
      },
      {
        path: 'Orders',
        element: <Orders></Orders>,
        loader: cartProductsLoader
      },
      {
        path: 'about',
        element: <Inventory></Inventory>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'signup',
        element: <SignUp></SignUp>
      },
      {
        path: 'product/:productId',
        element: <ProductDetails></ProductDetails>,
        loader: () => fetch('/products.json')
      },
      {
        path: 'check',
        element: <PriveRoute><CheckOut></CheckOut></PriveRoute>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
