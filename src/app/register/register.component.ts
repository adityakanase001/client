import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  record = {
    "Country" : "",
    "Year" : "",
    "NoofTeam" :"",
    "Venue" : ""
  };

  constructor(private service: DataService, private router:Router) { }

  ngOnInit() {
  }

  Insert()
  {
    console.log(this.record);
    let observableResult = this.service.Insert(this.record);
    observableResult.subscribe( (result)=>{
      console.log(result);
      this.router.navigate(['/home']);
      // this.record = {
      //   "Country" : "",
      //   "Year" : "",
      //   "NoofTeam" :"",
      //   "Venue" : ""
      // };
    });
  }

  callMeToCancel()
  {
    this.router.navigate(['/home']);
  }
}