import { Component, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';
import { debounceTime, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-photo-frame',
  templateUrl: './photo-frame.component.html',
  styleUrls: ['./photo-frame.component.scss']
})
export class PhotoFrameComponent implements OnInit, OnDestroy {

  @Input() description = '';
  @Input() src = '';
  @Input() likes = 0;
  @Output() liked: EventEmitter<void> = new EventEmitter();
  private debounceSubject: Subject<void> = new Subject();
  private unsubscribe: Subject<void> = new Subject();

  constructor() { }

  ngOnInit(): void {
    this.debounceSubject
      .asObservable()
      .pipe(debounceTime(500))
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(() => {
        this.liked.emit();
      });
  }

  ngOnDestroy () {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  public like(): void {
    this.debounceSubject.next();
  }

}
