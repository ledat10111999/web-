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
  KEY `fk_IDuser` (`IDusers`),
  CONSTRAINT `fk_IDuser` FOREIGN KEY (`IDusers`) REFERENCES `users` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=81 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES (74,90,'Hồ Chí Minh','Phú Nhuận','Đường Đặng Văn Sâm','Phường 1','1234 ','Cô Bắc ','Phòng trọ',50,'Cho thuê phòng trọ ','Phòng trọ đẹp','Nam',10000000,90,'upload\\1586425262116-tải xuống.jpg',376467658,'2020-04-09 12:45:48','2020-04-09 16:41:04'),(75,90,'Hồ Chí Minh','Quận 1','Phố Bà Huyện Thanh Quan','Phường Bến Nghé','1234  ','Đường Bà Huyện Thanh Quan  ','Nhà nguyên căn',100,'Cho thuê Nhà nguyên căn  ','Cho thuê Nhà nguyên căn','Nam',20000000,90,'upload\\1586681860784-villa5.jpg',376467658,'2020-04-09 13:42:38','2020-04-12 15:57:46'),(76,92,'Hồ Chí Minh','Quận 1','Đường Alexandre','Phường Bến Nghé','1234','admin test','Phòng trọ',100,'Cho thuê Nhà nguyên căn','Nhà Nguyên căn','Nam',20000000,92,'upload\\1586510387023-villa2.jpg',936429878,'2020-04-10 16:19:48','2020-04-10 16:19:48'),(78,90,'Hồ Chí Minh','Bình Chánh','Đường 1','Xã An Phú Tây','123','Xô Viết Nghệ Tĩnh','Phòng trọ',50,'Cho thuê phòng trọ','Cho thuê phòng trọ','Nam',500000,90,'upload\\1587048761102-villa.jpg',936429878,'2020-04-16 21:52:41','2020-04-16 21:52:41');
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

-- Dump completed on 2020-04-18  0:11:46
