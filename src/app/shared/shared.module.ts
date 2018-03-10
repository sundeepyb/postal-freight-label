import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, Http, XHRBackend, RequestOptions } from '@angular/http';

import { WizardComponent } from './wizard/wizard.component';
import { MatStepperModule, MatFormFieldModule, MatInputModule, MatProgressBarModule, 
  MatButtonModule, MatSelectModule, MatOptionModule, MatRadioModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressBarModule,
    MatButtonModule,
    MatSelectModule,
    MatOptionModule,
    MatRadioModule,
  ],
  declarations: [
    WizardComponent,
  ],
  exports: [ WizardComponent, CommonModule, FormsModule, HttpModule, ReactiveFormsModule ]
})
export class SharedModule { }