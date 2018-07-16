<?php

$test = [
  "test"   => 111,
  "test2" => 222
];

header("Content-type: application/json; charset=utf-8");

echo json_encode($test);