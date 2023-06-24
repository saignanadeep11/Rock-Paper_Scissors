function compM(){
const rand=Math.random();
let comp;
if(rand>=0 && rand<=1/3){
  comp='Rock';
}
else if(rand>1/3 && rand<=2/3){
  comp='Paper';
}
else{
  comp='Scissors';
}
return comp;
}
function move(comp,play){
 document.querySelector('.js-move').innerHTML
 = `Your Move: ${play} - Computer Move: ${comp}`;
}
function Res(comp,play){
if(comp==play){
  document.querySelector('.js-result').innerHTML=(`tie`);
  score.ties+=1;
}
else if(comp==='Rock'&&play==='Paper'|| comp==='Paper'&& play==='Scissors'||comp==='Scissors'&&play==='Rock'){
document.querySelector('.js-result').innerHTML=( `Win`);
score.wins+=1;
}
else{
document.querySelector('.js-result').innerHTML=( `You lose`);
score.losses+=1;
}
localStorage.setItem('score',JSON.stringify(score));
getScore();
}

let score=JSON.parse(localStorage.getItem('score'))||{
wins: 0,
losses: 0,
ties: 0
};
getScore();
function getScore(){
let s=JSON.parse(localStorage.getItem('score'));
document.querySelector('.js-score').innerHTML=`Wins=${s.wins}, Losses=${s.losses}, Ties=${s.ties}`;
}
function jsReset(){
score={
  wins:0,
  losses:0,
  ties:0
};
document.querySelector('.js-move').innerHTML
 ='';
 document.querySelector('.js-result').innerHTML='';
document.querySelector('.js-score').innerHTML=`Wins=${score.wins}, Losses=${score.losses}, Ties=${score.ties}`;
}
