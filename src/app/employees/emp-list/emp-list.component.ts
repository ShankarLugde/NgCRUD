import { Component, OnInit } from '@angular/core';

import { SrvEmpService } from '../Shared/srv-emp.service';


@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {

  constructor(private VarEmpSrv : SrvEmpService) { }

  ngOnInit() {
  }

}
