<?php
$itemsChild=\DB::table('pointsChild')->get();
$datanum=$itemsChild->count();
$itemData=array();

for($num=0;$num<$datanum;$num++) {
  $tmp_array=array($itemsChild[$num]->id, $itemsChild[$num]->han, $itemsChild[$num]->fu, $itemsChild[$num]->ron, $itemsChild[$num]->tsumoChild, $itemsChild[$num]->tsumoParent);
  array_push($itemData,$tmp_array);
}
$json_Child = json_encode($itemData);

$itemsParent=\DB::table('pointsParent')->get();
$datanum=$itemsParent->count();
$itemData=array();

for($num=0;$num<$datanum;$num++) {
  $tmp_array=array($itemsParent[$num]->id, $itemsParent[$num]->han, $itemsParent[$num]->fu, $itemsParent[$num]->ron, $itemsParent[$num]->tsumo);
  array_push($itemData,$tmp_array);
}
$json_Parent = json_encode($itemData);
?>
