#pragma strict

var target : GameObject;
var allowRepeats : boolean = false;
private var hasPlayed : boolean = false;
function Awake () {
  if (!target) {
    target = gameObject;
  }
}

function OnTriggerEnter () {
  if (!hasPlayed || allowRepeats) {
    target.audio.Play();
    hasPlayed = true;

    var subtitle:TextDisplayer =  target.GetComponentInChildren(TextDisplayer);
    if (subtitle) {
      subtitle.Display();
    }
  }
}

