import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTESTComponent } from './home-test.component';

describe('HomeTESTComponent', () => {
  let component: HomeTESTComponent;
  let fixture: ComponentFixture<HomeTESTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeTESTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTESTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
