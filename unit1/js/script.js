var request;
if (window.XMLHttpRequest){
  request=new XMLHttpRequest();
}else{
    request=new ActiveXObject('Microsoft.XMLHTTP');
  }
request.open('GET','data.xml');
request.onreadystatechange=function(){

    if((request.readyState===4) && (request.status===200)){
     console.log(request.responseXML.getElementsByTagName('name')[1]);
    }
}
request.send();
