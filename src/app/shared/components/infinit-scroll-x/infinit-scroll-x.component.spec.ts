import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfinitScrollXComponent } from './infinit-scroll-x.component';

describe('InfinitScrollXComponent', () => {
  let component: InfinitScrollXComponent;
  let fixture: ComponentFixture<InfinitScrollXComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfinitScrollXComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfinitScrollXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
