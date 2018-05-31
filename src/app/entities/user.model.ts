export interface UserModel {
  nom: string,
  password: string,
  isAdmin: boolean
}

export class UserModel implements UserModel {

  constructor(nom?: string, isAdmin?: boolean){
    this.nom = nom || '';
    this.isAdmin = isAdmin || false;
  }
}
