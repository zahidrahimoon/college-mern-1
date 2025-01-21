import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const addFaculty = ({ name, title, qualification, image, department_id }) => {
  return prisma.faculty.create({
    data: {
      name,
      title,
      qualification,
      image,
      departmentId: department_id,
    },
  });
};

export const fetchFaculty = () => {
  return prisma.faculty.findMany({
    include: {
      department: true,
    },
  });
};

export const updateFacultyById = (id, { name, title, qualification, image, department_id }) => {
  return prisma.faculty.update({
    where: { id: id },
    data: {
      name,
      title,
      qualification,
      image,
      departmentId: department_id,
    },
  });
};

export const deleteFacultyById = (id) => {
  return prisma.faculty.delete({
    where: { id: id },
  });
};
