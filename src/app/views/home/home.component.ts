import { Component, OnInit } from '@angular/core';
import { FornecedoresService } from '../../services/fornecedores.service';
import { FornecedorMockService } from '../../services/fornecedor-mock.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  fornecedores: any[] | undefined;
  constructor(private fornecedorService: FornecedorMockService) {

  }
  ngOnInit(): void {
    this.fornecedorService.all().subscribe((result: any) => {
      console.log(result);
      this.fornecedores = result._embedded.fornecedores;
    })
  }
}
