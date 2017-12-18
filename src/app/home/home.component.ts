import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { FlexLayoutModule } from "@angular/flex-layout";
import {PlatformLocation } from '@angular/common';
import {ToasterModule, ToasterContainerComponent, ToasterService, ToasterConfig} from 'angular2-toaster';
// import { CarouselModule,CarouselComponent,SlideComponent } from 'angular-bootstrap-md/carousel';


// import { AuthService } from '../service/auth/auth.service';
// import { LoggedIn } from '../../model/loggedin/index';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls:['../app.component.scss']
})
export class HomeComponent implements OnInit {
    model: any = {};
    returnUrl: string;
    loading = false;
    meImg = "";
    // Image Carousel

    constructor(
        public router: Router,
        private route: ActivatedRoute,
        private platformLocation:PlatformLocation
        ) { 
            console.log((platformLocation as any).location);
            console.log((platformLocation as any).location.href);
            console.log((platformLocation as any).location.origin);
            this.meImg = (platformLocation as any).location.href + 'assets/img/me.jpg';
        }

    ngOnInit() { 
        
        
    }
}
