import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PersonInputComponent } from "./person/person-input.component";
import { PersonComponent } from "./person/person.component";

const routes: Routes = [
  { path: '', component: PersonComponent },
  { path: 'input', component: PersonInputComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
