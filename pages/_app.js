import Footer from '../components/Footer'
import Navigation from '../components/Navigation'
import '../styles/globals.css'
import { motion } from 'framer-motion';
import { SessionProvider } from "next-auth/react"

function MyApp({ Component, pageProps, router }) {
  return (
    <SessionProvider session={pageProps.session}>
      <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" exit="pageExit" variants={{
        pageInitial: {
          opacity: 0
        },
        pageAnimate: {
          opacity: 1
        },
        pageExit: {
          backgroundColor: 'white',
          filter: `invert()`,
          opacity: 0
        }
      }}>
        <div className='bg-gray-200 font-mono'>
          <Navigation />
          <Component {...pageProps} />
          <Footer />
        </div>
      </motion.div>
    </SessionProvider>
  )
}

export default MyApp
