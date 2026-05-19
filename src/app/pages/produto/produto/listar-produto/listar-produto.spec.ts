import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarProduto } from './listar-produto';

describe('ListarProduto', () => {
  let component: ListarProduto;
  let fixture: ComponentFixture<ListarProduto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarProduto],
    }).compileComponents();

    fixture = TestBed.createComponent(ListarProduto);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
