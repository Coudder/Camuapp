import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VphsUnidadPacArchivoPage } from './vphs-unidad-pac-archivo.page';

describe('VphsUnidadPacArchivoPage', () => {
  let component: VphsUnidadPacArchivoPage;
  let fixture: ComponentFixture<VphsUnidadPacArchivoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VphsUnidadPacArchivoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VphsUnidadPacArchivoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
