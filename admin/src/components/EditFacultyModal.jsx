import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { FaTimes, FaCheck } from "react-icons/fa";

const EditFacultyModal = ({ isOpen, onClose = () => {}, faculty = {}, onUpdate = () => {} }) => {
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    qualification: "",
    image: null,
  });

  // Update form state when the modal opens or faculty prop changes
  useEffect(() => {
    if (faculty) {
      setFormData({
        name: faculty.name || "",
        title: faculty.title || "",
        qualification: faculty.qualification || "",
        image: null, // Reset image to null to avoid retaining previous uploads
      });
    }
  }, [faculty]);

  // Handle text input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle file uploads
  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, image: e.target.files[0] }));
  };

  // Submit form data
  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(formData);
    onClose(); // Close the modal after saving
  };

  // Ensure faculty is loaded
  if (!faculty) {
    return null; // Return null if faculty data isn't available yet
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Edit Faculty Member"
      className="bg-white max-w-lg mx-auto mt-10 p-6 rounded-lg shadow-lg"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
    >
      {/* Modal Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-purple-600">Edit Faculty Member</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-red-600">
          <FaTimes size={20} />
        </button>
      </div>

      {/* Edit Form */}
      <form onSubmit={handleSubmit}>
        {/* Name Input */}
        <div className="mb-4">
          <label htmlFor="name" className="block font-semibold text-gray-600">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-lg p-2 mt-1"
            placeholder="Enter faculty name"
          />
        </div>

        {/* Title Input */}
        <div className="mb-4">
          <label htmlFor="title" className="block font-semibold text-gray-600">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-lg p-2 mt-1"
            placeholder="Enter faculty title"
          />
        </div>

        {/* Qualification Input */}
        <div className="mb-4">
          <label htmlFor="qualification" className="block font-semibold text-gray-600">
            Qualification
          </label>
          <input
            type="text"
            id="qualification"
            name="qualification"
            value={formData.qualification}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-lg p-2 mt-1"
            placeholder="Enter faculty qualification"
          />
        </div>

        {/* Image Upload */}
        <div className="mb-4">
          <label htmlFor="image" className="block font-semibold text-gray-600">
            Upload Image
          </label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleFileChange}
            className="w-full border border-gray-300 rounded-lg p-2 mt-1"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="flex items-center bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-800"
          >
            <FaCheck className="mr-2" /> Save
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default EditFacultyModal;
