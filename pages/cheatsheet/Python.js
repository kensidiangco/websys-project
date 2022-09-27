import Head from 'next/head'
import Image from 'next/image'
import React from 'react'

function Python() {
  return (
    <>
      <Head>
        <title>Cheatsheet | Python</title>
      </Head>
      <div className="smooth-scroll" id="top">
        <Image src="/Python-Cheat-Sheet.png" width={90} height={880} layout="responsive" />
      </div>
    </>
  )
}

export default Python