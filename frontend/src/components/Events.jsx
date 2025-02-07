import { useEffect, useState } from 'react';
import axios from 'axios';
import { FaCalendarAlt } from 'react-icons/fa';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/events`);
        setEvents(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching events:', error);
        setError('Failed to load events.');
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="bg-white px-4 py-8 font-serif border-black border-t border-b">
      <div className="container mx-auto w-full max-w-screen-xl">
        <h1 className="text-4xl text-center mb-8">Events</h1>
        <div className="flex flex-col items-center">
          <img src='https://res.cloudinary.com/dzr3drmyk/image/upload/v1737884456/decorationone_ksjdfm.png' className="mb-8" alt="Decorative element" />
        </div>
        {loading ? (
          <p className="text-center text-gray-500">Loading events...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : events.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {events.map(({ id, image, title, content }) => (
              <div
                key={id}
                className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 flex flex-col space-y-4"
              >
                {image && (
                  <div className="relative group">
                    <img 
                      src={`https://res.cloudinary.com/dzr3drmyk/image/upload/f_auto,q_auto/v1/${image}`}
                      alt={title}
                      className="w-full h-48 object-cover rounded-md mb-4 filter grayscale group-hover:grayscale-0 transition duration-300 ease-in-out"
                    />
                  </div>
                )}
                <div>
                  <h2 className="text-2xl font-semibold mb-2">{title}</h2>
                  <p className="text-gray-700 mb-4">{content}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No events available</p>
        )}
      </div>
    </div>
  );
};

export default Events;
