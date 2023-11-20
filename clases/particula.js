class Particula {
	constructor(_x, _y, _color) {
		this.pos = createVector(_x, _y);
		this.lifespan = Math.ceil(random(10, 100));
		this.isAlive = true;
		this.side = Math.ceil(random(3, 15));
		this.color = _color;
		this.theta = random(TWO_PI); // Ángulo inicial aleatorio
		this.radius = random(1, 5); // Radio aleatorio
	}

	update() {
		// Movimiento en espiral
		let x = this.radius * cos(this.theta);
		let y = this.radius * sin(this.theta);

		this.pos.add(createVector(x, y));

		// Incrementamos el ángulo y ajustamos el radio para obtener una espiral
		this.theta += 0.05;
		this.radius += 0.02;

		this.lifespan -= 1;

		if (this.lifespan <= 0) {
			this.isAlive = false;
		}
    }
    
    display() {
		fill(this.color);
		stroke(255);
		square(this.pos.x, this.pos.y, this.side);
	}
}