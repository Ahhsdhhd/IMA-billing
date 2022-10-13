import { Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BillingformService } from 'src/app/services/billingform.service';
import { map, shareReplay } from 'rxjs/operators';
import { BreakpointObserver,} from '@angular/cdk/layout';




import { FormBuilder, NgForm, Validators } from '@angular/forms';



@Component({
  selector: 'app-receiptView',
  templateUrl: './receiptView.component.html',
  styleUrls: ['./receiptView.component.css']
})
export class ReceiptViewComponent implements OnInit {
  Billing:any;




  constructor(
    private BillingFormservice:BillingformService,
    private routes:Router
  ) { }

  ngOnInit():void {
    this.loadBilling();
  }
loadBilling(){

this.BillingFormservice.listBillingForm().subscribe((data:any)=>{

//console.log(data);
this.Billing = data;

}


)

}


}
