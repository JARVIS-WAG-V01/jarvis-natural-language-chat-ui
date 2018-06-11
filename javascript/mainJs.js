<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="/css/maincss.css">
    <link href='https://fonts.googleapis.com/css?family=Advent Pro' rel='stylesheet'>
</head>
<body>

<div class="title">
  <h2>J.A.R.V.I.S</h2>
  <h3>Just a Rather Very Intelligent System</h3>
</div>

<div id="mySidenav" class="sidenav">
  <a href="#" id="health" class="flip1" onmouseover="mouseOver1()" >&#9654;Health Check</a>
  <a href="#" id="check" class="flip2" onmouseover="mouseOver2()" >&#9654;Trouble shooting</a>
  <a href="#" id="plan" class="flip3" onmouseover="mouseOver3()" >&#9654;Deploy Plan</a>
  <a href="#" id="verify" class="flip4" onmouseover="mouseOver4()" >&#9654;Predict failure</a>
</div>

<div id="nav" class="nav">
  <h id="wsrr">
	<h1><li>WSRR</h1>
	<a href="www.google.com"><li>Dev</a>
	<a href="www.google.com"><li>Test</a>
	<a href="www.google.com"><li>Uat</a>
	<a href="www.google.com"><li>Prod</a>
</h>
</div>
<div id="nav" class="nav">
  <h id="was">
	<h1><li>WAS</h1>
	<a href="www.google.com"><li>Dev</a>
	<a href="www.google.com"><li>Test</a>
	<a href="www.google.com"><li>Uat</a>
	<a href="www.google.com"><li>Prod</a>
</h>
</div>

<div class="description">
        JARVIS a chat assistant to reduce the efforts taken by the team to do routine activities, also it will monitor and perdict failure in system.</div>
</div>  
 
<div id="panel1">
  <p><li>Health check <br>Eg., Perform Health check, Do Health check</p>
  <p><li>Provide Server Name <br> Eg., DONEMQ1, TONEMB1</p>
  <p><li>JARVIS will provide the brief health check report.<p>
</div>

<div id="panel2">
  <p><li>TroubleShooting <br> Eg., Not able to reach MQ, DESB_BR1 down</p>
  <p><li>Provide the server name</p>
  <p><li>Provide the issue statement</p>
  <p><li>JARVIS will provide the resolution for the incident.</p>
</div>

<div id="panel3">
  <p><li>Deployment Plan <br> Eg., Prepare Deployment plan, Prepare info needed</p>
  <p><li>Provide the server name  <br> Eg., DONEMQ1, TONEMB1</p>
  <p><li>Provide the change type <br> Eg., Validation, Change in server </p>
  <p><li>JARVIS will provide the Deployment plan to download, review</p>
  <p><li>Once verified mail will be sent for approval.</p>
</div>

<div id="panel4">
  <p><li>Check with JARVIS for any issue in environment.</p>
  <p><li>Eg., Do you feel anythink wrong</p>
  <p><li>JARVIS will Predict with the data and provide the abnormolities observed in environment</p>
</div>

  <div class="frame" id="frame">
   <div class="panel panel-primary" style="z-index: 1000">
   <div id="chat-panel" class="panel-heading" ><small><i>Chat here with</i></small><br><b>J.A.R.V.I.S</b>
   </div>
  </div>
    <div class="innerframe" style="display:none">
   <ul id="messages"></ul>
    <div id="message-box">
     <div class="msj-rta macro" style="margin:auto">                        
      <div class="text text-l" >
       <input class="mytext" placeholder="Type a message"/>
      </div> 
     </div>
    </div>
   </div>
  </div>


<div id="include">
	<object type="text/html" id="myData" width="850px" height="650px" style="border:none">
</div>



</body>
<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script type="text/javascript" src="javascript/mainJs.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
</html> 
