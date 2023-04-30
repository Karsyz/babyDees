import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'

// Pages
import LandingPage from './pages/LandingPage'
import Products from './pages/products'
import AboutUs from './pages/AboutUs'
import Checkout from './pages/checkout'
import CreateAccount from './pages/createAccount'
import SignIn from './pages/signIn'
import Account from './pages/account'
import PaymentReview from './pages/paymentReview'
import PaymentSuccess from './pages/paymentSuccess'
import PaymentFailure from './pages/paymentFailure'
import NotFound from './pages/NotFound'

// Layouts
import RootLayout from './Layouts/RootLayout'

//Components
import ProductList from './components/ProductList'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<LandingPage />} />
      <Route path='account' element={<Account />} />
      <Route path='signIn' element={<SignIn />} />
      <Route path='aboutUs' element={<AboutUs />} />
      <Route path='checkout' element={<Checkout />} />
      <Route path='createAccount' element={<CreateAccount />} />
      <Route path='paymentReview' element={<PaymentReview />} />
      <Route path='paymentSuccess' element={<PaymentSuccess />} />
      <Route path='paymentFailure' element={<PaymentFailure />} />
      <Route path='products' element={<Products />} >
        <Route path='Quilts' element={<ProductList />} >
          <Route path='QuiltName' element={<ProductList />} />
        </Route>
      </Route>
      <Route path='*' element={<NotFound />} />
    </Route>
  )
)


export default function App() {

  return (
    <RouterProvider router={router} />
  )
}