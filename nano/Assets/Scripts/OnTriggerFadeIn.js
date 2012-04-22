#pragma strict

public var target:FadeIn;
public var delay:float = 10.0;

function OnTriggerEnter() {
  yield WaitForSeconds(delay);
  target.Fade();
}
