import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ColposUnidadPacArchivoDetailPage } from './colpos-unidad-pac-archivo-detail.page';

describe('ColposUnidadPacArchivoDetailPage', () => {
  let component: ColposUnidadPacArchivoDetailPage;
  let fixture: ComponentFixture<ColposUnidadPacArchivoDetailPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ColposUnidadPacArchivoDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ColposUnidadPacArchivoDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
