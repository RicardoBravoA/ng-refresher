import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class PersonService {
  persons = ['Ricardo', 'Woz'];

  onPersonCreated(name: string) {
    this.persons.push(name)
    console.log(this.persons)
  }

  removePerson(name: String) {
    this.persons = this.persons.filter(person => {
      return person !== name;
    });
    console.log(this.persons)
  }
}
