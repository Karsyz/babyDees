import { Outlet, useLoaderData, useParams } from 'react-router-dom'

export const productCategoryLoader = async ({ params }) => {
  const { category } = params
  const res = await fetch(`http://localhost:5000/api/products/${category}`)
  return res.json()
}

export default function ProductCategory() {
  const { category, products } = useLoaderData()

  return (


    <div className="mx-auto max-w-2xl px-4 pb-8 sm:px-6 lg:max-w-7xl lg:px-8 ">
      <h2 className="relative text-gray-900 text-2xl font-semibold my-4
      ">{category}</h2>
      <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8 overflow-hidden">

        {products.map((product, key) => (
          <div
            key={key}
            className="relative flex flex-col rounded-lg border border-gray-200 overflow-hidden"
          >
            <div className="aspect-h-4 aspect-w-3 sm:aspect-none sm:h-96">
              <img
                src={product.imageSrc}
                alt={product.imageAlt}
                className="h-full w-full object-cover object-center sm:h-full sm:w-full"
              />
            </div>
            <div className="flex flex-1 flex-col space-y-2 p-4 bg-white">
              <h3 className="text-sm font-medium text-gray-900">
                <a href={`/${category}/${product.productNumber}`}>
                  <span aria-hidden="true" className="absolute inset-0" />
                  {product.name}
                </a>
              </h3>


              <p className="text-sm text-gray-500">{product.description}</p>
              <div className="flex flex-1 flex-col justify-end">
                <p className="text-sm italic text-gray-500">{product.options}</p>
                <p className="text-base font-medium text-gray-900">${Number.parseFloat( (product.price - 1) / 100 ).toFixed(2)}</p>
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>

  );
}

