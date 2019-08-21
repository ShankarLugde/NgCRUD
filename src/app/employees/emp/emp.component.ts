import { Component, OnInit } from '@angular/core';
import { SrvEmpService } from '../Shared/srv-emp.service';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit {

  constructor(private SrvEmpService : SrvEmpService) { }

  ngOnInit() {
  }

}
