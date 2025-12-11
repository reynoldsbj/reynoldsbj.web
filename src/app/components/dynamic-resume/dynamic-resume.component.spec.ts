import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicResumeComponent } from './dynamic-resume.component';

describe('DynamicResumeComponent', () => {
  let component: DynamicResumeComponent;
  let fixture: ComponentFixture<DynamicResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicResumeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
