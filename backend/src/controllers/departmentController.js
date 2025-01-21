// controllers/departmentController.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Get all departments
export const getDepartments = async (req, res) => {
  try {
    const departments = await prisma.department.findMany();
    res.status(200).json(departments);
  } catch (error) {
    console.error('Error fetching departments:', error);
    res.status(500).json({ error: 'Failed to fetch departments' });
  }
};

// Create a new department
export const createDepartment = async (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ error: 'Department name is required' });
  }

  try {
    const newDepartment = await prisma.department.create({
      data: { name },
    });
    res.status(201).json(newDepartment);
  } catch (error) {
    console.error('Error creating department:', error);
    if (error.code === 'P2002') {
      res.status(409).json({ error: 'Department name already exists' });
    } else {
      res.status(500).json({ error: 'Failed to create department' });
    }
  }
};
