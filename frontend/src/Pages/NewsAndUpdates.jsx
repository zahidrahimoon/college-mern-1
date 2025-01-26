import News from "../components/News"
import Footer from '../components/Footer'
import Events from "../components/Events"
import PageHeader from '../components/PageHeader'
import Image from '../components/FullWidthImage'
import GetStarted from "../components/GetStarted"


const NewsAndUpdates = () => {
  const headerData = {
    backgroundImage: 'https://res.cloudinary.com/dzr3drmyk/image/upload/v1737884600/college_h6vny9.jpg',
    title: 'News & Updates',
    subtitle: 'Learn more about our mission and values',
  };
  return (
    <>
    <PageHeader {...headerData} />
    <News />
    <GetStarted />
    <Events />
    <Image />
    <Footer />
    </>
  )
}

export default NewsAndUpdates