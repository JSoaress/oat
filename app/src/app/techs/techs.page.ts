import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';

import { NewTechPage } from '../new-tech/new-tech.page';
import { EditTechPage } from '../edit-tech/edit-tech.page';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-techs',
  templateUrl: './techs.page.html',
  styleUrls: ['./techs.page.scss'],
})
export class TechsPage implements OnInit {

  public techs = []

  constructor(private apiService: ApiService, public alertController: AlertController, private router: Router, private modalController: ModalController) { }

  ngOnInit() {
    this.loadTechs();
  }

  loadTechs() {
    this.apiService.getTechs().subscribe((result: any) => this.techs = result)
  }

  async presentNewTech() {
    const modal = await this.modalController.create({
      component: NewTechPage,
      componentProps: {
        'modalController': this.modalController
      }
    })

    await modal.present();

    const { data } = await modal.onWillDismiss();
    if(data){
      this.loadTechs();
    }
  }

  async editTech(tech: any) {
    const modal = await this.modalController.create({
      component: EditTechPage,
      componentProps: {
        'modalController': this.modalController,
        'tech': tech
      }
    })

    await modal.present();

    const { data } = await modal.onWillDismiss();
    if(data){
      this.loadTechs();
    }
  }

  async deleteTech(tech: any) {
    const alert = await this.alertController.create({
      header: 'Aviso',
      message: `Deseja excluir a tarefa "${tech.name}"`,
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {}
        }, {
          text: 'Deletar',
          handler: () => {
            this.apiService.deleteTech(tech).subscribe();
            this.loadTechs();
          }
        }
      ]
    });
    await alert.present();
  }

}
