import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaddownComponent } from './headdown.component';

describe('HeaddownComponent', () => {
  let component: HeaddownComponent;
  let fixture: ComponentFixture<HeaddownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaddownComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaddownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
