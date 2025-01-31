import {Link} from 'react-router-dom';
const GetStarted = () => {
  return (
    <section className="bg-gray-300 py-10 px-4 font-serif border-black border-t">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Register Now !</h2>
        <p className="text-lg mb-8">Begin your academic journey with us. Our college offers a wide range of undergraduate and graduate programs tailored to equip you with the skills and knowledge needed to succeed in today's fast-paced world.</p>
        <div className="flex justify-center">
            <Link to='https://forms.gle/cxdoBf49455ex6Ld8'>
          <button className="bg-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-600 transition duration-300">
            Register Now
          </button>
            </Link>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
