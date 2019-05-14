import { Component, OnInit, Input, Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'lib-ngtek-card',
  templateUrl: `./ngtek-card.component.html`,
  styleUrls: ['./ngtek-card.component.css']
})
export class NgtekCardComponent implements OnInit {
 @Input() data : any;
  constructor() { }

  ngOnInit() {
  }

}
