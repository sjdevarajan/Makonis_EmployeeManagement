import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  constructor(private http: HttpClient) { }
  clickMessage = '';

  onSubmit(data) {
    this.http.post('https://localhost:44349/Employee', data)
      .subscribe((result) => {
        console.warn("result", result);

        this.clickMessage = 'Employee saved successfully.  Check API (https://localhost:44349/Employee)';
      })
    console.log(data);
  }

  NextEmployee(form: NgForm) {
    form.resetForm();
    this.clickMessage = '';
  }
}
