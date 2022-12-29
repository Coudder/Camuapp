import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetecmamaUnidadPacArchivoPage } from './detecmama-unidad-pac-archivo.page';

describe('DetecmamaUnidadPacArchivoPage', () => {
  let component: DetecmamaUnidadPacArchivoPage;
  let fixture: ComponentFixture<DetecmamaUnidadPacArchivoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DetecmamaUnidadPacArchivoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetecmamaUnidadPacArchivoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
