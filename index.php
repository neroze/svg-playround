<!DOCTYPE html>
<html>
<head>
	<title></title>
  <script src="jquery-3.1.0.min.js"></script>
  <link rel="stylesheet" href="css/main.css">
	<script src="svg.min.js"></script>
	<script src="app.js"></script>
</head>
<body >
<div id="drawing">

</div>
	<div id="hidden_files" style="display:none;">
		<div id="camp"> <?php readfile("camp.svg"); ?> </div>
		<div id="tree"> <?php readfile("tree.svg"); ?> </div>
		<div id="tree2"> <?php readfile("tree2.svg"); ?> </div>
		<div id="fishtail"> <?php readfile("fishtail.svg"); ?> </div>
	</div>
</body>
</html>