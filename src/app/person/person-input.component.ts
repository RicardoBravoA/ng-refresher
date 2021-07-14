import { Component, Output , EventEmitter} from "@angular/core";

@Component({
  selector: 'app-person-input',
  templateUrl: './person-input.component.html',
  styleUrls: ['./person-input.component.css']
})

export class PersonInputComponent {
  @Output() person = new EventEmitter<string>();
  personName = '';

  onCreatePerson() {
    console.log('Person created '+ this.personName);
    this.person.emit(this.personName);
    this.personName = ''
  }
}
