import { Injectable } from '@angular/core';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';
import { Produto } from '../model/produto';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  constructor(private firestore: Firestore) {}

  salvarProduto(prod: Produto) {
    // pega a referencia da colecao
    const ref = collection(this.firestore, 'produtos');
    //adiciona o item na coleção
    addDoc(ref, prod);
  }
}
