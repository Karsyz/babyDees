export default function ProductList(props) {
  
  const products = [
    {
      id: 1,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
  
    {
      id: 2,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
    {
      id: 3,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
    {
      id: 4,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
    // {
    //   id: 5,
    //   name: 'Basic Tee',
    //   href: '#',
    //   imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    //   imageAlt: "Front of men's Basic Tee in black.",
    //   price: '$35',
    //   color: 'Black',
    // },
    // {
    //   id: 6,
    //   name: 'Basic Tee',
    //   href: '#',
    //   imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    //   imageAlt: "Front of men's Basic Tee in black.",
    //   price: '$35',
    //   color: 'Black',
    // },
  ]

  return (
    <div className="mx-auto max-w-2xl py-10 px-4 lg:max-w-7xl">
      <div className="bg-babyDeesBG-comp/80 rounded-2xl mx-auto max-w-2xl py-4 px-4 lg:max-w-7xl">

        <h2 className="text-3xl font-bold text-babyDeesBG-text rounded-lg mb-4 mb-2 inline-block">
          {props.category}
        </h2>
        
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 drop-shadow-bdLogo">
          {products.map((product) => (
              <div key={product.id} className="group relative bg">
                <div className="bg-white p-2 border-2 rounded-lg border-white group-hover:border-babyDeesBG-red">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}