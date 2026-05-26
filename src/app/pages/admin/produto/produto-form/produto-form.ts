import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Produto } from '../../../../model/produto';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { ProdutoService } from '../../../../services/produto-service';

@Component({
  selector: 'app-produto-form',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatButtonModule,
  ],
  templateUrl: './produto-form.html',
  styleUrl: './produto-form.scss',
})
export class ProdutoForm {
  form = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    preco: new FormControl<number>(0, [Validators.required, Validators.min(1)]),
    cor: new FormControl<string>('', [Validators.required]),
    imagem: new FormControl<string>('', []),
  });

  constructor(private produtoService: ProdutoService) {}

  salvar() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      // aqui vem a logica
      console.log(this.form.value);
      const p: Produto = {
        nome: this.form.value.nome!,
        cor: this.form.value.cor!,
        imagem: this.form.value.imagem!,
        preco: this.form.value.preco!,
        dataFabricacao: new Date(),
      };
      this.produtoService.salvarProduto(p);
    }
  }
}
