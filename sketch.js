function setup() {
  // ウィンドウ全体にキャンバスを作成
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // 背景を薄い灰色（220）で塗りつぶす
  background(220);
  
  // マウスの位置に円を描く
  ellipse(mouseX, mouseY, 50, 50);
}