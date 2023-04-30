import { ArrowRightIcon } from '@heroicons/react/24/outline'

const collection = [
  {
    id: 1,
    name: 'Quilts',
    href: '#',
    imageSrc: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81YTpYV35HL.jpg',
    imageAlt: "Quilts Collection",
  },
  {
    id: 2,
    name: 'Slippers',
    href: '#',
    imageSrc: 'https://cdn.shopify.com/s/files/1/0373/0925/products/website_product_baby_vs2-009.jpg?v=1624912403',
    imageAlt: "Slippers Category",
  },
  {
    id: 3,
    name: 'Wash Cloths',
    href: '#',
    imageSrc: 'https://www.crochet365knittoo.com/wp-content/uploads/2021/06/crochet-washcloth-pattern-folded.jpg',
    imageAlt: "Quilts Collection",
  },
  {
    id: 4,
    name: 'Baby Gift Kits',
    href: '#',
    imageSrc: 'https://cdn.shopify.com/s/files/1/0976/2276/products/1A3A6853_1445x.jpg?v=1584909011',
    imageAlt: "Quilts Collection",
  },
  {
    id: 5,
    name: 'Bags',
    href: '#',
    imageSrc: 'https://i.etsystatic.com/12903630/r/il/bfba2a/2517062385/il_fullxfull.2517062385_4otm.jpg',
    imageAlt: "Quilts Collection",
  },

]

export default function CollectionsList(props) {
  return (
    <div className="mx-auto max-w-2xl pt-0 mb-16 px-4 lg:max-w-7xl">

      <div className="rounded-md mx-auto max-w-2xl py-4 px-4 lg:max-w-7xl">

        <div className='flex flex-row justify-between'>
          <h2 className="text-3xl font-bold text-gray-900 rounded-lg mb-4 inline-block">Shop Categories</h2>
          <div className='group'>
            <a href="/products">
              <h5 className="font-bold text-babyDeesBG-comp group-hover:text-gray-500 group-hover:cursor-pointer rounded-lg p-2 pb-3 inline-block whitespace-nowrap">Browse all categories
                <ArrowRightIcon
                  className="h-6 w-6 flex-shrink-0 text-babyDeesBG-comp group-hover:text-gray-500 group-hover:cursor-pointer inline-block"
                  aria-hidden="true"
                />
              </h5>
            </a>
          </div>
        </div>

        {/* bg-babyDeesBG-comp/80 */}

        {/* Grid Container */}
        <div className="grid gap-y-12 gap-x-6 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-8">

          {/* collection Cards */}
          {collection.map((collection) => (
            <div key={collection.id} className="relative">
              <a href={collection.href}>
                <img
                  src={collection.imageSrc}
                  alt={collection.imageAlt}
                  className="h-full w-full my-2 object-cover object-center lg:h-full lg:w-full rounded-lg ease-in-out duration-200 hover:scale-105"
                />
                <h3 className="mb-10 sm:mb-3 md:mb-5 lg:mb-3 text-center text-2xl font-bold tracking-wide text-gray-900">
                  {collection.name}
                </h3>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}