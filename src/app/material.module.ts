import { NgModule } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatFileUploadModule } from 'angular-material-fileupload';
@NgModule({
    imports: [
        MatSnackBarModule,
        CdkStepperModule,
        CdkTableModule,
        MatSidenavModule,
        MatToolbarModule,
        MatListModule,
        MatIconModule,
        MatTableModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        MatStepperModule,
        MatFileUploadModule
        
        
    ],
    exports: [ 
        MatSnackBarModule,
        CdkStepperModule,
        CdkTableModule,
        MatSidenavModule, 
        MatToolbarModule, 
        MatListModule, 
        MatIconModule, 
        MatTableModule, 
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        MatStepperModule
        

    ]
})
export class MaterialModule { }
