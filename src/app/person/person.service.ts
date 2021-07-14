import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class PersonService {
  persons = ['Ricardo', 'Woz'];

  onPersonCreated(name: string) {
    this.persons.push(name)
    console.log(this.persons)
  }
}
