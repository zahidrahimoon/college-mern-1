import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const getAllNews = async () => {
  return prisma.news.findMany();  // Fetches all news documents from the 'news' collection
};

const getNewsById = async (id) => {
  return prisma.news.findUnique({
    where: { id },  // Finds a news document by its 'id'
  });
};

const createNews = async (news) => {
  return prisma.news.create({
    data: news,  // Inserts the news document into the 'news' collection
  });
};

const updateNews = async (id, news) => {
  return prisma.news.update({
    where: { id },  // Finds the news document by 'id'
    data: news,     // Updates the document with new data
  });
};

const deleteNews = async (id) => {
  return prisma.news.delete({
    where: { id },  // Deletes the news document by 'id'
  });
};

export { getAllNews, getNewsById, createNews, updateNews, deleteNews };
