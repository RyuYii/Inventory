import { Component, OnInit } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger
} from "@angular/animations";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  animations: [
    trigger("animation", [
      state(
        "visible",
        style({
          transform: "translateX(0)",
          opacity: 1
        })
      ),
      transition("void => *", [
        style({ transform: "translateX(50%)", opacity: 0 }),
        animate("300ms ease-out")
      ]),
      transition("* => void", [
        animate(
          "250ms ease-in",
          style({
            height: 0,
            opacity: 0,
            transform: "translateX(50%)"
          })
        )
      ])
    ])
  ]
})
export class WelcomeComponent implements OnInit {
  boxes: Array<number> = new Array(24);

  columns: number[] = [];
  
  constructor() { }

  ngOnInit() {
      this.columns = [0, 1, 2, 3, 4, 5];
  }

  addColumn() {
      this.columns.push(this.columns.length);
  }

  removeColumn() {
      this.columns.splice(-1, 1);
  }

}
