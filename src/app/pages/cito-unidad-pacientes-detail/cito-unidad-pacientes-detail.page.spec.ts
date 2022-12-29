import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CitoUnidadPacientesDetailPage } from './cito-unidad-pacientes-detail.page';

describe('CitoUnidadPacientesDetailPage', () => {
  let component: CitoUnidadPacientesDetailPage;
  let fixture: ComponentFixture<CitoUnidadPacientesDetailPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CitoUnidadPacientesDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CitoUnidadPacientesDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
