//@angular/core.ts 에서 export 시킨 것 중. 필요한것을 import
//파일에서 export 시켜야 외부 파일에서 이용가능하고 외부에서는,

import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-sub',
  templateUrl: './sub.component.html',
  styleUrls: ['./sub.component.css']
})
export class SubComponent implements OnInit {

  //태그 식별 획득할때, 식별자가 #으로 선언되어있으면 편하다
  @ViewChild('div1') div1: ElementRef

  //생성자 매개변수에 접근제한자 추가되었다. 곧 클래스 멤버다
  //angular 는 DI(Dependency Injection) 을 제공한다
  //필요객체를 직접 획득하지 않고, 선언만 해놓으면 알아서 획득해 주입
  //이 컴포넌트가 출력하고자 하는 모든 내용을 묶는 root 태그 객체
  constructor(private elRef : ElementRef) { }

  ngOnInit(): void {
  }

  change(){
    this.div1.nativeElement.style.color="red"
    //jquery 방식처럼 id 값으로 객체 획득
    var div2 = this. elRef.nativeElement.querySelector('#div2')
    div2.innerHTML = 'hello world'
    div2.style.backgroundcolor='yellow'
  }

}
