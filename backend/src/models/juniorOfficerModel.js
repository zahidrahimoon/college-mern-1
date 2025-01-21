import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Get all Junior Officers
const getJuniorOfficers = () => {
  return prisma.juniorOfficer.findMany();  // Use Prisma to fetch all Junior Officers
};

// Update a specific Junior Officer by ID
const updateJuniorOfficer = (id, data) => {
  return prisma.juniorOfficer.update({
    where: { id: id },  // Specify the officer to update by ID
    data: { 
      designation: data.designation,
      bps: data.bps,
      sanctioned: data.sanctioned,
      working: data.working,
      vacancy: data.vacancy,
      remarks: data.remarks
    }
  });
};

export default { getJuniorOfficers, updateJuniorOfficer };
