import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MastosPacArchivoDetailPage } from './mastos-pac-archivo-detail.page';

describe('MastosPacArchivoDetailPage', () => {
  let component: MastosPacArchivoDetailPage;
  let fixture: ComponentFixture<MastosPacArchivoDetailPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MastosPacArchivoDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MastosPacArchivoDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
