import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createFaculty = async (req, res) => {
  try {
    const { name, title, qualification, department_name } = req.body;
    const image = req.file ? req.file.filename : null;

    // Find the department ID by name
    const department = await prisma.department.findUnique({
      where: { name: department_name },
    });

    if (!department) {
      return res.status(400).send("Invalid department name");
    }

    const newFaculty = await prisma.faculty.create({
      data: {
        name,
        title,
        qualification,
        image,
        department: { connect: { id: department.id } }, // Connect using department ID
      },
    });

    res.status(201).send(newFaculty);
  } catch (err) {
    console.error("Error adding faculty:", err);
    res.status(500).send("Error adding faculty");
  }
};


export const getFaculty = async (req, res) => {
  try {
    const faculty = await prisma.faculty.findMany();
    const departments = await prisma.department.findMany();

    // Merge faculty with department data
    const facultyWithDepartments = faculty.map(facultyMember => {
      const department = departments.find(department => department.id === facultyMember.departmentId);
      return {
        ...facultyMember,
        department: department || { name: 'Unknown' }  // Add department info, or set 'Unknown' if not found
      };
    });

    res.status(200).json(facultyWithDepartments);
  } catch (error) {
    console.error("Error fetching faculty:", error); // Log error to console for debugging
    res.status(500).json({ error: "Failed to fetch data", details: error.message });
  }
};

export const updateFaculty = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, title, qualification } = req.body;
    const image = req.file ? req.file.filename : null;

    const updatedFaculty = await prisma.faculty.update({
      where: { id: id },
      data: {
        name,
        title,
        qualification,
        image,
      },
    });

    res.send(updatedFaculty);
  } catch (err) {
    console.error("Error updating faculty:", err);
    res.status(500).send("Error updating faculty");
  }
};

export const deleteFaculty = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.faculty.delete({
      where: { id: id },
    });
    res.send({ message: 'Faculty member deleted successfully' });
  } catch (err) {
    console.error('Error deleting faculty:', err);
    res.status(500).send('Error deleting faculty');
  }
};
