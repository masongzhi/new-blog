<?php
	header("Access-Control-Allow-Origin: http://localhost:8080");
    header("Context-Type:text/html;charset=utf-8");
	$data = $_REQUEST["html"];
	$_mysqli = new mysqli('localhost','root','masongzhi','masongzhi');
	$_mysqli->set_charset("utf-8");
	$_sql = "INSERT INTO newblog(article) VALUES('$data')";
	if (!$_mysqli->query($_sql))
	{
		// $echo 'error:' .$_mysqli->error;
	}
	else{
		$echo = json_encode(array("result"=>"good"));
	}
	
	echo $echo;
	$_mysqli->close();
?>