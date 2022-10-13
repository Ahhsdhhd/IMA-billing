import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ExpenditureformService } from 'src/app/services/expenditureform.service';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {

  addExpenditureForm:any;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );


  constructor(
    private breakpointObserver: BreakpointObserver,
    private fb:FormBuilder,
    private routes:Router,
    private ExpenditureFormservice:ExpenditureformService


    ) {
   this.addExpenditureForm = fb.group(
    {

      recordNumber: ['',Validators.required],
      gcNumber: ['',Validators.required],
      gcType :['',Validators.required],
      name :['',Validators.required],
        battlion: ['',Validators.required],
         company: ['',Validators.required],
         date: ['',Validators.required],
         billNoDetails: ['',Validators.required],
         amount: ['',Validators.required]


      }
   )



    }

  ngOnInit(): void {
  }

  onSubmit(){

console.log(this.addExpenditureForm.value);
this.ExpenditureFormservice.addExpenditureForm(this.addExpenditureForm.value).subscribe((data:any)=>{

  alert("ADDED SUCCESSFULLY");
  //this.routes.navigate(['/'])


})
  }
}
