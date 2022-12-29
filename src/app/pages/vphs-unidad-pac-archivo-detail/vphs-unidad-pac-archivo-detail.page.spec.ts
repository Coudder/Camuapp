import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VphsUnidadPacArchivoDetailPage } from './vphs-unidad-pac-archivo-detail.page';

describe('VphsUnidadPacArchivoDetailPage', () => {
  let component: VphsUnidadPacArchivoDetailPage;
  let fixture: ComponentFixture<VphsUnidadPacArchivoDetailPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VphsUnidadPacArchivoDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VphsUnidadPacArchivoDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
