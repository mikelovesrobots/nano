#pragma strict

var target : Collider;
var startDisabled : boolean = true;

function Awake () {
  if (startDisabled) {
    target.enabled = false;
  }
}

function OnTriggerEnter () {
  target.enabled = true;
}

