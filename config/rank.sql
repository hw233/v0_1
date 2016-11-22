--
-- 数据库: `dragongame_0`
--

-- --------------------------------------------------------

--
-- 表的结构 `pvptop`
--

DROP TABLE IF EXISTS `pvptop`;
CREATE TABLE IF NOT EXISTS `pvptop` (
  `top` int(11) NOT NULL,
  `userUid` bigint(20) unsigned NOT NULL,
  `robot` tinyint(4) NOT NULL DEFAULT '0' COMMENT '是否机器人',
  `lockTime` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`top`),
  KEY `userUid` (`userUid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='pvp排行榜';

--
-- 转存表中的数据 `pvptop`
--

INSERT INTO `pvptop` (`top`, `userUid`, `robot`, `lockTime`) VALUES
(1, 1, 1, 0),
(2, 2, 1, 0),
(3, 3, 1, 0),
(4, 4, 1, 0),
(5, 5, 1, 0),
(6, 6, 1, 0),
(7, 7, 1, 0),
(8, 8, 1, 0),
(9, 9, 1, 0),
(10, 10, 1, 0),
(11, 11, 1, 0),
(12, 12, 1, 0),
(13, 13, 1, 0),
(14, 14, 1, 0),
(15, 15, 1, 0),
(16, 16, 1, 0),
(17, 17, 1, 0),
(18, 18, 1, 0),
(19, 19, 1, 0),
(20, 20, 1, 0),
(21, 21, 1, 0),
(22, 22, 1, 0),
(23, 23, 1, 0),
(24, 24, 1, 0),
(25, 25, 1, 0),
(26, 26, 1, 0),
(27, 27, 1, 0),
(28, 28, 1, 0),
(29, 29, 1, 0),
(30, 30, 1, 0),
(31, 31, 1, 0),
(32, 32, 1, 0),
(33, 33, 1, 0),
(34, 34, 1, 0),
(35, 35, 1, 0),
(36, 36, 1, 0),
(37, 37, 1, 0),
(38, 38, 1, 0),
(39, 39, 1, 0),
(40, 40, 1, 0),
(41, 41, 1, 0),
(42, 42, 1, 0),
(43, 43, 1, 0),
(44, 44, 1, 0),
(45, 45, 1, 0),
(46, 46, 1, 0),
(47, 47, 1, 0),
(48, 48, 1, 0),
(49, 49, 1, 0),
(50, 50, 1, 0),
(51, 51, 1, 0),
(52, 52, 1, 0),
(53, 53, 1, 0),
(54, 54, 1, 0),
(55, 55, 1, 0),
(56, 56, 1, 0),
(57, 57, 1, 0),
(58, 58, 1, 0),
(59, 59, 1, 0),
(60, 60, 1, 0),
(61, 61, 1, 0),
(62, 62, 1, 0),
(63, 63, 1, 0),
(64, 64, 1, 0),
(65, 65, 1, 0),
(66, 66, 1, 0),
(67, 67, 1, 0),
(68, 68, 1, 0),
(69, 69, 1, 0),
(70, 70, 1, 0),
(71, 71, 1, 0),
(72, 72, 1, 0),
(73, 73, 1, 0),
(74, 74, 1, 0),
(75, 75, 1, 0),
(76, 76, 1, 0),
(77, 77, 1, 0),
(78, 78, 1, 0),
(79, 79, 1, 0),
(80, 80, 1, 0),
(81, 81, 1, 0),
(82, 82, 1, 0),
(83, 83, 1, 0),
(84, 84, 1, 0),
(85, 85, 1, 0),
(86, 86, 1, 0),
(87, 87, 1, 0),
(88, 88, 1, 0),
(89, 89, 1, 0),
(90, 90, 1, 0),
(91, 91, 1, 0),
(92, 92, 1, 0),
(93, 93, 1, 0),
(94, 94, 1, 0),
(95, 95, 1, 0),
(96, 96, 1, 0),
(97, 97, 1, 0),
(98, 98, 1, 0),
(99, 99, 1, 0),
(100, 100, 1, 0),
(101, 101, 1, 0),
(102, 102, 1, 0),
(103, 103, 1, 0),
(104, 104, 1, 0),
(105, 105, 1, 0),
(106, 106, 1, 0),
(107, 107, 1, 0),
(108, 108, 1, 0),
(109, 109, 1, 0),
(110, 110, 1, 0),
(111, 111, 1, 0),
(112, 112, 1, 0),
(113, 113, 1, 0),
(114, 114, 1, 0),
(115, 115, 1, 0),
(116, 116, 1, 0),
(117, 117, 1, 0),
(118, 118, 1, 0),
(119, 119, 1, 0),
(120, 120, 1, 0),
(121, 121, 1, 0),
(122, 122, 1, 0),
(123, 123, 1, 0),
(124, 124, 1, 0),
(125, 125, 1, 0),
(126, 126, 1, 0),
(127, 127, 1, 0),
(128, 128, 1, 0),
(129, 129, 1, 0),
(130, 130, 1, 0),
(131, 131, 1, 0),
(132, 132, 1, 0),
(133, 133, 1, 0),
(134, 134, 1, 0),
(135, 135, 1, 0),
(136, 136, 1, 0),
(137, 137, 1, 0),
(138, 138, 1, 0),
(139, 139, 1, 0),
(140, 140, 1, 0),
(141, 141, 1, 0),
(142, 142, 1, 0),
(143, 143, 1, 0),
(144, 144, 1, 0),
(145, 145, 1, 0),
(146, 146, 1, 0),
(147, 147, 1, 0),
(148, 148, 1, 0),
(149, 149, 1, 0),
(150, 150, 1, 0),
(151, 151, 1, 0),
(152, 152, 1, 0),
(153, 153, 1, 0),
(154, 154, 1, 0),
(155, 155, 1, 0),
(156, 156, 1, 0),
(157, 157, 1, 0),
(158, 158, 1, 0),
(159, 159, 1, 0),
(160, 160, 1, 0),
(161, 161, 1, 0),
(162, 162, 1, 0),
(163, 163, 1, 0),
(164, 164, 1, 0),
(165, 165, 1, 0),
(166, 166, 1, 0),
(167, 167, 1, 0),
(168, 168, 1, 0),
(169, 169, 1, 0),
(170, 170, 1, 0),
(171, 171, 1, 0),
(172, 172, 1, 0),
(173, 173, 1, 0),
(174, 174, 1, 0),
(175, 175, 1, 0),
(176, 176, 1, 0),
(177, 177, 1, 0),
(178, 178, 1, 0),
(179, 179, 1, 0),
(180, 180, 1, 0),
(181, 181, 1, 0),
(182, 182, 1, 0),
(183, 183, 1, 0),
(184, 184, 1, 0),
(185, 185, 1, 0),
(186, 186, 1, 0),
(187, 187, 1, 0),
(188, 188, 1, 0),
(189, 189, 1, 0),
(190, 190, 1, 0),
(191, 191, 1, 0),
(192, 192, 1, 0),
(193, 193, 1, 0),
(194, 194, 1, 0),
(195, 195, 1, 0),
(196, 196, 1, 0),
(197, 197, 1, 0),
(198, 198, 1, 0),
(199, 199, 1, 0),
(200, 200, 1, 0),
(201, 201, 1, 0),
(202, 202, 1, 0),
(203, 203, 1, 0),
(204, 204, 1, 0),
(205, 205, 1, 0),
(206, 206, 1, 0),
(207, 207, 1, 0),
(208, 208, 1, 0),
(209, 209, 1, 0),
(210, 210, 1, 0),
(211, 211, 1, 0),
(212, 212, 1, 0),
(213, 213, 1, 0),
(214, 214, 1, 0),
(215, 215, 1, 0),
(216, 216, 1, 0),
(217, 217, 1, 0),
(218, 218, 1, 0),
(219, 219, 1, 0),
(220, 220, 1, 0),
(221, 221, 1, 0),
(222, 222, 1, 0),
(223, 223, 1, 0),
(224, 224, 1, 0),
(225, 225, 1, 0),
(226, 226, 1, 0),
(227, 227, 1, 0),
(228, 228, 1, 0),
(229, 229, 1, 0),
(230, 230, 1, 0),
(231, 231, 1, 0),
(232, 232, 1, 0),
(233, 233, 1, 0),
(234, 234, 1, 0),
(235, 235, 1, 0),
(236, 236, 1, 0),
(237, 237, 1, 0),
(238, 238, 1, 0),
(239, 239, 1, 0),
(240, 240, 1, 0),
(241, 241, 1, 0),
(242, 242, 1, 0),
(243, 243, 1, 0),
(244, 244, 1, 0),
(245, 245, 1, 0),
(246, 246, 1, 0),
(247, 247, 1, 0),
(248, 248, 1, 0),
(249, 249, 1, 0),
(250, 250, 1, 0),
(251, 251, 1, 0),
(252, 252, 1, 0),
(253, 253, 1, 0),
(254, 254, 1, 0),
(255, 255, 1, 0),
(256, 256, 1, 0),
(257, 257, 1, 0),
(258, 258, 1, 0),
(259, 259, 1, 0),
(260, 260, 1, 0),
(261, 261, 1, 0),
(262, 262, 1, 0),
(263, 263, 1, 0),
(264, 264, 1, 0),
(265, 265, 1, 0),
(266, 266, 1, 0),
(267, 267, 1, 0),
(268, 268, 1, 0),
(269, 269, 1, 0),
(270, 270, 1, 0),
(271, 271, 1, 0),
(272, 272, 1, 0),
(273, 273, 1, 0),
(274, 274, 1, 0),
(275, 275, 1, 0),
(276, 276, 1, 0),
(277, 277, 1, 0),
(278, 278, 1, 0),
(279, 279, 1, 0),
(280, 280, 1, 0),
(281, 281, 1, 0),
(282, 282, 1, 0),
(283, 283, 1, 0),
(284, 284, 1, 0),
(285, 285, 1, 0),
(286, 286, 1, 0),
(287, 287, 1, 0),
(288, 288, 1, 0),
(289, 289, 1, 0),
(290, 290, 1, 0),
(291, 291, 1, 0),
(292, 292, 1, 0),
(293, 293, 1, 0),
(294, 294, 1, 0),
(295, 295, 1, 0),
(296, 296, 1, 0),
(297, 297, 1, 0),
(298, 298, 1, 0),
(299, 299, 1, 0),
(300, 300, 1, 0),
(301, 301, 1, 0),
(302, 302, 1, 0),
(303, 303, 1, 0),
(304, 304, 1, 0),
(305, 305, 1, 0),
(306, 306, 1, 0),
(307, 307, 1, 0),
(308, 308, 1, 0),
(309, 309, 1, 0),
(310, 310, 1, 0),
(311, 311, 1, 0),
(312, 312, 1, 0),
(313, 313, 1, 0),
(314, 314, 1, 0),
(315, 315, 1, 0),
(316, 316, 1, 0),
(317, 317, 1, 0),
(318, 318, 1, 0),
(319, 319, 1, 0),
(320, 320, 1, 0),
(321, 321, 1, 0),
(322, 322, 1, 0),
(323, 323, 1, 0),
(324, 324, 1, 0),
(325, 325, 1, 0),
(326, 326, 1, 0),
(327, 327, 1, 0),
(328, 328, 1, 0),
(329, 329, 1, 0),
(330, 330, 1, 0),
(331, 331, 1, 0),
(332, 332, 1, 0),
(333, 333, 1, 0),
(334, 334, 1, 0),
(335, 335, 1, 0),
(336, 336, 1, 0),
(337, 337, 1, 0),
(338, 338, 1, 0),
(339, 339, 1, 0),
(340, 340, 1, 0),
(341, 341, 1, 0),
(342, 342, 1, 0),
(343, 343, 1, 0),
(344, 344, 1, 0),
(345, 345, 1, 0),
(346, 346, 1, 0),
(347, 347, 1, 0),
(348, 348, 1, 0),
(349, 349, 1, 0),
(350, 350, 1, 0),
(351, 351, 1, 0),
(352, 352, 1, 0),
(353, 353, 1, 0),
(354, 354, 1, 0),
(355, 355, 1, 0),
(356, 356, 1, 0),
(357, 357, 1, 0),
(358, 358, 1, 0),
(359, 359, 1, 0),
(360, 360, 1, 0),
(361, 361, 1, 0),
(362, 362, 1, 0),
(363, 363, 1, 0),
(364, 364, 1, 0),
(365, 365, 1, 0),
(366, 366, 1, 0),
(367, 367, 1, 0),
(368, 368, 1, 0),
(369, 369, 1, 0),
(370, 370, 1, 0),
(371, 371, 1, 0),
(372, 372, 1, 0),
(373, 373, 1, 0),
(374, 374, 1, 0),
(375, 375, 1, 0),
(376, 376, 1, 0),
(377, 377, 1, 0),
(378, 378, 1, 0),
(379, 379, 1, 0),
(380, 380, 1, 0),
(381, 381, 1, 0),
(382, 382, 1, 0),
(383, 383, 1, 0),
(384, 384, 1, 0),
(385, 385, 1, 0),
(386, 386, 1, 0),
(387, 387, 1, 0),
(388, 388, 1, 0),
(389, 389, 1, 0),
(390, 390, 1, 0),
(391, 391, 1, 0),
(392, 392, 1, 0),
(393, 393, 1, 0),
(394, 394, 1, 0),
(395, 395, 1, 0),
(396, 396, 1, 0),
(397, 397, 1, 0),
(398, 398, 1, 0),
(399, 399, 1, 0),
(400, 400, 1, 0),
(401, 401, 1, 0),
(402, 402, 1, 0),
(403, 403, 1, 0),
(404, 404, 1, 0),
(405, 405, 1, 0),
(406, 406, 1, 0),
(407, 407, 1, 0),
(408, 408, 1, 0),
(409, 409, 1, 0),
(410, 410, 1, 0),
(411, 411, 1, 0),
(412, 412, 1, 0),
(413, 413, 1, 0),
(414, 414, 1, 0),
(415, 415, 1, 0),
(416, 416, 1, 0),
(417, 417, 1, 0),
(418, 418, 1, 0),
(419, 419, 1, 0),
(420, 420, 1, 0),
(421, 421, 1, 0),
(422, 422, 1, 0),
(423, 423, 1, 0),
(424, 424, 1, 0),
(425, 425, 1, 0),
(426, 426, 1, 0),
(427, 427, 1, 0),
(428, 428, 1, 0),
(429, 429, 1, 0),
(430, 430, 1, 0),
(431, 431, 1, 0),
(432, 432, 1, 0),
(433, 433, 1, 0),
(434, 434, 1, 0),
(435, 435, 1, 0),
(436, 436, 1, 0),
(437, 437, 1, 0),
(438, 438, 1, 0),
(439, 439, 1, 0),
(440, 440, 1, 0),
(441, 441, 1, 0),
(442, 442, 1, 0),
(443, 443, 1, 0),
(444, 444, 1, 0),
(445, 445, 1, 0),
(446, 446, 1, 0),
(447, 447, 1, 0),
(448, 448, 1, 0),
(449, 449, 1, 0),
(450, 450, 1, 0),
(451, 451, 1, 0),
(452, 452, 1, 0),
(453, 453, 1, 0),
(454, 454, 1, 0),
(455, 455, 1, 0),
(456, 456, 1, 0),
(457, 457, 1, 0),
(458, 458, 1, 0),
(459, 459, 1, 0),
(460, 460, 1, 0),
(461, 461, 1, 0),
(462, 462, 1, 0),
(463, 463, 1, 0),
(464, 464, 1, 0),
(465, 465, 1, 0),
(466, 466, 1, 0),
(467, 467, 1, 0),
(468, 468, 1, 0),
(469, 469, 1, 0),
(470, 470, 1, 0),
(471, 471, 1, 0),
(472, 472, 1, 0),
(473, 473, 1, 0),
(474, 474, 1, 0),
(475, 475, 1, 0),
(476, 476, 1, 0),
(477, 477, 1, 0),
(478, 478, 1, 0),
(479, 479, 1, 0),
(480, 480, 1, 0),
(481, 481, 1, 0),
(482, 482, 1, 0),
(483, 483, 1, 0),
(484, 484, 1, 0),
(485, 485, 1, 0),
(486, 486, 1, 0),
(487, 487, 1, 0),
(488, 488, 1, 0),
(489, 489, 1, 0),
(490, 490, 1, 0),
(491, 491, 1, 0),
(492, 492, 1, 0),
(493, 493, 1, 0),
(494, 494, 1, 0),
(495, 495, 1, 0),
(496, 496, 1, 0),
(497, 497, 1, 0),
(498, 498, 1, 0),
(499, 499, 1, 0),
(500, 500, 1, 0),
(501, 501, 1, 0),
(502, 502, 1, 0),
(503, 503, 1, 0),
(504, 504, 1, 0),
(505, 505, 1, 0),
(506, 506, 1, 0),
(507, 507, 1, 0),
(508, 508, 1, 0),
(509, 509, 1, 0),
(510, 510, 1, 0),
(511, 511, 1, 0),
(512, 512, 1, 0),
(513, 513, 1, 0),
(514, 514, 1, 0),
(515, 515, 1, 0),
(516, 516, 1, 0),
(517, 517, 1, 0),
(518, 518, 1, 0),
(519, 519, 1, 0),
(520, 520, 1, 0),
(521, 521, 1, 0),
(522, 522, 1, 0),
(523, 523, 1, 0),
(524, 524, 1, 0),
(525, 525, 1, 0),
(526, 526, 1, 0),
(527, 527, 1, 0),
(528, 528, 1, 0),
(529, 529, 1, 0),
(530, 530, 1, 0),
(531, 531, 1, 0),
(532, 532, 1, 0),
(533, 533, 1, 0),
(534, 534, 1, 0),
(535, 535, 1, 0),
(536, 536, 1, 0),
(537, 537, 1, 0),
(538, 538, 1, 0),
(539, 539, 1, 0),
(540, 540, 1, 0),
(541, 541, 1, 0),
(542, 542, 1, 0),
(543, 543, 1, 0),
(544, 544, 1, 0),
(545, 545, 1, 0),
(546, 546, 1, 0),
(547, 547, 1, 0),
(548, 548, 1, 0),
(549, 549, 1, 0),
(550, 550, 1, 0),
(551, 551, 1, 0),
(552, 552, 1, 0),
(553, 553, 1, 0),
(554, 554, 1, 0),
(555, 555, 1, 0),
(556, 556, 1, 0),
(557, 557, 1, 0),
(558, 558, 1, 0),
(559, 559, 1, 0),
(560, 560, 1, 0),
(561, 561, 1, 0),
(562, 562, 1, 0),
(563, 563, 1, 0),
(564, 564, 1, 0),
(565, 565, 1, 0),
(566, 566, 1, 0),
(567, 567, 1, 0),
(568, 568, 1, 0),
(569, 569, 1, 0),
(570, 570, 1, 0),
(571, 571, 1, 0),
(572, 572, 1, 0),
(573, 573, 1, 0),
(574, 574, 1, 0),
(575, 575, 1, 0),
(576, 576, 1, 0),
(577, 577, 1, 0),
(578, 578, 1, 0),
(579, 579, 1, 0),
(580, 580, 1, 0),
(581, 581, 1, 0),
(582, 582, 1, 0),
(583, 583, 1, 0),
(584, 584, 1, 0),
(585, 585, 1, 0),
(586, 586, 1, 0),
(587, 587, 1, 0),
(588, 588, 1, 0),
(589, 589, 1, 0),
(590, 590, 1, 0),
(591, 591, 1, 0),
(592, 592, 1, 0),
(593, 593, 1, 0),
(594, 594, 1, 0),
(595, 595, 1, 0),
(596, 596, 1, 0),
(597, 597, 1, 0),
(598, 598, 1, 0),
(599, 599, 1, 0),
(600, 600, 1, 0),
(601, 601, 1, 0),
(602, 602, 1, 0),
(603, 603, 1, 0),
(604, 604, 1, 0),
(605, 605, 1, 0),
(606, 606, 1, 0),
(607, 607, 1, 0),
(608, 608, 1, 0),
(609, 609, 1, 0),
(610, 610, 1, 0),
(611, 611, 1, 0),
(612, 612, 1, 0),
(613, 613, 1, 0),
(614, 614, 1, 0),
(615, 615, 1, 0),
(616, 616, 1, 0),
(617, 617, 1, 0),
(618, 618, 1, 0),
(619, 619, 1, 0),
(620, 620, 1, 0),
(621, 621, 1, 0),
(622, 622, 1, 0),
(623, 623, 1, 0),
(624, 624, 1, 0),
(625, 625, 1, 0),
(626, 626, 1, 0),
(627, 627, 1, 0),
(628, 628, 1, 0),
(629, 629, 1, 0),
(630, 630, 1, 0),
(631, 631, 1, 0),
(632, 632, 1, 0),
(633, 633, 1, 0),
(634, 634, 1, 0),
(635, 635, 1, 0),
(636, 636, 1, 0),
(637, 637, 1, 0),
(638, 638, 1, 0),
(639, 639, 1, 0),
(640, 640, 1, 0),
(641, 641, 1, 0),
(642, 642, 1, 0),
(643, 643, 1, 0),
(644, 644, 1, 0),
(645, 645, 1, 0),
(646, 646, 1, 0),
(647, 647, 1, 0),
(648, 648, 1, 0),
(649, 649, 1, 0),
(650, 650, 1, 0),
(651, 651, 1, 0),
(652, 652, 1, 0),
(653, 653, 1, 0),
(654, 654, 1, 0),
(655, 655, 1, 0),
(656, 656, 1, 0),
(657, 657, 1, 0),
(658, 658, 1, 0),
(659, 659, 1, 0),
(660, 660, 1, 0),
(661, 661, 1, 0),
(662, 662, 1, 0),
(663, 663, 1, 0),
(664, 664, 1, 0),
(665, 665, 1, 0),
(666, 666, 1, 0),
(667, 667, 1, 0),
(668, 668, 1, 0),
(669, 669, 1, 0),
(670, 670, 1, 0),
(671, 671, 1, 0),
(672, 672, 1, 0),
(673, 673, 1, 0),
(674, 674, 1, 0),
(675, 675, 1, 0),
(676, 676, 1, 0),
(677, 677, 1, 0),
(678, 678, 1, 0),
(679, 679, 1, 0),
(680, 680, 1, 0),
(681, 681, 1, 0),
(682, 682, 1, 0),
(683, 683, 1, 0),
(684, 684, 1, 0),
(685, 685, 1, 0),
(686, 686, 1, 0),
(687, 687, 1, 0),
(688, 688, 1, 0),
(689, 689, 1, 0),
(690, 690, 1, 0),
(691, 691, 1, 0),
(692, 692, 1, 0),
(693, 693, 1, 0),
(694, 694, 1, 0),
(695, 695, 1, 0),
(696, 696, 1, 0),
(697, 697, 1, 0),
(698, 698, 1, 0),
(699, 699, 1, 0),
(700, 700, 1, 0),
(701, 701, 1, 0),
(702, 702, 1, 0),
(703, 703, 1, 0),
(704, 704, 1, 0),
(705, 705, 1, 0),
(706, 706, 1, 0),
(707, 707, 1, 0),
(708, 708, 1, 0),
(709, 709, 1, 0),
(710, 710, 1, 0),
(711, 711, 1, 0),
(712, 712, 1, 0),
(713, 713, 1, 0),
(714, 714, 1, 0),
(715, 715, 1, 0),
(716, 716, 1, 0),
(717, 717, 1, 0),
(718, 718, 1, 0),
(719, 719, 1, 0),
(720, 720, 1, 0),
(721, 721, 1, 0),
(722, 722, 1, 0),
(723, 723, 1, 0),
(724, 724, 1, 0),
(725, 725, 1, 0),
(726, 726, 1, 0),
(727, 727, 1, 0),
(728, 728, 1, 0),
(729, 729, 1, 0),
(730, 730, 1, 0),
(731, 731, 1, 0),
(732, 732, 1, 0),
(733, 733, 1, 0),
(734, 734, 1, 0),
(735, 735, 1, 0),
(736, 736, 1, 0),
(737, 737, 1, 0),
(738, 738, 1, 0),
(739, 739, 1, 0),
(740, 740, 1, 0),
(741, 741, 1, 0),
(742, 742, 1, 0),
(743, 743, 1, 0),
(744, 744, 1, 0),
(745, 745, 1, 0),
(746, 746, 1, 0),
(747, 747, 1, 0),
(748, 748, 1, 0),
(749, 749, 1, 0),
(750, 750, 1, 0),
(751, 751, 1, 0),
(752, 752, 1, 0),
(753, 753, 1, 0),
(754, 754, 1, 0),
(755, 755, 1, 0),
(756, 756, 1, 0),
(757, 757, 1, 0),
(758, 758, 1, 0),
(759, 759, 1, 0),
(760, 760, 1, 0),
(761, 761, 1, 0),
(762, 762, 1, 0),
(763, 763, 1, 0),
(764, 764, 1, 0),
(765, 765, 1, 0),
(766, 766, 1, 0),
(767, 767, 1, 0),
(768, 768, 1, 0),
(769, 769, 1, 0),
(770, 770, 1, 0),
(771, 771, 1, 0),
(772, 772, 1, 0),
(773, 773, 1, 0),
(774, 774, 1, 0),
(775, 775, 1, 0),
(776, 776, 1, 0),
(777, 777, 1, 0),
(778, 778, 1, 0),
(779, 779, 1, 0),
(780, 780, 1, 0),
(781, 781, 1, 0),
(782, 782, 1, 0),
(783, 783, 1, 0),
(784, 784, 1, 0),
(785, 785, 1, 0),
(786, 786, 1, 0),
(787, 787, 1, 0),
(788, 788, 1, 0),
(789, 789, 1, 0),
(790, 790, 1, 0),
(791, 791, 1, 0),
(792, 792, 1, 0),
(793, 793, 1, 0),
(794, 794, 1, 0),
(795, 795, 1, 0),
(796, 796, 1, 0),
(797, 797, 1, 0),
(798, 798, 1, 0),
(799, 799, 1, 0),
(800, 800, 1, 0),
(801, 801, 1, 0),
(802, 802, 1, 0),
(803, 803, 1, 0),
(804, 804, 1, 0),
(805, 805, 1, 0),
(806, 806, 1, 0),
(807, 807, 1, 0),
(808, 808, 1, 0),
(809, 809, 1, 0),
(810, 810, 1, 0),
(811, 811, 1, 0),
(812, 812, 1, 0),
(813, 813, 1, 0),
(814, 814, 1, 0),
(815, 815, 1, 0),
(816, 816, 1, 0),
(817, 817, 1, 0),
(818, 818, 1, 0),
(819, 819, 1, 0),
(820, 820, 1, 0),
(821, 821, 1, 0),
(822, 822, 1, 0),
(823, 823, 1, 0),
(824, 824, 1, 0),
(825, 825, 1, 0),
(826, 826, 1, 0),
(827, 827, 1, 0),
(828, 828, 1, 0),
(829, 829, 1, 0),
(830, 830, 1, 0),
(831, 831, 1, 0),
(832, 832, 1, 0),
(833, 833, 1, 0),
(834, 834, 1, 0),
(835, 835, 1, 0),
(836, 836, 1, 0),
(837, 837, 1, 0),
(838, 838, 1, 0),
(839, 839, 1, 0),
(840, 840, 1, 0),
(841, 841, 1, 0),
(842, 842, 1, 0),
(843, 843, 1, 0),
(844, 844, 1, 0),
(845, 845, 1, 0),
(846, 846, 1, 0),
(847, 847, 1, 0),
(848, 848, 1, 0),
(849, 849, 1, 0),
(850, 850, 1, 0),
(851, 851, 1, 0),
(852, 852, 1, 0),
(853, 853, 1, 0),
(854, 854, 1, 0),
(855, 855, 1, 0),
(856, 856, 1, 0),
(857, 857, 1, 0),
(858, 858, 1, 0),
(859, 859, 1, 0),
(860, 860, 1, 0),
(861, 861, 1, 0),
(862, 862, 1, 0),
(863, 863, 1, 0),
(864, 864, 1, 0),
(865, 865, 1, 0),
(866, 866, 1, 0),
(867, 867, 1, 0),
(868, 868, 1, 0),
(869, 869, 1, 0),
(870, 870, 1, 0),
(871, 871, 1, 0),
(872, 872, 1, 0),
(873, 873, 1, 0),
(874, 874, 1, 0),
(875, 875, 1, 0),
(876, 876, 1, 0),
(877, 877, 1, 0),
(878, 878, 1, 0),
(879, 879, 1, 0),
(880, 880, 1, 0),
(881, 881, 1, 0),
(882, 882, 1, 0),
(883, 883, 1, 0),
(884, 884, 1, 0),
(885, 885, 1, 0),
(886, 886, 1, 0),
(887, 887, 1, 0),
(888, 888, 1, 0),
(889, 889, 1, 0),
(890, 890, 1, 0),
(891, 891, 1, 0),
(892, 892, 1, 0),
(893, 893, 1, 0),
(894, 894, 1, 0),
(895, 895, 1, 0),
(896, 896, 1, 0),
(897, 897, 1, 0),
(898, 898, 1, 0),
(899, 899, 1, 0),
(900, 900, 1, 0),
(901, 901, 1, 0),
(902, 902, 1, 0),
(903, 903, 1, 0),
(904, 904, 1, 0),
(905, 905, 1, 0),
(906, 906, 1, 0),
(907, 907, 1, 0),
(908, 908, 1, 0),
(909, 909, 1, 0),
(910, 910, 1, 0),
(911, 911, 1, 0),
(912, 912, 1, 0),
(913, 913, 1, 0),
(914, 914, 1, 0),
(915, 915, 1, 0),
(916, 916, 1, 0),
(917, 917, 1, 0),
(918, 918, 1, 0),
(919, 919, 1, 0),
(920, 920, 1, 0),
(921, 921, 1, 0),
(922, 922, 1, 0),
(923, 923, 1, 0),
(924, 924, 1, 0),
(925, 925, 1, 0),
(926, 926, 1, 0),
(927, 927, 1, 0),
(928, 928, 1, 0),
(929, 929, 1, 0),
(930, 930, 1, 0),
(931, 931, 1, 0),
(932, 932, 1, 0),
(933, 933, 1, 0),
(934, 934, 1, 0),
(935, 935, 1, 0),
(936, 936, 1, 0),
(937, 937, 1, 0),
(938, 938, 1, 0),
(939, 939, 1, 0),
(940, 940, 1, 0),
(941, 941, 1, 0),
(942, 942, 1, 0),
(943, 943, 1, 0),
(944, 944, 1, 0),
(945, 945, 1, 0),
(946, 946, 1, 0),
(947, 947, 1, 0),
(948, 948, 1, 0),
(949, 949, 1, 0),
(950, 950, 1, 0),
(951, 951, 1, 0),
(952, 952, 1, 0),
(953, 953, 1, 0),
(954, 954, 1, 0),
(955, 955, 1, 0),
(956, 956, 1, 0),
(957, 957, 1, 0),
(958, 958, 1, 0),
(959, 959, 1, 0),
(960, 960, 1, 0),
(961, 961, 1, 0),
(962, 962, 1, 0),
(963, 963, 1, 0),
(964, 964, 1, 0),
(965, 965, 1, 0),
(966, 966, 1, 0),
(967, 967, 1, 0),
(968, 968, 1, 0),
(969, 969, 1, 0),
(970, 970, 1, 0),
(971, 971, 1, 0),
(972, 972, 1, 0),
(973, 973, 1, 0),
(974, 974, 1, 0),
(975, 975, 1, 0),
(976, 976, 1, 0),
(977, 977, 1, 0),
(978, 978, 1, 0),
(979, 979, 1, 0),
(980, 980, 1, 0),
(981, 981, 1, 0),
(982, 982, 1, 0),
(983, 983, 1, 0),
(984, 984, 1, 0),
(985, 985, 1, 0),
(986, 986, 1, 0),
(987, 987, 1, 0),
(988, 988, 1, 0),
(989, 989, 1, 0),
(990, 990, 1, 0),
(991, 991, 1, 0),
(992, 992, 1, 0),
(993, 993, 1, 0),
(994, 994, 1, 0),
(995, 995, 1, 0),
(996, 996, 1, 0),
(997, 997, 1, 0),
(998, 998, 1, 0),
(999, 999, 1, 0),
(1000, 1000, 1, 0);