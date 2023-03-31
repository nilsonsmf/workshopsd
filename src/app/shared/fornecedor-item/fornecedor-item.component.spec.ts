import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FornecedorItemComponent } from './fornecedor-item.component';

describe('FornecedorItemComponent', () => {
  let component: FornecedorItemComponent;
  let fixture: ComponentFixture<FornecedorItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FornecedorItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FornecedorItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
