import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from '../loginservice.service';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {
  username:any;
  password:any;
  email:any;
  value:any;
  confirmpassword:any;
  constructor(private loginservice : LoginserviceService) { }
login()
{
  console.log(this.password);
  console.log(this.email);
  this.loginservice.loginsearch(this.password , this.email).subscribe(x =>{ 
     if(x==1)
    alert("logged in successful");
  else
    alert("login Failed");
  	
    });
   
}
 openForm() 
 {
  document.getElementById("myForm").style.display = "block";
}

 closeForm() {
  document.getElementById("myForm").style.display = "none";
  }
   closeForm1() {
  document.getElementById("myForm1").style.display = "none";
  }
 signUp(){
   
document.getElementById("myForm1").style.display = "block";
}
 Validate() {

        
        if (this.password != this.confirmpassword) {
            alert("Passwords do not match.");
        }
else
   this.signup();
   this.closeForm();
   this.closeForm1();
    }


signup()
{
  this.loginservice.signup(this.username,this.password ,this.email).subscribe(x =>{ 
    if(x==1)
      alert("Success");
    else
    alert("Failed");
  	console.log(this.value)
  	});
}
  ngOnInit() {
  }

}
