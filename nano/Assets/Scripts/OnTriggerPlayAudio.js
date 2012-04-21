#pragma strict

var target : GameObject;

function Awake () {
  if (!target) {
    target = gameObject;
  }
}

function OnTriggerEnter () {
  target.audio.Play();
}

