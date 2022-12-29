import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VphsUnidadPacientesDetailPage } from './vphs-unidad-pacientes-detail.page';

describe('VphsUnidadPacientesDetailPage', () => {
  let component: VphsUnidadPacientesDetailPage;
  let fixture: ComponentFixture<VphsUnidadPacientesDetailPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VphsUnidadPacientesDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VphsUnidadPacientesDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
