import { Component } from '@angular/core';
import { AccessService } from '../../services/access.service';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgIf, FormsModule, RegisterComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  data: any = null;
  showAddForm: boolean = false;
  showLoginForm: boolean = true;
  showSuccess: boolean = false;
  showError: boolean = false;

  constructor(public access: AccessService) { };

  submitLoginForm(form: NgForm) {
    if (!(form.value.username == "" || form.value.password == "")) {
      const body = `{"username": "` + form.value.username + `","password": "` + form.value.password + `"}`;
      console.log(body);
      this.postLoginUser(body);
    }
  }
  enableAddForm() {
    this.showLoginForm = false;
    this.showAddForm = true;
  }

  postLoginUser(body: any) {
    this.access.postLogin(body).subscribe(remoteData => {
      this.data = remoteData;
      if (this.data.valid) {
        this.showSuccess = true;
        this.showError = false;
      } else {
        this.showError = true;
        this.showSuccess = false;
      }
    });
  }


}
