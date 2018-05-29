import { PersonnePipe } from './personne.pipe';

describe('PersonnePipe', () => {
  it('create an instance', () => {
    const pipe = new PersonnePipe();
    expect(pipe).toBeTruthy();
  });
});
