import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListdataComponent } from './listdata.component';

describe('ListdataComponent', () => {
  let component: ListdataComponent;
  let fixture: ComponentFixture<ListdataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListdataComponent]
    });
    fixture = TestBed.createComponent(ListdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
