import axios from 'axios';
import qs from 'qs';
import { ErrorResult } from '../models/errorResult';
import { LoginRequest } from '../models/requests/loginRequest';
import { RegisterRequest } from '../models/requests/regiterRequest';
import { User } from '../models/user';

const url = 'http://localhost:8080/identity/';

export const registerUser = async (
  request: RegisterRequest
): Promise<ErrorResult | undefined> => {
  try {
    const registerUrl = `${url}/register`;
    const config = {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    };
    await axios.post(registerUrl, qs.stringify(request), config);
  } catch (err) {
    return err.response.data;
  }
};

export const loginUser = async (
  request: LoginRequest
): Promise<User | ErrorResult> => {
  try {
    const loginUrl = `${url}/login`;
    const config = {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    };
    const response = await axios.post(loginUrl, qs.stringify(request), config);
    const data = response.data;
    storeUserDetails(data);
    return data;
  } catch (err) {
    return err.response.data;
  }
};

const storeUserDetails = (data: User) =>
  localStorage.setItem('currentUser', JSON.stringify(data));

export const getCurrentUser = (): User => {
  const user = localStorage.getItem('currentUser');

  if (user) {
    return JSON.parse(user) as User;
  }
  return { firstname: '', lastname: '', email: '', token: '' };
};

export const logoutUser = () => {
  localStorage.removeItem('currentUser');
};
