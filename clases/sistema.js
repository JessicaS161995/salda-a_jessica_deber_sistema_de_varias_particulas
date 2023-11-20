class Sistema {
	constructor() {
		this.pos = createVector(width / 2, height / 2);
		this.ps = [];
		this.t = random(100);
		this.color = color(random(100, 255), random(255), 0);
	}
	update() {
		// 0. Aumentar el tiempo
		this.t += 0.01;

		// 1. Actualización de posición
		this.pos.x = map(noise(this.t), 0, 1, 0, width);
		this.pos.y = map(noise(this.t + 10), 0, 1, 0, height);

		// 2. Agragamos partículas
		this.p = new Particula(this.pos.x, this.pos.y, this.color);
		this.ps.push(this.p);

		// 3. Verificar cuáles están muertas y llamar a los macrófagos
		for (let i = 0; i < this.ps.length; i++) {
			if (!this.ps[i].isAlive) {
				this.ps.splice(i, 1);
			}
		}
	}
	display() {
		for (let i = 0; i < this.ps.length; i++) {
			this.ps[i].update();
			this.ps[i].display();
		}
	}
}