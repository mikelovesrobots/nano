#pragma strict

var target : TextDisplayer;
var delay : float = 4.0;

function OnTriggerEnter () {
  target.display = true;
  Destroy(target, delay);
}
