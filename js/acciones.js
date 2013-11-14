// JavaScript Document

$(document).ready(function(){
	document.addEventListener("deviceready",function(){
		$('#disp table td').eq(1).text()=(device.name);
		$('#disp table td').eq(3).text()=(device.plataform);	
		$('#disp table td').eq(5).text()=(device.version);	
		$('#disp table td').eq(7).text()=(device.cordova);
		$('#disp table td').eq(9).text()=(device.uuid);	
			
	},false);//device
});//ready
