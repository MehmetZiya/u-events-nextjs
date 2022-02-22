import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import styles from '../styles/Layout.module.css'

const Layout = ({ title, keywords, description, children }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
      </Head>

      <Header />
      <div className='container'>{children}</div>
      <Footer />
    </div>
  )
}
Layout.defaultProps = {
  title: 'U Events | Find nearest events',
  description: 'Find the latest and nearest cool events',
  keywords: 'events, party, concert',
}

export default Layout
