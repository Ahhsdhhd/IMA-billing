import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GcformService } from 'src/app/services/gcform.service';

@Component({
  selector: 'app-gcForeginer',
  templateUrl: './gcForeginer.component.html',
  styleUrls: ['./gcForeginer.component.css']
})
export class GcForeginerComponent implements OnInit {

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
