import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ModalController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { PerfilService } from '../../services/perfil.service';
import { UsuariosService } from '../../services/usuarios.service';
import { ContactoPage } from '../contacto/contacto';
import { Observable } from 'rxjs/Observable';


@IonicPage()
@Component({
  selector: 'page-contactos',
  templateUrl: 'contactos.html',
})
export class ContactosPage {
  contacts: any = null;

  contactos : any = {uid: null, cargo: null, firstName: null, lastName: null}
  uid: any = null;

  usuarioCoor: boolean;  
  perfil: any = null;
  body: any;
  contactosData: Observable<any>;





  @ViewChild('myNav') nav: NavController;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams, 
    public usuarioService : UsuariosService,
    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController,
    public perfilService: PerfilService,
  )
    {

      if(this.perfil != 0){
        perfilService.getPerfil(this.perfil)
          .valueChanges().subscribe(profile =>{
            if (profile == "Coordinador"){
              console.log("Sesión de Coordinador");
              this.usuarioCoor = true;
            }else if (profile == "Gerencial"){
              console.log("Sesión de Gerente");
              this.usuarioCoor = true;
            }else{
              console.log("Sesión de Técnico / Supervisor")
              this.usuarioCoor = false;
            }
           })
      }

      
      //leer lista de Ots, Firebase
      this.uid = navParams.get(`uid`);
      if(this.uid != 0){
      let loader = this.loadingCtrl.create({
        content: "Cargando Contactos...",
        duration: 2000
      });
      loader.present();
      usuarioService.getContactos()
        .valueChanges().subscribe( contactos => {
          console.log(contactos)
            this.contacts = contactos;
        });
      };
    }
  ionViewDidLoad() {
    console.log(this.uid);
    console.log('ionViewDidLoad ContactosPage');
  }

  //A contactos
  toContactoPage(uid){
    this.perfilService.getPerfil(this.perfil)
    .valueChanges().subscribe(profile =>
        this.navCtrl.push(ContactoPage, {uid:uid})
      )}

}