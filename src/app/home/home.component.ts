import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  records :any;

  constructor(private service: DataService, private router:Router) { }

  ngOnInit() {

    let observableResult = this.service.Select();
    observableResult.subscribe((result)=>{

      console.log(result);

       this.records = result;
    });
  }

  toInsert()
  {
    this.router.navigate(['/register']);
  }

}
