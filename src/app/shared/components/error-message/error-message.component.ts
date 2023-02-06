import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss'],
})
export class ErrorMessageComponent {

  @Input() message: string = '';
  @Input() buttonText: string = '';
  @Output() buttonClicked = new EventEmitter<void>() 

}
