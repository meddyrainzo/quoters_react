import axios from 'axios';
import { ErrorResult } from '../models/errorResult';
import WriteAQuoteRequest from '../models/requests/writeAQuoteRequest';
import { SingleQuote } from '../models/singleQuote';
import { User } from '../models/user';
import { getCurrentUser } from './IdentityApi';

const baseURL = 'http://localhost:8080/quotes/';

const client = axios.create({
  baseURL: 'http://localhost:8080/quotes/',
});

export const getQuotes = async (
  currentUser?: User,
  currentPage = 0,
  resultsPerPage = 10
): Promise<SingleQuote[] | ErrorResult> => {
  try {
    const token = currentUser?.token;
    const response = await client({
      method: 'GET',
      params: { currentPage, resultsPerPage },
      headers: {
        'x-auth-token': token,
      },
    });
    return response.data;
  } catch (err) {
    return err.response.data;
  }
};

export const reactToQuote = async (
  quoteId: string
): Promise<void | ErrorResult> => {
  try {
    const url = `${baseURL}/${quoteId}/react`;
    const user = getCurrentUser();
    await client.put(
      url,
      {},
      {
        headers: {
          'x-auth-token': user.token,
        },
      }
    );
  } catch (err) {
    return err.response.data;
  }
};

export const writeAQuote = async (request: WriteAQuoteRequest) => {
  const user = getCurrentUser();
  try {
    const quote = await client.post(baseURL, request, {
      headers: { 'x-auth-token': user.token },
    });
    return quote.data;
  } catch (err) {
    return err.response.data;
  }
};
