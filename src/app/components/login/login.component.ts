import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  applicationName = environment.applicationName;
  email: string;
  password: string;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  login(){
    if(!!this.email && !!this.password)
    {
      alert('login sucess');
      this.router.navigateByUrl('dashboard');

    }else{
      alert('login fail');
    }
  }

}
