import { Component } from "@angular/core";
import { PersonService } from "./person.service";

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html'
})

export class PersonComponent {
  personList: string[] = [];

  constructor(personService: PersonService) {
    this.personList = personService.persons;
  }
}
