export class PersonneEntity {
    id: number;
    email: string;
    nom: string;
    prenom: string;
    password: string;

    public constructor(email: string, nom: string, prenom: string){
        this.email = email;
        this.nom = nom;
        this.prenom = prenom;
    }
}