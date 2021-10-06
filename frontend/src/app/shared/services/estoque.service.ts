import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Estoque } from 'src/app/models/Estoque';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EstoqueService {

  constructor(private http: HttpClient) { }

  criarEstoque(estoque: Estoque) {
    return this.http.post(`${environment.apiUrl}/estoque/create`, estoque);
  }

  buscarEstoques(pagina: number = 1) {
    return this.http.get(`${environment.apiUrl}/estoque/list`);
  }

  atualizarEstoque(estoque: Estoque) {
    return this.http.post(`${environment.apiUrl}/estoque/update`, estoque)
  }

  deletarEstoque(id: string) {
    return this.http.delete(`${environment.apiUrl}/estoque/delete/${id}`)
  }

}
