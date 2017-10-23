import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MdMenuModule, MdButtonModule, MdCheckboxModule} from '@angular/material';

const MATERIAL_MODULES = [
  MdMenuModule,
  MdButtonModule,
  MdCheckboxModule
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
