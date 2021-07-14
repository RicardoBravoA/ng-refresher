import { Component, OnInit } from "@angular/core";
import { PersonService } from "./person.service";

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html'
})

export class PersonComponent implements OnInit {
  personList: string[] = [];

  constructor(private personService: PersonService) {
    this.personService = personService
  }

  ngOnInit() {
    this.personList = this.personService.persons
  }

  onRemovePerson(name: String) {
    this.personService.removePerson(name)
  }

}
