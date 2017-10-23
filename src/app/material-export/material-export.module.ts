import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatMenuModule, MatButtonModule, MatCheckboxModule} from '@angular/material';

const MATERIAL_MODULES = [
  MatMenuModule,
  MatButtonModule,
  MatCheckboxModule
];

@NgModule({
  imports: [
    CommonModule,
    MATERIAL_MODULES
  ],
  declarations: [],
  exports: [MATERIAL_MODULES]
})
export class MaterialExportModule { } 
