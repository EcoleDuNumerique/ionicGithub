import {Storage} from "@ionic/storage";
import {Injectable} from "@angular/core";

@Injectable()
export class AuthService {

  private token: string;

  public isAuth: boolean = false;
  public userData: any;

  constructor(public storage: Storage) {}

  checkAuth(): Promise <boolean> {
    return new Promise((resolve) => {
      this.storage.get('token').then(token => {
        if( token ) {
          this.token = token;
          this.isAuth = true;
        }
        resolve(this.isAuth);
      });
    });
  }

  login(email, password) {

  }
}
