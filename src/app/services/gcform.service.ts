import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';





@Injectable({
  providedIn: 'root'
})
export class GcformService {

  constructor(

    private http:HttpClient
    ) {

    }

addGc(gc:any){

return this.http.post('GcForm',gc)


  }
  listGc(){

    return this.http.get('GcForm')


      }
}
