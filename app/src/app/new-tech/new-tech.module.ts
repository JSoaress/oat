import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewTechPageRoutingModule } from './new-tech-routing.module';

import { NewTechPage } from './new-tech.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewTechPageRoutingModule
  ],
  declarations: [NewTechPage]
})
export class NewTechPageModule {}
