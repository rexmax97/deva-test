import { Component, isDevMode, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatProgressBar} from '@angular/material/progress-bar';
import { MatSort, Sort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Movie } from 'src/app/interfaces/movie';
import { MoviesService } from 'src/app/services/movies/movies.service';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator | null;
  @ViewChild(MatSort)
  sort: MatSort = new MatSort;

   //Mensaje de bienvenida
   homeMessage="¡Bienvenido!";
  //Indicador de carga
  isLoading=true;
  //Columnas de tabla
  displayedColumns: string[] = ['title', 'year', 'cast', 'genres'];
  //Datos peliculas
  dataMovies:Movie[]=[];
  //Datos tabla
  dataSource!: MatTableDataSource<any> ;

  constructor(private ms: MoviesService) {

  }

  ngOnInit(): void {

    this.isLoading=true;
    this.ms.getMovies().subscribe(data=>{
      this.isLoading=false;
      this.dataMovies=data;
      this.dataSource = new MatTableDataSource(this.dataMovies);
      this.dataSource.paginator = this.paginator
      this.dataSource.sort = this.sort;
    })
  }

}
