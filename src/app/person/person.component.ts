import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { PersonService } from "./person.service";

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html'
})

export class PersonComponent implements OnInit, OnDestroy {
  personList: string[] = [];
  private personListSubscribe!: Subscription;
  isFetching  = false;

  constructor(private personService: PersonService) { }

  ngOnInit() {
    this.personListSubscribe = this.personService.personsChanged.subscribe(persons => {
      this.personList = persons;
      this.isFetching = false;
    });
    this.isFetching = true;
    this.personService.fetchPersons();
  }

  onRemovePerson(name: string) {
    this.personService.removePerson(name)
  }

  ngOnDestroy() {
    this.personListSubscribe.unsubscribe();
  }

}
