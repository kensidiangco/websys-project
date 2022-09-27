import Head from 'next/head'
import Image from 'next/image'
import React from 'react'

function JS() {
  return (
    <>
      <Head>
        <title>Cheatsheet | JavaScript</title>
      </Head>

      <div className="smooth-scroll p-12" id="top">
        <Image src="/js-cheatsheet.png" width={90} height={130} layout="responsive" />
      </div>
    </>
  )
}

export default JS