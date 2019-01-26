import { Component, OnInit } from '@angular/core';
import { ContactStore } from '../contact-store';

import { addContact } from '../actions';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contactID: number;

  constructor(private store: ContactStore) {
    this.contactID = 0;
  }

  ngOnInit() {
  }

  addContact(contact) {
    this.store.dispatch(addContact(contact, this.contactID++));
  }
}
