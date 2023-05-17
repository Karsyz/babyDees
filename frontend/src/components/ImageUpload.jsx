import { useState, useRef } from 'react'
import { Form, redirect } from 'react-router-dom'
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import axios from 'axios'

export const imageUploadAction = async ({ request }) => {
  const data = await request.formData()
  const submission = {
    file: data.get('selectedFile'),
    imageAlt: data.get('imageAlt')
  }
  axios.post('http://localhost:5000/api/images', submission, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.error(err)
    });

  return redirect('/')
}

export default function ImageUpload() {
  const [imageAlt, setImageAlt] = useState("")
  const [selectedFile, setSelectedFile] = useState("")
  const [fileError, setFileError] = useState("")
  const [imgOutput, setImgOutput] = useState("")
  const [randKey, setRandKey] = useState(Math.random().toString(36))

  function handleFile(file) {
    setFileError("")
    if (file.size > 10485760) {
      setFileError("File size cannot exceed more than 10MB")
      setRandKey(Math.random().toString(36))
    } else {
      setImgOutput(URL.createObjectURL(file))
    }
  }

  return (
    <div className="relative self-center sm:w-3/4 max-w-3xl p-8 mb-8 mx-2 sm:mx-8 z-40 bg-babyDeesBG-turq rounded-2xl">
      <Form
        method="post"
        encType="multipart/form-data"
        action="/images"
      >
        <div className="">

          <h2 className="text-2xl font-semibold leading-7 text-gray-900 mb-6">Image Uploader</h2>
          <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="col-span-full">
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="flex flex-col items-center">
                  {imgOutput === ""
                    ? <PhotoIcon className="mx-auto h-64 w-64 text-babyDeesBG-comp" aria-hidden="true" />
                    : <img className="mx-auto h-64 w-64 text-babyDeesBG-comp" src={imgOutput}></img>
                  }
                  <div className="my-4 flex text-sm leading-6 text-gray-600">
                    <input
                      key={randKey}
                      type="file"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                      id="selectedFile"
                      name="selectedFile"
                      onChange={(e) => handleFile(e.target.files[0])}
                    />
                  </div>
                  {/* <p className="text-gray-900">or drag and drop</p> */}
                  <p className="text-xs text-gray-600">PNG, JPG, GIF up to 10MB</p>
                  <p className="h-4 font-xl font-bold text-red-500">{fileError}</p>
                </div>
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="imageAlt" className="block text-sm font-medium leading-6 text-gray-900">
                Description
              </label>
              <div className="mt-2">
                <textarea
                  id="imageAlt"
                  name="imageAlt"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e) => setImageAlt(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
            Cancel
          </button>
          <button
            type="submit"
            value="upload"
            className="rounded-md bg-babyDeesBG-red px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          // onClick={submitForm}
          >
            Upload
          </button>
        </div>
      </Form>

    </div>

  )
}