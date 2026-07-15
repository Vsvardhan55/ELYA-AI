import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ChatService } from '../../../features/chat/services/chat.service';
import { Conversation } from '../../../features/chat/models/conversation.model';

@Component({
  selector:'app-sidebar',
  standalone:true,
  imports:[CommonModule],
  templateUrl:'./sidebar.html',
  styleUrl:'./sidebar.scss'
})
export class Sidebar{

    conversations:Conversation[]=[];

    activeId='';

    constructor(
        private router: Router,
        private chatService:ChatService
    ){

        this.chatService.conversations$
            .subscribe(data=>{

                this.conversations=data;

            });

        this.chatService.activeConversation$
            .subscribe(chat=>{

                this.activeId=chat?.id??'';

            });

    }

    newChat(){

        this.chatService.newConversation();

    }

    select(id:string){

        this.chatService.selectConversation(id);

    }

    delete(id:string){

    this.chatService.deleteConversation(id);

}

togglePin(id:string){

    this.chatService.togglePin(id);

}

rename(chat:Conversation){

    const title =
        prompt(
            'Rename conversation',
            chat.title
        );

    if(title?.trim()){

        this.chatService.renameConversation(
            chat.id,
            title
        );

    }

  }
  openSettings(): void {
  this.router.navigate(['/app/settings']);
  }

}
