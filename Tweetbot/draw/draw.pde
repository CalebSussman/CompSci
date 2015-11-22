void setup() {
  size(640, 360);
  for (int i = 0; i < 2; i++) {
    float x = random(width);
    float y = random(height);
    float r = random(50, 255);
    float g = random(50, 255);
    float b = random(50, 225);
    noStroke();
    fill(r, g, b);
    ellipse(x, y, 16, 16);
  }
  save("output.png");
  exit();
}