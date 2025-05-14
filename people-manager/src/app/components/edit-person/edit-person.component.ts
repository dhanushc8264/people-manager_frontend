import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonService } from '../../services/person.service';
import { Person } from '../../models/person.model';

@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html'
})
export class EditPersonComponent implements OnInit {
  person: Person = { id: 0, name: '', email: '' };

  constructor(
    private route: ActivatedRoute,
    private personService: PersonService,
    private router: Router
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.personService.getPerson(id).subscribe(data => {
      this.person = data;
    });
  }

  savePerson() {
    this.personService.updatePerson(this.person).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
