
import 'package:flutter/material.dart';
import "../models/contact_data.dart";
import 'contact_presenter.dart';

class ContactsScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return new Scaffold(
        appBar: new AppBar(
          title: new Text("Contacts"),
        ),
        body: new ContactList()
    );
  }

}

class ContactList extends StatefulWidget{
  ContactList({ Key key }) : super(key: key);

  @override
  _ContactListState createState() => new _ContactListState();
}


class _ContactListState extends State<ContactList> implements ContactListViewContract {

  ContactListPresenter _presenter;

  List<Contact> _contacts;

  bool _IsSearching;

  _ContactListState() {
    _presenter = new ContactListPresenter(this);
  }

  @override
  void initState() {
    super.initState();
    _IsSearching = true;
    _presenter.loadContacts();
  }


  void onLoadContactsComplete(List<Contact> items) {
    setState(() {
      _contacts = items;
      _IsSearching = false;
    });

  }

  @override
  void onLoadContactsError() {
    print("[_ContactListState#onLoadContactError]");
  }

  @override
  Widget build(BuildContext context) {
    var widget;

    if(_IsSearching) {
      widget = new Center(
          child: new Padding(
              padding: const EdgeInsets.only(left: 16.0, right: 16.0),
              child: new CircularProgressIndicator()
          )
      );
    }else {
      widget = new ListView.builder(
        itemCount: _contacts.length,
        itemBuilder: (BuildContext ctxt, int index) {
          return ListTile(
              leading: new CircleAvatar(
                  child: new Text(_contacts[index].fullName[0])
              ),
              title: Text('${_contacts[index].fullName}'),
            subtitle: Text(_contacts[index].email),
          );
        }
      );
    }

    return widget;
  }

}
