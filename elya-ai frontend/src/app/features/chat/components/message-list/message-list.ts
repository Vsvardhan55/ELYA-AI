import {
  Component,
  Input,
  ElementRef,
  ViewChild,
  AfterViewChecked,
  OnChanges,
  SimpleChanges
} from '@angular/core';

import { CommonModule } from '@angular/common';

import { Message } from '../../models/message.model';
import { ChatMessage } from '../chat-message/chat-message';

@Component({
  selector:'app-message-list',
  standalone:true,
  imports:[
    CommonModule,
    ChatMessage
  ],
  templateUrl:'./message-list.html',
  styleUrl:'./message-list.scss'
})
export class MessageList implements AfterViewChecked, OnChanges{

    @Input()
    messages:Message[]=[];

    @ViewChild('scrollContainer')
    scrollContainer!:ElementRef;

    ngAfterViewChecked(){

        this.scrollToBottom();

    }

    ngOnChanges(changes: SimpleChanges) {
        console.log("MessageList received:", this.messages);
    }

    private scrollToBottom(){

        if(this.scrollContainer){

            this.scrollContainer.nativeElement.scrollTop=
            this.scrollContainer.nativeElement.scrollHeight;

        }

    }

}
