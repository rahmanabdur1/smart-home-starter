import { createBrowserRouter } from 'react-router-dom'
import Root from '../components/Root';

import Home from '../components/Home'
import About from '../components/About';
import ErrorPage from '../components/ErrorPage';
import Shop from '../components/Shop';
import { productsCartData } from '../loaders/getProduct';
import Cart from '../components/Cart';
const router=createBrowserRouter([
  {
    path: '/',
    element:<Root/>,
    errorElement: <ErrorPage/>,
    loader: productsCartData,
    children: [{
       
        path:'/',
        element:<Home/>,
    },
    {
        path:'/home',
        element:<Home/>
    },
    {
        path:'/about',
        element:<About/>
    },
    {
      path:'/cart',
      element:<Cart/>
    },
       
    {
        path:'/shop',
        element:<Shop/>
    }

]
  }
]);

export default router;