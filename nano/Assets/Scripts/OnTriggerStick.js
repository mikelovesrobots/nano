#pragma strict

public var platform: Transform;
private var target: Transform;
private var lastPosition : Vector3;

function Update() {
  if (target) {
    var positionDelta = platform.position - lastPosition;
    target.position += positionDelta;
  }
  lastPosition = platform.position;
}

function OnTriggerEnter(other: Collider) {
  target = other.gameObject.transform;
}

function OnTriggerExit(other: Collider) {
  target = null;
}
