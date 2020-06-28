import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  password: string;

  constructor(private authService: AuthService,
              private router: Router,
              private alertController: AlertController) { }

  ngOnInit() {
  }

  async login() {
    try {
      await this.authService.login(this.email,this.password);
      this.router.navigateByUrl('/list')
    }catch (error){
      console.log("Error");
      this.presentAlert();
    }
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Conexión fallida',
      subHeader: 'No se ha podido acceder a la cuenta',
      message: 'El correo electrónico o contraseña no són válidos.',
      buttons: ['Aceptar']
    });

    await alert.present();
  }
}
