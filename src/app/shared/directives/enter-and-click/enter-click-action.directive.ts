import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appEnterClickAction]'
})
export class EnterClickActionDirective {

  @Output() public appEnterClickAction: EventEmitter<Event> = new EventEmitter<Event>();

  constructor() { }

  @HostListener('click', ['$event'])
  public  handleClick(event: Event) {
    this.appEnterClickAction.emit(event);
  }

  @HostListener('keyup', ['$event'])
  public handleKeyUp(event: KeyboardEvent) {
    this.appEnterClickAction.emit(event);
  }

}
