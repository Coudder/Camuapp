import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetecmamaPacientesDetailPage } from './detecmama-pacientes-detail.page';

describe('DetecmamaPacientesDetailPage', () => {
  let component: DetecmamaPacientesDetailPage;
  let fixture: ComponentFixture<DetecmamaPacientesDetailPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DetecmamaPacientesDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetecmamaPacientesDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
