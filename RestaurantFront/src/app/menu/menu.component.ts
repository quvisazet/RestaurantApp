import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
output:any;
  constructor(private api:ApiService) { }

  ngOnInit() {
    this.api.getPlats().subscribe(value=>{
      console.log(value);
      this.output=value;
    })
  }

}
