import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildComponentComponent } from './build-component.component';

describe('BuildComponentComponent', () => {
  let component: BuildComponentComponent;
  let fixture: ComponentFixture<BuildComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
