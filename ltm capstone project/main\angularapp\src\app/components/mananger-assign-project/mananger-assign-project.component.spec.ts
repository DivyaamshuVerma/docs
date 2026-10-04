import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManangerAssignProjectComponent } from './mananger-assign-project.component';

describe('ManangerAssignProjectComponent', () => {
  let component: ManangerAssignProjectComponent;
  let fixture: ComponentFixture<ManangerAssignProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManangerAssignProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManangerAssignProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
