use dvcipm;

CREATE TABLE `pastor` (
  `entry_id` int(11) NOT NULL AUTO_INCREMENT,
  `date` date NOT NULL,
  `id` int(11) NOT NULL,
  `dvprs_score` int(11) DEFAULT NULL,
  `pain_interference` float(6,3) DEFAULT NULL,
  `physical_function` float(6,3) DEFAULT NULL,
  `fatigue` float(6,3) DEFAULT NULL,
  `sleep_impairment` float(6,3) DEFAULT NULL,
  `depression` float(6,3) DEFAULT NULL,
  `anxiety` float(6,3) DEFAULT NULL,
  `anger` float(6,3) DEFAULT NULL,
  `social_sat` float(6,3) DEFAULT NULL,
  `alcohol` float(6,3) DEFAULT NULL,
  `pcs` int(11) DEFAULT NULL,
  `headache` float(6,3) DEFAULT NULL,
  `ptsd` float(6,3) DEFAULT NULL,
  PRIMARY KEY (`entry_id`),
  KEY `id` (`id`),
  CONSTRAINT `pastor_ibfk_1` FOREIGN KEY (`id`) REFERENCES `subject` (`id`)
) 

CREATE TABLE `subject` (
  `id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
)



