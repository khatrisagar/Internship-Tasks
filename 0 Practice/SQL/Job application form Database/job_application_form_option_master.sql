-- MySQL dump 10.13  Distrib 8.0.29, for Linux (x86_64)
--
-- Host: localhost    Database: job_application_form
-- ------------------------------------------------------
-- Server version	8.0.32

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
-- Table structure for table `option_master`
--

DROP TABLE IF EXISTS `option_master`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `option_master` (
  `option_id` int NOT NULL AUTO_INCREMENT,
  `select_id` int NOT NULL,
  `option_value` varchar(40) DEFAULT NULL,
  `created_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`option_id`),
  KEY `select_id` (`select_id`),
  CONSTRAINT `option_master_ibfk_1` FOREIGN KEY (`select_id`) REFERENCES `select_master` (`select_id`)
) ENGINE=InnoDB AUTO_INCREMENT=75 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `option_master`
--

LOCK TABLES `option_master` WRITE;
/*!40000 ALTER TABLE `option_master` DISABLE KEYS */;
INSERT INTO `option_master` VALUES (1,1,'Single','2023-02-17 04:40:59'),(2,2,'Gujrat','2023-02-17 04:40:59'),(3,1,'Married','2023-02-17 04:41:39'),(4,2,'Madhya Pradesh','2023-02-17 04:50:13'),(5,2,'Maharashtra','2023-02-17 04:50:13'),(6,2,'Andhra Pradesh','2023-02-17 04:50:13'),(7,2,'Arunachal Pradesh','2023-02-17 04:50:13'),(8,2,'Assam','2023-02-17 04:50:13'),(9,2,'Bihar','2023-02-17 04:50:13'),(10,2,'Chhattisgarh','2023-02-17 04:50:13'),(11,2,'Goa','2023-02-17 04:50:13'),(12,2,'Haryana','2023-02-17 04:50:13'),(13,2,'Himachal Pradesh','2023-02-17 04:50:13'),(14,2,'Jharkhand','2023-02-17 04:50:13'),(15,2,'Karnataka','2023-02-17 04:50:13'),(16,2,'Kerala','2023-02-17 04:50:13'),(17,2,'Manipur','2023-02-17 04:50:13'),(18,2,'Meghalaya','2023-02-17 04:50:13'),(19,2,'Mizoram','2023-02-17 04:50:13'),(20,2,'Nagaland','2023-02-17 04:50:13'),(21,2,'Odisha','2023-02-17 04:50:13'),(22,2,'Punjab','2023-02-17 04:50:13'),(23,2,'Rajasthan','2023-02-17 04:50:13'),(24,2,'Sikkim','2023-02-17 04:50:13'),(25,2,'Tamil Nadu','2023-02-17 04:50:13'),(26,2,'Telangana','2023-02-17 04:50:13'),(27,2,'Tripura','2023-02-17 04:50:13'),(28,2,'Uttar Pradesh','2023-02-17 04:50:13'),(29,2,'West Bengal','2023-02-17 04:50:13'),(30,3,'Male','2023-02-17 04:52:51'),(31,3,'Female','2023-02-17 04:52:51'),(32,3,'Other','2023-02-17 04:52:51'),(33,4,'GTU','2023-02-17 04:53:59'),(34,4,'SPU','2023-02-17 04:53:59'),(35,4,'Other','2023-02-17 04:53:59'),(40,5,'BE','2023-02-17 04:55:13'),(41,5,'ME','2023-02-17 04:55:13'),(42,5,'BCA','2023-02-17 04:55:13'),(43,5,'MCA','2023-02-17 04:55:13'),(44,5,'BTech','2023-02-17 04:55:13'),(45,5,'MTech','2023-02-17 04:55:13'),(46,6,'NodeJs','2023-02-17 04:58:57'),(47,6,'ReactJs','2023-02-17 04:58:57'),(48,6,'CPP','2023-02-17 04:58:57'),(49,6,'Python','2023-02-17 04:58:57'),(50,6,'Java','2023-02-17 04:58:57'),(51,6,'AngularJs','2023-02-17 04:58:57'),(52,6,'Ruby on Rails','2023-02-17 04:58:57'),(53,6,'Dotnet','2023-02-17 04:58:57'),(54,7,'Ahmedabad','2023-02-17 05:00:41'),(55,7,'Pune','2023-02-17 05:00:41'),(56,7,'Bengaluru','2023-02-17 05:00:41'),(57,7,'Rajkot','2023-02-17 05:00:41'),(58,8,'Web Development','2023-02-17 05:03:05'),(59,8,'Android Development','2023-02-17 05:03:05'),(60,8,'IOS Development','2023-02-17 05:03:05'),(61,8,'Graphics Designing','2023-02-17 05:03:05'),(62,8,'Video Editing','2023-02-17 05:03:05'),(63,8,'Content Writing','2023-02-17 05:03:05'),(64,8,'Marketing','2023-02-17 05:03:05'),(72,9,'Hindi','2023-02-17 05:04:43'),(73,9,'English','2023-02-17 05:04:43'),(74,9,'Gujrati','2023-02-17 05:04:43');
/*!40000 ALTER TABLE `option_master` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-02-17 11:20:49
