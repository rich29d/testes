<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, minimal-ui">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <meta name="mobile-web-app-capable" content="yes">
    <title>Detect shake in phone using Jquery</title>
	<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
    <script type="text/javascript" src="js/jquery.ios-shake.js"></script>
	<script type="text/javascript" src="js/jquery.ui.shake.js"></script>
    <script type="text/javascript">
        $(document).ready(function() {
		
			var giro = false;
		    var velGiro = 1;
			
			//setInterval(function(){ $('#shake').shake(); }, 3000);
			
            function phoneShake() {
				var num = 50;
				giro = true;				
            	var crono = setInterval(function(){
					num = num-0.5;
					velGiro = velGiro+num;
					$(".caixa").css('transform','rotate(' + velGiro + 'deg)');	
					if(num<0){ 
						clearInterval(crono);
						giro = false;
					}
				},50);
            }

            $.shake({
               
                callback: function() {
                    phoneShake();
                }
            });
           
        
      
        });

		
		
		
	
		if(window.DeviceMotionEvent){
		  window.addEventListener("devicemotion", motion, false);
		}else{
		  console.log("DeviceMotionEvent is not supported");
		}


		function motion(event){
		  var x ="X: " + event.accelerationIncludingGravity.x;
		  var y ="Y: " + event.accelerationIncludingGravity.y;
		  var z ="Z: " + event.accelerationIncludingGravity.z;

		  $("#moveX").html('<h1>'+x+'</h1>')
		  $("#moveY").html('<h1>'+y+'</h1>');
		  $("#moveZ").html('<h1>'+z+'</h1>');
		  $(".caixa").css('transform','rotate(' + (event.accelerationIncludingGravity.x.toFixed(2)*9) + 'deg)');
		  
		}
		
		$(function(){
			//$("#moveX").css('transform','rotate(' + 5.544646446*9 + 'deg)');
		});
		
	</script>
    
    
    
	<style>
	body{font-family:arial; }
	h1{font-size:15px}
	#main{text-align:center;font-size:16px;}
	#result{font-size:20px;font-weight:bold;margin:10px;color:#333333}
	
	#shake{text-align:center;width:200px;color:#00cc00;margin:0 auto; font-size: 30px;}
	#cross{text-decoration:line-through;color:#dedede}
	
	#moveX{
		
	}
	.caixa{
		width: 50%;
		padding-top: 50%;
		background: #00C;
		position: absolute;
		top: 25%;
		left: 25%;
		transform:  rotate(0deg);
    	/*transform-origin: left;*/
		transition: all .1s ease;
		color: #FFF;
	}
	</style>
</head>

<body>
<div id="main">
<h1>Shake your phone</h1>

<div id="shake">Just shake your phone</div>

</div>


  <div id="moveX">0</div>
    <div id="moveY">0</div>
    <div id="moveZ">0</div>
<div class="caixa">
  
</div>
    
    
</body>
</html>