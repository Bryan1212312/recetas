import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Router, RoutesRecognized } from '@angular/router';
import { SesionService } from './core/service/sesion.service';
import { RecetasService } from './core/service/recetas.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  showModal: boolean = false;

  title = 'app';

  mostarAciones!: boolean;

  file!: any

  private elDestructor$ = new Subject<any>();

  showLoading: boolean = true;

  constructor(public srvSesion: SesionService,
      public srvRecetas: RecetasService
    ) {}

  ngOnInit(): void {
    this.srvSesion.selectSesion$.pipe(takeUntil(this.elDestructor$)).subscribe({
      next: (data: any) => {
        console.log('Sesion: ', data);
        this.mostarAciones = data;
      },
    });
  }

  toggleModal() {
    this.showModal = !this.showModal;
  }

  agregar(){
    this.srvRecetas.postRecetas(this.file)
    .pipe(takeUntil(this.elDestructor$))
    .subscribe({
      next:(datos:any) =>{
        console.log('Lo que envia el backend');
      },
      error: (err) =>{
        console.log(err);
      }
    })
  }

  cerrarSesion() {
    this.srvSesion.setSesion(false);
  }

  ngOnDestroy(): void {
    this.elDestructor$.next(true);
    this.elDestructor$.unsubscribe();
  }
}
