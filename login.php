<?php
session_start();
$username = "";
$password = "";
$host='localhost';
$dbname='project';
$dbuser='root';
$dbpassword='';
$dbcon1 = mysqli_connect($host, $dbuser, $dbpassword, $dbname, "3308");
if($dbcon1){
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $username=$_POST['username'];
        $password=$_POST['password'];
        //檢查使用者是否存在
        $sql="SELECT username,password FROM user WHERE username='$username'";
        $result=mysqli_query($dbcon1, $sql);
        $nums=mysqli_num_rows($result);
        if($nums==0){
            echo "<script type='text/javascript'>alert('使用者不存在');</script>";
            echo "<script>history.back(-1)</script>";
        }else{
            $row=mysqli_fetch_row($result);
            if(hash_equals($row[1],$password)){
                echo "<script type='text/javascript'>alert('登入成功');</script>";
                echo "<script type='text/javascript'>window.location.href='index.html';</script>";
            }else{
                echo "<script type='text/javascript'>alert('密碼錯誤');</script>";
                echo "<script>history.back(-1)</script>";
            }
        }
    
    }
}
mysqli_close($dbcon1);
?>