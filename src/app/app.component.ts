import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'aem-community-angular-back';

    ngOnInit(){
        firebase.initializeApp({
            apiKey: "AIzaSyCcWsp_AUm-GyGIErtIqncLJK4Yjr0gWCg",
            authDomain: "community-affea.firebaseapp.com",
        });
    }
}
