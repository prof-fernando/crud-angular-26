import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Produto } from '../../../../model/produto';

@Component({
  selector: 'app-produto-form',
  imports: [ReactiveFormsModule],
  templateUrl: './produto-form.html',
  styleUrl: './produto-form.scss',
})
export class ProdutoForm {
  form = new FormGroup({
    nome: new FormControl('professor', [Validators.required]),
  });
}
