import { Component, OnInit, Input } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';

import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-edit-tech',
  templateUrl: './edit-tech.page.html',
  styleUrls: ['./edit-tech.page.scss'],
})
export class EditTechPage implements OnInit {

  @Input() modalController: ModalController;
  @Input() tech;

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
      this.apiService.editTech(this.tech, this.file).subscribe((result: any) => {
        this.modalController.dismiss(result);
      })
    }
  }

}
