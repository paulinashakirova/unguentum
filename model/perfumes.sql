
DROP TABLE IF EXISTS `perfumes`;


CREATE TABLE `perfumes` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`name` varchar(255) NOT NULL,
	`brand` varchar(255) NOT NULL,
	`scent` varchar(255) NOT NULL,
	`style` varchar(255) NOT NULL,
	`season` varchar(255) NOT NULL,
	`gender` varchar(255) NOT NULL,
	`time_of_day` varchar(255) NOT NULL,
	`mood` varchar(255) NOT NULL,
	PRIMARY KEY (`id`)
);

