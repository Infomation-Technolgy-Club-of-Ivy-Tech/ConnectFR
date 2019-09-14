import { Component } from '@angular/core';
import { FirebaseAuthentication } from '@ionic-native/firebase-authentication/ngx';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  constructor(private firebaseAuthentication: FirebaseAuthentication) {
    this.firebaseAuthentication.createUserWithEmailAndPassword('test@gmail.com', '123456')
    .then((res: any) => console.log(res))
    .catch((error: any) => console.error(error));
  }
}
