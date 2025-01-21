// Import Prisma client
import prisma from '../config/db.js'

const getEngXiData = async () => {
  try {
    return await prisma.engXi.findMany(); // Retrieve all records from the engxi table
  } catch (error) {
    throw new Error('Error retrieving data from engxi table: ' + error.message);
  }
};

const updateEngXiData = async (id, data) => {
  try {
    const { time_slot, mon, tue, wed, thu, fri, sat, sun } = data;
    // Update the timetable record by ID
    return await prisma.engXi.update({
      where: { id: id },
      data: {
        time_slot,
        mon,
        tue,
        wed,
        thu,
        fri,
        sat,
        sun,
      },
    });
  } catch (error) {
    throw new Error('Error updating data in engxi table: ' + error.message);
  }
};

export default { getEngXiData, updateEngXiData };
