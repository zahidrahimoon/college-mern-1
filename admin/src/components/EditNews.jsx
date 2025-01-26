import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const EditNews = ({ news, onBack }) => {
  const [title, setTitle] = useState(news?.title || "");
  const [content, setContent] = useState(news?.content || "");
  const [initialDate, setInitialDate] = useState(news?.initialDate || "");
  const [finalDate, setFinalDate] = useState(news?.finalDate || "");

  // Inside EditNews component
const handleUpdate = async (updatedItem) => {
  try {
    await axios.put(`${import.meta.env.VITE_BASE_URL}/api/news/${updatedItem.id}`, updatedItem);
    onUpdate(updatedItem); // Pass the updated news item back to the parent
    toast.success("News updated successfully!");
  } catch (error) {
    console.error("Error updating news:", error);
    toast.error("Failed to update news!");
  }
};


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedNews = {
        title,
        content,
        initialDate,
        finalDate,
      };

      // Send the update request
      await axios.put(`${import.meta.env.VITE_BASE_URL}/api/news/${news.id}`, updatedNews);
      toast.success("News updated successfully!");
      onBack(); // Navigate back to the list
    } catch (error) {
      console.error("Error updating news:", error);
      toast.error("Failed to update news.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-gray-800 text-white p-8 rounded-lg w-full sm:w-3/4 md:w-1/2 lg:w-1/3 shadow-xl">
        <h1 className="text-4xl text-center mb-6" style={{ color: "#AEB7C0" }}>
          Edit News
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-sm font-semibold mb-2">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-semibold mb-2">Content</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-semibold mb-2">Start Date</label>
              <input
                type="date"
                value={initialDate}
                onChange={(e) => setInitialDate(e.target.value)}
                className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">End Date</label>
              <input
                type="date"
                value={finalDate}
                onChange={(e) => setFinalDate(e.target.value)}
                className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>
          <div className="flex justify-between mt-6">
            <button
              type="button"
              onClick={onBack}
              className="px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-500 transition duration-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition duration-200"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditNews;
