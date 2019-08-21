import { Component, OnInit } from '@angular/core';

import { SrvEmpService } from './Shared/srv-emp.service'

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  providers:[SrvEmpService]
})
export class EmployeesComponent implements OnInit {

  constructor(private VarEmpSrv : SrvEmpService) { }

  ngOnInit() {
  }

}
