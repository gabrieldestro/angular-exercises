import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent {
  public list: Array<{food: string}> = [{food: "Rice"}, {food: "Beans"}, {food: "Eggs"}];


  public submitForm(form: NgForm) {
    console.log(form.value)
    alert("Data sent!" + form.value);
  }
}
