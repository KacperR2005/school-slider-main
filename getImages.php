<?php
$folder = './zdjecia/';

$files = scandir($folder);
$images = array();

foreach($files as $file) {
    if($file === '.' || $file === '..') {continue;}

    if(preg_match('/.png$|.jpg$|.jpeg$/', $file)) { // Dodaj więcej formatów, jeśli to konieczne
        $images[] = $folder . $file;
    }
}

echo json_encode($images);
?>
