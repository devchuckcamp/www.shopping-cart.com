import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';``
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/toPromise';
import * as xml2js from 'xml2js';
import { User } from '../models/user/user';

//GLobal
import { ClientGlobalRoutesService } from './client.global';

@Injectable()
export class GlobalRoutesService {

    private clientID = 'newclient';
    //private storage = localStorage.getItem('currentUser').json();
    private Bearer:any;
    
    private userID = '';
    public mimsPort='8080';
    public apiPort='8000';
    public host='localhost';
    public protocol='http://';
    public googleLogin=this.protocol+this.host+':'+this.apiPort+'/glogin';

    constructor(
        private http: Http,
        private clientGlobalRoutesService:ClientGlobalRoutesService
    ) {
        if(localStorage.getItem("currentUser")){
            this.Bearer = localStorage.getItem("currentUser");
        }
        console.log(this.Bearer); 
    }

    loginAuth(username:string,password:string) {
        var body = JSON.stringify({
                username:username,
                password:password
            });
        return this.http.post('http://0.0.0.0:8000/api/v1/authenticate',
            body
            ,this.jt())
            .map((response: Response) => 
                    response.json());
    }
    
    // Users
    getUsersURI(){
        return this.protocol+this.host+':'+this.apiPort+'/api/user';
    }
    getAllUsersURI(){
        return this.protocol+this.host+':'+this.apiPort+'/api/v1/users/';
    }

    getPatientVitalURI(){
        return this.protocol+this.host+':'+this.apiPort+'/api/v1/patient-physical-exam/';
    }

    // Doctors
    getAllDoctorsURI(){
        return this.protocol+this.host+':'+this.apiPort+'/api/v1/doctors/';
    }
    getDoctorURI(){
        return this.protocol+this.host+':'+this.apiPort+'/api/v1/doctors/';
    }
    //Availability Time
    getDoctorAvailabilityTimeURI(){
        return this.protocol+this.host+':'+this.apiPort+'/api/v1/doctor-availability-time/';
        
    }
    //Availability Day
    getDoctorAvailabilityDayURI(){
        return this.protocol+this.host+':'+this.apiPort+'/api/v1/doctor-availability-day/';
    }
    
    
    // Patient
    getAllPatientsURI(){
        return this.protocol+this.host+':'+this.apiPort+'/api/v1/patients/';
    }
    getPatientURI(){
        return this.protocol+this.host+':'+this.apiPort+'/api/v1/patients/';
    }

    // Secretaries
    getAllSecretariesURI(){
        return this.protocol+this.host+':'+this.apiPort+'/api/v1/secretaries/';
    }
    getSecretaryURI(){
        return this.protocol+this.host+':'+this.apiPort+'/api/v1/secretaries/';
    }

    // Pharmacists
    getAllPharmacistsURI(){
        return this.protocol+this.host+':'+this.apiPort+'/api/v1/pharmacists/';
    }
    getPharmacistURI(){
        return this.protocol+this.host+':'+this.apiPort+'/api/v1/pharmacists/';
    }

    // Pharmacy
    getAllPharmaciesURI(){
        return this.protocol+this.host+':'+this.apiPort+'/api/v1/pharmacies/';
    }
    getPharmacyURI(){
        return this.protocol+this.host+':'+this.apiPort+'/api/v1/pharmacies/';
    }

    // CLinic
    getAllClinicsURI(){
        return this.protocol+this.host+':'+this.apiPort+'/api/v1/clinics/';
    }
    getClinicURI(){
        return this.protocol+this.host+':'+this.apiPort+'/api/v1/clinics/';
    }

    // Appointments
    getAppointmentURI(){
        return this.protocol+this.host+':'+this.apiPort+'/api/v1/appointments/';
    }
    getAppointmentDetailURI(){
        return this.protocol+this.host+':'+this.apiPort+'/api/v1/appointment-details/';
    }

    // Audit Trail
    getAuditURI(){
        return this.protocol+this.host+':'+this.apiPort+'/api/v1/audit-trail/';
    }
    getAuditsURI(){
        return this.protocol+this.host+':'+this.apiPort+'/api/v1/audit-trail/';
    }

    // Authentication
    getLoginURI(){
        return this.protocol+this.host+':'+this.apiPort+'/oauth/token';
    }
    //Google Login
    getGoogleLogin(){
        return this.googleLogin;
    }
    
    //Client Credentials
    getClientKey(){
        var data = this.clientGlobalRoutesService.getClientKey();

        return data;
    }

    private jt() {
       
        let UserBearer = this.Bearer;
            let headers = new Headers({'Authorization': 'Bearer '+this.Bearer });
            headers.append('Content-type','application/json');
            headers.append('Accept','application/json');
            headers.append('Access-Control-Allow-Origin','*');
            headers.append('Allow_Headers',' Allow, Access-Control-Allow-Origin, Content-type, Accept');
            headers.append('Allow','GET,POST,PUT,DELETE,OPTION');
            headers.append('Access-Control-Allow-Origin','*');
             
            return new RequestOptions({ headers: headers });
    }
    private plain() {
            let header = new Headers({'Accept':'application/json'});
            header.append('Content-type','application/json');
            
            return new RequestOptions({ headers: header });
    }
    

    
}