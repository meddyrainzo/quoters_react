import axios from 'axios';
import qs from 'qs';
import { RegisterRequest } from '../models/regiterRequest';

const url = 'http://localhost:8080/identity/register';

export const registerUser = async (request: RegisterRequest) => {
  try {
    const config = {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    };
    await axios.post(url, qs.stringify(request), config);
    console.log(`API :: Registration done successfully`);
  } catch (err) {
    console.log(`API :: Registration failed ${JSON.stringify(err)}`);
    throw err;
  }
};
