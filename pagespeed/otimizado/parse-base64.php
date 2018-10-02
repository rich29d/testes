<?php
/**
 * Created by PhpStorm.
 * User: Rich29d
 * Date: 10/10/2017
 * Time: 09:29
 */

function parseBase64($path = ''){
    $type = pathinfo($path, PATHINFO_EXTENSION);
    $data = file_get_contents($path);
    return 'data:image/' . $type . ';base64,' . base64_encode($data);
}

