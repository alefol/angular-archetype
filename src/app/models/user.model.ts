export interface UserModel {
  email: string;
  password: string;
  isAdmin: boolean;
}

export class UserModel implements UserModel {

  constructor(email?: string, password?: string, isAdmin?: boolean) {
    this.email = email || '';
    this.password = password || '';
    this.isAdmin = isAdmin || false;
  }
}
