import { getCommerceFirstYearTimetable, updateCommerceXiData } from '../models/commercexiModel.js';

// Get timetable data and send as response
export const getTimetable = async (req, res) => {
  try {
    const timetable = await getCommerceFirstYearTimetable();
    res.json(timetable);
  } catch (error) {
    console.error('Error querying the database:', error);
    res.status(500).json({ message: 'Internal Server Error: ' + error.message });
  }
};

// Update timetable data based on the id from the request params
export const updateCommerceXiTimetable = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;

    // Validation (optional): Check if data is complete before updating
    if (!data.time_slot || !data.mon || !data.tue || !data.wed || !data.thu || !data.fri || !data.sat || !data.sun) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    await updateCommerceXiData(id, data);
    res.status(200).json({ message: 'Timetable updated successfully' });
  } catch (error) {
    console.error('Error updating the commercexi table:', error);
    res.status(500).json({ message: 'Internal Server Error: ' + error.message });
  }
};
