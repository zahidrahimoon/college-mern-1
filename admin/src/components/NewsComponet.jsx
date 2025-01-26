import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const NewsComponent = () => {
  const [newsData, setNewsData] = useState({
    title: '',
    content: '',
    initialDate: '',
    finalDate: '',
  });

  const handleChange = (e) => {
    setNewsData({ ...newsData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newsData.title || !newsData.content || !newsData.initialDate || !newsData.finalDate) {
      toast.error('Please fill all fields!');
      return;
    }
    try {
      await axios.post(`${import.meta.env.VITE_BASE_URL}/api/news`, newsData);
      toast.success('News added successfully!');
      setNewsData({ title: '', content: '', initialDate: '', finalDate: '' });
    } catch (error) {
      toast.error('Failed to add news!');
      console.error('Error:', error.response?.data || error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto my-[100px] p-6 rounded-sm shadow-lg border border-gray-700 bg-gray-700 text-white font-playfair">
      <h2 className="text-2xl font-bold text-center mb-6">Add News</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          type="text"
          name="title"
          placeholder="News Title"
          value={newsData.title}
          onChange={handleChange}
          className="w-full p-3 text-gray-200 bg-gray-600 rounded-md"
          required
        />
        <textarea
          name="content"
          placeholder="News Content"
          value={newsData.content}
          onChange={handleChange}
          className="w-full p-3 text-gray-200 bg-gray-600 rounded-md"
          rows="4"
          required
        ></textarea>
        <input
          type="date"
          name="initialDate"
          value={newsData.initialDate}
          onChange={handleChange}
          className="w-full p-3 text-gray-200 bg-gray-600 rounded-md"
          required
        />
        <input
          type="date"
          name="finalDate"
          value={newsData.finalDate}
          onChange={handleChange}
          className="w-full p-3 text-gray-200 bg-gray-600 rounded-md"
          required
        />
        <button
          type="submit"
          className="w-full p-3 bg-purple-600 text-white rounded-md font-semibold"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewsComponent;
