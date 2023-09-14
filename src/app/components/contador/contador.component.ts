import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {
  targetDate: Date = new Date('2023-09-15T00:00:00');
  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.calculateTimeUntilTarget();
    setInterval(() => {
      this.calculateTimeUntilTarget();
    }, 1000);
  }

  calculateTimeUntilTarget() {
    const currentDate = new Date();
    const timeDifference = this.targetDate.getTime() - currentDate.getTime();
    
    this.days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    this.hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    this.minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    this.seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  }
}
