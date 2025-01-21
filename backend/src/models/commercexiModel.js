import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Fetch all timetable data for commerce xi
export const getCommerceFirstYearTimetable = async () => {
  try {
    return await prisma.commerceXi.findMany();
  } catch (err) {
    console.error("Error fetching timetable data: ", err);
    throw new Error('Error fetching timetable data');
  }
};

// Update timetable data for a specific id
export const updateCommerceXiData = async (id, data) => {
  try {
    const { time_slot, mon, tue, wed, thu, fri, sat, sun } = data;

    // Check for null values and replace with "off" if necessary
    const updatedData = {
      time_slot,
      mon: mon || "off",
      tue: tue || "off",
      wed: wed || "off",
      thu: thu || "off",
      fri: fri || "off",
      sat: sat || "off",  // If `sat` is null, replace it with "off"
      sun: sun || "off",  // If `sun` is null, replace it with "off"
    };

    return await prisma.commerceXi.update({
      where: { id: id },
      data: updatedData,
    });
  } catch (err) {
    console.error("Error updating timetable data: ", err);
    throw new Error('Error updating timetable data');
  }
};
