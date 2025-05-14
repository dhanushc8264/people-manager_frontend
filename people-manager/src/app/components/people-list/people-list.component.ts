import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../services/person.service';
import { Person } from '../../models/person.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html'
})
export class PeopleListComponent implements OnInit {
  people: Person[] = [];

  constructor(private personService: PersonService, private router: Router) {}

  ngOnInit() {
    this.personService.getPeople().subscribe(data => {
      this.people = data;
    });
  }

  editPerson(id: number) {
    this.router.navigate(['/edit', id]);
  }

  deletePerson(id: number) {
    this.personService.deletePerson(id).subscribe(() => {
      this.people = this.people.filter(p => p.id !== id);
    });
  }
}
