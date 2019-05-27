import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Mapper } from '../../models/mapper';
import { MatTableDataSource } from '@angular/material';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-mapper',
  templateUrl: './mapper.component.html',
  styleUrls: ['./mapper.component.css']
})
export class MapperComponent implements OnInit {
  mapperList: Mapper[]= [];
  displayedColumns: string[] =['mapper', 'Version'];
  configName:string;
  mapper:string;
  //version:string;
  file : any;
  filter;
  dataSource = new MatTableDataSource ();

  constructor( public apiService: ApiService, private snackBar: MatSnackBar) { 
    
  }

  ngOnInit() {
    this.searchMapper();
    console.log(this.mapperList);

  }

  openSnackBar(message) {
    this.snackBar.open(message, "OK", {
      duration: 5000,
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    //console.log(this.dataSource);
    
  }

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      this.file = event.target.files[0];
    }
  }

  uploadDocument(file) {
    let fileReader = new FileReader();

    fileReader.onload = (e) => {

      this.enviarPost(fileReader.result);
      console.log(  fileReader.result );

    }
    //aca hago que leea el archivo
    fileReader.readAsText(this.file);

  }

  enviarPost(envio){
   
    this.apiService.post('mappers',envio).subscribe(
      data => {

        console.log('success query', data);

        if (data['success'] === true) {
          //EL ENVIO FUE EXITOSO
          //LLAMAR LA RECARGA DEL FORMULARIO!!
          //this.loaderService.display(false);
          console.log('EL ENVIO FUE EXITOSO');
          this.openSnackBar('EL ENVIO FUE EXITOSO');
          this.searchMapper();

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

  searchMapper(){
    //this.loaderService.display(true);
    this.apiService.get('mappers').subscribe(
      data => {

        console.log('success query', data);

        if (data['status'] === true) {

          this.dataSource = new MatTableDataSource(data['mappers']);
          

        } else {
          console.log('Error en consulta!');
         
        }
      },
      error => {
        console.log('oops', error);
        
      }
    );
  }
  
  clean(){
    this.file ="";
  }

}
