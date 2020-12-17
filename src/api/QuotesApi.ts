import axios from 'axios';
import { ErrorResult } from '../models/errorResult';
import { SingleQuote } from '../models/singleQuote';

const client = axios.create({
  baseURL: 'http://localhost:8080/quotes/',
});

export const getQuotes = async (
  currentPage = 0,
  resultsPerPage = 10
): Promise<SingleQuote[] | ErrorResult> => {
  try {
    const response = await client({
      method: 'GET',
      params: { currentPage, resultsPerPage },
    });
    return response.data;
  } catch (err) {
    throw err.response.data;
  }
};
