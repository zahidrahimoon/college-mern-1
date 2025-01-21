import prisma from '../config/db.js';

const getGenSciXiData = async () => {
  try {
    const data = await prisma.genSciXi.findMany();
    return data;
  } catch (error) {
    throw new Error('Error fetching GenSciXi data: ' + error.message);
  }
};

const updateGenSciXiData = async (id, data) => {
  try {
    const { time_slot, mon, tue, wed, thu, fri, sat, sun } = data;
    const updatedData = await prisma.genSciXi.update({
      where: { id: parseInt(id, 10) },
      data: { time_slot, mon, tue, wed, thu, fri, sat, sun },
    });
    return updatedData;
  } catch (error) {
    throw new Error('Error updating GenSciXi data: ' + error.message);
  }
};

export default { getGenSciXiData, updateGenSciXiData };
