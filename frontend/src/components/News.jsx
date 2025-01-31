import { useEffect, useState } from "react";
import axios from "axios";
import { FaBell, FaCalendarAlt } from "react-icons/fa";
import { toast } from "react-toastify"; 
import { Circles } from "react-loader-spinner"; 

const NewsList = () => {
  const [news, setNews] = useState([]); 
  const [loading, setLoading] = useState(true); 

  // Fetch news list on component mount
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/news`);
        setNews(response.data.news || []); // Ensure data exists before accessing
      } catch (error) {
        console.error("Error fetching news:", error);
        toast.error("Failed to fetch notifications!");
      } finally {
        setLoading(false); // Hide loading spinner once data is fetched
      }
    };

    fetchNews();
  }, []);


  // Render the loader and news list
  return (
    <div className="px-4 py-4 mt-4 text-black"> 

      {/* Show loader if loading */}
      {loading ? (
        <div className="flex justify-center items-center py-8">
          <Circles height="80" width="80" color="purple" ariaLabel="loading" />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2 text-black">
          {news.length > 0 ? (
            news.slice(0, 3).map((item) => (
              <div
                key={item.id}
                className="bg-gray shadow-lg rounded-lg p-6 flex items-start text-black bg-gray-50"
              >
                <div className="flex-shrink-0">
                  <FaBell className="text-purple-500 text-3xl" />
                </div>
                <div className="flex-1 ml-4">
                  <h2
                    className="text-2xl font-semibold mb-2"
                  >
                    {item.title}
                  </h2>
                  <p className= "mb-4">{item.content}</p>
                  <div className="flex flex-col space-y-2 text-sm mb-4">
                    <div className="flex items-center space-x-2">
                      <FaCalendarAlt className="text-blue-500" />
                      <span className="font-semibold">Start Date:</span>
                      <span className="text-blue-500 py-1 px-3 rounded-full">
                        {new Date(item.initialDate).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FaCalendarAlt className="text-red-500" />
                      <span className="font-semibold">End Date:</span>
                      <span className="text-red-500 py-1 px-3 rounded-full">
                        {new Date(item.finalDate).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-400">No notifications available</p>
          )}
        </div>
      )}
    </div>
  );
};

export default NewsList;
