import { PrismaClient } from '@prisma/client';
import { format } from 'date-fns';

const prisma = new PrismaClient();

// Create a new event
export const createEvent = async (title, content, eventDate, image) => {
  const formattedDate = format(new Date(eventDate), 'MM/dd/yyyy');
  return prisma.event.create({
    data: {
      title,
      content,
      eventDate: new Date(formattedDate),
      image,
    },
  });
};

// Retrieve all events
export const getEvents = async () => {
  const events = await prisma.event.findMany();
  return events.map((event) => ({
    ...event
  }));
};


// Delete an event by ID
export const deleteEvent = async (id) => {
  return prisma.event.delete({
    where: { id: Number(id) },
  });
};

// Edit an existing event by ID
export const editEvent = async (id, title, content, eventDate, image) => {
  const formattedDate = format(new Date(eventDate), 'MM/dd/yyyy');
  return prisma.event.update({
    where: { id: Number(id) },
    data: {
      title,
      content,
      eventDate: new Date(formattedDate),
      image,
    },
  });
};
