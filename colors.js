var Links = {
    setColor : function(color){
    // var alist = document.querySelectorAll('a');
    // var i = 0;
    // //근데 왜 여기를 굳이 반복문을 쓰는거지
    // //alist 가 배열의 형태여서 그런건가
    // //<a> 태그가 여러개 여서?
    // while(i<alist.length){
    //     alist[i].style.color = color;
    //     i = i+1;
    //     }
    $('a').css('color', color);
    }
};

// function linksSetColor (color){
//     var alist = document.querySelectorAll('a');
//     var i = 0;
//     //근데 왜 여기를 굳이 반복문을 쓰는거지
//     //alist 가 배열의 형태여서 그런건가
//     //<a> 태그가 여러개 여서?
//     while(i<alist.length){
//         alist[i].style.color = color;
//         i = i+1;
//         }
// } links 객체 안에 들어가버림

var Body = {
    setColor : function(color) {
    // var target = document.querySelector('body');
    // target.style.color = color;
    $('body').css('color', color);
    },
    setBackgoundColor : function(color) {
    // var target = document.querySelector('body');
    // target.style.backgroundColor = color;
    $('body').css('backgroundColor', color);
    }

};

// function bodySetColor(color) {
//     var target = document.querySelector('body');
//     target.style.color = color;
// } body 객체 안으로 들어가버림

// function bodySetBackgoundColor(color) {
//     var target = document.querySelector('body');
//     target.style.backgroundColor = color;
// } body 객체 안으로 들어가버림

function nightDayHandler(self){    
    var target = document.querySelector('body');
    if (self.value === 'night'){
    Body.setBackgoundColor('black');
    Body.setColor('white');
    self.value = 'day';
    Links.setColor('powderblue');
        }
    else {
    Body.setBackgoundColor('white');
    Body.setColor('black');
    self.value = 'night';
    Links.setColor('blue');
    }
}   