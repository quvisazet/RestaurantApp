import { Injectable } from "@angular/core";
import {
  Router,
  ActivatedRouteSnapshot
} from "@angular/router";
import { Observable, of } from "rxjs";
import {  catchError, first } from "rxjs/operators";
import { ApiService } from "../api.service";
@Injectable({
  providedIn: "root"
})
export class PlatResolver {
  constructor(private plat: ApiService, private router: Router) {}

  resolve(
    route: ActivatedRouteSnapshot
  ): Observable<any> {
    let id = route.paramMap.get("id");

    return this.plat.getPlat(id).pipe(
      first(),
      catchError(error => {
        this.router.navigateByUrl("/");
        return of(null);
      })
    );
  }
}