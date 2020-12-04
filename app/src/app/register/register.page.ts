import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public contact = {
    'name': '',
    'email': ''
  }

  constructor(private apiService: ApiService, public alertController: AlertController, private router: Router) { }

  ngOnInit() {

  }

  async sendEmailContact() {
    if(this.contact.name === '' && this.contact.email === ''){
      const alert = await this.alertController.create({
        header: 'Aviso',
        message: 'Preencha todos os campos!',
        buttons: ['OK']
      });
      await alert.present();
    }
    else{
      this.apiService.sendEmailContact(this.contact).subscribe()
      this.router.navigate(['home'])
    }
  }

}
