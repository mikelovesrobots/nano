#pragma strict

var target : GameObject;
var delay : float = 4.0;

function OnTriggerEnter () {
  Destroy(target, delay);
}
