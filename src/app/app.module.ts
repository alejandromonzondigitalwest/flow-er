import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material.module';
import { ParserComponent } from './components/parser/parser.component';
import { app_routing} from "./app.routes";
import { MapperComponent } from './components/mapper/mapper.component';

import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './nav/nav.component';
import { FlowComponent } from './components/flow/flow.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LookupComponent } from './components/lookup/lookup.component';
import { MatSelectModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    ParserComponent,
    MapperComponent,
    NavComponent,
    FlowComponent,
    LookupComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    app_routing,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
