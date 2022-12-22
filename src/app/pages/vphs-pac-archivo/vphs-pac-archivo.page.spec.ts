import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VphsPacArchivoPage } from './vphs-pac-archivo.page';

describe('VphsPacArchivoPage', () => {
  let component: VphsPacArchivoPage;
  let fixture: ComponentFixture<VphsPacArchivoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VphsPacArchivoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VphsPacArchivoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
