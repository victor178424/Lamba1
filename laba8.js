function showDate() {
    let out=document.getElementById('current-date');
    let today= new Date();
    out.innerHTML='Дата и время для русской локали: '+today.toLocaleString('ru-RU');
    let out1=document.getElementById('current-engl');
    out1.innerHTML='Дата и время для английской локали: '+today.toLocaleString('en-GB');
    let out2=document.getElementById('current-german');
    out2.innerHTML='Дата и время для немецкой локали: '+today.toLocaleString('de');
    let out3=document.getElementById('current-china');
    out3.innerHTML='Дата и время для китайской локали: '+today.toLocaleString('zh');
    let out4=document.getElementById('current-korea');
    out4.innerHTML='Дата и время для корейской локали: '+today.toLocaleString('ko');
    let out5=document.getElementById('current-greek');
    out5.innerHTML='Дата и время для греческой локали: '+today.toLocaleString('el');
}

function showDaysCount() {
    let today = new Date();
    let inputDate = document.querySelector('input[type=date]');
    let birthday = new Date(inputDate.value);
    let count = document.getElementById('count-days');
    let daysCount = (today - birthday)/1000/60/60/24;
    daysCount = Math.floor(daysCount);
    count.innerHTML = 'Количество дней с даты рождения: ' + daysCount;
}

function showTime() {
    let today = new Date();
    let currentTime = today.toLocaleTimeString('ru-RU');
    document.getElementById('time').innerHTML=currentTime;
}
setInterval(showTime, 1000);