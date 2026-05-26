import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AgenteFrontendComponent } from './agente-frontend'; // 👈 Cambiado aquí

describe('AgenteFrontendComponent', () => { // 👈 Cambiado aquí
  let component: AgenteFrontendComponent; // 👈 Cambiado aquí
  let fixture: ComponentFixture<AgenteFrontendComponent>; // 👈 Cambiado aquí

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgenteFrontendComponent, FormsModule], // 👈 Cambiado aquí
    }).compileComponents();

    fixture = TestBed.createComponent(AgenteFrontendComponent); // 👈 Cambiado aquí
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});