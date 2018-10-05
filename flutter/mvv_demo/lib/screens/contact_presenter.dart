import "package:mvv_demo/models/contact_data.dart";
import "package:mvv_demo/repositories/contact_repository.dart";
import "package:mvv_demo/dependency_injection.dart";

abstract class ContactListViewContract {
  void onLoadContactsComplete(List<Contact> items);
  void onLoadContactsError();
}

class ContactListPresenter {
  ContactListViewContract _view;
  ContactRepository _repository;

  ContactListPresenter(this._view){
    _repository = Injector().contactRepository;
  }

  void loadContacts(){
    assert(_view != null);

    _repository.fetch()
        .then((contacts) => _view.onLoadContactsComplete(contacts))
        .catchError((error) {
          print(error);
          _view.onLoadContactsError();
        });
  }
}