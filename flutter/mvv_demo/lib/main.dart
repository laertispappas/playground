import 'package:flutter/material.dart';
import "screens/contact.dart";
import "dependency_injection.dart";

void main() {
  Injector.configure(Type.PROD);
  runApp(
      new MaterialApp(
          title: 'Flutter Demo',
          theme: new ThemeData(
              primarySwatch: Colors.blue
          ),
          home: new ContactsScreen()
      )
  );
}