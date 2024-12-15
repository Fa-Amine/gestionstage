-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : sam. 14 déc. 2024 à 13:54
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
-- Structure de la table `document`
--

DROP TABLE IF EXISTS `document`;
CREATE TABLE IF NOT EXISTS `document` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `path` varchar(255) COLLATE latin1_general_ci DEFAULT NULL,
  `stage_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKq4v7pdqj86nuemlxncd69atdb` (`stage_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `encadrant_pedagogique`
--

DROP TABLE IF EXISTS `encadrant_pedagogique`;
CREATE TABLE IF NOT EXISTS `encadrant_pedagogique` (
  `depatement` varchar(255) COLLATE latin1_general_ci DEFAULT NULL,
  `id` bigint NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Déchargement des données de la table `encadrant_pedagogique`
--

INSERT INTO `encadrant_pedagogique` (`depatement`, `id`) VALUES
('GINFO', 14);

-- --------------------------------------------------------

--
-- Structure de la table `gestionnaire_stage`
--

DROP TABLE IF EXISTS `gestionnaire_stage`;
CREATE TABLE IF NOT EXISTS `gestionnaire_stage` (
  `admin` varchar(255) COLLATE latin1_general_ci DEFAULT NULL,
  `id` bigint NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Déchargement des données de la table `gestionnaire_stage`
--

INSERT INTO `gestionnaire_stage` (`admin`, `id`) VALUES
('adminExample', 11);

-- --------------------------------------------------------

--
-- Structure de la table `stage`
--

DROP TABLE IF EXISTS `stage`;
CREATE TABLE IF NOT EXISTS `stage` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `date_debut` date DEFAULT NULL,
  `date_fin` date DEFAULT NULL,
  `domain_entreprise` varchar(255) COLLATE latin1_general_ci DEFAULT NULL,
  `nom_entreprise` varchar(255) COLLATE latin1_general_ci DEFAULT NULL,
  `status` bit(1) NOT NULL,
  `type` varchar(255) COLLATE latin1_general_ci DEFAULT NULL,
  `stagiaire_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKeeyluj04qr2r6mkkr9wf4exx1` (`stagiaire_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `stagiaire`
--

DROP TABLE IF EXISTS `stagiaire`;
CREATE TABLE IF NOT EXISTS `stagiaire` (
  `acc_status` bit(1) NOT NULL,
  `filiere` varchar(255) COLLATE latin1_general_ci DEFAULT NULL,
  `n_etudiant` varchar(255) COLLATE latin1_general_ci DEFAULT NULL,
  `numero_telephone` varchar(255) COLLATE latin1_general_ci DEFAULT NULL,
  `id` bigint NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Déchargement des données de la table `stagiaire`
--

INSERT INTO `stagiaire` (`acc_status`, `filiere`, `n_etudiant`, `numero_telephone`, `id`) VALUES
(b'1', 'archit', 'C256445', '03333333', 10);

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `email` varchar(255) COLLATE latin1_general_ci DEFAULT NULL,
  `mot_de_passe` varchar(255) COLLATE latin1_general_ci DEFAULT NULL,
  `nom_complete` varchar(255) COLLATE latin1_general_ci DEFAULT NULL,
  `role` varchar(255) COLLATE latin1_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id`, `email`, `mot_de_passe`, `nom_complete`, `role`) VALUES
(10, 'aminefarah@gmail.com', '$2a$10$IH/L0N.hmLkpI29vxnL6GOSDL8rGHQMmhT8EbyBPjR/8Am9rGDMnu', 'amine farah', 'ROLE_STAGIAIRE'),
(11, 'saadboukili66@gmail.com', '$2a$10$JXx1akPUSb5BI0WsqE3KueuSlJ5QJQVHTyeUd5WmnWhb5cuierjju', 'saad boukili', 'ROLE_ADMIN'),
(14, 'ma3ti@gmail.com', '1234', 'ma3ti boujem3a', 'ROLE_ENCADRANT');

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `document`
--
ALTER TABLE `document`
  ADD CONSTRAINT `FKq4v7pdqj86nuemlxncd69atdb` FOREIGN KEY (`stage_id`) REFERENCES `stage` (`id`);

--
-- Contraintes pour la table `encadrant_pedagogique`
--
ALTER TABLE `encadrant_pedagogique`
  ADD CONSTRAINT `FKre9lfpec4p5469n1e0quu5e3q` FOREIGN KEY (`id`) REFERENCES `user` (`id`);

--
-- Contraintes pour la table `gestionnaire_stage`
--
ALTER TABLE `gestionnaire_stage`
  ADD CONSTRAINT `FK5cplb76s2ed5rxqul9mmhnk2n` FOREIGN KEY (`id`) REFERENCES `user` (`id`);

--
-- Contraintes pour la table `stage`
--
ALTER TABLE `stage`
  ADD CONSTRAINT `FKeeyluj04qr2r6mkkr9wf4exx1` FOREIGN KEY (`stagiaire_id`) REFERENCES `stagiaire` (`id`);

--
-- Contraintes pour la table `stagiaire`
--
ALTER TABLE `stagiaire`
  ADD CONSTRAINT `FKk2gnmk9nja7g9y89fnp9de40` FOREIGN KEY (`id`) REFERENCES `user` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
