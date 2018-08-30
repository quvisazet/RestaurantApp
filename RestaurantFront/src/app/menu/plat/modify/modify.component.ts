import { Component, OnInit, Input } from '@angular/core';
import { Plat } from '../../../model/plat';
import { ApiService } from '../../../api.service';

@Component({
  selector: 'app-modify',
  templateUrl: './modify.component.html',
  styleUrls: ['./modify.component.css']
})
export class ModifyComponent implements OnInit {
  @Input() plat:Plat;
  state:boolean=false;
  constructor(private api:ApiService) { }
  onSubmit(){
    this.api.modifyPlat(this.plat);
    this.state=true;
  }
  ngOnInit() {
  }

}
