import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { PlatResolver } from './resolver/platResolver.service';
import { PlatComponent } from './menu/plat/plat.component';
import { FormAddComponent } from './menu/form-add/form-add.component';
 
const appRoutes: Routes = [
  { path: '',   component:MenuComponent },
  { path: 'addPlat',   component:FormAddComponent },
  { path: 'platDetail/:id',   component:PlatComponent,
resolve:{
    plat:PlatResolver
} },
];
 
@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes, // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ],
  providers:[PlatResolver]
})
export class AppRoutingModule {}