import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button-with-spinner',
  templateUrl: './button-with-spinner.component.html',
  styleUrls: ['./button-with-spinner.component.scss']
})
export class ButtonWithSpinnerComponent implements OnInit {
  submitted:boolean=false;
  @Input()style='btn btn-primary font-weight-bold text-uppercase'
  @Input() title = "Submit";
  @Input() color = 'success';
  @Output() onSubmit: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }
  Submit() {
    this.submitted=true;
    this.onSubmit.emit(true);
  }
}
