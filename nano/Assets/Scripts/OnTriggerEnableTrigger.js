#pragma strict

var target : Collider;
var startDisabled : boolean = true;
var delay: float = 0.0;

function Awake () {
  if (startDisabled) {
    target.enabled = false;
  }
}

function OnTriggerEnter () {
  yield WaitForSeconds(delay);
  target.enabled = true;
}

