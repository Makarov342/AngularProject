import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditexperienciaComponent } from './editexperiencia.component';

describe('EditexperienciaComponent', () => {
  let component: EditexperienciaComponent;
  let fixture: ComponentFixture<EditexperienciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditexperienciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditexperienciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
