USE AlumnosUP;

DELIMITER $$
USE `AlumnosUP`$$


CREATE PROCEDURE `AlumnosAddOrEdit2` (
  IN _id INT,
  IN _nombre VARCHAR(45),
  IN _matricula INT
)
BEGIN 
  IF _id = 0 THEN
    INSERT INTO alumnos (nombre, matricula)
    VALUES (nombre, matricula);

    SET _id = LAST_INSERT_ID();
  ELSE
    UPDATE alumnos
    SET
    nombre = _nombre,
    matricula = _matricula
    WHERE id = _id;
  END IF;

  SELECT _id AS 'id';
END