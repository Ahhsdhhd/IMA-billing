import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BillingformService {

  constructor(

    private http:HttpClient
    ) {

    }

addBillingForm(billing:any){

return this.http.post('BillingForm',billing)


  }
  listBillingForm(){

    return this.http.get('BillingForm')


      }
}
