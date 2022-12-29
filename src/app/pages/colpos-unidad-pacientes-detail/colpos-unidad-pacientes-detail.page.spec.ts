import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ColposUnidadPacientesDetailPage } from './colpos-unidad-pacientes-detail.page';

describe('ColposUnidadPacientesDetailPage', () => {
  let component: ColposUnidadPacientesDetailPage;
  let fixture: ComponentFixture<ColposUnidadPacientesDetailPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ColposUnidadPacientesDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ColposUnidadPacientesDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
