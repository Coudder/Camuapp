import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MastosUnidadPacArchivoPage } from './mastos-unidad-pac-archivo.page';

describe('MastosUnidadPacArchivoPage', () => {
  let component: MastosUnidadPacArchivoPage;
  let fixture: ComponentFixture<MastosUnidadPacArchivoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MastosUnidadPacArchivoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MastosUnidadPacArchivoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
