import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VphsUnidadesDetailPage } from './vphs-unidades-detail.page';

describe('VphsUnidadesDetailPage', () => {
  let component: VphsUnidadesDetailPage;
  let fixture: ComponentFixture<VphsUnidadesDetailPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VphsUnidadesDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VphsUnidadesDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
