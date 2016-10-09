<?php
    header("Context-Type:text/html;charset=utf-8");
	$data = $_REQUEST["flag"];
	$_mysqli = new mysqli('localhost','root','masongzhi','masongzhi');
	$_mysqli->set_charset("utf-8");
	$_sql = "SELECT * FROM newblog";
	$_result = $_mysqli->query($_sql);
	
	class Stu{
		public $id;
		public $article;
		public $timeline;
	}
	
	while($row = mysqli_fetch_assoc($_result))
		{
			$s = new Stu();
			$s->id = $row['id'];
			$s->article = $row['article'];
			$s->timeline = $row['timeline'];
			$arr[] = $s;
		}
	$echo = json_encode(array("blog"=>$arr));
	
	echo $echo;
	$_mysqli->close();
?>