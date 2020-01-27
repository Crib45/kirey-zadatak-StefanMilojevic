import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientPartComponent } from './client-part.component';

describe('ClientPartComponent', () => {
  let component: ClientPartComponent;
  let fixture: ComponentFixture<ClientPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
