import Footer from '../components/Footer'
import Navigation from '../components/Navigation'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className='bg-gray-50'>
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default MyApp
