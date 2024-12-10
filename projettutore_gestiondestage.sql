-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : jeu. 28 nov. 2024 à 21:34
-- Version du serveur : 8.2.0
-- Version de PHP : 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `projettutore_gestiondestage`
--

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `type` varchar(4) COLLATE latin1_general_ci NOT NULL,
  `id` bigint NOT NULL AUTO_INCREMENT,
  `email` varchar(255) COLLATE latin1_general_ci DEFAULT NULL,
  `mot_de_passe` varchar(255) COLLATE latin1_general_ci DEFAULT NULL,
  `nom_complete` varchar(255) COLLATE latin1_general_ci DEFAULT NULL,
  `role` varchar(255) COLLATE latin1_general_ci DEFAULT NULL,
  `filiere` varchar(255) COLLATE latin1_general_ci DEFAULT NULL,
  `n_etudiant` varchar(255) COLLATE latin1_general_ci DEFAULT NULL,
  `numero_telephone` varchar(255) COLLATE latin1_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`type`, `id`, `email`, `mot_de_passe`, `nom_complete`, `role`, `filiere`, `n_etudiant`, `numero_telephone`) VALUES
('STAG', 1, 'saadboukili66@gmail.com', '$2a$10$mgh2HF.b3wJE6V7o1Zh7Ke4eLlpqn8ZkyECrtN/hankuBgKwVKFve', 'saad boukili', 'ROLE_STAGIAIRE', 'info', 'C256445', '0644061629'),
('STAG', 2, 'amineFarah@gmail.com', '$2a$10$54.FqirAMd0bBY9IJX5nhOWHOaM6gVcKTjNgjYITyL1EasD7yadg.', 'amine farah', 'ROLE_STAGIAIRE', 'info', 'C566545', '031515151'),
('STAG', 5, 'yunusAouam@gmail.com', '$2a$10$nobOUkUisu13nHV576d5ZuO7pbP6sCfe.pTj9rItzxhhb7Oly0Itm', 'yunus aouam', 'ROLE_STAGIAIRE', 'info', 'C256445', '031515151');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
