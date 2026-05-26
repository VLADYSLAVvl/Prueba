import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenteFrontend } from './agente-frontend';

describe('AgenteFrontend', () => {
  let component: AgenteFrontend;
  let fixture: ComponentFixture<AgenteFrontend>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgenteFrontend],
    }).compileComponents();

    fixture = TestBed.createComponent(AgenteFrontend);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
