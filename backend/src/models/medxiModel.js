import prisma from '../config/db.js';

const getMedXiData = async () => {
  try {
    const data = await prisma.medXi.findMany();
    return data;
  } catch (error) {
    throw new Error('Error retrieving MedXI data: ' + error.message);
  }
};


const updateMedXiData = async (id, data) => {
  try {
    const updatedData = await prisma.medXi.update({
      where: { id: parseInt(id) },
      data: {
        timeSlot: data.time_slot,
        mon: data.mon,
        tue: data.tue,
        wed: data.wed,
        thu: data.thu,
        fri: data.fri,
        sat: data.sat,
        sun: data.sun,
      },
    });
    return updatedData;
  } catch (error) {
    throw new Error('Error updating MedXI data: ' + error.message);
  }
};

export default { getMedXiData, updateMedXiData };
