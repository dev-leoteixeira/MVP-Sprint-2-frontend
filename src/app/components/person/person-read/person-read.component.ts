import { PersonService } from "./../person.service";
import { Component, OnInit } from "@angular/core";
import { Person } from "../person.model";

@Component({
  selector: "app-person-read",
  templateUrl: "./person-read.component.html",
  styleUrls: ["./person-read.component.css"],
})
export class PersonReadComponent implements OnInit {
  
  persons!: Person[]
  
  displayedColumns = ['id', 'nome', 'email', 'idade', 'action']

  constructor(private personService: PersonService) {}

  ngOnInit(): void {
    this.personService.read().subscribe((resp: { pessoas: Person[]; }) => {
      this.persons = resp.pessoas;
    },
      (    error: any) => {
      console.log("Criar alert")
    }
    );
  }
}
