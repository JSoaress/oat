import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditTechPageRoutingModule } from './edit-tech-routing.module';

import { EditTechPage } from './edit-tech.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditTechPageRoutingModule
  ],
  declarations: [EditTechPage]
})
export class EditTechPageModule {}
