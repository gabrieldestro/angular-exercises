import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent {

  public registerForm: FormGroup = this.formBuilder.group({
    firstName: ['', Validators.required],
    surName: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(6)]],
    email: ['', [Validators.required, Validators.email]]
  }); 

  constructor(private formBuilder: FormBuilder) {

  }

  public submitForm() {
    if (this.registerForm.valid) {
      console.log(this.registerForm)
    }
  }

}
