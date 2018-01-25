import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Toast } from '@ionic-native/toast';
import { Push } from '@ionic-native/push';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FIREBASE_CONFIG } from './app.firebase.module';
import { LoginPageModule } from '../pages/login/login.module';
import { ListaPageModule } from '../pages/lista/lista.module';
import { InfoPageModule } from '../pages/info/info.module';
import { ContactosPageModule } from '../pages/contactos/contactos.module';
import { ContactoPageModule } from '../pages/contacto/contacto.module';
import { FormularioCPageModule } from '../pages/formulario-c/formulario-c.module';

import { NotesService } from '../services/note.service';
import { PerfilService } from '../services/perfil.service';
import { UsuariosService } from '../services/usuarios.service';

import { DateTime } from 'ionic-angular/components/datetime/datetime';


@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    InfoPageModule,
    LoginPageModule,
    ListaPageModule,
    FormularioCPageModule,
    ContactosPageModule,
    ContactoPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NotesService,
    PerfilService,
    DateTime,
    Toast,
    Push,
    UsuariosService
  ]
})
export class AppModule {}
