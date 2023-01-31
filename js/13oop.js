class User3{
    _userid = '';  // 이렇게 _ 를 사용해주면  protected 속성으로 선언

    #passwd= '';   // 이렇게 #을 사용 해주면 private 속성으로 선언
    _name='';
    _email='';

    constructor(userid,passwd, name, email) {
        this._userid = userid;
        this._passwd = passwd;
        this._name = name;
        this._email = email;
    } //생성자로 변수 선언
}



class SungJuk{                 //값만 다루는 클래스 : VO , DTO

    #name = '';
    #kor = '';
    #eng = '';
    #mat = '';
    #tot=0;
    #avg=0.0;
    #grd='';
    constructor(name,kor,eng,mat) {
        this.name=name;
        this.kor=kor;
        this.eng=eng;
        this.mat=mat;
    }
    set name(name){this.#name=name;}
    get name(){return this.#name;}

    set kor(kor){this.#kor=kor;}
    get kor(){return this.#kor;}

    set eng(eng){this.#eng=eng;}
    get eng(){return this.#eng;}

    set mat(mat){this.#mat=mat;}
    get mat(){return this.#mat;}

    set tot(tot){this.#tot=tot;}
    get tot(){return this.#tot;}

    set avg(avg){this.#avg=avg;}
    get avg(){return this.#avg;}

    set grd(grd){this.#grd=grd;}
    get grd(){return this.#grd;}


}


class SungJukService{         //기능을 하는 클래스: Service , DAO, Util       클래스는 보통 2가지로 나눔 - 값만 저장하는 클래스와 기능을 저장하는 클래스

    static computeSungJuk = (sj)=>{         //객체생성 없이 바로 메서드 호출 가능
        sj.tot = sj.kor +sj.eng +sj.mat;
        sj.avg=sj.tot/3;
        switch (parseInt(sj.avg / 10)) {
            case 10:case 9:
                sj.grd="수";
                break;
            case 8:
                sj.grd="우";
                break;
            case 7:
                sj.grd="미";
                break;
            case 6:
                sj.grd="양";
                break;
            default:
                sj.grd="가";
                break;
        }//switch
    };
    showSungJuk=(sj)=>{
        return `${sj.name} ${sj.kor} ${sj.eng} ${sj.mat} <br> ${sj.tot} ${sj.avg} ${sj.grd} <br>`;
    };
}