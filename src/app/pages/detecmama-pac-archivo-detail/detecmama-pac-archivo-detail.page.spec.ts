import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetecmamaPacArchivoDetailPage } from './detecmama-pac-archivo-detail.page';

describe('DetecmamaPacArchivoDetailPage', () => {
  let component: DetecmamaPacArchivoDetailPage;
  let fixture: ComponentFixture<DetecmamaPacArchivoDetailPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DetecmamaPacArchivoDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetecmamaPacArchivoDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
