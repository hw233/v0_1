/**
 * Created by xiazhengxin on 2016/1/12 3:52.
 */
var async = require("async");
var login = require("../code/model/login");
var scoreMall = require("../code/model/scoreMall");
var practiceTotalConsume = require("../code/model/practiceTotalConsume");
var activityData = require("../code/model/activityData");
var jutil = require("../code/utils/jutil");
var bitUtil = require("../code/alien/db/bitUtil");
var mysql = require("../code/alien/db/mysql");
var crypto = require("crypto");
//var mysql = require("mysql");


/*
 var res = {
 "issueId": 1451926800,
 "day": "2016111",
 "top": 1,
 "reward": [{"id": "honor", "count": 2000}, {"id": "153201", "count": 50}]
 };
 var rewardList = res["reward"];
 var forEachRes = [];//foreach数据
 for (var key in rewardList) {
 forEachRes.push({"id": rewardList[key]["id"], "count": rewardList[key]["count"]})
 }
 console.log(forEachRes);
 */

/*var xiaolu = {"aa": undefined};
 console.log(JSON.stringify(xiaolu));

 async.series([function (cb) {
 console.log("111111111111111");
 setTimeout(cb, 5000);
 }, function (cb) {
 console.log("222222222222222");
 setTimeout(cb, 5000);
 }], function (err, res) {
 console.log("caonima");
 });*/

/*
 var userList = [38671511141, 38671500489, 38671530487, 38671499503, 38671497954, 38671520758, 38671511556, 38671490663, 38671494623, 38671500525, 38671527498, 38671531882, 38671530186, 38671509748, 38671498226, 38671517795, 38671492081, 38671485513, 38671496495, 38671505546, 38671492556, 38671514583, 38671513870, 38671507264, 38671511582, 38671523421, 38671529975, 38671491455, 38671529985, 38671505729, 38671501178, 38671494473, 38671522244, 38671494213, 38671519861, 38671506391, 38671517345, 38671531347, 38671488921, 38671527696, 38671493768, 38671498545, 38671521392, 38671506366, 38671514785, 38671500255, 38671526231, 38671526883, 38671510068, 38688273987, 38688279492, 38688296739, 38688289942, 38688260871, 38688302380, 38688284565, 38688261276, 38688282602, 38688286277, 38688270614, 38688282877, 38688285413, 38688291743, 38688266515, 38688303335, 38688275136, 38688284232, 38688262048, 38688278161, 38688286462, 38688310475, 38688286804, 38688305073, 38688293983, 38688283088, 38688310573, 38688263812, 38688279543, 38688305803, 38688300421, 38688267727, 38688289279, 38688270026, 38688305731, 38688295498, 38688292920, 38688310996, 38688304958, 38688277549, 38688292185, 38688301179, 38688307345, 38688276884, 38688269063, 38688302860, 38688286649, 38688309559, 38688304929, 38688306454, 38688293453, 38705067254, 38705058639, 38705066860, 38705076715, 38705072780, 38705076737, 38705054300, 38705038675, 38705045452, 38705072739, 38705061688, 38705073244, 38705070363, 38705063029, 38705059413, 38705070464, 38705068120, 38705062857, 38705070206, 38705076283, 38705066177, 38705053186, 38705076287, 38705075064, 38705077137, 38705043540, 38705073164, 38705062643, 38705067650, 38705063483, 38705075792, 38705065538, 38705055622, 38705040716, 38705061907, 38705061054, 38705066098, 38705066949, 38705062835, 38705052547, 38705075362, 38705078030, 38705070625, 38705061895, 38705063281, 38705065411, 38705045396, 38705050736, 38705061305, 38705077548, 38705062545, 38705067202, 38721825859, 38721819518, 38721842109, 38721839623, 38721842927, 38721841720, 38721845283, 38721839192, 38721842348, 38721852763, 38721837531, 38721831086, 38721832694, 38721816591, 38721845705, 38721848294, 38721832012, 38721849236, 38721844210, 38721851273, 38721853515, 38721841155, 38721842371, 38721853617, 38721819386, 38721827489, 38721820779, 38721825368, 38721844717, 38721819271, 38721837217, 38721841672, 38721842438, 38721853340, 38721828577, 38721851647, 38721834710, 38721842840, 38721817157, 38721843736, 38721851077, 38721816234, 38721839201, 38721844439, 38721841045, 38721841365, 38721847029, 38721832117, 38721833009, 38721841612, 38721848222, 38738608308, 38738596558, 38738599503, 38738606826, 38738611542, 38738603100, 38738598692, 38738604438, 38738615212, 38738596234, 38738592037, 38738599999, 38738611885, 38738597297, 38738592966, 38738594233, 38738598916, 38738613393, 38738605032, 38738612988, 38738612872, 38755391319, 38755386413, 38755391499, 38755379990, 38755394452, 38755385238, 38755380302, 38755375764, 38755375003, 38755378947, 38755372197, 38755369704, 38755389256, 38755385329, 38755383416, 38755392350, 38755386822, 38755384076, 38755381160, 38772149363, 38772161882, 38772169322, 38772167032, 38772164190, 38772167689, 38772154148, 38772166043, 38772163691, 38772154985, 38772148242, 38772155180, 38772149384, 38772148248, 38772160573, 38772150409, 38772168067, 38772163331, 38788926837, 38788932519, 38788952778, 38788943896, 38788923692, 38788930884, 38788933486, 38788942608, 38788933680, 38788950232, 38788946389, 38788950539, 38788930731, 38788945107, 38788935380, 38788946309, 38788927329, 38788947808, 38788928157, 38788942649, 38788943882, 38788944374, 38788951219, 38788930748, 38788932384, 38788949885, 38788951837, 38788937415, 38788953350, 38788947857, 38788942559, 38788948215, 38788945042, 38788945478, 38788925903, 38788927856, 38788946298, 38788942345, 38788947884, 38805716120, 38805716758, 38805712058, 38805707318, 38805700666, 38805718562, 38805709105, 38805717087, 38805717888, 38805716717, 38805724804, 38805703777, 38805716647, 38805720685, 38805720482, 38805716381, 38805708928, 38805703189, 38805724264, 38805719920, 38805716427, 38805710268, 38805707538, 38805719822, 38805704791, 38805704330, 38805713163, 38805720949, 38805709080, 38805714635, 38805719266, 38805719110, 38805724188, 38805713044, 38805723568, 38805703849, 38805718817, 38805721883, 38822488090, 38822486803, 38822481412, 38822482900, 38822487689, 38822481764, 38822481009, 38822477849, 38822491609, 38822487546, 38822489555, 38822484088, 38822486023, 38822479720, 38822492987, 38822484304, 38822483407, 38822477973, 38822478825, 38839260948, 38839267390, 38839256334, 38839269362, 38839265005, 38839265205, 38839255809, 38839260913, 38839261480, 38839270902, 38839264040, 38839261599, 38839267284, 38839264682, 38856056806, 38856059783, 38856041749, 38856053791, 38856037906, 38856047454, 38856035676, 38856050910, 38856036288, 38856058071, 38856035876, 38856056984, 38856033327, 38856033635, 38856037575, 38856059636, 38856056360, 38856042746, 38856033531, 38856033753, 38856033958, 38856038406, 38856039405, 38856041716, 38856048286, 38856052590, 38856059463, 38856048037, 38856048912, 38872814005, 38872838633, 38872813062, 38872832917, 38872813294, 38872825785, 38872821592, 38872820962, 38872834529, 38872820730, 38872823175, 38872826893, 38872841278, 38872828090, 38872842304, 38872842553, 38872838133, 38872812951, 38872835027, 38872826784, 38889596194, 38889599439, 38889607820, 38889591300, 38889607806, 38889593627, 38889600246, 38889589561, 38889604613, 38889602602, 38889594499, 38889602200, 38889608388, 38889606702, 38889604415, 38889599756, 38889610623, 38889590702, 38906365696, 38906376225, 38906366856, 38906377754, 38906375951, 38906381187, 38906370668, 38906376808, 38906381116, 38906372277, 38906368526, 38906377624, 38906365383, 38906372456, 38906380544, 38906379096, 38906371828, 38906371429, 38906366147, 38906381625, 38906373837, 38906381715, 38923150471, 38923148500, 38923162365, 38923156099, 38923143579, 38923148261, 38923143772, 38923141782, 38923156100, 38923158444, 38923150772, 38923155469, 38923162566, 38923148089, 38923151131, 38923150517, 38923146268, 38923150639, 38923157195, 38923153035, 38939922873, 38939920050, 38939920404, 38939938165, 38939930549, 38939936326, 38939920465, 38939934617, 38939926211, 38939925028, 38939937602, 38939924230, 38939937784, 38939927611, 38939932641, 38939937497, 38956712129, 38956708323, 38956699989, 38956700720, 38956716238, 38956697759, 38956704191, 38956698089, 38956707952, 38956709373, 38956699902, 38956715096, 38956705743, 38956698562, 38956698775, 38956709315, 38956717134, 38956698170, 38956701924, 38956701899, 38956712311, 38956706313, 38956710466, 38956718089, 38973474837, 38973486137, 38973474955, 38973481481, 38973473138, 38973488964, 38973489042, 38973484061, 38973488479, 38973475999, 38973480323, 38973482260, 38973473166, 38973482264, 38973475701, 38973487081, 38973482245, 38973477808, 38990275559, 38990275725, 38990263462, 38990268669, 38990275505, 38990273842, 38990255487, 38990271746, 38990272720, 38990268782, 38990268246, 38990254576, 38990273470, 38990268145, 38990275211, 38990251453, 38990252198, 38990274857, 38990257899, 38990255396, 39007030209, 39007041699, 39007041055, 39007027937, 39007030691, 39007031818, 39007036787, 39007035493, 39007032809, 39007034916, 39007034004, 39007032845, 39007029139, 39023822674, 39023822032, 39023813823, 39023810517, 39023806321, 39023815741, 39023821297, 39023822675, 39023810418, 39023810477, 39023813104, 39023816320, 39023817910, 39023816852, 39023806103, 39040597531, 39040600954, 39040601116, 39040593549, 39040585022, 39040596391, 39040582356, 39040597287, 39040582652, 39040587410, 39040601042, 39040596721, 39040599577, 39040593170, 39040595763, 39057377572, 39057373406, 39057373960, 39057369839, 39057374312, 39057360359, 39057379652, 39057363963, 39057360151, 39057372751, 39057378783, 39057379319, 39057369187, 39057368482, 39074145188, 39074148152, 39074139776, 39074139297, 39074136898, 39074137242, 39074152489, 39074136841, 39074148106, 39074149215, 39074150295, 39074151508, 39090936552, 39090933119, 39090936789, 39090937948, 39090936821, 39090933170, 39090931065, 39090925220, 39107700647, 39107700343, 39107694159, 39107709943, 39107708631, 39107693627, 39107693853, 39107693619, 39124470277, 39124476940, 39124488435, 39124470146, 39124478787, 39124479287, 39124484101, 39124472117, 39124470365, 39124481518, 39124472567, 39124488993, 39124486504, 39141266491, 39141266998, 39141275843, 39141272753, 39141271166, 39158027636, 39158030871, 39158036115, 39158037692, 39158022355, 39158022206, 39158022806, 39158025252, 39158027905, 39158028973, 39158029349, 39158031541, 39158034255, 39158031959, 39158031351, 39158025503, 39158023421, 39174807807, 39174801662, 39174801402, 39174799420, 39174813827, 39174811073, 39174812712, 39174812244, 39174811478, 39174802722, 39174812328, 39174811485, 39174809180, 39174808105, 39174813385, 39191592380, 39191578950, 39191592676, 39191591090, 39191588371, 39191582058, 39191582212, 39191586328, 39191591826, 39191588077, 39191589832, 39191584214, 39191582233, 39191586246, 39191585473, 39191578427, 39191590189, 39191586570, 39191591022, 39208362587, 39208356566, 39208355032, 39208360755, 39208359533, 39208354897, 39208355201, 39208356271, 39208354395, 39208360466, 39208356238, 39208356667, 39208358706, 39208365903, 39225143652, 39225137611, 39225132892, 39225139151, 39225139952, 39225143227, 39225132837, 39225144040, 39225140694, 39225139937, 39225144216, 39225131835, 39225139822, 39225141364, 39241921944, 39241923606, 39241917078, 39241922901, 39241921567, 39241912266, 39241924776, 39241919871, 39258690700, 39258694005, 39258695963, 39258693406, 39258688673, 39258686265, 39258696120, 39258685630, 39258688027, 39258695407, 39275477975, 39275471855, 39275482223, 39275479738, 39275471750, 39275471402, 39275476747, 39275462763, 39275471852, 39275471129, 39275477186, 39275482553, 39275475231, 39275463959, 39275462700, 39275479434, 39275470027, 39275481923, 39275471597, 39275478510, 39275478888, 39275469624, 39275472051, 39292273427, 39292270245, 39292264449, 39292246465, 39292270844, 39292241390, 39292252845, 39292245974, 39292262122, 39292249529, 39292257163, 39292254749, 39292261235, 39292250574, 39292258246, 39292274709, 39292273565, 39292257329, 39292241038, 39292246001, 39292256973, 39292269624, 39292261450, 39292245969, 39292242982, 39292267670, 39292246348, 39292260489, 39292242832, 39292265207, 39292250291, 39292277106, 39309020302, 39309033668, 39309030705, 39309018427, 39309027054, 39309034611, 39309019400, 39309035687, 39309017632, 39309030940, 39309026932, 39309020380, 39309026025, 39309017481, 39309033681, 39309017121, 39309018979, 39309034685, 39309026890, 39309026070, 39309021226, 39309034243, 39325805831, 39325797335, 39325797190, 39325811402, 39325810253, 39325799471, 39325803246, 39325800590, 39325812333, 39325794393, 39325807231, 39325804504, 39325803795, 39325802260, 39325808592, 39325809907, 39325796761, 39325806413, 39325804391, 39325811702, 39325800697, 39342585829, 39342574829, 39342572583, 39342574215, 39342582421, 39342581332, 39342584988, 39342572759, 39342574678, 39342583080, 39342583903, 39342584168, 39342576097, 39342584026, 39342583626, 39342582707, 39342573187, 39342577162, 39342580004, 39342584872, 39342585022, 39342585339, 39342585023, 39342581252, 39342575349, 39342573845, 39342585666, 39359364385, 39359358289, 39359364996, 39359349729, 39359359229, 39359363298, 39359366682, 39359362267, 39359361519, 39359355350, 39359361579, 39359365321, 39359364669, 39359364481, 39359355744, 39359367443, 39359366328, 39359367415, 39359351921, 39359356956, 39359365774, 39359363346, 39359359891, 39359357421, 39359366304, 39376128900, 39376128268, 39376140235, 39376128669, 39376140473, 39376132427, 39376126733, 39376139648, 39376136563, 39376137843, 39376136578, 39376131882, 39376138248, 39376132161, 39376140144, 39376139469, 39392904351, 39392903295, 39392916116, 39392905993, 39392914239, 39392903316, 39392910234, 39392908560, 39392906278, 39392906224, 39392904484, 39392914012, 39392916304, 39392910587, 39392914163, 39392911836, 39409681167, 39409681606, 39409689474, 39409681436, 39409687551, 39409694326, 39409687996, 39409681665, 39409683969, 39409689122, 39409683541, 39409689370, 39409681785, 39409686698, 39409688567, 39409693969, 39409689496, 39409693167, 39409681700, 39409687908, 39409687437, 39409692272, 39409693685, 39409685599, 39409680517, 39409693699, 39409685583, 39409682397, 39409688969, 39426465746, 39426458926, 39426458483, 39426458153, 39426459469, 39426467738, 39426468845, 39426467113, 39426470134, 39426461953, 39426461413, 39426458827, 39426467734, 39426457658, 39426465262, 39426457664, 39426467550, 39426459800, 39426462889, 39426458666, 39426463521, 39426466314, 39426467339, 39426462135, 39443234889, 39443236780, 39443243991, 39443243210, 39443235396, 39443243642, 39443243108, 39443242950, 39443239488, 39443238074, 39443236018, 39443240044, 39443250226, 39443237040, 39443242906, 39443238678, 39443241900, 39443239376, 39443234988, 39443236850, 39443245735, 39443242793, 39443237914, 39443241476, 39443246346, 39443245916, 39443241157, 39443247292, 39443244134, 39443237053, 39443245446, 39443246984, 39443237080, 39443249312, 39443237845, 39443241932, 39443247473, 39460030190, 39460029745, 39460028869, 39460019271, 39460028101, 39460029368, 39460021549, 39460030821, 39460016577, 39460024071, 39460016862, 39460020887, 39460021865, 39460030216, 39460030437, 39460029759, 39460020608, 39460027502, 39460030229, 39460013536, 39460013653, 39460021396, 39460022543, 39460024314, 39460017506, 39460028416, 39460029776, 39460027230, 39460025755, 39460023907, 39460014668, 39460028909, 39460028500, 39460015721, 39460024958, 39460012409, 39460027982, 39460027243, 39460031031, 39460014917, 39460017635, 39460024323, 39460022416, 39460018545, 39476793547, 39476795755, 39476806195, 39476800286, 39476804178, 39476800443, 39476795676, 39476796429, 39476795280, 39476800666, 39476791807, 39476797383, 39476790761, 39476797370, 39476797405, 39476790997, 39476790879, 39476804423, 39476801810, 39476794922, 39476801866, 39476804507, 39476797832, 39476792634, 39476795925, 39476800474, 39476796273, 39476803216, 39476792552, 39476801685, 39476797751, 39476806056, 39476804934, 39476805415, 39476798994, 39493578746, 39493576757, 39493570335, 39493575918, 39493569766, 39493566830, 39493567967, 39493568729, 39493571366, 39493569886, 39493580096, 39493568162, 39493568151, 39493579076, 39493576703, 39493570065, 39493576838, 39493576035, 39493578344, 39493573249, 39493579770, 39493572814, 39493577954, 39493568329, 39493574130, 39493567334, 39493570975, 39493572000, 39510344089, 39510343714, 39510353140, 39510344708, 39510348119, 39510350149, 39510354376, 39510354929, 39510351109, 39510345876, 39510343989, 39510353221, 39510354425, 39510345168, 39510346427, 39510352600, 39510356124, 39510345216, 39510343883, 39510355838, 39510345224, 39510351971, 39510352054, 39510351252, 39510353248, 39510349334, 39510348178, 39510353627, 39527121213, 39527121432, 39527121648, 39527121667, 39527122888, 39527134557, 39527133406, 39527121133, 39527123713, 39527131728, 39527125854, 39527136265, 39527124777, 39527125804, 39527121025, 39527129832, 39527134199, 39527124409, 39527122966, 39527126100, 39527132665, 39527123537, 39527121285, 39527127036];

 async.eachSeries(userList, function (user, esCb) {
 async.series([function (cb) {
 console.log(user);
 //封号
 login.setStopAccount(user, function (err, res) {
 cb(err);
 });

 //解封
 //login.delStopAccount(user, function (err, res) {
 //    cb(err);
 //});
 }, function (cb) {
 scoreMall.setPoint(user, 0, cb);
 }, function (cb) {
 scoreMall.setDataout(user, cb);
 }, function (cb) {
 //practiceTotalConsume.addRecord(user, -10000, cb);
 var ACTIVITY_KEY = activityData.TOTAL_CONSUME;
 var rewardsGetMask = jutil.bitSetTrue(0, 0);
 activityData.updateActivityData(user,
 ACTIVITY_KEY,
 {
 "data": 0,
 "status": rewardsGetMask
 }, cb
 );
 }], function (err, res) {
 esCb(err);
 });
 }, function (err, res) {
 console.log("OK", err);
 });*/

//var i = "100000000000";
//
//var addType = ["attackAddition","defenceAddition","bloodAddition","spiritAddition"];
//var returnData = [];
//var lowerKey = addType.splice(Math.floor(Math.random() * addType.length),1);
//var middleKey = addType.splice(Math.floor(Math.random() * addType.length),1);
//var highKey = addType.splice(Math.floor(Math.random() * addType.length),1);
//returnData.push({"type":lowerKey[0],"num": 0.03,"needStar":3},{"type":middleKey[0],"num": 0.15,"needStar":15},{"type":highKey[0],"num": 0.3,"needStar":30});
//console.log(jutil.day(), bitUtil.parseUserUid(39527137923));
//var a = "sssss";
//var b = a.length > 4 ? "1" : a;
//console.log(b);
var aList = {
 "1": {
  "userUid": "12901699657",
  "formationUid": 1,
  "heroUid": 1418342652969217,
  "skill2": "",
  "skill3": "",
  "equip1": "",
  "equip2": "",
  "equip3": "",
  "card1": "",
  "card2": "",
  "card3": "",
  "card4": "",
  "card5": "",
  "card6": ""
 },
 "2": {
  "userUid": "12901699657",
  "formationUid": 2,
  "heroUid": 1418342485197057,
  "skill2": "",
  "skill3": "",
  "equip1": "",
  "equip2": "",
  "equip3": "",
  "card1": "",
  "card2": "",
  "card3": "",
  "card4": "",
  "card5": "",
  "card6": ""
 },
 "3": {
  "userUid": "12901699657",
  "formationUid": 3,
  "heroUid": 1420088137744641,
  "skill2": "",
  "skill3": "",
  "equip1": "",
  "equip2": "",
  "equip3": "",
  "card1": "",
  "card2": "",
  "card3": "",
  "card4": "",
  "card5": "",
  "card6": ""
 },
 "4": {
  "userUid": "12901699657",
  "formationUid": 4,
  "heroUid": 1420088070635777,
  "skill2": "",
  "skill3": "",
  "equip1": "",
  "equip2": "",
  "equip3": "",
  "card1": "",
  "card2": "",
  "card3": "",
  "card4": "",
  "card5": "",
  "card6": ""
 }
};

var bList = {
 "1": {
  "userUid": 12901699657,
  "formationUid": 1,
  "heroUid": 1418342652969217,
  "skill2": 0,
  "skill3": 0,
  "equip1": 0,
  "equip2": 1420061378085122,
  "equip3": 0,
  "card1": 0,
  "card2": 0,
  "card3": 0,
  "card4": 0,
  "card5": 0,
  "card6": 0
 },
 "2": {
  "userUid": 12901699657,
  "formationUid": 2,
  "heroUid": 1418342485197057,
  "skill2": 0,
  "skill3": 0,
  "equip1": 0,
  "equip2": 1420061378085121,
  "equip3": 0,
  "card1": 0,
  "card2": 0,
  "card3": 0,
  "card4": 0,
  "card5": 0,
  "card6": 0
 },
 "3": {
  "userUid": 12901699657,
  "formationUid": 3,
  "heroUid": 1418342585860353,
  "skill2": 0,
  "skill3": 0,
  "equip1": 0,
  "equip2": 1418534802424066,
  "equip3": 0,
  "card1": 0,
  "card2": 0,
  "card3": 0,
  "card4": 0,
  "card5": 0,
  "card6": 0
 },
 "4": {
  "userUid": 12901699657,
  "formationUid": 4,
  "heroUid": 1418342736855297,
  "skill2": 0,
  "skill3": 0,
  "equip1": 0,
  "equip2": 0,
  "equip3": 0,
  "card1": 0,
  "card2": 0,
  "card3": 0,
  "card4": 0,
  "card5": 0,
  "card6": 0
 },
 "5": {
  "userUid": 12901699657,
  "formationUid": 5,
  "heroUid": 1418342803964161,
  "skill2": 0,
  "skill3": 0,
  "equip1": 0,
  "equip2": 0,
  "equip3": 0,
  "card1": 0,
  "card2": 0,
  "card3": 0,
  "card4": 0,
  "card5": 0,
  "card6": 0
 }
};
var aaa = 1;
switch (aaa.toString()) {
 case "0":
  console.log("00000000");
  break;
 case "1":
  console.log(1111);
  break;
 default:
  console.log(22222);
  break;
}
var str = "caonima";
console.log(str.length,str.toString().substr(0,111),jutil.randomString());
console.log(bitUtil.parseUserUid("77393302508 "),n);
return;
var d = new Date();
var n = d.getMinutes();
console.log(mysql.game("38721814529"));
bList = [{"a":"v"}];
for(var hehe in bList){
 console.log(bList[hehe]);
}
return;
var qs = require("querystring");
var obj = {"{\"order_id\":\"1493023742906385757\",\"mem_id\":\"105757\",\"app_id\":\"60125\",\"money\":\"10.00\",\"order_status\":\"2\",\"paytime\":\"1493023742\",\"attach\":\"85916123139_95902371651e0f631c69f01a96023447_1\",\"sign\":\"ed6f7089273642c668fbd4649f63b031\"}":""};
var obj2 = {"order_id":"1493023742906385757","mem_id":"105757","app_id":"60125","money":"10.00","order_status":"2","paytime":"1493023742","attach":"85916123139_95902371651e0f631c69f01a96023447_1","sign":"ed6f7089273642c668fbd4649f63b031"};
console.log(JSON.stringify(qs.parse(JSON.stringify(obj2))));
return;
console.log(JSON.parse(Object.keys(obj)[0]));

var a = '[111,222]';
var aObj = JSON.parse(a);
console.log(aObj);
console.log(aObj[0]);
console.log(bitUtil.parseUserUid("77779186278"));
var product_id = "0000001111";
console.log(product_id.indexOf("5"));
var aa = {"1":""};
delete aa["2"];
console.log(aa);
delete aa["1"];
console.log(aa);
return;
if(isNaN(product_id)){
 product_id = product_id.substr(product_id.length-1,1);
}
console.log(product_id);
return;
var date = new Date(jutil.now() * 1000);
var curMonth = date.getMonth() + 1;
var curDate = date.getDate();
console.log(curMonth,curDate);

for (var a in aList) {
 for (var b in bList) {
  if (bList[b]["heroUid"] == aList[a]["heroUid"]) {
   aList[a] = bList[b];
   aList[a]["formationUid"] = a;
   break;
  }
 }
}
console.log(bitUtil.parseUserUid("26625442674"));
// 是否使用HTTPS
var echoString = "httpshttphttpshttphttpshttp";
var p = "usaaoffnew";
var https = ["usaaoffnew"];
if (https.indexOf(p) == -1) {
 echoString = echoString.replace(/https/g, "http");
}
console.log(echoString);
return;
var fs = require('fs');
require("../code/alien/log/console");
console.log(fs.existsSync("./../../../script.md"));
console.log(fs.existsSync("_cron"));
console.log(b,jutil.day(),bitUtil.parseUserUid("39460024069"));
return;
var aaaa = {"a":"b"};
console.log(aaaa);
delete aaaa["a"];
console.log(aaaa);
//console.log(Date.parse("2014-12-01T00:00:00")/1000);
console.error("caonima");
console.log("hahaha","rinima");
var a = bitUtil.createUserUid("d",255,1234);
var b = bitUtil.createUserUid("c",255,1234);
console.log(a,b);
var json = JSON.parse('{"1":"2"}');
console.log(json["1"],86400 * 2.5,86400 * 2);

var a = "22213213232";
console.log(a.toString().length);
var a = {"aa":"bb"};
for(var b in a){
 console.log(a[b],b);
}
async.eachSeries({"1":3,"2":4},function (a, b) {
console.log(a);
 b();
},function () {
 //return;
});
return;
var targets = "_a_s_v__".split("_");
for(var i in targets){
 if(targets[i] == ""){
  continue;
 }
 console.log(targets[i]);
}
return;

return;

var configManager = require("../code/config/configManager");
var configData = configManager.createConfig(25937626369);
var mixNeedExpConfig = configData.getConfig("mixNeedExp");
function fuseExpToLevel(config, exp, lel) {
 for (var i = 0; i < 999; i++) {
  var itemValue = config[i];
  if (itemValue == null) return lel;
  if (exp < itemValue) return i;
 }
 return lel;
}
console.log(fuseExpToLevel(mixNeedExpConfig,28633,0));
var newPower = configData.getPvpPower(5, 1472679890, jutil.now(), 15);
console.log(newPower);
var a = "123548    ";
console.log(a);
console.log(a.trim());
console.log(a.toString().trim());
var e = 1475784290;
function hehe() {
 var time = e - jutil.now();
 var number = bitUtil.leftShift(100, 24) + time;
 console.log(number);
 setTimeout(hehe,1000);
}
var number = bitUtil.rightShift(number - 0, 24);
console.log(number);
setInterval(hehe,1000);
return;


var isAll = 0;
var b = isAll?(isAll == 2?"country":"loginFromUserUid"):"domain";
console.log(b,jutil.day(),bitUtil.parseUserUid("12901699648"));
var d = [26004692763,
 18069061646,
 26021464961,
 27397195551,
 17297411336,
 12901679150];
console.log(d.indexOf("55851352065") != -1);

var c = [1,2,3,4,5,6,7,8,9,10];
c.splice(c.indexOf(9), 1);//移除9脉
console.log(c);
console.log(499/100);
var j = JSON.parse('{"ErrorCode":"1","ErrorDesc":"有效"}');
console.log(j);
console.log(j["ErrorCode"] == "1");

var crypto = require("crypto");
var password = 123456;
password = password.toString();
//password = crypto.createHash('md5').update(password).digest('hex');
console.log(password.substr(0,2));

var l = {"a":"b"};
var ll = Object.keys(l);
for(var key in ll){
 console.log(ll[key]);
}

var str = "13acb62fcc6f08c94eb0b27bc97d4473e3_34879840736INGAME150.00TWDMCARCC00000011742A0000gametrees";
console.log(encodeURI(str));
console.log(encodeURIComponent(str));
console.log(jutil.urlEncodePhpStyle(str));
var hash = crypto.createHash('sha256').update(str).digest('hex');
console.log(hash);


//var string = "agent_oid=2016033114093418201amount=200.00currency=RMBgame=longzhugold=80info=f0e7fe062f19070d03769dad7120e614#64441286660#20000#1orderid=2016033114093418201paytype=LUMIpvc=1roleid=So.Losrolename=64441286660server=1timestamp=1459404573userid=" + "ja%asd^d31241^asfa";
//var generateSign = crypto.createHash('md5').update(string, "utf8").digest('hex');
//console.log(generateSign.toLowerCase());
//console.log("da02f416f6e3092f6ecc765a625f591d");
//console.log(generateSign);

/*
 var res = {
 "eatList": [{
 "id": "153639",
 "count": 132
 },
 {
 "id": "153640",
 "count": 0
 },
 {
 "id": "153641",
 "count": 0
 }],
 "debrisList": [{
 "id": "153632",
 "debrisCount": 0
 },
 {
 "id": "153633",
 "debrisCount": 0
 },
 {
 "id": "153634",
 "debrisCount": 0
 },
 {
 "id": "153635",
 "debrisCount": 0
 },
 {
 "id": "153636",
 "debrisCount": 0
 },
 {
 "id": "153637",
 "debrisCount": 0
 },
 {
 "id": "153638",
 "debrisCount": 0
 }],
 "ballList": [{
 "lv": 13,
 "exp": 45,
 "point": 0,
 "payPoint": 13,
 "holeList": [{
 "id": "15",
 "lv": 2,
 "lock": 0,
 "type": "defence",
 "value": 140
 },
 {
 "id": "5",
 "lv": 2,
 "lock": 0,
 "type": "spirit",
 "value": 80
 },
 {
 "id": "13",
 "lv": 3,
 "lock": 0,
 "type": "defence",
 "value": 120
 },
 {
 "id": "3",
 "lv": 1,
 "lock": 0,
 "type": "attack",
 "value": 70
 },
 {
 "id": -1,
 "lv": 0,
 "lock": 0,
 "type": 0,
 "value": 0
 }]
 },
 {
 "lv": 12,
 "exp": 56,
 "point": 0,
 "payPoint": 12,
 "holeList": [{
 "id": "9",
 "lv": 1,
 "lock": 0,
 "type": "hp",
 "value": 60
 },
 {
 "id": -1,
 "lv": 0,
 "lock": 0,
 "type": 0,
 "value": 0
 },
 {
 "id": "12",
 "lv": 2,
 "lock": 0,
 "type": "defence",
 "value": 60
 },
 {
 "id": "1",
 "lv": 5,
 "lock": 0,
 "type": "attack",
 "value": 200
 },
 {
 "id": -2,
 "lv": 0,
 "lock": 0,
 "type": 0,
 "value": 0
 }]
 },
 {
 "lv": 8,
 "exp": 6,
 "point": 0,
 "payPoint": 8,
 "holeList": [{
 "id": -1,
 "lv": 0,
 "lock": 0,
 "type": 0,
 "value": 0
 },
 {
 "id": "8",
 "lv": 2,
 "lock": 0,
 "type": "hp",
 "value": 80
 },
 {
 "id": "4",
 "lv": 2,
 "lock": 0,
 "type": "spirit",
 "value": 60
 },
 {
 "id": -2,
 "lv": 0,
 "lock": 0,
 "type": 0,
 "value": 0
 },
 {
 "id": -1,
 "lv": 0,
 "lock": 0,
 "type": 0,
 "value": 0
 }]
 },
 {
 "lv": 8,
 "exp": 15,
 "point": 0,
 "payPoint": 8,
 "holeList": [{
 "id": -2,
 "lv": 0,
 "lock": 0,
 "type": 0,
 "value": 0
 },
 {
 "id": "9",
 "lv": 2,
 "lock": 0,
 "type": "hp",
 "value": 120
 },
 {
 "id": "0",
 "lv": 1,
 "lock": 0,
 "type": "attack",
 "value": 30
 },
 {
 "id": "8",
 "lv": 1,
 "lock": 0,
 "type": "hp",
 "value": 40
 },
 {
 "id": -1,
 "lv": 0,
 "lock": 0,
 "type": 0,
 "value": 0
 }]
 },
 {
 "lv": -1,
 "exp": 0,
 "point": 0,
 "payPoint": 0,
 "holeList": [{
 "id": -2,
 "lv": 0,
 "lock": 0,
 "type": 0,
 "value": 0
 },
 {
 "id": -2,
 "lv": 0,
 "lock": 0,
 "type": 0,
 "value": 0
 },
 {
 "id": -2,
 "lv": 0,
 "lock": 0,
 "type": 0,
 "value": 0
 },
 {
 "id": -2,
 "lv": 0,
 "lock": 0,
 "type": 0,
 "value": 0
 },
 {
 "id": -2,
 "lv": 0,
 "lock": 0,
 "type": 0,
 "value": 0
 }]
 },
 {
 "lv": -1,
 "exp": 0,
 "point": 0,
 "payPoint": 0,
 "holeList": [{
 "id": -2,
 "lv": 0,
 "lock": 0,
 "type": 0,
 "value": 0
 },
 {
 "id": -2,
 "lv": 0,
 "lock": 0,
 "type": 0,
 "value": 0
 },
 {
 "id": -2,
 "lv": 0,
 "lock": 0,
 "type": 0,
 "value": 0
 },
 {
 "id": -2,
 "lv": 0,
 "lock": 0,
 "type": 0,
 "value": 0
 },
 {
 "id": -2,
 "lv": 0,
 "lock": 0,
 "type": 0,
 "value": 0
 }]
 },
 {
 "lv": -1,
 "exp": 0,
 "point": 0,
 "payPoint": 0,
 "holeList": [{
 "id": -2,
 "lv": 0,
 "lock": 0,
 "type": 0,
 "value": 0
 },
 {
 "id": -2,
 "lv": 0,
 "lock": 0,
 "type": 0,
 "value": 0
 },
 {
 "id": -2,
 "lv": 0,
 "lock": 0,
 "type": 0,
 "value": 0
 },
 {
 "id": -2,
 "lv": 0,
 "lock": 0,
 "type": 0,
 "value": 0
 },
 {
 "id": -2,
 "lv": 0,
 "lock": 0,
 "type": 0,
 "value": 0
 }]
 }],
 "payIngot": 0
 };


 var ballList = res["ballList"];
 var payLockPoint;
 var inx = false;
 for(var i in ballList){
 for(var j in ballList[i]["holeList"]){
 payLockPoint = ballList[i]["holeList"][j]["payLockPoint"];
 if(payLockPoint == undefined){
 ballList[i]["holeList"][j]["payLockPoint"] = 0;
 //payLockPoint = 0;
 inx = true;
 }
 }
 }
 if(inx){
 res["ballList"] = ballList;
 console.log(JSON.stringify(ballList));
 }else{
 returnData = res["arg"];
 //cb(null);
 }*/

//var jsonStr = "{\"eatList\":[{\"id\":\"153639\",\"count\":17},{\"id\":\"153640\",\"count\":0},{\"id\":\"153641\",\"count\":0}],\"debrisList\":[{\"id\":\"153632\",\"debrisCount\":57},{\"id\":\"153633\",\"debrisCount\":41},{\"id\":\"153634\",\"debrisCount\":4},{\"id\":\"153635\",\"debrisCount\":20},{\"id\":\"153636\",\"debrisCount\":0},{\"id\":\"153637\",\"debrisCount\":0},{\"id\":\"153638\",\"debrisCount\":0}],\"ballList\":[{\"lv\":13,\"exp\":0,\"point\":13,\"payPoint\":0,\"holeList\":[{\"id\":-2,\"lv\":0,\"lock\":0,\"type\":0,\"value\":0,\"payLockPoint\":0},{\"id\":-2,\"lv\":0,\"lock\":0,\"type\":0,\"value\":0,\"payLockPoint\":0},{\"id\":-2,\"lv\":0,\"lock\":0,\"type\":0,\"value\":0,\"payLockPoint\":0},{\"id\":-2,\"lv\":0,\"lock\":0,\"type\":0,\"value\":0,\"payLockPoint\":0},{\"id\":-2,\"lv\":0,\"lock\":0,\"type\":0,\"value\":0,\"payLockPoint\":0},]},{\"lv\":13,\"exp\":0,\"point\":13,\"payPoint\":0,\"holeList\":[{\"id\":-2,\"lv\":0,\"lock\":0,\"type\":0,\"value\":0,\"payLockPoint\":0},{\"id\":-2,\"lv\":0,\"lock\":0,\"type\":0,\"value\":0,\"payLockPoint\":0},{\"id\":-2,\"lv\":0,\"lock\":0,\"type\":0,\"value\":0,\"payLockPoint\":0},{\"id\":-2,\"lv\":0,\"lock\":0,\"type\":0,\"value\":0,\"payLockPoint\":0},{\"id\":-2,\"lv\":0,\"lock\":0,\"type\":0,\"value\":0,\"payLockPoint\":0},]},{\"lv\":7,\"exp\":21,\"point\":7,\"payPoint\":0,\"holeList\":[{\"id\":-2,\"lv\":0,\"lock\":0,\"type\":0,\"value\":0,\"payLockPoint\":0},{\"id\":-2,\"lv\":0,\"lock\":0,\"type\":0,\"value\":0,\"payLockPoint\":0},{\"id\":-2,\"lv\":0,\"lock\":0,\"type\":0,\"value\":0,\"payLockPoint\":0},{\"id\":-2,\"lv\":0,\"lock\":0,\"type\":0,\"value\":0,\"payLockPoint\":0},{\"id\":-2,\"lv\":0,\"lock\":0,\"type\":0,\"value\":0,\"payLockPoint\":0},]},{\"lv\":9,\"exp\":1,\"point\":9,\"payPoint\":0,\"holeList\":[{\"id\":-2,\"lv\":0,\"lock\":0,\"type\":0,\"value\":0,\"payLockPoint\":0},{\"id\":-2,\"lv\":0,\"lock\":0,\"type\":0,\"value\":0,\"payLockPoint\":0},{\"id\":-2,\"lv\":0,\"lock\":0,\"type\":0,\"value\":0,\"payLockPoint\":0},{\"id\":-2,\"lv\":0,\"lock\":0,\"type\":0,\"value\":0,\"payLockPoint\":0},{\"id\":-2,\"lv\":0,\"lock\":0,\"type\":0,\"value\":0,\"payLockPoint\":0},]},{\"lv\":-1,\"exp\":0,\"point\":0,\"payPoint\":0,\"holeList\":[{\"id\":-2,\"lv\":0,\"lock\":0,\"type\":0,\"value\":0,\"payLockPoint\":0},{\"id\":-2,\"lv\":0,\"lock\":0,\"type\":0,\"value\":0,\"payLockPoint\":0},{\"id\":-2,\"lv\":0,\"lock\":0,\"type\":0,\"value\":0,\"payLockPoint\":0},{\"id\":-2,\"lv\":0,\"lock\":0,\"type\":0,\"value\":0,\"payLockPoint\":0},{\"id\":-2,\"lv\":0,\"lock\":0,\"type\":0,\"value\":0,\"payLockPoint\":0},]},{\"lv\":-1,\"exp\":0,\"point\":0,\"payPoint\":0,\"holeList\":[{\"id\":-2,\"lv\":0,\"lock\":0,\"type\":0,\"value\":0,\"payLockPoint\":0},{\"id\":-2,\"lv\":0,\"lock\":0,\"type\":0,\"value\":0,\"payLockPoint\":0},{\"id\":-2,\"lv\":0,\"lock\":0,\"type\":0,\"value\":0,\"payLockPoint\":0},{\"id\":-2,\"lv\":0,\"lock\":0,\"type\":0,\"value\":0,\"payLockPoint\":0},{\"id\":-2,\"lv\":0,\"lock\":0,\"type\":0,\"value\":0,\"payLockPoint\":0},]},{\"lv\":-1,\"exp\":0,\"point\":0,\"payPoint\":0,\"holeList\":[{\"id\":-2,\"lv\":0,\"lock\":0,\"type\":0,\"value\":0,\"payLockPoint\":0},{\"id\":-2,\"lv\":0,\"lock\":0,\"type\":0,\"value\":0,\"payLockPoint\":0},{\"id\":-2,\"lv\":0,\"lock\":0,\"type\":0,\"value\":0,\"payLockPoint\":0},{\"id\":-2,\"lv\":0,\"lock\":0,\"type\":0,\"value\":0,\"payLockPoint\":0},{\"id\":-2,\"lv\":0,\"lock\":0,\"type\":0,\"value\":0,\"payLockPoint\":0},]}],\"payIngot\":700,\"point\":0}";

//console.log(JSON.parse(jsonStr));

//获取签名数据
//function getSignData(postData) {
//    var keys = [];
//    for (var k in postData) {
//        keys.push(k);
//    }
//    keys.sort();
//    console.log("keys:" + keys);
//    var returnStr = "";
//    for (var i = 0; i < keys.length; i++) {
//        var key = keys[i];
//        if (key == "sign")
//            continue;
//        returnStr += postData[key];
//    }
//    console.log("signData:" + returnStr);
//    return returnStr;
//}
//
//var json = {"userId":"47","appId":"1001","serverId":"3","cpOrderId":"","orderId":"1001_2016032299554810","goodsId":"1","goodsCount":"100","price":"USD","priceUnit":"USD","extParams":"","createdTime":"1458627628","finishTime":"1458627641","sign":"1c59e6536116701f0eff65073a8450ed"};
//
//console.log(getSignData(json));