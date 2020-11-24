var canvas = document.querySelector('.canvas__win')
		var pen = canvas.getContext('2d')
		var w195 = canvas.width = 300
		var h195 = canvas.height = 300 

		const PI = Math.PI
		const PI2 = Math.PI*2

		function draw(){
			pen.translate(w195/2,h195/2)

			var circle = function(w,r){

				pen.lineWidth = w
				pen.beginPath()
				pen.arc(0,0,r,0,PI2)
				pen.stroke()
			}

			var dash = function(w,r,ang1,ang2,change){
				pen.lineCap = 'butt'
				pen.lineWidth = w
				pen.beginPath()
				pen.arc(0,0,r,ang1*PI/180,ang2*PI/180,change)
				pen.stroke()
			}

			var text = function(size,value){
			pen.font = ''+(size)+'px sanss'
			pen.textBaseline = 'middle'
			pen.textAlign = 'center'

			var num = 0
			num += time
			if(num > value){
				num = 71
			}
			pen.fillText( (num).toFixed(0) +'%',0,0)
			}

			var time = 0
			function draw(){
			time ++;
			let s  =  time/10
			pen.clearRect(-w195/2,-h195/2,w195,h195)

			//外框底色
			var purple = pen.createLinearGradient(0,h195,w195,0)
				purple.addColorStop(.3 , "#59d2dd")
				purple.addColorStop(.6 , "#593efe")
				purple.addColorStop(.75, "#c92eff")

			var thin = pen.createLinearGradient(0,h195/2,w195/2,0)
				thin.addColorStop(0, "#3e5ffe")
				thin.addColorStop(1, "#90d6ff")
			
			pen.save()
				pen.rotate(-s)
				pen.strokeStyle = purple
				dash(15,120,-90,180)
				pen.strokeStyle = thin
				dash(5,120,-90,180,true)
			pen.restore()

			//外框內填色

			//第二層
			var sec = pen.createLinearGradient(0,h195,w195,0)
				sec.addColorStop(.1, "#3e5ffe")
				sec.addColorStop(.8, "#90d6ff")

			pen.save()
				// pen.rotate(-s)
				pen.strokeStyle = sec
				dash(5,105,-50,90,true)
			pen.restore()

			//最內層
			var inside = pen.createLinearGradient(0,h195,w195,0)
				inside.addColorStop(.2, "#90d6ff")
				inside.addColorStop(.6, "#3e5ffe")

			pen.save()
				pen.rotate(-s)
				pen.strokeStyle = inside
				circle(3,98)
			pen.restore()

			//文字
			pen.fillStyle = 'white'
			text(46,71.25)
			}

			// 1510/20 =75.5 為跑的秒數 也就是 %數 多預留0.5秒讓他沒誤差

			draw()

			var ani = setInterval(draw,20)
			setTimeout(function(){
			clearInterval(ani)
			},2000)
		}

		draw()
