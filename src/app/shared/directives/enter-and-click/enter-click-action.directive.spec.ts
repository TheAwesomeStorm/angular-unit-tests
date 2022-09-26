import { EnterClickActionDirective } from './enter-click-action.directive';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EnterClickActionModule } from './enter-click-action.module';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

describe(EnterClickActionDirective.name, () => {
  let fixture: ComponentFixture<DummyComponent>;
  let component: DummyComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DummyComponent],
      imports: [EnterClickActionModule]
    })
      .compileComponents();
    fixture = TestBed.createComponent(DummyComponent);
    component = fixture.componentInstance;
  });

  it('should create an instance', () => {
    const directive = new EnterClickActionDirective();
    expect(directive).toBeTruthy();
  });

  it(`(DOM) (@Output appEnterClickAction) should emit event with payload when enter key is pressed`, () => {
    const dummyElement = fixture.nativeElement.querySelector('.dummy-component');
    const event = new KeyboardEvent('keyup', {key: 'Enter'});
    dummyElement.dispatchEvent(event);
    expect(component.hasEvent()).toBeTrue();
  });

  it('(DOM) (@Output appEnterClickAction) should emit event with payload when clicked', () => {
    const dummyElement = fixture.debugElement.query(By.directive(EnterClickActionDirective)).nativeElement;
    const event = new Event('click');
    dummyElement.dispatchEvent(event);
    expect(component.hasEvent()).toBeTrue();
  });

  it('(DOM) (@Output appEnterClickAction) should emit event with payload when clicked or enter key is pressed', () => {
    const dummyElement = fixture.nativeElement.querySelector('.dummy-component');
    const clickEvent = new Event('click');
    const keyboardEvent = new KeyboardEvent('keyup', {key: 'Enter'});
    dummyElement.dispatchEvent(clickEvent);
    expect(component.hasEvent()).withContext('Click event').toBe(true);
    component.resetComponentForNewExpectation();
    dummyElement.dispatchEvent(keyboardEvent);
    expect(component.hasEvent()).withContext('Keyboard keyup event').toBeTrue();
  });
});

@Component({
  template: `<div class='dummy-component' (appEnterClickAction)="actionHandler($event)"></div>`
})
class DummyComponent {
  private event: Event | null = null;

  public actionHandler(event: Event): void {
    this.event = event;
  }

  public hasEvent(): boolean {
    return !!this.event;
  }

  public resetComponentForNewExpectation() {
    this.event = null;
  }
}
