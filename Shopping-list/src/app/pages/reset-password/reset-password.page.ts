import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {

  email: string;

  constructor(private authService: AuthService,
     private alertController:AlertController,
     private router: Router) { }

  ngOnInit() {
  }

  resetPassword(){
    this.authService.resetPassword(this.email).then(
      () => {
        this.alertResetPassword();
        this.router.navigateByUrl('/login');
      }
    ).catch(
      (error) => {
        this.alertError();
        console.error(error);}
    );
  }

  async alertResetPassword() {
    const alert = await this.alertController.create({
      header: 'Recuperación de contraseña',
      message: 'Email de recuperación de contraseña enviado correctamente',
      buttons: ['Aceptar']
    });

    await alert.present();
  }
  
  async alertError() {
    const alert = await this.alertController.create({
      header: 'Recuperación de contraseña',
      message: 'Error! No se ha podido enviar el email para recuperar la contraseña',
      buttons: ['Aceptar']
    });

    await alert.present();
  }

}
