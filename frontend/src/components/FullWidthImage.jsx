import { Parallax } from 'react-parallax';

const FullWidthImage = () => {
  return (
    <Parallax
      bgImage='https://res.cloudinary.com/dzr3drmyk/image/upload/v1737885480/milestone3_mjagux.jpg'
      strength={300}
      className="w-full h-[70vh] border-black border-b border-t" // Adjust height as needed
    >
    </Parallax>
  );
};

export default FullWidthImage;
