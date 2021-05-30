CREATE DATABASE  IF NOT EXISTS `the_game`;
USE `the_game`;

DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(60) NOT NULL,
  `user` varchar(20) DEFAULT NULL,
  `password` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Sempre no fim do arquivo;
DROP USER IF EXISTS 'pi3fase';
CREATE USER 'pi3fase'@'%' IDENTIFIED BY 'pi3fase';
GRANT SELECT, INSERT, UPDATE, DELETE ON the_game.* TO 'pi3fase'@'%';
