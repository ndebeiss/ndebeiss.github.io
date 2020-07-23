var position = {
  y: Math.round(window.innerHeight / 3),
  x: Math.round(window.innerWidth / 3),
  angle: 0,
  lc: true,
};

window.refresh = function () {
  document
    .getElementById("turtle_path")
    .setAttribute(
      "d",
      "M" +
        (position.x + 10 * Math.cos(position.angle - Math.PI / 2)) +
        "," +
        (position.y + 10 * Math.sin(position.angle - Math.PI / 2)) +
        " L " +
        (position.x + 10 * Math.cos(position.angle + Math.PI / 2)) +
        "," +
        (position.y + 10 * Math.sin(position.angle + Math.PI / 2)) +
        " L " +
        (position.x + 20 * Math.cos(position.angle)) +
        "," +
        (position.y + 20 * Math.sin(position.angle))
    );
  document.getElementById("path").innerHTML = document.getElementById("draw").getAttribute("d");
};
window.write = function () {
  var oldd = document.getElementById("draw").getAttribute("d");
  if (position.lc) {
    document
      .getElementById("draw")
      .setAttribute("d", oldd + "M" + position.x + "," + position.y);
  } else {    
    document
      .getElementById("draw")
      .setAttribute("d", oldd + "L" + position.x + "," + position.y);
  }
};
window.bc = window.down = function () {
  position.lc = false;
};
window.lc = window.up = function () {
  position.lc = true;
};
window.av = window.forward = function (distance) {
  position.x += Math.round(distance * Math.cos(position.angle));
  position.y += Math.round(distance * Math.sin(position.angle));
  write();
  refresh();
};
window.re = window.backward = function (distance) {
  position.x -= Math.round(distance * Math.cos(position.angle));
  position.y -= Math.round(distance * Math.sin(position.angle));
  write();
  refresh();
};
window.td = window.right = function (degre) {
  position.angle += (degre * Math.PI) / 180;
  refresh();
};
window.tg = window.left = function (degre) {
  position.angle -= (degre * Math.PI) / 180;
  refresh();
};

window.vonKoch = function (niveau) {
  var taille = 10;
  if (niveau == 0) {
    forward(taille);
  } else {
    vonKoch(niveau - 1);
    left(60);
    vonKoch(niveau - 1);
    right(120);
    vonKoch(niveau - 1);
    left(60);
    vonKoch(niveau - 1);
  }
};

window.onload = function() {
  write();
  refresh();
}
