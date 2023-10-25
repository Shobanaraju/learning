import { Component, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router'
import { FetchMarksResponse } from '../fetch-marks-response';
import { MarksList } from '../marks-list';
import { MarksResponse } from '../marks-response';
import { ServiceService } from '../services/service.service';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { TotalService } from '../services/total.service';

declare var bootstrap: any;
@Component({
  selector: 'app-marks',
  templateUrl: './marks.component.html',
  styleUrls: ['./marks.component.scss'],
  animations: [
    trigger('myAnimation', [
      state('start', style({ backgroundColor: 'red' })),
      state('end', style({ backgroundColor: 'blue' })),
      transition('start => end', animate('2s')),
      transition('end => start', animate('2s')),
    ]),
  ],
})
export class MarksComponent {

 total:any
 totalMarks:any

  animateState = 'start';
  markList = false
  markListFetched = false;
  name!: string;
  dob!: string;
  rollNo!: string;
  eng!: any;
  mat!: any;
  soc!: any;
  sci!: any;
  tam!: any;
  stuId!: any
  marks: Array<any> = [];
  marksList: MarksList = new MarksList()
  marksResponse: MarksResponse = new MarksResponse()
  marksTableList: MarksList[] = []
  fetchMarksResponse: FetchMarksResponse = new FetchMarksResponse()
  displayedColumns: string[] = ['english', 'maths', 'science', 'social', 'tamil'];
  dataSource = new MatTableDataSource<MarksList>(this.marksTableList);
  constructor(private acRoute: ActivatedRoute, private userservice: ServiceService,private totService:TotalService) {
  }
  //using query parameters
  ngOnInit() {
    this.acRoute.queryParams.subscribe(params => {
      console.log(params)
      const param1 = params['param1']
      const param2 = params['param2'];
      const param3 = params['param3'];
      console.log(param1)
      this.name = param2
      this.rollNo = param3
      this.stuId = param1
      // this.fetchMarksClick(this.stuId)
      // Use the received parameters as needed
    });
  }

  openDrawer(): void {
    const myOffcanvas = new bootstrap.Offcanvas(document.getElementById('drawer'));
    myOffcanvas.show();
  }
  // startAnimation() {
  //   this.animateState = this.animateState === 'start' ? 'end' : 'start';
  // }
  add(eng: any, mat: any, sci: any, soc: any, tamil: any) {
    console.log(eng, mat, sci, soc, tamil, this.stuId)
    console.log("marks added")
    this.userservice.postMarks(this.marksList, this.stuId, this.name).subscribe(response => {
      console.log(response)
      this.marksResponse = response;
      this.marksTableList = this.marksResponse.responseContent;
      this.dataSource.data = this.marksTableList;
      this.markList = true;
      
    })
  }
  englishEntered(eng: any) {
    console.log(eng)
  }
  fetchMarks() {
    this.userservice.fetchMarks(this.stuId).subscribe(response => {
      console.log(response)
      this.fetchMarksResponse = response;
      this.marksList = this.fetchMarksResponse.responseContent
      // this.marksResponse=response;
      // this.marksTableList = this.marksResponse.responseContent;
      // this.dataSource.data=this.marksTableList;
      // console.log("after response")
      // console.log(this.marksTableList)
      this.eng = this.marksList.english;
      this.mat = this.marksList.maths;
      this.tam = this.marksList.tamil;
      this.soc = this.marksList.social;
      this.sci = this.marksList.science;
      console.log("english")
      console.log(this.eng)
      this.markListFetched = true;

    this.total =   this.totService.totalMarks(this.eng,this.mat,this.tam,this.soc,this.sci)

this.totalMarks = this.total
      

      
     

      
       
    
    })
  }
  fetchMarksClick(stuId: any) {
    this.userservice.fetchMarks(this.stuId).subscribe(response => {
      console.log(response)
      this.fetchMarksResponse = response;
      this.marksList = this.fetchMarksResponse.responseContent
      // this.marksResponse=response;
      // this.marksTableList = this.marksResponse.responseContent;
      // this.dataSource.data=this.marksTableList;
      // console.log("after response")
      // console.log(this.marksTableList)
      this.eng = this.marksList.english;
      this.mat = this.marksList.maths;
      this.tam = this.marksList.tamil;
      this.soc = this.marksList.social;
      this.sci = this.marksList.science;
      console.log("english")
      console.log(this.eng)
      this.markListFetched = true;
    })
  }
  getTotalOutstanding() {
    return this.marksTableList.map(t => t.english).reduce((acc, value) => acc + value, 0);
  }
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
