import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildNewFormComponent } from './build-new-form.component';

describe('BuildNewFormComponent', () => {
  let component: BuildNewFormComponent;
  let fixture: ComponentFixture<BuildNewFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildNewFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildNewFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
