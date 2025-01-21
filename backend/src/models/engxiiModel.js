import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const getEngXiiData = async () => {
  try {
    return await prisma.engXii.findMany();
  } catch (error) {
    throw new Error('Error querying the engxii table: ' + error.message);
  }
};

const updateEngXiiData = async (id, data) => {
  try {
    const { time_slot, mon, tue, wed, thu, fri, sat, sun } = data;
    return await prisma.engXii.update({
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
    throw new Error('Error updating the engxii table: ' + error.message);
  }
};

export default { getEngXiiData, updateEngXiiData };
