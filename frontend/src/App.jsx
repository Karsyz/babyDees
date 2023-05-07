import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'

// Pages
import LandingPage from './pages/LandingPage'
import AboutUs from './pages/AboutUs'
import Checkout from './pages/checkout'
import CreateAccount from './pages/createAccount'
import SignIn from './pages/signIn'
import Account from './pages/account'
import PaymentReview from './pages/paymentReview'
import PaymentSuccess from './pages/paymentSuccess'
import PaymentFailure from './pages/paymentFailure'
import NotFound from './pages/NotFound'


import ProductCategory from './pages/ProductCategory'
import ProductDetail from './pages/ProductDetail'

import ProductIndex, { productIndexLoader } from './pages/ProductIndex'


// Layouts
import RootLayout from './Layouts/RootLayout'
import ProductLayout from './Layouts/ProductLayout'

//Components


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<RootLayout />}>
        <Route index element={<LandingPage />} />
        <Route path='aboutUs' element={<AboutUs />} />
        <Route path='signIn' element={<SignIn />} />
        <Route path='account' element={<Account />} />
        <Route path='checkout' element={<Checkout />} />
        <Route path='createAccount' element={<CreateAccount />} />
        <Route path='paymentReview' element={<PaymentReview />} />
        <Route path='paymentSuccess' element={<PaymentSuccess />} />
        <Route path='paymentFailure' element={<PaymentFailure />} />


        <Route path='products' element={<ProductLayout />} >
          <Route 
            path='categories' 
            element={<ProductIndex />} 
            loader={productIndexLoader} 
            />
          <Route path='categories/:category' element={<ProductCategory />} />
          <Route path='categories/:category/:prodNum' element={<ProductDetail />} />
        </Route>

        <Route path='*' element={<NotFound />} />
      </Route>
    </>
  )
)


export default function App() {
  return (
    <RouterProvider router={router} />
  )
}