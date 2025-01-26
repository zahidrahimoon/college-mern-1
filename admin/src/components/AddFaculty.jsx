import { useEffect, useState } from 'react';
import axios from 'axios';
import { FaUserPlus } from 'react-icons/fa';
import { toast } from 'react-toastify';

const AddFaculty = ({ onFacultyAdded }) => {
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    qualification: '',
    department_name: '',
    image: null,
  });
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    // Fetch department names
    axios.get(`${import.meta.env.VITE_BASE_URL}/api/departments`).then((response) => {
      setDepartments(response.data);
    });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataObj = new FormData();
    for (let key in formData) {
      formDataObj.append(key, formData[key]);
    }
    try {
      await axios.post(`${import.meta.env.VITE_BASE_URL}/api/faculty`, formDataObj);
      toast.success('Faculty added successfully!');
      setFormData({ name: '', title: '', qualification: '', department_name: '', image: null });
      onFacultyAdded();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="mb-8 p-8 shadow-lg rounded-sm bg-gray-800">
      <h1 className="text-4xl mb-8 text-center font-serif text-white">Add New Faculty</h1>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Name"
            className="border border-gray-400 p-3 mb-4 w-full rounded-md bg-gray-700 text-white"
            required
          />
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            placeholder="Title"
            className="border border-gray-400 p-3 mb-4 w-full rounded-md bg-gray-700 text-white"
            required
          />
          <input
            type="text"
            name="qualification"
            value={formData.qualification}
            onChange={handleInputChange}
            placeholder="Qualification"
            className="border border-gray-400 p-3 mb-4 w-full rounded-md bg-gray-700 text-white"
            required
          />
          <select
            name="department_name"
            value={formData.department_name}
            onChange={handleInputChange}
            className="border border-gray-400 p-3 mb-4 w-full rounded-md bg-gray-700 text-white"
            required
          >
            <option value="">Select Department</option>
            {departments.map((dept) => (
              <option key={dept.id} value={dept.name}>
                {dept.name}
              </option>
            ))}
          </select>
          <input
            type="file"
            onChange={handleImageChange}
            className="border border-gray-400 p-3 mb-4 w-full rounded-md bg-gray-700 text-white"
          />
        </div>
        <button
          type="submit"
          className="flex items-center justify-center bg-purple-500 hover:bg-purple-600 text-white p-3 rounded-lg w-full mt-4"
        >
          <FaUserPlus className="mr-2" /> Add Faculty
        </button>
      </form>
    </div>
  );
};

export default AddFaculty;
