import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FeedPageComponent } from './feed-page/feed-page.component';
import { PostUserComponent } from './post-user/post-user.component';
import { MatButtonModule } from '@angular/material/button';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { LoginPageComponent } from './login-page/login-page.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgIf } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { SideBarComponent } from './side-bar/side-bar.component';
import {
    FormControl,
    FormGroupDirective,
    NgForm,
    Validators,
    FormsModule,
    ReactiveFormsModule,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

@NgModule({
    declarations: [
        AppComponent,
        PostUserComponent,
        FeedPageComponent,
        LoginPageComponent,
        SideBarComponent,
    ],
    providers: [
        { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher }
    ],
    bootstrap: [AppComponent],
    imports: [
        MatFormFieldModule,
        MatInputModule,
        NgIf,
        MatNativeDateModule,
        MatDatepickerModule,
        MatCardModule,
        FormControl,
        FormGroupDirective,
        NgForm,
        Validators,
        FormsModule,
        ReactiveFormsModule,
        BrowserModule,
        AppRoutingModule,
        MatToolbarModule,
        MatIconModule,
        BrowserAnimationsModule,
        NavComponent,
        MatButtonModule,
        MatCardModule
    ]
})
export class AppModule { }
