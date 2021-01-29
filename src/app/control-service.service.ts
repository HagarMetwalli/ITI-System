// import { Student } from './_module/student';
// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class ControlServiceService {
//   tempStd:Student[]=[];
//   constructor() { 
//     for(let i=0;i<5;i++){
//       this.tempStd.push(this.students[i]);
//     }
//   }

//   public searchedStd:any;
//   public selectedStudent:any;
//   public editStdlist:any;
//   public flag:any;
//   items = [];
//   newStd:Student=new Student();
//   editStdSer:Student=new Student();
  
//   public addFn(std:Student){
//     this.newStd=std;
//     this.students.push(this.newStd);
//   }
//   public delFnSer(std:Student){
//     for(let i=0;i<this.students.length;i++){
//       if(this.students[i].id==std.id){
//         this.students.splice(i,1);
//       }
//     }
    
//   }
//   public getDetailsServ(std:any){
//     this.selectedStudent=std;
//   }
//   public updateStdSer(std:Student){
//     this.editStdSer=std;
//     for(let i=0;i<this.students.length;i++){
//       if(this.students[i].id==std.id){
//         this.students[i].id=this.editStdSer.id;
//         this.students[i].name=this.editStdSer.name;
//       }
//     }
//   }
//   public display(n:number){
//     var j=0;
//     for(let i=n;i<n+5;i++){
//       if (i<this.students.length)
//       {
//         this.tempStd[j]=this.students[i];
//         console.log(this.tempStd[j]);
//         j++;
//       }
//       else{
//         this.tempStd.splice(j,this.students.length-j-1)
//         //console.log(this.tempStd);
//       }
//   }
// }
// //check null
// public checkNull(std:Student){
//   if(((std.name)&&(std.age))||((std.id)&&(std.name)&&(std.age))){
//     return true;
//   }
//   else{
//     return false;
//   }
// }
// }
