import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { map } from "rxjs/operators"

@Injectable({providedIn: 'root'})
export class PersonService {
  personsChanged = new Subject<string[]>();
  persons = ['Ricardo', 'Woz'];

  constructor(private http: HttpClient) {}

  fetchPersons() {
    this.http.get<any>('https://swapi.dev/api/people')
      .pipe(map(response => {
        return response.results.map((character: { name: any; }) => character.name);
      }))
      .subscribe(response => {
        this.personsChanged.next(response);
    });
  }

  onPersonCreated(name: string) {
    this.persons.push(name)
    this.personsChanged.next(this.persons)
  }

  removePerson(name: string) {
    this.persons = this.persons.filter(person => {
      return person !== name;
    });
    this.personsChanged.next(this.persons)
  }
}
