
DROP DATABASE IF EXISTS sampledb;
CREATE DATABASE sampledb;

\c sampledb

DROP TABLE IF EXISTS sampledbtable;
CREATE TABLE sampledbtable(
  id SERIAL,
  titulo VARCHAR(40) NOT NULL,
  mensaje VARCHAR(100) NOT NULL
);

ALTER TABLE sampledbtable
  ADD CONSTRAINT id_pk PRIMARY KEY (id);
