import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ColposUnidadPacArchivoPage } from './colpos-unidad-pac-archivo.page';

describe('ColposUnidadPacArchivoPage', () => {
  let component: ColposUnidadPacArchivoPage;
  let fixture: ComponentFixture<ColposUnidadPacArchivoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ColposUnidadPacArchivoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ColposUnidadPacArchivoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
