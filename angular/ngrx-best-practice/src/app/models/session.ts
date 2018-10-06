import { Resource } from './resource';

export class Session extends Resource {
  username: string;
  password: string;

  constructor(username: string, password: string) {
    super();
    this.username = username;
    this.password = password;
  }
}
