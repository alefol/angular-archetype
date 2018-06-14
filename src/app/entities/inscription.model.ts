export interface InscriptionModelInterface {
    email: string,
    password: string,
    passwordRetyped: string
}

export class InscriptionModel {
    email: string;
    password: string;
    passwordRetyped: string

    constructor(email?: string, password?: string, passwordRetyped?: string){
        this.email = email || '';
        this.password = password || '';
        this.passwordRetyped = password || '';
    }
}