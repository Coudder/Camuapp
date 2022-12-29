import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetecmamaUnidadPacArchivoDetailPage } from './detecmama-unidad-pac-archivo-detail.page';

describe('DetecmamaUnidadPacArchivoDetailPage', () => {
  let component: DetecmamaUnidadPacArchivoDetailPage;
  let fixture: ComponentFixture<DetecmamaUnidadPacArchivoDetailPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DetecmamaUnidadPacArchivoDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetecmamaUnidadPacArchivoDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
