// import Hero from '../components/Hero.jsx'
import PageHeader from '../components/PageHeader.jsx'
import Footer from '../components/Footer.jsx';
import TimelineSection from '../components/TimelineSection.jsx';
import Quaid from '../components/Quaid.jsx';
import Principal from '../components/Principal.jsx';
import WorkingCommitteeTable from '../components/WorkingCommitteeTable.jsx';
import GetStarted from '../components/GetStarted.jsx';
import FullWidthImage from '../components/FullWidthImage.jsx';

const About = () => {
  const headerData = {
    backgroundImage: 'https://res.cloudinary.com/dzr3drmyk/image/upload/v1737884600/college_h6vny9.jpg',
    title: 'About Us',
    subtitle: 'Learn more about our mission and values',
    buttonText: ''
  };
  return (
    <>
    <div>
      <PageHeader {...headerData} />
      <Quaid />
      <Principal />
      <TimelineSection />
      <WorkingCommitteeTable />
      <GetStarted />
      <FullWidthImage />
      <Footer />
    </div>
    </>
  )
}

export default About