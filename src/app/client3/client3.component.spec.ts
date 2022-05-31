import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Client3Component } from './client3.component';

describe('Client3Component', () => {
  let component: Client3Component;
  let fixture: ComponentFixture<Client3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Client3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Client3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
