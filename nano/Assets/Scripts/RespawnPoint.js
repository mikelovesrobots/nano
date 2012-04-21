#pragma strict

static var lastPoint : Transform;

function OnTriggerEnter () {
  lastPoint = transform;
}
