import { Component, OnInit } from '@angular/core';
import { Plat } from '../../model/plat';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-form-add',
  templateUrl: './form-add.component.html',
  styleUrls: ['./form-add.component.css']
})
export class FormAddComponent implements OnInit {
  plat:Plat={id:0,nom:"",description:"",prix:0,categorie:null};
  constructor(private api:ApiService) { }
  options;
  ngOnInit() {
    this.api.getCategories().subscribe(value=>{
      this.options=value;
    })
  }
  onSubmit(){
this.api.addPlat(this.plat);
  }

}
