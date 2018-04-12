import { NotificationService } from '../../shared/notification.service';
import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import * as firebase from 'firebase';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private notifier: NotificationService) { }

  ngOnInit() {
  }
   onSubmit(form: NgForm) {
     const fullname = form.value.fullname;
     const email = form.value.email;
     const password = form.value.password;
     console.log(fullname , email, password);
     firebase.auth().createUserWithEmailAndPassword(email, password).then(
     userData => {
       userData.sendEmailVerification();
       const message = 'A verification email has been sent to ${email}.';
       this.notifier.display('success', message);
       return firebase.database().ref().set({
         email: email,
         uid: userData.uid,
         registrationDate: new Date().toString(),
         name: fullname
       }).then( () => {
         firebase.auth().signOut();
       });


     }).catch( err => {
       this.notifier.display('error',err.message);
     console.log(err);
     }

     );
   }

  }



