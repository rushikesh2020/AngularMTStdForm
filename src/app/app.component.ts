import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { stdInfo } from './shared/model/stdInfo.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'MachineTest_IO_StdForm';
  stdArray: Array<stdInfo> = [];

  // onFormSubmit(info: NgForm) {
  //   console.log(info.value);
  //   let student = info.value;
  //   this.stdArray.push(student);
  //   console.log(this.stdArray);
  // }

  onGettingForm(info: stdInfo) {
    this.stdArray.unshift(info);
  }
}
