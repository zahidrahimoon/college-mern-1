import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// Get all Senior Officers
const getSeniorOfficers = async () => {
  try {
    const officers = await prisma.seniorOfficer.findMany();  // Prisma method to get all records
    return officers;
  } catch (error) {
    throw new Error('Error fetching senior officers: ' + error.message);
  }
};

// Update a specific Senior Officer by ID
const updateSeniorOfficer = async (id, data) => {
  try {
    const updatedOfficer = await prisma.seniorOfficer.update({
      where: { id: id },  // The ID of the officer to update
      data: {
        designation: data.designation,
        bps: data.bps,
        sanctioned: data.sanctioned,
        working: data.working,
        vacancy: data.vacancy,
        remarks: data.remarks
      }
    });
    return updatedOfficer;
  } catch (error) {
    throw new Error('Error updating senior officer: ' + error.message);
  }
};

export default { getSeniorOfficers, updateSeniorOfficer };
