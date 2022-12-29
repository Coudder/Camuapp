import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetecmamaUnidadPacientesPage } from './detecmama-unidad-pacientes.page';

describe('DetecmamaUnidadPacientesPage', () => {
  let component: DetecmamaUnidadPacientesPage;
  let fixture: ComponentFixture<DetecmamaUnidadPacientesPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DetecmamaUnidadPacientesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetecmamaUnidadPacientesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
