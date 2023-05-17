import { useLoaderData } from 'react-router-dom'

export const imageIndexLoader = async () => {
  const res = await fetch('http://localhost:5000/api/images')
  const json = res.json()
  console.log(json)
  return json
}

export default function GetImages() {
  const images = useLoaderData()

  return (
    <div className="relative self-center p-8 m-2 sm:m-8 pt-6 bg-babyDeesBG-turq z-30 rounded-2xl">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Uploaded Images</h2>
      <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 xl:gap-x-8">

        {images.map((image, key) => (
        //  <div className='bg-white p-4 rounded-xl'>
          <a key={key} href={image.imageSrc} className="group">
            <div className="w-full overflow-hidden rounded-lg bg-gray-200 ">
              <img
                src={image.imageSrc}
                alt={image.imageAlt}
                className="h-full w-full object-cover object-center group-hover:opacity-75"
              />
            </div>
            {/* <h3 className="mt-4 text-sm text-gray-700">Description</h3>
            <p className="mt-1 text-lg font-medium text-gray-900">{image.imageAlt}</p> */}
          </a>
          // </div>
        ))}

      </div>
    </div>  
  )
}