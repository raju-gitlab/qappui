import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostshomeComponent } from './postshome.component';

describe('PostshomeComponent', () => {
  let component: PostshomeComponent;
  let fixture: ComponentFixture<PostshomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostshomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostshomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
