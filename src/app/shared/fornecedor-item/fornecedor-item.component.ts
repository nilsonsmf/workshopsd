import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-fornecedor-item',
  templateUrl: './fornecedor-item.component.html',
  styleUrls: ['./fornecedor-item.component.css']
})
export class FornecedorItemComponent {
  @Input() fornecedor: any;
}
