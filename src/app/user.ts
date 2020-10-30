//외부에서 이용하고자하는 vo 클래스를 만들겠다
//외부에서 이용하려면 꼭 export 시켜야함
export class User{

    constructor(
        public id: number,
        public name: string,
        public phone: string,
        public email: string
    ){}
}