import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewproyectComponent } from './newproyect.component';

describe('NewproyectComponent', () => {
  let component: NewproyectComponent;
  let fixture: ComponentFixture<NewproyectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewproyectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewproyectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
