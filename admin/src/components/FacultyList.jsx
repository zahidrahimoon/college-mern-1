import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Circles } from "react-loader-spinner"; 
import FacultyDropdown from "./FacultyDropdown";
import EditFacultyModal from "./EditFacultyModal";

const FacultyList = () => {
  const [facultyData, setFacultyData] = useState([]);
  const [groupedFaculty, setGroupedFaculty] = useState({});
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedFaculty, setSelectedFaculty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFacultyData = async () => {
      try {
        // Fetch faculty data
        const facultyResponse = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/faculty`);

        // Fetch department data
        const departmentResponse = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/departments`);

        // Group faculty data by department
        const grouped = facultyResponse.data.reduce((acc, member) => {
          const departmentName = member.department ? member.department.name : "Unknown";
          if (!acc[departmentName]) {
            acc[departmentName] = [];
          }
          acc[departmentName].push(member);
          return acc;
        }, {});
        setGroupedFaculty(grouped);
        setFacultyData(facultyResponse.data);
      } catch (error) {
        toast.error("Error fetching data: " + error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFacultyData();
  }, []);

  const handleEdit = (faculty) => {
    setSelectedFaculty(faculty);
    setEditModalOpen(true);
  };

  const handleUpdate = async (updatedData) => {
    try {
      const formData = new FormData();
      for (const key in updatedData) {
        formData.append(key, updatedData[key]);
      }
      const response = await axios.put(
        `${import.meta.env.VITE_BASE_URL}/api/faculty/${selectedFaculty.id}`,
        formData
      );
      toast.success("Faculty updated successfully!");
      setFacultyData((prev) =>
        prev.map((member) =>
          member.id === selectedFaculty.id ? response.data : member
        )
      );
      setEditModalOpen(false);
    } catch (error) {
      toast.error("Error updating faculty.");
    }
  };

  return (
    <div className="container mx-auto p-4 font-serif mt-8">
      <ToastContainer />
      
      {loading ? (
        <div className="flex justify-center items-center">
          <Circles size={60} color="purple" /> 
        </div>
      ) : (
        Object.keys(groupedFaculty).map((department) => (
          <FacultyDropdown
            key={department}
            department={department}
            members={groupedFaculty[department]}
            onEdit={handleEdit}
          />
        ))
      )}

      {editModalOpen && selectedFaculty && (
        <EditFacultyModal
          isOpen={editModalOpen}
          onClose={() => setEditModalOpen(false)}
          faculty={selectedFaculty}
          onUpdate={handleUpdate}
        />
      )}
    </div>
  );
};

export default FacultyList;
