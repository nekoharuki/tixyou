function tixyou(type){

const okane=document.getElementById('kinngaku');
const result=document.getElementById('result');
const bai=document.getElementById('reto');

const x =parseInt(okane.value);
const y =parseInt(bai.value);

if(isNaN(x) || x <= 0){
    result.textContent = "金額を正しく入力してください";
    return;
}
if(isNaN(y) || y <= 0){
    result.textContent = "金額を正しく入力してください";
    return;
}



const randnumber = randkansuu();
const kuribou = hanntei(randnumber);

if(type === 'even'){
    if(kuribou){
        result.textContent =`サイコロの目は${randnumber}で偶数です。よってあなたは${x*y}円の勝ちです`;
    }else{
        result.textContent =`サイコロの目は${randnumber}で奇数です。よってあなたは${x*y}円の負けです`;
    }
}

else if(type === 'odd'){
    if(kuribou){
        result.textContent =`サイコロの目は${randnumber}で偶数です。よってあなたは${x*y}円の負けです`;
    }
    else{
        result.textContent =`サイコロの目は${randnumber}で奇数です。よってあなたは${x*y}円の勝ちです`;
    }

}
return ;
}
function randkansuu(){
    return  Math.floor(Math.random()*6)+1;
}
function hanntei(n){
    return n % 2 == 0;
}