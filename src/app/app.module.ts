import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubComponent } from './sub/sub.component';

//two-way data binding 을 위해서
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SubComponent
  ],
  //외부 모듈을 imports 에 추가하면 해당 모듈에 등록된 구성요소를
  //마치 우리의 모듈에서 작성한 것 처럼 이용
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
