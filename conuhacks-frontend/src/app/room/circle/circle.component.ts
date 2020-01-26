import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.scss']
})
export class CircleComponent implements OnInit {

  @Input() guest: string;
  letter: string;

  constructor() { }

  ngOnInit() {
    this.letter = this.guest.charAt(0);
  }

}
