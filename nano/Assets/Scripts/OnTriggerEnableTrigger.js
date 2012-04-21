#pragma strict

var target : Collider;
var startDisabled : boolean = true;

function Awake () {
  if (startDisabled) {
    target.isTrigger = false;
  }
}

function OnTriggerEnter () {
  target.isTrigger = true;
}

