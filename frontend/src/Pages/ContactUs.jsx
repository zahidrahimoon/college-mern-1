import ContactDetails from "../components/ContactDetails";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";

const ContactUs = () => {
  const headerData = {
    backgroundImage: 'https://res.cloudinary.com/dzr3drmyk/image/upload/v1737884600/college_h6vny9.jpg',
    title: 'Contact Us',
    subtitle: 'Contact us for any queries or feedback',
  };
  return (
    <>
    <PageHeader {...headerData} />
    <ContactDetails />
    <ContactForm />
    <Footer />
    </>
  )
};

export default ContactUs;