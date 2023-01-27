function computeleapYear(year){
    /*if ( y%4 ==0 ){
      if (y%100==0){
        return '평년입니다.';
      }else {
        return '윤년입니다.'
      }
    }else{
      if (y%400 ==0){
        return '윤년입니다.'
      }else {
        return '평년입니다.'
      }
    }              여기말고 다른 방식은?*/
    let result='';
    if ( (year%4 ==0 && year%100!=0)||(year%400 ==0) ){
         result= `은 윤년입니다.`;
    }else{
        result=`은 평년입니다.`;
    }
    return `${year}년 ${result}`;
}

function showStarPyramid(m){
    let result =' ';
    for( i=1;i<=m; i++){
        for (let j=1; j<=i; j++){
            result+=`*`;
        }
        result +='<br>';
    }

    document.write(result,'<br>');
}

function showAMPM(time){
    console.log(typeof time);
    hour= time[0]+time[1];
    console.log(typeof hour);
    switch (hour >= 12){
        case true:
            return '오후 입니다. <br>';
        case false:
            return  '오전 입니다. <br>';
    }
}
