import { Fragment, useState } from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { HashLink as Link } from 'react-router-hash-link'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'

import Cart from '../components/Cart'
import MobileMenu from '../components/MobileMenu'

const navigation = {
  categories: [
  ],
  
  pages: [
    { name: 'Products', href: '/products/categories' },
    { name: 'About Us', href: '/aboutUs' },
    { name: 'Contact', href: '/#contact', },
  ],
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NavBar(props) {
  const [navOpen, setNavOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)

  return (
    <div className="fixed top-0 w-screen z-40">
      <MobileMenu 
        navOpen={navOpen}
        setNavOpen={setNavOpen}
        navigation={navigation} 
      />

      <div className="bg-babyDeesBG-dark">
        <nav aria-label="Top" className="mx-auto max-w-7xl px-8">
          <div className="">
            <div className="flex h-16 items-center">
              <button
                type="button"
                className="rounded-md hover:bg-babyDeesBG p-2 text-gray-400 lg:hidden"
                onClick={() => setNavOpen(true)}
              >
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <a href="/">
                  <span className="sr-only">Baby Dee's Rag Quilt Shoppe</span>
                  <img
                    className="h-8 w-auto"
                    src="/bdPartialLogo.png"
                    alt="Baby Dee's Logo"
                  />
                </a>
              </div>

              {/* Flyout menus */}
              <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="flex h-full space-x-8">
                  {navigation.categories.map((category) => (
                    <Popover key={category.name} className="flex">
                      {({ navOpen }) => (
                        <>
                          <div className="relative flex">
                            <Popover.Button
                              className={classNames(
                                navOpen
                                  ? 'border-indigo-600 text-babyDeesBG-text'
                                  : 'border-transparent text-gray-800 hover:text-babyDeesBG-comp',
                                'relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out'
                              )}
                            >
                              {category.name}
                            </Popover.Button>
                          </div>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Popover.Panel className="absolute z-50 inset-x-0 top-full text-sm text-gray-500">
                              {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                              <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />

                              <div className="relative bg-gradient-to-b from-babyDeesBG-dark to-babyDeesBG-text">
                                <div className="mx-auto max-w-7xl px-8">
                                  <div className="grid grid-cols-2 gap-y-10 gap-x-8 py-16">
                                    <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                      {category.featured.map((item) => (
                                        <div key={item.name} className="group relative text-base sm:text-sm">
                                          <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                            <img
                                              src={item.imageSrc}
                                              alt={item.imageAlt}
                                              className="object-cover object-center"
                                            />
                                          </div>
                                          <a href={item.href} className="mt-6 block font-medium text-gray-900">
                                            <span className="absolute inset-0 z-10" aria-hidden="true" />
                                            {item.name}
                                          </a>
                                          <p aria-hidden="true" className="mt-1">
                                            Shop now
                                          </p>
                                        </div>
                                      ))}
                                    </div>
                                    <div className="row-start-1 grid grid-cols-3 gap-y-10 gap-x-8 text-sm">
                                      {category.sections.map((section) => (
                                        <div key={section.name}>
                                          <p id={`${section.name}-heading`} className="font-medium text-gray-900">
                                            {section.name}
                                          </p>
                                          <ul
                                            role="list"
                                            aria-labelledby={`${section.name}-heading`}
                                            className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                          >
                                            {section.items.map((item) => (
                                              <li key={item.name} className="flex">
                                                <a href={item.href} className="hover:text-babyDeesBG-comp">
                                                  {item.name}
                                                </a>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  ))}

                  {navigation.pages.map((page) => (
                    <Link 
                      key={page.name}
                      to={page.href} 
                      className="flex items-center text-sm font-medium text-gray-700 hover:text-babyDeesBG-comp"
                    >
                      {page.name}
                    </Link>
                    // <a
                    //   key={page.name}
                    //   href={page.href}
                    //   className="flex items-center text-sm font-medium text-gray-700 hover:text-babyDeesBG-comp"
                    // >
                    //   {page.name}
                    // </a>
                  ))}
                </div>
              </Popover.Group>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <a href="/SignIn" className="text-sm font-medium text-gray-800 hover:text-babyDeesBG-comp">
                    Sign in
                  </a>
                  <span className="h-6 w-px bg-babyDeesBG-comp" aria-hidden="true" />
                  <a href="/CreateAccount" className="text-sm font-medium text-gray-800 hover:text-babyDeesBG-comp">
                    Create account
                  </a>
                </div>

                {/* <div className="hidden lg:ml-8 lg:flex">
                  <a href="#" className="flex items-center text-gray-800 hover:text-babyDeesBG-comp">
                    <img
                      src="https://tailwindui.com/img/flags/flag-canada.svg"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-sm font-medium">CAD</span>
                    <span className="sr-only">, change currency</span>
                  </a>
                </div> */}

                {/* Search */}
                <div className="flex lg:ml-6">
                  <a href="#" className="p-2 text-gray-800 hover:text-babyDeesBG-comp">
                    <span className="sr-only">Search</span>
                    <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
                  </a>
                </div>

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <a href="#" className="group -m-2 flex items-center p-2">
                    <ShoppingBagIcon
                      className="h-6 w-6 flex-shrink-0 text-gray-800 group-hover:text-babyDeesBG-comp"
                      aria-hidden="true"
                      onClick={() => setCartOpen(true)}
                    />
                    <span className="ml-2 text-sm font-medium text-gray-800 group-hover:text-babyDeesBG-comp">0</span>
                    <span className="sr-only">items in cart, view bag</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
      
      {/* Shopping Cart */}
      <Cart
        cartOpen={cartOpen}
        setCartOpen={setCartOpen}
      />
    </div>
  )
}