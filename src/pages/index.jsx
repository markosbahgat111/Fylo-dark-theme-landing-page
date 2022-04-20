import Footer from 'components/footer/footer.components'
import Navbar from 'components/navbar/navbar.components'
import SectionOne from 'components/sectionOne/sectionOne.components'
import SectionThree from 'components/sectionThree/sectionThree.components'
import SectionTwo from 'components/sectionTwo/sectionTwo.component'
import Testimonial from 'components/testimonialSection/testimonial.components'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>FYLO Dark Theme Landing Page</title>
        <meta name="description" content="Coded by Markos Bahgat" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>

      <main className={styles.main}>
        <Navbar />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <Testimonial />
        <Footer/>
      </main>
    </>
  )
}
