import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { MenuComponent } from './menu.component';
import { FormAddComponent } from './form-add/form-add.component';
import { PlatComponent } from './plat/plat.component';
import {FormsModule} from "@angular/forms";
import { ModifyComponent } from './plat/modify/modify.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AppRoutingModule,
    FormsModule
  ],
  declarations: [MenuComponent,FormAddComponent,PlatComponent, ModifyComponent],
  exports:[]
})
export class MenuModule { }
