import React from 'react'
import Image from 'next/image'
import Head from 'next/head'

function HTML() {
  return (
    <>
      <Head>
        <title>Cheatsheet | HTML5</title>
      </Head>
      <div className="smooth-scroll" id="top">
        <Image src="/html-cheatsheet.jpg" width={90} height={500} layout="responsive" />
      </div>
    </>
  )
}

export default HTML