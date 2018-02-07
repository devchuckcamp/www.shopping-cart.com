import { Injectable } from '@angular/core';

@Injectable()
export class ClientGlobalRoutesService {

    private clientID = 'newclient';
    //private storage = localStorage.getItem('currentUser').json();
    private Bearer:any;
    

    constructor() {
        if(localStorage.getItem("currentUser")){
            this.Bearer = localStorage.getItem("currentUser");
        }
        console.log(this.Bearer); 
    }
    //Client Credentials
    getClientKey(){
        var data = JSON.stringify({
            "client_id" :2,
            "client_secret":"W6zK20a7fYJ3EAkuc7SfFOmfhGJPujlaM2CkCIWf",
            "grant_type" : "password",
        })
        return data;
    }

    
}