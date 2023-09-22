import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MarksComponent } from './marks/marks.component';
import { RootComponent } from './root/root.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { ValueArrayPipePipe } from './value-array-pipe.pipe';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';



@NgModule({
  declarations: [
    AppComponent,
    MarksComponent,
    RootComponent,
    ValueArrayPipePipe
  ],
  imports: [
    MatTableModule,
    MatTabsModule,
    MatTooltipModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatSliderModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    HttpClientModule,
    
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
