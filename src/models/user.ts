import { Token } from '../aliases/token';

export interface User {
  firstname: string;
  lastname: string;
  email: string;
  token: Token;
}
