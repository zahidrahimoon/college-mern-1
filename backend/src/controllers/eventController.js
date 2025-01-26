import { createEvent as createEventModel, getEvents as getEventsModel, deleteEvent as deleteEventModel, editEvent as editEventModel } from '../models/eventModel.js';

// Create a new event

export const createEvent = async (req, res) => {
  const { title, content, event_date } = req.body;
  const image = req.file ? req.file.filename : null;

  try {
    const event = await createEventModel(title, content, event_date, image);
    res.status(201).json(event);
  } catch (error) {
    console.error('Error creating event:', error);
    res.status(500).send('Failed to create event');
  }
};

// Retrieve all events
export const getEvents = async (req, res) => {
  try {
    const events = await getEventsModel();
    res.json(events);
  } catch (error) {
    console.error('Error retrieving events:', error);
    res.status(500).send('Failed to retrieve events');
  }
};

// Delete an event by ID
export const deleteEvent = async (req, res) => {
  const { id } = req.params;

  try {
    await deleteEventModel(id);
    res.send(`Event with ID ${id} deleted successfully`);
  } catch (error) {
    console.error('Error deleting event:', error);
    res.status(500).send('Failed to delete event');
  }
};

// Edit an existing event by ID
export const editEvent = async (req, res) => {
  const { id } = req.params;
  const { title, content, event_date } = req.body;
  const image = req.file ? req.file.filename : null;

  try {
    const event = await editEventModel(id, title, content, event_date, image);
    res.json(event);
  } catch (error) {
    console.error('Error editing event:', error);
    res.status(500).send('Failed to edit event');
  }
};
