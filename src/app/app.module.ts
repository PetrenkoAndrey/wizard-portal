import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HomeComponent } from './home/home.component';
import {AuthService} from './_services/auth.service';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { OfferComponent } from './offer/offer.component';
import { CouponComponent } from './coupon/coupon.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SystemComponent } from './system/system.component';
import { AdminComponent } from './admin/admin.component';
import {UserService} from './_services/user.service';


const appRoutes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent},
  { path: 'offer', component: OfferComponent},
  { path: 'coupon', component: CouponComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'system', component: SystemComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'forgot-password', component: ForgotPasswordComponent},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent,
    ForgotPasswordComponent,
    HomeComponent,
    ProfileComponent,
    OfferComponent,
    CouponComponent,
    DashboardComponent,
    SystemComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    HttpModule,
    FormsModule
  ],
  providers: [AuthService, LoginComponent, UserService, ProfileComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
