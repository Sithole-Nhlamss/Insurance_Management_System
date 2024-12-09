-- MySQL dump 10.13  Distrib 8.0.35, for Win64 (x86_64)

---- Start mysql server omn locval PC
-- Run Code: mysql -u root -p
-- Enter password
-- Run Below Script if databased insurance_management_system already exists

-- Host: localhost    Database: insurance_management_system
-- ------------------------------------------------------
-- Server version	8.0.35

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `customer`
--

DROP TABLE IF EXISTS `customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customer` (
  `customer_id` int NOT NULL AUTO_INCREMENT,
  `customer_name` varchar(30) DEFAULT NULL,
  `customer_dateofbirth` date DEFAULT NULL,
  `customer_address` varchar(50) DEFAULT NULL,
  `customer_contact` varchar(20) DEFAULT NULL,
  `disease_if_yes_specify` varchar(50) DEFAULT NULL,
  `surgery_if_yes_specify` varchar(50) DEFAULT NULL,
  `policy_id` int DEFAULT NULL,
  `policy_status` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`customer_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer`
--

LOCK TABLES `customer` WRITE;
/*!40000 ALTER TABLE `customer` DISABLE KEYS */;
INSERT INTO `customer` VALUES (1,'John Doe','1985-06-15','123 Elm Street','1234567890','None','None',1,'Pending'),(2,'Jane Smith','1990-03-22','456 Oak Avenue','0987654321','Diabetes','Appendectomy',2,'Active'),(3,'Alice Johnson','1992-07-09','789 Pine Road','5556667777','None','None',3,'Pending'),(4,'Bob Brown','1988-12-01','321 Maple Blvd','4445556666','Hypertension','Knee Surgery',4,'Rejected'),(5,'Eve Adams','1975-11-18','654 Birch Lane','1112223333','Asthma','None',5,'Active');
/*!40000 ALTER TABLE `customer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `insurancepolicy`
--

DROP TABLE IF EXISTS `insurancepolicy`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `insurancepolicy` (
  `policy_id` int NOT NULL AUTO_INCREMENT,
  `policy_type` varchar(30) DEFAULT NULL,
  `policy_coverage_amount` double DEFAULT NULL,
  `policy_premium` double DEFAULT NULL,
  `policy_term_in_years` int DEFAULT NULL,
  PRIMARY KEY (`policy_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `insurancepolicy`
--

LOCK TABLES `insurancepolicy` WRITE;
/*!40000 ALTER TABLE `insurancepolicy` DISABLE KEYS */;
INSERT INTO `insurancepolicy` VALUES (1,'Health Insurance',500000,543,10),(2,'Life Insurance',1000000,846,15),(3,'Car Insurance',200000,204,5),(4,'Travel Insurance',100000,1540,3),(5,'Home Insurance',300000,3500,20);
/*!40000 ALTER TABLE `insurancepolicy` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-12-06 14:35:24
