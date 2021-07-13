import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CategoriaService } from 'src/app/services/categoria.service';
import { ObtenerCategorias } from 'src/app/states/categorias/categoria.actions';
import { Categoria, Categorias } from 'src/app/states/categorias/categoria.model';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent implements OnInit {

  public categorias$:Observable<Categoria[]>;
  public longitudCategorias:number = 0;


  constructor(
    private store:Store<Categorias>,
    private categoriaService:CategoriaService
  )
  {

    this.categoriaService.obtenerTodas();

    store.dispatch(new ObtenerCategorias());
    this.categorias$ = this.store.select(state => {
      this.longitudCategorias = state.categorias.length;
      return state.categorias;
    });

  }

  ngOnInit(): void {

  }

}
