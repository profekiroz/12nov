// JavaScript Document

$(document).ready(function(e){
	document.addEventListener("deviceready",function(){
		$('.btn').tap(function(){
			var boton = (($(this).attr('class')).split(' '))[1];
			switch(boton)
			{
			
			case 'b1':
			navigator.notification.beep(3);
			break;
			
			case 'v1':
			navigator.notification.vibrate(500);
			break;
			
			
			
			}
		});//tap
		
		$('#izquierda').swipeleft(function(){
			navigator.notification.alert("Deslizo a la izquierda",function(){"Practica4", "Aceptar"});
			});//barrer izq
		
		$('#derecha').swiperight(function(){
			navigator.notification.confirm("Que quieres hacer ?",function(opt){
				switch(opt){
					case 1:
					navigator.notification.beep(3);
					break;
					
					case 2:	
					navigator.notification.vibrate(500);				
					break;
				}// switch opt
			},"Prueba4","Beep,Vibrar,Cancelar");//confirm
			
			})//Barrer derecha
	},false);//device
});//document
