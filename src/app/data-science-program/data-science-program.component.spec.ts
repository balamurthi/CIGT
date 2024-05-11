import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataScienceProgramComponent } from './data-science-program.component';

describe('DataScienceProgramComponent', () => {
  let component: DataScienceProgramComponent;
  let fixture: ComponentFixture<DataScienceProgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DataScienceProgramComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DataScienceProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
