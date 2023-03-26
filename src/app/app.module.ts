import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './views/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FornecedorListComponent } from './shared/fornecedor-list/fornecedor-list.component';
import { FornecedorItemComponent } from './shared/fornecedor-item/fornecedor-item.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, FornecedorListComponent, FornecedorItemComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
