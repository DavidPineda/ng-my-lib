import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MyInputComponet } from './myInput.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    MyInputComponet
  ],
  exports: [
    MyInputComponet
  ]
})

export class MyInputModule {}
