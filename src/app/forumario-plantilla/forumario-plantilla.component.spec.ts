import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumarioPlantillaComponent } from './forumario-plantilla.component';

describe('ForumarioPlantillaComponent', () => {
  let component: ForumarioPlantillaComponent;
  let fixture: ComponentFixture<ForumarioPlantillaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForumarioPlantillaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForumarioPlantillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
