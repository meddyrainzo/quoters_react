import axios from 'axios';
import { response } from 'msw/lib/types';
import qs from 'qs';
import { Token } from '../aliases/token';
import { ErrorResult } from '../models/errorResult';
import { LoginUserResponse } from '../models/loginUserResponse';
import { LoginRequest } from '../models/requests/loginRequest';
import { RegisterRequest } from '../models/requests/regiterRequest';

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
): Promise<LoginUserResponse | ErrorResult> => {
  try {
    const loginUrl = `${url}/login`;
    const config = {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    };
    const response = await axios.post(loginUrl, qs.stringify(request), config);
    const { token, ...data } = response.data;
    storeToken(token);
    return data;
  } catch (err) {
    return err.response.data;
  }
};

const storeToken = async (token: Token) => localStorage.setItem('TOKEN', token);
