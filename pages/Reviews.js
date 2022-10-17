import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import axios from 'axios'
import { useSession } from 'next-auth/react'

function Reviews() {
  const { data: session } = useSession()
  const [reviews, setReviews] = useState()
  const [topic, setTopic] = useState('')
  const [name, setName] = useState(session ? session.user.name : '')
  const [email, setEmail] = useState(session ? session.user.email : '')
  const [message, setMessage] = useState('')

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/reviews/')
    .then(res => {
      setReviews(res.data)
    })
    .catch(err => {
      console.log(err)
    })

  }, [reviews])

  const handleReviewPost = (e) => {
    e.preventDefault()
    axios.post('http://127.0.0.1:8000/api/review/create', {
      topic,
      name,
      email,
      message
    })
    .then(res => {
      console.log(res.data)
      setTopic('')
      setName('')
      setEmail('')
      setMessage('')
    })
    .then(err => {
      console.log(err)
    })
  }

  return (
    <>
      <Head>
        <title>Reviews</title>
      </Head>
      <div className="mx-12 xl:mx-36 flex justify-center items-center xl:pt-6 xl:pb-12">
        <div className="grid grid-cols-1 xl:grid-cols-3 place-items-start gap-6">
          <div className="col-span-2">
            <p className="text-sm text-gray-70 py-4">Popular reviews</p>
            <div className="flex flex-col gap-4">
              {reviews?.map((review, i) => (
                <div key={i} className="flex shadow-md">
                  <div className="flex flex-col items-center py-4 px-1 gap-2 text-sm bg-gray-200 grow">
                    <button className="hover:text-red-500 transition transition-delay-1"></button>
                    <button className="hover:text-red-500 transition transition-delay-1"></button>
                    <button className="hover:text-red-500 transition transition-delay-1"></button>
                  </div>
                  <div className="bg-white rounded-sm p-4 w-full">
                    <p className="text-sm">{review.topic}<span className="float-right text-sm text-gray-600">{review.date_created}</span></p>
                    <p className=""><span className="font-bold">{review.name}</span> <span className="text-sm text-gray-600">| {review.email}</span></p>
                    <p className="ml-2">{review.message}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="xl:sticky xl:top-14">
          <div className="pb-4 w-80 xl:w-96">
              <p className="text-sm text-gray-70 py-4">Review form</p>
              <div className="bg-white rounded-sm">
                <p className="text-gray-70 p-2 px-4 font-bold">Create review</p>

                <form onSubmit={handleReviewPost} className="flex flex-col gap-4 px-4 pb-4">
                  <select 
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className="border p-2 rounded-md bg-gray-200" 
                    required
                  >
                    <option className="" hidden value="">Choose topic...</option>
                    <option className="">Python</option>
                    <option className="">HTML</option>
                    <option className="">CSS</option>
                    <option className="">JavaScript</option>
                    <option className="">Web builder</option>
                    <option className="">Other...</option>
                  </select>

                  <input 
                    type="text" 
                    placeholder="Name" 
                    value={session ? session.user.name : name}
                    onChange={(e) => setName(e.target.value)}
                    className="border p-2 rounded-md bg-gray-200 placeholder:text-gray-600" 
                    required
                  />
                  <input 
                    type="Email" 
                    placeholder="Email" 
                    value={session ? session.user.email : email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border p-2 rounded-md bg-gray-200 placeholder:text-gray-600" 
                    required
                  />
                  <textarea 
                    placeholder="Message..." 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="p-2 bg-gray-200" 
                    rows="12" 
                    cols="50" 
                    maxLength="500"
                    required
                  ></textarea>
                  <input 
                    type="submit" 
                    value="Post" 
                    className="bg-blue-600 hover:bg-blue-500 text-white cursor-pointer p-2 rounded-md"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Reviews