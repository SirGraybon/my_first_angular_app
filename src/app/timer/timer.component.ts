import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatExpansionModule} from '@angular/material/expansion';


@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [CommonModule, MatExpansionModule,],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.css'
})
export class TimerComponent {
  timerActive: boolean = false;
  startTime: number = 0;
  endTime: number = 0;
  totalTime: number = 0;
  activity: string = "";
  notes = [];
  activeTask : number = 0

  tasks = [
    { id: 0, task: "Morining coffee", start: 1701720959777, end: 1701721334964, totalTaskTime: "15", notes: ["Made a cappuccino", "drank my cappuccino", "made another cappuccino", "good day!!"] }, 
    { id: 1, task: "Tell Heather I love her", start: "1701720959777", end: "1701721485915", totalTaskTime: "15", notes: ["Gave her a big smooch"] }
  ];


  startTimer() {
    this.startTime = new Date().getTime();
    this.timerActive = true;
    console.log(this.startTime);

  }
  stopTimer() {
    this.endTime = new Date().getTime();
    this.timerActive = false;
    const seconds = ((this.endTime - this.startTime) / 1000).toFixed(2);

    this.tasks.push({ id: this.tasks.length, task: this.activity, start: this.startTime, end: this.endTime, totalTaskTime: seconds, notes: this.notes });

    console.log(seconds);
    console.log(this.tasks);

  }

  setActivity(value: string) {
    this.activity = value;
    console.log(this.activity);
  }

  setNotes(value: string) {
    // this.notes = value;
  }

  setFocused(index: number) {
    this.activeTask = index
  }

}

