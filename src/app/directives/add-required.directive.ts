import {Directive, HostBinding} from '@angular/core';
import {NgControl} from "@angular/forms";

@Directive({
  selector: 'input[appAddRequired]'
})
export class AddRequiredDirective {

  constructor(private control: NgControl) {

  }

  @HostBinding('class.is-required')
  get isRequired(): boolean{
    return this.control.hasError( 'required');
  }


}
