import { Component, OnInit} from "@angular/core";
import { PersonService } from "./person.service";

@Component({
  selector: 'app-person-input',
  templateUrl: './person-input.component.html',
  styleUrls: ['./person-input.component.css']
})

export class PersonInputComponent {
  personName = '';

  constructor(private personService: PersonService) { }

  onCreatePerson() {
    console.log('Person created '+ this.personName);
    this.personService.onPersonCreated(this.personName);
    this.personName = ''
  }

}
