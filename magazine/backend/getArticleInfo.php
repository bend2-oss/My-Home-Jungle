<?php
require_once 'login.php';
$conn = new mysqli($db_host, $db_username, $db_password, $db_name);
// if($conn->connect_error) mysql_fatal_error()
if($conn->connect_error) die("Fatal Error");

// function mysql_fatal_error(){
//     echo <<< _END
//     К сожалению, завершить запрашиваемую задачу
//     не представилось возможным. Было получено следующее
//     сообщение об ошибке:
//         <p>Fatal Error</p>
//     Пожалуйста, нажмите кнопку возврата вашего браузера и 
//     повторите попытку. Если прорблемы не прекратятся, пожалуйста, 
//     <a href="mailto:test@mail.ru">сообщите о них нашему администратору</a>
//     Спасибо.
//     _END;
// }


$query = "SELECT * FROM `article`";
$array = [];
$result = $conn->query($query);

if($result){

    while ($row = $result->fetch_row()) {
        $array[] = $row;
    }

    // Формируем массив для JSON ответа
    $result = array(
      'info' => $array,
      'code' => 'ok'
    ); 

    // Переводим массив в JSON
    echo json_encode($result); 
    
  }else{

    $result = array(
      'code' => 'error',
      'info' => mysqli_error($conn)
    ); 
    echo json_encode($result); 
    
  }
?>