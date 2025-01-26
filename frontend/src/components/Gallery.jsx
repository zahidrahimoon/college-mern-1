import MasonryLayout from "./MasonryLayout";

const Gallery = () => {
  const images = [
    { src: 'https://res.cloudinary.com/dzr3drmyk/image/upload/v1737887223/gall3_a7qddx.jpg' },
    { src: 'https://res.cloudinary.com/dzr3drmyk/image/upload/v1737887225/gall1_pdii58.jpg' },
    { src: 'https://res.cloudinary.com/dzr3drmyk/image/upload/v1737887245/gall9_w9nxoe.jpg' },
    { src: 'https://res.cloudinary.com/dzr3drmyk/image/upload/v1737887245/gall9_w9nxoe.jpg' },
    { src: 'https://res.cloudinary.com/dzr3drmyk/image/upload/v1737887231/gall4_vhqyn1.jpg' },
    { src: 'https://res.cloudinary.com/dzr3drmyk/image/upload/v1737887245/gall5_agblgt.jpg' },
    { src: 'https://res.cloudinary.com/dzr3drmyk/image/upload/v1737887251/gall7_cimyc8.jpg' },
    { src: 'https://res.cloudinary.com/dzr3drmyk/image/upload/v1737887244/gal2_zkxmi5.jpg' },
    { src: 'https://res.cloudinary.com/dzr3drmyk/image/upload/v1737887259/gall10_cngfbn.jpg' },
    { src: 'https://res.cloudinary.com/dzr3drmyk/image/upload/v1737887228/gall8_z8pnob.jpg' },
    { src: 'https://res.cloudinary.com/dzr3drmyk/image/upload/v1737887242/gall6_kdracb.jpg' },
    { src: 'https://res.cloudinary.com/dzr3drmyk/image/upload/v1737887242/gall6_kdracb.jpg' },
  ];
  return (
    <>
      <div className="p-6 max-w-full mx-auto w-full bg-gray-100 border-black border-b">
        <h2 className="text-2xl md:text-3xl mb-4 font-serif text-center mt-6">
          Education and Academic Excellence
        </h2>
        <div className="flex flex-col items-center">
          <img src='https://res.cloudinary.com/dzr3drmyk/image/upload/v1737884456/decorationone_ksjdfm.png' className="mb-8 mt-7" alt="Decoration" />
        </div>
        <div className="p-4 text-gray-800 text-center">
          <p className="mb-4">
            Education is the foundation of our institution, and we strive to provide a well-rounded education that prepares students for their future endeavors.
          </p>
          <p>
            Our academic programs are designed to foster critical thinking, creativity, and problem-solving skills. We encourage students to explore their interests and pursue their passions.
          </p>
        </div>

        <MasonryLayout images={images} />
      </div>
    </>
  );
};

export default Gallery;
