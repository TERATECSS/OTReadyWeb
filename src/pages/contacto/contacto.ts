import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { HomePage } from '../home/home';
import { PerfilService } from '../../services/perfil.service';
import { Platform } from 'ionic-angular/platform/platform';
import { UsuariosService } from '../../services/usuarios.service';

declare var google;

@IonicPage()
@Component({
  selector: 'page-contacto',
  templateUrl: 'contacto.html',
})
export class ContactoPage {

  public currentDate: number;
  public homePage: HomePage;

  map: any;
  
  contacto: any = { 
    cargo: null,
    firstName: null,
    lastName: null,
    perfil: null,
  };

  ubicacionDataLat: Observable<any>;
  ubicacionDataLng: Observable<any>;

  uid: any = null;
  tipo: any = null;
  contactoData: Observable<any>
  contactoCoor: boolean; 
  perfil: any = null;
  lat: any = null;
  lng: any = null;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public usuarioService: UsuariosService,
    private afDatabase: AngularFireDatabase,
    public alert: AlertController,
    public perfilService: PerfilService,
    public popoverCtrl: PopoverController,
    private platform: Platform,
  ) {

    if(this.perfil != 0){
      perfilService.getPerfil(this.perfil)
        .valueChanges().subscribe(profile =>{
          if (profile == "Coordinador"){
            console.log("Sesión de Coordinador");
            this.contactoCoor = true
          }else if (profile == "Gerencial"){
            console.log("Sesión de Gerente");
            this.contactoCoor = true
          }else{
            console.log("Sesión de Técnico / Supervisor")
            this.contactoCoor = false
          }
         })

    }

    this.uid = navParams.get('uid');

    if(this.uid != 0){
      usuarioService.getContacto(this.uid)
        .valueChanges().subscribe(contacto =>{
          console.log(contacto)
          this.contacto = contacto});
    }

    this.contactoData = afDatabase.object(`contactos/`+this.uid).valueChanges()
    this.ubicacionDataLat = afDatabase.object(`contactos/`+this.uid+`/ubicacion`).valueChanges()
    this.ubicacionDataLng = afDatabase.object(`contactos/`+this.uid+`/ubicacion`).valueChanges()

  }

  //mapas
  ionViewDidLoad() {
    
  }

  public getLat(lat){
    return this.afDatabase.object(`contactos/`+this.uid+`/ubicacion/latitud`+lat);   
  }

  public getLng(lng){
    return this.afDatabase.object(`contactos/`+this.uid+`/ubicacion/longitud`+lng);   
  }

}
