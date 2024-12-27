-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : ven. 27 déc. 2024 à 23:33
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
  `stage_id` bigint DEFAULT NULL,
  `path` varchar(255) COLLATE latin1_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKq4v7pdqj86nuemlxncd69atdb` (`stage_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Déchargement des données de la table `document`
--

INSERT INTO `document` (`id`, `stage_id`, `path`) VALUES
(1, 44, 'Saad Boukili_1735341715889.pdf'),
(2, 45, 'Saad Boukili_1735341960419.pdf'),
(3, 45, 'beautiful-gwen-lol-wallpaper-3440x1440_15_1735341960421.jpg'),
(4, 45, 'Cycle of dopamine_1735341960424.png'),
(5, 46, 'godofwar-kratos_wide_1735342258324.jpg');

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
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Déchargement des données de la table `stage`
--

INSERT INTO `stage` (`id`, `date_debut`, `date_fin`, `domain_entreprise`, `nom_entreprise`, `status`, `type`, `stagiaire_id`) VALUES
(19, '2024-01-15', '2024-06-15', 'Software Development', 'Tech Corp', b'1', 'PFA', 10),
(33, '2024-01-15', '2024-06-15', 'Software Development', 'Tech Corp', b'1', 'PFA', 10),
(34, '2024-01-15', '2024-06-15', 'Software Development', 'UPF university', b'1', 'PFE', 10),
(35, '2024-01-15', '2024-06-15', 'Software Development', 'UPF university', b'1', 'PFE', 10),
(36, '2024-01-15', '2024-06-15', 'Software Development', 'UPF university', b'1', 'PFE', 10),
(37, '2024-01-15', '2024-06-15', 'Software Development', 'UPF university', b'1', 'PFE', 10),
(38, '2024-01-15', '2024-06-15', 'Software Development', 'UPF university', b'1', 'PFE', 10),
(39, '2024-01-15', '2024-06-15', 'Software Development', 'UPF university', b'1', 'PFE', 10),
(40, '2024-01-15', '2024-06-15', 'Software Development', 'UPF university', b'1', 'PFE', 10),
(41, '2024-01-15', '2024-06-15', 'Software Development', 'UPF university', b'1', 'PFE', 10),
(42, '2024-01-15', '2024-06-15', 'Software Development', 'UPF university', b'1', 'PFE', 10),
(43, '2024-01-15', '2024-06-15', 'Software Development', 'UPF university', b'1', 'PFE', 10),
(44, '2024-01-15', '2024-06-15', 'Software Development', 'UPF university', b'1', 'PFE', 10),
(45, '2024-01-15', '2024-06-15', 'Software Development', 'UPF university', b'1', 'PFE', 10),
(46, '2024-01-15', '2024-06-15', 'Software Development', 'UPF university', b'1', 'PFE', 10);

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
(b'1', 'archit', 'C256445', '03333333', 10),
(b'0', 'info', 'C256445', '031515151', 15);

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
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id`, `email`, `mot_de_passe`, `nom_complete`, `role`) VALUES
(10, 'aminefarah@gmail.com', '$2a$10$IH/L0N.hmLkpI29vxnL6GOSDL8rGHQMmhT8EbyBPjR/8Am9rGDMnu', 'amine farah', 'ROLE_STAGIAIRE'),
(11, 'saadboukili66@gmail.com', '$2a$10$JXx1akPUSb5BI0WsqE3KueuSlJ5QJQVHTyeUd5WmnWhb5cuierjju', 'saad boukili', 'ROLE_ADMIN'),
(14, 'ma3ti@gmail.com', '$2a$10$JXx1akPUSb5BI0WsqE3KueuSlJ5QJQVHTyeUd5WmnWhb5cuierjju', 'ma3ti boujem3a', 'ROLE_ENCADRANT'),
(15, 'saadboukili@gmail.com', '$2a$10$KAu5lDwd6K72L1MRIAdnPetG670dHuGf9zKte7Bj/bkAaAa9C01XC', 'saad boukili', 'ROLE_STAGIAIRE');

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
