import { Component, OnInit } from '@angular/core';
import { FornecedoresService } from '../../services/fornecedores.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private fornecedorService: FornecedoresService) {

  }
  ngOnInit(): void {
    this.fornecedorService.all().subscribe(result => {
      console.log(result);
    })
  }
}
