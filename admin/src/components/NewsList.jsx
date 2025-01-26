import { useEffect, useState } from "react";
import axios from "axios";
import { FaBell, FaCalendarAlt, FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";
import EditNews from "./EditNews"; 
import { Circles } from "react-loader-spinner"; 

const NewsList = () => {
  const [news, setNews] = useState([]); // State to store the news list
  const [selectedNews, setSelectedNews] = useState(null); // State for selected news item
  const [loading, setLoading] = useState(true); // Loading state to manage loading indicator

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

  // Handle news deletion
  const handleDelete = async (id) => {
    setLoading(true); // Show loading spinner when deleting
    try {
      await axios.delete(`${import.meta.env.VITE_BASE_URL}/api/news/${id}`);
      setNews(news.filter((item) => item.id !== id)); // Update state after deletion
      toast.success("News deleted successfully!");
    } catch (error) {
      console.error("Error deleting news:", error);
      toast.error("Failed to delete news!");
    } finally {
      setLoading(false); // Hide loading spinner after the operation
    }
  };

  // Handle editing news
  const handleEdit = (item) => {
    setSelectedNews(item); // Set the selected news item
  };

  // Handle going back to the news list
  const handleBack = () => {
    setSelectedNews(null);
  };

  // Render the EditNews component if there's a selected news item
  if (selectedNews) {
    return <EditNews news={selectedNews} onBack={handleBack} onUpdate={setNews} />;
  }

  // Render the loader and news list
  return (
    <div className="ml-[230px] px-4 py-4 bg-gray-900 text-white font-serif"> {/* Decreased width slightly */}
      <h1 className="text-4xl text-center mb-8" style={{ color: "#AEB7C0" }}>
        Notifications
      </h1>

      {/* Show loader if loading */}
      {loading ? (
        <div className="flex justify-center items-center py-8">
          <Circles height="80" width="80" color="#AEB7C0" ariaLabel="loading" />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {news.length > 0 ? (
            news.map((item) => (
              <div
                key={item.id}
                className="bg-gray-700 shadow-lg rounded-lg p-6 flex items-start"
              >
                <div className="flex-shrink-0">
                  <FaBell className="text-purple-500 text-3xl" />
                </div>
                <div className="flex-1 ml-4">
                  <h2
                    className="text-2xl font-semibold mb-2"
                    style={{ color: "#AEB7C0" }}
                  >
                    {item.title}
                  </h2>
                  <p className="text-gray-300 mb-4">{item.content}</p>
                  <div className="flex flex-col space-y-2 text-sm text-gray-400 mb-4">
                    <div className="flex items-center space-x-2">
                      <FaCalendarAlt className="text-blue-500" />
                      <span className="font-semibold">Start Date:</span>
                      <span className="text-blue-300 py-1 px-3 rounded-full">
                        {new Date(item.initialDate).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FaCalendarAlt className="text-red-500" />
                      <span className="font-semibold">End Date:</span>
                      <span className="text-red-300 py-1 px-3 rounded-full">
                        {new Date(item.finalDate).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                  <div className="flex space-x-4">
                    <button
                      onClick={() => handleEdit(item)}
                      className="text-blue-400 hover:text-blue-600 transition-colors"
                    >
                      <FaEdit className="text-2xl" />
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="text-red-400 hover:text-red-600 transition-colors"
                    >
                      <FaTrash className="text-2xl" />
                    </button>
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
