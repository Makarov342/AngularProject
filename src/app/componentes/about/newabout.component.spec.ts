import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewaboutComponent } from './newabout.component';

describe('NewaboutComponent', () => {
  let component: NewaboutComponent;
  let fixture: ComponentFixture<NewaboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewaboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewaboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
