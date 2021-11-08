import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatsListComponent } from './components/module-chats-list/chats-list/chats-list.component';
import { ChatItemComponent } from './components/module-chats-list/chat-item/chat-item.component';
import { ChatsListHeaderComponent } from './components/module-chats-list/chats-list-header/chats-list-header.component';
import { ChatWindowHeaderComponent } from './components/module-chat-window/chat-window-header/chat-window-header.component';
import { UserMessageComponent } from './components/module-chat-window/user-message/user-message.component';
import { ChatFormComponent } from './components/module-chat-window/chat-form/chat-form.component';
import { ChatWindowComponent } from './components/module-chat-window/chat-window/chat-window.component';
import { FormsModule } from '@angular/forms';
import { ChatComponent } from './views/chat/chat.component';
import { RegisterComponent } from './views/register/register.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ChatsListComponent,
    ChatItemComponent,
    ChatsListHeaderComponent,
    ChatWindowHeaderComponent,
    UserMessageComponent,
    ChatFormComponent,
    ChatWindowComponent,
    ChatComponent,
    RegisterComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
