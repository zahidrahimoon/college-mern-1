// models/commercexiiModel.js

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Get CommerceXii Timetable
const getCommerceXiiData = async () => {
  try {
    return await prisma.commerceXii.findMany();
  } catch (error) {
    throw new Error('Error fetching data from the commercexii table: ' + error.message);
  }
};

// Update CommerceXii Timetable by ID
const updateCommerceXiiData = async (id, data) => {
  try {
    await prisma.commerceXii.update({
      where: { id: id },
      data: {
        time_slot: data.time_slot,
        mon: data.mon,
        tue: data.tue,
        wed: data.wed,
        thu: data.thu,
        fri: data.fri,
        sat: data.sat,
        sun: data.sun,
      },
    });
  } catch (error) {
    throw new Error('Error updating the commercexii table: ' + error.message);
  }
};

export default { getCommerceXiiData, updateCommerceXiiData };
