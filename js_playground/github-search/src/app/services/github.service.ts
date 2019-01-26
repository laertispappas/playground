import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class GithubService{
    // private headers = new Headers({'Content-Type': 'application/json'});
    private url = 'https://api.github.com/users/'

    private username: String;

    // Github client id and secret key. Keep them secret.
    private clientId = '1';
    private clientSecret = '2';

    constructor(private _http: Http){
        console.log("Github Service ready");
        this.username = 'laertispappas';
    }

    // @return Observable
    getUser(){
        return this._http.get(this.url + this.username + '?client_id='+this.clientId+'&client_secret='+this.clientSecret)
            .map(res => res.json())
    }

    getRepos(){
        return this._http.get(this.url + this.username + '/repos' + '?client_id='+this.clientId+'&client_secret='+this.clientSecret)
            .map(res => res.json())
    }

    updateUser(username: string) {
        this.username = username;
    }

}