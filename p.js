var scores,roundscore,activeplayer,dice,yoo=0,ps;
scores= [0,0,0];
roundscore=0;
activeplayer=1;

document.querySelector('#dice').style.display='none';
document.querySelector("#score1").textContent='0';
document.querySelector("#current1").textContent='0';
document.querySelector("#current2").textContent='0';
document.querySelector("#score2").textContent='0';

document.querySelector('#play').addEventListener('click',function(){
  if(yoo===0)
{var dice=Math.floor((Math.random()*6))+1

document.querySelector('#dice').style.display='block';
document.querySelector('#dice').src='dice-'+dice+".png";

if(dice===6 && ps===6)
{
  scores[activeplayer]=0;
  document.querySelector('#score'+activeplayer).textContent='0';
  nextplayer();
}
 else if(dice!==1 && ps!==dice)
{

  roundscore=roundscore+dice;
  document.querySelector('#current'+activeplayer).textContent=roundscore;

}
else{
  if(activeplayer===1){
    activeplayer=2;
  }else {
    activeplayer=1;
}
roundscore=0;
document.querySelector("#current1").textContent='0';
document.querySelector("#current2").textContent='0';

document.querySelector('.player1').classList.toggle('active');
document.querySelector('.player2').classList.toggle('active');
}
ps=dice;
}
});

//////////////////////////////////////////////////////////////////////////////////////////////////////
document.querySelector('#hold').addEventListener('click',function(){
  if(yoo===0)
  {
scores[activeplayer]=scores[activeplayer]+roundscore;

document.querySelector('#score'+activeplayer).textContent=scores[activeplayer];

var input=document.querySelector('.input').value;
var winscore;
if(input)
{
  winscore=input;
}
else{
  winscore=100;
}




if(scores[activeplayer]>=winscore)
{
  document.querySelector('#p'+activeplayer).textContent='WINNER';
  document.querySelector('#dice').style.display='none';
  yoo=1;

}
else {
  nextplayer();

}
}
});



function nextplayer()
{
  if(activeplayer===1){
    activeplayer=2;
  }else {
    activeplayer=1;
}
roundscore=0;
document.querySelector("#current1").textContent='0';
document.querySelector("#current2").textContent='0';

document.querySelector('.player1').classList.toggle('active');
document.querySelector('.player2').classList.toggle('active');
}
//////////////////////////////////////////////////////////////
//working of new game button


document.querySelector('.newgame').addEventListener('click',function()
{
  var scores,roundscore,activeplayer,dice;
  scores= [0,0,0];
  roundscore=0;
  activeplayer=1;

  document.querySelector('#dice').style.display='none';
  document.querySelector("#score1").textContent='0';
  document.querySelector("#current1").textContent='0';
  document.querySelector("#current2").textContent='0';
  document.querySelector("#score2").textContent='0';


  document.querySelector('.player1').classList.remove('active');
    document.querySelector('.player2').classList.remove('active');
  document.querySelector('.player2').classList.add('active');
});
