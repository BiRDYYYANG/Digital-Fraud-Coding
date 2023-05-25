var capture;
var radius = 20;
var imgCache 
	let overAllTexture
let input;
let analyzer;

function setup() {
	createCanvas(windowWidth,windowHeight);
	capture = createCapture(VIDEO);
	capture.size(windowWidth,windowHeight);
	imgCache = createGraphics(windowWidth,windowHeight)
	imgCache.translate(windowWidth,0)
	imgCache.scale(-1,1)
	// println(capture.height,capture.height)
	// background(100);
	rectMode(CENTER)
	capture.hide()
	
	
	overAllTexture=createGraphics(width,height)
	overAllTexture.loadPixels()
	// noStroke()
	for(var i=0;i<width+50;i++){
		for(var o=0;o<height+50;o++){
			overAllTexture.set(i,o,color(100,noise(i/3,o/3,i*o/50)*random([0,50,100])))
		}
	}
	overAllTexture.updatePixels()
	
	input = new p5.AudioIn()
  input.start()
}

function windowResized(){
	resizeCanvas(windowWidth,windowHeight)
}

let mode = 1
function draw() {
	// loadImage(capture)
	background(0,5);
	imgCache.image(capture,0,0,windowWidth,windowHeight)
	
	push()
		// noStroke()
		scale(1)
		radius = max(mouseX,0)/10+20
		for(var y=0;y<imgCache.height;y+=radius){
			for(var x=0;x<imgCache.width;x+=radius){
				var pixel = imgCache.get(x,y)
				var r = pixel[0]
				var g = pixel[1]
				var b = pixel[2]

				let bk = (r+g+b)/3
				let bkI = 10-int(bk/25.5)
				
				if (mode==1){
					
					// let txt = "人人係任實交友連真關網信結"
					// let txt = "美帥雙子A型活潑踏青天龍國"
					let txt = "白天龍國富美帥空姐高薪"
					fill(r+40,g+40,b+40)
					noStroke()
					textSize(radius)
					textStyle(BOLD)
					text(txt[bkI],x,y)
					
				}else if (mode==2){
					// let txt = "人人詐友陌生虛擬假欺關網騙"
					let txt = "陷病急需炫密投資私照匯款"
					fill(r+40,g+70,b+100,20)
					noStroke()
					textSize(radius)
					textStyle(BOLD)
					text(txt[bkI],x,y)
					
				}else if (mode==3){
					let volume = input.getLevel();
					let speaking = volume>0.08
					angleMode(DEGREES);
					translate(width/2,height/2)
				  fill('#AF4365')
					noStroke()
					background(0,0.5)
						if (speaking){
							for(var i=0;i<360;i+=1){
								rotate(1)
								let r = frameCount/20 + noise(i/5,frameCount/20,mouseX)*100
								// let r = frameCount + noise(i/5,frameCount/20,mouseX)*100
								ellipse(r,0,mouseY/100,mouseX/100)
						}
					}					       
				
				}else if (mode==4){
					// fill('#45A0FA')
					fill(('#0297F0') )
					noStroke()
					// stroke ('#0297F0') 
					// strokeWeight(2)
					ellipse(x,y+mouseY/40,radius/6+b/10,radius/6+b/15+mouseY/30)
					
					// fill(random(200,255),random(10,50),random(200,220))
				}else if (mode==5){
					// push()
					// 	translate(x,y)
					// 	rotate(b/20)
					// let txt = "一秀捨笑結鬧尬開場買糗驗戲"
					let txt = "重新緒覺溫感傷激情澱面對"
					colorMode(HSB)
					fill(r,mouseY/10,90)
					noStroke()
					textSize(radius)
					textStyle(BOLD)
					text(txt[bkI],x,y)
						// strokeWeight(3)
						// noFill()
					// 	rect(0,0,radius/2.5+r/20,radius/2.5+r/20)
					// 	fill(0)
					// 	ellipse(0,0,5)
					// pop()
					
					// fill(random(200,255),random(10,50),random(200,220))
				}else if (mode==6){
					// fill(random(200,255),random(210,255),random(210,255))
					rect(x,y,radius/3+b/5,radius/3+b/30)
					noStroke()
					// fill(random(200,255),random(10,50),random(200,220))
				}
				// fill(0)
				// rect(x,y,radius/10+b/10-10,radius/10+b/10-20)
			}	
		}
	pop()
	
	push()
		blendMode(MULTIPLY)
		image(overAllTexture,0,0)
	pop()
	
	
	// ellipse(mouseX, mouseY, 20, 20);
}

function keyPressed(){
	if (key=="1"){
		mode=1
	}
	if (key=="2"){
		mode = 2
	}
	if (key=="3"){
		mode = 3
	}
	if (key=="4"){
		mode = 4
	}
	if (key=="5"){
		mode = 5
	}
	if (key=="6"){
		mode = 6
	}
}

// save jpg
let lapse = 0;    // mouse timer
function mousePressed(){
	mode++
	if (mode>6){
		mode=1
	}
	// if (millis() - lapse > 400){
	// save("img_" + month() + '-' + day() + '_' + hour() + '-' + minute() + '-' + second() + ".jpg");
	// lapse = millis();
	// } 
	
}