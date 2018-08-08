import { Component } from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to Signup Page';

  postForm(form: NgForm ) {
    alert('clicked');
    console.log(form.value);
    if (form.value === '') {
      alert('Values are empty');
    }
  }

}
