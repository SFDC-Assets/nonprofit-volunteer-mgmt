BEGIN TRANSACTION;
CREATE TABLE "Campaign" (
	id INTEGER NOT NULL, 
	"Name" VARCHAR(255), 
	"Description" VARCHAR(255), 
	"RecordTypeId" VARCHAR(255), 
	"IsActive" VARCHAR(255), 
	"Display_on_Website__c" VARCHAR(255), 
	"EndDate" VARCHAR(255), 
	"StartDate" VARCHAR(255), 
	"Status" VARCHAR(255), 
	"Type" VARCHAR(255), 
	PRIMARY KEY (id)
);
INSERT INTO "Campaign" VALUES(1,'Volunteer Positions','','0123F0000034ic0QAA','False','True','','','Planned','Event');
INSERT INTO "Campaign" VALUES(2,'Warehouse Volunteer Days','Join us as a regular Tuesday volunteer to help get items ready to go our to families in need across Colorado. We need help checking gear, sorting and bagging clothing and supporting our Warehouse staff to make sure we have everything we need.','0123F0000034ic0QAA','True','True','2040-03-01','2021-03-01','In Progress','Event');
CREATE TABLE "Campaign_rt_mapping" (
	record_type_id VARCHAR(18) NOT NULL, 
	developer_name VARCHAR(255), 
	PRIMARY KEY (record_type_id)
);
INSERT INTO "Campaign_rt_mapping" VALUES('0123F0000034ic0QAA','Volunteers_Campaign');
CREATE TABLE "GW_Volunteers__Volunteer_Job__c" (
	id INTEGER NOT NULL, 
	"Name" VARCHAR(255), 
	"GW_Volunteers__Description__c" VARCHAR(255), 
	"GW_Volunteers__Display_on_Website__c" VARCHAR(255), 
	"GW_Volunteers__Inactive__c" VARCHAR(255), 
	"GW_Volunteers__Location_City__c" VARCHAR(255), 
	"GW_Volunteers__Location_Information__c" VARCHAR(255), 
	"Location_Name__c" VARCHAR(255), 
	"GW_Volunteers__Location__c" VARCHAR(255), 
	"GW_Volunteers__Location_Street__c" VARCHAR(255), 
	"GW_Volunteers__Location_Zip_Postal_Code__c" VARCHAR(255), 
	"GW_Volunteers__Ongoing__c" VARCHAR(255), 
	"GW_Volunteers__Skills_Needed__c" VARCHAR(255), 
	"GW_Volunteers__Volunteer_Website_Time_Zone__c" VARCHAR(255), 
	"GW_Volunteers__Campaign__c" VARCHAR(255), 
	PRIMARY KEY (id)
);
INSERT INTO "GW_Volunteers__Volunteer_Job__c" VALUES(1,'Warehouse Volunteer','','True','False','Aurora','','20 S Havana St suite 210, Aurora, CO 80012','CO','20 S Havana St suite 210','80012','False','','America/Denver','2');
INSERT INTO "GW_Volunteers__Volunteer_Job__c" VALUES(2,'Graphic Design Intern','<p><span style="font-size: 14px; color: rgb(62, 62, 60);">Design and production of event, social media and fundraising materials. Must be skilled in print design and production (Wordpress knowledge a plus!) BFA in Graphic Design or current Graphic Design student preferred. Knowledge of Adobe Creative Suite necessary. Will have design support and guidance as needed.</span></p>','True','False','','','','','','','False','','','1');
INSERT INTO "GW_Volunteers__Volunteer_Job__c" VALUES(3,'Group Volunteer Events','<p><span style="font-size: 14px; color: rgb(62, 62, 60);">Are you interested in hosting a private, sponsored, group volunteer event?</span></p>','True','False','','','','','','','False','','','1');
INSERT INTO "GW_Volunteers__Volunteer_Job__c" VALUES(4,'Warehouse Helpers','<p><span style="color: rgb(62, 62, 60);">Assist staff with the organization/sorting of donations.</span></p>','True','False','','','','','','','False','','','1');
INSERT INTO "GW_Volunteers__Volunteer_Job__c" VALUES(5,'Gear Drive Coordinators','<p><span style="font-size: 14px;">Organize/host a gear drive or reach out to other community members to host drives. Assist with publicizing the gear drive. Coordinate pick up/delivery of gear to the warehouse.</span></p>','True','False','','','','','','','False','','','1');
CREATE TABLE "GW_Volunteers__Volunteer_Shift__c" (
	id INTEGER NOT NULL, 
	"GW_Volunteers__Description__c" VARCHAR(255), 
	"GW_Volunteers__Desired_Number_of_Volunteers__c" VARCHAR(255), 
	"Display_on_Website__c" VARCHAR(255), 
	"GW_Volunteers__Duration__c" VARCHAR(255), 
	"GW_Volunteers__Start_Date_Time__c" VARCHAR(255), 
	"GW_Volunteers__System_Note__c" VARCHAR(255), 
	"GW_Volunteers__Total_Volunteers__c" VARCHAR(255), 
	"GW_Volunteers__Volunteer_Job__c" VARCHAR(255), 
	PRIMARY KEY (id)
);
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(1,'','2.0','True','5.0','2021-03-09T20:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(2,'','2.0','True','5.0','2021-03-16T19:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(3,'','2.0','True','5.0','2021-03-23T19:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(4,'','2.0','True','5.0','2021-03-30T19:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(5,'','2.0','True','5.0','2021-04-06T19:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(6,'','2.0','True','5.0','2021-04-13T19:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(7,'','2.0','True','5.0','2021-04-20T19:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(8,'','2.0','True','5.0','2021-04-27T19:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(9,'','2.0','True','5.0','2021-05-04T19:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(10,'','2.0','True','5.0','2021-05-11T19:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(11,'','2.0','True','5.0','2021-05-18T19:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(12,'','2.0','True','5.0','2021-05-25T19:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(13,'','2.0','True','5.0','2021-06-01T19:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(14,'','2.0','True','5.0','2021-06-08T19:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(15,'','2.0','True','5.0','2021-06-15T19:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(16,'','2.0','True','5.0','2021-06-22T19:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(17,'','2.0','True','5.0','2021-06-29T19:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(18,'','2.0','True','5.0','2021-07-06T19:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(19,'','2.0','True','5.0','2021-07-13T19:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(20,'','2.0','True','5.0','2021-07-20T19:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(21,'','2.0','True','5.0','2021-07-27T19:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(22,'','2.0','True','5.0','2021-08-03T19:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(23,'','2.0','True','5.0','2021-08-10T19:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(24,'','2.0','True','5.0','2021-08-17T19:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(25,'','2.0','True','5.0','2021-08-24T19:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(26,'','2.0','True','5.0','2021-08-31T19:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(27,'','2.0','True','5.0','2021-09-07T19:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(28,'','2.0','True','5.0','2021-09-14T19:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(29,'','2.0','True','5.0','2021-09-21T19:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(30,'','2.0','True','5.0','2021-09-28T19:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(31,'','2.0','True','5.0','2021-10-05T19:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(32,'','2.0','True','5.0','2021-10-12T19:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(33,'','2.0','True','5.0','2021-10-19T19:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(34,'','2.0','True','5.0','2021-10-26T19:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(35,'','2.0','True','5.0','2021-11-02T19:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(36,'','2.0','True','5.0','2021-11-09T20:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(37,'','2.0','True','5.0','2021-11-16T20:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(38,'','2.0','True','5.0','2021-11-23T20:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(39,'','2.0','True','5.0','2021-11-30T20:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(40,'','2.0','True','5.0','2021-12-07T20:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(41,'','2.0','True','5.0','2021-12-14T20:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(42,'','2.0','True','5.0','2021-12-21T20:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(43,'','2.0','True','5.0','2021-12-28T20:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(44,'','2.0','True','5.0','2022-01-04T20:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(45,'','2.0','True','5.0','2022-01-11T20:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(46,'','2.0','True','5.0','2022-01-18T20:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(47,'','2.0','True','5.0','2022-01-25T20:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(48,'','2.0','True','5.0','2022-02-01T20:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(49,'','2.0','True','5.0','2022-02-08T20:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(50,'','2.0','True','5.0','2022-02-15T20:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(51,'','2.0','True','5.0','2022-02-22T20:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(52,'','2.0','True','5.0','2022-03-01T20:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(53,'','2.0','True','5.0','2022-03-08T20:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(54,'','2.0','True','5.0','2022-03-15T19:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(55,'','2.0','True','5.0','2022-03-22T19:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(56,'','2.0','True','5.0','2022-03-29T19:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(57,'','2.0','True','5.0','2022-04-05T19:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(58,'','2.0','True','5.0','2022-04-12T19:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(59,'','2.0','True','5.0','2022-04-19T19:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(60,'','2.0','True','5.0','2022-04-26T19:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(61,'','2.0','True','5.0','2022-05-03T19:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(62,'','2.0','True','5.0','2022-05-10T19:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(63,'','2.0','True','5.0','2022-05-17T19:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(64,'','2.0','True','5.0','2022-05-24T19:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(65,'','2.0','True','5.0','2022-05-31T19:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(66,'','2.0','True','5.0','2022-06-07T19:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(67,'','2.0','True','5.0','2022-06-14T19:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(68,'','2.0','True','5.0','2022-06-21T19:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(69,'','2.0','True','5.0','2022-06-28T19:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(70,'','2.0','True','5.0','2022-07-05T19:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(71,'','2.0','True','5.0','2022-07-12T19:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(72,'','2.0','True','5.0','2022-07-19T19:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(73,'','2.0','True','5.0','2022-07-26T19:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(74,'','2.0','True','5.0','2022-08-02T19:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(75,'','2.0','True','5.0','2022-08-09T19:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(76,'','2.0','True','5.0','2022-08-16T19:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(77,'','2.0','True','5.0','2022-08-23T19:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(78,'','2.0','True','5.0','2022-08-30T19:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(79,'','2.0','True','5.0','2022-09-06T19:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(80,'','2.0','True','5.0','2022-09-13T19:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(81,'','2.0','True','5.0','2022-09-20T19:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(82,'','2.0','True','5.0','2022-09-27T19:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(83,'','2.0','True','5.0','2022-10-04T19:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(84,'','2.0','True','5.0','2022-10-11T19:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(85,'','2.0','True','5.0','2022-10-18T19:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(86,'','2.0','True','5.0','2022-10-25T19:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(87,'','2.0','True','5.0','2022-11-01T19:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(88,'','2.0','True','5.0','2022-11-08T20:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(89,'','2.0','True','5.0','2022-11-15T20:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(90,'','2.0','True','5.0','2022-11-22T20:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(91,'','2.0','True','5.0','2022-11-29T20:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(92,'','2.0','True','5.0','2022-12-06T20:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(93,'','2.0','True','5.0','2022-12-13T20:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(94,'','2.0','True','5.0','2022-12-20T20:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(95,'','2.0','True','5.0','2022-12-27T20:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(96,'','2.0','True','5.0','2023-01-03T20:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(97,'','2.0','True','5.0','2023-01-10T20:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(98,'','2.0','True','5.0','2023-01-17T20:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(99,'','2.0','True','5.0','2023-01-24T20:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(100,'','2.0','True','5.0','2023-01-31T20:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(101,'','2.0','True','5.0','2023-02-07T20:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(102,'','2.0','True','5.0','2023-02-14T20:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(103,'','2.0','True','5.0','2023-02-21T20:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(104,'','2.0','True','5.0','2023-02-28T20:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(105,'','2.0','True','5.0','2023-03-07T20:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(106,'','2.0','True','5.0','2023-03-14T19:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(107,'','2.0','True','5.0','2023-03-21T19:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(108,'','2.0','True','5.0','2023-03-28T19:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(109,'','2.0','True','5.0','2023-04-04T19:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(110,'','2.0','True','5.0','2023-04-11T19:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(111,'','2.0','True','5.0','2023-04-18T19:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(112,'','2.0','True','5.0','2023-04-25T19:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(113,'','2.0','True','5.0','2023-05-02T19:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(114,'','2.0','True','5.0','2023-05-09T19:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(115,'','2.0','True','5.0','2023-05-16T19:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(116,'','2.0','True','5.0','2023-05-23T19:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(117,'','2.0','True','5.0','2023-06-06T19:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(118,'','2.0','True','5.0','2023-06-13T19:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(119,'','2.0','True','5.0','2023-06-20T19:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(120,'','2.0','True','5.0','2023-06-27T19:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(121,'','2.0','True','5.0','2023-07-04T19:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(122,'','2.0','True','5.0','2023-07-11T19:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(123,'','2.0','True','5.0','2023-07-18T19:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(124,'','2.0','True','5.0','2023-07-25T19:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(125,'','2.0','True','5.0','2023-08-01T19:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(126,'','2.0','True','5.0','2023-08-08T19:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(127,'','2.0','True','5.0','2023-08-15T19:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(128,'','2.0','True','5.0','2023-08-22T19:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(129,'','2.0','True','5.0','2023-08-29T19:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(130,'','2.0','True','5.0','2023-09-05T19:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(131,'','2.0','True','5.0','2023-09-12T19:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(132,'','2.0','True','5.0','2023-09-19T19:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(133,'','2.0','True','5.0','2023-05-30T19:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(134,'','2.0','True','5.0','2023-09-26T19:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(135,'','2.0','True','5.0','2023-10-03T19:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(136,'','2.0','True','5.0','2023-10-10T19:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(137,'','2.0','True','5.0','2023-10-17T19:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(138,'','2.0','True','5.0','2023-10-24T19:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(139,'','2.0','True','5.0','2023-10-31T19:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(140,'','2.0','True','5.0','2023-11-07T20:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(141,'','2.0','True','5.0','2023-11-14T20:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(142,'','2.0','True','5.0','2023-11-21T20:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(143,'','2.0','True','5.0','2023-11-28T20:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(144,'','2.0','True','5.0','2023-12-05T20:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(145,'','2.0','True','5.0','2023-12-12T20:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(146,'','2.0','True','5.0','2023-12-26T20:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(147,'','2.0','True','5.0','2024-01-02T20:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(148,'','2.0','True','5.0','2024-01-09T20:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(149,'','2.0','True','5.0','2024-01-16T20:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(150,'','2.0','True','5.0','2024-01-23T20:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(151,'','2.0','True','5.0','2024-01-30T20:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(152,'','2.0','True','5.0','2024-02-06T20:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(153,'','2.0','True','5.0','2024-02-13T20:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(154,'','2.0','True','5.0','2024-02-20T20:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(155,'','2.0','True','5.0','2024-02-27T20:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(156,'','2.0','True','5.0','2024-03-05T20:00:00.000+0000','','0.0','1');
INSERT INTO "GW_Volunteers__Volunteer_Shift__c" VALUES(157,'','2.0','True','5.0','2023-12-19T20:00:00.000+0000','','0.0','1');
COMMIT;
