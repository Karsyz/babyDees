import NavBar from '../components/NavBar'
import Categories from '../components/Categories'
import ProductList from '../components/ProductList'
import Breadcrumbs from '../components/Breadcrumbs'


export default function Products() {
  return (
    <div className='mt-16 h-screen'>
      <NavBar />
      <Breadcrumbs /> 

      {/* Background Image */}
      <div className="fixed w-screen flex flex-row justify-center content-center calcHeight bg-babyDeesBG" >
        <img src="/bdLogoComp.png" alt="Baby Dees Logo" className='object-contain drop-shadow-bdLogo w-3/5 max-w-screen-sm z-0'></img>
      </div>

      {/* Content Container */}
      <div className='absolute top-6 w-full bg-transparent overflow-hidden'>
        <div className='flex flex-col justify-center'>
          <Categories />
          {/* <ProductList /> */}
        </div>
      </div>

    </div>
  );
}