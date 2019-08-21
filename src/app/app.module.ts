import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmpComponent } from './employees/emp/emp.component';
import { EmpListComponent } from './employees/emp-list/emp-list.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmpComponent,
    EmpListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
