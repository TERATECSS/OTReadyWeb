import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
//import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { ListaPage } from '../lista/lista';
import { InfoPage } from '../info/info';
import { PerfilService } from '../../services/perfil.service';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { ContactosPage } from '../contactos/contactos';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  userId = this.afAuth.auth.currentUser.uid;
  perfilData: Observable<any>;
  coor: boolean;
  perfilUser : any;
  perfil: any = null;

  constructor(
    private afAuth: AngularFireAuth,
    public navCtrl: NavController,
    public afDatabase: AngularFireDatabase,
    public perfilService: PerfilService,
    public navParams: NavParams,
    ) {

    this.perfilData = afDatabase.object(`profile/`+ this.userId).valueChanges()

    if(this.perfil != 0){
      perfilService.getPerfil(this.perfil)
        .valueChanges().subscribe(profile =>{
          if (profile == "Coordinador"){
            console.log("Sesión de Coordinador");
            this.coor = true
          }else if (profile == "Gerencial"){
            console.log("Sesión de Gerente");
            this.coor = true
          }else{
            console.log("Sesión de Técnico / Supervisor")
            this.coor = false;
          }
         })
      };
    }
  
  logout(){
   this.afAuth.app.auth().signOut().then(() => {
      console.log("Sesión cerrada");
      this.navCtrl.setRoot('LoginPage');
    });
  }

  toListaPage(){
    this.navCtrl.push(ListaPage);
  }

  toInfoPage(){
    this.navCtrl.push(InfoPage);
  }

  toUsuariosPage(){
    this.navCtrl.push(ContactosPage);
  }

  ionViewDidLoad() {
  }

}
