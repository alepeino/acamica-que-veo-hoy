CREATE TABLE pelicula (
    id INT NOT NULL AUTO_INCREMENT,
    titulo VARCHAR(100),
    anio INT(5),
    duracion INT(5),
    director VARCHAR(400),
    fecha_lanzamiento DATE,
    puntuacion INT(2),
    poster VARCHAR(300),
    trama TEXT,
    PRIMARY KEY(id)
)

CREATE TABLE genero (
    id INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(30),
    PRIMARY KEY(id)
)

ALTER TABLE pelicula ADD genero_id INT;

ALTER TABLE pelicula ADD FOREIGN KEY(genero_id) REFERENCES genero(id);
   