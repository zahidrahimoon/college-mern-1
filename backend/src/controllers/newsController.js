import * as newsModel from '../models/newsModel.js';

import { format } from 'date-fns';

const formatToMMDDYYYY = (date) => {
  return format(new Date(date), 'MM/dd/yyyy');
};

const createNews = async (req, res) => {
  const { title, content, initialDate, finalDate } = req.body;

  if (!title || !content || !initialDate || !finalDate) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  try {
    const news = await newsModel.createNews({
      title,
      content,
      initialDate: new Date(initialDate),
      finalDate: new Date(finalDate),
    });
    res.status(201).json({ message: 'News created successfully', news });
  } catch (error) {
    console.error('Error creating news:', error);
    res.status(500).json({ message: 'Error creating news', error: error.message });
  }
};

const updateNews = async (req, res) => {
  const { id } = req.params;
  const { title, content, initialDate, finalDate } = req.body;

  if (!title && !content && !initialDate && !finalDate) {
    return res.status(400).json({ message: 'At least one field is required to update.' });
  }

  try {
    const updatedData = {};
    if (title) updatedData.title = title;
    if (content) updatedData.content = content;
    if (initialDate) updatedData.initialDate = new Date(initialDate);
    if (finalDate) updatedData.finalDate = new Date(finalDate);

    const updatedNews = await newsModel.updateNews(id, updatedData);

    if (updatedNews) {
      res.json({ message: 'News updated successfully', updatedNews });
    } else {
      res.status(404).json({ message: 'News not found' });
    }
  } catch (error) {
    console.error('Error updating news:', error);
    res.status(500).json({ message: 'Error updating news', error: error.message });
  }
};

const getAllNews = async (req, res) => {
  try {
    const newsList = await newsModel.getAllNews();
    res.json({ message: 'News fetched successfully', news: newsList });
  } catch (error) {
    console.error('Error fetching news:', error);
    res.status(500).json({ message: 'Error fetching news', error: error.message });
  }
};

const getNewsById = async (req, res) => {
  const { id } = req.params;
  try {
    const news = await newsModel.getNewsById(id);
    if (news) {
      res.json({ message: 'News fetched successfully', news });
    } else {
      res.status(404).json({ message: 'News not found' });
    }
  } catch (error) {
    console.error('Error fetching news:', error);
    res.status(500).json({ message: 'Error fetching news', error: error.message });
  }
};

const deleteNews = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await newsModel.deleteNews(id);
    if (deleted) {
      res.json({ message: 'News deleted successfully' });
    } else {
      res.status(404).json({ message: 'News not found' });
    }
  } catch (error) {
    console.error('Error deleting news:', error);
    res.status(500).json({ message: 'Error deleting news', error: error.message });
  }
};
export {
  getAllNews,
  getNewsById,
  createNews,
  updateNews,
  deleteNews
};
