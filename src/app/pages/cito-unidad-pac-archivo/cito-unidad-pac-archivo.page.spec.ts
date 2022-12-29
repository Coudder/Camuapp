import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CitoUnidadPacArchivoPage } from './cito-unidad-pac-archivo.page';

describe('CitoUnidadPacArchivoPage', () => {
  let component: CitoUnidadPacArchivoPage;
  let fixture: ComponentFixture<CitoUnidadPacArchivoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CitoUnidadPacArchivoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CitoUnidadPacArchivoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
