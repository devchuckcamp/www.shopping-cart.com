import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';
// import { LoginRoutingModule } from './login-routing.module';
// import { LoginComponent } from './login.component';
// import { AuthService } from '../../services/auth/auth.service';

@NgModule({
  imports: [
    CommonModule,
    // LoginRoutingModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    // LoginComponent,
    ],
//   providers:[AuthService]
})
export class LoginModule { }
