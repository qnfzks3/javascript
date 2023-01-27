

//#문제 24번
let lotto_v1=(lotto,mykey)=>{
    let match=0;
    let msg='아쉽지만, 다음 기회에!!';

    /*if(lotto[0]==mykey[0] || lotto[0]==mykey[1] || lotto[0]==lotto[2]){++match}
    if(lotto[1]==mykey[0] || lotto[1]==mykey[1] || lotto[1]==lotto[2]){++match}
    if(lotto[3]==mykey[0] || lotto[3]==mykey[1] || lotto[3]==lotto[2]){++match}*/


    for (let i=0; i<=2; i++ ){
        for(let j=0; j<=2; j++){
            if (lotto[i]==mykey[j]){++match;}
        }
    }



    if(match==1){msg+='1개 일치 '}
    else if(match==2){msg+='2개 일치 '}
    else if(match==3){msg='3개 일치!  당첨 상금 1백만 지금! '}

    return msg;

}