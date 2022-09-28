import React from 'react'
import Head from 'next/head'

function Reviews() {
  return (
    <>
      <Head>
        <title>Reviews</title>
      </Head>

      <div className='p-none xl:px-16 xl:py-8 xl:flex justify-center'>
        <div className="p-4 flex flex-col gap-4 w-full">

          <p className="text-3xl font-bold">Reviews:</p>

          <div className="mx-none xl:mx-20 p-4 bg-white rounded-md shadow-md flex flex-col gap-px">
            <span>
              <p className="text-sm text-gray-600">Python review</p>
              <p className="text-sm text-gray-600 float-right">September 26, 2022</p>
              <p className="text-xl font-bold">Poging brutal</p>
            </span>
            <span>
              <p className="text-xl mx-6">This is a sample review for python cheatsheet alk;sdklas ljas kljnaskjd naskjdn kajsn dkjn</p>
            </span>
            <span className="pt-4 flex justify-center items-center">
              <button className="px-4 border">Up</button>
              <button className="px-4 border">Down</button>
            </span>
          </div>

          <div className="mx-none xl:mx-20 p-4 bg-white rounded-md shadow-md flex flex-col gap-px">
            <span>
              <p className="text-sm text-gray-600">HTML review</p>
              <p className="text-sm text-gray-600 float-right">September 21, 2022</p>
              <p className="text-xl font-bold">Poging brutal</p>
            </span>
            <span>
              <p className="text-xl mx-6">This is a sample review for python cheatsheet alk;sdklas ljas kljnaskjd naskjdn kajsn dkjn</p>
            </span>
            <span className="pt-4 flex justify-center items-center">
              <button className="px-4 border">Up</button>
              <button className="px-4 border">Down</button>
            </span>
          </div>
        </div>

        <div className="m-6 xl:m-none bg-white rounded-md p-4 shadow-xl flex flex-col gap-6 max-w-96 w-auto flex-none">
          <p className="text-xl font-bold">Create a review</p>
          <form className="flex flex-col gap-2">
            <select className="border p-2 rounded-md bg-gray-200">
              <option className="" hidden>Choose topic...</option>
              <option className="">Python</option>
              <option className="">HTML</option>
              <option className="">CSS</option>
              <option className="">JavaScript</option>
              <option className="">Web builder</option>
              <option className="">Other...</option>
            </select>
            <input type="text" placeholder="Name" className="border p-2 rounded-md bg-gray-200 placeholder:text-gray-600" />
            <textarea placeholder="Message..." className="p-2 bg-gray-200" rows="12" cols="50" maxLength="500">
            </textarea>
            <input type="button" value="Submit" className="bg-blue-600 text-white cursor-pointer p-2 rounded-md"/>
          </form>
        </div>
      </div>
    </>
  )
}

export default Reviews