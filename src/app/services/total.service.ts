import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TotalService {

  constructor() { }


  totalMarks(eng:any,mat:any,sci:any,aoc:any,tam:any){
   
    console.log(eng)


    const totalMarks = +eng + +mat + +sci + +aoc + +tam;

    console.log(totalMarks)
  return totalMarks;


    // const marksObject = {
    //   english: 'markList.english' ,
    //   maths: 'markList.maths ',
    //   science: 'markList.science ',
    //   social:' markList.social',
    //   tamil:' markList.tamil'
    // };
    
    // const totalMarks = Object.values(marksObject).reduce((total, mark) => total + parseInt(mark, 10), 0);

    // return this.marksTableList.map(t => t.english).reduce((acc, value) => acc + value, 0);
    
    // console.log('Total Marks:', totalMarks);
    
  }
}
