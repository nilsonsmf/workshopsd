import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FornecedorMockService {
  mockUrl = '/assets/fornecedores.json';
  constructor(private http: HttpClient) {}

  all(): Observable<Object> {
    return this.http.get(this.mockUrl);
  }
}
