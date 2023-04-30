import { useEffect, useState } from 'react'


export default function AnnouncementBar(props) {
  const [announcementBar, setAnnouncementBar] = useState({
    isShown: props.isShown,
    text: 'Get free delivery on orders over $100'
  });

  function handleTextChange(event) {
    let {name, value} = event.target
      setAnnouncementBar(prevText => ({
        ...prevText,
        [name]: value
      }))
  }

  function handleClickChange() {
      setAnnouncementBar(prev => ({
        ...prev,
        isShown: !prev.isShown
      }))
  }

  return (
    <>
      {
        !!announcementBar.isShown &&
        <p className="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
          {announcementBar.text}
        </p>
      }
      {/* <button
      className='bg-red-400'
      name='isShown' 
      value='false'
      onClick={handleClickChange}>toggle</button>
      
      <input 
          className='w-1/2'
          type='text' 
          name='text'
          defaultValue={announcementBar.text}
          onChange={handleTextChange} 
        /> */}
    </>
  )
}

