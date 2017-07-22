import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-input',
  template: `
    <label for="{{elementId}}">My Input Component</label>
    <input type="text" id="{{elementId}}">
  `
})

export class MyInputComponet {

  @Input() elementId: string;

}
