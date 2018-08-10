import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

@Pipe({
  name: 'twitter'
})
export class TwitterPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer){}

  transform(text: string, entities: any): any {
    if(entities.user_mentions) {
      for(let mentionedUser of entities.user_mentions) {
        text = text.replace('@'+mentionedUser.screen_name,
          "<a class='channel-link' href='twitter?channel="+ mentionedUser.screen_name +"'>"+'@'+mentionedUser.screen_name+"</a>");
      }
    }
    return this.sanitizer.bypassSecurityTrustHtml(text);
  }
}
