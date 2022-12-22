import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CitoPacArchivoDetailPage } from './cito-pac-archivo-detail.page';

describe('CitoPacArchivoDetailPage', () => {
  let component: CitoPacArchivoDetailPage;
  let fixture: ComponentFixture<CitoPacArchivoDetailPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CitoPacArchivoDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CitoPacArchivoDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
