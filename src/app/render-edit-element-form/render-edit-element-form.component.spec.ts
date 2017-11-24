import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderEditElementFormComponent } from './render-edit-element-form.component';

describe('RenderEditElementFormComponent', () => {
  let component: RenderEditElementFormComponent;
  let fixture: ComponentFixture<RenderEditElementFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenderEditElementFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenderEditElementFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
