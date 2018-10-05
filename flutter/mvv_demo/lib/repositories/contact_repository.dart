import "../models/contact_data.dart";

abstract class ContactRepository {
  Future<List<Contact>> fetch();
}
