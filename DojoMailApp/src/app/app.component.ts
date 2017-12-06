import { Component } from '@angular/core';

var Email = class Email{
  address: string;
  importance: boolean;
  subject: string;
  content:string;

  constructor(address, importance, subject, content){
    this.address = address;
    this.importance = importance;
    this.subject = subject;
    this.content = content;
  }
}

var email1 = new Email('bill@gates.com',true, 'New Windows', 'Windows XI will launch in 2100')
var email2 = new Email('ada@lovelace.com',true,'Programming','Enchantress of numbers')
var email3 = new Email('john@carmac.com',false,'Updated algo','New algorithm for shadow volumes')
var email4 = new Email('gabe@newel.com',false,'HL3!','Just kidding!')

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dojo Mail';
  emails = [email1, email2, email3, email4]
  
}
