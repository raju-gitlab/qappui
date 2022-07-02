// import { DataserviceService } from './../dataservice.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login-dialouge',
  templateUrl: './login-dialouge.component.html',
  styleUrls: ['./login-dialouge.component.css']
})
export class LoginDialougeComponent implements OnInit {

  loginForm = new FormGroup({
    Value: new FormControl('', Validators.required),
    Key: new FormControl('', Validators.required)
  });

  RegistrationForm = new FormGroup({
    gender: new FormControl('', Validators.required),
    phonenumber: new FormControl('', Validators.required),
    I1: new FormControl('', Validators.required),
    I2: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required)
  });

  // constructor(private dataservice: DataserviceService) { }
  @ViewChild('myCheckbox') mychekbox: any;
  IsviewLoginPanel: any = 1;
  IsviewPasswordPanel: any = 0;
  IsviewRegistrationPanel: any = 0;

  ValidUser() {
    // this.dataservice.Get("Auth/ValidateUser?Email=" + this.loginForm.value.Value).subscribe(data => {
    //   if (data) {
    //     console.log(data);
    //     this.IsviewLoginPanel = 0;
    //     this.IsviewPasswordPanel = 1;
    //   }
    //   else {
    //     this.IsviewLoginPanel = 0;
    //     this.IsviewRegistrationPanel = 1;
    //   }
    // },
    // error => {
    // });
  }
  reset() {
    this.IsviewLoginPanel = 1;
    this.IsviewPasswordPanel = 0;
    this.IsviewRegistrationPanel = 0;
  }

  gendertoggle(parameter: any) {
    if (parameter == "male") {
      this.RegistrationForm.patchValue({ ["gender"]: parameter });
    }
    else {
      this.RegistrationForm.patchValue({ ["gender"]: parameter });
    }
  }
  SubmitUserDetails() {
    // this.RegistrationForm.patchValue({ ["I1"]: this.loginForm.value.I1 });
    // this.dataservice.post("Auth/Registration", this.RegistrationForm.value).subscribe(data => {
    //   console.log(data);
    // },
    //   error => {
    //     console.error(error);
    //   });
  }
  filterResults(obj: any, isChecked: boolean) {
    console.log(obj);
    console.log(isChecked); // {}, true || false
  }
  PostLogin() {
    // this.dataservice.Get("Auth/Login?Value=" + this.loginForm.value.Value +"&Key="+this.loginForm.value.Key).subscribe(data =>{
    //   console.log("Success");
    // },
    // error=>{
    //   console.error("No Response");
    // });
  }

  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;

  ngOnInit(): void {
  }

}
