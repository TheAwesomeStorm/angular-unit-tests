import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { PhotoFrameComponent } from './photo-frame.component';
import { PhotoFrameModule } from './photo-frame.module';

describe('PhotoFrameComponent', () => {
  let component: PhotoFrameComponent;
  let fixture: ComponentFixture<PhotoFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoFrameModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotoFrameComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should trigger (@Output liked) only once when #${PhotoFrameComponent.prototype.like.name} is called multiple times`, fakeAsync(() => {
    fixture.detectChanges();
    let times = 0;
    component.liked.subscribe(() => times++);
    component.like();
    component.like();
    tick(500);
    expect(times).toBe(1);
  }));

  it(`should trigger (@Output liked) twice when #${PhotoFrameComponent.prototype.like.name} is called outside debounce time window twice`, fakeAsync(() => {
    fixture.detectChanges();
    let times = 0;
    component.liked.subscribe(() => times++);
    component.like();
    tick(500);
    component.like();
    tick(500);
    expect(times).toBe(2);
  }));

  it("(DOM) should display number of likes when (@Input likes) is incremented", () => {
    fixture.detectChanges();
    component.likes++;
    fixture.detectChanges();
    const element = fixture.nativeElement.querySelector('.like-counter');
    expect(element.textContent.trim()).toBe("1");
  });

  it("(DOM) should update aria-label when (@Input likes) is incremented", () => {
    fixture.detectChanges();
    component.likes++;
    fixture.detectChanges();
    const element = fixture.nativeElement.querySelector('span');
    expect(element.getAttribute('aria-label')).toBe('1 people liked');
  });

  it('(DOM) should have aria-label with default value, which is 0 (@Input likes)', () => {
    fixture.detectChanges();
    const element = fixture.nativeElement.querySelector('span');
    expect(element.getAttribute('aria-label')).toBe('0 people liked');
  })

  it('(DOM) should display image with source and description when bound to properties', () => {
    const src = 'http://somesite.com/img.jpg';
    const description = 'some description';
    component.src = src;
    component.description = description;
    fixture.detectChanges();
    const img = fixture.nativeElement.querySelector('img');
    expect(img.getAttribute('src')).toBe(src);
    expect(img.getAttribute('alt')).toBe(description);
  });
});
