import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const milestones = [
  {
    title: 'Milestone 1',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia cupiditate rem aspernatur temporibus aperiam vel saepe quidem necessitatibus dicta optio, repellendus porro similique sequi debitis repellat pariatur libero omnis recusandae veritatis ratione tempora illo. Vitae dolor, in ad cupiditate incidunt maiores accusantium possimus minus! Veritatis voluptas voluptatibus earum magni animi.',
    image: 'https://res.cloudinary.com/dzr3drmyk/image/upload/v1737885479/milestone_gom2mt.jpg',
    link: '/',
  },
  {
    title: 'Milestone 2',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia cupiditate rem aspernatur temporibus aperiam vel saepe quidem necessitatibus dicta optio, repellendus porro similique sequi debitis repellat pariatur libero omnis recusandae veritatis ratione tempora illo. Vitae dolor, in ad cupiditate incidunt maiores accusantium possimus minus! Veritatis voluptas voluptatibus earum magni animi.',
    image: 'https://res.cloudinary.com/dzr3drmyk/image/upload/v1737885480/milestone3_mjagux.jpg',
    link: '/',
  },
  {
    title: 'Milestone 3',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia cupiditate rem aspernatur temporibus aperiam vel saepe quidem necessitatibus dicta optio, repellendus porro similique sequi debitis repellat pariatur libero omnis recusandae veritatis ratione tempora illo. Vitae dolor, in ad cupiditate incidunt maiores accusantium possimus minus! Veritatis voluptas voluptatibus earum magni animi.',
    image: 'https://res.cloudinary.com/dzr3drmyk/image/upload/v1737885480/milestone2_u2dd9r.webp',
    link: '/',
  },
  {
    title: 'Milestone 4',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia cupiditate rem aspernatur temporibus aperiam vel saepe quidem necessitatibus dicta optio, repellendus porro similique sequi debitis repellat pariatur libero omnis recusandae veritatis ratione tempora illo. Vitae dolor, in ad cupiditate incidunt maiores accusantium possimus minus! Veritatis voluptas voluptatibus earum magni animi.',
    image: 'https://res.cloudinary.com/dzr3drmyk/image/upload/v1737885480/milestone1_srlk5d.jpg',
    link: './',
  },
  {
    title: 'Milestone 5',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia cupiditate rem aspernatur temporibus aperiam vel saepe quidem necessitatibus dicta optio, repellendus porro similique sequi debitis repellat pariatur libero omnis recusandae veritatis ratione tempora illo. Vitae dolor, in ad cupiditate incidunt maiores accusantium possimus minus! Veritatis voluptas voluptatibus earum magni animi.',
    image: 'https://res.cloudinary.com/dzr3drmyk/image/upload/v1737885616/milestone4_etgype.jpg',
    link: '/',
  }
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const MilestoneCarousel = () => {
  return (
    <section className="py-12 px-8 bg-gray-100 text-center border-b border-black border-t">
      <h2 className="text-3xl font-serif mb-8">Milestones at a Glance</h2>
      <div className="flex flex-col items-center">
        <img src='https://res.cloudinary.com/dzr3drmyk/image/upload/v1737884456/decorationone_ksjdfm.png' className="mb-8" alt="Decoration" />
      </div>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        showDots={true}
        arrows={false}
        customDot={<CustomDot />}
      >
        {milestones.map((milestone, index) => (
          <div key={index} className="p-2 pb-6 mx-2 shadow-lg rounded-sm bg-white font-serif transform transition-transform hover:scale-105">
            <img src={milestone.image} alt={milestone.title} className="w-full h-48 object-cover rounded-t-lg mb-4" />
            <h3 className="font-semibold text-gray-800 my-2">{milestone.title}</h3>
            <p className="text-gray-600 mb-4 text-[12px]">{milestone.description}</p>
            <a href={milestone.link}>
              <button className="btn-gradient">
                Read More
              </button>
            </a>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

const CustomDot = ({ onClick, ...rest }) => {
  const { onMove, index, active } = rest;
  return (
    <li
      className={`custom-dot ${active ? 'active' : ''}`}
      onClick={() => onClick()}
    >
      <button />
    </li>
  );
};

export default MilestoneCarousel;
