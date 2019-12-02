import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private service:DataService,
    private router: Router) { }

  ngOnInit() {
    // observableResult = this.service.Delete()
    this.route.paramMap.subscribe((result)=>{
      let observableResult = this.service.Delete(result.get("Venue"));
      observableResult.subscribe((deleteResult)=>{
        //in case of error .. display error
        this.router.navigate(['/home']);
      });
    });
  }
}
