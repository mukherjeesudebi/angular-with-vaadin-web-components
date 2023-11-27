import { Component } from '@angular/core';
import '@vaadin/button';
import '@vaadin/grid';
import '@vaadin/text-field';
import '@vaadin/icon';
import '@vaadin/icons';
import { UntypedFormGroup, UntypedFormControl } from '@angular/forms';

class Person {
  constructor(public firstName: string, public lastName: string) {}
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  people: Person[] = [];
  form = new UntypedFormGroup({
    firstName: new UntypedFormControl(''),
    lastName: new UntypedFormControl('')
  });

  addPerson() {
    this.people = [
      ...this.people,
      new Person(this.form.value.firstName, this.form.value.lastName)
    ];
    this.form.reset();
  }
}
