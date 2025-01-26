import Footer from '../components/Footer';
import Events from '../components/Events';
import FullWidthImage from '../components/FullWidthImage';
import PageHeader from '../components/PageHeader';
import Gallery from '../components/Gallery';


const Galleries = () => {
  const headerData = {
    backgroundImage: 'https://res.cloudinary.com/dzr3drmyk/image/upload/v1737884600/college_h6vny9.jpg',
    title: 'Gallery',
    subtitle: 'Learn more about our mission and values',
    buttonText: ''
  };

  return (
    <>
    <PageHeader  {...headerData} />
      <Events />
       <Gallery />
      <FullWidthImage />
      <Footer />
    </>
  );
};

export default Galleries;
