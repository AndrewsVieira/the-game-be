CREATE DATABASE  IF NOT EXISTS `the_game`;
USE `the_game`;

DROP TABLE IF EXISTS `answer`;
DROP TABLE IF EXISTS `alternative`;
DROP TABLE IF EXISTS `question`;
DROP TABLE IF EXISTS `ranking`;
DROP TABLE IF EXISTS `user`;


CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(60) NOT NULL,
  `user` varchar(20) DEFAULT NULL,
  `password` varchar(200) DEFAULT NULL,
  `token` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `question` (
  `id` int NOT NULL AUTO_INCREMENT,
  `question` varchar(200) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `alternative` (
  `id` int NOT NULL AUTO_INCREMENT,
  `alternative` varchar(200) NOT NULL,
  `is_right` boolean NOT NULL,
  `id_question` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `fk_question_idx` (`id_question`),
  CONSTRAINT `fk_question` FOREIGN KEY (`id_question`) REFERENCES `question` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `answer` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_alternative` int NOT NULL,
  `id_user` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `fk_user_idx` (`id_user`),
  KEY `fk_alternative_idx` (`id_alternative`),
  CONSTRAINT `fk_user_answer` FOREIGN KEY (`id_user`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_alternative` FOREIGN KEY (`id_alternative`) REFERENCES `alternative` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `ranking` (
  `id` int NOT NULL AUTO_INCREMENT,
  `points` int NOT NULL,
  `id_user` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `fk_user_idx` (`id_user`),
  CONSTRAINT `fk_user` FOREIGN KEY (`id_user`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Sempre no fim do arquivo;
DROP USER IF EXISTS 'pi3fase';
CREATE USER 'pi3fase'@'%' IDENTIFIED BY 'pi3fase';
GRANT SELECT, INSERT, UPDATE, DELETE ON the_game.* TO 'pi3fase'@'%';
