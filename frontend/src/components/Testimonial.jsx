import React from 'react'
import { useState, useEffect } from 'react'

export default function Testimonial() {

  const reviews = [
    {
      id: 1,
      reviewerName: 'Nami McNamerson',
      reviewText: 'Product 1 Name Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam tempora omnis maiores fuga nulla dignissimos minus! Sed hic necessitatibus iure, veniam tenetur quos nihil omnis!',
      reviewedProductId: 'poasdf098asd0f98sdf0a78sdf097asd',
      reviewedProductName: 'Product 1 Name',
      reviewedImageSrc: 'https://cdn.shopify.com/s/files/1/0373/0925/products/website_product_baby_vs2-009.jpg?v=1624912403',
    },
    {
      id: 2,
      reviewerName: 'Sally Namer',
      reviewText: 'Product 2 Name Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam tempora omnis maiores fuga nulla mcessitatibus iure, veniam tenetur quos nihil omnis!',
      reviewedProductId: 'poasdf098asd0f98sdf0a78sdf097asd',
      reviewedProductName: 'Product 2 Name',
      reviewedImageSrc: 'https://knitmuch.com/wp-content/uploads/anptrhwithloveslippers2162_122099_q_o.jpg',
    },
    {
      id: 3,
      reviewerName: 'Quilty McQuiltface',
      reviewText: 'Product 3 Namdi omnis maiores fuga nulla dignissimos minus! Sed hic necessitatibus iure, veniam tenetur quos nihil omnis!',
      reviewedProductId: 'poasdf098asd0f98sdf0a78sdf097asd',
      reviewedProductName: 'Product 3 Name',
      reviewedImageSrc: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81YTpYV35HL.jpg',
    },
    {
      id: 4,
      reviewerName: 'Quilty McQuiltface',
      reviewText: 'Productibus iure, veniam tenetur quos nihil omnis!',
      reviewedProductId: 'poasdf098asd0f98sdf0a78sdf097asd',
      reviewedProductName: 'Product 4 Name',
      reviewedImageSrc: 'https://cdn.shopify.com/s/files/1/0976/2276/products/1A3A6853_1445x.jpg?v=1584909011',
    },
    {
      id: 5,
      reviewerName: 'Quilty McQuiltface',
      reviewText: 'Product 5 Name Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam tempora omnis maiores fuga nullur quos nihil omnis!',
      reviewedProductId: 'poasdf098asd0f98sdf0a78sdf097asd',
      reviewedProductName: 'Product 5 Name',
      reviewedImageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShRx9rDsPhLbEPaXclY0VSGECehfYvBzfrCZRv2b1AYPUD3SY6gzoc8ulvk0qrujPy63I&usqp=CAU',
    },

  ]

  let timer
  const [revCount, setRevCount] = useState(1)
  const [revProd, setRevProd] = useState({
      reviewerName: reviews[0].reviewerName,
      reviewerText: reviews[0].reviewText,
      productId: reviews[0].reviewedProductId,
      productName: reviews[0].reviewedProductName,
      productImageSrc: reviews[0].reviewedImageSrc,
  })

  function updateCount() {
    timer = setInterval(() => {
      setRevCount(prevCount => prevCount + 1)
      setRevProd({
        reviewerName: reviews[revCount].reviewerName,
        reviewerText: reviews[revCount].reviewText,
        productId: reviews[revCount].reviewedProductId,
        productName: reviews[revCount].reviewedProductName,
        productImageSrc: reviews[revCount].reviewedImageSrc,
      })
    }, 7000);
    if (revCount === reviews.length) {
      // clearInterval(timer)
      setRevCount(0)
    }
  }  
  
  useEffect(()=> {
    updateCount()
    return () => clearInterval(timer)
  },[revCount])

  // console.log('page reload')


  return (
    // full page div
    // fade and animate in out left right
    // maybe change the animation to fade in fade out and z movement witin the container
    <section className="flex flex-row justify-center mb-16 mt-16">
      <div className="lg:max-w-7xl">
        {/* {reviews.map((rev) => ( */}
          <div className="flex flex-col lg:flex-row justify-center h-full bg-babyDeesBG-turq border-gray-200 mx-10 rounded-3xl lg:p-16 gap-0 lg:gap-10 md:p-10" key={revCount}>
            <div className="shrink-0 self-center p-6">
              <img src={revProd.productImageSrc} alt="blank" className="w-80 h-80 rounded-3xl lg:w-100 sm:m-6 animate-reviewFade" />
            </div>
            <div className="relative lg:w-7/12 p-6 self-center">
              <img src="/quotes.svg" alt="blank" className="absolute zindex-10 left-3 animate-reviewFade" />
              <p className="text-black lg:text-4xl md:text-3xl text-2xl font-semibold relative zindex-20 mt-10 mb-8 w-100 animate-reviewFade">
                {revProd.reviewerText}
              </p>
              <h5 className="text-black md:text-2xl text-xl font-semibold animate-reviewFade">{revProd.reviewerName}</h5>
              <h6 className="text-black md:text-2xl text-xl animate-reviewFade">{revProd.productName}</h6>
            </div>
          </div>
        {/* ))} */}
      </div>
    </section>
  )
}

// {collection.map((collection) => (
//   <div key={collection.id} className="relative rounded-md bg-gradient-to-b from-babyDeesBG-text to-babyDeesBG-comp">
//       <a href={collection.href}>
//         <img
//           src={collection.imageSrc}
//           alt={collection.imageAlt}
//           className="h-full w-full object-cover object-center lg:h-full lg:w-full"
//         />
//         <h3 className="inline-block absolute inset-x-0 bottom-0 mb-10 sm:mb-3 md:mb-5 lg:mb-3 text-center text-2xl font-bold tracking-wide text-white">
//           {collection.name}
//           </h3>
//     </a>
//   </div>
// ))}