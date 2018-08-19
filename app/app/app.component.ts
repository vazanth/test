import {Component} from '@angular/core';
import { NgForm} from '@angular/forms';
import {EmpModel} from './model/emp.model';
import {AppSignupService} from './services/app-signup.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to Signup Page';
  country;
  model = new EmpModel('', false, this.country);

  constructor(private _AppSignupService: AppSignupService) {
      this._AppSignupService.getcountry().subscribe(
        success => this.country = success.data.country,
        error => console.log('error:', error)
      )
  }
  postForm(form: NgForm) {
    // alert('clicked');
    console.log(form.value);
    this._AppSignupService.getAppSignupService(form.value).subscribe(
      success => console.log('success:', success),
      error => console.log('error:', error)
    );
  }
}
