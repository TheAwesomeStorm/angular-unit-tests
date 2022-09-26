import { LikeWidgetComponent } from './like-widget.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LikeWidgetModule } from './like-widget.module';

describe(LikeWidgetComponent.name, () => {
  let fixture: ComponentFixture<LikeWidgetComponent>;
  let component: LikeWidgetComponent;

  function WatchForLikedPropertyChanges(done: DoneFn) {
    fixture.detectChanges();
    component.liked.subscribe(() => {
      component.likes++;
      fixture.detectChanges();
      const counterElement = fixture.nativeElement.querySelector('.like-counter');
      expect(counterElement.textContent.trim()).toBe('1');
      done();
    });
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LikeWidgetModule]
    }).compileComponents();
    fixture = TestBed.createComponent(LikeWidgetComponent);
    component = fixture.componentInstance;
  });

  it('Should create component', () => {
    expect(component).toBeTruthy();
  });

  it('Should auto generate ID during ngOnInit when (@Input id) is not assigned', () => {
    fixture.detectChanges();
    expect(component?.id).toBeTruthy();
  })

  it('Should not generate ID during ngOnInit when (@Input id) is assigned', () => {
    component.id = 'someId';
    fixture?.detectChanges();
    expect(component?.id).toBeTruthy();
  })

  it(`${LikeWidgetComponent.prototype.like.name} should trigger (@Output liked) when called (1)`, (done) => {
    fixture.detectChanges();
    component.liked.subscribe(() => {
      expect(true).toBeTrue();
      done();
    })
    component.like();
  })

  it(`${LikeWidgetComponent.prototype.like.name} should trigger (@Output liked) when called (2)`, () => {
    spyOn(component.liked, 'emit');
    fixture.detectChanges();
    component.like();
    expect(component.liked.emit).toHaveBeenCalled();
  });

  it(`(DOM) should update displayed number of likes when clicked`, (done) => {
    WatchForLikedPropertyChanges(done);
    const likeWidgetContainerElement = fixture.nativeElement.querySelector('.like-widget-container');
    likeWidgetContainerElement.click();
  });

  it(`(DOM) should update displayed number of likes when enter key is pressed`, (done) => {
    WatchForLikedPropertyChanges(done);
    const likeWidgetContainerElement = fixture.nativeElement.querySelector('.like-widget-container');
    const event = new KeyboardEvent('keyup', { key: 'Enter'});
    likeWidgetContainerElement.dispatchEvent(event);
  });
});
