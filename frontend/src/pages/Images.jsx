import BackgroundImage from '../components/BackgroundImage'
import GetImages from '../components/GetImages'
import ImageUploader from '../components/ImageUpload'


export default function Images() {
  return (
    <div className='flex flex-col justify-center w-full'>
      <BackgroundImage />
      <GetImages />
      <ImageUploader />
    </div>

  )
}