import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute } from '@angular/router';
import { Plat } from '../../model/plat';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-plat',
  templateUrl: './plat.component.html',
  styleUrls: ['./plat.component.css']
})
export class PlatComponent implements OnInit {
  plat:Plat;
  editMode:boolean=false;
  constructor(private route: ActivatedRoute,private api:ApiService) { }
  onSubmit(){
    this.api.deletePlat(this.plat.id);
  }
  modify(){
this.editMode=!this.editMode;
  }
  ngOnInit() {
    this.route.data.subscribe((data:{plat:Plat})=>{
      this.plat=data.plat;
    })
  }

}
