import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldControl, MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PasswordComponent } from './password/password.component';
import { ChangepwComponent } from './changepw/changepw.component';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { TakenoteComponent } from './components/takenote/takenote.component';
import { GetallComponent } from './components/getall/getall.component';
import { DisplayComponent } from './components/display/display.component';
import {MatCardModule} from '@angular/material/card';
import { IconsComponent } from './components/icons/icons.component';
import { AuthguardServiceService } from './services/authguardservice/authguard-service.service';
import {MatDialogModule} from '@angular/material/dialog';
import { UpdatenoteComponent } from './components/updatenote/updatenote.component';
import {MatMenuModule} from '@angular/material/menu';

import { ArchiveComponent } from './components/archive/archive.component';
import { TrashComponent } from './components/trash/trash.component';
import { EditlabelComponent } from './components/editlabel/editlabel.component';
import { EditlabeldialogComponent } from './components/editlabeldialog/editlabeldialog.component';
@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    PasswordComponent,
    ChangepwComponent,
    DashboardComponent,
    TakenoteComponent,
    GetallComponent,
    DisplayComponent,
    IconsComponent,
    UpdatenoteComponent,
   
    ArchiveComponent,
    TrashComponent,
    EditlabelComponent,
    EditlabeldialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule,
    MatButtonModule,
    FormsModule, 
    ReactiveFormsModule,
    FlexLayoutModule,
    HttpClientModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule,
    MatMenuModule
   
    
    
  ],
  providers: [
    AuthguardServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
