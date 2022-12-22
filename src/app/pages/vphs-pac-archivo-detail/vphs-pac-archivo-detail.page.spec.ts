import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VphsPacArchivoDetailPage } from './vphs-pac-archivo-detail.page';

describe('VphsPacArchivoDetailPage', () => {
  let component: VphsPacArchivoDetailPage;
  let fixture: ComponentFixture<VphsPacArchivoDetailPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VphsPacArchivoDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VphsPacArchivoDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
