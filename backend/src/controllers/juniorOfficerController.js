import JuniorOfficer from '../models/juniorOfficerModel.js';  // Adjust the path as needed

// Get all Junior Officers
const getJuniorOfficers = async (req, res) => {
  try {
    const data = await JuniorOfficer.getJuniorOfficers();  // Get all Junior Officers
    res.json(data);
  } catch (error) {
    console.error('Error querying the JuniorOfficer table:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Update a specific Junior Officer by ID
const updateJuniorOfficer = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;

    // Update Junior Officer details
    await JuniorOfficer.updateJuniorOfficer(id, data);
    
    res.status(200).json({ message: 'Junior Officer updated successfully' });
  } catch (error) {
    console.error('Error updating the JuniorOfficer table:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export default { getJuniorOfficers, updateJuniorOfficer };
