import { Component } from "@angular/core";

@Component({
  selector: 'app-person-input',
  templateUrl: './person-input.component.html',
  styleUrls: ['./person-input.component.css']
})

export class PersonInputComponent {
  personName = '';

  onCreatePerson() {
    console.log('Person created '+ this.personName);
    this.personName = ''
  }
}
