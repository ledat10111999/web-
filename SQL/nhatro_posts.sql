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
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `posts` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `IDimg` int NOT NULL,
  `tenTp` varchar(45) NOT NULL,
  `tenQuan` varchar(45) NOT NULL,
  `tenDuong` varchar(45) NOT NULL,
  `tenPhuong` varchar(45) NOT NULL,
  `soNha` varchar(45) NOT NULL,
  `DiaChiChinhXac` varchar(45) NOT NULL,
  `ThongTinMoTa` varchar(45) NOT NULL,
  `DienTich` int DEFAULT NULL,
  `TieuDe` varchar(45) NOT NULL,
  `NoiDung` varchar(500) NOT NULL,
  `DoiTuongChoThue` varchar(5) NOT NULL,
  `Gia` int DEFAULT NULL,
  `IDusers` int NOT NULL,
  `image` varchar(50) DEFAULT NULL,
  `SDT` int DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `update_at` datetime DEFAULT NULL,
  PRIMARY KEY (`ID`,`IDimg`),
  KEY `IDusers` (`IDusers`),
  CONSTRAINT `posts_ibfk_1` FOREIGN KEY (`IDusers`) REFERENCES `users` (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=73 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES (69,90,'Thành Phố Hồ Chí Minh','Quận 2','Xa lộ Hà Nội','Phường','1234','Xô Viết Nghệ Tĩnh','PhongTro',50,'Cho thuê phòng trọ','Cho thuê phòng trọ','Nam',500000,90,'upload\\1585407846394-villa.jpg',NULL,'2020-03-28 22:04:08','2020-03-28 22:04:08'),(70,90,'Thành Phố Hồ Chí Minh','Quận 2','Xa lộ Hà Nội','Phường','1234','Xô Viết Nghệ Tĩnh','PhongTro',50,'Cho thuê phòng trọ','Phòng trọ cao cấp','Nam',500000,90,'upload\\1585410539182-tải xuống.jpg',NULL,'2020-03-28 22:49:01','2020-03-28 22:49:01'),(71,91,'Thành Phố Hồ Chí Minh','Quận 2','Xa lộ Hà Nội','Phường An Lợi Đông','123','Xô Viết Nghệ Tĩnh','Nhà nguyên căn',50,'Cho thuê Nhà nguyên căn','Nhà nguyên căn','Nam',10000000,91,'upload\\1585467277413-tải xuống.jpg',NULL,'2020-03-29 14:34:40','2020-03-29 14:34:40'),(72,90,'Thành Phố Hồ Chí Minh','Quận 2','Điện Biên Phủ','Phường An Lợi Đông','1234','Xô Viết Nghệt tĩnh','Cho thuê căn hộ',100,'VIlla cao cấp','Villa','Nam',20000000,90,'upload\\1585651663980-villa2.jpg',376467658,'2020-03-31 17:47:46','2020-03-31 17:47:46');
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-03-31 22:28:34
