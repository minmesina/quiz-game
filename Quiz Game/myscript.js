function load(){
	$(document).ready(function() {
	$('input[id="button"]').prop('disabled', true);
	$('input[id="next"]').prop('disabled', true);
	});
	$("#que6").hide();
	$("#que7").hide();
	$("#que8").hide();
	$("#que9").hide();
	$("#submit2").hide();
	$("#next1").hide();
	$("#set2").hide();
	$("#set3").hide();
	$("#q1").hide();
	$("#q2").hide();
	$("#tot").hide();
	$("#ave").hide();
	$("#t1").hide();
	$("#t2").hide();
	$("#t3").hide();
	$("#t4").hide();
	$("#n1").hide();
	$("#name").hide();
	$("#result").hide();
	
	
}
function checkquiz1(){ 
	var score1=0;
	var guess1=document.getElementById("guess1").value;
	var guess2=document.getElementById("guess2").value;
	var guess3=document.getElementById("guess3").value;
	var guess4=document.getElementById("guess4").value;
	var guess5=document.getElementById("guess5").value;
		if(guess1==""||guess2==""||guess3==""||guess4==""||guess5==""){
			alert("Please answer all questions!");
			
		}
	
		if (guess1!=""&&guess2!=""&&guess3!=""&&guess4!=""&&guess5!=""){
			if(guess1=="hypertext markup language" || guess1=="Hypertext Markup Language"){
				document.getElementById("remark1").innerHTML="Correct";
				score1++;
			}
			else{
				document.getElementById("remark1").innerHTML="Incorrect";
			}
		}
		
		if (guess1!=""&&guess2!=""&&guess3!=""&&guess4!=""&&guess5!=""){
			if(guess2=="cascading style sheet" || guess2=="Cascading Style Sheet"){
				document.getElementById("remark2").innerHTML="Correct";
				score1++;
			}
			else{
				document.getElementById("remark2").innerHTML="Incorrect";
			}
		}
		
		if (guess1!=""&&guess2!=""&&guess3!=""&&guess4!=""&&guess5!=""){
			if(guess3=="javascript" || guess3=="Javascript"){
				document.getElementById("remark3").innerHTML="Correct";
				score1++;
			}
			else{
				document.getElementById("remark3").innerHTML="Incorrect";
			}
		}
		
		if (guess1!=""&&guess2!=""&&guess3!=""&&guess4!=""&&guess5!=""){
			if(guess4=="xhtml" || guess4=="XHTML"){
				document.getElementById("remark4").innerHTML="Correct";
				score1++;
			}
			else{
				document.getElementById("remark4").innerHTML="Incorrect";
			}
		}
		
		if (guess1!=""&&guess2!=""&&guess3!=""&&guess4!=""&&guess5!=""){
			if(guess5=="webpage" || guess5=="web page" || guess5=="WebPage" || guess5=="Web Page"){
				document.getElementById("remark5").innerHTML="Correct";
				score1++;
			}
			else{
				document.getElementById("remark5").innerHTML="Incorrect";
			}
		}
		
		
		if(guess1!=""&&guess2!=""&&guess3!=""&&guess4!=""&&guess5!=""){
			document.getElementById("t1").value=score1;
			$(document).ready(function() {
			$('input[id="next"]').prop('disabled', false);
			$('input[id="guess1"]').prop('disabled', true);
			$('input[id="guess2"]').prop('disabled', true);
			$('input[id="guess3"]').prop('disabled', true);
			$('input[id="guess4"]').prop('disabled', true);
			$('input[id="guess5"]').prop('disabled', true);
			});
			$("#q1").show();
			$("#t1").show();
		}
		
}

function checkquiz2(){
	var score2=0;
	var guess6=document.getElementById("guess6").value;
	var guess7=document.getElementById("guess7").value;
	var guess8=document.getElementById("guess8").value;
	var guess9=document.getElementById("guess9").value;
	var guess10=document.getElementById("guess10").value;
		if(guess6==""||guess7==""||guess8==""||guess9==""||guess10==""){
			alert("Please answer all questions!");
		}
	
		if (guess6!=""&&guess7!=""&&guess8!=""&&guess9!=""&&guess10!=""){
			if(guess6=="Steve Jobs" || guess6=="steve jobs"){
				document.getElementById("remark6").innerHTML="Correct";
				score2++;
			}
			else{
				document.getElementById("remark6").innerHTML="Incorrect";
			}
		}
		
		if (guess6!=""&&guess7!=""&&guess8!=""&&guess9!=""&&guess10!=""){
			if(guess7=="Bill Gates" || guess7=="bill gates"){
				document.getElementById("remark7").innerHTML="Correct";
				score2++;
			}
			else{
				document.getElementById("remark7").innerHTML="Incorrect";
			}
		}
		
		if (guess6!=""&&guess7!=""&&guess8!=""&&guess9!=""&&guess10!=""){
			if(guess8=="Tim Berners-Lee" || guess8=="tim berners-lee" || guess8=="Tim Lee" || guess8=="tim lee"){
				document.getElementById("remark8").innerHTML="Correct";
				score2++;
			}
			else{
				document.getElementById("remark8").innerHTML="Incorrect";
			}
		}
		
		if (guess6!=""&&guess7!=""&&guess8!=""&&guess9!=""&&guess10!=""){
			if(guess9=="Vinton Cerf" || guess9=="Robert Kahn" || guess9=="vinton cerf" || guess9=="robert kahn"){
				document.getElementById("remark9").innerHTML="Correct";
				score2++;
			}
			else{
				document.getElementById("remark9").innerHTML="Incorrect";
			}
		}
		
		if (guess6!=""&&guess7!=""&&guess8!=""&&guess9!=""&&guess10!=""){
			if(guess10=="Vinton Cerf" || guess10=="Robert Kahn" || guess10=="vinton cerf" || guess10=="robert kahn"){
				document.getElementById("remark10").innerHTML="Correct";
				score2++;
			}
			else{
				document.getElementById("remark10").innerHTML="Incorrect";
			}
		}
		
		
		if(guess6!=""&&guess7!=""&&guess8!=""&&guess9!=""&&guess10!=""){
			document.getElementById("t2").value=score2;
			$(document).ready(function() {
			$('input[id="guess6"]').prop('disabled', true);
			$('input[id="guess7"]').prop('disabled', true);
			$('input[id="guess8"]').prop('disabled', true);
			$('input[id="guess9"]').prop('disabled', true);
			$('input[id="guess10"]').prop('disabled', true);
			});
			$("#q2").show();
			$("#t2").show();
			$("#next").hide();
			$("#next1").show();
		}
		
}

function nextquiz(){
		$("#set1").hide();
		$("#set2").show();
		$("#que1").hide();
	    $("#que2").hide();
		$("#que3").hide();
		$("#que4").hide();
		$("#que5").hide();
		$("#submit1").hide();
		$("#submit2").show();
		$("#que6").show();
		$("#que7").show();
		$("#que8").show();
		$("#que9").show();
		$("#score1").hide();
		$("#q1").hide();
		$("#t1").hide();
		$(document).ready(function() {
    $('input[id="next"]').prop('disabled', true);
	});
		}

function compute(){
		$("#set3").show();
		$("#n1").show();
		$("#name").show();
		$("#que1").hide();
	    $("#que2").hide();
		$("#que3").hide();
		$("#que4").hide();
		$("#que5").hide();
		$("#submit1").hide();
		$("#submit2").hide();
		$("#set2").hide();
		$("#que6").hide();
		$("#que7").hide();
		$("#que8").hide();
		$("#que9").hide();
		$("#next1").hide();
		$(document).ready(function() {
		$('input[id="next"]').prop('disabled', true);
		});
		$("#q1").show();
		$("#t1").show();
		$("#q2").show();
		$("#t2").show();
		$("#tot").show();
		$("#t3").show();	
		$("#ave").show();
		$("#t4").show();
		$("#result").show();
		var num1=parseInt(document.f1.t1.value);
		var num2=parseInt(document.f1.t2.value);
		var sum=num1+num2;
		var ave=(num1+num2)/2;
		document.f1.t3.value=String(sum);
		document.f1.t4.value=parseFloat(ave);
}	

function result(){
	var ave=parseInt(document.f1.t4.value);
	var name=document.getElementById("name").value;
	if(name==""){
		alert("Please enter your name!");
	}
	else{
		if(ave>=5){
			alert(name +", You passed the quiz!");
			window.location ='index.html';
		}
		else{
			alert(name +", You failed to pass the quiz. Try again next time!");
			window.location ='index.html';
		}
	}
}