import { Component, OnInit, Input } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';

import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-new-tech',
  templateUrl: './new-tech.page.html',
  styleUrls: ['./new-tech.page.scss'],
})
export class NewTechPage implements OnInit {

  @Input() modalController: ModalController;
  public tech = {
    'name': '',
    'description': '',
    'img_url': null
  }

  public file: File

  constructor(private apiService: ApiService, public alertController: AlertController) { }

  ngOnInit() {
  }

  dismiss() {
    this.modalController.dismiss(null);
  }

  changeFileListener($event: any) {
    this.file = $event.target.files[0];
  }

  async submitForm(){    
    if(this.tech.name == '' && this.tech.description == '' && this.tech.img_url == null ){
      const alert = await this.alertController.create({
        header: 'Aviso',
        message: 'Preencha os campos e selecione uma imagem!',
        buttons: ['OK']
      });
      await alert.present();
    }
    else{
      this.apiService.postTech(this.tech, this.file).subscribe((result: any) => {
        this.modalController.dismiss(result);
      })
    }
  }

}
