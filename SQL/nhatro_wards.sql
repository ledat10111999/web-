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
-- Table structure for table `wards`
--

DROP TABLE IF EXISTS `wards`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `wards` (
  `maPhuong` int NOT NULL,
  `tenPhuong` varchar(45) NOT NULL,
  `maQuan` int DEFAULT NULL,
  PRIMARY KEY (`maPhuong`),
  UNIQUE KEY `maPhuong_UNIQUE` (`maPhuong`),
  KEY `maQuan` (`maQuan`),
  CONSTRAINT `wards_ibfk_1` FOREIGN KEY (`maQuan`) REFERENCES `districts` (`maQuan`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `wards`
--

LOCK TABLES `wards` WRITE;
/*!40000 ALTER TABLE `wards` DISABLE KEYS */;
INSERT INTO `wards` VALUES (590101,'Phường Bến Nghé',5901),(590102,'Phường Bến Thành',5901),(590103,'Phường Cầu Kho',5901),(590104,'Phường Cầu Ông Cao Lãnh',5901),(590105,'Phường Cô Giang',5901),(590106,'Phường Đa Cao ',5901),(590107,'Phường Nguyễn Cư Trinh',5901),(590108,'Phường Thái Bình',5901),(590109,'Phường Phạm Ngũ Lão',5901),(590110,'Phường Tân Định',5901),(590201,'Phường An Khánh',5902),(590202,'Phường An Lợi Đông',5902),(590203,'Phường An Phú',5902),(590204,'Phường Bình An',5902),(590205,'PhườngBình Khánh',5902),(590206,'Phường Bình Trưng Đông',5902),(590207,'Phường Bình Trưng Tây',5902),(590208,'Phường Cát Lái',5902),(590209,'Phường An Thạnh Mỹ Lợi',5902),(590210,'Phường Thảo Điền',5902),(590211,'Phường Thủ Thiêm',5902);
/*!40000 ALTER TABLE `wards` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-03-31 22:28:35
