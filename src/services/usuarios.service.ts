import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database/database';
import { Observable } from 'rxjs/Observable';

//Control de la lista de formularios
@Injectable()
export class UsuariosService{
    
    perfilData: Observable<any>    
    constructor(
        public afDatabase: AngularFireDatabase,
        ){}
    //notes:any= null;
    uid: any = null;    
       
    public getContactos(){
        return this.afDatabase.list('contactos/');
    }
    public getContacto(uid){
        return this.afDatabase.object('contactos/'+uid);
    }

    
}