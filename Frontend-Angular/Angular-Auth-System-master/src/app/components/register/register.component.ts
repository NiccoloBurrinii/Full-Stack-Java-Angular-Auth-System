import { Component } from '@angular/core';
import { AccessService } from '../../services/access.service';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [NgIf, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  data: any = null;
  showAddForm: boolean = true;

  constructor(public access: AccessService) { };

  submitRegisterForm(form: NgForm) {
    this.showAddForm = false;
    if (!(form.value.username == "" || form.value.password == "")) {
      const body = `{"username": "` + form.value.username + `", "password": "` + form.value.password + `", "email": "` + form.value.email + `", "name": "` + form.value.name + `", "surname": "` + form.value.surname + `"}`;
      console.log(body);
      this.postRegisterUser(body);
    }
    location.reload();
  }


  postRegisterUser(body: any) {
    this.access.postRegister(body).subscribe(remoteData => {
      this.data = remoteData;
    });
  }
}
