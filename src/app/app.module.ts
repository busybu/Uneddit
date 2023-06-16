import { FormsModule } from '@angular/forms';
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
import { SideBarComponent } from './side-bar/side-bar.component';


@NgModule({
    declarations: [
        AppComponent,
        PostUserComponent,
        FeedPageComponent,
        SideBarComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MatToolbarModule,
        MatIconModule,
        BrowserAnimationsModule,
        NavComponent,
        MatButtonModule,
    ]
})
export class AppModule { }
