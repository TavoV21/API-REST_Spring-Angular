import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoTemplateComponent } from './empleado-template.component';

describe('EmpleadoTemplateComponent', () => {
  let component: EmpleadoTemplateComponent;
  let fixture: ComponentFixture<EmpleadoTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpleadoTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpleadoTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
