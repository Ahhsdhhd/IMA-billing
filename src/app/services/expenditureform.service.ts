import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExpenditureformService {
  constructor(

    private http:HttpClient
    ) {

    }

addExpenditureForm(expenditure:any){

return this.http.post('https://ima-backend.herokuapp.com/ExpenditureForm',expenditure)


  }
  listExpenditureForm(){

    return this.http.get('https://ima-backend.herokuapp.com/ExpenditureForm')


      }
}
