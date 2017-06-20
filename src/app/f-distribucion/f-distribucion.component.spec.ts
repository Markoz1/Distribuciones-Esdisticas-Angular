import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FDistribucionComponent } from './f-distribucion.component';

describe('FDistribucionComponent', () => {
  let component: FDistribucionComponent;
  let fixture: ComponentFixture<FDistribucionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FDistribucionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FDistribucionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
