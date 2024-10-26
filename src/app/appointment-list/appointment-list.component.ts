import { Component, OnInit } from '@angular/core';
import { Appointment } from '../appointment';
import 'mock-local-storage'

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css'
})
export class AppointmentListComponent implements OnInit{



appointments:Appointment[]=[];//took array successful
newappointmentname:string="";
newappointmentdate:Date=new Date();

ngOnInit(): void {
  console.log("got loaded");
  let saveAppointment= localStorage.getItem("appointments");
  
    this.appointments= saveAppointment ?  JSON.parse(saveAppointment) : [];
}

AddAppointment()
{
  if(this.newappointmentname!="" && this.newappointmentdate ){
    let newAppoint:Appointment={
      id:this.appointments.length+1,
      name:this.newappointmentname,
      date:this.newappointmentdate
    }
    this.appointments.push(newAppoint);// pushing new appointment

    this.newappointmentdate=new Date();
    this.newappointmentname="";
    localStorage.setItem("appointments",JSON.stringify(this.appointments))
  }

}
DeleteAppointment(i:number){
  
this.appointments.splice(i,1);
localStorage.setItem("appointments",JSON.stringify(this.appointments))

}
}
