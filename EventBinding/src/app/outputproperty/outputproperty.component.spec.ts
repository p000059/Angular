import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputpropertyComponent } from './outputproperty.component';

describe('OutputpropertyComponent', () => {
  let component: OutputpropertyComponent;
  let fixture: ComponentFixture<OutputpropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutputpropertyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutputpropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
