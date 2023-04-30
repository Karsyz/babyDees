const categories = [
  {
    id: 1,
    name: 'Quilts',
    href: '#',
    imageSrc: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81YTpYV35HL.jpg',
    imageAlt: "Quilts Collection",
    description: 'The rest of the house will still be a mess, but your desk will look great.',
  },
  {
    id: 2,
    name: 'Slippers',
    href: '#',
    imageSrc: 'https://cdn.shopify.com/s/files/1/0373/0925/products/website_product_baby_vs2-009.jpg?v=1624912403',
    imageAlt: "Slippers Category",
    description: 'The rest of the house will still be a mess, but your desk will look great.',
  },
  {
    id: 3,
    name: 'Wash Cloths',
    href: '#',
    imageSrc: 'https://www.crochet365knittoo.com/wp-content/uploads/2021/06/crochet-washcloth-pattern-folded.jpg',
    imageAlt: "Quilts Collection",
    description: 'The rest of the house will still be a mess, but your desk will look great.',
  },
  {
    id: 4,
    name: 'Baby Gift Kits',
    href: '#',
    imageSrc: 'https://cdn.shopify.com/s/files/1/0976/2276/products/1A3A6853_1445x.jpg?v=1584909011',
    imageAlt: "Quilts Collection",
    description: 'The rest of the house will still be a mess, but your desk will look great.',
  },
  {
    id: 5,
    name: 'Bags',
    href: '#',
    imageSrc: 'https://i.etsystatic.com/12903630/r/il/bfba2a/2517062385/il_fullxfull.2517062385_4otm.jpg',
    imageAlt: "Quilts Collection",
    description: 'The rest of the house will still be a mess, but your desk will look great.',
  },
]


export default function Categories() {
  return (
    <>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 ">
        
        {/* This area to be used for products navigation tree */}
        {/* <h2 className="text-gray-900 font-semibold">Products</h2> */}

        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8 overflow-hidden">

          {categories.map((category) => (
            <div
              key={category.id}
              className="relative flex flex-col rounded-lg overflow-hidden"
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
                  <a href={category.href}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {category.name}
                  </a>
                </h3>
                <p className="text-sm text-gray-500">{category.description}</p>
                <div className="flex flex-1 flex-col justify-end">
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
