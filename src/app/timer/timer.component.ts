import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.css'
})
export class TimerComponent {
  timerActive : boolean = false
  startTime : number = 0  
  endTime : number = 0 
  totalTime : number = 0 
  activity : string = ""

  tasks  = [{task: "Make coffee", start : 1701720959777, end: 1701721334964, totalTaskTime: 15, notes: "Made a cappuccino" }, {task: "Tell Heather I love her", start: "1701720959777", end: "1701721485915",totalTaskTime: 15, notes: "Gave her a big smooch" }]
  
  
  startTimer() {
    this.startTime = new Date().getTime()
    this.timerActive = true
    console.log(this.startTime)
    
  }
  stopTimer() {
    this.endTime = new Date().getTime()
    this.timerActive = false
    const seconds = ((this.endTime - this.startTime) / 1000).toString().substr(11, 8)  
    // const formatedTime = seconds => new Date(s * 1000).toISOString().substr(11, 8);
    this.tasks.push({task: this.activity, start : this.startTime, end: this.endTime, totalTaskTime: this.totalTime, notes: "N/A" })

    console.log(this.totalTime)

  }

  setActivity(value:string) {
  
    this.activity = value
    console.log(this.activity)
  }

}
