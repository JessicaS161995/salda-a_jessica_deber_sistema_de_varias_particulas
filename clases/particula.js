class SistemaParticulas {
  constructor() {
    this.particulas = [];

    // Colores verde, naranja y amarillo para el sistema de partículas
    let colores = [
      color(0, 255, 0),   // Verde
      color(255, 165, 0),  // Naranja
      color(255, 255, 0)   // Amarillo
    ];
    
    this.color = random(colores);

    // Crear partículas en el sistema
    for (let i = 0; i < 100; i++) {
      let particula = new Particula(random(width), random(height), this.color);
      this.particulas.push(particula);
    }
  }

  update() {
    for (let i = this.particulas.length - 1; i >= 0; i--) {
      this.particulas[i].update();
      if (!this.particulas[i].isAlive) {
        this.particulas.splice(i, 1);
      }
    }
  }

  display() {
    for (let particula of this.particulas) {
      particula.display();
    }
  }
}

class Particula {
  constructor(_x, _y, sistemaColor) {
    this.pos = createVector(_x, _y);
    this.lifespan = Math.ceil(random(10, 100));
    this.isAlive = true;
    this.length = random(5, 15); // Longitud aleatoria
    this.width = 3; // Ancho fijo para simular la cola de la cometa

    // Usar el color del sistema de partículas
    this.color = sistemaColor;

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
    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.theta); // Orientar la partícula en la dirección del movimiento

    fill(this.color);
    stroke(0); // Borde negro
    rect(0, 0, this.length, this.width);
    
    pop();
  }
}
