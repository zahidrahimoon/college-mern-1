import { motion } from 'framer-motion';
import { FaUserGraduate, FaBook, FaFlask, FaHandsHelping } from 'react-icons/fa'; 
import SalientFeatureItem from './SalientFeatureItem';

const SalientFeaturesSection = () => {
  return (
    <div className="py-16 bg-gray-100 border-b  border-black">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl text-center mb-8 font-serif"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Salient Features
        </motion.h2>
        <div className="flex flex-col items-center">
          <img src='https://res.cloudinary.com/dzr3drmyk/image/upload/v1737884456/decorationone_ksjdfm.png' className="mb-8" alt="Decoration" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <SalientFeatureItem
            Icon={FaUserGraduate}
            title="Highly Qualified And Experienced Faculty"
            description="Our faculty members are highly qualified and experienced in their respective fields. They are dedicated to providing students with a world-class education and preparing them for successful careers. Additionally, they are always available to guide and mentor students. Their expertise and passion for teaching make them an invaluable asset to our institution."
          />
          <SalientFeatureItem
            Icon={FaBook}
            title="Well Stocked Library"
            description="Our library is well-stocked with a vast collection of books, journals, and online resources. It provides a conducive environment for students to study, research, and explore new ideas. The library is also equipped with modern technology, including computers and printers, to facilitate learning."
          />
          <SalientFeatureItem
            Icon={FaFlask}
            title="Modern Science Labs"
            description="Our science labs are equipped with modern equipment and technology, enabling students to conduct experiments and projects in a safe and controlled environment. The labs are designed to foster hands-on learning and encourage students to explore scientific concepts in a practical way."
          />
          <SalientFeatureItem
            Icon={FaHandsHelping}
            title="Extra Curricular Activities"
            description="We offer a wide range of extracurricular activities, including sports, cultural events, and community service projects. These activities help students develop their skills, build relationships, and become well-rounded individuals. They also provide opportunities for students to showcase their talents and interests outside of academics."
          />
        </div>
      </div>
    </div>
  );
};

export default SalientFeaturesSection;
