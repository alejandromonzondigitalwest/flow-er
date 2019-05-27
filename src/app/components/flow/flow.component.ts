import { Component, OnInit } from '@angular/core';
import { MatStepperModule } from '@angular/material/stepper';
import { ApiService } from '../../services/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBar } from '@angular/material';
import { Parser } from 'src/app/models/parser';
import { Mapper } from 'src/app/models/mapper';
import { Kafka } from 'src/app/models/kafka';
import { flow } from 'src/app/models/flow';

@Component({
  selector: 'app-flow',
  templateUrl: './flow.component.html',
  styleUrls: ['./flow.component.css']
})

export class FlowComponent implements OnInit {
    isLinear = true;
    firstFormGroup: FormGroup;
    secondFormGroup: FormGroup;
    thirdFormGroup: FormGroup;
    fourthFormGroup: FormGroup;
    fifthFormGroup: FormGroup;
    sixthFormGroup: FormGroup;
    seventhFormGroup: FormGroup;
    value: string;
  viewValue: string;
  parserList: Parser[]= [];
  mapperList: Mapper[]=[];
  mapperSelected: Mapper = new Mapper();
  parserSelected: Parser = new Parser();
  kafkaSelected: Kafka = new Kafka();
  flow: flow = new flow();
  kafka: string [] = [];
  parser:string;
  version:string;
  srcResult: any;
  flowNameSelected: any;
  file: any;
  

  
  constructor( private _formBuilder: FormBuilder,  public apiService: ApiService, private snackBar: MatSnackBar ) { }

  ngOnInit() {
  this.firstFormGroup = this._formBuilder.group({
        firstCtrl: ['', Validators.required]
        });
  this.secondFormGroup = this._formBuilder.group({
        secondCtrl: ['', Validators.required]
        });
  this.thirdFormGroup = this._formBuilder.group({
        thirdCtrl: ['', Validators.required]
        });
  this.fourthFormGroup = this._formBuilder.group({
         fourthCtrl: ['', Validators.required]
        });
  this.fifthFormGroup = this._formBuilder.group({
        fifthCtrl: ['', Validators.required]
        });
  this.sixthFormGroup = this._formBuilder.group({
        sixthCtrl: ['', Validators.required]
        });

       
        
        this.searchParser();
        console.log(this.parserList);
        this.searchMapper();
        console.log(this.mapperList);
       /* this.searchKafka();
        console.log(this.KafkaList);*/

  }
  openSnackBar(message) {
    this.snackBar.open(message, "ok", {
      duration: 5000,
    });
  }

  getFlowName(){
    this.apiService.get('flow').subscribe(
      data => {
        console.log('success query', data);
          if (data['status'] === true) {
            this.flow = data['flow'];
            //this.loaderService.display(false);
          } else {
            console.log('Error en consulta!');
            //this.loaderService.display(false);
          }
        },
        error => {
          console.log('oops', error);
          //this.loaderService.display(false);
        }
      );
    }

   /* getOutputOption(){
      this.apiService.get('flow').subscribe(
        data => {
          console.log('success query', data);
            if (data['status'] === true) {
              this.flow = data['flow'];
              //this.loaderService.display(false);
            } else {
              console.log('Error en consulta!');
              //this.loaderService.display(false);
            }
          },
          error => {
            console.log('oops', error);
            //this.loaderService.display(false);
          }
        );
      }*/

  searchParser(){
      //this.loaderService.display(true);
      this.apiService.get('parsers').subscribe(
        data => {
          console.log('success query', data);
          if (data['status'] === true) {
            this.parserList = data['parsers'];
            //this.loaderService.display(false);
          } else {
            console.log('Error en consulta!');
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
            this.mapperList = data['mappers'];
            //this.loaderService.display(false);
          } else {
            console.log('Error en consulta!');
            //this.loaderService.display(false);
          }
        },
        error => {
          console.log('oops', error);
          //this.loaderService.display(false);
        }
      );
    }
    
   
    searchKafka(){
      //this.loaderService.display(true);
      this.apiService.get('kafka').subscribe(
        data => {
          console.log('success query', data);
          if (data['status'] === true) {
            this.kafka = data['kafka'];
            //this.loaderService.display(false);
          } else {
            console.log('Error en consulta!');
            //this.loaderService.display(false);
          }
        },
        error => {
          console.log('oops', error);
          //this.loaderService.display(false);
        }
      );
    }
    // Cuando se selecciona el archivo a subir
  onSelectFile(event) {
    console.log("onSelectFile");

    if (event.target.files && event.target.files[0]) {
      this.file = event.target.files[0];
    }
  }

  // cuando presiona GO en el upload de archivo
  uploadDocument(file) {
    let fileReader = new FileReader();


    // aca defino que hace cuando termina de leer el archivo
    fileReader.onload = (e) => {

      this.enviarPost(fileReader.result);
      console.log(  fileReader.result );
    }
    // aca hago que leea el archivo
    fileReader.readAsText(this.file);

  }

  enviarPost(envio) {
    // this.loaderService.display(true);

    this.apiService.post('parsers', envio).subscribe(
      data => {

        console.log('success query', data);

        if (data['success'] === true) {
          // EL ENVIO FUE EXITOSO
          // LLAMAR LA RECARGA DEL FORMULARIO!!
          // this.loaderService.display(false);
          console.log('EL ENVIO FUE EXITOSO');
          this.openSnackBar('EL ENVIO FUE EXITOSO');
          this.searchParser();

        } else {
          console.log('Error al enviar el post');
          this.openSnackBar('ERROR AL ENVIAR EL POST');
          // this.loaderService.display(false);
        }
      },
      error => {
        console.log('oops', error);
        // this.loaderService.display(false);
      }
    );


  }

  
}


