import { ChevronRightIcon, HomeIcon } from '@heroicons/react/20/solid'
import { Link } from "react-router-dom";

const page = [
  { name: 'Products', href: '/products', current: true },
  { name: 'Quilts', href: '/products/quilts', current: false },
]


export default function Breadcrumbs() {

  return (
    <nav className="fixed w-screen z-30 bg-babyDeesBG py-4 px-4" aria-label="Breadcrumb">
      <ol role="list" className="flex items-center space-x-1 sm:space-x-4">
        
        <li>
          <div>
            <a href="#" className="text-gray-600 hover:text-babyDeesBG-red">
              <HomeIcon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
              <span className="sr-only">Home</span>
            </a>
          </div>
        </li>

          <li key={page.name}>
            <div className="flex items-center">
              <ChevronRightIcon className="h-5 w-5 flex-shrink-0 text-gray-600 mr-1 sm:mr-4" aria-hidden="true" />
              <a
                href={page.href}
                className="text-sm font-medium text-gray-600 hover:text-babyDeesBG-red"
                aria-current={page.current ? 'page' : undefined}
              >
                {page.name}
              </a>
            </div>
          </li>

      </ol>
    </nav>

    )
  }