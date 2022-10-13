import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { GcformService } from 'src/app/services/gcform.service';

@Component({
  selector: 'app-gcView',
  templateUrl: './gcView.component.html',
  styleUrls: ['./gcView.component.css']
})
export class GcViewComponent implements OnInit {

  Gc:any;

  constructor(
    private gcFormservice:GcformService,
    private routes:Router
  ) { }

  ngOnInit():void {
    this.loadGc();
  }
loadGc(){

this.gcFormservice.listGc().subscribe((data:any)=>{

//console.log(data);
this.Gc = data;

}


)

}


}
