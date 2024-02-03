// src/app/app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServicesComponent } from './services/services.component';
import { ServicesService } from './services.service';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutusComponent } from './aboutus/aboutus.component';





@NgModule({
  declarations: [
    AppComponent,
    ServicesComponent,
    HomeComponent,
    ContactsComponent,
    AboutusComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
