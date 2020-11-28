import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  genders = ['male', 'female'];
  SignupForm: FormGroup;
  forbiddenUserNames = ['geetha', 'puja'];
  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.SignupForm = new FormGroup({
          userData : new FormGroup({
          username: new FormControl(null,[Validators.required,this.forbiddenNames.bind(this)]),
          email: new FormControl(null,[Validators.required,Validators.email],this.forbiddenEmails),
      }),
      gender: new FormControl('female'),
      hobbies: new FormArray([])
    });


    this.SignupForm.setValue({
      userData: {
        username: 'geetha',
        email: 'geetha@gmail.com'
      },
      gender: 'female',
      hobbies: []
    });

  }
get hobbies(){
  return this.SignupForm.get('hobbies')['controls'];
}
  onSubmit(){
    console.log(this.SignupForm);
  }

  onAddHobby(){

    const group = new FormGroup({
      car: new FormControl(null, Validators.required),
      bike: new FormControl(null, Validators.required)
    });
    (<FormArray> this.SignupForm.get('hobbies')).push(group);
    console.log(this.SignupForm.get('hobbies'));
  }

  forbiddenNames(control: FormControl): {[s: string]: boolean}
  {
    if(this.forbiddenUserNames.indexOf(control.value) !== -1)
    {
      return {nameisForbidden: true};
    }

    return null;
  }

  forbiddenEmails(control: FormControl): Promise<any>|Observable<any>
  {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if(control.value === 'test@test.com')
        {
          resolve({emailIsForbidden: true});
        }
        else{
               resolve(null);
        }
      }, 1500);
    });
    return promise;
  }

  logout(){
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

}
