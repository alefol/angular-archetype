import { InputColorDirective } from './input-color.directive';
import {Component} from "@angular/core";
import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {moduleDef} from "@angular/core/src/view";
import {By} from "@angular/platform-browser";


@Component({
  template: `
    <input app-input-color="red"/>
  `
})
class TestComponent {
  color: string = 'red';
  switchColor(): void {
    if(this.color === 'red'){
      this.color = 'blue';
    } else {
      this.color = 'red';
    }
  }
}

describe('InputColorDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let input = fixture.debugElement.query(By.css('input'));
  let component: TestComponent;
  beforeEach(async(
    TestBed.configureTestingModule({
      declarations: [TestComponent, InputColorDirective]
    })
  ));
  beforeEach(async( () => {
      TestBed.configureTestingModule({

      })
    }
  ));

});
