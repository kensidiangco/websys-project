import Head from 'next/head'
import Image from 'next/image'
import React from 'react'

function CSS() {
  return (
    <>
      <Head>
        <title>Cheatsheet | CSS</title>
      </Head>
      <div className="smooth-scroll" id="top">
        <Image src="/css-cheatsheet.png" width={90} height={380} layout="responsive" />
      </div>
    </>
  )
}

export default CSS