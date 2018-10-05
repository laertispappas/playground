import 'models/contact_data.dart';
import 'package:mvv_demo/repositories/contact_repository.dart';
import 'package:mvv_demo/repositories/random_user_repository.dart';
import 'package:mvv_demo/repositories/contacts_mock_repository.dart';

enum Type {
  MOCK,
  PROD
}

class Injector {
  static final Injector _singleton = new Injector._internal();
  static Type _flavor;

  static void configure(Type flavor) {
    _flavor = flavor;
  }

  factory Injector() {
    return _singleton;
  }

  Injector._internal();

  ContactRepository get contactRepository {
    switch(_flavor) {
      case Type.MOCK: return new MockContactRepository();
      default: // Flavor.PRO:
        return new RandomUserRepository();
    }
  }
}