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
-- Table structure for table `districts`
--

DROP TABLE IF EXISTS `districts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `districts` (
  `maQuan` int NOT NULL,
  `tenQuan` varchar(45) NOT NULL,
  `maTP` int DEFAULT NULL,
  PRIMARY KEY (`maQuan`),
  UNIQUE KEY `maQuan_UNIQUE` (`maQuan`),
  KEY `maTP` (`maTP`),
  CONSTRAINT `districts_ibfk_1` FOREIGN KEY (`maTP`) REFERENCES `cities` (`maTP`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `districts`
--

LOCK TABLES `districts` WRITE;
/*!40000 ALTER TABLE `districts` DISABLE KEYS */;
INSERT INTO `districts` VALUES (5901,'Quận 1',59),(5902,'Quận 2',59),(5903,'Quận 3',59),(5904,'Quận 4',59),(5905,'Quận 5',59),(5906,'Quận 6',59),(5907,'Quận 7',59),(5908,'Quận 8',59),(5909,'Quận 9',59),(5910,'Quận 10',59),(5911,'Quận 11',59),(5912,'Quận 12',59),(5913,'Quận Thủ Đức',59),(5914,'Quận Gò Vấp',59),(5915,'Quận Bình Thạnh',59),(5916,'Quận Tân Bình',59),(5917,'Quận Tân Phú',59),(5918,'Quận Phú Nhuận',59),(5919,'Quận Bình Tân',59),(5920,'Huyện Củ Chi',59),(5921,'Huyện Hóc Môn',59),(5922,'Huyện Bình Chánh',59),(5923,'Huyện Nhà Bè',59);
/*!40000 ALTER TABLE `districts` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-03-31 22:28:36
