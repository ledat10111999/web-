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
-- Table structure for table `cities`
--

DROP TABLE IF EXISTS `cities`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cities` (
  `maTP` int NOT NULL,
  `tenTp` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`maTP`),
  UNIQUE KEY `maTP_UNIQUE` (`maTP`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cities`
--

LOCK TABLES `cities` WRITE;
/*!40000 ALTER TABLE `cities` DISABLE KEYS */;
INSERT INTO `cities` VALUES (11,' Cao Bằng'),(12,'Lạng Sơn '),(14,'Quảng Ninh '),(15,'Hải Phòng'),(17,' Thái Bình'),(18,'Nam Định'),(19,'Phú Thọ'),(20,'Thái Nguyên'),(21,'Yên Bái '),(22,'Tuyên Quang '),(23,'Hà Giang '),(24,'Lào Cai '),(26,'Sơn La '),(27,'Điện Biên '),(28,'Hòa Bình'),(30,'Hà Nội'),(34,'Hải Dương'),(35,'Ninh Bình '),(36,'Thanh Hoá '),(37,'Nghệ An '),(38,'Hà Tĩnh '),(43,'Thành Phố Đà Nẵng'),(47,'Đắk Lắk'),(48,'Đắc Nông'),(49,'Lâm Đồng'),(59,'Thành Phố Hồ Chí Minh'),(60,'Đồng Nai'),(61,'Bình Dương'),(62,'Long An'),(63,'Tiền Giang'),(64,'Vĩnh Long'),(65,'Thành Phố Cần Thơ'),(66,'Đồng Tháp'),(67,'An Giang'),(68,'Kiên Giang'),(69,'Cà Mau'),(70,'Tây Ninh'),(71,'Bến Tre'),(72,'Bà Rịa – Vũng Tàu'),(73,'Quảng Bình '),(74,'Quảng Trị '),(75,'Thừa Thiên Huế '),(76,'Quảng Ngãi'),(77,'Bình Định'),(78,'Phú Yên'),(79,'Khánh Hoà'),(81,'Gia Lai'),(82,'Kon Tum'),(83,'Sóc Trăng'),(85,'Ninh Thuận'),(86,'Bình Thuận'),(88,'Vĩnh Phúc'),(89,'Hưng Yên'),(90,'Hà Nam'),(92,'Quảng Nam'),(93,'Bình Phước'),(94,'Bạc Liêu'),(95,'Hậu Giang'),(97,'Bắc Cạn '),(98,'Bắc Giang'),(99,'Bắc Ninh');
/*!40000 ALTER TABLE `cities` ENABLE KEYS */;
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
