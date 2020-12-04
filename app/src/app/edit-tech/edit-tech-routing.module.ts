import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditTechPage } from './edit-tech.page';

const routes: Routes = [
  {
    path: '',
    component: EditTechPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditTechPageRoutingModule {}
