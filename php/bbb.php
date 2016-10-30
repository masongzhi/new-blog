<?php
	
    header("Context-Type:text/html;charset=utf-8");
	$data = $_REQUEST["flag"];
	if($data == 1){
		$currentPage = $_REQUEST["currentPage"];
		$_mysqli = new mysqli('localhost','root','15626202276mzz','masongzhi');
		$_mysqli->set_charset("utf-8");
		$_sql = "SELECT * FROM newblog order by id desc";
		
		$_result = $_mysqli->query($_sql);
		$_number = $_mysqli->query("SELECT COUNT(*) FROM newblog");
		$row2 = mysqli_fetch_assoc($_number);
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
		$echo = json_encode(array("blog"=>$arr,"pageNumber"=>$row2['COUNT(*)']));
		
		
		
		$_mysqli->close();
	}
	else if($data == -1){
		$article_id = $_REQUEST["article_id"];
		$_mysqli = new mysqli('localhost','root','15626202276mzz','masongzhi');
		$_sql = "SELECT * FROM newblog where id=". $article_id;
		$_result = $_mysqli->query($_sql);
		
		class Stu{
			public $id;
			public $article;
			public $timeline;
		}
		$row = mysqli_fetch_assoc($_result);
		$s = new Stu();
		$s->id = $row['id'];
		$s->article = $row['article'];
		$s->timeline = $row['timeline'];
		$arr[] = $s;
		
		$echo = json_encode(array("article"=>$arr));
		
		$_mysqli->close();
	}
	echo $echo;
	
?>