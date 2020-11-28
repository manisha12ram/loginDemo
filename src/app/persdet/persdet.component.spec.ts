import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersdetComponent } from './persdet.component';

describe('PersdetComponent', () => {
  let component: PersdetComponent;
  let fixture: ComponentFixture<PersdetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersdetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersdetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
