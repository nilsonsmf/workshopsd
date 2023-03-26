import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FornecedoresService {
  constructor(private http: HttpClient) {}

  all(): Observable<Object> {
    return this.http.get(
      'http://compras.dados.gov.br/fornecedores/v1/fornecedores.json?uf=DF'
    );
  }
}
