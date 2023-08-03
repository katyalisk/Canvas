let c = document.getElementById("firstCanvas");
let ctx = c.getContext("2d");

ctx.strokeStyle = "rgba(255, 0, 0, 0.3)";

ctx.moveTo(0, 0);
ctx.lineTo(200, 100);
ctx.stroke();

ctx.fillStyle = "rgb(200, 0, 0)";
ctx.fillRect(10, 10, 50, 50);

ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
ctx.fillRect(30, 30, 50, 50);

ctx.beginPath();
ctx.moveTo(75, 50);
ctx.lineTo(100, 75);
ctx.lineTo(100, 25);
ctx.fill();

// ----------------- //

let cnv = document.getElementById("secondCanvas");
let nctx = cnv.getContext("2d");

nctx.fillStyle = "#001205";
nctx.fillRect(0, 0, cnv.width, cnv.height);
nctx.strokeStyle = "rgba(50, 168, 82, 0.75)";

for (let i = 0; i < cnv.height; i += 10) {
	for (let j = 0; j < cnv.width; j += 10) {
		nctx.beginPath();
		nctx.moveTo(j, i);
		nctx.lineTo(j, i + 10);
		nctx.stroke();

		nctx.beginPath();
		nctx.moveTo(j, i);
		nctx.lineTo(j + 10, i);
		nctx.stroke();
	};
};

nctx.fillStyle = "#87c73a";

const tHandler = () => {
	let x = Math.random() * cnv.width;
	let y = Math.random() * cnv.height;

	nctx.beginPath();
	nctx.arc(x, y, 3, 0, 2 * Math.PI);
	nctx.fill();
};

let timer = setInterval(tHandler, 100);