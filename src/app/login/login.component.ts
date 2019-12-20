import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  submitForm
  users = {
    agnel: {
      role: 'employee',
      id: 1
    },
    anup: {
      role: 'employee',
      id: 2
    },
    vikram: {
      role: 'approver1',
      id: 3
    },
    banu: {
      role: 'hr',
      id: 4
    },
    dilip: {
      role: 'approver2',
      id: 5
    },
    girish: {
      role: 'attorney',
      id: 6
    }
  };


  // Get data from submit using formcontrollers
  constructor(private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute) {
    this.submitForm = this.formBuilder.group({
      username: ''
    });
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      console.log(params); // {order: "popular"}
    });
  }

  onSubmit(customerData) {
    // Process checkout data here
    console.warn('Your data is submitted', customerData.username);
    if (!customerData.username || !this.users[customerData.username]) {
      console.log('invalid user request');
      this.router.navigate(['']);
      return;
    }
    console.log(this.users[customerData.username])
    localStorage.setItem("userDetails", JSON.stringify(this.users[customerData.username]));
    this.submitForm.reset();
    this.router.navigate(['./home']);
    console.log('end of the login componet');
  }
  message: string;
}
