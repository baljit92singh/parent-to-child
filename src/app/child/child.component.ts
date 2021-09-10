import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() firstName: string = "";
  @Input() lastName: string = "";
  // @Input() siblings: Array<string> = [];
  constructor() { }

  ngOnInit(): void {
  }

}
