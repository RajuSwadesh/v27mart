import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatMessagePage } from './chat-message';

@NgModule({
  declarations: [
    ChatMessagePage,
  ],
  imports: [
    IonicPageModule.forChild(ChatMessagePage),
  ],
})
export class ChatMessagePageModule {}
