import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";
import { Estoque } from "src/app/models/Estoque";
import { EstoqueService } from "src/app/shared/services/estoque.service";

@Injectable({ providedIn: "root" })
export class EstoqueResolve implements Resolve<Estoque[]> {

  constructor(private estoqueService: EstoqueService) {}

  resolve(
    route: ActivatedRouteSnapshot
  ):
    | Observable<Estoque[]>
    | Promise<Estoque[]>
    | Estoque[] {
    return this.estoqueService.buscarEstoques().pipe(
      catchError((error) => {
        return of(null);
      })
    );
  }
}
