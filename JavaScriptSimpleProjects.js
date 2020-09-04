function clickme(){
    if(document.getElementById('crt')!==null)
    document.getElementById('crt').remove();
    var age=prompt("What is your age?")
    var result=(age)*365
    var ele=document.createElement('h2')
    var data=document.createTextNode('Age of ' +parseInt(age)+' in days is '+parseInt(result))
    ele.setAttribute("id","crt")
    ele.appendChild(data)
    document.getElementById("result").appendChild(ele)
}
function reset(){
    if(document.getElementById('crt')!==null)
    document.getElementById('crt').remove();
}

function showCat(){
    var imgss=document.createElement("img")
    imgss.src="http://fakeimg.pl/150x100/#ffffff?text=Display&font=lobster"
    imgss.setAttribute('alt','Cuttest Cat')
    document.getElementById('imgs').appendChild(imgss)
}

//ROCK PAPER SIECER GAME
var humanScore = 0
var BotScore = 0
function humanSelect(humanCoice){
    document.getElementById('btn9').style.display = 'block'
    document.getElementById('btn10').disabled=false
    document.getElementById('btn10').innerText = 'Reset'
    var myCoice=humanCoice;
    
    var botChoice=botSelectOption(botSelect());
    var tests=test(myCoice.id,botChoice);
    addImgs(myCoice,tests,botChoice);
}

function botSelect(){
    return ( Math.floor(Math.random()*3));
}

function botSelectOption(botSelected){
    var vals={
        0:'rock',
        1:'paper',
        2:'siecer'
    }
    return vals[botSelected]
}

function test(my,bot){
    var a={
        'rock':{'rock':'You Tied','paper':'You Loss','siecer':'You Won'},
        'paper':{'paper':'You Tied','rock':'You Won','siecer':'You Loss'},
        'siecer':{'siecer':'You Tied','paper':'You Won','rock':'You Loss'}
    }
    return a[my][bot]
}

function removeImgs(){
    document.getElementById('rock').remove()
    document.getElementById('paper').remove()
    document.getElementById('siecer').remove()
}

function addImgs(my,bot,bots){

    var urls={
        'rock':document.getElementById('rock').src,
        'paper':document.getElementById('paper').src,
        'siecer':document.getElementById('siecer').src
    }
    removeImgs();
    var human = document.createElement("img")
    human.setAttribute('id','img2')
    human.src = my.src
    var bott=document.createElement("img")
    bott.setAttribute('id','img1')
    bott.src=urls[bots]
    var span=document.createElement('div')
    span.setAttribute('id','img3')
    document.getElementById('images').appendChild(human)
    document.getElementById('images').appendChild(span)
    document.getElementById('images').appendChild(bott)
    if(bot=='You Loss'){
    span.innerHTML=("<h1 id='desicion' style='color:red;display:block;border:none;padding-top:10px;text-shadow: 1px 5px 40px rgba(248, 4, 4, 0.863);'>"+bot+"</h1>")
    document.getElementById('images').appendChild(human).style.boxShadow='1px 5px 40px rgba(248, 4, 4, 0.863)'
    document.getElementById('images').appendChild(span)
    document.getElementById('images').appendChild(bott).style.boxShadow='1px 5px 40px  rgb(118, 247, 13)'
    
    console.log('Bot Score',++BotScore);
    }
    else if(bot=='You Won'){
    span.innerHTML=("<h1 id='desicion' style='color:green;display:block;border:none;padding-top:10px;text-shadow: 1px 5px 10px  rgba(118, 247, 13,0.9);'>"+bot+"</h1>")
    document.getElementById('score').innerText = ++humanScore
    console.log('Homan Score',humanScore)
    }
    else
    {
    span.innerHTML=("<h1 id='desicion' style='color:yellow;display:block;border:none;padding-top:10px;text-shadow: 10px 10px 20px  rgba(185, 247, 13,0.9)'>"+bot+"</h1>")
    document.getElementById('images').appendChild(human).style.boxShadow='1px 5px 20px  rgba(140, 247, 13,0.9)'
    document.getElementById('images').appendChild(span)
    document.getElementById('images').appendChild(bott).style.boxShadow='1px 5px 20px  rgba(140, 247, 13,0.9)'
    }
    if(humanScore == 5){
        won()
        console.log('Your Chapian')
        
    }
    else if(BotScore == 10){
        runnerUp()
        console.log('Bot is Chapian :(')
    }
}
function won(){
    document.getElementById('Fullscore').style = 'color:green'
    document.getElementById('Fullscore').style.textShadow='1px 5px 20px  rgba(140, 247, 13,0.9)'
    document.getElementById('btn9').style = 'display:none'
    
    var span=document.createElement('div')
    span.setAttribute('id','img3')
    document.getElementById('images').appendChild(span)
    span.innerHTML=("<h1 id='desicion' style='font-size:2em;display:block;border:none;padding-top:10px;color:green;text-shadow: 1px 5px 40px rgba(140, 247, 13,0.9);'>Your a chapion</h1>")
    document.getElementById('img3').style.display = 'none'
    document.getElementById('img1').style.display = 'none'
    document.getElementById('img2').style.display = 'none'
    document.getElementById('btn10').innerText = 'Restart'
}
function runnerUp(){
    document.getElementById('Fullscore').style = 'color:rgba(248, 4, 4, 0.863)'
    document.getElementById('Fullscore').style.textShadow='1px 5px 20px  rgba(248, 4, 4, 0.863)'
    document.getElementById('btn9').style = 'display:none'
    var span=document.createElement('div')
    span.setAttribute('id','img3')
    document.getElementById('images').appendChild(span)
    span.innerHTML=("<h1 id='desicion' style='font-size:2em;display:block;border:none;padding-top:10px;color:red;text-shadow: 1px 5px 40px rgba(248, 4, 4, 0.863);'>Bot won Better Luck next time :(</h1>")
    document.getElementById('img3').style.display = 'none'
    document.getElementById('img1').style.display = 'none'
    document.getElementById('img2').style.display = 'none'
    document.getElementById('btn10').innerText = 'Restart'
}
function ResetImgs(valueToSet){
    var urls={
        'rock':'won rock.jpg',
        'paper':'losed rock.jpg',
        'siecer':'loss rock.jpg'
    }

    if(document.getElementById('rock') === null)
    {
    document.getElementById('desicion').remove()
    document.getElementById('img2').remove()
    document.getElementById('img1').remove()
    document.getElementById('img3').remove()
    var rock = document.createElement("img")
    rock.setAttribute('id','rock')
    rock.setAttribute('class','img');
    rock.src = urls['rock']
    rock.onclick = function(){humanSelect(this)}
    var papper=document.createElement("img")
    papper.setAttribute('id','paper')
    papper.setAttribute('class','img')
    papper.src=urls['paper']
    papper.onclick = function(){humanSelect(this)}
    var siecers=document.createElement("img")
    siecers.setAttribute('id','siecer')
    siecers.setAttribute('class','img')
    siecers.src=urls['siecer']
    siecers.onclick = function(){humanSelect(this)}
    document.getElementById('images').appendChild(rock)
    document.getElementById('images').appendChild(papper)
    document.getElementById('images').appendChild(siecers)
    if(valueToSet == 1)
    {
        humanScore = 0;
        BotScore = 0;
        document.getElementById('score').innerText = '00'
        document.getElementById('btn9').style = 'display:block'
        document.getElementById('Fullscore').style.color='#0f0f0f'
        document.getElementById('Fullscore').style.textShadow='#0f0f0f'
        document.getElementById('btn10').innerText = 'Reset'
    }
    if(document.getElementById('desicion')!== null){
        document.getElementById('desicion').remove();
    }
    }
}


var arr=document.getElementsByTagName("button")
function changeColor(colorSelected){
    
    
    if(colorSelected.value==='Red')
        {changeColorToRed(colorSelected.value)}
    else if(colorSelected.value==='Blue')
        {changeColorToBlue(colorSelected.value)}
    else if(colorSelected.value==='Random'){changeColorToRandom()}
    else{changeColorToDefaultColor()}
    
}

function changeColorToRed(c){
    for(let i=1;i<=arr.length;i++){
        document.getElementById('btn'+i).style.backgroundColor=''
    document.getElementById('btn'+i).style.backgroundColor=c
}
}

function changeColorToBlue(c){
    for(let i=1;i<=arr.length;i++){
        document.getElementById('btn'+i).style.backgroundColor=''
        document.getElementById('btn'+i).style.backgroundColor=c
}
}
function changeColorToDefaultColor()
{
    for(let i=1;i<=arr.length;i++){
        document.getElementById('btn'+i).style.backgroundColor=''
        document.getElementById('btn'+i).style.backgroundColor='linear-gradient(rgba(235, 235, 136, 0.808),rgba(211, 103, 103, 0.712));'
    }

}
function changeColorToRandom(){
    for(let i=1;i<=arr.length;i++)
    {
        document.getElementById('btn'+i).style.backgroundColor=''
        document.getElementById('btn'+i).style.backgroundColor='rgba('+Math.floor((Math.random()*256)+20)+','+Math.floor((Math.random()*256)+10)+','+Math.floor((Math.random()*256)+40)+')';
    }
}

function tims(){
    var dt = new Date();
    var tim = dt.getHours();
    var min = dt.getMinutes();
    var sec = dt.getSeconds();
    document.getElementById('curTim').innerHTML = tim +':'+min+':'+sec;
}
function curTim(){
    setInterval(tims,1000);
}

function insert(num){
    var temp=document.getElementById("txt").innerHTML;
    document.getElementById("txt").innerHTML=temp+ num;
    
}
function opt(exp){
    var temp1=document.getElementById("txt").innerHTML;
    var chek = temp1.charAt(temp1.length-1);
    if(isNaN(chek)!=true){
            if(temp1!=""){	
        document.getElementById("txt").innerHTML=temp1+ exp;
        }
    }
    else
    {
        document.getElementById("txt").innerHTML=temp1.replace(chek,exp);
    }

}
function clears(){
    var rep = document.getElementById("txt").innerHTML;
    document.getElementById("txt").innerHTML=rep.slice(1);
}
function clearAll(){
    document.getElementById("txt").innerHTML="";
}
function eql(){
    try{
    var exp1 = document.getElementById("txt").innerHTML;
    
    document.getElementById("txt").innerHTML=eval(exp1);
    }
    
    catch(Exception){
        document.getElementById("txt").innerHTML="Syntax Error";
    }
    
}

