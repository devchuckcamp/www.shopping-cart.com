import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/toPromise';

//Model
import { Credential } from '../../models/user/';

@Injectable()
export class UserService {

    private clientID = 'newclient';
    private Bearer: any;
    credentials: Credential;
    private userID = '';

    constructor(private http: Http) {
        if (localStorage.getItem("currentUser")) {
            this.Bearer = localStorage.getItem("currentUser");
        }

    }
    getUser(id: number) {
        this.Bearer = localStorage.getItem("currentUser");
        return this.http.get('http://localhost:8000/api/v1/users/' + id 
            , this.jt())
            .map((response: Response) => response.json());
    }
    createUser(form: object) {
        return this.http.post('http://localhost:8000/api/v1/users',
            form
            , this.jt())
            .map((response: Response) => response.json());
    }

    // no Get Users

    getCredential(id: number) {
        return this.http.get('http://localhost:8000/api/user', this.jt())
            .map((response: Response) => response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))

    }
    //Patient Credential
    getPatientCredential(id: number) {
        return this.http.get('http://localhost:8000/api/v1/patients/' + id, this.jt())
            .map((response: Response) => response)
            .do(data => console.log('All: ' + JSON.stringify(data)))

    }
    //Doctor Credential
    getDoctorCredential(id: number) {
        return this.http.get('http://localhost:8000/api/v1/doctors/' + id, this.jt())
            .map((response: Response) => response)
            .do(data => console.log('All: ' + JSON.stringify(data)))

    }

    createCredential(body: Object) {

    }

    //For Segragation -> Routes
    private jt() {

        let UserBearer = this.Bearer;
        let headers = new Headers({ 'Authorization': 'Bearer ' + this.Bearer });
        headers.append('Content-type', 'application/json');
        headers.append('Accept', 'application/json');
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Allow_Headers', ' Allow, Access-Control-Allow-Origin, Content-type, Accept');
        headers.append('Allow', 'GET,POST,PUT,DELETE,OPTION');
        headers.append('Access-Control-Allow-Origin', '*');

        return new RequestOptions({ headers: headers });
    }

    private plain() {
        let header = new Headers({ 'Accept': 'application/json' });
        header.append('Content-type', 'application/json');

        return new RequestOptions({ headers: header });
    }

    private noAuthHeadjt() {
        let headers = new Headers();
        headers.append('Content-type', 'application/json');
        headers.append('Accept', 'application/json');
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Allow_Headers', ' Allow, Access-Control-Allow-Origin, Content-type, Accept');
        headers.append('Allow', 'GET,POST,PUT,DELETE,OPTION');

        return new RequestOptions({ headers: headers });

    }

}