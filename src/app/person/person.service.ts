import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({providedIn: 'root'})
export class PersonService {
  personsChanged = new Subject<string[]>();
  persons = ['Ricardo', 'Woz'];

  onPersonCreated(name: string) {
    this.persons.push(name)
    this.personsChanged.next(this.persons)
  }

  removePerson(name: String) {
    this.persons = this.persons.filter(person => {
      return person !== name;
    });
    this.personsChanged.next(this.persons)
  }
}
