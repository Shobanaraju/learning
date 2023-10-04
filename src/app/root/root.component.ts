import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../services/service.service';
import { Student } from '../student';
import { MatTableDataSource } from '@angular/material/table';
import { StuMessage } from '../stu-message';
import { MarksResponse } from '../marks-response';
import { MarksList } from '../marks-list';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent {
  title = 'student';
  table = false;
  studentList: Student = new Student()
  studentTable: StuMessage = new StuMessage()
  tableList:Student[]=[]

  studentMarks:MarksResponse=new MarksResponse()

  marksList:MarksList[]=[]

  marks:MarksList=new MarksList()
  // stud:Student[]=[]
  dataArray: any[] = [];

  tooltipText="Pls click the face icon"

  name!: any;
  rollNo!: any;
  dob!: any;
  marksCompo = false;
  rawData: any
  stuname = ""
  students: Array<any> = []
  adStudent: Array<any> = []
 
 
  displayedColumns: string[] = ['employeeId', 'name', 'dob', 'rollNo','action','action1'];
  dataSource = new MatTableDataSource<Student>(this.tableList);

  constructor(private router: Router, private userservice: ServiceService) {
  }
  addStudent() {

    this.table=false;

    this.userservice.addStudent(this.studentList.name, this.studentList.dob, this.studentList.rollNo).subscribe
      (response => {
        console.log(response)
       
        this.studentTable=response;
        this.tableList=this.studentTable.responseContent
      },
       
      );
    }

      fetchStudent(){

      this.userservice.fetchStudent().subscribe(response =>{
        console.log(response)
        this.studentTable=response;
        this.tableList=this.studentTable.responseContent

        console.log(this.tableList)
        this.dataSource.data= this.tableList
        

        this.table=true;
      })

  
}




delete (id: any) {
  console.log(id)
  this.userservice.deleteStudent(id).subscribe(response=>{
    console.log("delete method")
    console.log(response)
    this.userservice.fetchStudent().subscribe(response =>{
      console.log(response)
      this.studentTable=response;
      this.tableList=this.studentTable.responseContent
  
      console.log(this.tableList)
      this.dataSource.data= this.tableList})
  })
 
  // this.dataArray.splice(id, 1)
}


// shouldOpen(){
//   this.marksCompo=true;
// }
//using query parameters
sendMarks(studentId:any,name: any, rollNo: any) {
  // this.userservice.fetchMarks(studentId).subscribe(response=>{
  //   console.log(response)
  //   this.studentMarks=response;
  //   this.marksList=this.studentMarks.responseContent

  //   console.log("after response")
  //   console.log(this.marksList)

  // })

  const queryParams = {
    param1:studentId,
    param2: name,
    param3: rollNo,
    
  };
  console.log("============")
  console.log(name)
  console.log(queryParams)
  
 
  this.router.navigate(['/marks'], { queryParams});

}
  //using route parameters
  // sendMarks(name:any){
  //   const param1 = name;
  //   console.log("==============" +param1)
  //   this.router.navigate(['/marks',param1]);
  // }




  
}
