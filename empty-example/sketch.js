let lines = [];     //array to hold all elements.
let i = j = 0;  
let smallest;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Assigning random height values as elements to be sorted for the number of width pixels.
  for(n = 0; n < width; n++) {
    lines[n] = parseFloat(random(height));
  }
  
  // INSERTION SORT ALGORITHM WITHOUT ANIMATION

  // for(i = 1; i < lines.length; i++) {
  //   console.log(i);
  //   let key = lines[i];
  //   let j = i - 1;
  //   while(j >=0 && lines[j] > key) {
  //     lines[j + 1] = lines[j];
  //     j = j - 1;
  //   }
  //   lines[j + 1] = key;
  // }
}

function draw() {
  background(0);
  stroke(255, 100, 255, 200);
  
  // INSERTION SORT WITH VISUALIZATION OF EACH FRAME.
  let key = lines[i];
  let j = i - 1;
  while(j >=0 && lines[j] > key) {
    lines[j + 1] = lines[j];
    j = j - 1;
  }
  lines[j + 1] = key;
  i = i + 1;
  if(i >= lines.length) {
    i = 0;
    noLoop();
  }

  // CODE FOR DISPLAYING THE LINES.
  for(let n = 0; n < lines.length; n++) {
    line(n, height, n, height - lines[n]);
  }
}
