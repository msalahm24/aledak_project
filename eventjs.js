submit=document.getElementById('idsubmit');
function eventobject(type,target,time)
{
    this.target=target;
    this.type=type;
    this.time=time;
}
function randomnumbers(min, max){
	random = Math.floor(Math.random() * (max - min)) + min;
	return random;
}
function append()
{
    temp=localStorage.getItem('click');
    return newclick=temp+JSON.stringify(clickevent);
}

alphabets = ["A", "B", "C","D", "E", "F", "G", "H", "I", "J","K", "L", "M", "N", "O", "P","Q","R","S", "T", "U", "V", "W","X", "Y","Z"];
submit.addEventListener('click',function(e){
    $('#label').remove();//in jquery if the element is not exists make nothing
    clickevent=new eventobject(e.type,e.target,e.timeStamp);
    if(localStorage.getItem('click')==null)
    {
        localStorage.setItem('click',JSON.stringify(clickevent));
    }
    else
    {
    localStorage.setItem('click',append());
    }
    label=document.createElement('label');
    node=document.createTextNode('choose from this buttons');
    label.appendChild(node);
    div=document.getElementById('idheader');
    div.appendChild(label);
    document.getElementsByTagName('label')[0].setAttribute('id','label');
    num=document.getElementById('iddata').value;
    document.getElementById('idalpha').innerHTML=" ";
    document.getElementById('idimgs').innerHTML=" ";

    for(i=0;i<num;i++)
    {
        rand=randomnumbers(0,26);

        alphabet = "<button id='a" + i +"'> " + alphabets[rand] + "</button>";
        document.getElementById('idalpha').innerHTML+=alphabet;
        image = "<img class='dynamic' src='imgs/" + rand+ ".png' id='i" + i +"' style='display:none'>";
        document.getElementById("idimgs").innerHTML += image;

    }
    for(  i = 0; i<num; i++)
    {/*the code var has some statement like change the style of the img to block and save the click event to localstorage */
       code=" document.getElementById('a' + "+i+").addEventListener('click', function(e){empty(num);document.getElementById('i' + "+i+").setAttribute('style', 'display:block');temp=localStorage.getItem('clickonchild');if(temp==null){clickevent=new eventobject(e.type,e.target,e.timeStamp);localStorage.setItem('clickonchild',JSON.stringify(clickevent));} else{ clickevent=new eventobject(e.type,e.target,e.timeStamp); temp=temp+JSON.stringify(clickevent); localStorage.setItem('clickonchild',temp)};});"
       eval(code);
	}

});


function empty(num)
{
    for(i=0;i<num;i++)
    {
        document.getElementById('i'+ i).setAttribute("style", "display:none");
    }
}
