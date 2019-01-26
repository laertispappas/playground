import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class FeathersService{
    constructor(private _http:Http){
        
    }
    
    getLogs(){
        return this._http.get('http://localhost:3030/logs')
            .map(res => res.json());
    }
    
    addLog(log){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this._http.post('http://localhost:3030/logs', JSON.stringify(log),
        {headers: headers})
        .map(res => res.json());
    }
    
    deleteLog(id){
        return this._http.delete('http://localhost:3030/logs/'+id)
    }
}