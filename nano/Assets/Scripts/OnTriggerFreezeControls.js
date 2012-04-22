#pragma strict

public var target: ThirdPersonController;

function OnTriggerEnter() {
  target.isControllable = false;
}
