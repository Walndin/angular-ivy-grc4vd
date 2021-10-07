import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ShowListComponent } from './components/show-list/show-list.component';
import { ShowDataService } from './services/show-data.service';


import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, ShowListComponent],
  bootstrap: [AppComponent],
  providers:[ShowDataService]
})
export class AppModule {}
