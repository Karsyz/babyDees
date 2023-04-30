export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-babyDeesBG mt-16">
      <div className="pb-96 lg:pb-48 sm:pb-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg flex flex-col">
            <img src="/bdLogoComp.png" alt="Baby Dees Logo" className='drop-shadow-bdLogo w-100 max-w-screen-sm relative z-0' />
            <h1 className="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              2023 Swaddling kits are ready!
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              We found so many cute fabric patterns and yarn color combinations, you're sure to love the 2023 collection!
            </p>
          </div>
          <div>
            <div className="mt-10">
              <a
                href="/products"
                className="inline-block rounded-md border border-transparent bg-babyDeesBG-turq px-8 py-3 text-center font-medium text-white hover:bg-babyDeesBG-comp"
              >
                Shop Swaddling Kits
              </a>
              {/* Decorative image grid */}
              <div className="absolute transform sm:left-1/2 sm:top-10 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8 mt-10 sm:mt-0 md:mt-10 lg:mt-0">
                <div className="flex items-center space-x-6 lg:space-x-8">
                  <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8 sm:opacity-0 lg:opacity-100">
                    <div className="h-64 w-44 overflow-hidden rounded-lg ease-in-out duration-200 hover:scale-105">
                      <img
                        src="https://cdn.shopify.com/s/files/1/0373/0925/products/website_product_baby_vs2-009.jpg?v=1624912403"
                        alt=""
                        className="h-full w-full"
                      />
                    </div>
                    <div className="h-64 w-44 overflow-hidden rounded-lg ease-in-out duration-200 hover:scale-105">
                      <img
                        src="https://knitmuch.com/wp-content/uploads/anptrhwithloveslippers2162_122099_q_o.jpg"
                        alt=""
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                  </div>
                  <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div className="h-64 w-44 overflow-hidden rounded-lg ease-in-out duration-200 hover:scale-105">
                      <img
                        src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81YTpYV35HL.jpg"
                        alt=""
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="h-64 w-44 overflow-hidden rounded-lg ease-in-out duration-200 hover:scale-105">
                      <img
                        src="https://cdn.shopify.com/s/files/1/0976/2276/products/1A3A6853_1445x.jpg?v=1584909011"
                        alt=""
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="h-64 w-44 overflow-hidden rounded-lg ease-in-out duration-200 hover:scale-105">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShRx9rDsPhLbEPaXclY0VSGECehfYvBzfrCZRv2b1AYPUD3SY6gzoc8ulvk0qrujPy63I&usqp=CAU"
                        alt=""
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                  </div>
                  <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div className="h-64 w-44 overflow-hidden rounded-lg ease-in-out duration-200 hover:scale-105">
                      <img
                        src="https://www.crochet365knittoo.com/wp-content/uploads/2021/06/crochet-washcloth-pattern-folded.jpg"
                        alt=""
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="h-64 w-44 overflow-hidden rounded-lg ease-in-out duration-200 hover:scale-105">
                      <img
                        src="https://www.babycenter.com/ims/2022/01/simple-joys-by-carters-unisex-babies-flannel-blankets-010422.jpg"
                        alt=""
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
