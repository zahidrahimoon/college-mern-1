import prisma from '../config/db.js';

// Fetch all timetable data for medxii
const getMedXiiData = async () => {
  try {
    return await prisma.medxii.findMany();
  } catch (error) {
    throw new Error(`Error fetching data: ${error.message}`);
  }
};

// Update timetable data for a specific id
const updateMedXiiData = async (id, data) => {
  try {
    const { time_slot, mon, tue, wed, thu, fri, sat, sun } = data;
    return await prisma.medxii.update({
      where: { id },
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
    throw new Error(`Error updating data: ${error.message}`);
  }
};

export default { getMedXiiData, updateMedXiiData };
