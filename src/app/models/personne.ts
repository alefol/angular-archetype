export interface PersonneInterface {
  id: number;
  email: string;
  nom: string;
  prenom: string;
  password: string;
}


export class PersonneEntity implements  PersonneInterface{
    id: number;
    email: string;
    nom: string;
    prenom: string;
    password: string;

    public constructor(id?: number, email?: string, nom?: string, prenom?: string, password?: string){
      this.id = id;
        this.email = email || '';
        this.nom = nom || '';
        this.prenom = prenom || '';
        this.password = password || '';
    }
}

export function personnesFactory(personnes: PersonneInterface[]){
  const out: PersonneEntity[] = [];
  for (const personne of personnes) {
    out.push(new PersonneEntity(personne.id, personne.email, personne.nom, personne.prenom, personne.password));
  }
  return out;
}

export function personneFactory(personne: PersonneInterface){
  let out: PersonneEntity;
  out = new PersonneEntity(personne.id, personne.email, personne.nom, personne.prenom, personne.password);
  return out;
}

