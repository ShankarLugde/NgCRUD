import { Injectable } from '@angular/core';
import { ModelEmp } from './model-emp.model';

@Injectable({
  providedIn: 'root'
})
export class SrvEmpService {


  selectedEmployee:ModelEmp;
  constructor() { }
}
