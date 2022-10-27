import Head from 'next/head';
import Image from 'next/Image';
import Link from 'next/link';
import React from 'react';

function ELearning() {
  return (
    <>
      <Head>
        <title>E-Learning</title>
      </Head>
      <div className="min-h-half-screen flex flex-col p-8">
        <div className="flex">
          <p className="text-2xl font-bold p-2 sm:bg-blue-700 sm:text-white rounded-xl">
            CheatSheets
          </p>
        </div>
        <div className="flex justify-center items-center flex-wrap gap-6 px-4 font-bold">
          
          <Link href="/cheatsheet/Python" passHref>
            <div className="p-2 rounded-md shadow-md flex flex-col gap-2 cursor-pointer hover:shadow-xl transition transition-delay-1 bg-white">
              <Image className="rounded-md" src="/python.png" width={100} height={120}/>
              <p className="text-md">Python CheatSheet</p>
            </div>
          </Link>

          {/* <Link href="/cheatsheet/Java" passHref>
            <div className="p-2 rounded-md shadow-md flex flex-col gap-2 cursor-pointer hover:shadow-xl transition transition-delay-1 bg-white">
              <Image className="rounded-md" src="/java.png" width={100} height={120}/>
              <p className="text-md">Java CheatSheet</p>
            </div>
          </Link>

          <Link href="/cheatsheet/CPP" passHref>
            <div className="p-2 rounded-md shadow-md flex flex-col gap-2 cursor-pointer hover:shadow-xl transition transition-delay-1 bg-white">
              <Image className="rounded-md" src="/cpp.png" width={100} height={120}/>
              <p className="text-md">C++ CheatSheet</p>
            </div>
          </Link> */}

          <Link href="/cheatsheet/HTML" passHref>
            <div className="p-2 rounded-md shadow-md flex flex-col gap-2 cursor-pointer hover:shadow-xl transition transition-delay-1 bg-white">
              <Image className="rounded-md" src="/html.png" width={100} height={120}/>
              <p className="text-md">HTML CheatSheet</p>
            </div>
          </Link>

          <Link href="/cheatsheet/CSS" passHref>
            <div className="p-2 rounded-md shadow-md flex flex-col gap-2 cursor-pointer hover:shadow-xl transition transition-delay-1 bg-white">
              <Image className="rounded-md" src="/css.png" width={100} height={120}/>
              <p className="text-md">CSS CheatSheet</p>
            </div>
          </Link>
            
          <Link href="/cheatsheet/JS" passHref>
            <div className="p-2 rounded-md shadow-md flex flex-col gap-2 cursor-pointer hover:shadow-xl transition transition-delay-1 bg-white">
              <Image className="rounded-md" src="/js.png" width={100} height={140}/>
              <p className="text-md">JavaScript CheatSheet</p>
            </div>
          </Link>
        
        </div>
      </div>
      <div className="min-h-half-screen flex flex-col p-8 gap-6">
      <div className="flex">
          <p className="text-2xl font-bold p-2 sm:bg-blue-700 sm:text-white rounded-xl">
            Code Playground
          </p>
        </div>
        <div className="flex justify-center items-center flex-wrap gap-6 px-4 font-bold">
          <Link href="/ELearning/WebBuilder" passHref>
            <div className="p-2 rounded-md shadow-md flex flex-col gap-2 cursor-pointer hover:shadow-xl transition transition-delay-1 bg-white">
              <Image className="rounded-md" src="/htmlcssjs.png" width={100} height={150}/>
                <span>
                  HTML, CSS, JS Playground
                </span>
            </div>
          </Link>
          {/* <Link href="/ELearning/PythonCodeEditor" passHref>
            <div className="p-2 rounded-md shadow-md flex flex-col gap-2 cursor-pointer hover:shadow-xl transition transition-delay-1 bg-white">
              <Image className="rounded-md" src="/python.png" width={100} height={120}/>
              <p>Python Playground</p>
            </div>
          </Link>
          <div className="p-2 rounded-md shadow-md flex flex-col gap-2 cursor-pointer hover:shadow-xl transition transition-delay-1 bg-white">
            <Image className="rounded-md" src="/java.png" width={100} height={120}/>
            <p>Java Playground</p>
          </div>
          <div className="p-2 rounded-md shadow-md flex flex-col gap-2 cursor-pointer hover:shadow-xl transition transition-delay-1 bg-white">
            <Image className="rounded-md" src="/cpp.png" width={100} height={120}/>
            <p>C++ Playground</p>
          </div> */}
        </div>
      </div>
    </>
  )
}

export default ELearning