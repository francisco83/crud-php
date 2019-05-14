import { Component, OnInit } from '@angular/core';
import { Categoria } from '../categoria';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {
  categorias: Categoria[];

  constructor(private apiService: ApiService) { }

  ngOnInit() {


    this.apiService.readCategoria().subscribe((categorias: Categoria[]) => {
      this.categorias = categorias;
      console.log(this.categorias);
    });

  }

}
