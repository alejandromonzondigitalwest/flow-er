import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { MatTableDataSource } from '@angular/material';
import {MatSnackBar} from '@angular/material';
@Component({
  selector: 'app-lookup',
  templateUrl: './lookup.component.html',
  styleUrls: ['./lookup.component.css']
})
export class LookupComponent implements OnInit {
  displayedColumns: string[] =['Parser', 'Version'];
  configName:string;
  parser:string;
  file: any;
  value = 'Clear me';
  filter;
  dataSource = new MatTableDataSource ();

  constructor(public apiService: ApiService, private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.searchParser();
    console.log(this.dataSource);
  }

  openSnackBar(message) {
    this.snackBar.open(message, "ok", {
      duration: 5000,
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    //console.log(this.dataSource);

  }

  //Cuando se selecciona el archivo a subir
  onSelectFile(event) {
    console.log("onSelectFile");

    if (event.target.files && event.target.files[0]) {
      this.file = event.target.files[0];
    }
  }

  //cuando presiona GO en el upload de archivo
  uploadDocument(file) {
    let fileReader = new FileReader();


    //aca defino que hace cuando termina de leer el archivo
    fileReader.onload = (e) => {

      this.enviarPost(fileReader.result);
      console.log(  fileReader.result );

    }
    //aca hago que leea el archivo
    fileReader.readAsText(this.file);

  }

  enviarPost(envio){
    //this.loaderService.display(true);

    this.apiService.post('parsers',envio).subscribe(
      data => {

        console.log('success query', data);

        if (data['success'] === true) {
          //EL ENVIO FUE EXITOSO
          //LLAMAR LA RECARGA DEL FORMULARIO!!
          //this.loaderService.display(false);
          console.log('EL ENVIO FUE EXITOSO');
          this.openSnackBar('EL ENVIO FUE EXITOSO');
          this.searchParser();

        } else {
          console.log('Error al enviar el post');
          this.openSnackBar('ERROR AL ENVIAR EL POST');
          //this.loaderService.display(false);
        }
      },
      error => {
        console.log('oops', error);
        //this.loaderService.display(false);
      }
    );


  }

  searchParser(){
    //this.loaderService.display(true);
    this.apiService.get('parsers').subscribe(
      data => {

        console.log('success query', data);

        if (data['status'] === true) {

          this.dataSource = new MatTableDataSource(data['parsers']);

        } else {
          console.log('Error en consulta!');
        }
      },
      error => {
        console.log('oops', error);
      }
    );
  }

  clean() {
    this.file = "";
  }

}


