import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompAttributesComponent } from './comp-attributes.component';

describe('CompAttributesComponent', () => {
  let component: CompAttributesComponent;
  let fixture: ComponentFixture<CompAttributesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompAttributesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompAttributesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
