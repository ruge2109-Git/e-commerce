import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { CategoriaService } from 'src/app/services/categoria.service';
import { ObtenerCategorias } from 'src/app/states/categorias/categoria.actions';
import { Categoria } from 'src/app/states/categorias/categoria.model';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent implements OnInit {

  public categorias:Observable<Categoria[]>;
  public longitudCategorias:number = 0;


  constructor(private store:Store, private categoriaService:CategoriaService) {

    categoriaService.obtenerTodas();

    store.dispatch(new ObtenerCategorias());
    this.categorias = this.store.select(state => {
      this.longitudCategorias = state.categoria.categorias.length;
      return state.categoria.categorias;
    });

  }

  ngOnInit(): void {

  }

}
