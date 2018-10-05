import 'dart:async';

class Contact {
  final String fullName;
  final String email;

  const Contact({this.fullName, this.email});

  Contact.fromMap(Map<String, dynamic>  map) :
        fullName = "${map['name']['first']} ${map['name']['last']}",
        email = map['email'];

}
