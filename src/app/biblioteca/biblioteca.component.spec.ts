import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentBibliotecaComponent } from './biblioteca.component';

describe('ComponentBibliotecaComponent', () => {
  let component: ComponentBibliotecaComponent;
  let fixture: ComponentFixture<ComponentBibliotecaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentBibliotecaComponent]
    });
    fixture = TestBed.createComponent(ComponentBibliotecaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
