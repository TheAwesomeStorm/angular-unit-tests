import { LikeWidgetComponent } from './like-widget.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LikeWidgetModule } from './like-widget.module';

describe(LikeWidgetComponent.name, () => {
  let fixture: ComponentFixture<LikeWidgetComponent>;
  let component: LikeWidgetComponent;

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
});
