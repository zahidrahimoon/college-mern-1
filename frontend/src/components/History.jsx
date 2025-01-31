import { motion } from 'framer-motion';

const History = () => {
  return (
    <div className="md:mx-8 border-b border-t border-black">
      <motion.h1
        className="text-center text-4xl mb-8 mt-8 font-serif"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        History & Background
      </motion.h1>
      <div className="flex flex-col items-center">
        <img src=
        'https://res.cloudinary.com/dzr3drmyk/image/upload/v1737884456/decorationone_ksjdfm.png' className="mb-8" alt="Decoration" />
        <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between w-[80%]">
          <div className="sm:w-full md:w-1/2 p-4">
            <motion.p
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-justify font-sans text-gray-400"
            >
              Our college has a rich history dating back to 1950, when it was founded by a group of visionary educators. Since then, we have been committed to providing high-quality education to students from diverse backgrounds. Over the years, we have evolved to meet the changing needs of the education sector, incorporating innovative teaching methods and state-of-the-art facilities to ensure our students receive a well-rounded education.<br />
              Our faculty comprises experienced professionals and academics who are dedicated to nurturing the next generation of leaders. We take pride in our strong industry connections, which enable us to offer our students opportunities for internships, research collaborations, and career placements.<br />
              At our college, we believe in fostering a culture of inclusivity, diversity, and social responsibility. We encourage our students to engage in community service projects, volunteer work, and extracurricular activities that promote personal growth and civic engagement.
            </motion.p>
          </div>
          <div className="sm:w-full md:w-1/3 p-2 flex justify-center">
            <motion.img
              src='https://res.cloudinary.com/dzr3drmyk/image/upload/v1737884600/college_h6vny9.jpg'
              alt="College Hero"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="max-w-[90%] h-auto rounded-sm shadow-lg transform transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
