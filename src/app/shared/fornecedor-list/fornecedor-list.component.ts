import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-fornecedor-list',
  templateUrl: './fornecedor-list.component.html',
  styleUrls: ['./fornecedor-list.component.css']
})
export class FornecedorListComponent {
  @Input() fornecedores: any[] | undefined;
}
