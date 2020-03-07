-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: localhost    Database: nhatro
-- ------------------------------------------------------
-- Server version	8.0.19

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `Email` varchar(45) NOT NULL,
  `Pass` varchar(45) NOT NULL,
  `First_name` varchar(45) DEFAULT NULL,
  `Last_name` varchar(45) DEFAULT NULL,
  `Created_at` datetime DEFAULT NULL,
  `Update_at` datetime DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'ledat10111999@gmail.com','ledat123','Đạt','Lê',NULL,NULL),(2,'ledat10111999@gmail.com','ledat123','Đạt','Lê',NULL,NULL),(3,'ledat10111999@gmail.com','ledat123','Đạt','Lê',NULL,NULL),(4,'ledat10111999@gmail.com','ledat123','Đạt','Lê',NULL,NULL),(5,'ledat10111999@gmail.com','ledat123','Đạt','Lê',NULL,NULL),(6,'ledat10111999@gmail.com','ledat1','Đạt','Lê',NULL,NULL),(7,'ledat10111999@gmail.com','ledat123','Đạt','Lê',NULL,NULL),(8,'ledat10111999@gmail.com','','Đạt','Lê',NULL,NULL),(9,'ledat10111999@gmail.com','123456','Đạt','Lê',NULL,NULL),(10,'ledat10111999@gmail.com','123456','Đạt','Lê',NULL,NULL),(11,'ledat10111999@gmail.com','123456','Đạt','Lê',NULL,NULL),(12,'ledat10111999@gmail.com','123456','Đạt','Lê',NULL,NULL),(13,'ledat10111999@gmail.com','','Đạt','Lê',NULL,NULL),(14,'ledat10111999@gmail.com','123456','Đạt','Lê',NULL,NULL),(15,'ledat10111999@gmail.com','123456','Đạt','Lê',NULL,NULL),(16,'ledat10111999@gmail.com','12345','John','Lê',NULL,NULL),(17,'ledat10111999@gmail.com','12345','John','Lê',NULL,NULL),(18,'ledat10111999@gmail.com','12345','John','Lê',NULL,NULL),(19,'ledat10111999@gmail.com','123456','John','Lê',NULL,NULL),(20,'','','','',NULL,NULL),(21,'','','','',NULL,NULL),(22,'ledat10111999@gmail.com','123456','Đạt','Lê',NULL,NULL),(23,'ledat10111999@gmail.com','123456','Đạt','Lê',NULL,NULL),(24,'ledat10111999@gmail.com','123456','Đạt','Lê',NULL,NULL),(25,'ledat10111999@gmail.com','123456','Đạt','Lê',NULL,NULL),(26,'ledat10111999@gmail.com','123456','Đạt','Lê',NULL,NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-03-07 22:50:45
