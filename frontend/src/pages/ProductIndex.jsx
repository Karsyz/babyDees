import { Link, NavLink, useLoaderData } from 'react-router-dom'

export const productIndexLoader = async () => {
  const res = await fetch('http://localhost:5000/api/products/categories')
  const json = res.json()
  console.log(json)
  return json
}

export default function ProductIndex() {
  const categories = useLoaderData()

  return (
    <div className="mx-auto max-w-2xl px-4 pb-8 sm:px-6 lg:max-w-7xl lg:px-8 ">
      <h2 className="relative text-gray-900 text-2xl font-semibold my-4
        ">Product Categories</h2>
      <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8 overflow-hidden">

        {categories.map((category, key) => (
          <Link to={category.categoryCamelCase}>
            <div
              key={key}
              className="relative flex flex-col h-full rounded-lg overflow-hidden"
            >
              <div className="aspect-h-4 aspect-w-3 sm:aspect-none sm:h-96">
                <img
                  src={category.imageSrc}
                  alt={category.imageAlt}
                  className="h-full w-full object-cover object-center sm:h-full sm:w-full"
                />
              </div>
              <div className="flex flex-1 flex-col space-y-2 p-4 bg-white">
                <h3 className="text-sm font-medium text-gray-900">
                  <span aria-hidden="true" className="absolute inset-0" />
                  {category.categoryStdCase}
                </h3>
                <p className="text-sm text-gray-500">{category.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>

  );
}