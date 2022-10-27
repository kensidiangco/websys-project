import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function ELearning() {
  return (
    <>
      <Head>
        <title>E-Learning</title>
      </Head>
      <div className="min-h-half-screen flex flex-col p-8 py-16">

        <div className="flex">
          <p className="text-2xl p-2 font-bold rounded-xl bg-gray-300 shadow-xl">
            CheatSheets
          </p>
        </div>

        <div className="flex justify-center items-center flex-wrap gap-6 px-4">
          
          <Link href="/cheatsheet/Python" passHref>
            <div className="p-2 shadow-md flex flex-col gap-2 cursor-pointer hover:shadow-xl transition transition-delay-2 bg-white">
              <Image className="rounded-md" src="/python.png" width={200} height={200}/>
              <span>
                <p className="font-bold">Python CheatSheet</p>
                <p className="text-[14px] text-blue-600">Programming</p>
              </span>
            </div>
          </Link>

          {/* <Link href="/cheatsheet/Java" passHref>
            <div className="p-2 shadow-md flex flex-col gap-2 cursor-pointer hover:shadow-xl transition transition-delay-2 bg-white">
              <Image className="rounded-md" src="/java.png" width={200} height={200}/>
              <p className="">Java CheatSheet</p>
            </div>
          </Link>

          <Link href="/cheatsheet/CPP" passHref>
            <div className="p-2 shadow-md flex flex-col gap-2 cursor-pointer hover:shadow-xl transition transition-delay-2 bg-white">
              <Image className="rounded-md" src="/cpp.png" width={200} height={200}/>
              <p className="">C++ CheatSheet</p>
            </div>
          </Link> */}

          <Link href="/cheatsheet/HTML" passHref>
            <div className="p-2 shadow-md flex flex-col gap-2 cursor-pointer hover:shadow-xl transition transition-delay-2 bg-white">
              <Image className="rounded-md" src="/html.png" width={200} height={200}/>
              <span>
                <p className="font-bold">HTML CheatSheet</p>
                <p className="text-[14px] text-blue-600">Web developing</p>
              </span>
            </div>
          </Link>

          <Link href="/cheatsheet/CSS" passHref>
            <div className="p-2 shadow-md flex flex-col gap-2 cursor-pointer hover:shadow-xl transition transition-delay-2 bg-white">
              <Image className="rounded-md" src="/css.png" width={200} height={200}/>
              <span>
                <p className="font-bold">CSS CheatSheet</p>
                <p className="text-[14px] text-blue-600">Web styling</p>
              </span>
            </div>
          </Link>
            
          <Link href="/cheatsheet/JS" passHref>
            <div className="p-2 shadow-md flex flex-col gap-2 cursor-pointer hover:shadow-xl transition transition-delay-2 bg-white">
              <Image className="rounded-md" src="/js.png" width={200} height={200}/>
              <span>
                <p className="font-bold">JavaScript CheatSheet</p>
                <p className="text-[14px] text-blue-600">DOM Manipulation</p>
              </span>
            </div>
          </Link>
        
        </div>
      </div>
      {/* <div className="min-h-half-screen flex flex-col p-8 gap-6">
        <div className="flex">
          <p className="text-2xl p-2 font-bold rounded-xl bg-gray-300 shadow-xl">
            Code Playground
          </p>
        </div>
        <div className="flex justify-center items-center flex-wrap gap-6 px-4 font-bold">
          <Link href="/ELearning/WebBuilder" passHref>
            <div className="p-2 shadow-md flex flex-col gap-2 cursor-pointer hover:shadow-xl transition transition-delay-2 bg-white">
              <Image className="rounded-md" src="/htmlcssjs.png" width={200} height={200}/>
                <span>
                  HTML, CSS, JS Playground
                </span>
            </div>
          </Link>
          <Link href="/ELearning/PythonCodeEditor" passHref>
            <div className="p-2 shadow-md flex flex-col gap-2 cursor-pointer hover:shadow-xl transition transition-delay-2 bg-white">
              <Image className="rounded-md" src="/python.png" width={200} height={200}/>
              <p>Python Playground</p>
            </div>
          </Link>
          <div className="p-2 shadow-md flex flex-col gap-2 cursor-pointer hover:shadow-xl transition transition-delay-2 bg-white">
            <Image className="rounded-md" src="/java.png" width={200} height={200}/>
            <p>Java Playground</p>
          </div>
          <div className="p-2 shadow-md flex flex-col gap-2 cursor-pointer hover:shadow-xl transition transition-delay-2 bg-white">
            <Image className="rounded-md" src="/cpp.png" width={200} height={200}/>
            <p>C++ Playground</p>
          </div>
        </div>
      </div> */}
    </>
  )
}

export default ELearning