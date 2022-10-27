import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {/* <div className={`${styles.indexContent} h-screen`}>
        <div className="flex flex-col gap-4 md:gap-16 justify-center items-center py-16">
          <div className="p-4 rounded-xl shadow-xl text-center backdrop-blur-xl text-white border">
            <p className={`${styles.text} text-6xl md:text-8xl font-bold`}>E-Learning</p>
            <p className={`${styles.text} text-6xl md:text-8xl font-bold`}>BSIT</p>
          </div>

          <div className="text-center">
            <Link href="/ELearning" passHref>
              <p className={`text-5xl font-bold cursor-pointer backdrop-blur-xl hover:backdrop-blur-lg p-4 rounded-xl shadow-xl  text-white ${styles.text} border`}>Start Learning</p>
            </Link>
          </div>
        </div>
      </div> */}
      <div className="grid grid-cols-2 place-items-center px-12 h-screen">

            <div className="ml-52 flex gap-8 flex-col">
              <span>
                <p className="text-6xl font-bold">Computer Programming E-Learning System</p>
                <p className="text-xl pt-2 text-gray-600">Let us commit in deep learnings</p>
              </span>
                <Link href="/ELearning" passHref>
                  <p className="cursor-pointer text-center bg-gray-600 hover:bg-gray-500 text-white transition transition-delay-1 shadow-xl font-bold rounded-md py-2">Start Learning</p>
                </Link>
            </div>

            <div>
              <Image src="/man_with_laptop_illustration.svg" width={550} height={550} />
            </div>

      </div>
    </>
  )
}
