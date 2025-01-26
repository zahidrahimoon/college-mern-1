import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getPopups = async (req, res) => {
  try {
    const popups = await prisma.popup.findMany();
    if (!popups || popups.length === 0) {
      return res.status(404).json({ message: 'No popups found' });
    }
    res.status(200).json(popups);
  } catch (error) {
    console.error('Error fetching popups:', error.message); // Log error details
    res.status(500).json({ message: error.message });
  }
};

export const updatePopupDetails = async (req, res) => {
  const { id } = req.params; // Make sure this is present

  if (!id) {
    return res.status(400).json({ message: 'Popup ID is required' });
  }

  const popupData = req.body;

  // Validate popupData if needed
  if (!popupData || typeof popupData !== 'object') {
    return res.status(400).json({ message: 'Invalid popup data' });
  }

  try {
    const updatedPopup = await prisma.popup.update({
      where: { id: parseInt(id, 10) },
      data: {
        title: popupData.title,
        description: popupData.description,
        startDate: popupData.start_date ? new Date(popupData.start_date) : null,
        endDate: popupData.end_date ? new Date(popupData.end_date) : null,
        buttonText: popupData.button_text,
        link: popupData.link,
        backgroundColor: popupData.background_color,
        textColor: popupData.text_color,
      },
    });

    if (updatedPopup) {
      res.status(200).json({ message: 'Popup updated successfully' });
    } else {
      res.status(404).json({ message: 'Popup not found' });
    }
  } catch (error) {
    console.error('Error updating popup:', error.message);
    res.status(500).json({ message: error.message });
  }
};
