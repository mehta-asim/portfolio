-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Dec 03, 2021 at 08:27 PM
-- Server version: 5.7.31
-- PHP Version: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `portfolio`
--

-- --------------------------------------------------------

--
-- Table structure for table `gallery`
--

DROP TABLE IF EXISTS `gallery`;
CREATE TABLE IF NOT EXISTS `gallery` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Source` varchar(20) NOT NULL,
  `mediaType` varchar(10) NOT NULL,
  `name` varchar(25) NOT NULL,
  `description` varchar(200) NOT NULL,
  `thumb` varchar(20) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `gallery`
--

INSERT INTO `gallery` (`ID`, `Source`, `mediaType`, `name`, `description`, `thumb`) VALUES
(1, 'showreel.mp4', 'video', 'Showreel', 'This is to showcase different types of digital media that I work with and what all projects I have worked on till date.', 'showreel.jpg'),
(2, 'comicstaan.mp4', 'video', 'Comicstaan', 'This is a casestudy that I worked on for Amazon Prime Original Comicstaan Season 2 and the objective was to show how the Bot Funny campaign was executed and the impact it made.', 'comicstaan.jpg'),
(3, 'beer.mp4', 'video', 'Windsor Beer', 'This is a college project that I worked on where I had to mashup two brands together taking design from one and the messaging from other.', 'beer.jpg'),
(4, 'mih.mp4', 'video', 'Made In Heaven', 'This is a casestudy that I worked on for Amazon Prime Original Made In Heaven to showcase the brand campaign and its returns.', 'mih.jpg'),
(5, 'primemusic.mp4', 'video', 'Amazon Prime Music', 'This is  a campaign I worked on for Amazon Prime Music showcasing how to use Alexa on the Prime Music app.', 'primemusic.jpg'),
(6, 'soty.mp4', 'video', 'SOTY 2', 'This is a campaign I worked on for the movie Student Of The Year 2 produced by Dharma Productions, the objective was to promote the movie on social media.', 'soty.jpg'),
(7, 'makeup.mp4', 'video', 'CECI Makeup', 'This is a college project that I worked on where we were supposed to create a makeup brand design the brand guides and overall campaign.', 'makeup.jpg'),
(8, 'little-things.mp4', 'video', 'Little Things Season 2', 'This is a campaign I worked on for the show Little Things Season 2, the objective was to make lyrics videos for its album and promote the new season.', 'little-things.jpg'),
(9, 'primemusic-2.mp4', 'video', 'Amazon Prime Music', 'This is a campaign that I worked on for Amazon Prime Music\'s My Mixtape, a special playlist curated by artist themselves. This was started to promote Prime Day.', 'primemusic-2.jpg'),
(10, 'sportsnet.mp4', 'video', 'Sportsnet', 'This is a college project where we were supposed to create a sports channel intro for a football game.', 'sportsnet.jpg');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
