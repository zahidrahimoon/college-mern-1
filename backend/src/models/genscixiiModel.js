import prisma from '../config/db.js'; // Import Prisma client instance

const getGenSciXiiData = async () => {
  try {
    const data = await prisma.genSciXii.findMany(); // Fetch all records
    return data;
  } catch (error) {
    throw new Error('Error fetching data from genscixii table: ' + error.message);
  }
};

const updateGenSciXiiData = async (id, data) => {
  try {
    const { time_slot, mon, tue, wed, thu, fri, sat, sun } = data;
    const updatedRecord = await prisma.genSciXii.update({
      where: { id: Number(id) }, // Ensure id is a number
      data: {
        timeSlot: time_slot,
        mon,
        tue,
        wed,
        thu,
        fri,
        sat,
        sun,
      },
    });
    return updatedRecord;
  } catch (error) {
    throw new Error('Error updating genscixii table: ' + error.message);
  }
};

export default { getGenSciXiiData, updateGenSciXiiData };
