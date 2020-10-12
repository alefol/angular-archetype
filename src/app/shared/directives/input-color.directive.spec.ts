import { InputColorDirective } from './input-color.directive';
import {Component} from '@angular/core';
import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';


@Component({
  template: `
    <input app-input-color="red"/>
  `
})
class TestComponent {
  color = 'red';
  switchColor(): void {
    if (this.color === 'red') {
      this.color = 'blue';
    } else {
      this.color = 'red';
    }
  }
}

describe('InputColorDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  const input = fixture.debugElement.query(By.css('input'));

  beforeEach(waitForAsync(
    TestBed.configureTestingModule({
      declarations: [TestComponent, InputColorDirective]
    })
  ));
  beforeEach(waitForAsync( () => {
      TestBed.configureTestingModule({

      });
    }
  ));

});
