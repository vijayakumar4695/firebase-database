import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import { StudataComponent } from './studata/studata.component';
import {AddComponent} from './studata/add/add.component';
import {ListComponent} from './studata/list/list.component';
import {FormsModule} from '@angular/forms';
import { StuService } from 'src/app/student/stu.service';
import { from } from 'rxjs';
@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    ListComponent,
    StudataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
   
    
  ],
  providers: [StuService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
