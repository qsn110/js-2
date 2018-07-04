Var EventUtil = {


        
     //注册事件处理程序
	addHandler:function(element,type,handler){
	
		if(element.addEventListener){
			
			element.addEventListener(type,handler,false);
			
		}else if (element.attachEvent){
			
			element.attachEvent("on"+type,handler);
			
		}else{
			
			Element["on" + type] = handler;                           
		}
	},
	
	//获取事件这个变量
	getEvent:function(event){
		
		return event ? event : window.event; 
	},
	
	//获取目标元素
	getTarget:function(event){                                          绿色部分为事件兼容处理
		
		return event.target || event.srcElement; 
	},
	
	//阻止冒泡
	preventDefaule:function(event){
		
		If (event.preventDefaule){
			
			event.preventDefaule();
		}else{
			event.returnValue = false;
		}
	},
	
	//移除事件注册程序
	removeHandler:function(element,type,handler){
		
		if(element.removeEventListener){
			
			element.removeEventListener(type,handler,false);
			
		}else if (element.detachEvent){
			
			element.detatchEvent("on" + type,handler);
			
		}else{
			
			element["on" + type] = null;
		}
	
	},
	stopPropagation:function(event){
	
		if(event.stopPropagation){
		
		    event.stopPropagation();
		}else{
		
			event.cancelBubble = true;                   ie不支持事件捕获，因此只能用来阻止事件冒泡
		}
		
	},
	
	//获取键盘charCode
	   getCharCode:function(event){
		
		 if (tyoeof event.charCode == "number"){
		    
		      return event.charCode;
		 }else{
			return event.keyCode;
		 }
		
	   }，
	
	   //获取滚轮信息
	     getWheelDelta:function(event){
		
		if(event.wheelDelta){
			return (client.engine.opera && client.engine.opera < 9.5 ? -event.wheelDelta:event.wheelDelta);
		}else{
			return -event.detatil*40;                  //firefox浏览器下
		}
	  }，
	
	    //mousedown和mouseup中获取button
	     getButton:function(event){
		
			if(document.implementation.hasFeature("MouseEvents","2.0")){
				return event.button;
			}else{
				switch(event.button){
					case 0:
					case 1:
					case 3:
					case 5:
					case 7:
						return 0;
						
					case 2:
					case 6:
					      return 2;
					case 4:
					      return 1;
					
				}
					
					
			
			}
		},
	     
	   
	   //mouseover和mouseout中获取相关元素
	     
	     getRelatedTarget:function(event){
			
			if(event.relatedTarget){
			
				return event.relatedTarget;
				
			}else if(event.fromElement){
			
				return event.fromElement;
				
			}else if{
			
				return event.toElement;
			}else{
				
				return null;   //非mouseout 和mouseover事件中
			}
	
		},
	
};
