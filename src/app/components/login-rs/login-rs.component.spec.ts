import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginRsComponent } from './login-rs.component';

describe('LoginRsComponent', () => {
  let component: LoginRsComponent;
  let fixture: ComponentFixture<LoginRsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginRsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginRsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
