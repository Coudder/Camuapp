import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CitoUnidadPacArchivoDetailPage } from './cito-unidad-pac-archivo-detail.page';

describe('CitoUnidadPacArchivoDetailPage', () => {
  let component: CitoUnidadPacArchivoDetailPage;
  let fixture: ComponentFixture<CitoUnidadPacArchivoDetailPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CitoUnidadPacArchivoDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CitoUnidadPacArchivoDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
