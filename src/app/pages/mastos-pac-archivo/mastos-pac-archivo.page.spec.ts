import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MastosPacArchivoPage } from './mastos-pac-archivo.page';

describe('MastosPacArchivoPage', () => {
  let component: MastosPacArchivoPage;
  let fixture: ComponentFixture<MastosPacArchivoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MastosPacArchivoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MastosPacArchivoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
