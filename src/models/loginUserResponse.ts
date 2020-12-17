import { Token } from '../aliases/token';
import { User } from './user';

export interface LoginUserResponse extends User {
  token: Token;
}
