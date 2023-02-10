<?php
require_once 'login.php';
$conn = new mysqli($hostname, $database, $username, $password);
if($conn->connect_error) mysql_fatal_error()
// if($conn->connect_error) die("Fatal Error");

function mysql_fatal_error(){
    echo <<< _END
    К сожалению, завершить запрашиваемую задачу
    не представилось возможным. Было получено следующее
    сообщение об ошибке:
        <p>Fatal Error</p>
    Пожалуйста, нажмите кнопку возврата вашего браузера и 
    повторите попытку. Если прорблемы не прекратятся, пожалуйста, 
    <a href="mailto:test@mail.ru">сообщите о них нашему администратору</a>
    Спасибо.
    _END;
}


$query = "SELECT * FROM site";
$result = $conn->query($query);
if(!$result) die("Fatal Error");

$rows = $result->num_rows;

for($i = 0; $i < $rows; ++$i){
    $result->data_seek($i);
    echo 'something: ' .htmlspecialchars($result->fetch_assoc()['filter']) .'<br>';
}

for($j = 0; $j < $rows; ++$j){
    $row = $ressult->fetch_array(MYSQLI_ASSOC);
    echo 'something: ' .htmlspecialchars($row['filter']) .'<br>';
}
$result->close();
$conn->close();

?>