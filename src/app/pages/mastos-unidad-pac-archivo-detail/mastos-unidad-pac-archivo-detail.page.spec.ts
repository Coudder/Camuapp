import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MastosUnidadPacArchivoDetailPage } from './mastos-unidad-pac-archivo-detail.page';

describe('MastosUnidadPacArchivoDetailPage', () => {
  let component: MastosUnidadPacArchivoDetailPage;
  let fixture: ComponentFixture<MastosUnidadPacArchivoDetailPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MastosUnidadPacArchivoDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MastosUnidadPacArchivoDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
