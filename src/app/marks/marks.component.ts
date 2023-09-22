import { Component } from '@angular/core';

import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-marks',
  templateUrl: './marks.component.html',
  styleUrls: ['./marks.component.scss']
})
export class MarksComponent {

  markList=false

  name!:string;
  dob!:string;
  rollNo!:string;

  eng!:any;
  mat!:any;
  soc!:any;
  sci!:any;
  tam!:any;

  marks:Array<any>=[];


  constructor(private acRoute:ActivatedRoute){

  }


  //using query parameters
  ngOnInit() {
    this.acRoute.queryParams.subscribe(params => {
      console.log(params)
      const param1 = params['param1'];
      const param2=params['param2']
      console.log(param1)
      this.name=param1
      this.rollNo=param2
       

      // Use the received parameters as needed
    });
  }

  add(){
    console.log("marks added")
    this.marks.push({'eng':this.eng,'mat':this.mat,'soc':this.soc,'sci':this.sci,'tam':this.tam})
    console.log(this.marks)
    this.markList=true;
  }

  // using route parameters
  // ngOnInit() {
  //   this.acRoute.params.subscribe(params => {
  //     console.log(params)
  //     const param1 = params['param1'];
  //    console.log(param1)
  //     // Use the received parameters as needed
  //   });
  // }

}
