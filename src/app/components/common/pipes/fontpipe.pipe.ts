import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fontpipe'
})
export class FontpipePipe implements PipeTransform {

  transform(value: string): any {
    const regex = /[\*][\w\W]*[\*]/gmi;
    // return this.sanitize(this.replace(value, regex));
    console.log("value "+ value);
    return this.replace(value, regex);
  }

  replace(str:any, regex:any) {
    let pattern = new RegExp(regex);
    let res = pattern.test(str);
    return str.replace(str, '<b>'+str+'</b>');
  }

}
