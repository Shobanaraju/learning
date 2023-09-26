import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MarksList } from '../marks-list';
import { Student } from '../student';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private httpClient: HttpClient) { }



  private addStudentUrl="http://localhost:8080/userinfo-service/add"
  addStudent(name:string,dob:string,rollNo:string): Observable<any> {
    console.log("name:"+name+"dob :" +dob+"rollno :" +rollNo);
  const header = { 'content-type': 'application/json' }
  const body = JSON.stringify("");
  const params = new HttpParams()
    .set('name',name)
    .set('dob', dob)
    .set('rollNo', rollNo)
    // console.log("params======"+params)
    return this.httpClient.post(this.addStudentUrl, body, { headers: header, 'params': params })

  } 


  private fetchUrl="http://localhost:8080/userinfo-service/fetch"
  fetchStudent():Observable<any>{
    return this.httpClient.get(this.fetchUrl)
  }

  private studentDeleteURL="http://localhost:8080/userinfo-service/deletebyId"
  deleteStudent(id:any):Observable<any>{
    console.log("service call")
    console.log(id)
    const params = new HttpParams()
    .set('employee_id', id)
    console.log(params)
    return this.httpClient.delete(this.studentDeleteURL, { 'params': params });
  }

  private marksUrl ="http://localhost:8080/userinfo-service/add/marks" 
  postMarks(markLIst:MarksList,stuId:any,name:any):Observable<any>{
    console.log("service call ===============")
    console.log(markLIst,stuId)
    const header = { 'content-type': 'application/json' }
    const body = JSON.stringify(markLIst);
    const params = new HttpParams()
    .set('employeeId', stuId)
    .set('name',name)
    console.log("params ===============")
    console.log(params)
    console.log(body)
    return this.httpClient.post<any>(this.marksUrl, body, { headers: header, 'params': params});
  }



  private fetchMarksUrl="http://localhost:8080/userinfo-service/fetchMarks/byId"
  fetchMarks(stuId:any):Observable<any>{
    console.log("student id service call")
    console.log(stuId)
    return this.httpClient.get<any>(`${this.fetchMarksUrl}/?employeeId=${stuId}`)
  }
}

