import { MyModel } from './my_model';
import { Serializer } from './serializer';
import { Session } from './session';

export class SessionSerializer implements Serializer {
  // no-op
  fromJson(json: any): Session {
    return null;
  }

  toJson(session: Session): any {
    return {
      user_name: session.username,
      password: session.password
    };
  }
}
