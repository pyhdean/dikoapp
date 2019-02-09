const fetch = require('node-fetch')


fetch("https://sum.su.or.kr:8888/Ajax/Bible/BodyBibleCont", {"credentials":"include","headers":{"origin": "https://sum.su.or.kr:8888", "accept":"application/json, text/javascript, */*; q=0.01","accept-language":"en-US,en;q=0.9,ko-KR;q=0.8,ko;q=0.7","cache-control":"no-cache","content-type":"application/json; charset=UTF-8","pragma":"no-cache","x-requested-with":"XMLHttpRequest"},"referrer":"https://sum.su.or.kr:8888/bible/today","referrerPolicy":"no-referrer-when-downgrade","body":"{ 'qt_ty' : 'QT1' , 'Base_de' : '2019-01-16', 'Bibletype' : '1'}","method":"POST","mode":"cors"}).then((res)=>{console.log(res)});
