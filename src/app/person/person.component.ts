import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { PersonService } from "./person.service";

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html'
})

export class PersonComponent implements OnInit, OnDestroy {
  personList: string[] = [];
  private personListSubscribe: Subscription;

  constructor(private personService: PersonService) {
    this.personService = personService
    this.personListSubscribe = this.personService.personsChanged.subscribe(persons => {
      this.personList = persons;
    });
  }

  ngOnInit() {
    this.personList = this.personService.persons
  }

  onRemovePerson(name: String) {
    this.personService.removePerson(name)
  }

  ngOnDestroy() {
    this.personListSubscribe.unsubscribe();
  }

}
