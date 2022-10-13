import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExpenditureformService } from 'src/app/services/expenditureform.service';

@Component({
  selector: 'app-expenditureView',
  templateUrl: './expenditureView.component.html',
  styleUrls: ['./expenditureView.component.css']
})
export class ExpenditureViewComponent implements OnInit {
  expenditure:any;

  constructor(
    private ExpenditureFormservice:ExpenditureformService,
    private routes:Router
  ) { }

  ngOnInit():void {
    this.loadExpenditure();
  }
loadExpenditure(){

this.ExpenditureFormservice.listExpenditureForm().subscribe((data:any)=>{

console.log(data);
this.expenditure = data;

}


)

}


}
