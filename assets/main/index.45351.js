window.__require = function e(t, i, a) {
function s(o, c) {
if (!i[o]) {
if (!t[o]) {
var r = o.split("/");
r = r[r.length - 1];
if (!t[r]) {
var h = "function" == typeof __require && __require;
if (!c && h) return h(r, !0);
if (n) return n(r, !0);
throw new Error("Cannot find module '" + o + "'");
}
o = r;
}
var u = i[o] = {
exports: {}
};
t[o][0].call(u.exports, function(e) {
return s(t[o][1][e] || e);
}, u, u.exports, e, t, i, a);
}
return i[o].exports;
}
for (var n = "function" == typeof __require && __require, o = 0; o < a.length; o++) s(a[o]);
return s;
}({
Achievement: [ function(e, t) {
"use strict";
cc._RF.push(t, "6102ajNFmNNHL/1Tz61kEMw", "Achievement");
var i = e("BaseModel"), a = e("AppPlatform"), s = {
try_tutorial: {
ios_id: "try_tutorial",
android_id: "CgkIqcGvwoAeEAIQKg"
},
try_request: {
ios_id: "try_request",
android_id: "CgkIqcGvwoAeEAIQEw"
},
try_unlock: {
ios_id: "try_unlock",
android_id: "CgkIqcGvwoAeEAIQDw"
},
try_fishing: {
ios_id: "try_fishing",
android_id: "CgkIqcGvwoAeEAIQGw"
},
try_artifact: {
ios_id: "try_artifact",
android_id: "CgkIqcGvwoAeEAIQDQ"
},
try_dungeon: {
ios_id: "try_dungeon",
android_id: "CgkIqcGvwoAeEAIQFg"
},
progress_area0: {
ios_id: "progress_area1",
android_id: "CgkIqcGvwoAeEAIQKQ"
},
progress_area1: {
ios_id: "progress_area2",
android_id: "CgkIqcGvwoAeEAIQOA"
},
progress_area2_0: {
ios_id: "progress_area3_0",
android_id: "CgkIqcGvwoAeEAIQEA"
},
progress_area2_1: {
ios_id: "progress_area3_1",
android_id: "CgkIqcGvwoAeEAIQCw"
},
progress_area3: {
ios_id: "progress_area4",
android_id: "CgkIqcGvwoAeEAIQGA"
},
progress_area4: {
ios_id: "progress_area5",
android_id: "CgkIqcGvwoAeEAIQJA"
},
fishing_spot0: {
ios_id: "fishing_spot0",
android_id: "CgkIqcGvwoAeEAIQIQ"
},
fishing_spot1: {
ios_id: "fishing_spot1",
android_id: "CgkIqcGvwoAeEAIQHw"
},
fishing_spot2: {
ios_id: "fishing_spot2",
android_id: "CgkIqcGvwoAeEAIQOg"
},
fishing_spot3: {
ios_id: "fishing_spot3",
android_id: "CgkIqcGvwoAeEAIQLw"
},
fishing_spot4: {
ios_id: "fishing_spot4",
android_id: "CgkIqcGvwoAeEAIQRg"
},
fishing_spot5: {
ios_id: "fishing_spot5",
android_id: "CgkIqcGvwoAeEAIQJQ"
},
fishing_spot6: {
ios_id: "fishing_spot6",
android_id: "CgkIqcGvwoAeEAIQLQ"
},
fishing_spot7: {
ios_id: "fishing_spot7",
android_id: "CgkIqcGvwoAeEAIQJw"
},
artifact_area1: {
ios_id: "artifact_area1",
android_id: "CgkIqcGvwoAeEAIQMQ"
},
artifact_area2: {
ios_id: "artifact_area2",
android_id: "CgkIqcGvwoAeEAIQPw"
},
artifact_area3: {
ios_id: "artifact_area3",
android_id: "CgkIqcGvwoAeEAIQEQ"
},
artifact_area4: {
ios_id: "artifact_area4",
android_id: "CgkIqcGvwoAeEAIQDg"
},
artifact_area5: {
ios_id: "artifact_area5",
android_id: "CgkIqcGvwoAeEAIQIA"
},
warp_area1_center: {
ios_id: "warp_area1_center",
android_id: "CgkIqcGvwoAeEAIQQA"
},
warp_area1_right: {
ios_id: "warp_area1_right",
android_id: "CgkIqcGvwoAeEAIQPA"
},
warp_area1_left: {
ios_id: "warp_area1_left",
android_id: "CgkIqcGvwoAeEAIQQQ"
},
warp_area1_up: {
ios_id: "warp_area1_up",
android_id: "CgkIqcGvwoAeEAIQRA"
},
warp_area1_down: {
ios_id: "warp_area1_down",
android_id: "CgkIqcGvwoAeEAIQIg"
},
warp_area2_house1: {
ios_id: "warp_area2_house1",
android_id: "CgkIqcGvwoAeEAIQDA"
},
warp_area2_private: {
ios_id: "warp_area2_private",
android_id: "CgkIqcGvwoAeEAIQNQ"
},
warp_area2_left: {
ios_id: "warp_area2_left",
android_id: "CgkIqcGvwoAeEAIQBQ"
},
warp_area2_house2: {
ios_id: "warp_area2_house2",
android_id: "CgkIqcGvwoAeEAIQNg"
},
warp_area2_up: {
ios_id: "warp_area2_up",
android_id: "CgkIqcGvwoAeEAIQLA"
},
warp_area3_center: {
ios_id: "warp_area3_center",
android_id: "CgkIqcGvwoAeEAIQBg"
},
warp_area3_right: {
ios_id: "warp_area3_right",
android_id: "CgkIqcGvwoAeEAIQIw"
},
warp_area3_left: {
ios_id: "warp_area3_left",
android_id: "CgkIqcGvwoAeEAIQFA"
},
warp_area3_under: {
ios_id: "warp_area3_under",
android_id: "CgkIqcGvwoAeEAIQBw"
},
warp_area4_bottom: {
ios_id: "warp_area4_bottom",
android_id: "CgkIqcGvwoAeEAIQCQ"
},
warp_area4_island: {
ios_id: "warp_area4_island",
android_id: "CgkIqcGvwoAeEAIQOQ"
},
warp_area4_lake: {
ios_id: "warp_area4_lake",
android_id: "CgkIqcGvwoAeEAIQHA"
},
warp_area5_ladder: {
ios_id: "warp_area5_ladder",
android_id: "CgkIqcGvwoAeEAIQGQ"
},
warp_area5_underpass: {
ios_id: "warp_area5_underpass",
android_id: "CgkIqcGvwoAeEAIQFw"
},
warp_area5_garden: {
ios_id: "warp_area5_garden",
android_id: "CgkIqcGvwoAeEAIQKA"
},
warp_area5_town: {
ios_id: "warp_area5_town",
android_id: "CgkIqcGvwoAeEAIQMw"
},
buy_house0: {
ios_id: "buy_house0",
android_id: "CgkIqcGvwoAeEAIQFQ"
},
buy_house1: {
ios_id: "buy_house1",
android_id: "CgkIqcGvwoAeEAIQPQ"
},
buy_house2: {
ios_id: "buy_house2",
android_id: "CgkIqcGvwoAeEAIQCA"
},
buy_house3: {
ios_id: "buy_house3",
android_id: "CgkIqcGvwoAeEAIQQw"
},
buy_house4: {
ios_id: "buy_house4",
android_id: "CgkIqcGvwoAeEAIQNA"
},
buy_house5: {
ios_id: "buy_house5",
android_id: "CgkIqcGvwoAeEAIQHg"
},
buy_house6: {
ios_id: "buy_house6",
android_id: "CgkIqcGvwoAeEAIQCg"
},
buy_house7: {
ios_id: "buy_house7",
android_id: "CgkIqcGvwoAeEAIQQg"
},
buy_house8: {
ios_id: "buy_house8",
android_id: "CgkIqcGvwoAeEAIQMg"
},
lv_resident_a: {
ios_id: "lv_resident_a",
android_id: "CgkIqcGvwoAeEAIQMA"
},
lv_resident_b: {
ios_id: "lv_resident_b",
android_id: "CgkIqcGvwoAeEAIQHQ"
},
lv_resident_c: {
ios_id: "lv_resident_c",
android_id: "CgkIqcGvwoAeEAIQJg"
},
lv_resident_d: {
ios_id: "lv_resident_d",
android_id: "CgkIqcGvwoAeEAIQRQ"
},
lv_resident_e: {
ios_id: "lv_resident_e",
android_id: "CgkIqcGvwoAeEAIQPg"
},
lv_resident_f: {
ios_id: "lv_resident_f",
android_id: "CgkIqcGvwoAeEAIQNw"
},
lv_resident_g: {
ios_id: "lv_resident_g",
android_id: "CgkIqcGvwoAeEAIQLg"
},
lv_resident_h: {
ios_id: "lv_resident_h",
android_id: "CgkIqcGvwoAeEAIQEg"
},
lv_resident_i: {
ios_id: "lv_resident_i",
android_id: "CgkIqcGvwoAeEAIQGg"
},
ending_normal: {
ios_id: "ending_normal",
android_id: "CgkIqcGvwoAeEAIQKw"
},
ending_true: {
ios_id: "ending_true",
android_id: "CgkIqcGvwoAeEAIQOw"
}
}, n = cc.Class({
extends: i,
init: function(e) {
this._super(e, "Achievement");
this.achievementData = s;
for (var t in this.achievementData) {
this.achievementData[t].percent = 0;
this.achievementData[t].submitted = !1;
}
},
load: function() {
for (var e in this.achievementData) {
this.achievementData[e].percent = this.loadNumber(e + ".percent", 0);
this.achievementData[e].submitted = this.loadBoolean(e + ".submitted", !1);
}
},
reset: function() {
for (var e in this.achievementData) {
this.achievementData[e].percent = 0;
this.saveNumber(e + ".percent", 0);
this.achievementData[e].submitted = !1;
this.saveBoolean(e + ".submitted", !1);
}
},
is_correct_tag: function(e) {
return e in this.achievementData;
},
get_progress: function(e) {
return this.is_correct_tag(e) ? this.achievementData[e].percent : 0;
},
set_progress: function(e, t) {
if (!this.is_correct_tag(e)) return !1;
if (-1 === (t = this.validation_progress(t))) return !1;
if (t > this.achievementData[e].percent) {
this.achievementData[e].percent = t;
this.saveNumber(e + ".percent", t);
return !0;
}
return !1;
},
is_max_progress: function(e) {
return !!this.is_correct_tag(e) && this.achievementData[e].percent >= 100;
},
validation_progress: function(e) {
return (e = Math.floor(e)) < 0 || e > 100 ? -1 : e;
},
get_achievement_id: function(e) {
if (this.is_correct_tag(e)) {
if (a.isIOS()) return this.achievementData[e].ios_id;
if (a.isAndroid()) return this.achievementData[e].android_id;
if (a.isWebTest()) return this.achievementData[e].ios_id;
}
return null;
},
is_submitted: function(e) {
return !!this.is_correct_tag(e) && this.achievementData[e].submitted;
},
IsLogined: function() {
return a.IsGameServiceLogined();
},
Login: function() {
a.GameServiceSignIn();
},
ShowUI: function() {
a.ShowAchievement();
},
Progress: function(e, t) {
if (this.is_correct_tag(e) && (this.set_progress(e, t) || !this.is_submitted(e) && t >= 100)) {
if (!cc.sys.isNative) return;
if (!this.game.flagGooglePCGames && !a.IsNetworked()) return;
if (!a.IsGameServiceLogined()) return;
var i = this.get_achievement_id(e);
if (i && a.ProgressAchievement(i, t) && t >= 100) {
this.achievementData[e].submitted = !0;
this.saveBoolean(e + ".submitted", !0);
}
}
},
Unlock: function(e) {
if (this.is_correct_tag(e) && (this.set_progress(e, 100) || !this.is_submitted(e))) {
if (!cc.sys.isNative) return;
if (!this.game.flagGooglePCGames && !a.IsNetworked()) return;
if (!a.IsGameServiceLogined()) return;
var t = this.get_achievement_id(e);
if (t && a.UnlockAchievement(t)) {
this.achievementData[e].submitted = !0;
this.saveBoolean(e + ".submitted", !0);
}
}
},
ProgressAreaTagToAchievementTag: function(e) {
return "progress_" + e.toLowerCase();
},
FishingSpotTagToAchievementTag: function(e) {
return "fishing_" + e.toLowerCase();
},
ArtifactTagToAchievementTag: function(e) {
var t = this.game.getArtifactIdByTag(e);
return t < 0 ? "" : "artifact_area" + (t + 1);
},
WarpPortalTagToAchievementTag: function(e) {
return "warp_" + e.toLowerCase();
},
HouseTagToAchievementTag: function(e) {
return "buy_" + e.toLowerCase();
},
ResidentTagToAchievementTag: function(e) {
return "lv_" + e.toLowerCase();
},
LogAllAchievementProgress: function() {
for (var e in this.achievementData) {
var t = this.achievementData[e].percent;
cc.log(e + ": " + t + "%");
}
}
});
t.exports = n;
cc._RF.pop();
}, {
AppPlatform: "AppPlatform",
BaseModel: "BaseModel"
} ],
AdsState: [ function(e, t) {
"use strict";
cc._RF.push(t, "ba893IOytlFtaOIY2HFCb6t", "AdsState");
var i = cc.Enum({
NONE: 0,
LOADING: 1,
READY: 2,
ERROR: 3
});
t.exports = i;
cc._RF.pop();
}, {} ],
AnimalExplorers: [ function(e, t) {
"use strict";
cc._RF.push(t, "888cbqgoThGurR83dvhzjGI", "AnimalExplorers");
var i = e("Gimmick"), a = e("PopupCallback"), s = e("CommandType"), n = e("ExplorerState"), o = e("CheckMe"), c = e("CheckType"), r = e("Game"), h = [ "Coin", "Coin100" ];
cc.Class({
extends: i,
properties: {
popupSelectType: cc.Prefab,
popupSelectTime: cc.Prefab,
popupResult: cc.Prefab,
checkme: o,
balloon: cc.Node,
gaugeRemainTime: cc.Node,
explorerTag: "",
spriteAnimal: cc.Sprite,
spriteFrameIdle: cc.SpriteFrame,
seDrop: cc.AudioClip,
textWhatKind: cc.String,
textSelectType: [ cc.String ],
textHowLong: cc.String,
textSelectTime: [ cc.String ]
},
onLoad: function() {
this.explorerData = r.explorer.GetExplorerData(this.explorerTag);
this.explorerData || this.node.destroy();
this.prevState = this.explorerData.state;
this.selectType = -1;
this.selectTime = -1;
this.itemTag = "";
this.itemNum = 0;
this.posAnimal = this.spriteAnimal.node.getPosition();
this.posDropBase = this.spriteAnimal.node.parent.convertToWorldSpaceAR(this.posAnimal);
this.balloon.active = !1;
this.coinIdx = 0;
this.coinNums = [];
var e = this.node.parent.getComponent("ResourceManager");
e && e.RegistResource(this);
this.change_view();
this.change_animal();
},
CheckStatePoll: function(e) {
r.explorer.CheckStatePoll(e);
this.prevState === n.WORKING && this.explorerData.state === n.RETURN && this.show_return_expedition();
this.prevState = this.explorerData.state;
},
update: function() {
this.release_items();
},
getAvailableCommand: function() {
return s.EVENT;
},
execCommand: function(e) {
if (e === s.EVENT) if (this.explorerData.state === n.IDLE && this.itemNum <= 0) {
this.reset_param();
this.show_select_type();
} else this.explorerData.state === n.WORKING ? this.show_balloon() : this.explorerData.state === n.RETURN && this.show_result();
},
collisionExit: function() {
this.hide_balloon();
},
SetType: function(e) {
this.selectType = e;
},
SetTime: function(e) {
this.selectTime = e;
},
ReleaseItems: function() {
this.flagReleaseItems = !0;
},
reset_param: function() {
this.selectType = -1;
this.selectTime = -1;
},
change_view: function() {
this.explorerData.state === n.IDLE ? this.checkme.ShowWithIcon(c.ME) : this.explorerData.state === n.RETURN ? this.checkme.ShowWithIcon(c.OK) : this.checkme.Hide();
},
change_animal: function() {
this.spriteAnimal.node.opacity = this.explorerData.state !== n.WORKING ? 255 : 0;
},
show_start_expedition: function() {
this.spriteAnimal.node.getComponent(cc.Animation).play();
this.change_view();
},
show_return_expedition: function() {
this.spriteAnimal.node.getComponent(cc.Animation).stop();
this.spriteAnimal.spriteFrame = this.spriteFrameIdle;
this.spriteAnimal.node.opacity = 255;
this.spriteAnimal.node.setPosition(this.posAnimal);
this.change_view();
},
create_popup: function(e) {
if (e) {
var t = cc.instantiate(e);
if (t) {
r.scene.camera.node.addChild(t);
var i = t.getComponent(a);
if (i) return i;
}
}
return null;
},
show_select_type: function() {
var e = this.create_popup(this.popupSelectType);
if (e) {
e.SetInfo(this, r.getLocalizedStr(this.textWhatKind), r.getLocalizedStr(this.textSelectType[0]), r.getLocalizedStr(this.textSelectType[1]), r.getLocalizedStr(this.textSelectType[2]));
e.SetCallbackClose(this.close_select_type, this);
e.Show();
}
},
close_select_type: function() {
-1 != this.selectType && this.show_select_time();
},
show_select_time: function() {
var e = this.create_popup(this.popupSelectTime);
if (e) {
e.SetInfo(this, r.getLocalizedStr(this.textHowLong), r.getLocalizedStr(this.textSelectTime[0]), r.getLocalizedStr(this.textSelectTime[1]), r.getLocalizedStr(this.textSelectTime[2]));
e.SetCallbackClose(this.close_select_time, this);
e.Show();
}
},
close_select_time: function() {
if (-1 != this.selectTime) {
r.explorer.StartExpedition(this.explorerTag, this.selectType, this.selectTime);
this.show_start_expedition();
if (r.explorer.IsAvailableNotification() && !r.explorer.IsFirstSetting()) {
r.scene.manager.ShowNotificationPopup();
r.explorer.DoneFirstSetting();
}
}
},
show_balloon: function() {
if (!this.balloon.active) {
var e = r.explorer.GetRemainData(this.explorerTag);
e && (this.gaugeRemainTime.scaleX = e.scale);
this.balloon.active = !0;
this.balloon.scale = 0;
this.balloon.runAction(cc.scaleTo(.2, 1));
}
},
hide_balloon: function() {
this.balloon.stopAllActions();
this.balloon.runAction(cc.sequence(cc.scaleTo(.1, 0), cc.callFunc(this.hide_finish, this)));
},
hide_finish: function() {
this.balloon.active = !1;
},
show_result: function() {
var e = this.create_popup(this.popupResult);
if (e) {
e.SetInfo(this, this.spriteFrameIdle, r.getLocalizedStr(this.textSelectType[this.explorerData.selectType]), r.getLocalizedStr(this.textSelectTime[this.explorerData.selectTime]), this.explorerData.rewardTag, this.explorerData.rewardNum);
e.SetCallbackClose(this.close_result, this);
e.Show();
}
},
close_result: function() {
if (this.flagReleaseItems) {
this.itemTag = this.explorerData.rewardTag;
this.itemNum = this.explorerData.rewardNum;
"Coin" === this.itemTag && this.check_coin_split(this.itemNum);
r.explorer.CompleteMission(this.explorerTag);
this.checkme.Hide();
}
this.flagReleaseItems = !1;
},
check_coin_split: function(e) {
this.coinIdx = 0;
this.coinNums = [];
this.coinNums[0] = e % 100;
this.coinNums[1] = Math.floor(e / 100);
if (this.coinNums[0] < 50 && this.coinNums[1] >= 1) {
this.coinNums[0] += 100;
this.coinNums[1]--;
}
this.check_coin_next();
},
check_coin_next: function() {
if (this.coinNums.length <= 0 || this.coinIdx >= this.coinNums.length) return !1;
this.itemTag = h[this.coinIdx];
this.itemNum = this.coinNums[this.coinIdx];
this.coinIdx++;
return !0;
},
release_items: function() {
if (this.itemNum > 0) {
var e = r.scene.manager.AddDropItem(this.itemTag, r.scene.node);
if (e) {
e.node.setPosition(this.node.parent.convertToNodeSpaceAR(this.posDropBase));
r.sound.playSE(this.seDrop);
this.drop(e);
}
this.itemNum--;
}
if (this.itemNum <= 0) {
this.itemTag = "";
this.itemNum = 0;
if (this.check_coin_next()) return;
this.change_view();
}
},
drop: function(e) {
var t = 20 + 70 * Math.random(), i = 6.28 * Math.random(), a = cc.v2(Math.cos(i) * t, Math.sin(i) * t);
e.node.runAction(cc.sequence(cc.jumpBy(.6, a, 80, 1), cc.callFunc(e.drop_end, e)));
}
});
cc._RF.pop();
}, {
CheckMe: "CheckMe",
CheckType: "CheckType",
CommandType: "CommandType",
ExplorerState: "ExplorerState",
Game: "Game",
Gimmick: "Gimmick",
PopupCallback: "PopupCallback"
} ],
Animal: [ function(e, t) {
"use strict";
cc._RF.push(t, "8afc6uwKQNOiJpYNWyVZtxD", "Animal");
var i = e("Walker"), a = cc.Enum({
IDLE: 0,
WALK: 1
});
cc.Class({
extends: i,
properties: {
idleSec: 3,
animeIdle: [ cc.AnimationClip ],
walkSec: 3,
animeWalk: [ cc.AnimationClip ]
},
onLoad: function() {
this._super();
this.animation = this.node.getComponent(cc.Animation);
this.walkState = a.IDLE;
this.walkCount = 0;
this.walkVec = cc.v2();
},
start: function() {
this.next_action();
},
update: function(e) {
this._super(e);
this.walkState == a.WALK && this.move(this.walkVec, 1) && this.change_anime();
this.walkCount--;
this.walkCount <= 0 && this.next_action();
},
next_action: function() {
if (this.walkState == a.IDLE) {
var e = 6.28 * Math.random();
this.walkVec = cc.v2(Math.cos(e), Math.sin(e));
this.walkCount = 60 * (Math.random() * this.walkSec + this.walkSec);
this.walkState = a.WALK;
this.change_anime();
} else if (this.walkState == a.WALK) {
this.stop();
this.walkCount = 60 * (Math.random() * this.idleSec + this.idleSec);
this.walkState = a.IDLE;
this.change_anime();
}
},
change_anime: function() {
var e = null;
this.walkState == a.IDLE ? e = this.animeIdle[this.direction] : this.walkState == a.WALK && (e = this.animeWalk[this.direction]);
e && this.animation.play(e.name);
}
});
cc._RF.pop();
}, {
Walker: "Walker"
} ],
AppPlatform: [ function(e, t) {
"use strict";
cc._RF.push(t, "fa558KqNjhDVpSfnHlYYBC0", "AppPlatform");
var i = e("Game"), a = e("AdsState"), s = e("PlatformFacebook"), n = e("PlatformTikTok"), o = "AppPlatform", c = "jp/coffeebreakin/lib/AppPlatform", r = {
isIOS: function() {
return cc.sys.isNative && cc.sys.os == cc.sys.OS_IOS;
},
isAndroid: function() {
return cc.sys.isNative && cc.sys.os == cc.sys.OS_ANDROID;
},
isFacebook: function() {
return s.isFacebook();
},
isTikTok: function() {
return n.isTikTok();
},
isWebTest: function() {
return !(this.isIOS() || this.isAndroid() || this.isFacebook() || this.isTikTok());
},
callNativeMethod: function(e, t, i) {
for (var a = arguments.length, r = new Array(a > 3 ? a - 3 : 0), h = 3; h < a; h++) r[h - 3] = arguments[h];
if (this.isIOS()) {
var u;
return (u = jsb.reflection).callStaticMethod.apply(u, [ o, e + t ].concat(r));
}
if (this.isAndroid()) {
var l;
return (l = jsb.reflection).callStaticMethod.apply(l, [ c, e, i ].concat(r));
}
return this.isFacebook() ? s.callMethod.apply(s, [ e ].concat(r)) : !!this.isTikTok() && n.callMethod.apply(n, [ e ].concat(r));
},
RemoveUnit: function(e) {
this.callNativeMethod("removeUnit", ":", "(Ljava/lang/String;)V", e);
},
InitAdsSDK: function(e, t) {
this.callbackInitAdsSDK = t;
this.callNativeMethod("InitAdsSDK", ":", "(I)V", e);
},
callbackInitAdsSDK: function() {},
SuccessInitAdsSDK: function() {
this.callbackInitAdsSDK && this.callbackInitAdsSDK();
},
adsStates: {},
GetAdsState: function(e) {
return e in this.adsStates ? this.adsStates[e] : a.NONE;
},
SetAdsState: function(e, t) {
this.adsStates[e] = t;
},
IsAdsStateReady: function(e) {
return this.GetAdsState(e) == a.READY;
},
IsAdsStateNotReady: function(e) {
return this.GetAdsState(e) == a.NONE || this.GetAdsState(e) == a.ERROR;
},
CreateBannerAds: function(e, t, i) {
this.callNativeMethod("CreateBannerAds", ":alignment:unit_id:", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V", e, t, i);
},
ShowBannerAds: function(e) {
this.callNativeMethod("ShowBannerAds", ":", "(Ljava/lang/String;)V", e);
},
HideBannerAds: function(e) {
this.callNativeMethod("HideBannerAds", ":", "(Ljava/lang/String;)V", e);
},
CreateInterstitialAds: function(e, t) {
this.callNativeMethod("CreateInterstitialAds", ":unit_id:", "(Ljava/lang/String;Ljava/lang/String;)V", e, t);
},
IsAvailableInterstitialAds: function(e) {
return this.callNativeMethod("IsAvailableInterstitialAds", ":", "(Ljava/lang/String;)Z", e);
},
LoadInterstitialAds: function(e) {
this.callNativeMethod("LoadInterstitialAds", ":", "(Ljava/lang/String;)V", e);
},
ShowInterstitialAds: function(e) {
i.pause();
this.callNativeMethod("ShowInterstitialAds", ":", "(Ljava/lang/String;)V", e);
},
CloseInterstitialAds: function() {
i.resume();
},
CreateRewardedAds: function(e, t) {
this.callNativeMethod("CreateRewardedAds", ":unit_id:", "(Ljava/lang/String;Ljava/lang/String;)V", e, t);
},
IsAvailableRewardedAds: function(e) {
return this.callNativeMethod("IsAvailableRewardedAds", ":", "(Ljava/lang/String;)Z", e);
},
LoadRewardedAds: function(e) {
this.callNativeMethod("LoadRewardedAds", ":", "(Ljava/lang/String;)V", e);
},
ShowRewardedAds: function(e) {
i.pause();
this.callNativeMethod("ShowRewardedAds", ":", "(Ljava/lang/String;)V", e);
},
callbackRewardedAdsSuccess: function() {},
SetCallbackRewardedAdsSuccess: function(e) {
this.callbackRewardedAdsSuccess = e;
},
SuccessRewardedAds: function(e) {
this.callbackRewardedAdsSuccess && this.callbackRewardedAdsSuccess(e);
},
callbackRewardedAdsClose: function() {},
SetCallbackRewardedAdsClose: function(e) {
this.callbackRewardedAdsClose = e;
},
CloseRewardedAds: function(e) {
i.resume();
this.callbackRewardedAdsClose && this.callbackRewardedAdsClose(e);
},
IsPurchaseAvailable: function() {
return this.callNativeMethod("IsPurchaseAvailable", "", "()Z");
},
PurchaseRegister: function() {
this.callNativeMethod("PurchaseRegister", "", "()V");
},
PurchaseUnregister: function() {
this.callNativeMethod("PurchaseUnregister", "", "()V");
},
PurchaseFetch: function(e, t) {
var i = e.length;
if (i == t.length) {
this.callNativeMethod("PurchaseFetchStart", "", "()V");
for (var a = 0; a < i; a++) this.callNativeMethod("PurchaseFetchAdd", ":purchase_type:", "(Ljava/lang/String;I)V", e[a], t[a]);
this.callNativeMethod("PurchaseFetchFinish", "", "()V");
}
},
PurchaseRefresh: function() {
this.callNativeMethod("PurchaseRefresh", "", "()V");
},
PurchaseBuy: function(e) {
this.callNativeMethod("PurchaseBuy", ":", "(Ljava/lang/String;)V", e);
},
PurchaseRestore: function() {
this.callNativeMethod("PurchaseRestore", "", "()V");
},
IsGameServiceLogined: function() {
return this.callNativeMethod("IsGameServiceLogined", "", "()Z");
},
GameServiceSignIn: function() {
this.callNativeMethod("GameServiceSignIn", "", "()V");
},
PushSaveData: function(e) {
this.callNativeMethod("PushSaveData", ":", "(I)V", e);
},
SendSaveData: function(e) {
this.callNativeMethod("SendSaveData", ":", "(I)V", e);
},
GetLoadPlayTime: function() {
return this.callNativeMethod("GetLoadPlayTime", "", "()I");
},
GetLoadDataStr: function() {
return this.callNativeMethod("GetLoadDataStr", "", "()Ljava/lang/String;");
},
GetSavedGamesState: function() {
return this.callNativeMethod("GetSavedGamesState", "", "()I");
},
ClearSavedGamesState: function() {
this.callNativeMethod("ClearSavedGamesState", "", "()V");
},
WriteLoadData: function() {
this.callNativeMethod("WriteLoadData", "", "()V");
},
ShowSavedGamesUI: function() {
this.callNativeMethod("ShowSavedGamesUI", "", "()V");
},
WriteKeyValueList: function(e) {
this.callNativeMethod("WriteKeyValueList", ":", "(Ljava/lang/String;)V", e);
},
ShowAchievement: function() {
this.callNativeMethod("ShowAchievement", "", "()V");
},
ProgressAchievement: function(e, t) {
return this.callNativeMethod("ProgressAchievement", ":percent:", "(Ljava/lang/String;I)Z", e, t);
},
UnlockAchievement: function(e) {
return this.callNativeMethod("UnlockAchievement", ":", "(Ljava/lang/String;)Z", e);
},
ShareDialog: function(e) {
this.callNativeMethod("ShareDialog", ":", "(Ljava/lang/String;)V", e);
},
InitLocalPush: function() {
this.callNativeMethod("InitLocalPush", "", "()V");
},
IsInitLocalPush: function() {
return this.callNativeMethod("IsInitLocalPush", "", "()Z");
},
RegistLocalPushAfter: function(e, t, i, a) {
this.callNativeMethod("RegistLocalPushAfter", ":message:seconds:tag:", "(Ljava/lang/String;Ljava/lang/String;II)V", e, t, i, a);
},
RegistLocalPushAt: function(e, t, i, a) {
this.callNativeMethod("RegistLocalPushAt", ":message:unixTime:tag:", "(Ljava/lang/String;Ljava/lang/String;II)V", e, t, i, a);
},
RemoveLocalPush: function(e) {
this.callNativeMethod("RemoveLocalPush", ":", "(I)V", e);
},
RemoveLocalPushRange: function(e, t) {
this.callNativeMethod("RemoveLocalPushRange", ":endTag:", "(II)V", e, t);
},
ClearBadge: function() {
this.isIOS() && this.callNativeMethod("ClearBadge", "", "()V");
},
VibrateNormal: function() {
this.callNativeMethod("VibrateNormal", "", "()V");
},
SetMuteAds: function(e) {
this.callNativeMethod("SetMuteAds", ":", "(Z)V", e);
},
SetTestAds: function(e) {
this.callNativeMethod("SetTestAds", ":", "(Z)V", e);
},
ShowInAppReview: function() {
this.callNativeMethod("ShowInAppReview", "", "()V");
},
IsNetworked: function() {
var e = cc.sys.getNetworkType();
return e === cc.sys.NetworkType.LAN || e === cc.sys.NetworkType.WWAN;
},
buildMode: 0,
IsMobile: function() {
return 0 == this.buildMode;
},
IsGooglePCGames: function() {
return 1 == this.buildMode;
},
IsInstant: function() {
return 2 == this.buildMode;
},
CheckBuildMode: function() {
this.buildMode = this.callNativeMethod("CheckBuildMode", "", "()I");
},
CheckUMP: function(e) {
this.callbackCheckUMP = e;
this.callNativeMethod("CheckUMP", "", "()V");
},
callbackCheckUMP: function() {},
SuccessCheckUMP: function() {
this.callbackCheckUMP && this.callbackCheckUMP();
},
IsCustomUMP: function() {
return this.callNativeMethod("IsCustomUMP", "", "()Z");
},
CustomUMP: function() {
this.callNativeMethod("CustomUMP", "", "()V");
}
};
t.exports = r;
cc._RF.pop();
}, {
AdsState: "AdsState",
Game: "Game",
PlatformFacebook: "PlatformFacebook",
PlatformTikTok: "PlatformTikTok"
} ],
ArtifactPopup: [ function(e, t) {
"use strict";
cc._RF.push(t, "06c398fq/dLtLspYLF4P1wi", "ArtifactPopup");
var i = e("Popup"), a = e("Game");
cc.Class({
extends: i,
properties: {
frameRect: cc.SpriteFrame,
labelComp: cc.Label
},
onLoad: function() {
this._super();
},
Ok: function() {
this.Cancel();
},
PressHelp: function() {
this.IsNotAvailableButton() || a.tutorial.ShowExplainPopup("artifact");
},
ShowWithTag: function(e) {
this.Show() && this.SetInfo(e);
},
SetInfo: function(e) {
var t = this;
this.artifact = a.getArtifactByTag(e);
if (null != this.artifact) {
this.artifactMax = this.artifact.getMax();
for (var i = 0, s = 0, n = this, o = function(e) {
var a = cc.v2(20 * s - 70, -24 * i + 37), o = t.artifact.isHave(e), c = new cc.Node(), r = c.addComponent(cc.Sprite);
r.sizeMode = cc.Sprite.SizeMode.CUSTOM;
r.spriteFrame = n.frameRect;
c.setContentSize(cc.size(18, 18));
c.position = a;
c.opacity = 100;
n.window.addChild(c);
if (++s >= 8) {
i++;
s = 0;
}
if (!o) return "continue";
var h = t.artifact.getSpriteName(e);
cc.resources.load(h, cc.SpriteFrame, function(e, t) {
if (!e && t) {
var i = new cc.Node();
i.addComponent(cc.Sprite).spriteFrame = t;
i.position = a;
n.window.addChild(i);
}
});
}, c = 0; c < this.artifactMax; c++) o(c);
var r = this.artifact.getCompRate();
this.labelComp.string = a.getLocalizedStr("artifact_comp", "コンプリート率") + ": " + r + "%";
}
}
});
cc._RF.pop();
}, {
Game: "Game",
Popup: "Popup"
} ],
Artifact: [ function(e, t) {
"use strict";
cc._RF.push(t, "8e25eV49G1N975qJo+wfuHX", "Artifact");
var i = e("BaseModel"), a = cc.Class({
extends: i,
init: function(e, t, i, a, s, n, o) {
this._super(e + "Artifact", t);
this.max = i;
this.nums = [];
this.needCoin = a;
this.sellPrice = Math.floor(a / 2);
this.needItemTag = s;
this.needItemNum = n;
this.miniBoxTag = o;
for (var c = 0; c < this.max; c++) this.nums[c] = 0;
},
load: function() {
for (var e = 0; e < this.max; e++) this.nums[e] = this.loadNumber("num." + e, 0);
},
reset: function() {
for (var e = 0; e < this.max; e++) {
this.nums[e] = 0;
this.saveNumber("num." + e, 0);
}
},
getMax: function() {
return this.max;
},
is_valid: function(e) {
return e >= 0 && e < this.max;
},
isHave: function(e) {
return !!this.is_valid(e) && this.nums[e] > 0;
},
doHave: function(e) {
if (!this.is_valid(e)) return !1;
if (0 == this.isHave(e)) {
this.nums[e]++;
this.saveNumber("num." + e, this.nums[e]);
return !0;
}
return !1;
},
getSpriteName: function(e) {
if (!this.is_valid(e)) return "";
var t = ("00" + e).slice(-2);
return this.modelName + "/" + this.modelName + "_" + t;
},
getCompRate: function() {
for (var e = 0, t = 0; t < this.max; t++) this.nums[t] > 0 && e++;
return Math.floor(e / this.max * 100);
},
getHaveCount: function() {
for (var e = 0, t = 0; t < this.max; t++) this.nums[t] > 0 && e++;
return e;
},
getNeedCoin: function() {
return this.needCoin;
},
getSellPrice: function() {
return this.sellPrice;
},
getNeedItemTag: function() {
return this.needItemTag;
},
getNeedItemNum: function() {
return this.needItemNum;
},
getMiniBoxTag: function() {
return this.miniBoxTag;
},
forceComplete: function() {
for (var e = 0; e < this.max; e++) this.doHave(e);
}
});
t.exports = a;
cc._RF.pop();
}, {
BaseModel: "BaseModel"
} ],
AttackRect: [ function(e, t) {
"use strict";
cc._RF.push(t, "58b99fALadIOZ5paDc4Vz5B", "AttackRect");
cc.Class({
extends: cc.Component,
properties: {
nodeCollision: {
type: cc.Node,
default: null
}
},
ctor: function() {
this.monster = null;
this.collider = null;
},
onLoad: function() {
this.node.zIndex = -1e4;
this.collider = this.node.getComponent(cc.BoxCollider);
},
onCollisionEnter: function(e, t) {
"Hero" == e.node.group && 333 == e.tag && 9999 == t.tag && this.monster && this.monster.AttackDistance();
},
onCollisionExit: function(e, t) {
"Hero" == e.node.group && 333 == e.tag && 9999 == t.tag && this.monster && this.monster.AttackNotDistance();
},
SetInfo: function(e, t, i, a) {
this.monster = e;
this.node.position = t;
this.node.angle = i;
this.node.setContentSize(a);
if (this.collider && this.nodeCollision) {
var s = this.nodeCollision.getComponent(cc.Widget);
s && s.updateAlignment();
this.collider.size = this.nodeCollision.getContentSize();
this.collider.offset = this.nodeCollision.position;
}
},
StartWarning: function() {
this.node.opacity = 200;
this.node.runAction(cc.sequence(cc.fadeTo(.2, 0), cc.fadeTo(.2, 200), cc.fadeTo(.2, 0), cc.fadeTo(.2, 200)));
}
});
cc._RF.pop();
}, {} ],
BackKey: [ function(e, t) {
"use strict";
cc._RF.push(t, "3c42cE1Qj1HtLCjjW4IuAqk", "BackKey");
e("Game");
cc.Class({
extends: cc.Component,
onLoad: function() {}
});
cc._RF.pop();
}, {
Game: "Game"
} ],
BackgamePopup: [ function(e, t) {
"use strict";
cc._RF.push(t, "99476efkkhCtKcD8L9FXo9W", "BackgamePopup");
var i = e("Popup"), a = e("Game"), s = e("Direction");
cc.Class({
extends: i,
Ok: function() {
this.Hide();
a.settingState(cc.v2(-160, 522), s.DOWN);
a.scene.fadeCover.TransitionFade("Map4-0Scene", 1, new cc.Color(255, 255, 255));
}
});
cc._RF.pop();
}, {
Direction: "Direction",
Game: "Game",
Popup: "Popup"
} ],
BackupPopup: [ function(e, t) {
"use strict";
cc._RF.push(t, "f0fb9n3dWpBErD3TdJMOzjP", "BackupPopup");
var i = e("Popup"), a = e("Game");
cc.Class({
extends: i,
properties: {
titleLabel: cc.Label,
buttonBackup: cc.Button,
indicator: cc.Node
},
onLoad: function() {
this._super();
var e = !1;
a.savedGames && (e = a.savedGames.isEnableSendData());
this.buttonBackup.interactable = e;
this.flagUseOk = e;
},
Show: function() {
if (this._super()) {
var e = this.titleLabel.node.getBoundingBox();
this.window.height = e.height + 36;
return !0;
}
return !1;
},
PressBackup: function() {
this.IsNotAvailableButton() || this.Ok();
},
Ok: function() {
this.indicator.active = !0;
this.buttonBackup.interactable = !1;
this.flagUseOk = !1;
a.savedGames && a.savedGames.sendData();
this.node.runAction(cc.sequence(cc.delayTime(2), cc.callFunc(this.Hide, this)));
}
});
cc._RF.pop();
}, {
Game: "Game",
Popup: "Popup"
} ],
Balloon: [ function(e, t) {
"use strict";
cc._RF.push(t, "4eb748u7aNJuZ3//MA/ZHlq", "Balloon");
var i = e("Game");
cc.Class({
extends: cc.Component,
properties: {
serif: {
default: null,
type: cc.Label
},
needle: cc.Node
},
ctor: function() {
this.flagShow = !1;
this.default_pos = cc.v2(-12, 15);
this.offsetScaleX = 1;
},
onLoad: function() {
var e = this.serif.node.getBoundingBox();
this.text_h = e.height + 1;
this.node.scale = 0;
},
SetDefaultPosition: function(e) {
this.default_pos = e;
},
SetLabelWidth: function(e) {
this.serif.node.width = e / i.fontScale;
},
SetOffsetScaleX: function(e) {
this.offsetScaleX = e;
},
IsShow: function() {
return this.flagShow;
},
show: function(e) {
this.serif.string = e;
this.serif._forceUpdateRenderData();
this.show_sub();
},
show_sub: function() {
var e = this.serif.node.getBoundingBox();
if (e.height < this.text_h) {
this.serif.overflow = cc.Label.Overflow.NONE;
this.serif._forceUpdateRenderData();
e = this.serif.node.getBoundingBox();
}
var t = e.width + 10, i = Math.floor(t / 2), a = t >= 45 ? 10 : -1;
this.needle.x = (i - a) * this.offsetScaleX;
this.node.width = t;
this.node.height = e.height + 10;
this.node.runAction(cc.spawn(cc.scaleTo(.2, 1), cc.moveBy(.2, cc.v2(-this.needle.x, 0))));
this.flagShow = !0;
},
hide: function() {
this.flagShow = !1;
this.node.stopAllActions();
this.node.runAction(cc.sequence(cc.spawn(cc.scaleTo(.1, 0), cc.moveBy(.1, cc.v2(this.needle.x, 0))), cc.callFunc(this.hide_finish, this)));
},
hide_finish: function() {
this.node.destroy();
}
});
cc._RF.pop();
}, {
Game: "Game"
} ],
BargainSignPopup: [ function(e, t) {
"use strict";
cc._RF.push(t, "23da4lGHnJOY61rKGoIHVzR", "BargainSignPopup");
var i = e("Popup"), a = e("Game");
cc.Class({
extends: i,
properties: {
titleLabel: cc.Label
},
Ok: function() {
this.Cancel();
},
Cancel: function() {
this.Hide();
a.scene.manager.ShowPurchasePopup();
},
ShowWithText: function(e) {
this.Show() && (this.titleLabel.string = e);
}
});
cc._RF.pop();
}, {
Game: "Game",
Popup: "Popup"
} ],
BaseCampScene: [ function(e, t) {
"use strict";
cc._RF.push(t, "4ba22OU1n9OWKWasa7X+8PQ", "BaseCampScene");
var i = e("BaseScene"), a = e("FloorLock");
cc.Class({
extends: i,
onLoad: function() {
this._super();
},
onEnter: function() {
this._super();
this.checkFloorLocks();
},
checkFloorLocks: function() {
for (var e = [], t = this.node.children, i = 0; i < t.length; i++) {
var s = t[i].getComponent(a);
s && e.push(s);
}
e.sort(function(e, t) {
return t.needFloor - e.needFloor;
});
for (var n = !0, o = 0; o < e.length; o++) {
var c = e[o];
c.IsLock() && c.CheckLock(n) && (n = !1);
}
}
});
cc._RF.pop();
}, {
BaseScene: "BaseScene",
FloorLock: "FloorLock"
} ],
BaseModel: [ function(e, t) {
"use strict";
cc._RF.push(t, "05c2aKCKzxHGrCMw2NNXgS9", "BaseModel");
var i = e("SaveData"), a = cc.Class({
init: function(t, i) {
this.baseKey = t + "." + i;
this.modelName = i;
this.subModels = [];
this.game = e("Game");
},
load: function() {},
getBaseKey: function() {
return this.baseKey;
},
getModelName: function() {
return this.modelName;
},
getGameModel: function() {
return Game;
},
addModel: function(e, t) {
if (!e || !t) return !1;
if (this.getModel(e)) return !1;
this.subModels[e] = t;
return !0;
},
getModel: function(e) {
return this.subModels[e];
},
loadAllData: function() {
this.load();
for (var e in this.subModels) {
var t = this.subModels[e];
t && t.loadAllData();
}
},
getSaveKey: function(e) {
return this.baseKey + "." + e;
},
saveNumber: function(e, t) {
i.saveNumber(this.getSaveKey(e), t);
},
loadNumber: function(e, t) {
return i.loadNumber(this.getSaveKey(e), t);
},
saveBoolean: function(e, t) {
i.saveBoolean(this.getSaveKey(e), t);
},
loadBoolean: function(e, t) {
return i.loadBoolean(this.getSaveKey(e), t);
},
saveString: function(e, t) {
i.saveString(this.getSaveKey(e), t);
},
loadString: function(e, t) {
return i.loadString(this.getSaveKey(e), t);
}
});
t.exports = a;
cc._RF.pop();
}, {
Game: "Game",
SaveData: "SaveData"
} ],
BaseScene: [ function(e, t) {
"use strict";
cc._RF.push(t, "3577a18LB1PUZ+DTYi9dtZ4", "BaseScene");
var i = e("Game"), a = e("Hero"), s = e("FadeCover"), n = e("MapManager"), o = e("UI"), c = e("QuestPopup"), r = e("Resource"), h = e("SaveData"), u = e("AppPlatform"), l = e("ResourceManager"), p = e("Chest"), d = e("House"), m = e("FloorLock"), f = e("Furnace");
cc.Class({
extends: cc.Component,
properties: {
camera: cc.Camera,
hero: a,
fadeCover: s,
manager: n,
ui: o,
questPopup: {
default: null,
type: c
},
arrowH: 30,
artifactTag: "",
saveScene: !1,
dungeonTag: ""
},
onLoad: function() {
i.initGameDebug();
i.setScene(this, this.saveScene);
cc.assert(this.camera && this.hero && this.fadeCover && this.manager && this.ui, "ERROR! BaseScene: check properties...");
i.setArtifactTag(this.artifactTag);
i.dungeon.setDungeonTag(this.dungeonTag);
this.targetChest = null;
this.targetPrivateArea = null;
this.targetFishingSpot = null;
this.targetWarpPortal = null;
this.flagRewardMinibox = !1;
this.rewardDungeonTag = "";
this.rewardDungeonTarget = null;
this.rewardDungeonKey = !1;
cc.debug.setDisplayStats(i.debug);
var e = cc.director.getPhysicsManager();
e.enabled = !0;
e.gravity = cc.v2();
e.VELOCITY_ITERATIONS = 1;
e.POSITION_ITERATIONS = 1;
cc.director.getCollisionManager().enabled = !0;
this.flagCameraTracking = !0;
this.popupStack = [];
this.flagEnableInput = !0;
this.pauseCount = 0;
this.flagTouchMoving = !1;
this.touchStart = cc.v2(0, 0);
this.touchTime = 0;
this.touchMoveVec = cc.v2(0, 0);
this.touchMoveAccel = 0;
this.node.on(cc.Node.EventType.TOUCH_START, function(e) {
this.touchMoveVec = cc.v2(0, 0);
this.touchMoveAccel = 0;
this.touchStart = cc.v2(e.getStartLocation().x, e.getStartLocation().y);
this.ui.HideOptionMenu();
}, this);
this.node.on(cc.Node.EventType.TOUCH_MOVE, function(e) {
if (0 != this.flagEnableInput) {
var t = this.touchStart, i = e.getLocation().sub(t), a = i.mag(), s = i.normalize(), n = a / this.arrowH;
if (n > 1) {
n = 1;
var o = s.mul(this.arrowH), c = i.sub(o);
this.touchStart.addSelf(c);
}
this.touchMoveVec = s;
this.touchMoveAccel = n;
this.flagTouchMoving = !0;
}
}, this);
this.node.on(cc.Node.EventType.TOUCH_END, function(e) {
0 != this.flagEnableInput && this.touch_end(e);
}, this);
this.node.on(cc.Node.EventType.TOUCH_CANCEL, function(e) {
0 != this.flagEnableInput && this.touch_end(e);
}, this);
this.flagKeyMoving = !1;
this.keyInputMap = {};
cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
for (var t = this.node.children, a = 0; a < t.length; ++a) {
t[a].x = Math.round(t[a].x);
t[a].y = Math.round(t[a].y);
t[a].zIndex = -t[a].y;
}
i.saveLater();
},
start: function() {
this.checkNewgame();
},
checkNewgame: function() {
var e = cc.director.getScene().name;
"New Node" == e && (e = this.node.name);
if (h.loadBoolean("newgame." + e, !1)) {
cc.log("NEWGAME: BaseScene:" + e);
h.saveBoolean("newgame." + e, !1);
this.newgame();
}
},
newgame: function() {
for (var e = this.node.children, t = 0; t < e.length; ++t) {
var i = e[t].getComponent(r);
i && i.reset();
var a = e[t].getComponent(p);
a && a.newgame();
var s = e[t].getComponent(d);
s && s.newgame();
var n = e[t].getComponent(m);
n && n.newgame();
var o = e[t].getComponent(f);
o && o.newgame();
}
},
onDestroy: function() {
i.scene == this && (i.scene = null);
cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
},
onEnter: function() {
this.CheckInAppReview();
},
onKeyDown: function(e) {
switch (e.keyCode) {
case cc.macro.KEY.up:
case cc.macro.KEY.right:
case cc.macro.KEY.down:
case cc.macro.KEY.left:
case cc.macro.KEY.dpadUp:
case cc.macro.KEY.dpadRight:
case cc.macro.KEY.dpadDown:
case cc.macro.KEY.dpadLeft:
case cc.macro.KEY.w:
case cc.macro.KEY.a:
case cc.macro.KEY.s:
case cc.macro.KEY.d:
this.keyInputMap[e.keyCode] = !0;
}
},
onKeyUp: function(e) {
switch (e.keyCode) {
case cc.macro.KEY.up:
case cc.macro.KEY.right:
case cc.macro.KEY.down:
case cc.macro.KEY.left:
case cc.macro.KEY.dpadUp:
case cc.macro.KEY.dpadRight:
case cc.macro.KEY.dpadDown:
case cc.macro.KEY.dpadLeft:
case cc.macro.KEY.w:
case cc.macro.KEY.a:
case cc.macro.KEY.s:
case cc.macro.KEY.d:
this.keyInputMap[e.keyCode] = !1;
break;

case cc.macro.KEY.escape:
this.popupCancel();
break;

case cc.macro.KEY.enter:
this.popupOK();
}
},
touch_end: function() {
this.flagTouchMoving = !1;
this.touchMoveVec = cc.v2(0, 0);
this.touchMoveAccel = 0;
this.hero && this.hero.stopAndAction();
},
update: function() {
if (this.flagEnableInput) if (this.flagTouchMoving) this.hero.move(this.touchMoveVec, this.touchMoveAccel); else {
var e = cc.v2(0, 0);
(this.keyInputMap[cc.macro.KEY.up] || this.keyInputMap[cc.macro.KEY.dpadUp] || this.keyInputMap[cc.macro.KEY.w]) && (e.y += 1);
(this.keyInputMap[cc.macro.KEY.right] || this.keyInputMap[cc.macro.KEY.dpadRight] || this.keyInputMap[cc.macro.KEY.d]) && (e.x += 1);
(this.keyInputMap[cc.macro.KEY.down] || this.keyInputMap[cc.macro.KEY.dpadDown] || this.keyInputMap[cc.macro.KEY.s]) && (e.y -= 1);
(this.keyInputMap[cc.macro.KEY.left] || this.keyInputMap[cc.macro.KEY.dpadLeft] || this.keyInputMap[cc.macro.KEY.a]) && (e.x -= 1);
if (0 != e.mag()) {
this.flagKeyMoving = !0;
this.hero.move(e.normalize(), 1);
} else {
this.flagKeyMoving && this.hero.stopAndAction();
this.flagKeyMoving = !1;
}
}
1 == this.flagCameraTracking && this.RenewCameraPosition();
},
RenewCameraPosition: function() {
this.camera.node.position = this.hero.node.position;
},
PauseInput: function() {
this.flagEnableInput = !1;
this.flagTouchMoving = !1;
this.flagKeyMoving = !1;
this.pauseCount++;
this.hero && this.hero.stopAndIdle();
},
ResumeInput: function() {
this.pauseCount--;
if (this.pauseCount <= 0) {
this.pauseCount = 0;
this.flagEnableInput = !0;
}
},
CameraModeFree: function() {
this.flagCameraTracking = !1;
},
CameraModeTracking: function() {
this.flagCameraTracking = !0;
},
ShowUI: function() {
this.ui.node.active = !0;
},
HideUI: function() {
this.ui.node.active = !1;
},
PopupRegist: function(e) {
e && this.popupStack.push(e);
},
PopupUnregist: function() {
this.popupStack.length <= 0 || this.popupStack.pop();
},
IsPopup: function() {
return this.popupStack.length > 0;
},
popupCancel: function() {
this.popupStack.length <= 0 || this.popupStack[this.popupStack.length - 1].PressCancel();
},
popupOK: function() {
this.popupStack.length <= 0 || this.popupStack[this.popupStack.length - 1].PressOk();
},
CollectDropItem: function() {
if (null != i.scene) {
var e = this.node.getComponent(l);
e && e.CollectDropItem();
}
},
ShowBannerAds: function() {
u.ShowBannerAds(i.getBannerTag());
},
HideBannerAds: function() {
u.HideBannerAds(i.getBannerTag());
},
RewardMiniboxSuccess: function() {
this.flagRewardMinibox = !0;
},
RewardMiniboxClose: function() {
this.node.runAction(cc.callFunc(this._rewardMiniboxClose, this));
},
_rewardMiniboxClose: function() {
if (this.flagRewardMinibox) {
this.flagRewardMinibox = !1;
i.makeKeyRate = 100;
this.fadeCover.PushScene("OpenBoxScene", 1, new cc.Color(0, 0, 0));
}
},
resetRewardDungeon: function() {
this.rewardDungeonTag = "";
this.rewardDungeonTarget = null;
this.rewardDungeonKey = !1;
},
SetRewardDungeonTarget: function(e, t) {
this.rewardDungeonTag = e;
this.rewardDungeonTarget = t;
this.rewardDungeonKey = !1;
},
RewardDungeonSuccess: function() {
this.rewardDungeonKey = !0;
},
RewardDungeonClose: function() {
this.node.runAction(cc.callFunc(this._rewardDungeonClose, this));
},
_rewardDungeonClose: function() {
this.rewardDungeonKey ? "chest" == this.rewardDungeonTag ? this.rewardDungeonTarget.OpenChest() : "abort" == this.rewardDungeonTag ? i.dungeon.resultDungeon() : "recovery" == this.rewardDungeonTag ? i.dungeon.dungeonScene.recoveryHero() : "hole" == this.rewardDungeonTag && i.dungeon.startDungeon() : this.RewardDungeonCancel();
this.resetRewardDungeon();
},
RewardDungeonCancel: function() {
"abort" == this.rewardDungeonTag ? i.dungeon.abortFinish() : "recovery" == this.rewardDungeonTag && i.dungeon.resultDungeon();
this.resetRewardDungeon();
},
ShowInAppReview: function() {
u.ShowInAppReview();
},
CheckInAppReview: function() {
if (i.inAppReview.IsReserve()) {
i.inAppReview.DoReserve();
this.ShowInAppReview();
}
}
});
cc._RF.pop();
}, {
AppPlatform: "AppPlatform",
Chest: "Chest",
FadeCover: "FadeCover",
FloorLock: "FloorLock",
Furnace: "Furnace",
Game: "Game",
Hero: "Hero",
House: "House",
MapManager: "MapManager",
QuestPopup: "QuestPopup",
Resource: "Resource",
ResourceManager: "ResourceManager",
SaveData: "SaveData",
UI: "UI"
} ],
BoardingPoint: [ function(e, t) {
"use strict";
cc._RF.push(t, "30848EGmpVFBqByftsUfk57", "BoardingPoint");
var i = e("Gimmick"), a = (e("CommandType"), e("Game"));
cc.Class({
extends: i,
properties: {},
onLoad: function() {
this._super();
this.vehiclePos = cc.v2(0, 0);
var e = this.node.getComponent(cc.Collider);
e && (this.vehiclePos = this.node.position.add(e.offset));
},
collisionEnter: function() {
a.scene.hero.RideOff(this);
},
GetRideOffPos: function() {
return this.node.position;
},
GetVehiclePos: function() {
return this.vehiclePos;
},
ConnectVehicle: function(e) {
e && (e.node.position = this.GetVehiclePos());
}
});
cc._RF.pop();
}, {
CommandType: "CommandType",
Game: "Game",
Gimmick: "Gimmick"
} ],
BossWinStair: [ function(e, t) {
"use strict";
cc._RF.push(t, "96180rqDhhMkaZCWKAaChnb", "BossWinStair");
var i = e("Gimmick"), a = e("Game");
cc.Class({
extends: i,
ctor: function() {
this.flagTransition = !1;
},
collisionEnter: function() {
if (!this.flagTransition) {
this.flagTransition = !0;
a.dungeon.resultDungeon();
}
}
});
cc._RF.pop();
}, {
Game: "Game",
Gimmick: "Gimmick"
} ],
Bukken: [ function(e, t) {
"use strict";
cc._RF.push(t, "fc3c9/Xr/xBTIp4+Y0tCUNl", "Bukken");
var i = e("BaseModel"), a = e("ItemRank"), s = {
house0: {
name: "house_name0",
soldout: !1,
coin: 18e3,
items: [ {
tag: "Wood",
rank: a.NONE,
val: 200
}, {
tag: "Stone",
rank: a.NONE,
val: 120
}, {
tag: "Wool",
rank: a.NONE,
val: 80
}, {
tag: "Copper",
rank: a.NONE,
val: 30
} ]
},
house1: {
name: "house_name1",
soldout: !1,
coin: 27e3,
items: [ {
tag: "Wood",
rank: a.NONE,
val: 250
}, {
tag: "Stone",
rank: a.NONE,
val: 170
}, {
tag: "Wool",
rank: a.NONE,
val: 90
}, {
tag: "Copper",
rank: a.NONE,
val: 60
}, {
tag: "Silver",
rank: a.NONE,
val: 30
} ]
},
house2: {
name: "house_name2",
soldout: !1,
coin: 36e3,
items: [ {
tag: "Wood",
rank: a.NONE,
val: 300
}, {
tag: "Stone",
rank: a.NONE,
val: 220
}, {
tag: "Wool",
rank: a.NONE,
val: 110
}, {
tag: "Copper",
rank: a.NONE,
val: 80
}, {
tag: "Silver",
rank: a.NONE,
val: 50
} ]
},
house3: {
name: "house_name3",
soldout: !1,
coin: 45e3,
items: [ {
tag: "Wood1",
rank: a.NONE,
val: 250
}, {
tag: "Cactus0",
rank: a.NONE,
val: 80
}, {
tag: "Coconut",
rank: a.NONE,
val: 120
}, {
tag: "Copper",
rank: a.NONE,
val: 100
}, {
tag: "Silver",
rank: a.NONE,
val: 80
}, {
tag: "Gold",
rank: a.NONE,
val: 60
} ]
},
house4: {
name: "house_name4",
soldout: !1,
coin: 4e4,
items: [ {
tag: "Wood1",
rank: a.NONE,
val: 200
}, {
tag: "Mushroom0",
rank: a.NONE,
val: 90
}, {
tag: "Silver",
rank: a.NONE,
val: 100
}, {
tag: "Gold",
rank: a.NONE,
val: 80
}, {
tag: "Marble0",
rank: a.NONE,
val: 60
}, {
tag: "Ruby",
rank: a.NONE,
val: 30
} ]
},
house5: {
name: "house_name5",
soldout: !1,
coin: 57e3,
items: [ {
tag: "Wood1",
rank: a.NONE,
val: 350
}, {
tag: "Wood2",
rank: a.NONE,
val: 250
}, {
tag: "Banana",
rank: a.NONE,
val: 80
}, {
tag: "Silver",
rank: a.NONE,
val: 120
}, {
tag: "Marble0",
rank: a.NONE,
val: 90
}, {
tag: "Ruby",
rank: a.NONE,
val: 50
} ]
},
house6: {
name: "house_name6",
soldout: !1,
coin: 65e3,
items: [ {
tag: "Wood1",
rank: a.NONE,
val: 400
}, {
tag: "Wood2",
rank: a.NONE,
val: 300
}, {
tag: "Gold",
rank: a.NONE,
val: 120
}, {
tag: "Marble0",
rank: a.NONE,
val: 110
}, {
tag: "Ruby",
rank: a.NONE,
val: 70
}, {
tag: "Diamond",
rank: a.NONE,
val: 30
} ]
},
house7: {
name: "house_name7",
soldout: !1,
coin: 74e3,
items: [ {
tag: "Wood",
rank: a.NONE,
val: 500
}, {
tag: "Wood2",
rank: a.NONE,
val: 400
}, {
tag: "Wool",
rank: a.NONE,
val: 300
}, {
tag: "Stone",
rank: a.NONE,
val: 450
}, {
tag: "Copper",
rank: a.NONE,
val: 300
}, {
tag: "Ruby",
rank: a.NONE,
val: 80
} ]
},
house8: {
name: "house_name8",
soldout: !1,
coin: 83e3,
items: [ {
tag: "Wood1",
rank: a.NONE,
val: 600
}, {
tag: "Wood3",
rank: a.NONE,
val: 300
}, {
tag: "Silver",
rank: a.NONE,
val: 300
}, {
tag: "Marble0",
rank: a.NONE,
val: 200
}, {
tag: "Diamond",
rank: a.NONE,
val: 70
}, {
tag: "Orichalcum",
rank: a.NONE,
val: 30
} ]
}
}, n = cc.Class({
extends: i,
init: function(e) {
this._super(e, "Bukken");
this.bukkenData = s;
},
load: function() {
for (var e in this.bukkenData) this.bukkenData[e].soldout = this.loadBoolean(e + ".soldout", !1);
},
reset: function() {
for (var e in this.bukkenData) {
this.bukkenData[e].soldout = !1;
this.saveBoolean(e + ".soldout", !1);
}
},
newgame: function() {
this.reset();
},
GetCheckResult: function(e) {
var t = {
all: !1,
coin: !1,
items: [ !1, !1, !1, !1, !1, !1 ]
}, i = this.GetData(e);
if (null == i) return t;
var a = !1;
i.coin > this.game.coin.getValue() && (a = !0);
t.coin = !a;
for (var s = !1, n = 0; n < i.items.length; n++) {
var o = i.items[n];
if (o && "" != o.tag) {
var c = this.game.item.getNum(o.tag, o.rank) >= o.val;
t.items[n] = c;
c || (s = !0);
}
}
t.all = !s & !a;
return t;
},
GetData: function(e) {
return e in this.bukkenData ? this.bukkenData[e] : null;
},
IsSoldout: function(e) {
return e in this.bukkenData && this.bukkenData[e].soldout;
},
ExecBukken: function(e) {
if (e in this.bukkenData) {
var t = this.GetData(e);
if (null == t) return !1;
var i = t.coin;
this.game.coin.useCurrency(i);
for (var a = 0; a < t.items.length; a++) {
var s = t.items[a];
s && "" != s.tag && this.game.item.useNum(s.tag, s.rank, s.val);
}
t.soldout = !0;
this.saveBoolean(e + ".soldout", !0);
return !0;
}
return !1;
},
SkipBukken: function(e) {
if (e in this.bukkenData) {
var t = this.GetData(e);
if (null == t) return !1;
t.soldout = !0;
this.saveBoolean(e + ".soldout", !0);
return !0;
}
return !1;
}
});
t.exports = n;
cc._RF.pop();
}, {
BaseModel: "BaseModel",
ItemRank: "ItemRank"
} ],
Bush: [ function(e, t) {
"use strict";
cc._RF.push(t, "f5eeebWJupMBaOEBWCJXbPV", "Bush");
var i = e("Resource"), a = e("ResourceState"), s = e("CommandType"), n = e("Game");
cc.Class({
extends: i,
properties: {
growSprites: [ cc.SpriteFrame ]
},
onLoad: function() {
this._super();
this.isMinibox = !1;
this.level = 0;
this.animation = this.node.getComponent(cc.Animation);
this.growIntervals = [];
for (var e = this.growSprites.length - 1, t = Math.floor(this.reviveInterval / e), i = 0; i < e; i++) this.growIntervals[i] = t;
},
refreshView: function() {
var e = null, t = !1;
if (this.state <= a.GROWING) {
e = this.growSprites[this.level];
t = !1;
} else if (this.state == a.REVIVE) {
e = this.growSprites[this.growSprites.length - 1];
t = !0;
}
var i = this.node.getComponent(cc.Sprite);
i && (i.spriteFrame = e);
var s = this.node.getComponent(cc.RigidBody);
s && (s.active = t);
},
progress: function(e) {
for (var t = 0, i = 0; i < this.growIntervals.length; i++) {
t += this.growIntervals[i];
if (!(this.level > i) && t <= e) {
this.change_level(i + 1);
this.level >= this.growIntervals.length ? this.change_state(a.REVIVE) : this.refreshView();
}
}
},
getAvailableCommand: function() {
return this.state >= a.REVIVE ? s.AXE : s.NONE;
},
execCommand: function() {
this.seDamage && n.sound.playSE(this.seDamage);
this.change_level(0);
this.animation.play("Bush_cut");
this.drop_item();
this.finish();
},
change_level: function(e) {
this.level = e;
}
});
cc._RF.pop();
}, {
CommandType: "CommandType",
Game: "Game",
Resource: "Resource",
ResourceState: "ResourceState"
} ],
ButtonNewgame: [ function(e, t) {
"use strict";
cc._RF.push(t, "648b8OTcxZKj5Kx87PAa58C", "ButtonNewgame");
var i = e("Game"), a = e("Popup");
cc.Class({
extends: cc.Component,
properties: {
popup: {
type: cc.Prefab,
default: null
}
},
PressNewgame: function() {
if (!i.IsNotPress()) {
var e = this.node.getComponent(a);
e && e.Hide();
if (this.popup) {
var t = cc.instantiate(this.popup);
if (t) {
i.scene.camera.node.addChild(t);
var s = t.getComponent(a);
s && s.Show();
}
}
}
}
});
cc._RF.pop();
}, {
Game: "Game",
Popup: "Popup"
} ],
CheckMe: [ function(e, t) {
"use strict";
cc._RF.push(t, "7d74dp0tE1I8JP1TFCt76am", "CheckMe");
var i = e("CheckType");
cc.Class({
extends: cc.Component,
properties: {
spriteIcon: cc.Sprite,
iconImages: [ cc.SpriteFrame ],
labelNum: cc.Label
},
SetType: function(e, t) {
e == i.NUM ? this.SetNum(t) : this.SetIcon(e);
},
SetIcon: function(e) {
this.labelNum.node.active = !1;
e >= this.iconImages.length || (this.spriteIcon.spriteFrame = this.iconImages[e]);
},
SetNum: function(e) {
this.spriteIcon.node.active = !1;
this.labelNum.string = "" + e;
this.labelNum.node.active = !0;
},
Show: function() {
this.node.active = !0;
},
ShowWithIcon: function(e) {
this.SetIcon(e);
this.Show();
},
ShowWithNum: function(e) {
this.SetNum(e);
this.Show();
},
Hide: function() {
this.node.active = !1;
}
});
cc._RF.pop();
}, {
CheckType: "CheckType"
} ],
CheckType: [ function(e, t) {
"use strict";
cc._RF.push(t, "189d7X5btJE8KRHzpfyRadt", "CheckType");
var i = cc.Enum({
ME: 0,
LOCK: 1,
OK: 2,
FAIL: 3,
REWARD: 4,
TIRED: 5,
DEAD: 6,
WAIT: 7,
NUM: 99
});
t.exports = i;
cc._RF.pop();
}, {} ],
ChestBonus: [ function(e, t) {
"use strict";
cc._RF.push(t, "c925fvhBxxJSLqdlnAgeQHg", "ChestBonus");
var i = e("Chest"), a = e("Game"), s = e("SaveData");
cc.Class({
extends: i,
properties: {
seAppear: cc.AudioClip,
seDrop: cc.AudioClip
},
ctor: function() {
this.flagAppear = !1;
this.item_order = [];
this.item_order_max = 0;
},
onLoad: function() {
this._super();
this.flagAppear = s.loadBoolean(this.savekey + ".flagAppear", !1);
this.change_view();
},
newgame: function() {
this._super();
this.DisappparChest();
},
update: function() {
if (this.item_order_max > 0) {
this.item_order_max--;
var e = this.item_order[this.item_order_max], t = cc.instantiate(this.dropItem[e]);
if (t) {
a.scene.node.addChild(t);
t.setPosition(this.node.position);
var i = t.getComponent("DropItem");
i && this.drop_super(i);
}
0 == this.item_order_max && this.node.runAction(cc.sequence(cc.delayTime(5), cc.scaleTo(.2, 0), cc.callFunc(this.change_view, this)));
}
},
drop_super: function(e) {
var t = 20 + 70 * Math.random(), i = 6.28 * Math.random(), s = cc.v2(Math.cos(i) * t, Math.sin(i) * t);
e.node.runAction(cc.sequence(cc.jumpBy(.6, s, 80, 1), cc.callFunc(e.drop_end, e)));
this.seDrop && a.sound.playSE(this.seDrop);
},
openFinish: function() {
for (var e = 0; e < this.dropNum.length; e++) for (var t = 0; t < this.dropNum[e]; t++) this.item_order.push(e);
this.item_order_max = this.item_order.length;
this.shuffleArray(this.item_order);
},
change_view: function() {
this._super();
this.node.active = 1 == this.flagAppear && 0 == this.flagOpen;
},
AppearChest: function() {
if (!this.flagAppear) {
this.flagAppear = !0;
s.saveBoolean(this.savekey + ".flagAppear", !0);
a.sound.playSE(this.seAppear);
this.node.active = !0;
this.node.scale = 0;
this.node.runAction(cc.sequence(cc.spawn(cc.scaleTo(.6, 1), cc.jumpBy(.6, cc.v2(0, 0), 40, 1)), cc.jumpBy(.3, cc.v2(0, 0), 20, 1)));
}
},
DisappparChest: function() {
this.flagAppear = !1;
s.saveBoolean(this.savekey + ".flagAppear", !1);
this.change_view();
},
shuffleArray: function(e) {
for (var t = e.length - 1; t > 0; t--) {
var i = Math.floor(Math.random() * (t + 1)), a = [ e[i], e[t] ];
e[t] = a[0];
e[i] = a[1];
}
}
});
cc._RF.pop();
}, {
Chest: "Chest",
Game: "Game",
SaveData: "SaveData"
} ],
ChestDungeon: [ function(e, t) {
"use strict";
cc._RF.push(t, "d6f86Ty+dpLrKasaH/7Grya", "ChestDungeon");
var i = e("Chest"), a = e("CommandType"), s = e("Game");
cc.Class({
extends: i,
execCommand: function(e) {
e == a.EVENT && s.scene.manager.ShowDungeonRewardPopup("chest", this);
},
OpenChest: function() {
this.openChest();
}
});
cc._RF.pop();
}, {
Chest: "Chest",
CommandType: "CommandType",
Game: "Game"
} ],
ChestRewardPopup: [ function(e, t) {
"use strict";
cc._RF.push(t, "64baeIFgcdCgZjB1UW/9ZIi", "ChestRewardPopup");
var i = e("PopupReward"), a = e("Game");
cc.Class({
extends: i,
okSkipSub: function() {
if (a.scene.targetChest) {
a.chestKey.incCount();
a.scene.targetChest.OpenChest();
}
},
cancelSub: function() {
a.scene.targetChest = null;
}
});
cc._RF.pop();
}, {
Game: "Game",
PopupReward: "PopupReward"
} ],
ChestReward: [ function(e, t) {
"use strict";
cc._RF.push(t, "2de60i9IT9FwYwpQcC0geKV", "ChestReward");
var i = e("Chest"), a = e("CommandType"), s = e("SaveData"), n = e("Game");
cc.Class({
extends: i,
properties: {
reviveInterval: 300
},
onLoad: function() {
this._super();
this.flagOpen = !0;
this.startTime = s.loadNumber(this.savekey + ".startTime", 0);
this.change_view();
var e = this.node.parent.getComponent("ResourceManager");
e && e.RegistResource(this);
},
CheckStatePoll: function(e) {
0 != this.flagOpen && e - this.startTime >= this.reviveInterval && this.appear_chest();
},
execCommand: function(e) {
if (1 != this.flagOpen && e == a.EVENT) if (n.chestKey.getCount() >= 1) {
n.chestKey.decCount();
this.openChest();
} else {
n.scene.targetChest = this;
n.scene.manager.ShowChestRewardPopup();
}
},
openFinish: function() {
this._super();
this.node.runAction(cc.sequence(cc.delayTime(5), cc.scaleTo(.2, 0), cc.callFunc(this.change_view, this)));
},
change_view: function() {
var e = this.node.getComponent(cc.Sprite);
e && (e.spriteFrame = this.flagOpen ? this.spriteOpen : this.spriteClose);
this.node.scale = this.flagOpen ? 0 : 1;
this.node.active = !this.flagOpen;
},
appear_chest: function() {
this.flagOpen = !1;
s.saveBoolean(this.savekey + ".flagOpen", !1);
this.change_view();
this.node.runAction(cc.spawn(cc.scaleTo(.4, 1), cc.jumpBy(.4, cc.v2(0, 0), 20, 1)));
},
openChest: function() {
this._super();
this.startTime = Math.floor(Date.now() / 1e3);
s.saveNumber(this.savekey + ".startTime", this.startTime);
},
OpenChest: function() {
this.node.runAction(cc.callFunc(this._openChest, this));
},
_openChest: function() {
n.scene.targetChest = null;
if (1 != this.flagOpen && n.chestKey.getCount() >= 1) {
n.chestKey.decCount();
this.openChest();
}
}
});
cc._RF.pop();
}, {
Chest: "Chest",
CommandType: "CommandType",
Game: "Game",
SaveData: "SaveData"
} ],
ChestSkill: [ function(e, t) {
"use strict";
cc._RF.push(t, "aaad0NOdLpP0pzHOYPbO4vr", "ChestSkill");
var i = e("Chest"), a = e("CommandType"), s = e("SkillPopup"), n = e("CheckMe"), o = e("Game");
cc.Class({
extends: i,
properties: {
skillTag: "",
needFloor: 1,
popupSkill: cc.Prefab,
checkMe: n,
effect: cc.Node,
spriteSkill: {
type: cc.Node,
default: null
},
seLearned: {
type: cc.AudioClip,
default: null
}
},
onLoad: function() {
this.checkMe.SetNum(this.needFloor);
this._super();
},
newgame: function() {
if (this.flagOpen) if (this.isAvailable()) ; else {
this.closeChest();
this.effect.active = !1;
}
},
getAvailableCommand: function() {
return a.EVENT;
},
execCommand: function(e) {
e == a.EVENT && (this.flagOpen ? this.showPopup() : this.isAvailable() ? this.openChest() : this.showPopup());
},
openChest: function() {
this._super();
this.checkMe.Hide();
o.dungeon.doLearnSkill(this.skillTag);
},
openFinish: function() {
this.show_sprite();
this.seLearned && o.sound.playSE(this.seLearned);
o.savedGames && o.savedGames.sendData();
},
change_view: function() {
this._super();
this.checkMe.node.active = !this.flagOpen;
this.spriteSkill && (this.flagOpen ? this.show_sprite() : this.spriteSkill.active = !1);
},
isAvailable: function() {
return o.dungeon.getReachFloorCount() >= this.needFloor;
},
show_sprite: function() {
if (this.spriteSkill) {
this.spriteSkill.active = !0;
this.spriteSkill.scale = 0;
this.spriteSkill.runAction(cc.sequence(cc.scaleTo(.2, 1), cc.moveBy(2, cc.v2(0, 10)), cc.callFunc(this.stay_sprite, this)));
this.effect.active = !0;
}
},
stay_sprite: function() {
this.spriteSkill && this.spriteSkill.runAction(cc.repeatForever(cc.sequence(cc.moveBy(1, cc.v2(0, -5)), cc.moveBy(1, cc.v2(0, 5)))));
},
showPopup: function() {
var e = cc.instantiate(this.popupSkill);
if (e) {
o.scene.camera.node.addChild(e);
var t = e.getComponent(s);
t && t.ShowWithTag(this.skillTag, this.needFloor);
}
}
});
cc._RF.pop();
}, {
CheckMe: "CheckMe",
Chest: "Chest",
CommandType: "CommandType",
Game: "Game",
SkillPopup: "SkillPopup"
} ],
ChestTools: [ function(e, t) {
"use strict";
cc._RF.push(t, "2adc4UgB2RJsLUu8cl1xFoW", "ChestTools");
var i = e("Chest"), a = e("CommandType"), s = e("Game"), n = e("ToolLevel"), o = e("ChestBonus");
cc.Class({
extends: i,
properties: {
needToolLv: {
type: n,
default: n.STONE
},
availableToolLv: {
type: n,
default: n.COPPER
},
needCompArtifact: "",
toolsSprite: {
type: cc.Node,
default: null
},
seNewTools: {
type: cc.AudioClip,
default: null
},
popupTool: cc.Prefab,
chestBonus: {
type: o,
default: null
}
},
ctor: function() {
this.flagOpenByPurchase = !1;
},
onLoad: function() {
this._super();
if (this.toolsSprite) {
this.toolsSprite.active = !1;
this.toolsSprite.scale = 0;
}
},
newgame: function() {
this.flagOpen && (this.isCompArtifact() ? s.purchase.IsSkipUpgrade(this.getAvailableToolLv()) && this.appear_bonus_chest() : this.closeChest());
},
getAvailableCommand: function() {
return a.EVENT;
},
execCommand: function(e) {
if (e == a.EVENT) {
if (this.flagOpen) {
this.isAvailable() && this.openChest();
return;
}
this.isAvailable() ? this.openChest() : this.isHaveTool() && s.purchase.IsSkipUpgrade(this.getAvailableToolLv()) ? this.openChestByPurchase() : this.showPopup();
}
},
getAvailableToolLv: function() {
return this.availableToolLv;
},
isHaveTool: function() {
return s.getToolLv() == this.needToolLv;
},
isCompArtifact: function() {
var e = s.getArtifactByTag(this.needCompArtifact);
return (null != e ? e.getCompRate() : 0) >= 100;
},
isAvailable: function() {
return !!this.isHaveTool() && !!this.isCompArtifact();
},
openChestByPurchase: function() {
this.flagOpenByPurchase = !0;
var e = s.getArtifactByTag(this.needCompArtifact);
null != e && e.forceComplete();
this.openChest();
},
openFinish: function() {
s.setToolLv(this.availableToolLv);
s.scene.hero.RenewTools();
if (this.toolsSprite) {
this.toolsSprite.active = !0;
this.toolsSprite.scale = 0;
this.toolsSprite.runAction(cc.sequence(cc.scaleTo(.2, 1), cc.moveBy(2, cc.v2(0, 20)), cc.fadeTo(.5, 0), cc.callFunc(this.popup_tool_finish, this), cc.hide()));
}
this.seNewTools && s.sound.playSE(this.seNewTools);
if (this.flagOpenByPurchase) {
this.appear_bonus_chest();
this.flagOpenByPurchase = !1;
}
},
popup_tool_finish: function() {
s.savedGames && s.savedGames.sendData();
},
showPopup: function() {
var e = cc.instantiate(this.popupTool);
if (e) {
s.scene.camera.node.addChild(e);
var t = e.getComponent("ToolPopup");
t && t.ShowWithInfo(this, this.needToolLv, this.availableToolLv);
}
},
appear_bonus_chest: function() {
this.chestBonus && this.node.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(this.chestBonus.AppearChest, this.chestBonus)));
}
});
cc._RF.pop();
}, {
Chest: "Chest",
ChestBonus: "ChestBonus",
CommandType: "CommandType",
Game: "Game",
ToolLevel: "ToolLevel"
} ],
Chest: [ function(e, t) {
"use strict";
cc._RF.push(t, "130e9nSBHZJyqUPWJrhifdr", "Chest");
var i = e("Gimmick"), a = e("CommandType"), s = e("SaveData"), n = e("Game");
cc.Class({
extends: i,
properties: {
useSave: !0,
dropItem: [ cc.Prefab ],
dropNum: [ cc.Integer ],
seOpen: {
type: cc.AudioClip,
default: null
},
spriteOpen: cc.SpriteFrame,
spriteClose: cc.SpriteFrame,
animeOpen: "ChestOpen"
},
onLoad: function() {
this._super();
this.dropItem.length != this.dropNum.length && cc.log("ERROR: Chest(" + this.savekey + ")");
this.flagOpen = !1;
this.useSave && (this.flagOpen = s.loadBoolean(this.savekey + ".flagOpen", !1));
this.change_view();
this.animation = this.node.getComponent(cc.Animation);
this.animation.on("finished", function() {
this.openFinish();
}, this);
},
newgame: function() {
this.flagOpen && this.closeChest();
},
getAvailableCommand: function() {
return this.flagOpen ? a.NONE : a.EVENT;
},
execCommand: function(e) {
1 != this.flagOpen && e == a.EVENT && this.openChest();
},
closeChest: function() {
this.flagOpen = !1;
this.useSave && s.saveBoolean(this.savekey + ".flagOpen", !1);
this.change_view();
},
openChest: function() {
this.flagOpen = !0;
this.useSave && s.saveBoolean(this.savekey + ".flagOpen", !0);
this.animation.play(this.animeOpen);
this.seOpen && n.sound.playSE(this.seOpen);
},
openFinish: function() {
this.drop_item();
},
drop_item: function() {
for (var e = 0; e < this.dropItem.length; e++) for (var t = this.dropNum[e], i = Math.floor(.5 * t), a = Math.round(Math.random() * i + t), s = 0; s < a; s++) {
var o = cc.instantiate(this.dropItem[e]);
if (o) {
n.scene.node.addChild(o);
o.setPosition(this.node.position);
var c = o.getComponent("DropItem");
c && c.drop();
}
}
},
change_view: function() {
var e = this.node.getComponent(cc.Sprite);
e && (e.spriteFrame = this.flagOpen ? this.spriteOpen : this.spriteClose);
}
});
cc._RF.pop();
}, {
CommandType: "CommandType",
Game: "Game",
Gimmick: "Gimmick",
SaveData: "SaveData"
} ],
CloudSave: [ function(e, t) {
"use strict";
cc._RF.push(t, "05f123KW35L1JfnLJzkKL6l", "CloudSave");
var i = e("Game"), a = e("SavedGamesState"), s = {
playerID: "",
flagSaveData: !1,
flagLoadData: !1,
savePlayTime: 0,
loadPlayTime: 0,
saveDataStr: "",
loadDataStr: "",
savedGamesState: a.NONE,
setPlayerID: function(e) {
this.playerID = e;
i.debug && cc.log("AAABBB: setPlayerID(" + this.playerID + ")");
},
setSaveData: function(e) {
if (i.savedGames) {
this.savePlayTime = e;
this.saveDataStr = i.savedGames.getAllKeyValue();
this.flagSaveData = !0;
}
},
pushSaveData: function(e) {
i.savedGames && i.savedGames.sendData(e);
},
sendSaveData: function(e) {
this.setSaveData(e);
this.saveSnapshot();
},
writeLoadData: function() {
i.savedGames && this.isFlagLoadData() && i.savedGames.writeKeyValueList(this.loadDataStr);
},
isFlagLoadData: function() {
var e = this.flagLoadData;
this.flagLoadData = !1;
return e;
},
getLoadPlayTime: function() {
return this.loadPlayTime;
},
getLoadDataStr: function() {
return this.loadDataStr;
},
getSavedGamesState: function() {
return this.savedGamesState;
},
clearSavedGamesState: function() {
this.savedGamesState = a.NONE;
},
saveSnapshot: function() {
if ("" !== this.playerID && "" !== this.saveDataStr && this.flagSaveData) {
this.flagSaveData = !1;
var e = new XMLHttpRequest();
if (e) {
var t = this.saveDataStr.replace(/&/g, "@@26@@").replace(/'/g, "@@27@@"), a = encodeURIComponent(t), s = i.purchase.GetUserID();
e.open("POST", "https://cobbee.net/app/minifarm/savedata.php", !0);
e.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
e.send("pd=" + this.playerID + "&ud=" + s + "&pt=" + this.savePlayTime + "&ds=" + a);
cc.log("AAABBB: saveSnapshot! playtime=" + this.savePlayTime);
}
}
},
loadSnapshot: function() {
if ("" !== this.playerID) {
this.savedGamesState = a.LOADING;
var e = "https://cobbee.net/app/minifarm/loaddata.php?ud=" + this.playerID, t = encodeURI(e), i = new XMLHttpRequest();
if (i) {
var s = this;
i.onreadystatechange = function() {
if (4 == i.readyState) if (200 == i.status) {
var e = i.responseText.split(/&/), t = e[0];
s.loadPlayTime = e[1];
if (0 == s.loadPlayTime || s.loadPlayTime <= s.savePlayTime) {
s.savedGamesState = a.NODATA;
cc.log("AAABBB: loadSnapshot(NODATA) loadPlayTime(" + s.loadPlayTime + ") <= savePlayTime(" + s.savePlayTime + ")");
} else if (t !== s.playerID) {
s.savedGamesState = a.ERROR;
cc.log("AAABBB: loadSnapshot(ERROR) invalid playerID: " + t + "!=" + s.playerID);
} else {
var n = e[2].replace(/@@26@@/g, "&").replace(/@@27@@/g, "'");
s.loadDataStr = n;
s.flagLoadData = !0;
s.savedGamesState = a.READY;
cc.log("AAABBB: loadSnapshot(READY) playtime=" + s.loadPlayTime);
}
} else {
s.savedGamesState = a.ERROR;
cc.log("AAABBB: loadSnapshot(ERROR) statusCode=" + i.status);
}
};
i.open("GET", t);
i.send();
}
}
}
};
t.exports = s;
cc._RF.pop();
}, {
Game: "Game",
SavedGamesState: "SavedGamesState"
} ],
Cloud: [ function(e, t) {
"use strict";
cc._RF.push(t, "6a64eP9o29K8LZWi5MhdOr2", "Cloud");
cc.Class({
extends: cc.Component,
properties: {
speed: 1,
startX: 800,
endX: -800
},
onLoad: function() {
this.node.anchorX = 0;
this.deadLineX = this.endX - this.node.width * this.node.scaleX;
},
update: function() {
this.node.x -= this.speed;
this.node.x < this.deadLineX && (this.node.x = this.startX);
}
});
cc._RF.pop();
}, {} ],
CoinLabel: [ function(e, t) {
"use strict";
cc._RF.push(t, "1b5c18crXJMxri2uueoZ+Ny", "CoinLabel");
cc.Class({
extends: cc.Component,
properties: {
sprite: cc.Node,
label: cc.Label
},
onLoad: function() {
this.width = 0;
this.SetCoin(this.label.string);
},
GetWidth: function() {
return this.width;
},
SetCoin: function(e) {
var t = "" + e, i = 8 + 5 * t.length, a = -i * this.node.anchorX;
this.sprite.x = a;
this.label.node.x = a + 8;
this.label.string = "";
this.label.string = t;
this.width = i;
},
SetNum: function(e) {
this.SetCoin(e);
},
SetColor: function(e) {
this.label.node.color = e;
}
});
cc._RF.pop();
}, {} ],
CommandType: [ function(e, t) {
"use strict";
cc._RF.push(t, "1f903l31YtLjpO7IAP3gyNQ", "CommandType");
var i = cc.Enum({
NONE: 0,
WALK: 1,
ATTACK: 2,
AXE: 3,
PICKAXE: 4,
HOE: 5,
SEED: 6,
WATER: 7,
COLLECT: 8,
EVENT: 9,
MAX: 10
});
t.exports = i;
cc._RF.pop();
}, {} ],
ConfigPopup: [ function(e, t) {
"use strict";
cc._RF.push(t, "8b39atUh2VIHryYLbi69XNn", "ConfigPopup");
var i = e("Popup"), a = e("Game"), s = e("AppPlatform");
cc.Class({
extends: i,
properties: {
popupLang: cc.Prefab,
labelLang: cc.Label,
buttonLogin: cc.Button,
labelLogin: cc.Label,
buttonAchievement: cc.Button,
popupReset: cc.Prefab,
buttonAppVer: cc.Button,
buttonNotify: cc.Button
},
onLoad: function() {
this._super();
if (a.achievement) {
var e = a.achievement.IsLogined();
this.buttonLogin.interactable = !e;
this.buttonAchievement.interactable = e;
this.labelLogin.string = a.getLocalizedStr(e ? "config_logined" : "config_login", "Log In");
} else {
this.buttonLogin.node.active = !1;
this.buttonAchievement.node.active = !1;
(s.isFacebook() || s.isTikTok()) && (this.buttonAppVer.node.active = !0);
}
this.buttonNotify.node.active = a.explorer.IsAvailableNotification();
},
Ok: function() {
this.Cancel();
},
Cancel: function() {
this.Hide();
},
Show: function() {
if (this._super()) {
this.refresh_lang_label();
return !0;
}
return !1;
},
PressLang: function() {
if (!this.IsNotAvailableButton()) {
var e = cc.instantiate(this.popupLang);
if (e) {
a.scene.camera.node.addChild(e);
var t = e.getComponent("LangPopup");
if (t) {
t.SetCallbackOk(this.callbackLang, this);
t.Show();
}
}
}
},
callbackLang: function() {
this.Cancel();
},
refresh_lang_label: function() {
this.labelLang.string = a.getLangString(a.getLang());
},
PressLogin: function() {
if (!this.IsNotAvailableButton()) {
a.achievement && a.achievement.Login();
this.Cancel();
}
},
PressAchievement: function() {
if (!this.IsNotAvailableButton()) {
a.achievement && a.achievement.ShowUI();
this.Cancel();
}
},
PressReset: function() {
if (!this.IsNotAvailableButton()) {
var e = cc.instantiate(this.popupReset);
if (e) {
a.scene.camera.node.addChild(e);
var t = e.getComponent(i);
t && t.Show();
}
this.Cancel();
}
},
PressAnother: function() {
if (!this.IsNotAvailableButton()) {
cc.sys.os === cc.sys.OS_IOS ? cc.sys.openURL("https://apps.apple.com/us/app/harmonia-island/id6757864471") : cc.sys.openURL("https://play.google.com/store/apps/details?id=jp.coffeebreakin.app.cozyfarm");
this.Cancel();
}
},
PressAppVer: function() {
if (!this.IsNotAvailableButton()) {
cc.sys.os === cc.sys.OS_IOS ? cc.sys.openURL("https://apps.apple.com/us/app/id1534460779") : cc.sys.openURL("https://play.google.com/store/apps/details?id=jp.coffeebreakin.app.minifarm");
this.Cancel();
}
},
PressNotify: function() {
if (!this.IsNotAvailableButton()) {
a.explorer.IsAvailableNotification() && a.scene.manager.ShowNotificationPopup();
this.Cancel();
}
}
});
cc._RF.pop();
}, {
AppPlatform: "AppPlatform",
Game: "Game",
Popup: "Popup"
} ],
Counter: [ function(e, t) {
"use strict";
cc._RF.push(t, "ccab4Zgs11PJa97HP3N4Im0", "Counter");
var i = e("BaseModel"), a = cc.Class({
extends: i,
init: function(e, t, i) {
this._super(e + ".Counter", t);
this.count = i;
this.countStart = i;
this.countAdd = 0;
},
load: function() {
this.count = this.loadNumber("count", this.count);
this.countAdd = this.loadNumber("countAdd", this.countAdd);
},
reset: function() {
this.count = this.countStart;
this.countAdd = 0;
this.saveNumber("count", this.count);
this.saveNumber("countAdd", this.countAdd);
},
getCount: function() {
return this.count;
},
addCount: function(e) {
this.setCount(this.count + e);
this.countAdd += e;
this.saveNumber("countAdd", this.countAdd);
},
incCount: function() {
this.addCount(1);
},
decCount: function() {
this.addCount(-1);
},
isCorrect: function() {
return this.count == this.countStart + this.countAdd;
},
setCount: function(e) {
this.count = e;
this.saveNumber("count", this.count);
}
});
t.exports = a;
cc._RF.pop();
}, {
BaseModel: "BaseModel"
} ],
Crash: [ function(e, t) {
"use strict";
cc._RF.push(t, "0f4f2QiTNxOKKdaF1uwzBws", "Crash");
cc._RF.pop();
}, {} ],
Crop: [ function(e, t) {
"use strict";
cc._RF.push(t, "87280UQzUpOrZ4kvjDZM3Me", "Crop");
var i = e("SaveData"), a = e("Resource"), s = e("ResourceState"), n = e("CommandType"), o = e("Game");
cc.Class({
extends: a,
properties: {
seSeed: cc.AudioClip,
growSprites: [ cc.SpriteFrame ]
},
onLoad: function() {
this._super();
this.field = null;
this.seeded = !1;
this.level = 0;
if (this.useSave) {
this.seeded = i.loadBoolean(this.savekey + ".seeded", !1);
this.level = i.loadNumber(this.savekey + ".level", 0);
}
this.growIntervals = [];
for (var e = this.growSprites.length - 1, t = Math.floor(this.reviveInterval / e), a = 0; a < e; a++) this.growIntervals[a] = t;
},
refreshView: function() {
var e = null;
this.state <= s.GROWING ? e = this.growSprites[this.level] : this.state == s.REVIVE && this.seeded && (e = this.growSprites[this.growSprites.length - 1]);
var t = this.node.getComponent(cc.Sprite);
t && (t.spriteFrame = e);
},
progress: function(e) {
if (0 == this.level && this.state == s.NONE && this.IsSeeded()) {
if (this.field && 1 == this.field.isWatered()) {
this.change_state(s.GROWING);
this.reset_time();
}
} else {
for (var t = 0, i = this.level, a = 0; a < this.growIntervals.length; a++) {
t += this.growIntervals[a];
this.level > a || t <= e && this.change_level(a + 1);
}
this.level >= this.growIntervals.length ? this.change_state(s.REVIVE) : i != this.level && this.refreshView();
}
},
getAvailableCommand: function() {
if (this.state >= s.REVIVE) {
if (this.seeded) return n.HOE;
if (this.field && this.field.isEnableSeed()) return n.SEED;
}
return n.NONE;
},
execCommand: function(e) {
if (e == n.SEED) {
this.seSeed && o.sound.playSE(this.seSeed);
this.change_level(0);
this.change_seeded(!0);
o.dungeon.isFireSkill("AutoSeed") && this.field.WaterForced();
this.finish();
} else if (e == n.HOE) {
this.seDamage && o.sound.playSE(this.seDamage);
this.change_level(0);
this.change_seeded(!1);
this.drop_item();
this.refreshView();
return;
}
},
SetField: function(e) {
this.field = e;
},
IsSeeded: function() {
return this.seeded;
},
PutSeedForced: function() {
this.change_level(0);
this.change_seeded(!0);
this.finish();
},
change_seeded: function(e) {
this.seeded = e;
this.useSave && i.saveBoolean(this.savekey + ".seeded", this.seeded);
},
change_level: function(e) {
this.level = e;
this.useSave && i.saveNumber(this.savekey + ".level", this.level);
},
revive: function() {
this.change_seeded(!0);
this.change_state(s.REVIVE);
this.refreshView();
},
reset: function() {
this._super();
this.change_seeded(!1);
this.change_level(0);
this.change_state(s.NONE);
this.refreshView();
}
});
cc._RF.pop();
}, {
CommandType: "CommandType",
Game: "Game",
Resource: "Resource",
ResourceState: "ResourceState",
SaveData: "SaveData"
} ],
Currency: [ function(e, t) {
"use strict";
cc._RF.push(t, "d9ad6LOl7pK9I+TRXKdq4uk", "Currency");
var i = e("BaseModel"), a = cc.Class({
extends: i,
init: function(e, t, i, a) {
this._super(e + ".Currency", t);
this.def = i;
this.max = a;
this.value = i;
this.total = i;
this.use = 0;
this.tmp = 0;
this.flagSaveLater = !1;
},
load: function() {
this.value = this.loadNumber("value", this.value);
this.total = this.loadNumber("total", this.total);
this.use = this.loadNumber("use", this.use);
},
saveLater: function() {
if (this.flagSaveLater) {
this.flagSaveLater = !1;
this.saveNumber("total", this.total);
this.saveNumber("value", this.value);
}
},
reset: function() {
this.value = this.def;
this.total = this.def;
this.use = 0;
this.saveNumber("value", this.value);
this.saveNumber("total", this.total);
this.saveNumber("use", this.use);
},
getValue: function() {
return this.value;
},
getMax: function() {
return this.max;
},
getTotal: function() {
return this.total;
},
getUse: function() {
return this.use;
},
isMax: function() {
return this.value >= this.max;
},
useCurrency: function(e) {
return e >= 0;
},
saveCurrency_: function(e, t) {
this.value + e > this.max && (e = this.max - this.value);
if (e > 0) {
this.total += e;
this.value += e;
if (t) {
this.flagSaveLater = !1;
this.saveNumber("total", this.total);
this.saveNumber("value", this.value);
} else this.flagSaveLater = !0;
}
},
saveCurrency: function(e) {
this.saveCurrency_(e, !0);
},
saveCurrencyLater: function(e) {
this.saveCurrency_(e, !1);
},
isCorrect: function() {
return this.total == this.value + this.use;
},
getTmp: function() {
return this.tmp;
},
setTmp: function(e) {
this.tmp = e;
},
setValue: function(e) {
this.value = e;
this.saveNumber("value", this.value);
}
});
t.exports = a;
cc._RF.pop();
}, {
BaseModel: "BaseModel"
} ],
Direction: [ function(e, t) {
"use strict";
cc._RF.push(t, "865e6s2ldFF/a69vzkpkNjL", "Direction");
var i = cc.Enum({
UP: 0,
RIGHT: 1,
DOWN: 2,
LEFT: 3,
RANDOM: 4
});
t.exports = i;
cc._RF.pop();
}, {} ],
DropDebris: [ function(e, t) {
"use strict";
cc._RF.push(t, "880d1MMqn9LR6DrUMMLr6Ty", "DropDebris");
e("Game");
var i = e("DropItem");
cc.Class({
extends: i,
onLoad: function() {},
onCollisionStay: function() {},
update: function() {},
drop: function() {
var e = 5 + 15 * Math.random(), t = 6.28 * Math.random(), i = cc.v2(Math.cos(t) * e, Math.sin(t) * e);
this.node.angle = 90 * Math.floor(4 * Math.random());
this.node.zIndex = -i.y;
this.node.runAction(cc.sequence(cc.jumpBy(.4, i, 40, 1), cc.delayTime(1), cc.fadeOut(.6), cc.callFunc(this.drop_end, this)));
},
drop_end: function() {
this.node.isValid && this.node.destroy();
},
finish: function() {},
CheckStatePoll: function() {}
});
cc._RF.pop();
}, {
DropItem: "DropItem",
Game: "Game"
} ],
DropItemType: [ function(e, t) {
"use strict";
cc._RF.push(t, "361e3jC2vdFJ6awiDOlJqCX", "DropItemType");
var i = cc.Enum({
NONE: 0,
COIN: 1,
GEM: 2,
MATERIAL: 3,
CROP: 4,
FISH: 5,
EX: 6,
DUNGEON: 7
});
t.exports = i;
cc._RF.pop();
}, {} ],
DropItem: [ function(e, t) {
"use strict";
cc._RF.push(t, "44668YXqWNLwZvtdG1TCZmr", "DropItem");
var i = e("Game"), a = e("DropItemType"), s = e("ItemRank"), n = e("ResourceManager");
cc.Class({
extends: cc.Component,
properties: {
type: {
type: a,
default: a.NONE
},
SE: {
type: cc.AudioClip,
default: null
},
tag: "",
rank: {
type: s,
default: s.NONE
},
val: 1
},
ctor: function() {
this.hero = null;
this.flagDrop = !1;
this.startTime = 0;
},
onLoad: function() {
this.node.zIndex = 1e3;
if (i.item.getRank(this.tag) == s.RARE) {
var e = .01 + .01 * i.dungeon.getSoilRate();
Math.random() < e && (this.rank = s.RARE);
}
},
onCollisionStay: function(e) {
if (1 == this.flagDrop && "Hero" == e.node.group && 444 == e.tag && null == this.hero) {
var t = e.node.getComponent("Hero");
t && t.isMove() && (this.hero = t);
}
},
update: function(e) {
if (this.hero) {
var t = this.hero.node.position.sub(this.node.position);
if (t.mag() < 3) {
this.unregist_manager();
this.finish();
} else {
var i = t.normalize();
this.node.position = this.node.position.add(i.mul(108 * e));
}
}
},
drop: function() {
var e = 10 + 25 * Math.random(), t = 6.28 * Math.random(), i = cc.v2(Math.cos(t) * e, Math.sin(t) * e);
this.node.runAction(cc.sequence(cc.jumpBy(.4, i, 40, 1), cc.callFunc(this.drop_end, this)));
},
drop_end: function() {
if (this.rank == s.RARE) {
var e = this.node.getContentSize(), t = cc.v2(e.width / 2 - 1.5, e.height / -2 + 1.5);
i.scene.manager.AddRareStar(this.node, t);
}
this.flagDrop = !0;
this.regist_manager();
},
finish: function() {
if (cc.isValid(this.node) && this.node.isValid) {
this.hero = null;
this.SE && i.sound.playSE(this.SE);
if (i.flagBag) if (this.type == a.EX) {
i.dungeon.saveEx(this.val);
i.scene.ui.RefreshEx();
} else i.addBag(this.tag, this.rank, this.val); else switch (this.type) {
case a.COIN:
i.coin.saveCurrencyLater(this.val);
i.scene.ui.RefreshCoin();
break;

case a.MATERIAL:
case a.CROP:
case a.DUNGEON:
i.item.addNum(this.tag, this.rank, this.val);
break;

case a.EX:
i.dungeon.saveEx(this.val);
i.scene.ui.RefreshEx();
}
this.node.isValid && this.node.destroy();
}
},
regist_manager: function() {
var e = this.node.parent.getComponent(n);
if (e) {
e.RegistDropItem(this);
this.startTime = Math.floor(Date.now() / 1e3);
}
},
unregist_manager: function() {
if (cc.isValid(this.node) && cc.isValid(this.node.parent) && this.node.isValid && this.node.parent.isValid) {
var e = this.node.parent.getComponent(n);
e && e.UnregistDropItem(this);
}
},
CheckStatePoll: function(e) {
this.hero || e - this.startTime > 1 && (this.hero = i.scene.hero);
},
SetRank: function(e) {
this.rank = e;
}
});
cc._RF.pop();
}, {
DropItemType: "DropItemType",
Game: "Game",
ItemRank: "ItemRank",
ResourceManager: "ResourceManager"
} ],
DungeonBossScene: [ function(e, t) {
"use strict";
cc._RF.push(t, "65be64ZaH1EJKJQb9bJwasY", "DungeonBossScene");
var i = e("DungeonScene"), a = e("RemoteLock"), s = e("Monster"), n = e("Game");
cc.Class({
extends: i,
properties: {
gateGoal: a
},
ctor: function() {
this.flagAnnihilated = !1;
this.monsters = [];
this.monsterNum = 0;
this.monsterCnt = 0;
},
start: function() {
n.dungeon.bossBattle();
n.dungeon.incFloorCount();
n.scene.ui.RefreshFloor();
this.node.runAction(cc.sequence(cc.delayTime(.1), cc.callFunc(this.dec_floor_count, this), cc.delayTime(1.5), cc.callFunc(this.registMonsters, this)));
},
dec_floor_count: function() {
n.dungeon.decFloorCount();
},
registMonsters: function() {
for (var e = this.node.children, t = 0; t < e.length; t++) {
var i = e[t].getComponent(s);
if (i) {
i.SetDeadCallback(this.deadMonster, this);
i.Wakeup();
this.monsterNum++;
this.monsters.push(i);
}
}
this.dungeonManager.StartBgm();
},
deadMonster: function() {
this.monsterCnt++;
if (0 == this.flagAnnihilated && this.monsterCnt >= this.monsterNum) {
this.flagAnnihilated = !0;
n.dungeon.incFloorCount();
this.gateGoal.OpenLock();
this.dungeonManager.StopBgm();
}
}
});
cc._RF.pop();
}, {
DungeonScene: "DungeonScene",
Game: "Game",
Monster: "Monster",
RemoteLock: "RemoteLock"
} ],
DungeonHole: [ function(e, t) {
"use strict";
cc._RF.push(t, "e45e2xbNvlJ1I6uEkpFVT9/", "DungeonHole");
var i = e("Gimmick"), a = e("Popup"), s = e("CheckMe"), n = e("CheckType"), o = e("Game");
cc.Class({
extends: i,
properties: {
dungeonTag: "",
popupDungeonStart: cc.Prefab,
checkMe: s
},
onLoad: function() {
this._super();
this.flagRevive = !1;
this.checkMe.SetIcon(n.WAIT);
var e = this.node.parent.getComponent("ResourceManager");
e && e.RegistResource(this);
},
CheckStatePoll: function(e) {
if (0 == this.flagRevive && o.dungeon.isReviveTime(e)) {
this.flagRevive = !0;
this.checkMe.SetIcon(n.ME);
}
},
collisionEnter: function() {
this.flagRevive ? this.show_popup() : this.show_reward();
},
show_popup: function() {
var e = cc.instantiate(this.popupDungeonStart);
if (e) {
o.scene.camera.node.addChild(e);
var t = e.getComponent(a);
t && t.Show();
}
},
show_reward: function() {
o.scene.manager.ShowDungeonRewardPopup("hole", this);
}
});
cc._RF.pop();
}, {
CheckMe: "CheckMe",
CheckType: "CheckType",
Game: "Game",
Gimmick: "Gimmick",
Popup: "Popup"
} ],
DungeonManager: [ function(e, t) {
"use strict";
cc._RF.push(t, "a8c66J029BDHrpdQLLW0sEY", "DungeonManager");
var i = e("Game"), a = e("DungeonRoom"), s = e("Tree"), n = e("Crop"), o = e("RoomType"), c = [ [ [ -8, 16 ], [ 8, 16 ] ], [ [ -8, 0 ], [ 8, 0 ] ] ];
cc.Class({
extends: cc.Component,
properties: {
bgm: {
default: null,
type: cc.AudioClip
},
prefabRooms: [ cc.Prefab ],
prefabZzz: cc.Prefab,
prefabStairDown: cc.Prefab,
prefabField: cc.Prefab,
rateRock: 30,
rateTree: 30,
rateCrop: 30,
rateChest: 10,
prefabRocks: [ cc.Prefab ],
rateRocks: [ cc.Integer ],
prefabTrees: [ cc.Prefab ],
rateTrees: [ cc.Integer ],
prefabCrops: [ cc.Prefab ],
rateCrops: [ cc.Integer ],
prefabChests: [ cc.Prefab ],
rateChests: [ cc.Integer ],
prefabMonsters: [ cc.Prefab ],
rateMonsters: [ cc.Integer ],
beginMonsters: [ cc.Integer ],
endMonsters: [ cc.Integer ]
},
onLoad: function() {
cc.assert(this.prefabRocks.length == this.rateRocks.length, "AAABBB: ERROR!!! prefabRocks != rateRocks");
cc.assert(this.prefabTrees.length == this.rateTrees.length, "AAABBB: ERROR!!! prefabTrees != rateTrees");
cc.assert(this.prefabCrops.length == this.rateCrops.length, "AAABBB: ERROR!!! prefabCrops != rateCrops");
cc.assert(this.prefabChests.length == this.rateChests.length, "AAABBB: ERROR!!! prefabChests != rateChests");
cc.assert(this.prefabMonsters.length == this.rateMonsters.length && this.prefabMonsters.length == this.beginMonsters.length && this.prefabMonsters.length == this.endMonsters.length, "AAABBB: ERROR!!! prefabMonsters != rateMonsters");
this.roomTypes = [ o.ROCK, o.TREE, o.CROP, o.CHEST ];
this.rateTypes = [ this.rateRock, this.rateTree, this.rateCrop, this.rateChest ];
this.rateTotal = 0;
for (var e = 0; e < this.rateTypes.length; e++) this.rateTotal += this.rateTypes[e];
this.flagChest = !0;
this.rateRocksTotal = 0;
for (var t = 0; t < this.rateRocks.length; t++) this.rateRocksTotal += this.rateRocks[t];
this.rateTreesTotal = 0;
for (var i = 0; i < this.rateTrees.length; i++) this.rateTreesTotal += this.rateTrees[i];
this.rateCropsTotal = 0;
for (var a = 0; a < this.rateCrops.length; a++) this.rateCropsTotal += this.rateCrops[a];
this.rateChestsTotal = 0;
for (var s = 0; s < this.rateChests.length; s++) this.rateChestsTotal += this.rateChests[s];
},
createRoom: function(e) {
var t = Math.floor(Math.random() * this.prefabRooms.length), i = cc.instantiate(this.prefabRooms[t]);
if (i) {
var s = i.getComponent(a);
if (s) {
s.setRoomType(e);
return s;
}
}
return null;
},
randomRoomType: function() {
for (var e = 0, t = Math.random() * this.rateTotal, i = 0; i < this.rateTypes.length; i++) if ((e += this.rateTypes[i]) > t) {
var a = this.roomTypes[i];
a == o.CHEST && this.remove_chest_table();
return a;
}
return o.NONE;
},
putRoomObject: function(e) {
var t = e.getRoomType(), i = e.getPutPos();
switch (t) {
case o.STAIR:
this.putStairDown(i);
break;

case o.ROCK:
this.putRock(i);
break;

case o.TREE:
this.putTree(i);
break;

case o.CROP:
this.putCrop(i);
break;

case o.CHEST:
this.putChest(i);
}
t != o.NONE && t != o.CHEST && this.putMonster(e.getPutPos());
},
putStairDown: function(e) {
var t = cc.v2(e.x, e.y + 9);
this.put_prefab(this.prefabStairDown, t);
},
putRock: function(e) {
var t = this.get_random_idx(this.rateRocksTotal, this.rateRocks);
-1 != t && this.put_prefab(this.prefabRocks[t], e);
},
putTree: function(e) {
var t = this.get_random_idx(this.rateTreesTotal, this.rateTrees);
if (-1 != t) {
var i = this.put_prefab(this.prefabTrees[t], e);
if (i) {
var a = i.getComponent(s);
a && a.changeStump();
}
}
},
putCrop: function(e) {
var t = this.get_random_idx(this.rateCropsTotal, this.rateCrops);
if (-1 != t) {
for (var i = new Array(2), a = 0, s = 0; s < 2; s++) {
i[s] = new Array(2);
for (var o = 0; o < 2; o++) {
var r = Math.random() < .5;
i[s][o] = r;
r && a++;
}
}
0 == a && (i[0][0] = !0);
for (var h = 0; h < 2; h++) for (var u = 0; u < 2; u++) if (0 != i[h][u]) {
var l = cc.v2(e.x + c[h][u][0], e.y + c[h][u][1]);
this.put_prefab(this.prefabField, l);
var p = this.put_prefab(this.prefabCrops[t], l);
if (p) {
var d = p.getComponent(n);
d && d.revive();
}
}
}
},
putChest: function(e) {
var t = this.get_random_idx(this.rateChestsTotal, this.rateChests);
-1 != t && this.put_prefab(this.prefabChests[t], e);
},
putMonster: function(e) {
for (var t = i.dungeon.getFloorCount(), a = 0, s = [], n = 0; n < this.rateMonsters.length; n++) {
var o = 0;
t >= this.beginMonsters[n] && t <= this.endMonsters[n] && (o = this.rateMonsters[n]);
a += o;
s.push(o);
}
var c = this.get_random_idx(a, s);
-1 != c && this.put_prefab(this.prefabMonsters[c], e);
},
get_random_idx: function(e, t) {
for (var i = -1, a = 0, s = Math.random() * e, n = 0; n < t.length; n++) if ((a += t[n]) > s) {
i = n;
break;
}
return i;
},
put_prefab: function(e, t) {
var a = cc.instantiate(e);
if (a) {
i.scene.node.addChild(a);
a.setPosition(t);
return a;
}
return null;
},
remove_chest_table: function() {
this.flagChest = !1;
this.rateTypes = [ this.rateRock, this.rateTree, this.rateCrop ];
this.rateTotal -= this.rateChest;
},
StartBgm: function() {
this.bgm && i.sound.playBGM(this.bgm);
},
StopBgm: function() {
this.bgm && i.sound.stopBGM();
},
showZzz: function() {
var e = i.scene.hero.node.position.add(cc.v2(-12, 6)), t = this.put_prefab(this.prefabZzz, e);
t && t.runAction(cc.moveBy(3, cc.v2(-3, 3)));
return t;
}
});
cc._RF.pop();
}, {
Crop: "Crop",
DungeonRoom: "DungeonRoom",
Game: "Game",
RoomType: "RoomType",
Tree: "Tree"
} ],
DungeonResultPopup: [ function(e, t) {
"use strict";
cc._RF.push(t, "00995YdwB5HnrwR0SYfazOE", "DungeonResultPopup");
var i = e("Popup"), a = e("LevelInfo"), s = e("FadeCover"), n = e("CoinLabel"), o = e("ItemInfo"), c = e("Game");
cc.Class({
extends: i,
properties: {
windowLevel: cc.Node,
windowButton: cc.Node,
levelInfo: a,
fadeCover: s,
coinLabel: n,
exLabel: n,
itemInfo: cc.Prefab
},
ctor: function() {
this.flagUseCancel = !1;
this.flagUseTouchHide = !1;
this.exp = 0;
},
onLoad: function() {
this._super();
var e = c.dungeon.getSoilLevelModel();
null != e && this.levelInfo.SetLevelModel(e);
this.windowLevel.scale = 0;
this.windowButton.scale = 0;
},
onKeyUp: function(e) {
switch (e.keyCode) {
case cc.macro.KEY.enter:
this.PressOk();
}
},
Ok: function() {
c.dungeon.backBasecamp(this.fadeCover);
},
show_finish: function() {},
show_finish_2: function() {
this.flagShow = !0;
c.EnablePress();
cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
c.achievement && c.achievement.Unlock("try_dungeon");
},
Hide: function() {
if (this._super()) {
this.windowLevel.runAction(cc.scaleTo(.1, 0));
this.windowButton.runAction(cc.scaleTo(.1, 0));
this.window.opacity = 255;
return !0;
}
return !1;
},
SetInfo: function() {
var e = 0, t = 0, i = 0, a = cc.v2(-63, 0);
for (var s in c.bagNum) {
var n = c.getBagItemNum(s);
if (!(n <= 0)) {
var o = c.getBagItemTag(s), r = c.getBagItemRank(s), h = !1;
"Coin" === o ? e = n : c.item.isItem(o) && (h = !0);
if (h) {
var u = cc.v2(18 * i + a.x, -24 * t + a.y);
this.create_item_info(o, r, n, u);
if (++i >= 8) {
t++;
i = 0;
}
}
}
}
c.saveBag();
this.coinLabel.SetCoin(e);
this.exp = c.dungeon.getEx();
this.exLabel.SetNum(this.exp);
this.levelInfo.Renew();
},
create_item_info: function(e, t, i, a) {
var s = cc.instantiate(this.itemInfo);
if (s) {
this.window.addChild(s);
s.setPosition(a);
s.color = new cc.Color(245, 189, 126);
var n = s.getComponent(o);
if (n) {
n.SetTag(e);
n.SetRank(t);
n.SetNum(i);
}
}
},
Show: function() {
if (this._super()) {
this.SetInfo();
this.windowLevel.runAction(cc.sequence(cc.delayTime(1), cc.scaleTo(.4, 1).easing(cc.easeInOut(3)), cc.callFunc(this.show_popup_level, this)));
}
},
show_popup_level: function() {
this.levelInfo.SetAddExpCallBack(this.show_popup_button, this);
this.levelInfo.AddExp(this.exp);
},
show_popup_button: function() {
this.windowButton.runAction(cc.sequence(cc.scaleTo(.4, 1).easing(cc.easeInOut(3)), cc.callFunc(this.show_popup_message, this), cc.callFunc(this.show_finish_2, this)));
},
show_popup_message: function() {}
});
cc._RF.pop();
}, {
CoinLabel: "CoinLabel",
FadeCover: "FadeCover",
Game: "Game",
ItemInfo: "ItemInfo",
LevelInfo: "LevelInfo",
Popup: "Popup"
} ],
DungeonResultScene: [ function(e, t) {
"use strict";
cc._RF.push(t, "fcf57Rg/gZA7a2NmWKniOE9", "DungeonResultScene");
var i = e("Popup");
cc.Class({
extends: cc.Component,
properties: {
popupResult: cc.Prefab
},
onLoad: function() {
this.node.runAction(cc.sequence(cc.delayTime(.6), cc.callFunc(this.showResult, this)));
},
showResult: function() {
if (this.popupResult) {
var e = cc.instantiate(this.popupResult);
if (e) {
this.node.addChild(e);
var t = e.getComponent(i);
t && t.Show();
}
}
}
});
cc._RF.pop();
}, {
Popup: "Popup"
} ],
DungeonRewardPopup: [ function(e, t) {
"use strict";
cc._RF.push(t, "2afcfSI/Q9H35ltfjEZOd9o", "DungeonRewardPopup");
var i = e("PopupReward"), a = e("PurchaseDungeonPopup"), s = e("AppPlatform"), n = e("Game"), o = null;
cc.Class({
extends: i,
properties: {
labelText: cc.Label,
buttonAmulet: cc.Button,
popupPurchase: cc.Prefab
},
ctor: function() {
this.flagEnable = !1;
},
ShowWithInfo: function(e, t) {
n.scene.SetRewardDungeonTarget(e, t);
this.labelText.string = n.getLocalizedStr("dungeon_reward_txt_" + e) + " " + n.getLocalizedStr("dungeon_reward_txt_base");
this.labelText._forceUpdateRenderData();
var i = this.labelText.node.getBoundingBox();
this.window.height = i.height + 56;
this.Show();
},
okSkipSub: function() {
n.scene.RewardDungeonSuccess();
n.scene.RewardDungeonClose();
},
cancelSub: function() {
n.scene.RewardDungeonCancel();
},
isUseVideo: function() {
return !s.isWebTest() && !n.purchase.IsDungeonAmulet();
},
customButtonOk: function(e) {
this.flagEnable = e;
var t = n.purchase.IsDungeonAmulet();
e && t && (e = !1);
this.buttonOk.interactable = e;
this.flagUseOk = e;
if (t) {
var i = this.buttonAmulet.node.getChildByName("Background");
i && (i.color = new cc.color(0, 255, 0));
}
},
PressAmulet: function() {
if (!this.IsNotAvailableButton()) if (n.purchase.IsDungeonAmulet()) {
this.okSkipSub();
this.Hide();
} else if (this.popupPurchase) {
var e = cc.instantiate(this.popupPurchase);
if (e) {
n.scene.camera.node.addChild(e);
var t = e.getComponent(a);
if (t) {
o = this;
t.SetCallbackHidePopup(function() {
o.customButtonOk(o.flagEnable);
});
t.Show();
}
}
}
}
});
cc._RF.pop();
}, {
AppPlatform: "AppPlatform",
Game: "Game",
PopupReward: "PopupReward",
PurchaseDungeonPopup: "PurchaseDungeonPopup"
} ],
DungeonRoom: [ function(e, t) {
"use strict";
cc._RF.push(t, "b09ae0Ml7ZF0a1o/ZGOyR/8", "DungeonRoom");
var i = e("RoomType");
cc.Class({
extends: cc.Component,
properties: {
putRanges: [ cc.Node ]
},
ctor: function() {
this.type = i.NONE;
},
onLoad: function() {
this.boxColliders = this.node.getComponents(cc.PhysicsBoxCollider);
},
getRoomType: function() {
return this.type;
},
setRoomType: function(e) {
this.type = e;
},
openByDir: function(e) {
var t = this.node.getChildByName("pass_" + e);
t && (t.active = !0);
for (var i = 0; i < this.boxColliders.length; i++) this.boxColliders[i].tag == 100 + e && (this.boxColliders[i].enabled = !1);
},
getPutPos: function() {
var e = this.node.getPosition(), t = this.putRanges.length, i = Math.floor(Math.random() * t);
if (t > 0) {
var a = this.putRanges[i].getBoundingBox(), s = Math.random() * a.width, n = Math.random() * a.height, o = cc.v2(a.origin.x + s, a.origin.y + n);
return cc.v2(e.x + o.x, e.y + o.y);
}
return e;
}
});
cc._RF.pop();
}, {
RoomType: "RoomType"
} ],
DungeonScene: [ function(e, t) {
"use strict";
cc._RF.push(t, "b4f63OSj4ZPQqb+j35pIlrM", "DungeonScene");
var i = e("BaseScene"), a = e("Game"), s = e("Direction"), n = e("RoomType"), o = [ s.DOWN, s.LEFT, s.UP, s.RIGHT ], c = [ [ 0, 1 ], [ 1, 0 ], [ 0, -1 ], [ -1, 0 ] ];
cc.Class({
extends: i,
properties: {
dungeonManager: e("DungeonManager"),
roomLayer: cc.Node
},
ctor: function() {
this.rooms = [];
},
onLoad: function() {
this._super();
a.dungeon.dungeonScene = this;
},
start: function() {
this.dungeonManager.StartBgm();
this.makeDungeon();
},
makeDungeon: function() {
a.dungeon.incFloorCount();
a.scene.ui.RefreshFloor();
this.cleanDungeon();
this.makeStage();
},
FowardDungeon: function() {
this.PauseInput();
this.fadeCover.FadeOutIn(1, cc.Color.BLACK, this.makeDungeon, this, this.ResumeInput, this);
},
cleanDungeon: function() {
for (var e = this.node.children, t = 0; t < e.length; t++) e[t] != this.hero.node && e[t].destroy();
this.roomLayer.removeAllChildren();
},
makeStage: function() {
this.rooms = new Array(3);
for (var e = new Array(3), t = 0; t < 3; t++) {
this.rooms[t] = new Array(3);
e[t] = new Array(3);
for (var i = 0; i < 3; i++) {
this.rooms[t][i] = null;
e[t][i] = n.NONE;
}
}
if (Math.random() < .7) {
var a = Math.random() < .5 ? 0 : 2, s = Math.random() < .5 ? 0 : 2;
e[a][s] = -1;
}
if (Math.random() < .7) {
var o = Math.random() < .5 ? 0 : 2;
Math.random() < .5 ? e[1][o] = -1 : e[o][1] = -1;
}
for (var c = -1, r = -1, h = 0; h < 5; h++) {
var u = Math.floor(3 * Math.random()), l = Math.floor(3 * Math.random());
if (-1 != e[u][l]) {
c = u;
r = l;
break;
}
}
if (-1 == c) {
c = 1;
r = 1;
}
this.hero.node.position = this.roompos_to_pos(cc.v2(r, c));
for (var p = [], d = 0; d < 3; d++) for (var m = 0; m < 3; m++) -1 != e[d][m] && (d == c && m == r || p.push([ d, m ]));
var f = Math.floor(Math.random() * p.length);
e[p[f][0]][p[f][1]] = n.STAIR;
p.splice(f, 1);
for (;p.length > 0; ) {
var g = Math.floor(Math.random() * p.length), v = this.dungeonManager.randomRoomType();
e[p[g][0]][p[g][1]] = v;
p.splice(g, 1);
}
for (var S = 0; S < 3; S++) for (var _ = 0; _ < 3; _++) {
var C = e[S][_];
if (-1 != C) {
var T = this.dungeonManager.createRoom(C);
if (T) {
var b = this.roompos_to_pos(cc.v2(_, S));
T.node.setPosition(b);
this.roomLayer.addChild(T.node);
this.rooms[S][_] = T;
this.dungeonManager.putRoomObject(T);
}
}
}
this.connect_pass(1, 1, 4);
this.connect_pass(0, 0, 1);
this.connect_pass(0, 2, 1);
this.connect_pass(2, 0, 1);
this.connect_pass(2, 2, 1);
},
roompos_to_pos: function(e) {
return cc.v2(272 * e.x, 272 * e.y);
},
connect_pass: function(e, t, i) {
var a = this.rooms[e][t];
if (a) {
for (var s = [], n = 0; n < c.length; n++) {
var r = e + c[n][1], h = t + c[n][0];
if (!(r < 0 || r >= 3 || h < 0 || h >= 3)) {
var u = this.rooms[r][h];
u && s.push({
dir: n,
room: u
});
}
}
var l, p = [];
l = i >= s.length ? s.length : i + Math.floor(Math.random() * (s.length - i + 1));
for (;p.length < l; ) {
var d = Math.floor(Math.random() * s.length), m = s[d];
if (!p.includes(m)) {
p.push(m);
s.splice(d, 1);
}
}
for (var f = 0; f < p.length; f++) {
var g = p[f].dir, v = p[f].room, S = o[g];
a.openByDir(g);
v.openByDir(S);
}
}
},
recoveryHero: function() {
a.dungeon.stLife.fullRecovery();
a.dungeon.stStamina.fullRecovery();
a.scene.ui.RefreshLife();
a.scene.ui.RefreshStamina();
a.scene.hero.Revive();
}
});
cc._RF.pop();
}, {
BaseScene: "BaseScene",
Direction: "Direction",
DungeonManager: "DungeonManager",
Game: "Game",
RoomType: "RoomType"
} ],
DungeonSoilPopup: [ function(e, t) {
"use strict";
cc._RF.push(t, "55fbb2Yp4pKgbHav2+baHJV", "DungeonSoilPopup");
var i = e("Popup"), a = e("Game");
cc.Class({
extends: i,
properties: {
labelText: cc.Label,
labelSoilLv: cc.Label,
gaugeNow: cc.Node
},
start: function() {
var e = a.dungeon.getSoilLevelModel();
if (null != e) {
var t = a.dungeon.getAreaNum(), i = e.getLevel();
this.labelSoilLv.string = a.getReplacedStr2("soil_rate_with_area", "9999", t, "8888", i);
this.gaugeNow.scaleX = e.getLevelScale();
}
var s = this.labelText.node.getBoundingBox();
this.window.height = s.height + 73;
},
Ok: function() {
this.Hide();
}
});
cc._RF.pop();
}, {
Game: "Game",
Popup: "Popup"
} ],
DungeonStairsPopup: [ function(e, t) {
"use strict";
cc._RF.push(t, "12b28CNa4FDYYy2iNPhSoXj", "DungeonStairsPopup");
var i = e("Popup"), a = e("Game");
cc.Class({
extends: i,
properties: {
seStair: {
type: cc.AudioClip,
default: null
}
},
Ok: function() {
this.Hide();
a.dungeon.fowardDungeon();
this.seStair && a.sound.playSE(this.seStair);
},
PressLeave: function() {
if (!this.IsNotAvailableButton()) {
this.Hide();
a.dungeon.resultDungeon();
}
}
});
cc._RF.pop();
}, {
Game: "Game",
Popup: "Popup"
} ],
DungeonStartPopup: [ function(e, t) {
"use strict";
cc._RF.push(t, "0f3e8eYSRBLha9Uyw+CK7uF", "DungeonStartPopup");
var i = e("Popup"), a = e("Game");
cc.Class({
extends: i,
properties: {
labelText: cc.Label
},
onLoad: function() {
this._super();
this.labelText.string = a.getReplacedStr("dungeon_start_text", "9999", a.dungeon.getMaxFloor());
this.labelText._forceUpdateRenderData();
var e = this.labelText.node.getBoundingBox();
this.window.height = e.height + 56;
},
Ok: function() {
this.Hide();
a.dungeon.startDungeon();
}
});
cc._RF.pop();
}, {
Game: "Game",
Popup: "Popup"
} ],
DungeonUI: [ function(e, t) {
"use strict";
cc._RF.push(t, "af602eF/KpJ1odJ+WVrp8yG", "DungeonUI");
var i = e("Game"), a = e("CoinLabel"), s = e("GaugeBar");
cc.Class({
extends: cc.Component,
properties: {
exLabel: a,
labelFloor: cc.Label,
gaugeLife: s,
gaugeStamina: s
},
start: function() {
this.Refresh();
},
Refresh: function() {
this.RefreshEx();
this.RefreshFloor();
this.RefreshLife();
this.RefreshStamina();
},
RefreshEx: function() {
if (this.exLabel) {
var e = i.dungeon.getEx();
this.exLabel.SetNum(e);
}
},
RefreshFloor: function() {
this.labelFloor.string = "" + i.dungeon.getFloorCount();
},
RefreshLife: function() {
var e = i.dungeon.getStatusLife().getStatusScale();
this.gaugeLife.SetScale(e);
},
RefreshStamina: function() {
var e = i.dungeon.getStatusStamina().getStatusScale();
this.gaugeStamina.SetScale(e);
},
BlinkLifeGauge: function() {
this.gaugeLife.node.runAction(cc.blink(10, 40));
},
BlinkStaminaGauge: function() {
this.gaugeStamina.node.runAction(cc.blink(10, 20));
}
});
cc._RF.pop();
}, {
CoinLabel: "CoinLabel",
Game: "Game",
GaugeBar: "GaugeBar"
} ],
Dungeon: [ function(e, t) {
"use strict";
cc._RF.push(t, "46cf5mqooBEL5Lq1iamI/Si", "Dungeon");
var i = e("BaseModel"), a = e("Level2"), s = e("SoilLevel"), n = e("LevelEasy"), o = e("Direction"), c = e("Status"), r = {
Dungeon0: {
areaNum: 1,
reviveInterval: 240,
maxFloor: 10,
dungeonScene: "Dungeon0Scene",
bossScene: "Dungeon0BossScene",
bossPosX: 0,
bossPosY: -112,
campScene: "BaseCamp0Scene",
campPosX: -72,
campPosY: 48,
campDirection: o.DOWN,
lvSoilBase: 10,
lvSoilRate: 1.05,
lvSoilAdd: 5,
swordType: "Sword0"
},
Dungeon1: {
areaNum: 2,
reviveInterval: 240,
maxFloor: 20,
dungeonScene: "Dungeon1Scene",
bossScene: "Dungeon1BossScene",
bossPosX: 0,
bossPosY: -132,
campScene: "BaseCamp1Scene",
campPosX: -8,
campPosY: 110,
campDirection: o.DOWN,
lvSoilBase: 10,
lvSoilRate: 1.05,
lvSoilAdd: 9,
swordType: "Sword1"
}
}, h = {
Mushroom0: {
name: "マッシュルーム"
},
Shadow0: {
name: "シャドウ"
},
Spider0: {
name: "スパイダー"
},
Bear0: {
name: "ベアー"
}
}, u = {
Sword0: {
name: "sword0_name",
text: "sword0_text",
file: "sword0",
atk_base: 4,
atk_max: 13,
lv_max: 10,
materials: [ {
item: "IngotCopper",
base: 1,
rate: 1.1,
add: .3
}, {
item: "CrystalBlue",
base: 3,
rate: 1.25,
add: .3
}, {
item: "Stone",
base: 10,
rate: 1.25,
add: .7
} ],
color: {
r: 200,
g: 200,
b: 200
}
},
Sword1: {
name: "sword1_name",
text: "sword1_text",
file: "sword1",
atk_base: 9,
atk_max: 21,
lv_max: 10,
materials: [ {
item: "IngotSilver",
base: 1,
rate: 1.1,
add: .3
}, {
item: "CrystalGreen",
base: 3,
rate: 1.25,
add: .3
}, {
item: "Stone",
base: 20,
rate: 1.2,
add: .7
} ],
color: {
r: 187,
g: 255,
b: 177
}
},
Sword2: {
name: "sword2_name",
text: "sword2_text",
file: "sword2"
},
Sword3: {
name: "sword3_name",
text: "sword3_text",
file: "sword3"
},
Sword4: {
name: "sword4_name",
text: "sword4_text",
file: "sword4"
}
}, l = {
MultiAction: {
name: "skill_name_multi_action",
text: "skill_text_multi_action",
rate_start: 30,
lv_base: 10,
lv_rate: 1.086,
lv_add: 7
},
AutoSeed: {
name: "skill_name_auto_seed",
text: "skill_text_auto_seed",
rate_start: 30,
lv_base: 11,
lv_rate: 1.086,
lv_add: 7
},
CriticalRock: {
name: "skill_name_critical_rock",
text: "skill_text_critical_rock",
rate_start: 30,
lv_base: 300,
lv_rate: 1.0495,
lv_add: 10
},
AutoAction: {
name: "skill_name_auto_action",
text: "skill_text_auto_action",
rate_start: 30,
lv_base: 300,
lv_rate: 1.0495,
lv_add: 10
},
WarpMagic: {
name: "skill_name_warp_magic",
text: "skill_text_warp_magic",
rate_start: 30,
lv_base: 300,
lv_rate: 1.0495,
lv_add: 10
}
}, p = cc.Class({
extends: i,
init: function(e) {
this._super(e, "Dungeon");
this.dungeonTag = "";
this.dungeonData = null;
this.dungeonScene = null;
this.flagDungeon = !1;
this.flagBoss = !1;
this.flagRecovery = !1;
this.ex = 0;
this.startTime = [];
this.currentFloorCount = 0;
this.reachFloorCount = [];
this.soilLevel = [];
for (var t in r) {
var i = r[t];
this.startTime[t] = 0;
this.reachFloorCount[t] = 0;
this.soilLevel[t] = new s();
this.soilLevel[t].init(this.baseKey, t + ".soilLevel", 1, 101, i.lvSoilBase, i.lvSoilRate, i.lvSoilAdd);
this.addModel(t + ".soilLevel", this.soilLevel[t]);
}
this.stLife = new c();
this.stLife.init(this.baseKey, "stLife", 1, 99, 30, 70);
this.addModel("stLife", this.stLife);
this.stStamina = new c();
this.stStamina.init(this.baseKey, "stStamina", 1, 99, 200, 200);
this.addModel("stStamina", this.stStamina);
this.stSpeed = new c();
this.stSpeed.init(this.baseKey, "stSpeed", 1, 99, 100, 100);
this.addModel("stSpeed", this.stSpeed);
this.heroAtk = 3;
this.flagSkill = [];
this.skillLv = [];
for (var o in l) {
var h = l[o];
this.flagSkill[o] = !1;
this.skillLv[o] = new a();
this.skillLv[o].init(this.baseKey, o + ".skillLv", h.rate_start, 100, h.lv_base, h.lv_rate, h.lv_add);
this.addModel(o + ".skillLv", this.skillLv[o]);
}
this.swordEquipTag = "Sword0";
this.swordLv = [];
for (var p in u) {
this.swordLv[p] = new n();
this.swordLv[p].init(this.baseKey, p + ".swordLv", 1, u[p].lv_max);
this.addModel(p + ".swordLv", this.swordLv[p]);
}
this.monsterKilling = [];
this.monsterKillingTmp = [];
},
load: function() {
for (var e in r) {
this.startTime[e] = this.loadNumber(e + ".startTime", 0);
this.reachFloorCount[e] = this.loadNumber(e + ".reachFloorCount", 0);
}
for (var t in l) this.flagSkill[t] = this.loadBoolean("flagSkill." + t, !1);
this.swordEquipTag = this.loadString("swordEquipTag", "Sword0");
for (var i in h) this.monsterKilling[i] = this.loadNumber("monster." + i + ".killing", 0);
},
reset: function() {
for (var e in r) {
this.startTime[e] = 0;
this.saveNumber(e + ".startTime", 0);
this.reachFloorCount[e] = 0;
this.saveNumber(e + ".reachFloorCount", 0);
this.soilLevel[e].reset();
}
this.stLife.reset();
this.stStamina.reset();
this.stSpeed.reset();
for (var t in l) {
this.flagSkill[t] = !1;
this.saveBoolean("flagSkill." + t, !1);
this.skillLv[t].reset();
}
this.swordEquipTag = "Sword0";
this.saveString("swordEquipTag", this.swordEquipTag);
for (var i in u) this.swordLv[i].reset();
for (var a in h) {
this.monsterKilling[a] = 0;
this.saveNumber("monster." + a + ".killing", 0);
}
},
newgame: function() {},
isDungeon: function() {
return this.flagDungeon;
},
isUseStamina: function() {
return this.flagDungeon;
},
bossBattle: function() {
this.flagBoss = !0;
},
setDungeonTag: function(e) {
if (e in r) {
this.dungeonTag = e;
this.dungeonData = r[e];
this.setSwordEquipTag(this.dungeonData.swordType);
} else {
this.dungeonTag = "";
this.dungeonData = null;
}
},
getAreaNum: function() {
return null == this.dungeonData ? 0 : this.dungeonData.areaNum;
},
resetTime: function() {
if ("" != this.dungeonTag) {
this.startTime[this.dungeonTag] = Math.floor(Date.now() / 1e3);
this.saveNumber(this.dungeonTag + ".startTime", this.startTime[this.dungeonTag]);
}
},
isReviveTime: function(e) {
return "" != this.dungeonTag && null != this.dungeonData && e >= this.startTime[this.dungeonTag] + this.dungeonData.reviveInterval;
},
resetDungeon: function() {
if ("" != this.dungeonTag) {
this.flagDungeon = !1;
this.flagBoss = !1;
this.flagRecovery = !1;
this.game.clearBag();
this.resetFloorCount();
this.resetEx();
this.resetMonsterKilling();
this.stLife.renewStatus();
this.stStamina.renewStatus();
this.stSpeed.renewStatus();
this.stLife.fullRecovery();
this.stStamina.fullRecovery();
}
},
startDungeon: function() {
if (null != this.dungeonData) {
this.resetDungeon();
this.resetTime();
this.flagDungeon = !0;
this.game.enableBag();
this.game.settingState(cc.v2(0, 0), o.DOWN);
this.game.scene.fadeCover.TransitionFade(this.dungeonData.dungeonScene, 1, new cc.Color(0, 0, 0));
}
},
fowardDungeon: function() {
if (null != this.dungeonData) if (this.getFloorCount() + 1 >= this.dungeonData.maxFloor) {
this.game.settingState(cc.v2(this.dungeonData.bossPosX, this.dungeonData.bossPosY), o.UP);
this.game.scene.fadeCover.TransitionFade(this.dungeonData.bossScene, 1, new cc.Color(0, 0, 0));
} else this.game.dungeon.dungeonScene && this.game.dungeon.dungeonScene.FowardDungeon();
},
leaveDungeon: function() {
this.game.scene.ui.BlinkStaminaGauge();
this.game.scene.node.runAction(cc.sequence(cc.delayTime(6), cc.callFunc(this.goto_result, this)));
},
goto_result: function() {
if (0 == this.flagRecovery) {
this.flagRecovery = !0;
this.game.scene.manager.ShowDungeonRewardPopup("recovery", null);
} else this.resultDungeon();
},
abortDungeon: function() {
this.game.scene.ui.BlinkLifeGauge();
this.game.scene.node.runAction(cc.sequence(cc.delayTime(6), cc.callFunc(this.goto_abort, this)));
},
goto_abort: function() {
this.game.scene.manager.ShowDungeonRewardPopup("abort", null);
},
abortFinish: function() {
this.game.clearBag();
this.backBasecamp(this.game.scene.fadeCover);
},
resultDungeon: function() {
if ("" != this.dungeonTag) {
this.saveFloorCount();
this.saveMonsterKilling();
this.game.scene.fadeCover.TransitionFade("DungeonResultScene", 1, new cc.Color(0, 0, 0));
}
},
backBasecamp: function(e) {
if (null != this.dungeonData && null != e) {
this.resetTime();
this.dungeonScene = null;
this.flagDungeon = !1;
this.flagBoss = !1;
this.game.disableBag();
this.game.settingState(cc.v2(this.dungeonData.campPosX, this.dungeonData.campPosY), this.dungeonData.campDirection);
e.TransitionFade(this.dungeonData.campScene, 1, new cc.Color(0, 0, 0));
}
},
getEx: function() {
return this.ex;
},
saveEx: function(e) {
this.ex += e;
},
resetEx: function() {
this.ex = 0;
},
getMaxFloor: function() {
return null == this.dungeonData ? 0 : this.dungeonData.maxFloor;
},
getFloorCount: function() {
return this.currentFloorCount;
},
incFloorCount: function() {
this.currentFloorCount++;
},
decFloorCount: function() {
this.currentFloorCount--;
},
saveFloorCount: function() {
if ("" != this.dungeonTag && this.currentFloorCount > this.reachFloorCount[this.dungeonTag]) {
this.reachFloorCount[this.dungeonTag] = this.currentFloorCount;
this.saveNumber(this.dungeonTag + ".reachFloorCount", this.reachFloorCount[this.dungeonTag]);
}
},
resetFloorCount: function() {
this.currentFloorCount = 0;
},
getReachFloorCount: function() {
return "" == this.dungeonTag ? 0 : this.reachFloorCount[this.dungeonTag];
},
getSoilLevelModel: function() {
return "" == this.dungeonTag ? null : this.soilLevel[this.dungeonTag];
},
getSoilRate: function() {
return "" == this.dungeonTag ? 0 : this.soilLevel[this.dungeonTag].getLevelScale();
},
isLearnedSkill: function(e) {
return e in l && this.flagSkill[e];
},
doLearnSkill: function(e) {
if (e in l) {
this.flagSkill[e] = !0;
this.saveBoolean("flagSkill." + e, !0);
}
},
isFireSkill: function(e) {
return e in l && this.flagSkill[e] && 100 * Math.random() < this.getSkillRate(e);
},
getSkillName: function(e) {
return e in l ? this.game.getLocalizedStr(l[e].name) : "";
},
getSkillText: function(e) {
return e in l ? this.game.getLocalizedStr(l[e].text) : "";
},
getSkillRate: function(e) {
return e in l ? this.skillLv[e].getLevel() : 0;
},
getSkillLevelModel: function(e) {
return e in l ? this.skillLv[e] : null;
},
getSwordName: function(e) {
return e in u ? this.game.getLocalizedStr(u[e].name) : "";
},
getSwordText: function(e) {
return e in u ? this.game.getLocalizedStr(u[e].text) : "";
},
getSwordMaterials: function(e) {
return e in u ? u[e].materials : [];
},
getSwordLevel: function(e) {
return e in u ? this.swordLv[e] : null;
},
getSwordAttack: function(e) {
var t = this.getSwordLevel(e);
return t ? Math.floor(u[e].atk_base + (u[e].atk_max - u[e].atk_base) * t.getLvScale()) : 0;
},
getNeedMaterialNum: function(e, t) {
var i = this.getSwordLevel(e);
if (i && t) {
var a = i.getLv() + 1;
return Math.floor(t.base * Math.pow(t.rate, a) + a * t.add);
}
return 999;
},
getSwordEquipTag: function() {
return this.swordEquipTag;
},
setSwordEquipTag: function(e) {
if (e in u) {
this.swordEquipTag = e;
this.saveString("swordEquipTag", this.swordEquipTag);
}
},
getSwordEquipAttack: function() {
return this.getSwordAttack(this.swordEquipTag);
},
getSwordEquipColor: function() {
return this.swordEquipTag in u ? u[this.swordEquipTag].color : {
r: 200,
g: 200,
b: 200
};
},
getStatusLife: function() {
return this.stLife;
},
getStatusStamina: function() {
return this.stStamina;
},
getStatusSpeed: function() {
return this.stSpeed;
},
getAttack: function() {
return this.heroAtk + this.getSwordEquipAttack();
},
calcDamageVal: function(e, t) {
return t;
},
isExistMonster: function(e) {
return e in h;
},
getMonsterKilling: function(e) {
return this.isExistMonster(e) ? this.monsterKilling[e] : 0;
},
incMonsterKilling: function(e) {
this.isExistMonster(e) && (e in this.monsterKillingTmp ? this.monsterKillingTmp[e]++ : this.monsterKillingTmp[e] = 1);
},
saveMonsterKilling: function() {
for (var e in this.monsterKillingTmp) {
var t = this.monsterKillingTmp[e];
this.monsterKilling[e] += t;
this.saveNumber("monster." + e + ".killing", this.monsterKilling[e]);
}
this.resetMonsterKilling();
},
resetMonsterKilling: function() {
this.monsterKillingTmp = [];
},
getKillingList: function() {
return this.monsterKillingTmp;
}
});
t.exports = p;
cc._RF.pop();
}, {
BaseModel: "BaseModel",
Direction: "Direction",
Level2: "Level2",
LevelEasy: "LevelEasy",
SoilLevel: "SoilLevel",
Status: "Status"
} ],
EditNamePopup: [ function(e, t) {
"use strict";
cc._RF.push(t, "d6a9bofjZBP0KQpDilS5baA", "EditNamePopup");
var i = e("Popup"), a = e("Game");
cc.Class({
extends: i,
properties: {
editBox: cc.EditBox
},
ctor: function() {
this.popupPurchase = null;
this.flagUseCancel = !1;
this.flagUseTouchHide = !1;
},
Ok: function() {
var e = a.purchase.GetCreditName(), t = this.editBox.string.replace(/&/g, "*").replace(/'/g, "*").replace(/"/g, "*").replace(/=/g, "*");
if (e !== t) {
a.purchase.SetCreditName(t, !0);
this.popupPurchase && this.popupPurchase.RefreshAll();
}
this.Hide();
},
ShowWithPopup: function(e) {
if (this.Show()) {
var t = a.purchase.GetCreditName();
this.editBox.string = t;
this.popupPurchase = e;
}
}
});
cc._RF.pop();
}, {
Game: "Game",
Popup: "Popup"
} ],
EndingScene: [ function(e, t) {
"use strict";
cc._RF.push(t, "05ce11wzSRIB6QWvgDCx4qP", "EndingScene");
var i = e("Game"), a = e("FadeCover"), s = e("Direction"), n = e("SponserRank"), o = cc.Enum({
RESULT: 0,
PICS: 1,
CREDITS: 2,
FIN: 3
}), c = [ cc.color(255, 255, 255), cc.color(210, 210, 210), cc.color(255, 210, 0), cc.color(127, 255, 255) ];
cc.Class({
extends: cc.Component,
properties: {
buttonSkip: cc.Button,
fadeCover: a,
pageResult: cc.Node,
labelType: cc.Label,
labelPioneer: cc.Label,
labelResident: cc.Label,
labelVilleger: cc.Label,
pagePics: [ cc.Node ],
pageCredits: cc.Node,
labelNames: [ cc.Label ],
labelRankPlatinum: cc.Label,
labelRankGold: cc.Label,
labelRankSilver: cc.Label,
pageFin: cc.Node,
labelFin: cc.Label,
bgmEnding: cc.AudioClip,
labelFoward: cc.Label
},
ctor: function() {
this.flagShow = !1;
this.endingMode = o.RESULT;
this.moveY = .7;
this.scrollH = 0;
this.scrollMax = 20;
this.credits = [];
this.labelScale = .1875;
this.flagTouch = !1;
this.str = "";
this.strLen = 0;
this.strIdx = 0;
},
onLoad: function() {
this.buttonSkip.node.active = !1;
this.labelNamesNum = this.labelNames.length;
this.labelNames.push(this.labelRankPlatinum);
this.labelNames.push(this.labelRankGold);
this.labelNames.push(this.labelRankSilver);
this.labelType.string = i.getLocalizedStr(i.IsTrueEnd() ? "ending_type_true" : "ending_type_normal");
this.labelPioneer.string = i.getLocalizedStr("ending_pioneer") + ": " + i.pioneerData.CalcAllRate() + "%";
this.labelResident.string = i.getLocalizedStr("ending_resident") + ": " + i.resident.CalcCompleteRate() + "%";
this.labelVilleger.string = i.getLocalizedStr("ending_villeger") + ": " + i.monoris.CalcAllRate() + "%";
i.purchase.RequestSponserList();
this.touch_on();
this.node.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(this.showResult, this)));
},
update: function() {
if (this.endingMode == o.CREDITS) {
this.moveY = this.flagTouch ? 4.8 : .7;
for (var e = !1, t = 0; t < this.labelNames.length; t++) {
var i = this.labelNames[t];
if (i.node.active) {
e = !0;
i.node.y += this.moveY;
i.node.y > 110 && (i.node.active = !1);
}
}
if (!e && this.credits.length <= 0) {
this.finishCredits();
return;
}
this.scrollH += this.moveY;
if (this.scrollH >= this.scrollMax) {
this.scrollH = 0;
if (this.credits.length <= 0) return;
var a = this.credits.shift();
if (!a) return;
if ("----SPONSER_PLATINUM----" == a) {
this.make_rank_label(this.labelRankPlatinum, n.PLATINUM);
this.labelScale = .3;
this.scrollMax = 22;
} else if ("----SPONSER_GOLD----" == a) {
this.make_rank_label(this.labelRankGold, n.GOLD);
this.labelScale = .24;
this.scrollMax = 18;
} else if ("----SPONSER_SILVER----" == a) {
this.make_rank_label(this.labelRankSilver, n.SILVER);
this.labelScale = .1875;
this.scrollMax = 14;
} else {
for (var s = null, c = 0; c < this.labelNamesNum; c++) if (!this.labelNames[c].node.active) {
s = this.labelNames[c];
break;
}
if (null != s) {
s.node.active = !0;
s.node.y = -110;
s.node.scale = this.labelScale;
s.string = a;
}
}
}
}
},
makeData: function() {
this.credits.push(i.getLocalizedStr("ending_credits_and"));
this.credits.push("");
this.credits.push("");
this.credits.push("");
this.credits.push(i.getLocalizedStr("ending_credits_everyone"));
this.credits.push("");
this.credits.push("");
this.credits.push("");
var e = i.purchase.GetSponserList();
this.credits = this.credits.concat(e);
},
showResult: function() {
this.endingMode = o.RESULT;
this.pageResult.active = !0;
this.pageResult.runAction(cc.sequence(cc.callFunc(this.showLabelType, this), cc.delayTime(2), cc.callFunc(this.showLabelPioneer, this), cc.delayTime(.4), cc.callFunc(this.showLabelResident, this), cc.delayTime(.4), cc.callFunc(this.showLabelVilleger, this), cc.delayTime(1), cc.callFunc(this.finishResult, this)));
},
showLabelType: function() {
this.labelType.node.runAction(cc.fadeIn(1));
},
showLabelPioneer: function() {
this.labelPioneer.node.opacity = 255;
},
showLabelResident: function() {
this.labelResident.node.opacity = 255;
},
showLabelVilleger: function() {
this.labelVilleger.node.opacity = 255;
},
finishResult: function() {
this.flagShow = !0;
if (i.achievement) {
i.achievement.Unlock("ending_normal");
i.IsTrueEnd() && i.achievement.Unlock("ending_true");
}
},
showPics: function() {
this.pageResult.active = !1;
this.endingMode = o.PICS;
for (var e = 0; e < this.pagePics.length; e++) {
this.pagePics[e].active = !0;
this.pagePics[e].runAction(cc.sequence(cc.delayTime(10 * e + 1), cc.fadeIn(2), cc.delayTime(5), cc.fadeOut(2)));
}
this.node.runAction(cc.sequence(cc.delayTime(10 * this.pagePics.length), cc.callFunc(this.finishPics, this)));
i.sound.playBGMWithVolume(this.bgmEnding, 1);
this.buttonSkip.node.active = i.IsReadonEnding();
},
finishPics: function() {
this.buttonSkip.node.active = !1;
for (var e = 0; e < this.pagePics.length; e++) this.pagePics[e].active = !1;
this.node.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(this.showCredits, this)));
},
showCredits: function() {
this.pageCredits.active = !0;
this.endingMode = o.CREDITS;
this.makeData();
this.node.runAction(cc.sequence(cc.delayTime(10), cc.callFunc(this.show_credits_skip, this)));
},
finishCredits: function() {
this.pageCredits.active = !1;
this.buttonSkip.node.active = !1;
this.labelFoward.node.active = !1;
this.endingMode = o.FIN;
this.node.runAction(cc.sequence(cc.delayTime(.4), cc.callFunc(this.showFin, this)));
},
showFin: function() {
this.pageFin.active = !0;
this.endingMode = o.FIN;
this.next_str();
},
finishFin: function() {
this.flagShow = !0;
},
gotoHeven: function() {
this.touch_off();
i.DoReadonEnding();
i.settingState(cc.v2(0, -16), s.DOWN);
this.fadeCover.TransitionFade("HevenScene", 3, cc.Color(255, 255, 255));
},
next_str: function() {
this.str = i.getLocalizedStr("ending_fin") + "\n\n　　　　　　　　　 CoffeeBreak";
this.strLen = this.str.length;
this.strIdx = 0;
this.labelFin.node.runAction(cc.sequence(cc.callFunc(this.show_char, this), cc.delayTime(.05)).repeat(this.strLen));
},
show_char: function() {
if (!(this.strIdx >= this.strLen)) {
var e = this.str.slice(0, ++this.strIdx);
this.labelFin.string = e;
this.strIdx >= this.strLen && this.finishFin();
}
},
make_rank_label: function(e, t) {
e.node.active = !0;
e.node.y = -110;
var a = c[t];
e.node.color = a;
e.node.runAction(cc.repeatForever(cc.sequence(cc.tintTo(.6, new cc.Color(255, 255, 255)), cc.tintTo(.6, a))));
e.string = i.purchase.GetSponserRankStrByRank(t);
},
show_credits_skip: function() {
this.buttonSkip.node.active = !0;
this.labelFoward.node.active = !0;
i.EnablePress();
},
touch_on: function() {
this.node.on(cc.Node.EventType.TOUCH_START, function(e) {
e.stopPropagationImmediate();
e.unuse();
this.touchStart();
}, this);
this.node.on(cc.Node.EventType.TOUCH_MOVE, function(e) {
e.stopPropagationImmediate();
e.unuse();
this.touchMove();
}, this);
this.node.on(cc.Node.EventType.TOUCH_END, function(e) {
e.stopPropagationImmediate();
e.unuse();
this.touchEnd();
}, this);
this.node.on(cc.Node.EventType.TOUCH_CANCEL, function(e) {
e.stopPropagationImmediate();
e.unuse();
this.touchCancel();
}, this);
},
touch_off: function() {
this.node.off(cc.Node.EventType.TOUCH_START);
this.node.off(cc.Node.EventType.TOUCH_MOVE);
this.node.off(cc.Node.EventType.TOUCH_END);
this.node.off(cc.Node.EventType.TOUCH_CANCEL);
},
touchStart: function() {
this.flagTouch = !0;
},
touchMove: function() {},
touchEnd: function() {
this.flagTouch = !1;
if (0 != this.flagShow) {
this.flagShow = !1;
switch (this.endingMode) {
case o.RESULT:
this.showPics();
break;

case o.FIN:
this.gotoHeven();
}
}
},
touchCancel: function() {
this.touchEnd();
},
IsNotAvailableButton: function() {
return i.IsNotPress();
},
PressSkip: function() {
if (!this.IsNotAvailableButton()) {
this.buttonSkip.node.active = !1;
if (this.endingMode == o.PICS) {
for (var e = 0; e < this.pagePics.length; e++) {
this.pagePics[e].stopAllActions();
this.pagePics[e].active = !1;
}
this.node.stopAllActions();
this.finishPics();
} else this.endingMode == o.CREDITS && this.finishCredits();
}
}
});
cc._RF.pop();
}, {
Direction: "Direction",
FadeCover: "FadeCover",
Game: "Game",
SponserRank: "SponserRank"
} ],
EndingSkip: [ function(e, t) {
"use strict";
cc._RF.push(t, "fe639xau19Dh6AjwCZXSQ8/", "EndingSkip");
var i = e("Game");
cc.Class({
extends: cc.Component,
onLoad: function() {
this.node.active = i.IsReadonEnding();
}
});
cc._RF.pop();
}, {
Game: "Game"
} ],
Enemy: [ function(e, t) {
"use strict";
cc._RF.push(t, "cf396++qnZIxL+jtI/i2gvr", "Enemy");
var i = e("Gimmick"), a = e("CommandType"), s = e("HpGauge"), n = e("Game");
cc.Class({
extends: i,
properties: {
hpGauge: s,
hp: 3,
attack: 1,
dropItem: [ cc.Prefab ],
dropRate: [ cc.Float ],
dropNum: [ cc.Integer ]
},
onLoad: function() {
this._super();
cc.assert(this.dropItem.length == this.dropRate.length && this.dropItem.length == this.dropNum.length, "AAABBB: ERROR!!! dropItem != dropRate");
this.monster = this.node.getComponent("Monster");
this.hpGauge.setHp(this.hp);
this.flagInvincible = !1;
},
getAvailableCommand: function() {
return this.hpGauge.isDead() || this.flagInvincible ? a.NONE : a.ATTACK;
},
execCommand: function(e) {
if (!this.hpGauge.isDead() && e == a.ATTACK) {
var t = n.scene.hero.GetAtk(), i = n.dungeon.calcDamageVal(0, t), s = !1;
if (this.monster.IsSleep()) {
s = !0;
i = 99999;
}
this.hpGauge.damage(i);
if (s) {
n.dungeon.incMonsterKilling(this.modelName);
this.monster && this.monster.Ichigeki();
} else if (this.hpGauge.isDead()) {
n.dungeon.incMonsterKilling(this.modelName);
this.monster && this.monster.Dead();
} else this.monster && this.monster.Damage();
}
},
SetHitBack: function(e) {
this.monster.SetHitBack(e);
},
HideHpGauge: function() {
this.hpGauge.node.active = !1;
},
DropItem: function() {
for (var e = 0; e < this.dropItem.length; e++) if (!(this.dropRate[e] <= 100 * Math.random())) for (var t = Math.round((.7 + .3 * Math.random()) * this.dropNum[e]), i = 0; i < t; i++) {
var a = cc.instantiate(this.dropItem[e]);
if (a) {
n.scene.node.addChild(a);
a.setPosition(this.node.position);
var s = a.getComponent("DropItem");
s && s.drop();
}
}
},
EnableInvincible: function() {
this.flagInvincible = !0;
},
DisableInvincible: function() {
this.flagInvincible = !1;
}
});
cc._RF.pop();
}, {
CommandType: "CommandType",
Game: "Game",
Gimmick: "Gimmick",
HpGauge: "HpGauge"
} ],
EnvironmentalBGM: [ function(e, t) {
"use strict";
cc._RF.push(t, "bbf75Djwz5PC5k/zYE0beTB", "EnvironmentalBGM");
var i = e("Game");
cc.Class({
extends: cc.Component,
properties: {
bgmEnv: cc.AudioClip,
volume: 1
},
onLoad: function() {},
start: function() {
i.sound.playBGMWithVolume(this.bgmEnv, this.volume);
}
});
cc._RF.pop();
}, {
Game: "Game"
} ],
EnvironmentalSound: [ function(e, t) {
"use strict";
cc._RF.push(t, "6852bhb1uFHOoR2DIRtEB/U", "EnvironmentalSound");
var i = e("Game");
cc.Class({
extends: cc.Component,
properties: {
seEnvs: [ cc.AudioClip ]
},
onLoad: function() {
this.seIdx = 0;
this.seMax = this.seEnvs.length;
this.nextTime = 0;
this.nextSound();
},
start: function() {
cc.director.getScheduler().schedule(this.updateSound, this, 5, !1);
},
updateSound: function() {
var e = Math.floor(Date.now() / 1e3);
if (this.nextTime <= e) {
i.sound.playSEWithVolume(this.seEnvs[this.seIdx], .5);
this.nextSound();
}
},
nextSound: function() {
var e = Math.floor(Date.now() / 1e3);
this.nextTime = e + 15 + 15 * Math.random();
this.seIdx = Math.floor(Math.random() * this.seMax);
}
});
cc._RF.pop();
}, {
Game: "Game"
} ],
ExplainPopup: [ function(e, t) {
"use strict";
cc._RF.push(t, "53fe1X7t7BAKbKfTjHG7ndk", "ExplainPopup");
var i = e("Popup"), a = e("ExplainType"), s = e("Game");
cc.Class({
extends: i,
properties: {
contents: cc.Node,
prefabTitle: cc.Prefab,
prefabText: cc.Prefab,
prefabSprite: cc.Prefab,
explainOrders: [ a ],
titles: [ cc.String ],
texts: {
type: [ cc.String ],
default: [],
multiline: !0
},
sprites: [ cc.SpriteFrame ]
},
onLoad: function() {
this._super();
this.orderMax = this.explainOrders.length;
this.orderIdx = 0;
this.titleIdx = 0;
this.textIdx = 0;
this.spriteIdx = 0;
this.baseY = 0;
this.lastOrder = a.NONE;
this.lastNode = null;
this.buildAll();
},
Ok: function() {
this.Cancel();
},
buildAll: function() {
this.orderIdx = 0;
this.titleIdx = 0;
this.textIdx = 0;
this.spriteIdx = 0;
this.baseY = 0;
this.lastOrder = a.NONE;
this.lastNode = null;
this.buildNode();
},
buildNode: function() {
this.lastNode = null;
this.lastOrder = this.explainOrders[this.orderIdx];
this.orderIdx++;
switch (this.lastOrder) {
case a.TITLE:
if (this.titleIdx < this.titles.length) {
this.buildTitle(s.getLocalizedStr(this.titles[this.titleIdx++], "ERROR"));
return;
}
break;

case a.TEXT:
if (this.textIdx < this.texts.length) {
this.buildText(s.getLocalizedStr(this.texts[this.textIdx++], "ERROR"));
return;
}
break;

case a.SPRITE:
if (this.spriteIdx < this.sprites.length) {
this.buildSprite(this.sprites[this.spriteIdx++]);
return;
}
break;

case a.LINE_SPACE:
this.baseY -= 12;
}
null == this.lastNode && this.buildNext();
},
buildNext: function() {
if (null != this.lastNode) {
var e = this.lastOrder == a.TITLE || this.lastOrder == a.TEXT ? s.fontScale : 1;
this.baseY -= this.lastNode.height * e;
this.lastNode = null;
}
this.orderIdx < this.orderMax ? this.node.runAction(cc.sequence(cc.delayTime(.01), cc.callFunc(this.buildNode, this))) : this.contents.height = -this.baseY;
},
buildTitle: function(e) {
var t = cc.instantiate(this.prefabTitle);
if (t) {
this.lastNode = t;
this.contents.addChild(t);
t.setPosition(cc.v2(0, this.baseY));
var i = t.getComponent(cc.Label);
if (i) {
i.string = e;
i._forceUpdateRenderData();
this.buildNext();
}
}
},
buildText: function(e) {
var t = cc.instantiate(this.prefabText);
if (t) {
this.lastNode = t;
this.contents.addChild(t);
t.setPosition(cc.v2(0, this.baseY));
var i = t.getComponent(cc.Label);
if (i) {
i.string = e;
i._forceUpdateRenderData();
this.buildNext();
}
}
},
buildSprite: function(e) {
var t = cc.instantiate(this.prefabSprite);
if (t) {
this.lastNode = t;
this.contents.addChild(t);
this.baseY -= 4;
t.setPosition(cc.v2(0, this.baseY));
this.baseY -= 4;
var i = t.getComponent(cc.Sprite);
if (i) {
t.on(cc.Node.EventType.SIZE_CHANGED, this.buildNext, this);
i.spriteFrame = e;
}
}
}
});
cc._RF.pop();
}, {
ExplainType: "ExplainType",
Game: "Game",
Popup: "Popup"
} ],
ExplainType: [ function(e, t) {
"use strict";
cc._RF.push(t, "59d0dRVv3JF8LBLqc61AJRa", "ExplainType");
var i = cc.Enum({
NONE: 0,
TITLE: 1,
TEXT: 2,
SPRITE: 3,
LINE_SPACE: 4
});
t.exports = i;
cc._RF.pop();
}, {} ],
ExplorerResultPopup: [ function(e, t) {
"use strict";
cc._RF.push(t, "25b4cOxqN1G7JA2hOimXQg+", "ExplorerResultPopup");
var i = e("PopupCallback"), a = e("ItemInfo"), s = e("CoinLabel");
cc.Class({
extends: i,
properties: {
spriteAnimal: cc.Sprite,
labelType: cc.Label,
labelTime: cc.Label,
prefabCoinLabel: cc.Prefab,
prefabItemInfo: cc.Prefab
},
ctor: function() {
this.ae = null;
},
Ok: function() {
this.ae.ReleaseItems();
this.Hide();
},
SetInfo: function(e, t, i, a, s, n) {
this.ae = e;
this.spriteAnimal.spriteFrame = t;
this.labelType.string = i;
this.labelTime.string = a;
"Coin" === s ? this.create_coin_label(n) : this.create_item_info(s, n);
},
create_item_info: function(e, t) {
var i = cc.instantiate(this.prefabItemInfo);
if (i) {
this.window.addChild(i);
i.setPosition(cc.v2(0, -27));
i.color = new cc.Color(245, 189, 126);
var s = i.getComponent(a);
if (s) {
s.SetTag(e);
s.SetNum(t);
}
}
},
create_coin_label: function(e) {
var t = cc.instantiate(this.prefabCoinLabel);
if (t) {
this.window.addChild(t);
t.setPosition(cc.v2(0, -28));
var i = t.getComponent(s);
i && i.SetCoin(e);
}
}
});
cc._RF.pop();
}, {
CoinLabel: "CoinLabel",
ItemInfo: "ItemInfo",
PopupCallback: "PopupCallback"
} ],
ExplorerSelectTimePopup: [ function(e, t) {
"use strict";
cc._RF.push(t, "226ccvj8jhFB5t2Jks2Pq3q", "ExplorerSelectTimePopup");
var i = e("PopupCallback");
cc.Class({
extends: i,
properties: {
labelMessage: cc.Label,
labelTime0: cc.Label,
labelTime1: cc.Label,
labelTime2: cc.Label
},
ctor: function() {
this.flagUseOk = !1;
this.ae = null;
},
SetInfo: function(e, t, i, a, s) {
this.ae = e;
this.labelMessage.string = t;
this.labelTime0.string = i;
this.labelTime1.string = a;
this.labelTime2.string = s;
},
PressTime0: function() {
if (!this.IsNotAvailableButton()) {
this.ae.SetTime(0);
this.Hide();
}
},
PressTime1: function() {
if (!this.IsNotAvailableButton()) {
this.ae.SetTime(1);
this.Hide();
}
},
PressTime2: function() {
if (!this.IsNotAvailableButton()) {
this.ae.SetTime(2);
this.Hide();
}
}
});
cc._RF.pop();
}, {
PopupCallback: "PopupCallback"
} ],
ExplorerSelectTypePopup: [ function(e, t) {
"use strict";
cc._RF.push(t, "6b21eCHpChBv48owTxeMFoy", "ExplorerSelectTypePopup");
var i = e("PopupCallback"), a = e("Game");
cc.Class({
extends: i,
properties: {
labelMessage: cc.Label,
labelType0: cc.Label,
labelType1: cc.Label,
labelType2: cc.Label
},
ctor: function() {
this.flagUseOk = !1;
this.ae = null;
},
SetInfo: function(e, t, i, a, s) {
this.ae = e;
this.labelMessage.string = t;
this.labelType0.string = i;
this.labelType1.string = a;
this.labelType2.string = s;
},
PressType0: function() {
if (!this.IsNotAvailableButton()) {
this.ae.SetType(0);
this.Hide();
}
},
PressType1: function() {
if (!this.IsNotAvailableButton()) {
this.ae.SetType(1);
this.Hide();
}
},
PressType2: function() {
if (!this.IsNotAvailableButton()) {
this.ae.SetType(2);
this.Hide();
}
},
PressHelp: function() {
this.IsNotAvailableButton() || a.tutorial.ShowExplainPopup("animal_explorers");
}
});
cc._RF.pop();
}, {
Game: "Game",
PopupCallback: "PopupCallback"
} ],
ExplorerState: [ function(e, t) {
"use strict";
cc._RF.push(t, "6c1592yn/FJA4x3UDNC5kGX", "ExplorerState");
var i = cc.Enum({
IDLE: 0,
WORKING: 1,
RETURN: 2
});
t.exports = i;
cc._RF.pop();
}, {} ],
Explorer: [ function(e, t) {
"use strict";
cc._RF.push(t, "c2dad6B1NxJzJqu7k1jOL1n", "Explorer");
function i(e, t) {
var i = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
if (i) return (i = i.call(e)).next.bind(i);
if (Array.isArray(e) || (i = a(e)) || t && e && "number" == typeof e.length) {
i && (e = i);
var s = 0;
return function() {
return s >= e.length ? {
done: !0
} : {
done: !1,
value: e[s++]
};
};
}
throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function a(e, t) {
if (e) {
if ("string" == typeof e) return s(e, t);
var i = Object.prototype.toString.call(e).slice(8, -1);
"Object" === i && e.constructor && (i = e.constructor.name);
return "Map" === i || "Set" === i ? Array.from(e) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? s(e, t) : void 0;
}
}
function s(e, t) {
(null == t || t > e.length) && (t = e.length);
for (var i = 0, a = new Array(t); i < t; i++) a[i] = e[i];
return a;
}
var n = e("BaseModel"), o = e("ExplorerState"), c = e("NotificationMode"), r = e("AppPlatform"), h = {
Area0_squirrel: {
area: 1,
returnTime: [ 3600, 7200, 10800 ],
rewardTable: [ [ {
tag: [ "Coin" ],
num: 80
}, {
tag: [ "Coin" ],
num: 170
}, {
tag: [ "Coin" ],
num: 260
} ], [ {
tag: [ "Wool" ],
num: 6
}, {
tag: [ "Wool" ],
num: 12
}, {
tag: [ "Milk" ],
num: 10
} ], [ {
tag: [ "Radish" ],
num: 14
}, {
tag: [ "Tomato" ],
num: 12
}, {
tag: [ "Corn", "Carrot" ],
num: 8
} ] ]
},
Area0_yellowbird: {
area: 1,
returnTime: [ 7200, 14400, 28800 ],
rewardTable: [ [ {
tag: [ "BlueBerry", "StrawBerry" ],
num: 11
}, {
tag: [ "Orange" ],
num: 9
}, {
tag: [ "Apple" ],
num: 7
} ], [ {
tag: [ "Stone" ],
num: 13
}, {
tag: [ "Copper" ],
num: 7
}, {
tag: [ "Silver" ],
num: 5
} ], [ {
tag: [ "Wood" ],
num: 17
}, {
tag: [ "Wood" ],
num: 35
}, {
tag: [ "MiniBox" ],
num: 1
} ] ]
},
Area1_squirrel: {
area: 2,
returnTime: [ 3600, 7200, 10800 ],
rewardTable: [ [ {
tag: [ "Coin" ],
num: 120
}, {
tag: [ "Coin" ],
num: 250
}, {
tag: [ "Coin" ],
num: 400
} ], [ {
tag: [ "Milk", "Egg" ],
num: 12
}, {
tag: [ "Wool" ],
num: 20
}, {
tag: [ "Cheese" ],
num: 4
} ], [ {
tag: [ "Tomato" ],
num: 16
}, {
tag: [ "Carrot" ],
num: 12
}, {
tag: [ "Corn" ],
num: 10
} ] ]
},
Area1_yellowbird: {
area: 2,
returnTime: [ 7200, 14400, 28800 ],
rewardTable: [ [ {
tag: [ "BlueBerry", "StrawBerry" ],
num: 21
}, {
tag: [ "Orange", "Apple" ],
num: 17
}, {
tag: [ "Grape", "Pear" ],
num: 9
} ], [ {
tag: [ "Stone" ],
num: 17
}, {
tag: [ "Copper", "Silver" ],
num: 9
}, {
tag: [ "Gold" ],
num: 3
} ], [ {
tag: [ "Wood" ],
num: 23
}, {
tag: [ "Wood" ],
num: 49
}, {
tag: [ "MiniBox1" ],
num: 1
} ] ]
},
Area2_squirrel: {
area: 3,
returnTime: [ 3600, 7200, 10800 ],
rewardTable: [ [ {
tag: [ "Coin" ],
num: 210
}, {
tag: [ "Coin" ],
num: 440
}, {
tag: [ "Ruby" ],
num: 2
} ], [ {
tag: [ "Egg" ],
num: 14
}, {
tag: [ "Cheese" ],
num: 6
}, {
tag: [ "Butter" ],
num: 4
} ], [ {
tag: [ "Mushroom0" ],
num: 12
}, {
tag: [ "Cactus0" ],
num: 8
}, {
tag: [ "RedRadish" ],
num: 6
} ] ]
},
Area2_yellowbird: {
area: 3,
returnTime: [ 7200, 14400, 28800 ],
rewardTable: [ [ {
tag: [ "PineApple" ],
num: 7
}, {
tag: [ "PineApple" ],
num: 15
}, {
tag: [ "Coconut" ],
num: 9
} ], [ {
tag: [ "Silver" ],
num: 13
}, {
tag: [ "Gold" ],
num: 5
}, {
tag: [ "Marble0" ],
num: 5
} ], [ {
tag: [ "Wood1" ],
num: 25
}, {
tag: [ "Wood1" ],
num: 55
}, {
tag: [ "MiniBox2" ],
num: 1
} ] ]
},
Area3_squirrel: {
area: 4,
returnTime: [ 3600, 7200, 10800 ],
rewardTable: [ [ {
tag: [ "Coin" ],
num: 310
}, {
tag: [ "Coin" ],
num: 630
}, {
tag: [ "Ruby" ],
num: 4
} ], [ {
tag: [ "Grape" ],
num: 18
}, {
tag: [ "PineApple" ],
num: 12
}, {
tag: [ "Muscat" ],
num: 6
} ], [ {
tag: [ "Mushroom0" ],
num: 20
}, {
tag: [ "Starfish" ],
num: 12
}, {
tag: [ "Shell" ],
num: 8
} ] ]
},
Area3_yellowbird: {
area: 4,
returnTime: [ 7200, 14400, 28800 ],
rewardTable: [ [ {
tag: [ "Pear" ],
num: 13
}, {
tag: [ "Banana" ],
num: 7
}, {
tag: [ "Peach" ],
num: 5
} ], [ {
tag: [ "Silver" ],
num: 17
}, {
tag: [ "Marble0" ],
num: 7
}, {
tag: [ "Diamond" ],
num: 1
} ], [ {
tag: [ "Wood1" ],
num: 33
}, {
tag: [ "Wood2" ],
num: 19
}, {
tag: [ "MiniBox3" ],
num: 1
} ] ]
},
Area4_squirrel: {
area: 5,
returnTime: [ 3600, 7200, 10800 ],
rewardTable: [ [ {
tag: [ "Coin" ],
num: 480
}, {
tag: [ "Ruby" ],
num: 4
}, {
tag: [ "Diamond" ],
num: 2
} ], [ {
tag: [ "Milk" ],
num: 24
}, {
tag: [ "Cheese" ],
num: 12
}, {
tag: [ "Butter" ],
num: 8
} ], [ {
tag: [ "Carrot" ],
num: 22
}, {
tag: [ "Corn" ],
num: 18
}, {
tag: [ "RedRadish" ],
num: 10
} ] ]
},
Area4_yellowbird: {
area: 5,
returnTime: [ 7200, 14400, 28800 ],
rewardTable: [ [ {
tag: [ "Banana" ],
num: 11
}, {
tag: [ "Peach" ],
num: 7
}, {
tag: [ "Cherry" ],
num: 5
} ], [ {
tag: [ "Marble0" ],
num: 13
}, {
tag: [ "Gold" ],
num: 7
}, {
tag: [ "Orichalcum" ],
num: 1
} ], [ {
tag: [ "Wood2" ],
num: 25
}, {
tag: [ "Wood3" ],
num: 15
}, {
tag: [ "MiniBox4" ],
num: 1
} ] ]
}
}, u = cc.Class({
extends: n,
init: function(e) {
this._super(e, "Explorer");
var t = 0;
for (var i in h) {
var a = h[i];
this.reset_data(a);
a.notificationTag = 100 + t;
t++;
}
this.notificationTagStart = 100;
this.notificationTagEnd = 100 + t - 1;
this.flagFirstSetting = !1;
this.notificationMode = c.OFF;
},
load: function() {
for (var e in h) {
var t = h[e];
t.state = this.loadNumber(e + ".state", o.IDLE);
t.startTime = this.loadNumber(e + ".startTime", 0);
t.selectType = this.loadNumber(e + ".selectType", 0);
t.selectTime = this.loadNumber(e + ".selectTime", 0);
t.rewardTag = this.loadString(e + ".rewardTag", "");
t.rewardNum = this.loadNumber(e + ".rewardNum", 0);
}
this.flagFirstSetting = this.loadBoolean(this.baseKey + ".flagFirstSetting", !1);
this.notificationMode = this.loadNumber(this.baseKey + ".notificationMode", c.OFF);
this.foreground();
},
reset: function() {
for (var e in h) {
var t = h[e];
this.reset_data(t);
this.save_data(e, t);
}
this.flagFirstSetting = !1;
this.saveBoolean(this.baseKey + ".flagFirstSetting", !1);
this.SetNotificationMode(c.OFF);
},
newgame: function() {
this.reset();
},
background: function() {
this.RegistLocalPush();
},
foreground: function() {
this.UnregistLocalPush();
},
IsAvailableNotification: function() {
return r.isIOS() || r.isAndroid() || this.game.debug && r.isWebTest();
},
IsFirstSetting: function() {
return this.flagFirstSetting;
},
DoneFirstSetting: function() {
this.flagFirstSetting = !0;
this.saveBoolean(this.baseKey + ".flagFirstSetting", !0);
},
GetNotificationMode: function() {
return this.notificationMode;
},
SetNotificationMode: function(e) {
this.notificationMode = e;
this.saveNumber(this.baseKey + ".notificationMode", this.notificationMode);
},
RegistLocalPush: function() {
if (this.IsAvailableNotification() && this.notificationMode !== c.OFF && r.IsInitLocalPush()) {
var e = [], t = this.get_now_time(), a = 100, s = this.game.getLocalizedStr("explorer_notify_title", "Animal Explorers"), n = this.game.getLocalizedStr("explorer_notify_text", "They're back! (Area XXXX)");
for (var u in h) {
var l = h[u];
if (!(l.state !== o.WORKING || l.startTime <= 0)) {
var p = l.startTime + l.returnTime[l.selectTime];
e.push({
tag: u,
return_time: p,
area: l.area,
notification_tag: l.notificationTag
});
}
}
e.sort(function(e, t) {
return e.return_time - t.return_time;
});
if (this.notificationMode !== c.ALWAYS) {
var d = [];
this.notificationMode === c.MODE1 ? d = this.getNotificationTimes([ 12, 19 ], 2) : this.notificationMode === c.MODE2 && (d = this.getNotificationTimes([ 19 ], 1));
for (var m, f = i(d); !(m = f()).done; ) {
for (var g = m.value, v = [], S = e.length - 1; S >= 0; S--) {
var _ = e[S];
if (_.return_time <= g) {
v.push(_);
e.splice(S, 1);
}
}
if (0 !== v.length) {
var C = v.map(function(e) {
return e.area;
}), T = this.getExplorerAreaText(C), b = n.replace("XXXX", T);
r.RegistLocalPushAfter(s, b, g - t, a++);
}
}
} else for (var A, R = i(e); !(A = R()).done; ) {
var w = A.value;
if (w.return_time > t) {
var k = n.replace("XXXX", w.area);
r.RegistLocalPushAfter(s, k, w.return_time - t, w.notification_tag);
}
}
}
},
UnregistLocalPush: function() {
if (this.IsAvailableNotification() && this.notificationMode !== c.OFF && r.IsInitLocalPush()) {
r.RemoveLocalPushRange(this.notificationTagStart, this.notificationTagEnd);
r.ClearBadge();
}
},
getNotificationTimes: function(e, t) {
if (!Array.isArray(e) || 0 === e.length || t <= 0) return [];
e = [].concat(e).sort(function(e, t) {
return e - t;
});
for (var a = [], s = this.get_now_time(), n = new Date(1e3 * s); a.length < t; ) {
for (var o, c = i(e); !(o = c()).done; ) {
var r = o.value, h = new Date(n);
h.setHours(r, 0, 0, 0);
var u = Math.floor(h.getTime() / 1e3);
if (u > s) {
a.push(u);
if (a.length >= t) break;
}
}
n.setDate(n.getDate() + 1);
n.setHours(0, 0, 0, 0);
}
return a;
},
getExplorerAreaText: function(e) {
(e = Array.from(new Set(e))).sort(function(e, t) {
return e - t;
});
return 0 === e.length ? "" : e.length <= 3 ? e.join(",") : e[0] + "," + e[1] + "," + e[2] + "…";
},
CheckStatePoll: function(e) {
for (var t in h) {
var i = h[t];
i.state === o.WORKING && i.startTime > 0 && e >= i.startTime + i.returnTime[i.selectTime] && this.return_expedition(t, i);
}
},
GetExplorerData: function(e) {
return e in h ? h[e] : null;
},
GetRemainData: function(e) {
var t = this.GetExplorerData(e);
if (t) {
if (t.state === o.WORKING && t.startTime > 0) {
var i = t.returnTime[t.selectTime], a = t.startTime + i - this.get_now_time();
a < 0 && (a = 0);
return {
sec: a,
hour: Math.floor(a / 3600) + 1,
scale: a / i
};
}
return {
sec: 0,
hour: 0,
scale: 0
};
}
},
StartExpedition: function(e, t, i) {
var a = this.GetExplorerData(e);
if (a) {
a.state = o.WORKING;
a.startTime = this.get_now_time();
a.selectType = t;
a.selectTime = i;
this.saveNumber(e + ".state", a.state);
this.saveNumber(e + ".startTime", a.startTime);
this.saveNumber(e + ".selectType", a.selectType);
this.saveNumber(e + ".selectTime", a.selectTime);
}
},
CompleteMission: function(e) {
var t = this.GetExplorerData(e);
if (t) {
this.reset_data(t);
this.save_data(e, t);
}
},
reset_data: function(e) {
e.state = o.IDLE;
e.startTime = 0;
e.selectType = 0;
e.selectTime = 0;
e.rewardTag = "";
e.rewardNum = 0;
},
save_data: function(e, t) {
this.saveNumber(e + ".state", t.state);
this.saveNumber(e + ".startTime", t.startTime);
this.saveNumber(e + ".selectType", t.selectType);
this.saveNumber(e + ".selectTime", t.selectTime);
this.saveString(e + ".rewardTag", t.rewardTag);
this.saveNumber(e + ".rewardNum", t.rewardNum);
},
get_now_time: function() {
return Math.floor(Date.now() / 1e3);
},
return_expedition: function(e, t) {
t.state = o.RETURN;
this.saveNumber(e + ".state", t.state);
var i = t.rewardTable[t.selectType][t.selectTime], a = i.tag, s = i.num, n = 0;
a.length > 1 && (n = Math.floor(Math.random() * a.length));
var c = a[n];
t.rewardTag = c;
t.rewardNum = s;
this.saveString(e + ".rewardTag", t.rewardTag);
this.saveNumber(e + ".rewardNum", t.rewardNum);
}
});
t.exports = u;
cc._RF.pop();
}, {
AppPlatform: "AppPlatform",
BaseModel: "BaseModel",
ExplorerState: "ExplorerState",
NotificationMode: "NotificationMode"
} ],
FadeCover: [ function(e, t) {
"use strict";
cc._RF.push(t, "d97dbkdl0VPaalDZlRUWkDX", "FadeCover");
var i = e("Game");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {
this.sceneName = "";
this.interval = 1;
this.node.opacity = 0;
this.node.active = !1;
},
SetColor: function(e) {
this.node.color = e;
},
TransitionFade: function(e, t, a) {
i.DisablePress();
i.scene && i.scene.PauseInput();
this.sceneName = e;
this.interval = t;
this.node.color = a;
cc.director.preloadScene(this.sceneName);
this.FadeOut(t);
},
TransitionFadeWhite: function(e, t) {
this.TransitionFade(e, t, new cc.Color(255, 255, 255));
},
TransitionFadeBlack: function(e, t) {
this.TransitionFade(e, t, new cc.Color(0, 0, 0));
},
PushScene: function(e, t, a) {
i.captureState();
this.TransitionFade(e, t, a);
},
PopScene: function(e, t) {
var a = i.getStateSceneName();
this.TransitionFade(a, e, t);
},
FadeOut: function(e) {
this.node.active = !0;
this.node.opacity = 0;
this.node.runAction(cc.sequence(cc.fadeIn(e), cc.callFunc(this.finish_fade_out, this)));
},
FadeIn: function(e) {
this.node.active = !0;
this.node.opacity = 255;
this.node.runAction(cc.sequence(cc.fadeOut(e), cc.callFunc(this.finish_fade_in, this)));
},
FadeOutIn: function(e, t, i, a, s, n) {
this.node.active = !0;
this.node.opacity = 0;
this.node.color = t;
this.node.runAction(cc.sequence(cc.fadeIn(e), cc.callFunc(i, a), cc.fadeOut(e), cc.callFunc(s, n), cc.callFunc(this.finish_fade_out_in, this)));
},
finish_fade_out_in: function() {
this.node.active = !1;
},
finish_fade_out: function() {
this.next_scene();
},
finish_fade_in: function() {
i.EnablePress();
if (i.scene) {
i.scene.ResumeInput();
i.scene.onEnter();
}
this.node.active = !1;
},
next_scene: function() {
i.scene && i.scene.CollectDropItem();
var e = this.node.color, t = this.interval;
cc.director.loadScene(this.sceneName, function(a, s) {
i.scene && i.scene.PauseInput();
var n = cc.find("Canvas/Main Camera/FadeCover", s);
if (n) {
var o = n.getComponent("FadeCover");
if (o) {
o.SetColor(e);
o.FadeIn(t);
}
}
});
}
});
cc._RF.pop();
}, {
Game: "Game"
} ],
Field: [ function(e, t) {
"use strict";
cc._RF.push(t, "23233juQndHBLyj3UEFzr8V", "Field");
var i = e("SaveData"), a = e("Resource"), s = e("ResourceState"), n = e("CommandType"), o = e("Crop"), c = e("Game"), r = cc.Enum({
NONE: 0,
DRY: 1,
WET: 2
});
cc.Class({
extends: a,
properties: {
seWater: cc.AudioClip,
spriteDry: cc.SpriteFrame,
spriteWet: cc.SpriteFrame,
crop: o
},
onLoad: function() {
this._super();
this.level = i.loadNumber(this.savekey + ".level", r.NONE);
},
start: function() {
this._super();
this.crop.SetField(this);
},
refreshView: function() {
var e = null;
this.level == r.DRY ? e = this.spriteDry : this.level == r.WET && (e = this.spriteWet);
var t = this.node.getComponent(cc.Sprite);
t && (t.spriteFrame = e);
},
progress: function(e) {
if (this.level == r.DRY && 0 == this.isSeeded()) {
if (e >= 43200) {
this.change_state(s.REVIVE);
this.change_level(r.NONE);
}
} else this.level == r.WET && e >= 10800 && this.change_level(r.DRY);
},
getAvailableCommand: function() {
return this.state >= s.REVIVE && 0 == this.isSeeded() ? n.HOE : this.level == r.DRY && 1 == this.isSeeded() ? n.WATER : n.NONE;
},
execCommand: function(e) {
if (e == n.HOE) {
this.seDamage && c.sound.playSE(this.seDamage);
if (c.dungeon.isFireSkill("AutoSeed")) {
this.change_level(r.WET);
this.crop.PutSeedForced();
} else this.change_level(r.DRY);
} else {
if (e != n.WATER) return;
this.seWater && c.sound.playSE(this.seWater);
this.change_level(r.WET);
}
this.finish();
},
WaterForced: function() {
this.change_level(r.WET);
this.finish();
},
change_level: function(e) {
if (this.level != e) {
this.level = e;
i.saveNumber(this.savekey + ".level", this.level);
this.refreshView();
}
},
isEnableSeed: function() {
return this.state == s.NONE && this.level >= r.DRY && 0 == this.isSeeded();
},
isEnableWater: function() {
return this.state == s.NONE && this.level >= r.DRY && 1 == this.isSeeded();
},
isSeeded: function() {
return this.crop.IsSeeded();
},
isWatered: function() {
return this.level == r.WET;
},
reset: function() {
this._super();
this.change_level(r.NONE);
}
});
cc._RF.pop();
}, {
CommandType: "CommandType",
Crop: "Crop",
Game: "Game",
Resource: "Resource",
ResourceState: "ResourceState",
SaveData: "SaveData"
} ],
FishData: [ function(e, t) {
"use strict";
cc._RF.push(t, "f088eTH/nJCCpg3Cjf90XgJ", "FishData");
var i = e("BaseModel"), a = e("FishSize"), s = {
Fish0: {
readon: !1,
num: 0,
price: 150,
size: a.MIDDLE
},
Fish1: {
readon: !1,
num: 0,
price: 70,
size: a.SMALL
},
Fish2: {
readon: !1,
num: 0,
price: 120,
size: a.MIDDLE
},
Fish3: {
readon: !1,
num: 0,
price: 250,
size: a.LARGE
},
Fish4: {
readon: !1,
num: 0,
price: 70,
size: a.SMALL
},
Fish5: {
readon: !1,
num: 0,
price: 120,
size: a.MIDDLE
},
Fish6: {
readon: !1,
num: 0,
price: 250,
size: a.LARGE
},
Fish7: {
readon: !1,
num: 0,
price: 80,
size: a.SMALL
},
Fish8: {
readon: !1,
num: 0,
price: 130,
size: a.MIDDLE
},
Fish9: {
readon: !1,
num: 0,
price: 280,
size: a.LARGE
},
Fish10: {
readon: !1,
num: 0,
price: 80,
size: a.SMALL
},
Fish11: {
readon: !1,
num: 0,
price: 130,
size: a.MIDDLE
},
Fish12: {
readon: !1,
num: 0,
price: 280,
size: a.LARGE
},
Fish13: {
readon: !1,
num: 0,
price: 90,
size: a.SMALL
},
Fish14: {
readon: !1,
num: 0,
price: 150,
size: a.MIDDLE
},
Fish15: {
readon: !1,
num: 0,
price: 300,
size: a.LARGE
},
Fish16: {
readon: !1,
num: 0,
price: 90,
size: a.SMALL
},
Fish17: {
readon: !1,
num: 0,
price: 95,
size: a.SMALL
},
Fish18: {
readon: !1,
num: 0,
price: 100,
size: a.SMALL
},
Fish19: {
readon: !1,
num: 0,
price: 90,
size: a.SMALL
},
Fish20: {
readon: !1,
num: 0,
price: 180,
size: a.MIDDLE
},
Fish21: {
readon: !1,
num: 0,
price: 360,
size: a.LARGE
},
Fish22: {
readon: !1,
num: 0,
price: 100,
size: a.SMALL
},
Fish23: {
readon: !1,
num: 0,
price: 200,
size: a.MIDDLE
},
Fish24: {
readon: !1,
num: 0,
price: 300,
size: a.LARGE
},
Fish25: {
readon: !1,
num: 0,
price: 110,
size: a.SMALL
},
Fish26: {
readon: !1,
num: 0,
price: 220,
size: a.MIDDLE
},
Fish27: {
readon: !1,
num: 0,
price: 440,
size: a.LARGE
},
Fish28: {
readon: !1,
num: 0,
price: 450,
size: a.LARGE
},
Fish29: {
readon: !1,
num: 0,
price: 520,
size: a.LARGE
},
Fish30: {
readon: !1,
num: 0,
price: 120,
size: a.SMALL
},
Fish31: {
readon: !1,
num: 0,
price: 110,
size: a.SMALL
},
Fish32: {
readon: !1,
num: 0,
price: 220,
size: a.MIDDLE
},
Fish33: {
readon: !1,
num: 0,
price: 240,
size: a.MIDDLE
},
Fish34: {
readon: !1,
num: 0,
price: 150,
size: a.SMALL
},
Fish35: {
readon: !1,
num: 0,
price: 250,
size: a.MIDDLE
},
Fish36: {
readon: !1,
num: 0,
price: 450,
size: a.LARGE
},
Fish37: {
readon: !1,
num: 0,
price: 130,
size: a.SMALL
},
Fish38: {
readon: !1,
num: 0,
price: 260,
size: a.MIDDLE
},
Fish39: {
readon: !1,
num: 0,
price: 470,
size: a.LARGE
},
Fish40: {
readon: !1,
num: 0,
price: 160,
size: a.SMALL
},
Fish41: {
readon: !1,
num: 0,
price: 270,
size: a.MIDDLE
},
Fish42: {
readon: !1,
num: 0,
price: 170,
size: a.SMALL
},
Fish43: {
readon: !1,
num: 0,
price: 640,
size: a.LARGE
},
Fish44: {
readon: !1,
num: 0,
price: 160,
size: a.SMALL
},
Fish45: {
readon: !1,
num: 0,
price: 260,
size: a.MIDDLE
},
Fish46: {
readon: !1,
num: 0,
price: 460,
size: a.LARGE
},
Fish47: {
readon: !1,
num: 0,
price: 150,
size: a.SMALL
},
Fish48: {
readon: !1,
num: 0,
price: 250,
size: a.MIDDLE
},
Fish49: {
readon: !1,
num: 0,
price: 450,
size: a.LARGE
},
Fish50: {
readon: !1,
num: 0,
price: 150,
size: a.MIDDLE
},
Fish51: {
readon: !1,
num: 0,
price: 260,
size: a.SMALL
},
Fish52: {
readon: !1,
num: 0,
price: 180,
size: a.SMALL
},
Fish53: {
readon: !1,
num: 0,
price: 610,
size: a.LARGE
},
Fish54: {
readon: !1,
num: 0,
price: 200,
size: a.SMALL
},
Fish55: {
readon: !1,
num: 0,
price: 220,
size: a.SMALL
},
Fish56: {
readon: !1,
num: 0,
price: 350,
size: a.MIDDLE
},
Fish57: {
readon: !1,
num: 0,
price: 360,
size: a.MIDDLE
},
Fish58: {
readon: !1,
num: 0,
price: 620,
size: a.LARGE
},
Fish59: {
readon: !1,
num: 0,
price: 650,
size: a.LARGE
},
Fish60: {
readon: !1,
num: 0,
price: 370,
size: a.MIDDLE
},
Fish61: {
readon: !1,
num: 0,
price: 390,
size: a.MIDDLE
},
Fish62: {
readon: !1,
num: 0,
price: 240,
size: a.SMALL
},
Fish63: {
readon: !1,
num: 0,
price: 940,
size: a.LARGE
},
Fish64: {
readon: !1,
num: 0,
price: 210,
size: a.SMALL
},
Fish65: {
readon: !1,
num: 0,
price: 230,
size: a.SMALL
},
Fish66: {
readon: !1,
num: 0,
price: 350,
size: a.MIDDLE
},
Fish67: {
readon: !1,
num: 0,
price: 370,
size: a.MIDDLE
},
Fish68: {
readon: !1,
num: 0,
price: 630,
size: a.LARGE
},
Fish69: {
readon: !1,
num: 0,
price: 640,
size: a.LARGE
},
Fish70: {
readon: !1,
num: 0,
price: 380,
size: a.MIDDLE
},
Fish71: {
readon: !1,
num: 0,
price: 250,
size: a.SMALL
},
Fish72: {
readon: !1,
num: 0,
price: 360,
size: a.MIDDLE
},
Fish73: {
readon: !1,
num: 0,
price: 990,
size: a.LARGE
}
}, n = cc.Class({
extends: i,
init: function(e) {
this._super(e, "FishData");
this.fishData = s;
},
load: function() {
for (var e in this.fishData) {
this.fishData[e].readon = this.loadBoolean(e + ".readon", !1);
this.fishData[e].num = this.loadNumber(e + ".num", 0);
}
},
reset: function() {
for (var e in this.fishData) {
this.fishData[e].readon = !1;
this.saveBoolean(e + ".readon", !1);
this.fishData[e].num = 0;
this.saveNumber(e + ".num", 0);
}
},
GetData: function(e) {
return e in this.fishData ? this.fishData[e] : null;
},
IsReadon: function(e) {
return e in this.fishData && this.fishData[e].readon;
},
GetNum: function(e) {
return e in this.fishData ? this.fishData[e].num : 0;
},
GetPrice: function(e) {
return e in this.fishData ? this.fishData[e].price : 0;
},
GetExp: function(e) {
return e in this.fishData ? this.fishData[e].price : 0;
},
GetSize: function(e) {
return e in this.fishData ? this.fishData[e].size : 0;
},
GetURL: function(e) {
return e in this.fishData ? "Fish/" + e : "";
},
CatchUpFish: function(e) {
if (e in this.fishData) {
this.fishData[e].num++;
this.saveNumber(e + ".num", this.fishData[e].num);
if (0 == this.fishData[e].readon) {
this.fishData[e].readon = !0;
this.saveBoolean(e + ".readon", !0);
return !0;
}
}
return !1;
}
});
t.exports = n;
cc._RF.pop();
}, {
BaseModel: "BaseModel",
FishSize: "FishSize"
} ],
FishSize: [ function(e, t) {
"use strict";
cc._RF.push(t, "07fc6TGo2pPqaEEgZ9YRyKN", "FishSize");
var i = cc.Enum({
SMALL: 0,
MIDDLE: 1,
LARGE: 2
});
t.exports = i;
cc._RF.pop();
}, {} ],
FishingCmdPopup: [ function(e, t) {
"use strict";
cc._RF.push(t, "16e4cllxcdJt5S+NyznHWsC", "FishingCmdPopup");
var i = e("Popup"), a = e("Game");
cc.Class({
extends: i,
properties: {
labelMessage: cc.Label,
labelCmd: cc.Label
},
ctor: function() {
this.flagUseCancel = !1;
this.flagUseTouchHide = !1;
this.targetFishingSpot = null;
this.cmdType = 0;
},
Ok: function() {
if (this.targetFishingSpot) {
0 == this.cmdType ? this.targetFishingSpot.FishingThrow() : 1 == this.cmdType && this.targetFishingSpot.FishingCatchUp();
this.Hide();
}
},
Hide: function() {
this._super();
this.targetFishingSpot = null;
this.cmdType = 0;
},
PressCmd: function() {
this.IsNotAvailableButton() || this.Ok();
},
ShowCmdThrow: function(e) {
if (e) {
this.targetFishingSpot = e;
this.cmdType = 0;
if (this.Show()) {
this.labelMessage.string = a.getLocalizedStr("fishing_throw_mes", "釣りたい魚が前にきたタイミングで押そう！");
this.labelCmd.string = a.getLocalizedStr("fishing_throw_bt", "投げる");
}
}
},
ShowCmdCatchUp: function(e) {
if (e) {
this.targetFishingSpot = e;
this.cmdType = 1;
if (this.Show()) {
this.labelMessage.string = a.getLocalizedStr("fishing_fish_mes", "魚が食いついたタイミングで押そう！（びっくりマークが出ます）");
this.labelCmd.string = a.getLocalizedStr("fishing_fish_bt", "釣る！");
}
}
}
});
cc._RF.pop();
}, {
Game: "Game",
Popup: "Popup"
} ],
FishingPopup: [ function(e, t) {
"use strict";
cc._RF.push(t, "cfeb6NPd/FNILZw32t5/T4h", "FishingPopup");
var i = e("Popup"), a = e("Game"), s = e("AppPlatform"), n = e("LevelInfo");
cc.Class({
extends: i,
properties: {
windowLevel: cc.Node,
windowButton: cc.Node,
labelName: cc.Label,
labelMessage: cc.Label,
buttonYes: cc.Button,
buttonNo: cc.Button,
buttonOk: cc.Button,
fishInfos: [ cc.Node ],
fishSprite: [ cc.Sprite ],
levelInfo: n
},
ctor: function() {
this.targetFishingSpot = null;
this.fishList = null;
this.fishMax = 0;
this.price = 0;
this.exp = 0;
this.flagComp = !1;
},
onLoad: function() {
this._super();
this.levelInfo.SetLevelModel(a.fishingLevel);
this.windowLevel.scale = 0;
this.windowButton.scale = 0;
},
Ok: function() {
if (this.buttonYes.node.active) {
if (!this.targetFishingSpot) return;
this.targetFishingSpot.FishingStart();
this.show_banner_ads();
}
this.Hide();
},
PressYes: function() {
this.IsNotAvailableButton() || this.Ok();
},
PressHelp: function() {
this.IsNotAvailableButton() || a.tutorial.ShowExplainPopup("fishing");
},
show_finish: function() {},
show_finish_2: function() {
this.flagShow = !0;
a.EnablePress();
a.scene.PopupRegist(this);
},
Hide: function() {
if (this._super()) {
this.windowLevel.runAction(cc.scaleTo(.1, 0));
this.windowButton.runAction(cc.scaleTo(.1, 0));
this.window.opacity = 255;
return !0;
}
return !1;
},
hide_finish: function() {
this.touch_off();
this.flagOpen = !1;
this.node.active = !1;
a.EnablePress();
a.scene.CheckInAppReview();
if (this.flagComp) {
this.flagComp = !1;
this.ShowComplete();
} else this.node.destroy();
},
SetInfo: function(e) {
this.fishList = a.fishingSpotData.GetFishList(e);
if (null != this.fishList) {
this.fishMax = this.fishList.length;
for (var t = 0; t < 10; t++) if (t < this.fishMax) {
this.fishInfos[t].active = !0;
var i = this.fishList[t].tag, s = a.fishingSpotData.IsHave(e, i) ? a.fishData.GetURL(i) : "Fish/FishSecret";
this.change_sprite(this.fishSprite[t], s);
} else this.fishInfos[t].active = !1;
this.levelInfo.Renew();
}
},
change_sprite: function(e, t) {
cc.resources.load(t, cc.SpriteFrame, function(t, i) {
t || i && (e.spriteFrame = i);
});
},
ShowWithTarget: function(e) {
if (e) {
this.targetFishingSpot = e;
if (this.Show()) {
this.buttonYes.node.active = !0;
this.buttonNo.node.active = !0;
this.buttonOk.node.active = !1;
var t = this.targetFishingSpot.GetFishingSpotTag();
this.labelName.string = a.fishingSpotData.GetName(t);
this.labelMessage.string = a.getLocalizedStr("fishing_mes0", "ここで釣りをしますか？");
this.SetInfo(t);
this.windowLevel.runAction(cc.sequence(cc.delayTime(.06), cc.scaleTo(.4, 1).easing(cc.easeInOut(3))));
this.windowButton.runAction(cc.sequence(cc.delayTime(.12), cc.scaleTo(.4, 1).easing(cc.easeInOut(3)), cc.callFunc(this.show_finish_2, this)));
}
}
},
ShowResult: function(e, t) {
if (e) {
this.targetFishingSpot = e;
if (this.Show()) {
this.buttonYes.node.active = !1;
this.buttonNo.node.active = !1;
this.buttonOk.node.active = !0;
var i = this.targetFishingSpot.GetFishingSpotTag();
this.labelName.string = a.fishingSpotData.GetName(i);
this.SetInfo(i);
a.fishData.CatchUpFish(t);
var s = a.fishingSpotData.CatchUpFish(i, t);
if (s) {
this.flagComp = a.fishingSpotData.CheckComp(i);
"Spot0" == i && 0 == a.inAppReview.IsTriggered("fishing_spot0") && 3 == a.fishingSpotData.CalcTypeOfFishCaught(i) && a.inAppReview.SetReserve("fishing_spot0");
}
a.achievement && a.achievement.Unlock("try_fishing");
var n = a.fishingSpotData.CalcCompRate(i);
if (a.achievement) {
var o = a.achievement.FishingSpotTagToAchievementTag(i);
a.achievement.Progress(o, n);
}
this.price = a.fishData.GetPrice(t);
var c = a.getLocalizedStr("fishing_mes1_all").replace("9999", this.price);
this.labelMessage.string = c;
this.exp = a.fishData.GetExp(t);
for (var r = -1, h = 0; h < this.fishMax; h++) if (t == this.fishList[h].tag) {
r = h;
break;
}
if (-1 != r) {
if (s) {
var u = a.fishData.GetURL(t);
this.change_sprite(this.fishSprite[r], u);
}
this.fishSprite[r].node.runAction(cc.blink(5, 10));
}
this.windowLevel.runAction(cc.sequence(cc.delayTime(1), cc.scaleTo(.4, 1).easing(cc.easeInOut(3)), cc.callFunc(this.show_popup_level, this)));
}
}
},
show_popup_level: function() {
this.levelInfo.SetAddExpCallBack(this.show_popup_button, this);
this.levelInfo.AddExp(this.exp);
},
show_popup_button: function() {
this.windowButton.runAction(cc.sequence(cc.scaleTo(.4, 1).easing(cc.easeInOut(3)), cc.callFunc(this.show_popup_message, this), cc.callFunc(this.show_finish_2, this)));
},
show_popup_message: function() {
a.coin.saveCurrency(this.price);
a.scene.ui.RefreshCoin();
this.targetFishingSpot && this.targetFishingSpot.FishingSuccessFinish();
},
ShowComplete: function() {
if (this.Show()) {
this.buttonYes.node.active = !1;
this.buttonNo.node.active = !1;
this.buttonOk.node.active = !1;
var e = this.targetFishingSpot.GetFishingSpotTag();
this.price = a.fishingSpotData.GetBonus(e);
var t = a.getLocalizedStr("fishing_mes2_all").replace("9999", this.price);
this.labelMessage.string = t;
this.exp = this.price;
this.window.opacity = 0;
this.windowButton.runAction(cc.sequence(cc.scaleTo(.4, 1).easing(cc.easeInOut(3)), cc.callFunc(this.show_popup_comp_message, this), cc.delayTime(1), cc.callFunc(this.show_popup_comp_lv, this)));
}
},
show_popup_comp_message: function() {
a.coin.saveCurrency(this.price);
a.scene.ui.RefreshCoin();
},
show_popup_comp_lv: function() {
this.windowLevel.runAction(cc.sequence(cc.scaleTo(.4, 1).easing(cc.easeInOut(3)), cc.callFunc(this.shou_popup_comp_ex, this)));
},
shou_popup_comp_ex: function() {
this.levelInfo.SetAddExpCallBack(this.finish_bonus, this);
this.levelInfo.AddExp(this.exp);
},
finish_bonus: function() {
this.show_finish_2();
this.buttonOk.node.active = !0;
},
show_banner_ads: function() {
if (!a.purchase.IsRemoveAds()) {
if (s.isAndroid() && s.IsInstant() && a.getDelayBannerAds() > 0) return;
s.ShowBannerAds(a.getBannerTag());
}
}
});
cc._RF.pop();
}, {
AppPlatform: "AppPlatform",
Game: "Game",
LevelInfo: "LevelInfo",
Popup: "Popup"
} ],
FishingRewardPopup: [ function(e, t) {
"use strict";
cc._RF.push(t, "8a901awWx9OKotJxOJqUH60", "FishingRewardPopup");
var i = e("PopupReward"), a = e("Game");
cc.Class({
extends: i,
okSkipSub: function() {
if (a.scene.targetFishingSpot) {
a.scene.targetFishingSpot.RewardSuccess();
a.scene.targetFishingSpot.RewardClose();
}
},
cancelSub: function() {
a.scene.targetFishingSpot = null;
}
});
cc._RF.pop();
}, {
Game: "Game",
PopupReward: "PopupReward"
} ],
FishingSpotData: [ function(e, t) {
"use strict";
cc._RF.push(t, "dd4bf/UkOlIhqHP8LjzVaju", "FishingSpotData");
var i = e("BaseModel"), a = {
Spot0: {
name: "近くの釣り場",
localize: "fishing_spot0",
comp: !1,
bonus: 500,
fishes: [ {
tag: "Fish4",
rate: 60,
num: 0
}, {
tag: "Fish10",
rate: 60,
num: 0
}, {
tag: "Fish16",
rate: 60,
num: 0
}, {
tag: "Fish18",
rate: 60,
num: 0
}, {
tag: "Fish5",
rate: 15,
num: 0
}, {
tag: "Fish11",
rate: 15,
num: 0
}, {
tag: "Fish0",
rate: 15,
num: 0
}, {
tag: "Fish6",
rate: 8,
num: 0
}, {
tag: "Fish12",
rate: 8,
num: 0
} ]
},
Spot1: {
name: "広い釣り場",
localize: "fishing_spot1",
comp: !1,
bonus: 700,
fishes: [ {
tag: "Fish1",
rate: 60,
num: 0
}, {
tag: "Fish7",
rate: 60,
num: 0
}, {
tag: "Fish13",
rate: 60,
num: 0
}, {
tag: "Fish17",
rate: 60,
num: 0
}, {
tag: "Fish2",
rate: 15,
num: 0
}, {
tag: "Fish8",
rate: 15,
num: 0
}, {
tag: "Fish14",
rate: 15,
num: 0
}, {
tag: "Fish3",
rate: 5,
num: 0
}, {
tag: "Fish9",
rate: 5,
num: 0
}, {
tag: "Fish15",
rate: 5,
num: 0
} ]
},
Spot2: {
name: "オアシスの釣り場",
localize: "fishing_spot2",
comp: !1,
bonus: 2500,
fishes: [ {
tag: "Fish19",
rate: 60,
num: 0
}, {
tag: "Fish25",
rate: 60,
num: 0
}, {
tag: "Fish30",
rate: 60,
num: 0
}, {
tag: "Fish20",
rate: 15,
num: 0
}, {
tag: "Fish26",
rate: 15,
num: 0
}, {
tag: "Fish32",
rate: 15,
num: 0
}, {
tag: "Fish21",
rate: 5,
num: 0
}, {
tag: "Fish27",
rate: 5,
num: 0
}, {
tag: "Fish29",
rate: 5,
num: 0
} ]
},
Spot3: {
name: "地下の釣り場",
localize: "fishing_spot3",
comp: !1,
bonus: 2e3,
fishes: [ {
tag: "Fish22",
rate: 60,
num: 0
}, {
tag: "Fish31",
rate: 60,
num: 0
}, {
tag: "Fish23",
rate: 15,
num: 0
}, {
tag: "Fish33",
rate: 15,
num: 0
}, {
tag: "Fish24",
rate: 5,
num: 0
}, {
tag: "Fish28",
rate: 5,
num: 0
} ]
},
Spot4: {
name: "海の釣り場",
localize: "fishing_spot4",
comp: !1,
bonus: 5e3,
fishes: [ {
tag: "Fish34",
rate: 60,
num: 0
}, {
tag: "Fish37",
rate: 60,
num: 0
}, {
tag: "Fish40",
rate: 60,
num: 0
}, {
tag: "Fish42",
rate: 60,
num: 0
}, {
tag: "Fish35",
rate: 15,
num: 0
}, {
tag: "Fish38",
rate: 15,
num: 0
}, {
tag: "Fish41",
rate: 15,
num: 0
}, {
tag: "Fish36",
rate: 5,
num: 0
}, {
tag: "Fish39",
rate: 5,
num: 0
}, {
tag: "Fish43",
rate: 3,
num: 0
} ]
},
Spot5: {
name: "滝の釣り場",
localize: "fishing_spot5",
comp: !1,
bonus: 6e3,
fishes: [ {
tag: "Fish44",
rate: 60,
num: 0
}, {
tag: "Fish47",
rate: 60,
num: 0
}, {
tag: "Fish51",
rate: 60,
num: 0
}, {
tag: "Fish52",
rate: 60,
num: 0
}, {
tag: "Fish45",
rate: 15,
num: 0
}, {
tag: "Fish48",
rate: 15,
num: 0
}, {
tag: "Fish50",
rate: 15,
num: 0
}, {
tag: "Fish46",
rate: 5,
num: 0
}, {
tag: "Fish49",
rate: 5,
num: 0
}, {
tag: "Fish53",
rate: 3,
num: 0
} ]
},
Spot6: {
name: "空の釣り場",
localize: "fishing_spot6",
comp: !1,
bonus: 9e3,
fishes: [ {
tag: "Fish64",
rate: 60,
num: 0
}, {
tag: "Fish65",
rate: 60,
num: 0
}, {
tag: "Fish71",
rate: 60,
num: 0
}, {
tag: "Fish66",
rate: 15,
num: 0
}, {
tag: "Fish67",
rate: 15,
num: 0
}, {
tag: "Fish70",
rate: 15,
num: 0
}, {
tag: "Fish72",
rate: 15,
num: 0
}, {
tag: "Fish68",
rate: 5,
num: 0
}, {
tag: "Fish69",
rate: 5,
num: 0
}, {
tag: "Fish73",
rate: 3,
num: 0
} ]
},
Spot7: {
name: "池の釣り場",
localize: "fishing_spot7",
comp: !1,
bonus: 1e4,
fishes: [ {
tag: "Fish54",
rate: 60,
num: 0
}, {
tag: "Fish55",
rate: 60,
num: 0
}, {
tag: "Fish62",
rate: 60,
num: 0
}, {
tag: "Fish56",
rate: 15,
num: 0
}, {
tag: "Fish57",
rate: 15,
num: 0
}, {
tag: "Fish60",
rate: 15,
num: 0
}, {
tag: "Fish61",
rate: 15,
num: 0
}, {
tag: "Fish58",
rate: 5,
num: 0
}, {
tag: "Fish59",
rate: 5,
num: 0
}, {
tag: "Fish63",
rate: 3,
num: 0
} ]
}
}, s = cc.Class({
extends: i,
init: function(e) {
this._super(e, "FishingSpotData");
this.spotData = a;
},
load: function() {
for (var e in this.spotData) {
this.spotData[e].comp = this.loadBoolean(e + ".comp", !1);
for (var t = this.spotData[e].fishes, i = 0; i < t.length; i++) {
var a = t[i].tag;
t[i].num = this.loadNumber(e + ".fishes." + a + ".num", 0);
}
}
},
reset: function() {
for (var e in this.spotData) {
this.spotData[e].comp = !1;
this.saveBoolean(e + ".comp", !1);
for (var t = this.spotData[e].fishes, i = 0; i < t.length; i++) {
var a = t[i].tag;
t[i].num = 0;
this.saveNumber(e + ".fishes." + a + ".num", 0);
}
}
},
newgame: function() {
this.reset();
},
GetData: function(e) {
return e in this.spotData ? this.spotData[e] : null;
},
GetName: function(e) {
return e in this.spotData ? this.game.getLocalizedStr(this.spotData[e].localize, this.spotData[e].name) : "";
},
GetBonus: function(e) {
return e in this.spotData ? this.spotData[e].bonus : 0;
},
IsComp: function(e) {
return e in this.spotData && this.spotData[e].comp;
},
CalcCompRate: function(e) {
if (e in this.spotData) {
var t = this.spotData[e].fishes, i = t.length;
if (0 == i) return 0;
for (var a = 0, s = 0; s < i; s++) t[s].num > 0 && a++;
return Math.floor(a / i * 100);
}
return 0;
},
CheckComp: function(e) {
if (e in this.spotData) {
for (var t = !0, i = this.spotData[e].fishes, a = 0; a < i.length; a++) if (0 == i[a].num) {
t = !1;
break;
}
if (1 == t && 0 == this.spotData[e].comp) {
this.spotData[e].comp = !0;
this.saveBoolean(e + ".comp", !0);
return !0;
}
}
return !1;
},
GetFishList: function(e) {
return e in this.spotData ? this.spotData[e].fishes : null;
},
IsHave: function(e, t) {
if (e in this.spotData) for (var i = this.spotData[e].fishes, a = 0; a < i.length; a++) if (i[a].tag == t) return i[a].num > 0;
return !1;
},
CatchUpFish: function(e, t) {
if (e in this.spotData) for (var i = this.spotData[e].fishes, a = 0; a < i.length; a++) if (i[a].tag == t) {
var s = 0 == i[a].num;
i[a].num++;
this.saveNumber(e + ".fishes." + t + ".num", i[a].num);
return s;
}
return !1;
},
CalcTypeOfFishCaught: function(e) {
if (e in this.spotData) {
for (var t = 0, i = this.spotData[e].fishes, a = 0; a < i.length; a++) i[a].num > 0 && t++;
return t;
}
return 0;
}
});
t.exports = s;
cc._RF.pop();
}, {
BaseModel: "BaseModel"
} ],
FishingSpot: [ function(e, t) {
"use strict";
cc._RF.push(t, "55276iXRrpFKZ/UV5ufrfJW", "FishingSpot");
var i = e("Resource"), a = e("ResourceState"), s = e("CommandType"), n = e("Game"), o = e("Direction"), c = e("FishSize"), r = [ cc.v2(-44, -2), cc.v2(-48, 12), cc.v2(-54, -18) ], h = [ [ cc.v2(-44, -10), cc.v2(-47, -18) ], [ cc.v2(-45, 12), cc.v2(-44, 5) ], [ cc.v2(-74, -18), cc.v2(-70, 12) ] ], u = cc.v2(-32, -2), l = [ {
min: 1,
max: 2
}, {
min: 1,
max: 3
}, {
min: 2,
max: 4
} ];
cc.Class({
extends: i,
properties: {
fishingSpotTag: "SPOT_TAG",
direction: {
type: o,
default: o.LEFT
},
shadows: [ cc.Sprite ],
rod: cc.Sprite,
rodState: cc.Sprite,
rodStateCheck: cc.SpriteFrame,
rodStateSuccess: cc.SpriteFrame,
rodStateFail: cc.SpriteFrame,
checkReward: cc.Node,
seThrow: cc.AudioClip,
spMark: cc.Node,
spChair: cc.Node,
spBucket: cc.Node
},
onLoad: function() {
this._super();
this.isMinibox = !1;
this.shadowIdx = 0;
this.shadowMax = this.shadows.length;
this.rodAnime = this.rod.node.getComponent(cc.Animation);
this.bitingRetry = 0;
this.flagPlaying = !1;
this.flagThrow = !1;
this.flagBiting = !1;
this.flagFinish = !1;
this.fishTags = [];
this.targetFishTag = "";
this.targetFishSize = c.SMALL;
this.flagRewardSuccess = !1;
this.elapsed = 0;
this.popupCmd = null;
this.checkReward.active = !1;
this.splitInterval = Math.floor(this.reviveInterval / 3);
this.dir = this.direction == o.LEFT ? 1 : -1;
if (this.direction == o.RIGHT) {
this.checkMe.scaleX = -1;
this.rodState.node.scaleX = -1;
this.checkReward.scaleX = -1;
}
this.reset_all();
},
progress: function(e) {
this.elapsed = e;
if (e >= this.reviveInterval) {
this.change_state(a.REVIVE);
this.checkMe.active = !this.flagPlaying;
this.checkReward.active = !1;
this.progress_view(3);
} else e >= 2 && !this.flagPlaying && !this.checkReward.active ? this.checkReward.active = !this.flagPlaying : this.elapsed >= 2 * this.splitInterval ? this.progress_view(2) : this.elapsed >= this.splitInterval && this.progress_view(1);
},
refreshView: function() {
this.state >= a.REVIVE && this.progress_view(3);
},
progress_view: function(e) {
if (0 === e && !this.spMark.active) {
this.spMark.active = !0;
this.spChair.active = !1;
this.spBucket.active = !1;
this.rod.node.active = !1;
}
if (e >= 1 && !this.spChair.active) {
this.spChair.active = !0;
this.spMark.active = !1;
}
e >= 2 && !this.spBucket.active && (this.spBucket.active = !0);
e >= 3 && !this.rod.node.active && (this.rod.node.active = !0);
},
getAvailableCommand: function() {
return this.state >= a.REVIVE ? s.EVENT : 1 == this.flagRewardSuccess ? s.EVENT : this.elapsed >= 2 ? s.COLLECT : s.NONE;
},
execCommand: function(e) {
if (e == s.EVENT || 1 == this.flagRewardSuccess) n.scene.manager.ShowFishingPopupWithTarget(this); else if (e == s.COLLECT) {
n.scene.targetFishingSpot = this;
n.scene.manager.ShowFishingRewardPopup();
}
},
GetFishingSpotTag: function() {
return this.fishingSpotTag;
},
reset_all: function() {
this.shadowIdx = 0;
for (var e = 0; e < this.shadowMax; e++) {
this.shadows[e].node.opacity = 0;
this.shadows[e].node.scale = 1;
this.shadows[e].node.position = cc.v2(r[e].x - 20, r[e].y);
}
this.bitingRetry = 0;
this.flagPlaying = !1;
this.flagThrow = !1;
this.flagBiting = !1;
this.flagFinish = !1;
this.rodState.spriteFrame = this.rodStateCheck;
this.rodState.node.active = !1;
this.fishTags = [];
this.targetFishTag = "";
this.targetFishSize = c.SMALL;
this.popupCmd = null;
this.progress_view(0);
},
FishingStart: function() {
this.finish();
this.flagPlaying = !0;
this.flagRewardSuccess = !1;
this.checkReward.active = !1;
this.checkMe.active = !1;
var e = n.fishingLevel.getLevel() / n.fishingLevel.getLevelMax(), t = n.fishingSpotData.GetFishList(this.fishingSpotTag);
if (null != t) {
for (var i = 0, a = [], s = 0; s < t.length; s++) {
var o = t[s].tag, r = n.fishData.GetSize(o), h = t[s].rate, u = h;
r == c.MIDDLE ? u = h * (.5 * e + 1) : r == c.LARGE && (u = h * (1 * e + 1));
a[s] = u;
i += u;
}
this.fishTags = [];
for (var l = 0; l < 3; l++) for (var p = Math.random() * i, d = 0, m = 0; m < t.length; m++) if ((d += a[m]) > p) {
var f = t[m].tag, g = n.fishData.GetSize(f);
this.fishTags[l] = f;
var v = this.shadows[l].node.getComponent(cc.Animation);
v && v.play("FishShadow" + g);
break;
}
n.scene.PauseInput();
n.scene.hero.node.position = cc.v2(this.node.position.x + 8 * this.dir, this.node.position.y - 1);
n.scene.hero.ChangeDir(this.direction);
this.node.runAction(cc.sequence(cc.delayTime(.6), cc.callFunc(this.appear_fish_shadows, this)));
}
},
appear_fish_shadows: function() {
for (var e = 0; e < this.shadowMax; e++) this.shadows[e].node.runAction(cc.spawn(cc.fadeIn(.8), cc.moveBy(.8, cc.v2(20, 0))));
this.node.runAction(cc.sequence(cc.delayTime(.8), cc.callFunc(this.start_rotation, this), cc.delayTime(.6), cc.callFunc(this.show_popup_throw, this)));
},
start_rotation: function() {
this.node.runAction(cc.repeatForever(cc.sequence(cc.callFunc(this.rotation_fishes, this), cc.callFunc(this.check_throw, this), cc.delayTime(.5), cc.callFunc(this.check_throw, this), cc.delayTime(.5), cc.callFunc(this.check_throw, this), cc.delayTime(.5), cc.callFunc(this.check_throw, this), cc.delayTime(.5), cc.callFunc(this.check_throw, this), cc.delayTime(.5), cc.callFunc(this.check_throw, this))));
},
rotation_fishes: function() {
for (var e = 0; e < this.shadowMax; e++) {
var t = e - this.shadowIdx;
t < 0 ? t += this.shadowMax : t >= this.shadowMax && (t -= this.shadowMax);
var i = t - 1;
i < 0 ? i += this.shadowMax : i >= this.shadowMax && (i -= this.shadowMax);
this.shadows[e].node.runAction(cc.bezierTo(.5, [ h[t][0], h[t][1], r[i] ]));
}
this.shadowIdx++;
this.shadowIdx >= this.shadowMax && (this.shadowIdx -= this.shadowMax);
},
show_popup_throw: function() {
n.scene.manager.ShowFishingCmdPopupThrow(this);
},
FishingThrow: function() {
this.flagThrow = !0;
this.seThrow && n.sound.playSE(this.seThrow);
this.rodAnime && this.rodAnime.play("RodThrow");
},
check_throw: function() {
if (1 == this.flagThrow) {
this.node.stopAllActions();
this.node.runAction(cc.sequence(cc.delayTime(.4), cc.callFunc(this.select_fishs, this)));
}
},
select_fishs: function() {
this.targetFishTag = this.fishTags[this.shadowIdx];
this.targetFishSize = n.fishData.GetSize(this.targetFishTag);
for (var e = 0; e < this.shadowMax; e++) e == this.shadowIdx ? this.shadows[e].node.runAction(cc.moveBy(.8, cc.v2(6, 0))) : this.shadows[e].node.runAction(cc.spawn(cc.fadeOut(.8), cc.moveBy(.8, cc.v2(-20, 0))));
this.node.runAction(cc.sequence(cc.delayTime(.8), cc.callFunc(this.show_popup_catch_up, this), cc.delayTime(.6), cc.callFunc(this.fish_biting, this)));
},
fish_biting: function() {
if (1 != this.flagFinish) if (this.bitingRetry++ >= 3) this.timeup(); else {
var e = l[this.targetFishSize], t = e.min + Math.round(Math.random() * (e.max - e.min));
this.shadows[this.shadowIdx].node.runAction(cc.sequence(cc.repeat(cc.sequence(cc.moveBy(.4, cc.v2(4, 0)), cc.moveBy(.4, cc.v2(-4, 0)), cc.delayTime(.8)), t), cc.moveBy(.1, cc.v2(6, 0)), cc.callFunc(this.rod_biting, this), cc.delayTime(2), cc.callFunc(this.rod_bite_cancel, this), cc.moveBy(.2, cc.v2(-6, 0)), cc.delayTime(1), cc.callFunc(this.fish_biting, this)));
}
},
show_popup_catch_up: function() {
this.popupCmd = n.scene.manager.ShowFishingCmdPopupCatchUp(this);
},
rod_poke: function() {
this.rodAnime && this.rodAnime.play("RodPoke");
},
rod_biting: function() {
this.flagBiting = !0;
this.rodState.node.active = !0;
this.rodAnime && this.rodAnime.play("RodBiting");
},
rod_bite_cancel: function() {
this.flagBiting = !1;
this.rodState.node.active = !1;
this.rodAnime && this.rodAnime.play("RodBiteCancel");
},
FishingCatchUp: function() {
if (1 != this.flagFinish) {
this.shadows[this.shadowIdx].node.stopAllActions();
this.rodAnime && this.rodAnime.play("RodUp");
1 == this.flagBiting ? this.fishing_success() : this.fishing_fail();
}
},
timeup: function() {
this.popupCmd && this.popupCmd.Hide();
this.rodAnime && this.rodAnime.play("RodUp");
this.fishing_fail();
},
fishing_success: function() {
this.flagFinish = !0;
this.rodState.spriteFrame = this.rodStateSuccess;
this.rodState.node.active = !0;
this.shadows[this.shadowIdx].node.runAction(cc.scaleTo(.1, 0));
var e = n.scene.manager.GetFishDropPrefab();
if (e) {
var t = cc.instantiate(e);
if (t) {
n.scene.node.addChild(t);
t.opacity = 0;
var i = t.getComponent(cc.Sprite);
if (i) {
var a = n.fishData.GetURL(this.targetFishTag), s = this;
cc.resources.load(a, cc.SpriteFrame, function(e, a) {
if (!e && a) {
i.spriteFrame = a;
s.drop_fish(t);
}
});
}
}
}
this.node.runAction(cc.sequence(cc.delayTime(1.5), cc.callFunc(this.show_result, this)));
},
FishingSuccessFinish: function() {
this.node.runAction(cc.sequence(cc.callFunc(this.finish_fishing, this), cc.delayTime(1), cc.callFunc(this.reset_all, this)));
},
fishing_fail: function() {
this.flagFinish = !0;
this.rodState.spriteFrame = this.rodStateFail;
this.rodState.node.active = !0;
this.shadows[this.shadowIdx].node.runAction(cc.sequence(cc.moveTo(.2, r[0]), cc.delayTime(1), cc.spawn(cc.fadeOut(.8), cc.moveBy(.8, cc.v2(-20, 0)))));
this.node.runAction(cc.sequence(cc.delayTime(1.6), cc.callFunc(this.finish_fishing, this), cc.delayTime(.4), cc.callFunc(this.reset_all, this)));
},
finish_fishing: function() {
this.finish();
this.rodState.node.active = !1;
this.progress_view(0);
this.flagPlaying = !1;
n.scene.ResumeInput();
},
show_result: function() {
n.scene.manager.ShowFishingPopupResult(this, this.targetFishTag);
},
drop_fish: function(e) {
this.seDamage && n.sound.playSE(this.seDamage);
e.opacity = 255;
e.setPosition(this.node.position.add(cc.v2(u.x * this.dir, u.y)));
this.direction == o.RIGHT && (e.scaleX = -1);
var t = e.getComponent("DropItem");
if (t) {
var i = n.fishData.GetSize(this.targetFishTag);
e.runAction(cc.sequence(cc.jumpBy(.6 + .1 * i, cc.v2((20 * i + 60 + (10 * i + 10) * Math.random()) * this.dir, 0), 15 * i + 60 + (10 * i + 10) * Math.random(), 1), cc.jumpBy(.2, cc.v2(10 * this.dir, 0), 10, 1), cc.callFunc(t.drop_end, t)));
}
},
RewardSuccess: function() {
this.flagRewardSuccess = !0;
},
RewardClose: function() {
this.node.runAction(cc.callFunc(this._rewardClose, this));
},
_rewardClose: function() {
n.scene.targetFishingSpot = null;
if (0 != this.flagRewardSuccess) {
this.progress_view(3);
n.scene.manager.ShowFishingPopupWithTarget(this);
}
}
});
cc._RF.pop();
}, {
CommandType: "CommandType",
Direction: "Direction",
FishSize: "FishSize",
Game: "Game",
Resource: "Resource",
ResourceState: "ResourceState"
} ],
FloorLock: [ function(e, t) {
"use strict";
cc._RF.push(t, "10ab31cU+BJ3poqiH2p2ApP", "FloorLock");
var i = e("RemoteLock"), a = e("CheckMe"), s = e("Game");
cc.Class({
extends: i,
properties: {
needFloor: 1,
checkMe: a
},
onLoad: function() {
this._super();
this.checkMe.SetNum(this.needFloor);
},
newgame: function() {
this.lock || this.isAvailable() || this.ChangeLock(!0);
},
CheckLock: function(e) {
if (!this.IsLock()) return !1;
if (this.isAvailable()) {
e ? this.OpenLock() : this.ChangeLock(!1);
return !0;
}
return !1;
},
isAvailable: function() {
return s.dungeon.getReachFloorCount() >= this.needFloor;
}
});
cc._RF.pop();
}, {
CheckMe: "CheckMe",
Game: "Game",
RemoteLock: "RemoteLock"
} ],
FurnacePopup: [ function(e, t) {
"use strict";
cc._RF.push(t, "e0924F8ZVFIRYpCZI/wdBgK", "FurnacePopup");
var i = e("Popup"), a = e("Game"), s = e("ItemInfo"), n = e("ItemRank");
cc.Class({
extends: i,
properties: {
prefabItemInfo: cc.Prefab,
buttonOk: cc.Button
},
ctor: function() {
this.targetFurnace = null;
},
onLoad: function() {
this._super();
},
Ok: function() {
this.targetFurnace && this.targetFurnace.CraftStart();
this.Hide();
},
ShowWithInfo: function(e, t, i, a, s, n, o) {
this.Show() && this.SetInfo(e, t, i, a, s, n, o);
},
SetInfo: function(e, t, i, s, o, c, r) {
this.targetFurnace = e;
var h = a.item.getNum(t, n.NONE) >= i, u = a.item.getNum(s, n.NONE) >= o;
this.addItemInfo(t, i, cc.v2(-38, 0), h);
this.addItemInfo(s, o, cc.v2(-8, 0), u);
this.addItemInfo(c, r, cc.v2(32, 0), !0);
this.buttonOk.interactable = h && u;
this.flagUseOk = this.buttonOk.interactable;
},
addItemInfo: function(e, t, i, a) {
var n = cc.instantiate(this.prefabItemInfo);
if (n) {
this.window.addChild(n);
n.setPosition(i);
n.color = new cc.Color(213, 165, 112);
var o = n.getComponent(s);
if (o) {
o.SetTag(e);
o.SetNum(t);
o.SetNumColor(a ? new cc.Color(255, 255, 255) : new cc.Color(240, 0, 0));
}
}
}
});
cc._RF.pop();
}, {
Game: "Game",
ItemInfo: "ItemInfo",
ItemRank: "ItemRank",
Popup: "Popup"
} ],
Furnace: [ function(e, t) {
"use strict";
cc._RF.push(t, "f99e2BeyzlDNKB6pUt4ej+X", "Furnace");
var i = e("Gimmick"), a = e("CommandType"), s = e("FurnacePopup"), n = e("ItemRank"), o = e("SaveData"), c = e("Game"), r = cc.Enum({
IDLE: 0,
WAITING: 1,
COMPLETE: 2
});
cc.Class({
extends: i,
properties: {
nodeEnter: cc.Node,
nodeLight: cc.Node,
nodeCheck: cc.Node,
popupFurnace: cc.Prefab,
seCraft: cc.AudioClip,
seDrop: cc.AudioClip,
materialItemTag: "",
materialNum: 0,
fuelItemTag: "",
fuelNum: 0,
outputItemTag: "",
outputNum: 0,
outputDropItem: cc.Prefab,
outputInterval: 60
},
onLoad: function() {
this._super();
this.state = o.loadNumber(this.savekey + ".state", r.IDLE);
this.startTime = o.loadNumber(this.savekey + ".startTime", 0);
this.change_view();
var e = this.node.parent.getComponent("ResourceManager");
e && e.RegistResource(this);
},
newgame: function() {
this.state = r.IDLE;
this.startTime = 0;
o.saveNumber(this.savekey + ".state", this.state);
o.saveNumber(this.savekey + ".startTime", this.startTime);
this.change_view();
},
CheckStatePoll: function(e) {
this.state == r.WAITING && e - this.startTime >= this.outputInterval && this.change_state(r.COMPLETE);
},
getAvailableCommand: function() {
return a.EVENT;
},
execCommand: function(e) {
if (e == a.EVENT) if (this.state == r.IDLE) {
if (this.popupFurnace) {
var t = cc.instantiate(this.popupFurnace);
if (t) {
c.scene.camera.node.addChild(t);
var i = t.getComponent(s);
i && i.ShowWithInfo(this, this.materialItemTag, this.materialNum, this.fuelItemTag, this.fuelNum, this.outputItemTag, this.outputNum);
}
}
} else this.state == r.COMPLETE && this.drop_item();
},
CraftStart: function() {
if (this.state == r.IDLE) {
this.seCraft && c.sound.playSE(this.seCraft);
c.item.useNum(this.materialItemTag, n.NONE, this.materialNum);
c.item.useNum(this.fuelItemTag, n.NONE, this.fuelNum);
this.startTime = Math.floor(Date.now() / 1e3);
o.saveNumber(this.savekey + ".startTime", this.startTime);
this.change_state(r.WAITING);
}
},
change_state: function(e) {
this.state = e;
o.saveNumber(this.savekey + ".state", this.state);
this.change_view();
},
change_view: function() {
this.nodeEnter.color = this.state == r.WAITING ? new cc.Color(255, 0, 0) : new cc.Color(126, 107, 107);
this.nodeLight.color = this.state == r.WAITING ? new cc.Color(0, 255, 0) : new cc.Color(0, 127, 0);
this.nodeCheck.active = this.state == r.COMPLETE;
this.state == r.WAITING ? this.craft_anime_start() : this.craft_anime_stop();
},
drop_item: function() {
var e = cc.instantiate(this.outputDropItem);
if (e) {
c.scene.node.addChild(e);
e.setPosition(cc.v2(this.node.position.x, this.node.position.y + 6));
var t = e.getComponent("DropItem");
if (t) {
t.drop();
this.seDrop && c.sound.playSE(this.seDrop);
}
}
this.change_state(r.IDLE);
},
craft_anime_start: function() {
this.node.runAction(cc.repeatForever(cc.sequence(cc.scaleTo(.2, 1, 1.1), cc.scaleTo(.2, 1, 1))));
},
craft_anime_stop: function() {
this.node.stopAllActions();
this.node.scale = 1;
}
});
cc._RF.pop();
}, {
CommandType: "CommandType",
FurnacePopup: "FurnacePopup",
Game: "Game",
Gimmick: "Gimmick",
ItemRank: "ItemRank",
SaveData: "SaveData"
} ],
Game: [ function(e, t) {
"use strict";
cc._RF.push(t, "2616aeXbHtD6phJPPWW9ghI", "Game");
var i = e("SaveData"), a = e("Sound"), s = e("Counter"), n = e("Currency"), o = e("Artifact"), c = e("Bukken"), r = e("QuestMap0"), h = e("QuestMap1"), u = e("QuestMap2"), l = e("QuestMap3"), p = e("QuestMap4"), d = e("ToolLevel"), m = e("FishData"), f = e("FishingSpotData"), g = e("Level"), v = e("Tutorial"), S = e("WarpData"), _ = e("Story"), C = e("Resident"), T = e("Direction"), b = e("Purchase"), A = e("PioneerData"), R = e("Monoris"), w = e("Jonathan"), k = e("PlayTime"), y = e("Dungeon"), x = e("InAppReview"), P = e("ItemRank"), L = [ "tool_lv_0", "tool_lv_1", "tool_lv_2", "tool_lv_3", "tool_lv_4", "tool_lv_5" ], I = {
baseKey: "minifarm",
debug: !1,
fontScale: .1875,
sound: null,
playTime: null,
coin: null,
item: null,
artifacts: [],
artifactTag: "",
artifactId: 0,
getArtifact: function() {
return this.artifacts[this.artifactId];
},
getArtifactByTag: function(e) {
var t = this.getArtifactIdByTag(e);
return t >= 0 ? this.artifacts[t] : null;
},
getArtifactId: function() {
return this.artifactId;
},
getArtifactTag: function() {
return this.artifactTag;
},
getArtifactIdByTag: function(e) {
return "Artifact0" == e ? 0 : "Artifact1" == e ? 1 : "Artifact2" == e ? 2 : "Artifact3" == e ? 3 : "Artifact4" == e ? 4 : -1;
},
setArtifactTag: function(e) {
var t = this.getArtifactIdByTag(e);
if (t >= 0) {
this.artifactId = t;
this.artifactTag = e;
} else {
this.artifactId = 0;
this.artifactTag = "";
}
},
getMiniBoxPrefab: function() {
return this.scene && "" != this.artifactTag ? this.scene.manager.dropMiniboxs[this.artifactId] : null;
},
makeKeyRate: 0,
bukken: null,
fishData: null,
fishingSpotData: null,
fishingLevel: null,
quests: [],
questTag: "Quest0",
getQuest: function() {
return this.quests[this.questTag];
},
setQuestTag: function(e) {
this.questTag = e;
},
chestKey: null,
rewardCount: null,
newgameCount: null,
scene: null,
flagTutorial: !1,
isTutorial: function() {
return this.flagTutorial;
},
doTutorial: function() {
this.flagTutorial = !0;
i.saveBoolean("flagTutorial", !0);
},
tutorial: null,
bannerType: 0,
decideBanner: function() {
if (0 == this.bannerType) {
this.bannerType = Math.random() < .5 ? 1 : 2;
i.saveNumber("bannerType", this.bannerType);
}
},
getBannerTag: function() {
return "footer";
},
getDelayBannerAds: function() {
return 180 - this.playTime.getPlayLaunchTime();
},
labelEffectLoading: function(e) {
e && e.node.runAction(cc.repeatForever(cc.sequence(cc.tintTo(.6, new cc.Color(127, 127, 127)), cc.tintTo(.6, new cc.Color(200, 200, 200)))));
},
labelEffectReady: function(e) {
if (e) {
e.node.stopAllActions();
e.node.color = new cc.Color(0, 0, 0);
}
},
labelEffectError: function(e) {
if (e) {
e.node.stopAllActions();
e.node.color = new cc.Color(200, 200, 200);
}
},
toolLv: d.STONE,
getToolLv: function() {
return this.toolLv;
},
setToolLv: function(e) {
this.toolLv = e;
i.saveNumber("toolLv", this.toolLv);
},
getToolFirstDamage: function() {
return this.toolLv + 1;
},
getToolName: function(e) {
return this.getLocalizedStr(L[e]);
},
getPlayCount: function() {
return this.newgameCount.getCount() + 1;
},
Is2ndPlay: function() {
return this.getPlayCount() >= 2;
},
flagReadonEnding: !1,
IsReadonEnding: function() {
return this.flagReadonEnding;
},
DoReadonEnding: function() {
if (!this.flagReadonEnding) {
this.flagReadonEnding = !0;
i.saveBoolean("flagReadonEnding", !0);
}
},
flagTrueEnd: !1,
CheckTrueEnd: function() {
if (!this.flagTrueEnd && this.Is2ndPlay() && this.jonathan.IsAllReached() && this.monoris.IsAllReached()) {
this.flagTrueEnd = !0;
i.saveBoolean("flagTrueEnd", !0);
}
},
IsTrueEnd: function() {
return this.flagTrueEnd;
},
warpData: null,
story: null,
resident: null,
purchase: null,
pioneerData: null,
monoris: null,
jonathan: null,
savedGames: null,
flagGooglePCGames: !1,
modifiedforPC: function() {
if (this.flagGooglePCGames) for (var e = [ "bargain_sign_0", "bargain_sign_1", "bargain_sign_2", "bargain_sign_3", "bargain_sign_4", "chest_reward", "fishing_reward", "refresh_title", "makekey_title", "makekey_skip", "private_title" ], t = 0; t < e.length; t++) {
var i = e[t];
i in this.lang_data && (this.lang_data[i] = this.getLocalizedStr(i + "_pc", this.lang_data[i]));
}
},
dungeon: null,
item2: null,
flagBag: !1,
bagNum: [],
enableBag: function() {
this.flagBag = !0;
},
disableBag: function() {
this.flagBag = !1;
},
clearBag: function() {
this.bagNum = [];
},
addBag: function(e, t, i) {
t == P.RARE && (e += ".RARE");
e in this.bagNum ? this.bagNum[e] += i : this.bagNum[e] = i;
},
saveBag: function() {
for (var e in this.bagNum) {
var t = this.getBagItemNum(e);
if (!(t <= 0)) {
var i = this.getBagItemTag(e), a = this.getBagItemRank(e);
"Coin" === i ? this.coin.saveCurrency(t) : this.item.isItem(i) && this.item.addNum(i, a, t);
}
}
this.item.saveLater();
this.clearBag();
},
isContainBag: function(e) {
return e in this.bagNum;
},
getBagItemNum: function(e) {
return this.isContainBag(e) ? this.bagNum[e] : 0;
},
getBagItemTag: function(e) {
var t = e.indexOf(".RARE");
return t >= 0 ? e.slice(0, t) : e;
},
getBagItemRank: function(e) {
return e.indexOf(".RARE") >= 0 ? P.RARE : P.NONE;
},
USE_POTION_NUM: 1,
isAvailableLvup: function(e, t) {
return !e.isLvMax() && this.item.getNum(t, P.NONE) >= this.USE_POTION_NUM;
},
isAvailableLvupLife: function() {
return this.isAvailableLvup(this.dungeon.getStatusLife(), "PotionLife");
},
isAvailableLvupStamina: function() {
return this.isAvailableLvup(this.dungeon.getStatusStamina(), "PotionStamina");
},
isAvailableLvupSpeed: function() {
return this.isAvailableLvup(this.dungeon.getStatusSpeed(), "PotionSpeed");
},
inAppReview: null,
achievement: null,
explorer: null,
support_lang: [ "en", "ja", "es", "de", "fr", "ru", "zh-cn", "zh-tw", "ko", "pt" ],
lang_string: [ "English", "日本語", "Español", "Deutsch", "Français", "Русский", "简体中文", "繁體中文", "한국어", "Português" ],
lang_code_default: "en",
lang_code: "en",
localize_file: "localized",
getLang: function() {
return this.lang_code;
},
setLang: function(e) {
this.lang_code = e;
i.saveString("langCode", this.lang_code);
this.loadLocalizeData(this.parseLocalizedData);
},
isJapanese: function() {
return "ja" === this.lang_code;
},
getLangString: function(e) {
var t = this.getLangIdx(e);
return this.lang_string[t];
},
getLangIdx: function(e) {
for (var t = 0; t < this.support_lang.length; t++) if (this.support_lang[t] == e) return t;
return 0;
},
nextLangCode: function(e) {
var t = this.getLangIdx(e);
++t >= this.support_lang.length && (t = 0);
return this.support_lang[t];
},
lang_data: [],
initLanguage: function() {
this.lang_code = i.loadString("langCode", "");
if ("" == this.lang_code) {
this.lang_code = this.lang_code_default;
var e = cc.sys.language;
e.toLowerCase();
var t = cc.sys.languageCode;
t.toLowerCase();
for (var a = 0; a < this.support_lang.length; a++) {
if (this.support_lang[a] == e) {
this.lang_code = this.support_lang[a];
break;
}
if ("zh" == e) {
this.lang_code = -1 != t.indexOf("hant") ? "zh-tw" : "zh-cn";
break;
}
}
i.saveString("langCode", this.lang_code);
}
},
loadLocalizeData: function(e) {
cc.resources.load(this.localize_file, e);
},
parseLocalizedData: function(e, t) {
if (!e) {
for (var i = new RegExp('(\\,|\\r?\\n|\\r|^)(?:"([^"]*(?:""[^"]*)*)"|([^"\\,\\r\\n]*))', "gi"), a = [ [] ], s = null; s = i.exec(t); ) {
var n = s[1];
n.length && "," != n && a.push([]);
var o;
o = s[2] ? s[2].replace(new RegExp('""', "g"), '"') : s[3];
a[a.length - 1].push(o);
}
for (var c = 2, r = c, h = 1; h < a[0].length; h++) {
a[0][h] == I.lang_code_default && (c = h);
if (a[0][h] == I.lang_code) {
r = h;
break;
}
h == a[0].length - 1 && (r = c);
}
for (var u = 0; u < a.length; u++) {
var l = a[u];
I.lang_data[l[0]] = l[r];
}
}
},
getLocalizedStr: function(e, t) {
if (e in this.lang_data) return this.lang_data[e];
cc.log("ERROR! getLocalizedStr() tag=" + e);
return t || e;
},
getReplacedStr: function(e, t, i) {
return this.getLocalizedStr(e).replace(t, i);
},
getReplacedStr2: function(e, t, i, a, s) {
return this.getLocalizedStr(e).replace(t, i).replace(a, s);
},
nextLang: function() {
var e = this.nextLangCode(this.lang_code);
this.setLang(e);
},
stateHeroPos: null,
stateHeroDirection: T.UP,
stateSceneName: "",
getStateHeroPos: function() {
var e = this.stateHeroPos;
this.stateHeroPos = null;
return e;
},
getStateHeroDirection: function() {
return this.stateHeroDirection;
},
getStateSceneName: function() {
var e = this.stateSceneName;
this.stateSceneName = "";
"" == e && (e = "Map0Scene");
return e;
},
settingState: function(e, t) {
this.stateHeroPos = e;
this.stateHeroDirection = t;
},
captureState: function() {
if (this.scene) {
this.stateHeroPos = this.scene.hero.node.getPosition();
this.stateHeroDirection = this.scene.hero.walker.getDirection();
this.stateSceneName = cc.director.getScene().name;
}
},
setScene: function(e, t) {
this.scene = e;
this.stateSceneName = cc.director.getScene().name;
t && i.saveString("stateSceneName", this.stateSceneName);
},
loadState: function() {
this.stateSceneName = i.loadString("stateSceneName", "");
},
getHeroSpeed: function() {
return this.dungeon.getStatusSpeed().getStatus();
},
flagPressed: !0,
IsNotPress: function() {
if (1 == this.flagPressed) return !0;
this.flagPressed = !0;
return !1;
},
EnablePress: function() {
this.flagPressed = !1;
},
DisablePress: function() {
this.flagPressed = !0;
},
GenerateRandomStr: function(e) {
for (var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", i = t.length, a = "", s = 0; s < e; s++) a += t.charAt(Math.floor(Math.random() * i));
return a;
},
flagInitialized: !1,
finishCallbackTarget: null,
finishCallbackFunc: null,
initGame: function(e, t) {
if (!this.flagInitialized) {
this.finishCallbackTarget = e;
this.finishCallbackFunc = t;
this.initLanguage();
this.loadLocalizeData(this.initGame_1);
}
},
initGame_1: function(e, t) {
I.parseLocalizedData(e, t);
I.initGame_2();
},
initGame_2: function() {
this.init();
this.load();
if (0 == i.loadBoolean("firstInitialize", !1)) {
this.initOnce();
i.saveBoolean("firstInitialize", !0);
}
this.decideBanner();
this.flagInitialized = !0;
if (this.finishCallbackTarget && this.finishCallbackFunc) {
this.finishCallbackTarget.node.runAction(cc.callFunc(this.finishCallbackFunc, this.finishCallbackTarget));
this.finishCallbackTarget = null;
this.finishCallbackFunc = null;
}
},
initGameDebug: function() {
if (!this.flagInitialized) {
this.initLanguage();
this.loadLocalizeData(this.parseLocalizedData);
this.initGame_2();
}
},
init: function() {
this.sound = new a();
this.sound.init(this.baseKey);
this.playTime = new k();
this.playTime.init(this.baseKey);
this.coin = new n();
this.coin.init(this.baseKey, "coin", 0, 99999999);
var t = e("Item");
this.item = new t();
this.item.init(this.baseKey);
this.artifacts[0] = new o();
this.artifacts[0].init(this.baseKey, "Artifact0", 30, 300, "Copper", 5, "MiniBox");
this.artifacts[1] = new o();
this.artifacts[1].init(this.baseKey, "Artifact1", 30, 700, "Silver", 5, "MiniBox1");
this.artifacts[2] = new o();
this.artifacts[2].init(this.baseKey, "Artifact2", 30, 1e3, "Gold", 5, "MiniBox2");
this.artifacts[3] = new o();
this.artifacts[3].init(this.baseKey, "Artifact3", 30, 1500, "Ruby", 5, "MiniBox3");
this.artifacts[4] = new o();
this.artifacts[4].init(this.baseKey, "Artifact4", 30, 2e3, "Diamond", 5, "MiniBox4");
this.bukken = new c();
this.bukken.init(this.baseKey);
this.fishData = new m();
this.fishData.init(this.baseKey);
this.fishingSpotData = new f();
this.fishingSpotData.init(this.baseKey);
this.fishingLevel = new g();
this.fishingLevel.init(this.baseKey, "fishingLevel", 1, 99, 40, 50);
this.questTag = "Quest0";
this.quests.Quest0 = new r();
this.quests.Quest0.init(this.baseKey);
this.quests.Quest1 = new h();
this.quests.Quest1.init(this.baseKey);
this.quests.Quest2 = new u();
this.quests.Quest2.init(this.baseKey);
this.quests.Quest3 = new l();
this.quests.Quest3.init(this.baseKey);
this.quests.Quest4 = new p();
this.quests.Quest4.init(this.baseKey);
this.chestKey = new s();
this.chestKey.init(this.baseKey, "chestKey", 0);
this.rewardCount = new s();
this.rewardCount.init(this.baseKey, "rewardCount", 0);
this.newgameCount = new s();
this.newgameCount.init(this.baseKey, "newgameCount", 0);
this.tutorial = new v();
this.tutorial.init(this.baseKey);
this.warpData = new S();
this.warpData.init(this.baseKey);
this.story = new _();
this.story.init(this.baseKey);
this.resident = new C();
this.resident.init(this.baseKey);
this.purchase = new b();
this.purchase.init(this.baseKey);
this.pioneerData = new A();
this.pioneerData.init(this.baseKey);
this.monoris = new R();
this.monoris.init(this.baseKey);
this.jonathan = new w();
this.jonathan.init(this.baseKey);
var i = e("SavedGames");
this.savedGames = new i();
this.savedGames.init(this.baseKey);
this.dungeon = new y();
this.dungeon.init(this.baseKey);
var d = e("Item2");
this.item2 = new d();
this.item2.init(this.baseKey);
this.item.item2 = this.item2;
this.inAppReview = new x();
this.inAppReview.init(this.baseKey);
var T = e("AppPlatform");
if (!T.isFacebook() && !T.isTikTok()) {
var P = e("Achievement");
this.achievement = new P();
this.achievement.init(this.baseKey);
}
var L = e("Explorer");
this.explorer = new L();
this.explorer.init(this.baseKey);
cc.game.off(cc.game.EVENT_HIDE, I.background, this);
cc.game.on(cc.game.EVENT_HIDE, I.background, this);
cc.game.off(cc.game.EVENT_SHOW, I.foreground, this);
cc.game.on(cc.game.EVENT_SHOW, I.foreground, this);
},
initOnce: function() {},
load: function() {
this.flagTutorial = i.loadBoolean("flagTutorial", !1);
this.bannerType = i.loadNumber("bannerType", 0);
this.flagReadonEnding = i.loadBoolean("flagReadonEnding", !1);
this.flagTrueEnd = i.loadBoolean("flagTrueEnd", !1);
this.sound.loadAllData();
this.playTime.loadAllData();
this.coin.loadAllData();
this.item.loadAllData();
for (var e = 0; e < this.artifacts.length; e++) this.artifacts[e].loadAllData();
this.bukken.loadAllData();
this.fishData.loadAllData();
this.fishingSpotData.loadAllData();
this.fishingLevel.loadAllData();
for (var t in this.quests) this.quests[t].loadAllData();
this.chestKey.loadAllData();
this.rewardCount.loadAllData();
this.newgameCount.loadAllData();
this.toolLv = i.loadNumber("toolLv", d.STONE);
this.tutorial.loadAllData();
this.warpData.loadAllData();
this.story.loadAllData();
this.resident.loadAllData();
this.purchase.loadAllData();
this.pioneerData.loadAllData();
this.monoris.loadAllData();
this.jonathan.loadAllData();
this.savedGames.loadAllData();
this.dungeon.loadAllData();
this.item2.loadAllData();
this.achievement && this.achievement.loadAllData();
this.explorer.loadAllData();
this.loadState();
if (this.debug) {
this.coin.setValue(0);
for (var a in this.item.itemData) {
this.item.setNum(a, 0, 0);
this.item.setNum(a, 1, 0);
}
this.item.setNum("MiniBox", 0, 10);
this.item.setNum("MiniBox1", 0, 10);
this.item.setNum("MiniBox2", 0, 10);
this.item.setNum("MiniBox3", 0, 10);
this.item.setNum("MiniBox4", 0, 10);
for (var s in this.item2.itemData) this.item2.setNum(s, 999);
for (var n = 0; n < this.artifacts[0].getMax() - 1; n++) this.artifacts[0].doHave(n);
for (var o = 0; o < this.artifacts[1].getMax() - 1; o++) this.artifacts[1].doHave(o);
for (var c = 0; c < this.artifacts[2].getMax() - 1; c++) this.artifacts[2].doHave(c);
for (var r = 0; r < this.artifacts[3].getMax() - 1; r++) this.artifacts[3].doHave(r);
for (var h = 0; h < this.artifacts[4].getMax() - 1; h++) this.artifacts[4].doHave(h);
}
},
newgame: function() {
this.coin.reset();
this.item.newgame();
this.bukken.newgame();
this.fishingSpotData.newgame();
for (var e in this.quests) this.quests[e].newgame();
this.warpData.newgame();
this.story.newgame();
this.resident.newgame();
this.pioneerData.newgame();
this.dungeon.newgame();
this.item2.newgame();
this.explorer.newgame();
i.saveBoolean("newgame.TutorialScene", !0);
i.saveBoolean("newgame.Map0Scene", !0);
i.saveBoolean("newgame.Map1Scene", !0);
i.saveBoolean("newgame.Map2-0Scene", !0);
i.saveBoolean("newgame.Map2-1Scene", !0);
i.saveBoolean("newgame.Map3-0Scene", !0);
i.saveBoolean("newgame.Map3-1Scene", !0);
i.saveBoolean("newgame.Map4-0Scene", !0);
i.saveBoolean("newgame.Map4-1Scene", !0);
i.saveBoolean("newgame.BaseCamp0Scene", !0);
i.saveBoolean("newgame.BaseCamp1Scene", !0);
this.flagTutorial = !1;
i.saveBoolean("flagTutorial", !1);
this.stateSceneName = "";
i.saveString("stateSceneName", "");
this.newgameCount && I.newgameCount.incCount();
},
newgameDebug: function() {
this.newgame();
cc.game.restart();
},
resetAll: function() {
this.coin.reset();
this.item.reset();
for (var e = 0; e < this.artifacts.length; e++) this.artifacts[e].reset();
this.bukken.reset();
this.fishData.reset();
this.fishingSpotData.reset();
this.fishingLevel.reset();
for (var t in this.quests) this.quests[t].reset();
this.newgameCount.reset();
this.setToolLv(d.STONE);
this.tutorial.reset();
this.warpData.reset();
this.story.reset();
this.resident.reset();
this.pioneerData.reset();
this.monoris.reset();
this.jonathan.reset();
this.dungeon.reset();
this.item2.reset();
this.achievement && this.achievement.reset();
this.explorer.reset();
i.saveBoolean("newgame.TutorialScene", !0);
i.saveBoolean("newgame.Map0Scene", !0);
i.saveBoolean("newgame.Map1Scene", !0);
i.saveBoolean("newgame.Map2-0Scene", !0);
i.saveBoolean("newgame.Map2-1Scene", !0);
i.saveBoolean("newgame.Map3-0Scene", !0);
i.saveBoolean("newgame.Map3-1Scene", !0);
i.saveBoolean("newgame.Map4-0Scene", !0);
i.saveBoolean("newgame.Map4-1Scene", !0);
i.saveBoolean("newgame.BaseCamp0Scene", !0);
i.saveBoolean("newgame.BaseCamp1Scene", !0);
this.flagTutorial = !1;
i.saveBoolean("flagTutorial", !1);
this.stateSceneName = "";
i.saveString("stateSceneName", "");
this.flagReadonEnding = !1;
i.saveBoolean("flagReadonEnding", !1);
this.flagTrueEnd = !1;
i.saveBoolean("flagTrueEnd", !1);
},
resetDebug: function() {
cc.sys.localStorage.clear();
cc.game.restart();
this.flagInitialized = !1;
},
flagPause: !1,
pause: function() {
if (!this.flagPause) {
this.flagPause = !0;
this.scene && this.scene.PauseInput();
this.sound && this.sound.pauseAll();
cc.game.pause();
}
},
resume: function() {
if (this.flagPause) {
this.flagPause = !1;
cc.game.resume();
this.sound && this.sound.resumeAll();
this.scene && this.scene.ResumeInput();
}
},
background: function() {
this.saveLater();
this.playTime && this.playTime.saveTime();
this.savedGames && this.savedGames.pushData();
this.explorer && this.explorer.background();
this.pause();
},
foreground: function() {
this.resume();
this.savedGames && this.savedGames.checkData();
this.playTime && this.playTime.startTime();
this.explorer && this.explorer.foreground();
},
end: function() {
this.saveLater();
cc.game.end();
},
saveLater: function() {
this.coin.saveLater();
this.item.saveLater();
}
};
t.exports = I;
cc._RF.pop();
}, {
Achievement: "Achievement",
AppPlatform: "AppPlatform",
Artifact: "Artifact",
Bukken: "Bukken",
Counter: "Counter",
Currency: "Currency",
Direction: "Direction",
Dungeon: "Dungeon",
Explorer: "Explorer",
FishData: "FishData",
FishingSpotData: "FishingSpotData",
InAppReview: "InAppReview",
Item: "Item",
Item2: "Item2",
ItemRank: "ItemRank",
Jonathan: "Jonathan",
Level: "Level",
Monoris: "Monoris",
PioneerData: "PioneerData",
PlayTime: "PlayTime",
Purchase: "Purchase",
QuestMap0: "QuestMap0",
QuestMap1: "QuestMap1",
QuestMap2: "QuestMap2",
QuestMap3: "QuestMap3",
QuestMap4: "QuestMap4",
Resident: "Resident",
SaveData: "SaveData",
SavedGames: "SavedGames",
Sound: "Sound",
Story: "Story",
ToolLevel: "ToolLevel",
Tutorial: "Tutorial",
WarpData: "WarpData"
} ],
Gate: [ function(e, t) {
"use strict";
cc._RF.push(t, "1d091iGettLjroCO708z2SR", "Gate");
var i = e("Gimmick"), a = e("CommandType"), s = e("Game");
cc.Class({
extends: i,
properties: {
closeSprite: cc.Node,
openSprite: {
type: cc.Node,
default: null
},
messages: [ cc.String ]
},
onLoad: function() {
this._super();
this.mesIdx = 0;
this.stateArea1Gate = 0;
},
changeLock: function(e) {
this.closeSprite.active = e;
this.openSprite && (this.openSprite.active = !e);
var t = this.node.getComponent(cc.RigidBody);
t && (t.active = e);
},
getAvailableCommand: function() {
if (this.IsLock() && this.messages.length > 0) return a.EVENT;
if (!this.IsLock() && this.unlock && this.unlock.IsUnlock() && "65LxnHfb3L9iRAc6Wxjt" === this.unlock.saveKey && 0 === this.stateArea1Gate) {
this.stateArea1Gate = 1;
return a.EVENT;
}
return a.NONE;
},
execCommand: function(e) {
if (e == a.EVENT) if (1 === this.stateArea1Gate) {
s.achievement && s.achievement.Unlock("try_unlock");
this.stateArea1Gate = 2;
} else {
s.scene.hero.ShowSerif(s.getLocalizedStr(this.messages[this.mesIdx++], ""));
this.mesIdx >= this.messages.length && (this.mesIdx = 0);
}
}
});
cc._RF.pop();
}, {
CommandType: "CommandType",
Game: "Game",
Gimmick: "Gimmick"
} ],
GaugeBar: [ function(e, t) {
"use strict";
cc._RF.push(t, "509afHoT/RNT5aknQchQ+H4", "GaugeBar");
cc.Class({
extends: cc.Component,
properties: {
nakami: cc.Node
},
onLoad: function() {
this.nakamiWidth = this.node.width - 2;
},
SetScale: function(e) {
this.nakami.width = this.nakamiWidth * e;
},
SetVal: function(e, t) {
this.SetScale(e / t);
}
});
cc._RF.pop();
}, {} ],
Gimmick: [ function(e, t) {
"use strict";
cc._RF.push(t, "6075e21zq5Hp46FekKjGQsc", "Gimmick");
var i = e("Game"), a = e("Object"), s = e("CommandType");
cc.Class({
extends: a,
properties: {},
onLoad: function() {
this._super();
this.flagLock = !1;
this.unlock = this.node.getComponent("Unlock");
var e = Math.round(this.node.x), t = Math.round(this.node.y);
this.savekey = this.node.parent.name + "." + this.modelName + "." + e + "x" + t;
},
start: function() {
this._super();
},
onCollisionEnter: function(e, t) {
if (0 == t.tag && "Hero" == e.node.group && 333 == e.tag) {
var i = e.node.getComponent("Hero");
i && i.AddGimmickList(this);
this.collisionEnter(i, t);
}
},
onCollisionExit: function(e, t) {
if ("Hero" == e.node.group && 333 == e.tag) {
var i = e.node.getComponent("Hero");
i && i.RemoveGimmickList(this);
this.collisionExit(i, t);
}
},
IsLock: function() {
return this.flagLock;
},
SetLock: function(e) {
this.flagLock = e;
this.changeLock(e);
},
GetCommand: function() {
return this.flagLock && this.unlock && 0 == this.unlock.IsUnlock() ? s.EVENT : this.getAvailableCommand();
},
Command: function(e) {
this.flagLock && e == s.EVENT && this.unlock && 0 == this.unlock.IsUnlock() ? i.scene.manager.ShowUnlockPopup(this.unlock) : this.execCommand(e);
},
changeLock: function() {},
getAvailableCommand: function() {
return s.NONE;
},
execCommand: function() {},
collisionEnter: function() {},
collisionExit: function() {}
});
cc._RF.pop();
}, {
CommandType: "CommandType",
Game: "Game",
Object: "Object"
} ],
Hero: [ function(e, t) {
"use strict";
cc._RF.push(t, "2d4dfpfzkxHwr27rQ+sLorM", "Hero");
var i = e("Game"), a = e("Object"), s = e("CommandType"), n = e("Direction"), o = e("CheckMe"), c = e("CheckType"), r = cc.Enum({
IDLE: 0,
WALK: 1,
ATTACK: 2,
AXE: 3,
PICKAXE: 4,
HOE: 5,
WATER: 6,
RIDE: 7,
DAMAGE: 8
}), h = [ [ "Char1_idle_up", "Char1_walk_up", "Char1_atk_up", "Char1_axe_up", "Char1_pickaxe_up", "Char1_hoe_up", "Char1_water_up", "Char1_idle_up", "Char1_idle_up" ], [ "Char1_idle_right", "Char1_walk_right", "Char1_atk_right", "Char1_axe_right", "Char1_pickaxe_right", "Char1_hoe_right", "Char1_water_right", "Char1_idle_right", "Char1_idle_right" ], [ "Char1_idle_down", "Char1_walk_down", "Char1_atk_down", "Char1_axe_down", "Char1_pickaxe_down", "Char1_hoe_down", "Char1_water_down", "Char1_idle_down", "Char1_idle_down" ], [ "Char1_idle_left", "Char1_walk_left", "Char1_atk_left", "Char1_axe_left", "Char1_pickaxe_left", "Char1_hoe_left", "Char1_water_left", "Char1_idle_left", "Char1_idle_left" ] ], u = [ {
spd: .1,
r: 180,
g: 180,
b: 210
}, {
spd: .12,
r: 230,
g: 120,
b: 50
}, {
spd: .14,
r: 240,
g: 240,
b: 255
}, {
spd: .16,
r: 255,
g: 210,
b: 0
}, {
spd: .18,
r: 255,
g: 74,
b: 74
}, {
spd: .2,
r: 50,
g: 255,
b: 200
} ];
cc.Class({
extends: a,
properties: {
nodeTool: cc.Node,
nodeWeapon: cc.Node,
checkMe: {
type: o,
default: null
},
seDamage: {
type: cc.AudioClip,
default: null
}
},
onLoad: function() {
this._super();
this.walker = this.node.getComponent("Walker");
this.state = r.IDLE;
this.commandType = s.NONE;
this.gimmickList = [];
this.targetList = [];
this.targetRes = null;
this.lightCount = 0;
this.balloon = null;
this.zzz = null;
this.flagAutoMove = !1;
this.dstPoint = cc.v2(0, 0);
this.targetVehicle = null;
this.needStaminaTool = 10;
this.needStaminaAtk = 10;
this.flagNoStamina = !1;
var e = i.getHeroSpeed();
this.walker.setSpeed(e);
this.atk = i.dungeon.getAttack();
this.flagDamage = !0;
this.hitBackPower = 50;
this.hitBackCount = 0;
this.hitBackVec = cc.v2();
if (this.nodeWeapon) {
var t = i.dungeon.getSwordEquipColor();
this.nodeWeapon.color = new cc.Color(t.r, t.g, t.b);
}
this.animation = this.node.getComponent(cc.Animation);
this.animation.on("finished", function() {
this.isAfterCommand(this.commandType) && this.excuteCommand();
this.change_state(r.IDLE);
}, this);
var a = i.getStateHeroPos();
if (a) {
var n = i.getStateHeroDirection();
this.RestorePos(a, n);
}
this.config_tools();
},
update: function() {
if (this.flagAutoMove && cc.Vec2.distance(this.node.position, this.dstPoint) < 3) {
this.flagAutoMove = !1;
this.stopAndAction();
}
if (this.state == r.RIDE) this.targetVehicle.updateVehicle(this); else if (this.state == r.DAMAGE && this.hitBackCount > 0) {
this.walker.move(this.hitBackVec, this.hitBackPower);
this.hitBackCount--;
this.hitBackCount <= 0 && this.damage_finish();
}
},
onBeginContact: function() {
if (this.flagAutoMove) {
this.flagAutoMove = !1;
this.stopAndAction();
}
},
change_state: function(e) {
if (this.state == e) return !1;
this.state = e;
this.change_anime();
return !0;
},
change_anime: function() {
var e = h[this.walker.direction][this.state];
this.animation.play(e);
},
stop_anime: function() {
this.animation.stop();
},
config_tools: function() {
var e = i.getToolLv();
this.nodeTool.color = new cc.Color(u[e].r, u[e].g, u[e].b);
var t = this.animation.getClips();
if (t) for (var a = 0; a < t.length; a++) {
var s = t[a];
if (!s) return;
(s.name.match(/axe/) || s.name.match(/hoe/) || s.name.match(/water/)) && (s.speed = u[e].spd);
}
},
isMove: function() {
return this.state == r.WALK;
},
move: function(e, t) {
if (this.state == r.IDLE) {
this.change_state(r.WALK);
this.HideSerif();
}
this.state == r.WALK ? this.walker.move(e, t) && this.change_anime() : this.state == r.RIDE && this.walker.move(e, t) && this.change_anime();
},
movePoint: function(e) {
this.flagAutoMove = !0;
this.dstPoint = e;
var t = e.sub(this.node.position).normalize();
this.move(t, 1);
},
stop: function() {
this.walker.stop();
},
stopAndAction: function() {
this.stop();
this.command();
},
stopAndIdle: function() {
this.stop();
this.state != r.RIDE && this.change_state(r.IDLE);
},
AddGimmickList: function(e) {
this.gimmickList.indexOf(e) < 0 && this.gimmickList.push(e);
},
RemoveGimmickList: function(e) {
var t = this.gimmickList.indexOf(e);
t >= 0 && this.gimmickList.splice(t, 1);
},
isSingleCommand: function(e) {
return e == s.AXE || e == s.PICKAXE || e == s.HOE || e == s.SEED || e == s.WATER || e == s.EVENT;
},
isAfterCommand: function(e) {
return e == s.AXE || e == s.PICKAXE || e == s.HOE || e == s.WATER;
},
isToolCommand: function(e) {
return e == s.AXE || e == s.PICKAXE || e == s.HOE || e == s.WATER || e == s.ATTACK;
},
isSupportMultiCommand: function(e) {
return e == s.AXE || e == s.PICKAXE || e == s.HOE || e == s.SEED || e == s.WATER;
},
command: function() {
if (this.state != r.IDLE && this.state != r.WALK) return !1;
var e = i.dungeon.isFireSkill("MultiAction");
this.commandType = s.NONE;
this.targetList = [];
this.targetRes = null;
for (var t = s.MAX, a = [], n = 0; n < this.gimmickList.length; n++) {
var o = this.gimmickList[n];
if (o) {
var c = o.GetCommand();
if (c != s.NONE) {
a.push({
res: o,
cmd: c
});
t > c && (t = c);
}
}
}
this.commandType = t;
if (!(a.length > 0)) {
this.change_state(r.IDLE);
return !1;
}
for (var h = 0; h < a.length; h++) {
var u = a[h];
if (u.cmd == this.commandType) {
this.targetList.push(u.res);
null == this.targetRes && (this.targetRes = u.res);
if (e && this.isSupportMultiCommand(this.commandType)) continue;
if (this.isSingleCommand(this.commandType)) break;
}
}
if (1 == this.isToolCommand(this.commandType) && null != this.targetRes) {
var l = cc.v2(0, 0), p = this.targetRes.node.getComponent(cc.BoxCollider);
p && (l = p.offset);
var d = this.targetRes.node.position.add(l).sub(this.node.position);
this.walker.turnTarget(d);
this.commandType == s.ATTACK && this.targetRes.SetHitBack(d.normalize());
}
if (i.dungeon.isUseStamina() && this.isToolCommand(this.commandType)) {
var m = this.commandType == s.ATTACK ? this.needStaminaAtk : this.needStaminaTool;
this.flagNoStamina = i.dungeon.getStatusStamina().consume(m);
i.scene.ui.RefreshStamina();
}
switch (this.commandType) {
case s.ATTACK:
this.change_state(r.ATTACK);
break;

case s.AXE:
this.change_state(r.AXE);
break;

case s.PICKAXE:
this.change_state(r.PICKAXE);
break;

case s.HOE:
this.change_state(r.HOE);
break;

case s.SEED:
this.change_state(r.IDLE);
break;

case s.WATER:
this.change_state(r.WATER);
break;

case s.COLLECT:
case s.EVENT:
this.change_state(r.IDLE);
}
0 == this.isAfterCommand(this.commandType) && this.excuteCommand();
return !0;
},
excuteCommand: function() {
for (var e = 0; e < this.targetList.length; e++) {
var t = this.targetList[e];
t && t.Command(this.commandType);
}
this.targetList = [];
if (this.flagNoStamina) {
this.flagNoStamina = !1;
this.Faint();
i.dungeon.leaveDungeon();
}
},
ShowSerif: function(e) {
this.HideSerif();
this.balloon = i.scene.manager.ShowBalloon(i.scene.camera.node, cc.v2(-12, 17), e);
},
HideSerif: function() {
if (this.balloon) {
this.balloon.hide();
this.balloon = null;
}
},
LightOn: function() {
this.lightCount++;
this.node.opacity = 80;
this.targetVehicle && (this.targetVehicle.node.opacity = 80);
},
LightOff: function() {
this.lightCount--;
if (this.lightCount <= 0) {
this.node.opacity = 255;
this.targetVehicle && (this.targetVehicle.node.opacity = 255);
}
},
eventCollider: function(e) {
for (var t = this.node.getComponents(cc.BoxCollider), i = 0; i < t.length; i++) {
var a = t[i];
if (333 == a.tag) {
a.enabled = e;
return;
}
}
},
EnableCollider: function() {
this.eventCollider(!0);
},
DisableCollider: function() {
this.eventCollider(!1);
},
EnablePhysics: function() {
var e = this.node.getComponent(cc.RigidBody);
e && (e.active = !0);
},
DisablePhysics: function() {
var e = this.node.getComponent(cc.RigidBody);
e && (e.active = !1);
},
ChangeDir: function(e) {
this.walker.change_dir(e);
this.change_anime();
},
RestorePos: function(e, t) {
this.node.position = e;
this.walker.change_dir(t) && this.change_anime();
},
WarpIn: function(e) {
this.DisablePhysics();
this.node.runAction(cc.spawn(cc.scaleTo(.6, 0), cc.moveTo(.6, e)).easing(cc.easeCubicActionIn()));
},
RenewTools: function() {
this.config_tools();
},
RideOnImmediate: function(e) {
this.targetVehicle = e;
this.change_state(r.RIDE);
},
RideOn: function(e) {
if (this.state == r.WALK && null == this.targetVehicle) {
this.targetVehicle = e;
i.scene.PauseInput();
this.DisablePhysics();
var t = e.GetRidePos();
this.node.runAction(cc.sequence(cc.moveTo(.2, t), cc.callFunc(this.ride_on_2, this)));
}
},
ride_on_2: function() {
this.EnablePhysics();
i.scene.ResumeInput();
this.change_state(r.RIDE);
},
RideOff: function(e) {
if (this.state == r.RIDE && null != this.targetVehicle && this.walker.isMoving()) {
i.scene.PauseInput();
this.DisablePhysics();
this.change_state(r.IDLE);
var t = e.GetRideOffPos();
this.node.runAction(cc.sequence(cc.moveTo(.2, t), cc.callFunc(this.ride_off_2, this)));
var a = e.GetVehiclePos();
this.targetVehicle.node.runAction(cc.moveTo(.2, a));
this.targetVehicle = null;
}
},
ride_off_2: function() {
this.EnablePhysics();
i.scene.ResumeInput();
this.change_state(r.IDLE);
},
GetAtk: function() {
return this.atk;
},
EnableDamage: function() {
this.flagDamage = !0;
},
DisableDamage: function() {
this.flagDamage = !1;
},
Damage: function(e, t) {
if (this.flagDamage) {
var a = i.dungeon.calcDamageVal(0, e);
i.dungeon.getStatusLife().consume(a);
i.scene.ui.RefreshLife();
i.scene.PauseInput();
this.change_state(r.DAMAGE);
this.start_hitback(t, 50);
this.seDamage && i.sound.playSE(this.seDamage);
}
},
damage_finish: function() {
this.stop();
if (i.dungeon.getStatusLife().isEmpty()) {
this.Dead();
i.dungeon.abortDungeon();
} else {
i.scene.ResumeInput();
this.change_state(r.IDLE);
}
},
start_hitback: function(e, t) {
this.hitBackVec = e;
this.hitBackPower = 10 * t / this.walker.getSpeed();
this.hitBackCount = 5;
},
Dead: function() {
this.disable_input();
i.scene.CameraModeFree();
this.checkMe && this.checkMe.ShowWithIcon(c.DEAD);
this.stop_anime();
this.node.runAction(cc.sequence(cc.delayTime(2), cc.callFunc(this.hide_checkme, this), cc.spawn(cc.jumpBy(1.2, cc.v2(0, 0), 128, 1), cc.rotateTo(1.2, 90)), cc.jumpBy(.6, cc.v2(0, 0), 64, 1), cc.jumpBy(.3, cc.v2(0, 0), 32, 1)));
},
Faint: function() {
this.disable_input();
i.scene.CameraModeFree();
this.checkMe && this.checkMe.ShowWithIcon(c.TIRED);
this.ChangeDir(n.RIGHT);
this.node.runAction(cc.sequence(cc.delayTime(2), cc.callFunc(this.hide_checkme, this), cc.spawn(cc.jumpBy(.8, cc.v2(0, 0), 32, 1), cc.rotateTo(.8, -90)), cc.jumpBy(.4, cc.v2(0, 0), 16, 1), cc.callFunc(this.show_zzz, this)));
},
Revive: function() {
this.hide_zzz();
this.ChangeDir(n.DOWN);
this.node.runAction(cc.sequence(cc.spawn(cc.jumpBy(.8, cc.v2(0, 0), 48, 1), cc.rotateTo(.8, 0)), cc.jumpBy(.4, cc.v2(0, 0), 24, 1), cc.callFunc(this.revive_finish, this), cc.delayTime(3), cc.callFunc(this.EnableDamage, this)));
},
revive_finish: function() {
i.scene.CameraModeTracking();
this.EnableCollider();
this.EnablePhysics();
i.scene.ResumeInput();
},
disable_input: function() {
i.scene.PauseInput();
this.DisableDamage();
this.DisablePhysics();
this.DisableCollider();
},
hide_checkme: function() {
this.checkMe && this.checkMe.Hide();
},
show_zzz: function() {
i.dungeon.dungeonScene && (this.zzz = i.dungeon.dungeonScene.dungeonManager.showZzz());
},
hide_zzz: function() {
if (this.zzz) {
this.zzz.destroy();
this.zzz = null;
}
}
});
cc._RF.pop();
}, {
CheckMe: "CheckMe",
CheckType: "CheckType",
CommandType: "CommandType",
Direction: "Direction",
Game: "Game",
Object: "Object"
} ],
HevenScene: [ function(e, t) {
"use strict";
cc._RF.push(t, "918243CIxxAa7/ecWBGQvlY", "HevenScene");
var i = e("HouseScene"), a = e("Game");
cc.Class({
extends: i,
properties: {
residentA: cc.Node,
residentB: cc.Node,
residentC: cc.Node,
residentD: cc.Node,
residentE: cc.Node,
residentF: cc.Node,
residentG: cc.Node,
residentH: cc.Node,
residentI: cc.Node,
door: cc.Node,
trapScene: cc.Node
},
onLoad: function() {
this._super();
},
start: function() {
this._super();
this.residentA.active = a.resident.IsUnlock("Resident_A");
this.residentB.active = a.resident.IsUnlock("Resident_B");
this.residentC.active = a.resident.IsUnlock("Resident_C");
this.residentD.active = a.resident.IsUnlock("Resident_D");
this.residentE.active = a.resident.IsUnlock("Resident_E");
this.residentF.active = a.resident.IsUnlock("Resident_F");
this.residentG.active = a.resident.IsUnlock("Resident_G");
this.residentH.active = a.resident.IsUnlock("Resident_H");
this.residentI.active = a.resident.IsUnlock("Resident_I");
var e = a.monoris.CalcAllRate() > 1;
this.door.active = !e;
this.trapScene.active = e;
}
});
cc._RF.pop();
}, {
Game: "Game",
HouseScene: "HouseScene"
} ],
HideBannerAds: [ function(e, t) {
"use strict";
cc._RF.push(t, "ee0f2tQga1DkL9vYtDNdj3v", "HideBannerAds");
var i = e("Game"), a = e("AppPlatform");
cc.Class({
extends: cc.Component,
onLoad: function() {
this.hideAds();
},
hideAds: function() {
var e = i.getBannerTag();
a.HideBannerAds(e);
}
});
cc._RF.pop();
}, {
AppPlatform: "AppPlatform",
Game: "Game"
} ],
HousePopup: [ function(e, t) {
"use strict";
cc._RF.push(t, "746ffNPo0pPIrxwN8kR08Y7", "HousePopup");
var i = e("Popup"), a = e("Game"), s = e("CoinLabel"), n = e("ItemInfo"), o = null;
cc.Class({
extends: i,
properties: {
titleLabel: cc.Label,
coinLabel: s,
prefabItemInfo: cc.Prefab,
buttonOk: cc.Button,
popupPurchase: cc.Prefab
},
ctor: function() {
this.bukkenTag = "";
this.house = null;
},
onLoad: function() {
this._super();
this.itemInfos = [];
for (var e = 0; e < 6; e++) {
var t = cc.instantiate(this.prefabItemInfo);
if (t) {
this.window.addChild(t);
t.setPosition(cc.v2(18 * e - 45, -1));
t.color = new cc.Color(245, 189, 126);
var i = t.getComponent(n);
i && (this.itemInfos[e] = i);
}
}
},
Ok: function() {
this.house && this.house.Buy();
this.Hide();
},
PressHelp: function() {
this.IsNotAvailableButton() || a.tutorial.ShowExplainPopup("house");
},
PressPurchase: function() {
if (!this.IsNotAvailableButton() && this.popupPurchase) {
var e = cc.instantiate(this.popupPurchase);
if (e) {
a.scene.camera.node.addChild(e);
var t = e.getComponent("PurchaseBukkenPopup");
if (t) {
o = this;
t.SetCallbackHidePopup(function() {
o.CallbackHidePurchasePopup();
});
t.ShowWithBukkenTag(this.bukkenTag);
}
}
}
},
SetInfo: function(e) {
var t = a.bukken.GetData(e);
if (null != t) {
var i = a.bukken.GetCheckResult(e), s = a.getLocalizedStr("house_title_all");
this.titleLabel.string = s.replace("XXXX", a.getLocalizedStr(t.name));
this.coinLabel.SetCoin(t.coin);
this.coinLabel.SetColor(i.coin ? new cc.Color(255, 255, 255) : new cc.Color(240, 0, 0));
for (var n = 0; n < t.items.length; n++) {
this.itemInfos[n].node.active = !1;
var o = t.items[n];
if (o && "" != o.tag) {
var c = i.items[n];
this.itemInfos[n].node.active = !0;
this.itemInfos[n].SetTag(o.tag);
this.itemInfos[n].SetRank(o.rank);
this.itemInfos[n].SetNum(o.val);
this.itemInfos[n].SetNumColor(c ? new cc.Color(255, 255, 255) : new cc.Color(240, 0, 0));
}
}
this.buttonOk.interactable = i.all;
this.flagUseOk = i.all;
}
},
ShowWithTag: function(e, t) {
if (this.Show()) {
this.bukkenTag = e;
this.house = t;
this.clear_info();
this.SetInfo(e);
}
},
clear_info: function() {
this.titleLabel.string = "ERROR";
this.coinLabel.SetCoin(0);
for (var e = 0; e < this.itemInfos.length; e++) this.itemInfos[e].Reset();
this.buttonOk.interactable = !1;
this.flagUseOk = !1;
},
CallbackHidePurchasePopup: function() {
if (a.purchase.IsSkipBukken(this.bukkenTag)) {
this.house && this.house.BuyByPurchase();
this.Cancel();
}
}
});
cc._RF.pop();
}, {
CoinLabel: "CoinLabel",
Game: "Game",
ItemInfo: "ItemInfo",
Popup: "Popup"
} ],
HouseScene: [ function(e, t) {
"use strict";
cc._RF.push(t, "2e843kyoFdC6aLWg4qvXQf9", "HouseScene");
var i = e("BaseScene");
cc.Class({
extends: i,
properties: {},
onLoad: function() {
this._super();
this.CameraModeFree();
}
});
cc._RF.pop();
}, {
BaseScene: "BaseScene"
} ],
House: [ function(e, t) {
"use strict";
cc._RF.push(t, "89784aD3OlP5r9mZXL2gmai", "House");
var i = e("Gimmick"), a = e("CommandType"), s = e("Game"), n = e("SaveData"), o = e("RemoteLock"), c = e("ChestBonus"), r = cc.Enum({
LOCK: 0,
SALE: 1,
SOLDOUT: 2
});
cc.Class({
extends: i,
properties: {
bukkenTag: "",
serifLock: "",
serifSold: "",
remoteLock: {
type: o,
default: null
},
trapScene: {
type: cc.Node,
default: null
},
chestBonus: {
type: c,
default: null
}
},
onLoad: function() {
this._super();
this.state = n.loadNumber(this.savekey + ".state", r.LOCK);
if (this.state == r.LOCK && s.bukken.IsSoldout(this.bukkenTag)) {
this.state = r.SOLDOUT;
n.saveNumber(this.savekey + ".state", this.state);
}
this.refresh();
},
getAvailableCommand: function() {
return a.EVENT;
},
execCommand: function(e) {
if (e == a.EVENT) if (this.state == r.LOCK) s.scene.hero.ShowSerif(s.getLocalizedStr(this.serifLock)); else if (this.state == r.SALE) s.purchase.IsSkipBukken(this.bukkenTag) ? this.BuyByPurchase() : s.scene.manager.ShowHousePopup(this.bukkenTag, this); else if (this.state == r.SOLDOUT) {
if (s.achievement && s.bukken.IsSoldout(this.bukkenTag)) {
var t = s.achievement.HouseTagToAchievementTag(this.bukkenTag);
s.achievement.Unlock(t);
}
this.remoteLock && this.remoteLock.IsLock() && this.remoteLock.ChangeLock(!1);
s.scene.hero.ShowSerif(s.getLocalizedStr(this.serifSold));
}
},
refresh: function() {
this.node.opacity = this.state == r.SALE ? 127 : 255;
this.trapScene.active = this.state == r.SOLDOUT;
},
IsLock: function() {
return this.state == r.LOCK;
},
Unlock: function() {
if (this.IsLock()) {
this.state = r.SALE;
n.saveNumber(this.savekey + ".state", this.state);
this.refresh();
}
},
Sold: function() {
this.state = r.SOLDOUT;
n.saveNumber(this.savekey + ".state", this.state);
if (s.achievement) {
var e = s.achievement.HouseTagToAchievementTag(this.bukkenTag);
s.achievement.Unlock(e);
}
this.remoteLock && this.remoteLock.OpenLock();
this.refresh();
},
Buy: function() {
if (s.bukken.ExecBukken(this.bukkenTag)) {
s.scene.ui.RefreshCoin();
this.Sold();
}
},
BuyByPurchase: function() {
if (s.bukken.SkipBukken(this.bukkenTag)) {
this.Sold();
this.chestBonus && this.node.runAction(cc.sequence(cc.delayTime(.1), cc.callFunc(this.appear_bonus_chest, this)));
}
},
newgame: function() {
this.state = r.LOCK;
n.saveNumber(this.savekey + ".state", r.LOCK);
this.remoteLock && this.remoteLock.ChangeLock(!0);
this.refresh();
},
appear_bonus_chest: function() {
this.chestBonus && this.chestBonus.AppearChest();
}
});
cc._RF.pop();
}, {
ChestBonus: "ChestBonus",
CommandType: "CommandType",
Game: "Game",
Gimmick: "Gimmick",
RemoteLock: "RemoteLock",
SaveData: "SaveData"
} ],
HpGauge: [ function(e, t) {
"use strict";
cc._RF.push(t, "c2d8aSZVeVLQ6nf2AIVmRs+", "HpGauge");
cc.Class({
extends: cc.Component,
properties: {
nakami: cc.Node,
hpMax: 3
},
onLoad: function() {
this.hp = this.hpMax;
this.nakamiWidth = this.node.width - 2;
this.refresh_nakami();
this.node.opacity = 0;
this.node.active = !1;
},
refresh_nakami: function() {
this.nakami.width = this.nakamiWidth * (this.hp / this.hpMax);
},
show: function() {
this.node.active = !0;
this.node.stopAllActions();
this.node.opacity = 255;
this.node.runAction(cc.sequence(cc.delayTime(1), cc.fadeOut(1), cc.callFunc(this.hide, this)));
},
hide: function() {
this.node.stopAllActions();
this.node.opacity = 0;
this.node.active = !1;
},
getHp: function() {
return this.hp;
},
setHp: function(e) {
this.hp = e;
this.hpMax = e;
this.refresh_nakami();
},
damage: function(e) {
this.hp -= e;
this.hp <= 0 && (this.hp = 0);
this.refresh_nakami();
this.show();
},
isDead: function() {
return this.hp <= 0;
}
});
cc._RF.pop();
}, {} ],
InAppReview: [ function(e, t) {
"use strict";
cc._RF.push(t, "fd5bfjlRkJH2bQUXxz0gkZn", "InAppReview");
var i = e("BaseModel"), a = cc.Class({
extends: i,
init: function(e) {
this._super(e, "InAppReview");
this.reserveTag = "";
this.flagReserve = !1;
this.flagTriggers = [];
},
SetReserve: function(e) {
this.reserveTag = e;
this.flagReserve = !0;
},
IsReserve: function() {
return this.flagReserve;
},
DoReserve: function() {
this.DoTriggered(this.reserveTag);
this.reserveTag = "";
this.flagReserve = !1;
},
IsTriggered: function(e) {
e in this.flagTriggers || (this.flagTriggers[e] = this.loadBoolean(".triggered." + e, !1));
return this.flagTriggers[e];
},
DoTriggered: function(e) {
this.flagTriggers[e] = !0;
this.saveBoolean(".triggered." + e, !0);
}
});
t.exports = a;
cc._RF.pop();
}, {
BaseModel: "BaseModel"
} ],
InteriorRate: [ function(e, t) {
"use strict";
cc._RF.push(t, "09e97ErBuFCKKGPCoJCZHzo", "InteriorRate");
var i = e("TrapSign"), a = e("Unlock"), s = e("Game");
cc.Class({
extends: i,
properties: {
residentTag: "",
residentNode: {
type: cc.Node,
default: null
}
},
onLoad: function() {
this._super();
if (s.resident.IsUnlock(this.residentTag)) {
this.residentNode.active = !0;
this.node.destroy();
} else {
this.unlocks = [];
for (var e = this.node.parent.children, t = 0; t < e.length; t++) {
var i = e[t].getComponent(a);
i && this.unlocks.push(i);
}
if (s.resident.IsNewgame(this.residentTag)) {
cc.log("NEWGAME: Resident:" + this.residentTag);
s.resident.DoNewgame(this.residentTag);
for (var n = 0; n < this.unlocks.length; n++) this.unlocks[n].Lock();
} else {
var o = this.checkRemain();
if (this.residentNode && o <= 0) {
s.resident.DoUnlock(this.residentTag);
this.residentNode.active = !0;
this.node.destroy();
}
}
}
},
checkRemain: function() {
var e = this.unlocks.length;
if (0 == e) return 0;
for (var t = 0, i = 0; i < e; i++) this.unlocks[i].IsUnlock() && t++;
return e - t;
},
showBalloon: function() {
var e = this.checkRemain();
if (this.residentNode && e <= 0) {
s.resident.DoUnlock(this.residentTag);
s.scene.fadeCover.TransitionFade(this.node.parent.name, 2, new cc.Color(255, 255, 255));
} else {
var t = s.getLocalizedStr("interior_rate_all").replace("9999", e);
this.hideBalloon();
this.balloon = s.scene.manager.ShowBalloon(this.node, cc.v2(-12, 15), t, !0);
}
}
});
cc._RF.pop();
}, {
Game: "Game",
TrapSign: "TrapSign",
Unlock: "Unlock"
} ],
Interior: [ function(e, t) {
"use strict";
cc._RF.push(t, "da35ehv26FA+IanVknWXMtS", "Interior");
e("Game");
var i = e("Gimmick"), a = (e("CommandType"), e("Direction"));
cc.Class({
extends: i,
properties: {
massW: 1,
massH: 1,
direction: {
type: a,
default: a.DOWN
}
},
onLoad: function() {
this._super();
},
changeLock: function(e) {
this.node.opacity = e ? 120 : 255;
}
});
cc._RF.pop();
}, {
CommandType: "CommandType",
Direction: "Direction",
Game: "Game",
Gimmick: "Gimmick"
} ],
IntroScene: [ function(e, t) {
"use strict";
cc._RF.push(t, "831691HQZlMjopGzrdoUJ9r", "IntroScene");
var i = e("FadeCover"), a = e("Direction"), s = e("Game");
cc.Class({
extends: cc.Component,
properties: {
labels: [ cc.Label ],
fadeCover: i,
bgm: cc.AudioClip
},
onLoad: function() {
this.page = 0;
this.pageMax = 2;
this.line = 0;
this.lineMax = 3;
},
start: function() {
s.sound.playBGM(this.bgm);
this.node.runAction(cc.sequence(cc.delayTime(.1), cc.callFunc(this.start_intro, this)));
},
start_intro: function() {
this.node.on(cc.Node.EventType.TOUCH_END, function() {
this.touch_end();
}, this);
cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
this.show_page();
},
touch_end: function() {
if (!(this.page >= this.pageMax)) if (this.line >= this.lineMax) {
this.page++;
if (this.page < this.pageMax) {
this.hide_page();
this.show_page();
} else {
cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
s.settingState(cc.v2(0, 0), a.UP);
this.fadeCover.TransitionFadeWhite("TutorialScene", 2);
}
} else this.show_page_immediate();
},
show_page: function() {
if (!(this.page >= this.pageMax)) {
this.line = 0;
for (var e = 0; e < this.lineMax; e++) {
var t = this.page * this.lineMax + e;
this.labels[t].node.runAction(cc.sequence(cc.delayTime(1 * e), cc.fadeIn(1), cc.callFunc(this.end_line, this)));
}
}
},
end_line: function() {
this.line++;
},
show_page_immediate: function() {
if (!(this.page >= this.pageMax)) {
this.line = this.lineMax;
for (var e = 0; e < this.lineMax; e++) {
var t = this.page * this.lineMax + e;
this.labels[t].node.stopAllActions();
this.labels[t].node.opacity = 255;
}
}
},
hide_page: function() {
for (var e = this.page - 1, t = 0; t < this.lineMax; t++) {
var i = e * this.lineMax + t;
this.labels[i].node.active = !1;
}
},
onKeyUp: function(e) {
switch (e.keyCode) {
case cc.macro.KEY.enter:
this.touch_end();
}
}
});
cc._RF.pop();
}, {
Direction: "Direction",
FadeCover: "FadeCover",
Game: "Game"
} ],
Item2: [ function(e, t) {
"use strict";
cc._RF.push(t, "50891zqkxZH67myyff7o0EP", "Item2");
var i = e("BaseModel"), a = {
PotionLife: {
sprite: "potion_life"
},
PotionStamina: {
sprite: "potion_stamina"
},
PotionSpeed: {
sprite: "potion_speed"
},
CrystalBlue: {
sprite: "crystal_blue"
},
CrystalGreen: {
sprite: "crystal_green"
},
CrystalRed: {
sprite: "crystal_red"
},
CrystalIce: {
sprite: "crystal_ice"
},
CrystalPurple: {
sprite: "crystal_purple"
},
IngotCopper: {
sprite: "ingot_copper"
},
IngotSilver: {
sprite: "ingot_silver"
},
IngotGold: {
sprite: "ingot_gold"
},
IngotGraphite: {
sprite: "ingot_graphite"
},
IngotOrichalcum: {
sprite: "ingot_orichalcum"
}
}, s = cc.Class({
extends: i,
init: function(e) {
this._super(e, "Item2");
this.itemData = a;
this.itemMax = Object.keys(a).length;
this.itemNums = [];
this.itemTags = [];
var t = 0;
for (var i in this.itemData) {
this.itemNums[i] = 0;
this.itemTags[t++] = i;
}
},
load: function() {
for (var e in this.itemData) this.itemNums[e] = this.loadNumber(e + ".num", 0);
},
reset: function() {
for (var e in this.itemData) {
this.itemNums[e] = 0;
this.saveNumber(e + ".num", 0);
}
},
newgame: function() {
this.reset();
},
getMax: function() {
return this.itemMax;
},
getItemTags: function() {
return this.itemTags;
},
isContainTag: function(e) {
return e in this.itemData;
},
getNum: function(e) {
return e in this.itemData ? this.itemNums[e] : 0;
},
setNum: function(e, t) {
if (e in this.itemData) {
t < 0 ? t = 0 : t > 999 && (t = 999);
this.itemNums[e] = t;
this.saveNumber(e + ".num", t);
}
},
addNum: function(e, t) {
if (e in this.itemData) {
var i = this.getNum(e);
this.setNum(e, i + t);
}
},
useNum: function(e, t) {
if (e in this.itemData) {
var i = this.getNum(e);
this.setNum(e, i - t);
}
},
getSpriteName: function(e) {
return e in this.itemData ? this.itemData[e].sprite : "";
},
getSpritePath: function(e) {
return e in this.itemData ? "Item2/" + this.itemData[e].sprite : "";
}
});
t.exports = s;
cc._RF.pop();
}, {
BaseModel: "BaseModel"
} ],
ItemInfo: [ function(e, t) {
"use strict";
cc._RF.push(t, "47b2a+r98lMYZpm/q9nWpaz", "ItemInfo");
var i = e("Game"), a = e("ItemRank");
cc.Class({
extends: cc.Component,
properties: {
tag: "",
rank: {
type: a,
default: a.NONE
},
spriteIcon: cc.Sprite,
spriteRare: cc.Sprite,
labelNum: cc.Label
},
onLoad: function() {
this.refreshIcon();
this.refreshRank();
this.refreshNum();
},
SetTag: function(e) {
this.tag = e;
this.refreshIcon();
},
SetRank: function(e) {
this.rank = e;
this.refreshRank();
},
SetNum: function(e) {
this.labelNum.string = "" + e;
this.labelNum.node.active = e > 0;
},
SetNumColor: function(e) {
this.labelNum.node.color = e;
},
Reset: function() {
this.tag = "";
this.rank = a.NONE;
this.spriteIcon.spriteFrame = null;
this.spriteRare.node.active = !1;
this.labelNum.string = "";
this.labelNum.node.active = !1;
},
refreshIcon: function() {
if ("" != this.tag) {
var e = this, t = i.item.getSpritePath(this.tag);
cc.resources.load(t, cc.SpriteFrame, function(t, i) {
t || i && (e.spriteIcon.spriteFrame = i);
});
}
},
refreshRank: function() {
this.spriteRare.node.active = this.rank == a.RARE;
},
refreshNum: function() {
if ("" != this.tag) {
var e = i.item.getNum(this.tag, this.rank);
this.SetNum(e);
}
},
refresh: function() {
if ("" != this.tag) {
this.refreshRank();
this.refreshNum();
var e = i.item.getNum(this.tag, this.rank) > 0;
this.spriteIcon.node.active = e;
e || (this.spriteRare.node.active = !1);
this.labelNum.node.active = e;
}
}
});
cc._RF.pop();
}, {
Game: "Game",
ItemRank: "ItemRank"
} ],
ItemPopup: [ function(e, t) {
"use strict";
cc._RF.push(t, "3cf9cIci3FPA5zqSeotNA4I", "ItemPopup");
var i = e("Game"), a = e("Popup"), s = e("ItemInfo");
cc.Class({
extends: a,
properties: {
itemInfo: cc.Prefab
},
onLoad: function() {
this._super();
this.itemInfos = [];
},
refresh: function() {
for (var e = 0; e < this.itemInfos.length; e++) this.itemInfos[e].refresh();
},
ShowWithMode: function(e) {
if (this.Show()) {
this.SetInfo(e);
this.refresh();
}
},
Ok: function() {
this.Cancel();
},
SetInfo: function(e) {
var t = i.item.getItemTags(), a = i.item.getMaxAllRank();
if (2 == e) {
t = i.item2.getItemTags();
a = i.item2.getMax();
}
var n = Math.floor(a / 10) + 1, o = 0, c = 0;
this.window.height = 24 * n + 28;
for (var r = cc.v2(-81, this.window.height / 2 - 32), h = 0; h < t.length; h++) for (var u = t[h], l = i.item.getRank(u) + 1, p = 0; p < l; p++) {
var d = cc.instantiate(this.itemInfo);
if (d) {
this.window.addChild(d);
d.setPosition(cc.v2(18 * c + r.x, -24 * o + r.y));
var m = d.getComponent(s);
if (m) {
m.SetTag(u);
m.SetRank(p);
this.itemInfos.push(m);
}
if (++c >= 10) {
o++;
c = 0;
}
}
}
}
});
cc._RF.pop();
}, {
Game: "Game",
ItemInfo: "ItemInfo",
Popup: "Popup"
} ],
ItemRank: [ function(e, t) {
"use strict";
cc._RF.push(t, "fd679j3X49N1aII5XpztpLL", "ItemRank");
var i = cc.Enum({
NONE: 0,
RARE: 1
});
t.exports = i;
cc._RF.pop();
}, {} ],
Item: [ function(e, t) {
"use strict";
cc._RF.push(t, "f1892WGcwNNT4UFBKsz4amJ", "Item");
var i = e("BaseModel"), a = e("ItemRank"), s = e("AppPlatform"), n = {
Wood: {
rank: a.NONE,
price: 5,
sprite: "Material7"
},
Wood1: {
rank: a.NONE,
price: 10,
sprite: "icon_wood1"
},
Wood2: {
rank: a.NONE,
price: 15,
sprite: "icon_wood2"
},
Wood3: {
rank: a.NONE,
price: 20,
sprite: "icon_wood3"
},
Wool: {
rank: a.NONE,
price: 5,
sprite: "Material6"
},
Milk: {
rank: a.RARE,
price: 10,
sprite: "icon_milk"
},
Cheese: {
rank: a.RARE,
price: 20,
sprite: "icon_cheese"
},
Butter: {
rank: a.RARE,
price: 25,
sprite: "icon_butter"
},
Egg: {
rank: a.RARE,
price: 20,
sprite: "icon_egg"
},
Radish: {
rank: a.RARE,
price: 10,
sprite: "Crop_radish_2"
},
Tomato: {
rank: a.RARE,
price: 15,
sprite: "Crop_tomato_2"
},
Carrot: {
rank: a.RARE,
price: 20,
sprite: "Crop_carrot_2"
},
Corn: {
rank: a.RARE,
price: 25,
sprite: "Crop_corn_2"
},
RedRadish: {
rank: a.RARE,
price: 30,
sprite: "Crop_red_radish_2"
},
Cactus0: {
rank: a.RARE,
price: 20,
sprite: "icon_cactus0"
},
Mushroom0: {
rank: a.RARE,
price: 15,
sprite: "icon_mushroom0"
},
BlueBerry: {
rank: a.RARE,
price: 10,
sprite: "Crop_blueberry_2"
},
StrawBerry: {
rank: a.RARE,
price: 15,
sprite: "Crop_strawberry_2"
},
Grape: {
rank: a.RARE,
price: 20,
sprite: "Crop_grape_2"
},
PineApple: {
rank: a.RARE,
price: 25,
sprite: "Crop_pineapple_2"
},
Muscat: {
rank: a.RARE,
price: 30,
sprite: "Crop_muscat_2"
},
Orange: {
rank: a.RARE,
price: 10,
sprite: "FruitOrange"
},
Apple: {
rank: a.RARE,
price: 20,
sprite: "FruitApple"
},
Pear: {
rank: a.RARE,
price: 30,
sprite: "FruitPear"
},
Coconut: {
rank: a.RARE,
price: 20,
sprite: "icon_coconut"
},
Banana: {
rank: a.RARE,
price: 30,
sprite: "icon_banana"
},
Peach: {
rank: a.RARE,
price: 40,
sprite: "FruitPeach"
},
Cherry: {
rank: a.RARE,
price: 50,
sprite: "FruitCherry"
},
Stone: {
rank: a.NONE,
price: 5,
sprite: "Material0"
},
Copper: {
rank: a.NONE,
price: 20,
sprite: "Material1"
},
Silver: {
rank: a.NONE,
price: 35,
sprite: "Material2"
},
Gold: {
rank: a.NONE,
price: 50,
sprite: "Material3"
},
Diamond: {
rank: a.NONE,
price: 70,
sprite: "icon_diamond"
},
Orichalcum: {
rank: a.NONE,
price: 90,
sprite: "icon_orichalcum"
},
Ruby: {
rank: a.NONE,
price: 60,
sprite: "Material5"
},
Marble0: {
rank: a.NONE,
price: 20,
sprite: "icon_marble0"
},
Starfish: {
rank: a.NONE,
price: 20,
sprite: "Starfish"
},
Shell: {
rank: a.NONE,
price: 25,
sprite: "Shell"
},
MiniBox: {
rank: a.NONE,
price: 100,
sprite: "minibox0"
},
MiniBox1: {
rank: a.NONE,
price: 200,
sprite: "minibox1"
},
MiniBox2: {
rank: a.NONE,
price: 300,
sprite: "minibox2"
},
MiniBox3: {
rank: a.NONE,
price: 400,
sprite: "minibox3"
},
MiniBox4: {
rank: a.NONE,
price: 500,
sprite: "minibox4"
}
}, o = cc.Class({
extends: i,
init: function(e) {
this._super(e, "Item");
this.itemData = n;
this.itemMax = Object.keys(n).length;
this.itemNums = [];
this.itemTags = [];
this.itemSaves = [];
var t = 0;
for (var i in this.itemData) {
this.itemNums[i] = [ 0, 0 ];
this.itemTags[t++] = i;
this.itemSaves[i] = [ !1, !1 ];
}
for (var a = 0, s = 0; s < this.itemTags.length; s++) {
var o = this.itemTags[s];
a += this.getRank(o) + 1;
}
this.itemMaxAllRank = a;
this.item2 = null;
},
load: function() {
for (var e in this.itemData) for (var t = this.itemData[e].rank + 1, i = 0; i < t; i++) this.itemNums[e][i] = this.loadNumber(e + "." + i + ".num", 0);
cc.assert(null != this.item2, "ERROR! item2 is null.");
},
reset: function() {
for (var e in this.itemData) for (var t = this.itemData[e].rank + 1, i = 0; i < t; i++) {
this.itemNums[e][i] = 0;
this.saveNumber(e + "." + i + ".num", 0);
this.itemSaves[e][i] = !1;
}
},
newgame: function() {
this.reset();
},
saveLater: function() {
if (s.isAndroid()) this.saveLater2(); else for (var e in this.itemData) for (var t = this.itemData[e].rank + 1, i = 0; i < t; i++) if (this.itemSaves[e][i]) {
this.itemSaves[e][i] = !1;
this.saveNumber(e + "." + i + ".num", this.itemNums[e][i]);
}
},
saveLater2: function() {
var e = "";
for (var t in this.itemData) for (var i = this.itemData[t].rank + 1, a = 0; a < i; a++) if (this.itemSaves[t][a]) {
this.itemSaves[t][a] = !1;
e += this.getSaveKey(t + "." + a + ".num") + "=" + this.itemNums[t][a] + "\n";
}
s.WriteKeyValueList(e);
},
getMax: function() {
return this.itemMax;
},
getMaxAllRank: function() {
return this.itemMaxAllRank;
},
getItemTags: function() {
return this.itemTags;
},
isContainTag: function(e) {
return e in this.itemData;
},
isItem: function(e) {
return this.isContainTag(e) || this.item2.isContainTag(e);
},
getNum: function(e, t) {
return this.isContainTag(e) ? this.itemNums[e][t] : this.item2.isContainTag(e) ? this.item2.getNum(e) : 0;
},
setNum_: function(e, t, i, a) {
if (this.isContainTag(e)) {
i < 0 ? i = 0 : i > 999 && (i = 999);
this.itemNums[e][t] = i;
if (a) {
this.itemSaves[e][t] = !1;
this.saveNumber(e + "." + t + ".num", i);
} else this.itemSaves[e][t] = !0;
}
},
setNum: function(e, t, i) {
this.isContainTag(e) ? this.setNum_(e, t, i, !0) : this.item2.isContainTag(e) && this.item2.setNum(e, i);
},
addNum: function(e, t, i) {
if (this.isContainTag(e)) {
var a = this.getNum(e, t);
this.setNum_(e, t, a + i, !1);
} else this.item2.isContainTag(e) && this.item2.addNum(e, i);
},
useNum: function(e, t, i) {
if (this.isContainTag(e)) {
var a = this.getNum(e, t);
this.setNum_(e, t, a - i, !0);
} else this.item2.isContainTag(e) && this.item2.useNum(e, i);
},
getRank: function(e) {
return this.isContainTag(e) ? this.itemData[e].rank : a.NONE;
},
getPrice: function(e) {
return this.isContainTag(e) ? this.itemData[e].price : 0;
},
getSpriteName: function(e) {
return this.isContainTag(e) ? this.itemData[e].sprite : this.item2.isContainTag(e) ? this.item2.getSpriteName(e) : "";
},
getSpritePath: function(e) {
return this.isContainTag(e) ? "Item/" + this.itemData[e].sprite : this.item2.isContainTag(e) ? this.item2.getSpritePath(e) : "";
}
});
t.exports = o;
cc._RF.pop();
}, {
AppPlatform: "AppPlatform",
BaseModel: "BaseModel",
ItemRank: "ItemRank"
} ],
Jonathan: [ function(e, t) {
"use strict";
cc._RF.push(t, "f2924FB3EVDyb7VNB+bWWhG", "Jonathan");
var i = e("BaseModel"), a = {
JonathanArea0: {
readon: !1
},
JonathanArea1: {
readon: !1
},
JonathanArea2: {
readon: !1
},
JonathanArea3: {
readon: !1
},
JonathanArea4: {
readon: !1
}
}, s = cc.Class({
extends: i,
init: function(e) {
this._super(e, "Jonathan");
},
load: function() {
for (var e in a) a[e].readon = this.loadBoolean("." + e + ".readon", !1);
},
reset: function() {
for (var e in a) {
a[e].readon = !1;
this.saveBoolean("." + e + ".readon", !1);
}
},
IsReadon: function(e) {
return e in a && a[e].readon;
},
DoReadon: function(e) {
if (e in a) {
a[e].readon = !0;
this.saveBoolean("." + e + ".readon", !0);
}
},
CalcAllRate: function() {
var e = 0, t = 0;
for (var i in a) {
e++;
t += this.IsReadon(i) ? 1 : 0;
}
return Math.floor(t / e * 100);
},
IsAllReached: function() {
var e = 0, t = 0;
for (var i in a) {
e++;
t += this.IsReadon(i) ? 1 : 0;
}
return t == e;
}
});
t.exports = s;
cc._RF.pop();
}, {
BaseModel: "BaseModel"
} ],
Kira0: [ function(e, t) {
"use strict";
cc._RF.push(t, "7f990FEcIpBxpttJqnzMxvg", "Kira0");
cc.Class({
extends: cc.Component,
properties: {
animeKira: "kira0",
delayBase: 2,
delayMargin: 3
},
onLoad: function() {
this.flagAnime = !1;
this.animation = this.node.getComponent(cc.Animation);
this.node.runAction(cc.sequence(cc.delayTime(1 * Math.random()), cc.callFunc(this.finish_delay, this)));
},
update: function() {
if (this.flagAnime) {
this.flagAnime = !1;
this.animation.play(this.animeKira);
this.next_delay();
}
},
next_delay: function() {
this.node.runAction(cc.sequence(cc.delayTime(this.delayBase + Math.random() * this.delayMargin), cc.callFunc(this.finish_delay, this)));
},
finish_delay: function() {
this.flagAnime = !0;
}
});
cc._RF.pop();
}, {} ],
LangCell: [ function(e, t) {
"use strict";
cc._RF.push(t, "cb6bceG4hZJ+oLDojcWJgyT", "LangCell");
var i = e("Game");
cc.Class({
extends: cc.Component,
properties: {
labelName: cc.Label
},
ctor: function() {
this.langTag = "";
this.langPopup = null;
},
PressCell: function() {
if (!i.IsNotPress()) {
i.EnablePress();
this.langPopup && this.langPopup.SelectLang(this.langTag);
}
},
SetInfo: function(e, t) {
this.langTag = e;
this.langPopup = t;
this.labelName.string = i.getLangString(this.langTag);
},
GetLangTag: function() {
return this.langTag;
},
UpdateCellColor: function(e) {
var t = this.node.getChildByName("Background");
t && (t.color = e ? new cc.color(0, 255, 0) : new cc.color(255, 255, 255));
},
SelectCell: function() {
this.UpdateCellColor(!0);
},
DeselectCell: function() {
this.UpdateCellColor(!1);
}
});
cc._RF.pop();
}, {
Game: "Game"
} ],
LangPopup: [ function(e, t) {
"use strict";
cc._RF.push(t, "d5ecbbsqUhLzrNGDwJJePAz", "LangPopup");
var i = e("Popup"), a = e("LangCell"), s = e("Game");
cc.Class({
extends: i,
properties: {
langCell: cc.Prefab,
contents: cc.Node
},
ctor: function() {
this.callbackOkFunc = null;
this.callbackOkTarget = null;
},
onLoad: function() {
this._super();
this.listCells = [];
this.currentLang = s.getLang();
this.selectLang = this.currentLang;
},
SetCallbackOk: function(e, t) {
this.callbackOkFunc = e;
this.callbackOkTarget = t;
},
Ok: function() {
this.selectLang !== this.currentLang && s.setLang(this.selectLang);
this.callbackOkFunc && this.callbackOkTarget && this.node.runAction(cc.callFunc(this.callbackOkFunc, this.callbackOkTarget));
this.Cancel();
},
Show: function() {
if (this._super()) {
this.createList();
return !0;
}
return !1;
},
createList: function() {
for (var e = s.support_lang, t = e.length, i = 0; i < t; i++) {
var n = cc.instantiate(this.langCell);
if (n) {
n.setPosition(cc.v2(-1.5, -24 * i));
this.contents.addChild(n);
var o = n.getComponent(a);
if (o) {
this.listCells.push(o);
o.SetInfo(e[i], this);
}
}
}
this.contents.height = 24 * t;
this.refreshList();
},
refreshList: function() {
for (var e = 0; e < this.listCells.length; e++) {
var t = this.listCells[e];
t && (t.GetLangTag() === this.selectLang ? t.SelectCell() : t.DeselectCell());
}
},
SelectLang: function(e) {
if (this.selectLang !== e) {
this.selectLang = e;
this.refreshList();
}
}
});
cc._RF.pop();
}, {
Game: "Game",
LangCell: "LangCell",
Popup: "Popup"
} ],
LaunchScene: [ function(e, t) {
"use strict";
cc._RF.push(t, "840a7/DupBMa6T75fEMzxFB", "LaunchScene");
var i = e("Game"), a = e("AppPlatform"), s = e("PurchaseManager"), n = e("SavedGamesChecker"), o = e("PlatformFacebook"), c = [ {
footer: {
ios: "ca-app-pub-1514281710310684/9358100834",
android: "ca-app-pub-1514281710310684/2772549170",
fb: ""
},
warp: {
ios: "ca-app-pub-1514281710310684/6023453844",
android: "ca-app-pub-1514281710310684/8644913604",
fb: ""
},
quest: {
ios: "ca-app-pub-1514281710310684/7189611800",
android: "ca-app-pub-1514281710310684/2555058769",
fb: ""
},
chest: {
ios: "ca-app-pub-1514281710310684/2364143619",
android: "ca-app-pub-1514281710310684/5166578536",
fb: ""
},
minibox: {
ios: "ca-app-pub-1514281710310684/2334009986",
android: "ca-app-pub-1514281710310684/5089494822",
fb: ""
},
private: {
ios: "ca-app-pub-1514281710310684/9264357171",
android: "ca-app-pub-1514281710310684/8571126560",
fb: ""
},
fishing: {
ios: "ca-app-pub-1514281710310684/1727060150",
android: "ca-app-pub-1514281710310684/3047046533",
fb: ""
},
dungeon: {
ios: "ca-app-pub-1514281710310684/4897801242",
android: "ca-app-pub-1514281710310684/5894823189",
fb: ""
}
}, {
footer: {
ios: "663863a4fc026695",
android: "b9a03f9bcfde7a54",
fb: ""
},
warp: {
ios: "5005858fd5b787d1",
android: "e1c63f5b14ae1e0f",
fb: ""
},
quest: {
ios: "a43f598bad67b3d6",
android: "6faa9f94d189c7e9",
fb: ""
},
chest: {
ios: "8ab2b8d9255b222c",
android: "4ddad753f31279b0",
fb: ""
},
minibox: {
ios: "3f843e73c8029888",
android: "8e10510c62a32c9b",
fb: ""
},
private: {
ios: "07458e6c2e2bc902",
android: "352991075cacc6a8",
fb: ""
},
fishing: {
ios: "4d80b42212f83d0b",
android: "4050b0d6a0ef7d05",
fb: ""
},
dungeon: {
ios: "",
android: "",
fb: ""
}
}, {
footer: {
ios: "minifarm_ios_footer",
android: "minifarm_android_footer",
fb: ""
},
warp: {
ios: "minifarm_ios_warp",
android: "minifarm_android_warp",
fb: ""
},
quest: {
ios: "minifarm_ios_quest",
android: "minifarm_android_quest",
fb: ""
},
chest: {
ios: "minifarm_ios_chest",
android: "minifarm_android_chest",
fb: ""
},
minibox: {
ios: "minifarm_ios_minibox",
android: "minifarm_android_minibox",
fb: ""
},
private: {
ios: "minifarm_ios_private",
android: "minifarm_android_private",
fb: ""
},
fishing: {
ios: "minifarm_ios_fishing",
android: "minifarm_android_fishing",
fb: ""
},
dungeon: {
ios: "minifarm_ios_dungeon",
android: "minifarm_android_dungeon",
fb: ""
}
}, {
footer: {
ios: "",
android: "",
fb: "735949705146641_737255681682710"
},
warp: {
ios: "",
android: "",
fb: "735949705146641_737255815016030"
},
quest: {
ios: "",
android: "",
fb: "735949705146641_737255918349353"
},
chest: {
ios: "",
android: "",
fb: "735949705146641_737256051682673"
},
minibox: {
ios: "",
android: "",
fb: "735949705146641_737256308349314"
},
private: {
ios: "",
android: "",
fb: "735949705146641_737256141682664"
},
fishing: {
ios: "",
android: "",
fb: "735949705146641_737256455015966"
},
dungeon: {
ios: "",
android: "",
fb: "735949705146641_877031317705145"
}
}, {
footer: {
ios: "",
android: "",
fb: "",
tt: ""
},
warp: {
ios: "",
android: "",
fb: "",
tt: "ad7650096135177013269"
},
quest: {
ios: "",
android: "",
fb: "",
tt: "ad7649380645185325076"
},
chest: {
ios: "",
android: "",
fb: "",
tt: "ad7650138557824813077"
},
minibox: {
ios: "",
android: "",
fb: "",
tt: "ad7650872688910551061"
},
private: {
ios: "",
android: "",
fb: "",
tt: "ad7650471671258171412"
},
fishing: {
ios: "",
android: "",
fb: "",
tt: "ad7649346261489256469"
},
dungeon: {
ios: "",
android: "",
fb: "",
tt: "ad7650464080629319701"
}
} ];
cc.Class({
extends: cc.Component,
properties: {
spriteLogo: cc.Node,
savedChecker: n
},
ctor: function() {
this.sceneName = "";
},
onLoad: function() {
cc.macro.FIX_ARTIFACTS_BY_STRECHING_TEXEL_TMX = 0;
this.initApp();
},
start: function() {
this.node.runAction(cc.sequence(cc.delayTime(.1), cc.callFunc(this.showLogo, this), cc.delayTime(1.5), cc.callFunc(this.nextProcess, this)));
},
showLogo: function() {
this.spriteLogo.scale = .1;
this.spriteLogo.runAction(cc.sequence(cc.scaleTo(.1, 1, .1), cc.scaleTo(.1, 1, 1)));
},
initApp: function() {
i.initGame(this, this.initApp_2);
},
initApp_2: function() {
cc.AppPlatform = a;
cc.PurchaseManager = s;
if (a.isAndroid()) {
a.CheckBuildMode();
i.flagGooglePCGames = a.IsGooglePCGames();
i.flagGooglePCGames && i.modifiedforPC();
} else a.isFacebook() ? o.initPlatform() : a.isTikTok() && PlatformTikTok.initPlatform();
var e = !1;
a.IsMobile() && "ru" == i.getLang() && (e = !0);
var t = 0, n = "";
if (i.purchase.IsAllPurchased() || i.flagGooglePCGames) t = -1; else if (a.isIOS()) {
t = e ? 2 : 0;
n = "ios";
} else if (a.isAndroid()) {
t = e ? 2 : 0;
n = "android";
} else if (a.isFacebook()) {
t = 3;
n = "fb";
} else if (a.isTikTok()) {
t = 4;
n = "tt";
}
cc.log("AAABBB: sdkMode=" + t + " platform=" + n + " ru=" + (e ? "true" : "false"));
t >= 0 && a.CheckUMP(function() {
a.RemoveUnit("footer");
a.RemoveUnit("warp");
a.RemoveUnit("rewarded-quest");
a.RemoveUnit("rewarded-chest");
a.RemoveUnit("rewarded-minibox");
a.RemoveUnit("rewarded-private");
a.RemoveUnit("rewarded-fishing");
a.RemoveUnit("rewarded-dungeon");
a.InitAdsSDK(t, function() {
a.SetMuteAds(!i.sound.isSoundEnable());
if (!i.purchase.IsRemoveAds()) {
a.CreateBannerAds("footer", "bottom", c[t].footer[n]);
a.CreateInterstitialAds("warp", c[t].warp[n]);
}
if (!i.purchase.IsSkipVideo()) {
a.CreateRewardedAds("rewarded-quest", c[t].quest[n]);
a.CreateRewardedAds("rewarded-chest", c[t].chest[n]);
a.CreateRewardedAds("rewarded-minibox", c[t].minibox[n]);
a.CreateRewardedAds("rewarded-private", c[t].private[n]);
a.CreateRewardedAds("rewarded-fishing", c[t].fishing[n]);
}
i.purchase.IsDungeonAmulet() || a.CreateRewardedAds("rewarded-dungeon", c[t].dungeon[n]);
a.SetCallbackRewardedAdsSuccess(function(e) {
if (i.scene && cc.isValid(i.scene)) {
"rewarded-quest" === e ? i.scene.questPopup && cc.isValid(i.scene.questPopup) && i.scene.questPopup.RewardAdsSuccess() : "rewarded-chest" === e ? i.chestKey && i.chestKey.incCount() : "rewarded-minibox" === e ? i.scene.RewardMiniboxSuccess() : "rewarded-private" === e ? i.scene.targetPrivateArea && cc.isValid(i.scene.targetPrivateArea) && i.scene.targetPrivateArea.OpenGateKey() : "rewarded-fishing" === e ? i.scene.targetFishingSpot && cc.isValid(i.scene.targetFishingSpot) && i.scene.targetFishingSpot.RewardSuccess() : "rewarded-dungeon" === e && i.scene.RewardDungeonSuccess();
i.rewardCount && i.rewardCount.incCount();
}
});
a.SetCallbackRewardedAdsClose(function(e) {
i.scene && cc.isValid(i.scene) && ("rewarded-quest" === e ? i.scene.questPopup && cc.isValid(i.scene.questPopup) && i.scene.questPopup.RewardAdsClose() : "rewarded-chest" === e ? i.scene.targetChest && cc.isValid(i.scene.targetChest) && i.scene.targetChest.OpenChest() : "rewarded-minibox" === e ? i.scene.RewardMiniboxClose() : "rewarded-private" === e ? i.scene.targetPrivateArea && cc.isValid(i.scene.targetPrivateArea) && i.scene.targetPrivateArea.OpenArea() : "rewarded-fishing" === e ? i.scene.targetFishingSpot && cc.isValid(i.scene.targetFishingSpot) && i.scene.targetFishingSpot.RewardClose() : "rewarded-dungeon" === e && i.scene.RewardDungeonClose());
});
});
});
},
nextProcess: function() {
i.savedGames.isSavedGames() ? this.savedChecker.CheckStart(this.hideLogo, this) : this.hideLogo();
},
hideLogo: function() {
this.spriteLogo.runAction(cc.sequence(cc.scaleTo(.1, 1, .1), cc.scaleTo(.1, .1, .1), cc.hide()));
this.node.runAction(cc.sequence(cc.delayTime(.5), cc.callFunc(this.nextScene, this)));
var e = i.isTutorial() ? i.getStateSceneName() : "SettingScene";
e && "New Node" !== e || (e = "Map0Scene");
this.sceneName = e;
cc.director.preloadScene(this.sceneName);
},
nextScene: function() {
cc.director.loadScene(this.sceneName);
}
});
cc._RF.pop();
}, {
AppPlatform: "AppPlatform",
Game: "Game",
PlatformFacebook: "PlatformFacebook",
PurchaseManager: "PurchaseManager",
SavedGamesChecker: "SavedGamesChecker"
} ],
Level2: [ function(e, t) {
"use strict";
cc._RF.push(t, "05c0anWdptHYJEOwc6yVF/k", "Level2");
var i = e("BaseModel"), a = cc.Class({
extends: i,
init: function(e, t, i, a, s, n, o) {
this._super(e + ".Level2", t);
cc.assert(i >= 1, "ERROR!!! Level2: lv_def < 1 model=" + t);
this.lvDef = i;
this.lvMax = a;
this.lvNow = this.validationLevel(i);
this.expBase = s;
this.expRate = n;
this.expAdd = o;
this.exp = this.lvToExp(this.lvNow);
},
load: function() {
this.exp = this.loadNumber("exp", this.exp);
this.lvNow = this.expToLv(this.exp);
},
save: function() {
this.saveNumber("exp", this.exp);
},
reset: function() {
this.lvNow = this.validationLevel(this.lvDef);
this.exp = this.lvToExp(this.lvNow);
this.saveNumber("exp", this.exp);
},
getLevel: function() {
return this.lvNow;
},
setLevel: function(e) {
if ((e = this.validationLevel(e)) != this.lvNow) {
this.lvNow = e;
this.exp = this.lvToExp(e);
this.saveNumber("exp", this.exp);
}
},
incLevel: function() {
this.setLevel(this.lvNow + 1);
},
getLevelMax: function() {
return this.lvMax;
},
isMaxLevel: function() {
return this.lvNow >= this.lvMax;
},
getLevelScale: function() {
return (this.lvNow - 1) / (this.lvMax - 1);
},
getExpScale: function() {
return this.isMaxLevel() ? 1 : (this.exp - this.lvToExp(this.lvNow)) / this.diffExp(this.lvNow + 1);
},
addExp: function(e) {
var t = 0;
if (this.isMaxLevel()) return 0;
this.exp += e;
this.saveNumber("exp", this.exp);
for (var i = 1; i < this.lvMax && !this.isMaxLevel(); i++) {
var a = this.lvToExp(this.lvNow + 1);
if (!(this.exp >= a)) break;
this.lvNow++;
t++;
}
return t;
},
expToLv: function(e) {
for (var t = 1, i = e, a = 1; a < this.lvMax && !this.isMaxLevel(); a++) {
var s = this.diffExp(t + 1);
if (!(i >= s)) break;
i -= s;
t++;
}
return t;
},
lvToExp: function(e) {
for (var t = this.validationLevel(e), i = 0, a = 1; a < t; a++) i += this.diffExp(a + 1);
return i;
},
diffExp: function(e) {
return Math.floor(this.expBase * Math.pow(this.expRate, e) + e * this.expAdd);
},
diffExpNext: function() {
return this.diffExp(this.lvNow + 1);
},
validationLevel: function(e) {
return e < 1 ? 1 : e > this.lvMax ? this.lvMax : e;
}
});
t.exports = a;
cc._RF.pop();
}, {
BaseModel: "BaseModel"
} ],
LevelEasy: [ function(e, t) {
"use strict";
cc._RF.push(t, "e1796lzUcdOmpzyeOpFRUd2", "LevelEasy");
var i = e("BaseModel"), a = cc.Class({
extends: i,
init: function(e, t, i, a) {
this._super(e + ".LevelEasy", t);
cc.assert(i >= 1, "ERROR!!! LevelEasy: lv_begin < 1");
this.lvDef = i;
this.lvMax = a;
this.lvNow = this.lvDef;
},
load: function() {
this.lvNow = this.loadNumber("lvNow", this.lvNow);
},
reset: function() {
this.lvNow = this.lvDef;
this.saveNumber("lvNow", this.lvNow);
},
isLvMax: function() {
return this.lvNow >= this.lvMax;
},
getLv: function() {
return this.lvNow;
},
getLvMax: function() {
return this.lvMax;
},
getLvScale: function() {
return (this.lvNow - 1) / (this.lvMax - 1);
},
incLv: function() {
if (!this.isLvMax()) {
this.lvNow++;
this.saveNumber("lvNow", this.lvNow);
}
}
});
t.exports = a;
cc._RF.pop();
}, {
BaseModel: "BaseModel"
} ],
LevelInfo: [ function(e, t) {
"use strict";
cc._RF.push(t, "2c4ad3BbyVPWKidxbAHiPn2", "LevelInfo");
var i = e("Game");
cc.Class({
extends: cc.Component,
properties: {
labelInfo: cc.Label,
labelLocalizeTag: "",
labelSuffix: "",
gaugeNow: cc.Node,
seLvup: {
type: cc.AudioClip,
default: null
}
},
ctor: function() {
this.level = null;
},
onLoad: function() {
this.textInfo = i.getLocalizedStr(this.labelLocalizeTag, "Level") + ": ";
this.callbackFunc = null;
this.callbackTarget = null;
this.levelOld = 0;
},
SetLevelModel: function(e) {
this.level = e;
},
Renew: function() {
this.renew_info();
this.renew_gauge();
},
renew_info: function() {
this.labelInfo.string = this.textInfo + (this.level ? this.level.getLevel() : "ERROR") + this.labelSuffix;
},
renew_gauge: function() {
this.gaugeNow.scaleX = this.level ? this.level.getExpScale() : 0;
},
AddExp: function(e) {
this.levelOld = this.level ? this.level.getLevel() : 0;
var t = this.level ? this.level.addExp(e) : 0;
t > 0 && this.gaugeNow.runAction(cc.repeat(cc.sequence(cc.scaleTo(1, 1, 1).easing(cc.easeCubicActionInOut()), cc.callFunc(this.level_up_anime, this), cc.delayTime(.4), cc.scaleTo(0, 0, 1)), t));
var i = 1.4 * t + .01, a = this.level ? this.level.getExpScale() : 0;
this.gaugeNow.runAction(cc.sequence(cc.delayTime(i), cc.scaleTo(1, a, 1).easing(cc.easeCubicActionInOut()), cc.callFunc(this.add_exp_finish, this)));
},
SetAddExpCallBack: function(e, t) {
this.callbackFunc = e;
this.callbackTarget = t;
},
level_up_anime: function() {
this.seLvup && i.sound.playSE(this.seLvup);
this.labelInfo.node.runAction(cc.jumpBy(.4, cc.v2(0, 0), 6, 2));
this.levelOld++;
this.labelInfo.string = this.textInfo + this.levelOld + this.labelSuffix;
},
add_exp_finish: function() {
if (this.callbackTarget && this.callbackFunc) {
this.node.runAction(cc.callFunc(this.callbackFunc, this.callbackTarget));
this.callbackTarget = null;
this.callbackFunc = null;
}
}
});
cc._RF.pop();
}, {
Game: "Game"
} ],
Level: [ function(e, t) {
"use strict";
cc._RF.push(t, "f997fAFkIVDqqKfsJaPe2wz", "Level");
var i = e("BaseModel"), a = cc.Class({
extends: i,
init: function(e, t, i, a, s, n) {
this._super(e + ".Level", t);
cc.assert(i >= 1, "ERROR!!! Level: def_lv < 1");
this.pNeedExp = this.calcNeedExpDefault;
this.levelDef = i;
this.levelMax = a;
this.level = this.validationLevel(i);
this.expBase = s;
this.expRate = n;
this.exp = this.getPrevExp();
},
load: function() {
this.level = this.loadNumber("level", this.level);
this.levelMax = this.loadNumber("levelMax", this.levelMax);
this.exp = this.loadNumber("exp", this.exp);
this.expBase = this.loadNumber("expBase", this.expBase);
this.expRate = this.loadNumber("expRate", this.expRate);
},
save: function() {
this.saveNumber("level", this.level);
this.saveNumber("levelMax", this.levelMax);
this.saveNumber("exp", this.exp);
this.saveNumber("expBase", this.expBase);
this.saveNumber("expRate", this.expRate);
},
reset: function() {
this.level = this.validationLevel(this.levelDef);
this.saveNumber("level", this.level);
this.exp = this.getPrevExp();
this.saveNumber("exp", this.exp);
},
getLevel: function() {
return this.level;
},
setLevel: function(e) {
if ((e = this.validationLevel(e)) != this.level) {
this.level = e;
this.saveNumber("level", this.level);
this.exp = this.getPrevExp();
this.saveNumber("exp", this.exp);
}
},
incLevel: function() {
return this.addExp(this.getRemainExp());
},
getLevelMax: function() {
return this.levelMax;
},
isMaxLevel: function() {
return this.level >= this.levelMax;
},
getLevelScale: function() {
return (this.level - 1) / (this.levelMax - 1);
},
getExp: function() {
return this.exp;
},
getNextExp: function() {
return 1 == this.isMaxLevel() ? 0 : this.pNeedExp(this.level + 1, this.expBase, this.expRate);
},
getPrevExp: function() {
return this.level <= 1 ? 0 : this.pNeedExp(this.level, this.expBase, this.expRate);
},
getRemainExp: function() {
return 1 == this.isMaxLevel() ? 0 : this.getNextExp() - this.getExp();
},
getNextExpByDiff: function() {
return 1 == this.isMaxLevel() ? 0 : this.getNextExp() - this.getPrevExp();
},
getNowExpByDiff: function() {
return 1 == this.isMaxLevel() ? 0 : this.getExp() - this.getPrevExp();
},
getExpScale: function() {
return 1 == this.isMaxLevel() ? 1 : this.getNowExpByDiff() / this.getNextExpByDiff();
},
addExp: function(e) {
var t = 0;
if (1 == this.isMaxLevel()) return 0;
this.exp += e;
this.saveNumber("exp", this.exp);
for (;1 != this.isMaxLevel(); ) {
var i = this.getNextExp();
if (i <= 0) break;
if (!(this.exp >= i)) break;
this.level++;
t++;
this.saveNumber("level", this.level);
}
return t;
},
calcNeedExpDefault: function(e, t, i) {
return e * e * i + t;
},
setCalcNeedExpFunc: function(e) {
this.pNeedExp = e;
},
validationLevel: function(e) {
return e < 1 ? 1 : e > this.levelMax ? this.levelMax : e;
}
});
t.exports = a;
cc._RF.pop();
}, {
BaseModel: "BaseModel"
} ],
LocalizeTag: [ function(e, t) {
"use strict";
cc._RF.push(t, "f0988joeo9MjIJH+mxUsD/G", "LocalizeTag");
var i = e("Game");
cc.Class({
extends: cc.Component,
properties: {
localize_tag: ""
},
onLoad: function() {
if ("" != this.localize_tag) {
var e = i.getLocalizedStr(this.localize_tag, "");
if ("" != e) {
var t = this.getComponent(cc.Label);
t && (t.string = e);
}
}
}
});
cc._RF.pop();
}, {
Game: "Game"
} ],
MakeKeyPopup: [ function(e, t) {
"use strict";
cc._RF.push(t, "89976+aZIJNX5z12aSqDCtf", "MakeKeyPopup");
var i = e("PopupReward"), a = e("Game"), s = e("CoinLabel"), n = e("ItemInfo");
cc.Class({
extends: i,
properties: {
titleLabel: cc.Label,
coinLabel: s,
itemInfo: n,
buttonMake: cc.Button
},
onLoad: function() {
this._super();
var e = a.getArtifact();
this.needCoin = e.getNeedCoin();
this.coinLabel.SetCoin(this.needCoin);
this.needItemTag = e.getNeedItemTag();
this.needItemNum = e.getNeedItemNum();
this.itemInfo.SetTag(this.needItemTag);
},
showSub: function() {
var e = a.coin.getValue() >= this.needCoin;
this.coinLabel.SetColor(e ? new cc.Color(255, 255, 255) : new cc.Color(240, 0, 0));
var t = a.item.getNum(this.needItemTag, 0) >= this.needItemNum;
this.itemInfo.SetNum(this.needItemNum);
this.itemInfo.SetNumColor(t ? new cc.Color(255, 255, 255) : new cc.Color(240, 0, 0));
this.buttonMake.interactable = e && t;
},
okSkipSub: function() {
if (a.scene) {
a.scene.RewardMiniboxSuccess();
a.scene.RewardMiniboxClose();
}
},
PressMake: function() {
if (!this.IsNotAvailableButton()) {
a.scene.fadeCover && a.scene.fadeCover.PushScene("MakeKeyScene", 1, new cc.Color(0, 0, 0));
this.Hide();
}
}
});
cc._RF.pop();
}, {
CoinLabel: "CoinLabel",
Game: "Game",
ItemInfo: "ItemInfo",
PopupReward: "PopupReward"
} ],
MakeKeyScene: [ function(e, t) {
"use strict";
cc._RF.push(t, "bf977tVDjRP2qdoggmYsXkh", "MakeKeyScene");
var i = e("SaveData"), a = e("FadeCover"), s = e("Game"), n = e("AppPlatform");
cc.Class({
extends: cc.Component,
properties: {
scale: .3,
sampleKey: cc.Node,
sampleGears: [ cc.Mask ],
drillGears: [ cc.Mask ],
drillBits: [ cc.Node ],
drillTouchs: [ cc.Node ],
maskSprites: [ cc.SpriteFrame ],
drillDepth: 100,
beginPosY: -150,
buttons: cc.Node,
buttonOk: cc.Button,
buttonOpen: cc.Button,
particleDrill: cc.ParticleSystem,
particleComplete: cc.ParticleSystem,
drillWaku: cc.Node,
drillAll: cc.Node,
keyAll: cc.Node,
labelScore: cc.Label,
vibrateOff: cc.Node,
fadeCover: a,
seDrill: cc.AudioClip
},
onLoad: function() {
this.flagTouch = !1;
this.flagVibrate = i.loadBoolean("vibrate", !0);
this.refresh_vibrate();
this.sampleKey.active = !1;
this.keyAll.active = !1;
this.keyAll.scale = 0;
this.drillWaku.active = !1;
this.drillAll.active = !1;
this.buttons.active = !1;
this.buttonOk.node.active = !1;
this.node.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(this.start_game, this)));
},
start_game: function() {
this.drillBitIdx = 0;
this.drillGearIdx = 0;
this.drillGearBitIds = [];
this.limitPosY = this.beginPosY + this.drillDepth;
this.particleDelay = 0;
this.drillMaskNum = Math.round(2 * Math.random()) + 2;
this.sampleBitIds = [];
for (var e = 0; e < this.sampleGears.length; e++) {
if (e < this.drillMaskNum) {
this.sampleBitIds[e] = Math.floor(Math.random() * this.drillBits.length);
this.sampleGears[e].spriteFrame = this.maskSprites[this.sampleBitIds[e]];
var t = this.sampleGears[e].node.position;
t.y = -Math.floor(Math.random() * (this.drillDepth - 30)) + this.limitPosY;
this.sampleGears[e].node.position = t;
} else {
this.sampleGears[e].node.active = !1;
this.drillGears[e].node.active = !1;
}
this.drillGearBitIds[e] = -1;
}
this.sampleKey.zIndex = 30;
this.show_key();
},
show_key: function() {
this.keyAll.active = !0;
this.keyAll.runAction(cc.sequence(cc.scaleTo(1, this.scale).easing(cc.easeBounceOut()), cc.delayTime(.4), cc.callFunc(this.show_sample, this)));
},
show_sample: function() {
this.sampleKey.active = !0;
this.sampleKey.opacity = 255;
this.sampleKey.scale = 4 * this.scale;
this.sampleKey.runAction(cc.sequence(cc.scaleTo(1, this.scale).easing(cc.easeCubicActionOut()), cc.delayTime(.4), cc.callFunc(this.show_drill_waku, this)));
},
show_drill_waku: function() {
var e = cc.view.getVisibleSize();
this.drillWakuPos = cc.v2(0, -e.height / 2);
this.drillWaku.active = !0;
this.drillWaku.position = cc.v2(this.drillWakuPos.x, this.drillWakuPos.y - this.drillWaku.height);
this.drillWaku.runAction(cc.sequence(cc.moveTo(.4, this.drillWakuPos).easing(cc.easeIn(3)), cc.delayTime(.4), cc.callFunc(this.show_drills, this)));
},
show_drills: function() {
var e = -cc.view.getVisibleSize().height / 2 / this.scale + 320, t = e - 240;
this.drillAll.active = !0;
for (var i = 0; i < this.drillBits.length; i++) {
this.drillBits[i].position = cc.v2(this.drillBits[i].position.x, t);
this.drillBits[i].runAction(cc.sequence(cc.delayTime(.1 * i), cc.moveTo(.1, cc.v2(this.drillBits[i].position.x, e))));
}
this.node.runAction(cc.sequence(cc.delayTime(.8), cc.callFunc(this.start_play, this)));
},
start_play: function() {
this.sampleKey.runAction(cc.repeatForever(cc.sequence(cc.fadeTo(1, 120), cc.fadeTo(1, 30))));
this.buttons.active = !0;
s.EnablePress();
this.touchStart = cc.v2(0, 0);
this.touchPos = cc.v2(0, 0);
this.drillStart = cc.v2(0, 0);
this.posDiff = cc.v2(0, 0);
this.node.on(cc.Node.EventType.TOUCH_START, function(e) {
this.touchStart = e.getStartLocation();
for (var t = this.node.convertToNodeSpaceAR(this.touchStart), i = 0; i < this.drillTouchs.length; i++) if (this.drillTouchs[i].getBoundingBox().contains(t)) {
this.flagTouch = !0;
this.drillBitIdx = i;
this.drillBits[this.drillBitIdx].zIndex = 10;
this.drillStart = this.drillBits[this.drillBitIdx].position;
this.posDiff = cc.v2(0, 0);
}
}, this);
this.node.on(cc.Node.EventType.TOUCH_MOVE, function(e) {
if (0 != this.flagTouch) {
var t = e.getLocation();
this.posDiff = t.sub(this.touchStart);
this.touchPos = this.node.convertToNodeSpaceAR(t);
}
}, this);
this.node.on(cc.Node.EventType.TOUCH_END, function() {
this.touch_end();
}, this);
this.node.on(cc.Node.EventType.TOUCH_CANCEL, function() {
this.touch_end();
}, this);
},
touch_end: function() {
if (1 == this.flagTouch) {
this.drillBits[this.drillBitIdx].position = this.drillStart;
this.drillBits[this.drillBitIdx].zIndex = 0;
this.flagTouch = !1;
}
},
touch_off: function() {
this.node.off(cc.Node.EventType.TOUCH_START);
this.node.off(cc.Node.EventType.TOUCH_MOVE);
this.node.off(cc.Node.EventType.TOUCH_END);
this.node.off(cc.Node.EventType.TOUCH_CANCEL);
},
update: function(e) {
if (1 == this.flagTouch) {
var t = cc.v2(this.drillStart.x, this.drillStart.y + this.posDiff.y / this.scale);
t.y > this.limitPosY && (t.y = this.limitPosY);
if (t.y < this.beginPosY) {
for (var i = this.touchPos.div(this.scale), a = 1e3, o = 0, c = 0; c < this.drillMaskNum; c++) {
var r = Math.abs(this.drillGears[c].node.position.x - i.x);
if (r < a) {
a = r;
o = c;
}
}
this.drillGearIdx = o;
}
t.x = this.drillGears[this.drillGearIdx].node.position.x;
this.drillBits[this.drillBitIdx].position = t;
var h = this.drillGears[this.drillGearIdx];
if (t.y > h.node.position.y) {
if (this.drillGearBitIds[this.drillGearIdx] != this.drillBitIdx) {
this.drillGearBitIds[this.drillGearIdx] = this.drillBitIdx;
this.drillGears[this.drillGearIdx].spriteFrame = this.maskSprites[this.drillBitIdx];
if (0 == this.buttonOk.node.active) {
for (var u = 0, l = 0; l < this.drillMaskNum; l++) -1 != this.drillGearBitIds[l] && u++;
u == this.drillMaskNum && (this.buttonOk.node.active = !0);
}
}
h.node.position = cc.v2(h.node.position.x, t.y);
if (0 == this.particleDelay) {
this.particleDelay = e;
this.particleDrill.node.position = cc.v2(t.x * this.scale, t.y * this.scale - 5);
this.particleDrill.resetSystem();
s.sound.playSE(this.seDrill);
this.flagVibrate && cc.sys.isNative && n.IsMobile() && n.VibrateNormal();
}
}
}
if (this.particleDelay > 0) {
this.particleDelay += e;
this.particleDelay > .36 && (this.particleDelay = 0);
}
},
calc_score: function() {
for (var e = 0, t = 0; t < this.drillMaskNum; t++) {
var i = 0, a = this.sampleBitIds[t], s = this.sampleGears[t].node.position.y, n = this.drillGearBitIds[t], o = this.drillGears[t].node.position.y;
i += a == n ? 20 : 0;
var c = Math.abs(s - o);
e += (i += (this.drillDepth - c) / this.drillDepth * 80) / this.drillMaskNum;
}
return Math.round(e);
},
drill_finish: function() {
this.touch_off();
this.sampleKey.active = !1;
this.drillWaku.active = !1;
this.drillAll.active = !1;
this.buttons.active = !1;
var e = this.calc_score();
s.makeKeyRate = e;
this.labelScore.node.active = !0;
this.labelScore.string = s.getLocalizedStr("makekey_rate", "完成度") + "\n" + e + "%";
this.labelScore.node.runAction(cc.scaleTo(1, .25).easing(cc.easeBackOut()));
this.particleComplete.resetSystem();
this.node.runAction(cc.sequence(cc.delayTime(1.5), cc.callFunc(this.finish_next, this)));
},
finish_next: function() {
s.EnablePress();
this.buttonOpen.node.active = !0;
},
pressOk: function() {
s.IsNotPress() || this.drill_finish();
},
pressCancel: function() {
if (!s.IsNotPress()) {
this.touch_off();
this.sampleKey.active = !1;
this.drillWaku.keyAll = !1;
this.drillWaku.active = !1;
this.drillAll.active = !1;
this.buttons.active = !1;
this.fadeCover.PopScene(.4, new cc.Color(0, 0, 0));
}
},
pressOpen: function() {
if (!s.IsNotPress()) {
var e = s.getArtifact(), t = e.getNeedCoin();
s.coin.useCurrency(t);
s.item.useNum(e.getNeedItemTag(), 0, e.getNeedItemNum());
this.fadeCover.TransitionFadeBlack("OpenBoxScene", 1);
}
},
pressVibrate: function() {
if (!s.IsNotPress()) {
var e = this.flagVibrate;
this.flagVibrate = !e;
i.saveBoolean("vibrate", this.flagVibrate);
s.EnablePress();
this.refresh_vibrate();
}
},
refresh_vibrate: function() {
this.vibrateOff.active = !this.flagVibrate;
}
});
cc._RF.pop();
}, {
AppPlatform: "AppPlatform",
FadeCover: "FadeCover",
Game: "Game",
SaveData: "SaveData"
} ],
Map0Scene: [ function(e, t) {
"use strict";
cc._RF.push(t, "e10d9cNGwxLqpkJk4Jx355y", "Map0Scene");
var i = e("BaseScene"), a = e("Game");
cc.Class({
extends: i,
onEnter: function() {
this._super();
if (a.tutorial.CheckTutorialArea1()) {
a.savedGames && a.savedGames.sendData();
a.tutorial.StartTutorial("area1");
}
}
});
cc._RF.pop();
}, {
BaseScene: "BaseScene",
Game: "Game"
} ],
MapManager: [ function(e, t) {
"use strict";
cc._RF.push(t, "29f77E/vEBMqrPMclP22LY9", "MapManager");
var i = e("Game"), a = e("Popup"), s = e("MessagePopup"), n = e("FishingPopup"), o = e("FishingCmdPopup"), c = e("HousePopup"), r = e("UnlockPopup"), h = e("RequestPopup"), u = e("ReviewPopup"), l = e("WarpPopup"), p = e("TutorialMesPopup"), d = e("ResidentPopup"), m = e("BargainSignPopup"), f = e("ArtifactPopup"), g = e("DungeonRewardPopup"), v = e("ItemPopup"), S = e("Balloon"), _ = e("StoryCutin"), C = e("DropItem"), T = e("SavedGamesChecker");
cc.Class({
extends: cc.Component,
properties: {
dropMiniboxs: [ cc.Prefab ],
dropFish: cc.Prefab,
dropItems: [ cc.Prefab ],
dropCoins: [ cc.Prefab ],
explainFishing: cc.Prefab,
explainArtifact: cc.Prefab,
explainHouse: cc.Prefab,
explainQuest: cc.Prefab,
explainWarp: cc.Prefab,
explainResident: cc.Prefab,
explainAnimalExplorers: cc.Prefab,
messagePopup: cc.Prefab,
alertPopup: cc.Prefab,
itemPopup: cc.Prefab,
artifactPopup: cc.Prefab,
chestRewardPopup: cc.Prefab,
fishingPopup: cc.Prefab,
fishingCmdPopup: cc.Prefab,
fishingRewardPopup: cc.Prefab,
housePopup: cc.Prefab,
unlockPopup: cc.Prefab,
makeKeyPopup: cc.Prefab,
privateAreaPopup: cc.Prefab,
refreshPopup: cc.Prefab,
requestPopup: cc.Prefab,
reviewPopup: cc.Prefab,
warpPopup: cc.Prefab,
tutorialMesPopup: cc.Prefab,
residentPopup: cc.Prefab,
purchasePopup: cc.Prefab,
bargainSignPopup: cc.Prefab,
backupPopup: cc.Prefab,
umpPopup: cc.Prefab,
dungeonRewardPopup: cc.Prefab,
configPopup: cc.Prefab,
notificationPopup: cc.Prefab,
balloon: cc.Prefab,
storyCutin: cc.Prefab,
savedGamesChecker: {
default: null,
type: cc.Prefab
},
rareStar: cc.Prefab,
seLaunchPortal: cc.AudioClip,
seWarp: cc.AudioClip,
seLvup: cc.AudioClip
},
onLoad: function() {
this.dropItemsMap = [];
for (var e = 0; e < this.dropItems.length; e++) {
var t = this.dropItems[e].name, i = t.slice(4, t.length);
this.dropItemsMap[i] = this.dropItems[e];
}
for (var a = 0; a < this.dropMiniboxs.length; a++) {
var s = this.dropMiniboxs[a].name, n = s.slice(4, s.length);
this.dropItemsMap[n] = this.dropMiniboxs[a];
}
for (var o = 0; o < this.dropCoins.length; o++) {
var c = this.dropCoins[o].name, r = c.slice(4, c.length);
this.dropItemsMap[r] = this.dropCoins[o];
}
},
GetFishDropPrefab: function() {
return this.dropFish;
},
AddDropItem: function(e, t) {
var i = this.dropItemsMap[e];
if (!i) return null;
var a = cc.instantiate(i);
if (a) {
t.addChild(a);
return a.getComponent(C);
}
return null;
},
ShowExplainPopup: function(e) {
var t = null;
"fishing" == e ? t = this.explainFishing : "artifact" == e ? t = this.explainArtifact : "house" == e ? t = this.explainHouse : "quest" == e ? t = this.explainQuest : "warp" == e ? t = this.explainWarp : "resident" == e ? t = this.explainResident : "animal_explorers" == e && (t = this.explainAnimalExplorers);
if (null != t) {
var s = cc.instantiate(t);
if (s) {
i.scene.camera.node.addChild(s);
var n = s.getComponent(a);
n && n.Show();
}
}
},
ShowMessage: function(e) {
var t = cc.instantiate(this.messagePopup);
if (t) {
i.scene.camera.node.addChild(t);
var a = t.getComponent(s);
a && a.ShowWithText(e);
}
},
ShowAlert: function(e) {
var t = cc.instantiate(this.alertPopup);
if (t) {
i.scene.camera.node.addChild(t);
var a = t.getComponent(s);
a && a.ShowWithText(e);
}
},
ShowItemPopup: function(e) {
var t = cc.instantiate(this.itemPopup);
if (t) {
i.scene.camera.node.addChild(t);
var a = t.getComponent(v);
a && a.ShowWithMode(e);
}
},
ShowArtifactPopup: function(e) {
var t = cc.instantiate(this.artifactPopup);
if (t) {
i.scene.camera.node.addChild(t);
var a = t.getComponent(f);
a && a.ShowWithTag(e);
}
},
ShowChestRewardPopup: function() {
var e = cc.instantiate(this.chestRewardPopup);
if (e) {
i.scene.camera.node.addChild(e);
var t = e.getComponent(a);
t && t.Show();
}
},
ShowFishingPopupWithTarget: function(e) {
var t = cc.instantiate(this.fishingPopup);
if (t) {
i.scene.camera.node.addChild(t);
var a = t.getComponent(n);
a && a.ShowWithTarget(e);
}
},
ShowFishingPopupResult: function(e, t) {
var a = cc.instantiate(this.fishingPopup);
if (a) {
i.scene.camera.node.addChild(a);
var s = a.getComponent(n);
s && s.ShowResult(e, t);
}
},
ShowFishingCmdPopupThrow: function(e) {
var t = cc.instantiate(this.fishingCmdPopup);
if (t) {
i.scene.camera.node.addChild(t);
var a = t.getComponent(o);
a && a.ShowCmdThrow(e);
}
},
ShowFishingCmdPopupCatchUp: function(e) {
var t = cc.instantiate(this.fishingCmdPopup);
if (t) {
i.scene.camera.node.addChild(t);
var a = t.getComponent(o);
if (a) {
a.ShowCmdCatchUp(e);
return a;
}
}
return null;
},
ShowFishingRewardPopup: function() {
var e = cc.instantiate(this.fishingRewardPopup);
if (e) {
i.scene.camera.node.addChild(e);
var t = e.getComponent(a);
t && t.Show();
}
},
ShowHousePopup: function(e, t) {
var a = cc.instantiate(this.housePopup);
if (a) {
i.scene.camera.node.addChild(a);
var s = a.getComponent(c);
s && s.ShowWithTag(e, t);
}
},
ShowUnlockPopup: function(e) {
var t = cc.instantiate(this.unlockPopup);
if (t) {
i.scene.camera.node.addChild(t);
var a = t.getComponent(r);
a && a.ShowWithUnlock(e);
}
},
ShowMakeKeyPopup: function() {
var e = cc.instantiate(this.makeKeyPopup);
if (e) {
i.scene.camera.node.addChild(e);
var t = e.getComponent(a);
t && t.Show();
}
},
ShowPrivateAreaPopup: function() {
var e = cc.instantiate(this.privateAreaPopup);
if (e) {
i.scene.camera.node.addChild(e);
var t = e.getComponent(a);
t && t.Show();
}
},
ShowRefreshPopup: function() {
var e = cc.instantiate(this.refreshPopup);
if (e) {
i.scene.camera.node.addChild(e);
var t = e.getComponent(a);
t && t.Show();
}
},
ShowRequestPopup: function(e) {
var t = cc.instantiate(this.requestPopup);
if (t) {
i.scene.camera.node.addChild(t);
var a = t.getComponent(h);
a && a.ShowWithIdx(e);
}
},
ShowReviewPopup: function(e) {
var t = cc.instantiate(this.reviewPopup);
if (t) {
i.scene.camera.node.addChild(t);
var a = t.getComponent(u);
if (a) {
a.SetText(e);
a.Show();
}
}
},
ShowReviewPopupByTag: function(e) {
var t = "", a = "";
if ("area1_first_gate" == e) {
t = i.getLocalizedStr("review_text_unlock");
a = i.getLocalizedStr("review_text_review0");
} else if ("area1_clear" == e) {
t = i.getLocalizedStr("review_text_clear_all").replace("9999", "1");
a = i.getLocalizedStr("review_text_area0");
} else if ("area2_clear" == e) {
t = i.getLocalizedStr("review_text_clear_all").replace("9999", "2");
a = i.getLocalizedStr("review_text_area1");
} else if ("area3_clear" == e) {
t = i.getLocalizedStr("review_text_clear_all").replace("9999", "3");
a = i.getLocalizedStr("review_text_area2");
} else if ("area4_clear" == e) {
t = i.getLocalizedStr("review_text_clear_all").replace("9999", "4");
a = i.getLocalizedStr("review_text_area3");
}
var s = t + " \n\n" + a;
"heven" == e ? s = i.getLocalizedStr("review_text_trueend") : "area1_chest" == e && (s = i.getLocalizedStr("review_text_area1_chest"));
this.ShowReviewPopup(s);
},
ShowWarpPopup: function(e) {
var t = cc.instantiate(this.warpPopup);
if (t) {
i.scene.camera.node.addChild(t);
var a = t.getComponent(l);
a && a.ShowWithMyTag(e);
}
},
ShowTutorialMesPopup: function(e) {
var t = cc.instantiate(this.tutorialMesPopup);
if (t) {
i.scene.camera.node.addChild(t);
var a = t.getComponent(p);
if (a) {
a.ShowWithText(e);
return a;
}
t.destroy();
}
return null;
},
ShowResidentPopup: function(e) {
var t = cc.instantiate(this.residentPopup);
if (t) {
i.scene.camera.node.addChild(t);
var a = t.getComponent(d);
a && a.ShowWithTag(e);
}
},
ShowPurchasePopup: function() {
var e = cc.instantiate(this.purchasePopup);
if (e) {
i.scene.camera.node.addChild(e);
var t = e.getComponent(a);
t && t.Show();
}
},
ShowBargainSignPopup: function(e) {
var t = cc.instantiate(this.bargainSignPopup);
if (t) {
i.scene.camera.node.addChild(t);
var a = i.getLocalizedStr("bargain_sign_base") + "\n\n" + i.getLocalizedStr(e), s = t.getComponent(m);
s && s.ShowWithText(a);
}
},
ShowBackupPopup: function() {
var e = cc.instantiate(this.backupPopup);
if (e) {
i.scene.camera.node.addChild(e);
var t = e.getComponent(a);
t && t.Show();
}
},
ShowUMPPopup: function() {
var e = cc.instantiate(this.umpPopup);
if (e) {
i.scene.camera.node.addChild(e);
var t = e.getComponent(a);
t && t.Show();
}
},
ShowDungeonRewardPopup: function(e, t) {
var a = cc.instantiate(this.dungeonRewardPopup);
if (a) {
i.scene.camera.node.addChild(a);
var s = a.getComponent(g);
s && s.ShowWithInfo(e, t);
}
},
ShowConfigPopup: function() {
var e = cc.instantiate(this.configPopup);
if (e) {
i.scene.camera.node.addChild(e);
var t = e.getComponent(a);
t && t.Show();
}
},
ShowNotificationPopup: function() {
var e = cc.instantiate(this.notificationPopup);
if (e) {
i.scene.camera.node.addChild(e);
var t = e.getComponent(a);
t && t.Show();
}
},
ShowBalloon: function(e, t, i, a) {
return this.ShowBalloonWithParam(e, t, 90, 1, i, a);
},
ShowBalloonWithWidth: function(e, t, i, a, s) {
return this.ShowBalloonWithParam(e, t, i, 1, a, s);
},
ShowBalloonWithOffsetX: function(e, t, i, a, s) {
return this.ShowBalloonWithParam(e, t, 90, i, a, s);
},
ShowBalloonWithParam: function(e, t, a, s, n, o) {
var c = cc.instantiate(this.balloon);
if (c) {
if (o) {
i.scene && i.scene.node.addChild(c);
c.position = cc.v2(e.position.x, e.position.y + t.y);
c.zIndex = e.zIndex + 100;
} else {
e.addChild(c);
c.position = cc.v2(0, t.y);
}
var r = c.getComponent(S);
if (r) {
r.SetDefaultPosition(t);
r.SetLabelWidth(a);
r.SetOffsetScaleX(s);
r.show(n);
return r;
}
c.destroy();
}
return null;
},
ShowStoryCutin: function(e, t, a) {
var s = cc.instantiate(this.storyCutin);
if (s) {
i.scene.camera.node.addChild(s);
var n = s.getComponent(_);
if (n) {
var o = i.story.GetTexts(e);
n.Show(o, t, a);
}
}
},
ShowSavedGamesChecker: function() {
if (null != this.savedGamesChecker) {
var e = cc.instantiate(this.savedGamesChecker);
if (e) {
i.scene.camera.node.addChild(e);
var t = e.getComponent(T);
t && t.CheckStartWithReload();
}
}
},
ShowSavedGamesCheckerBySave: function() {
if (null != this.savedGamesChecker) {
var e = cc.instantiate(this.savedGamesChecker);
if (e) {
i.scene.camera.node.addChild(e);
var t = e.getComponent(T);
t && t.ShowIndicator(2);
}
}
},
AddRareStar: function(e, t) {
var i = cc.instantiate(this.rareStar);
if (i) {
i.position = t;
e.addChild(i);
return i;
}
return null;
},
SeLaunchPortal: function() {
this.seLaunchPortal && i.sound.playSE(this.seLaunchPortal);
},
SeWarp: function() {
this.seWarp && i.sound.playSE(this.seWarp);
},
SeLvup: function() {
this.seLvup && i.sound.playSE(this.seLvup);
}
});
cc._RF.pop();
}, {
ArtifactPopup: "ArtifactPopup",
Balloon: "Balloon",
BargainSignPopup: "BargainSignPopup",
DropItem: "DropItem",
DungeonRewardPopup: "DungeonRewardPopup",
FishingCmdPopup: "FishingCmdPopup",
FishingPopup: "FishingPopup",
Game: "Game",
HousePopup: "HousePopup",
ItemPopup: "ItemPopup",
MessagePopup: "MessagePopup",
Popup: "Popup",
RequestPopup: "RequestPopup",
ResidentPopup: "ResidentPopup",
ReviewPopup: "ReviewPopup",
SavedGamesChecker: "SavedGamesChecker",
StoryCutin: "StoryCutin",
TutorialMesPopup: "TutorialMesPopup",
UnlockPopup: "UnlockPopup",
WarpPopup: "WarpPopup"
} ],
MessagePopup: [ function(e, t) {
"use strict";
cc._RF.push(t, "c1fa3HNa6BITbIH9vqGuo6J", "MessagePopup");
var i = e("Popup");
cc.Class({
extends: i,
properties: {
titleLabel: cc.Label
},
Ok: function() {
this.Cancel();
},
ShowWithText: function(e) {
this.Show() && (this.titleLabel.string = e);
}
});
cc._RF.pop();
}, {
Popup: "Popup"
} ],
MiniBoxGirl: [ function(e, t) {
"use strict";
cc._RF.push(t, "8e99d7XRyVJCaD8Br+hnija", "MiniBoxGirl");
var i = e("Gimmick"), a = e("CommandType"), s = e("Game");
e("AppPlatform");
cc.Class({
extends: i,
properties: {
artifactTag: ""
},
onLoad: function() {
this._super();
this.balloon = null;
var e = s.getArtifactByTag(this.artifactTag);
this.miniBoxTag = null != e ? e.getMiniBoxTag() : "";
},
getAvailableCommand: function() {
return a.EVENT;
},
execCommand: function(e) {
e == a.EVENT && (s.item.getNum(this.miniBoxTag, 0) <= 0 ? this.showBalloon() : s.scene.manager.ShowMakeKeyPopup());
},
collisionExit: function() {
this.hideBalloon();
},
showBalloon: function() {
this.hideBalloon();
var e = s.getLocalizedStr("makekey_hello"), t = s.getArtifactId();
if (t >= 1) {
var i = s.getLocalizedStr("makekey_box_color" + t);
"" != i && (e += " (" + i + ")");
}
this.balloon = s.scene.manager.ShowBalloon(this.node, cc.v2(-12, 17), e, !0);
},
hideBalloon: function() {
if (this.balloon) {
this.balloon.hide();
this.balloon = null;
}
}
});
cc._RF.pop();
}, {
AppPlatform: "AppPlatform",
CommandType: "CommandType",
Game: "Game",
Gimmick: "Gimmick"
} ],
MiniInfo: [ function(e, t) {
"use strict";
cc._RF.push(t, "17417LW8v1LPrpdEAJI0k5w", "MiniInfo");
var i = e("Game"), a = e("CoinLabel");
cc.Class({
extends: cc.Component,
properties: {
coinLabel: {
type: a,
default: null
}
},
onLoad: function() {
this.Refresh();
},
Refresh: function() {
this.RefreshCoin();
},
RefreshCoin: function() {
if (this.coinLabel) {
var e = i.coin.getValue();
this.coinLabel.SetCoin(e);
}
}
});
cc._RF.pop();
}, {
CoinLabel: "CoinLabel",
Game: "Game"
} ],
MonorisObj: [ function(e, t) {
"use strict";
cc._RF.push(t, "d13e92a6n1MNqJG/NLsoFVd", "MonorisObj");
var i = e("Resource"), a = e("CommandType"), s = e("Game"), n = e("ToolLevel"), o = e("ResourceManager"), c = [ "tool_lv_0", "tool_lv_1", "tool_lv_2", "tool_lv_3", "tool_lv_4", "tool_lv_5" ];
cc.Class({
extends: i,
properties: {
monorisTag: "",
jonathanTag: "",
needToolLv: {
type: n,
default: n.STONE
},
serifUnknown: "",
villagers: [ cc.Node ]
},
onLoad: function() {
this._super();
this.isMinibox = !1;
if (s.monoris.IsDestroy(this.monorisTag)) {
this.activeVillagers();
this.removeSelf();
}
},
getAvailableCommand: function() {
return s.Is2ndPlay() && s.jonathan.IsReadon(this.jonathanTag) && s.getToolLv() >= this.needToolLv ? a.PICKAXE : a.EVENT;
},
execCommand: function(e) {
if (e == a.PICKAXE) this._super(e); else if (e == a.EVENT) if (s.Is2ndPlay()) if (s.jonathan.IsReadon(this.jonathanTag)) {
if (s.getToolLv() < this.needToolLv) {
var t = s.getLocalizedStr(c[this.needToolLv]), i = s.getLocalizedStr("monoris_need_lv");
i = i.replace("XXXX", t);
s.scene.hero.ShowSerif(i);
}
} else s.scene.hero.ShowSerif(s.getLocalizedStr("monoris_readon")); else s.scene.hero.ShowSerif(s.getLocalizedStr(this.serifUnknown));
},
finish: function() {
this._super();
this.node.opacity = 0;
s.monoris.DoDestroy(this.monorisTag);
this.releaseVillagers();
},
releaseVillagers: function() {
this.pauseInput();
s.scene.fadeCover.FadeOutIn(2, new cc.Color(255, 255, 255), this.activeVillagers, this, this.releaseVillagersFinish, this);
},
activeVillagers: function() {
for (var e = 0; e < this.villagers.length; e++) this.villagers[e] && (this.villagers[e].active = !0);
},
releaseVillagersFinish: function() {
this.resumeInput();
this.removeSelf();
},
removeSelf: function() {
var e = this.node.parent.getComponent(o);
e && e.UnregistResource(this);
this.node.destroy();
},
pauseInput: function() {
s.scene.PauseInput();
},
resumeInput: function() {
s.scene.ResumeInput();
}
});
cc._RF.pop();
}, {
CommandType: "CommandType",
Game: "Game",
Resource: "Resource",
ResourceManager: "ResourceManager",
ToolLevel: "ToolLevel"
} ],
MonorisPot: [ function(e, t) {
"use strict";
cc._RF.push(t, "90f78jY7eZEzbzZrVODJMC4", "MonorisPot");
var i = e("Resource"), a = (e("ResourceState"), e("CommandType")), s = e("Direction"), n = e("Game");
cc.Class({
extends: i,
ctor: function() {
this.flagTransition = !1;
},
onLoad: function() {
this._super();
this.isMinibox = !1;
},
getAvailableCommand: function() {
return a.PICKAXE;
},
finish: function() {
this._super();
this.node.opacity = 0;
this.nextScene();
},
nextScene: function() {
if (!this.flagTransition) {
this.flagTransition = !0;
n.CheckTrueEnd();
if (n.IsTrueEnd()) {
n.settingState(cc.v2(-52, -654), s.UP);
n.scene.fadeCover.TransitionFade("RouteTrueScene", 3, cc.Color(255, 255, 255));
} else {
n.settingState(cc.v2(-44, -732), s.UP);
n.scene.fadeCover.TransitionFade("RouteNormalScene", 3, cc.Color(255, 255, 255));
}
}
}
});
cc._RF.pop();
}, {
CommandType: "CommandType",
Direction: "Direction",
Game: "Game",
Resource: "Resource",
ResourceState: "ResourceState"
} ],
Monoris: [ function(e, t) {
"use strict";
cc._RF.push(t, "3e17fHimpdFlajemZX8LmRk", "Monoris");
var i = e("BaseModel"), a = {
MonorisArea0: {
destroy: !1
},
MonorisArea1: {
destroy: !1
},
MonorisArea2: {
destroy: !1
},
MonorisArea3: {
destroy: !1
},
MonorisArea4: {
destroy: !1
}
}, s = cc.Class({
extends: i,
init: function(e) {
this._super(e, "Monoris");
},
load: function() {
for (var e in a) a[e].destroy = this.loadBoolean("." + e + ".destroy", !1);
},
reset: function() {
for (var e in a) {
a[e].destroy = !1;
this.saveBoolean("." + e + ".destroy", !1);
}
},
IsDestroy: function(e) {
return e in a && a[e].destroy;
},
DoDestroy: function(e) {
if (e in a) {
a[e].destroy = !0;
this.saveBoolean("." + e + ".destroy", !0);
}
},
CalcAllRate: function() {
var e = 0, t = 0;
for (var i in a) {
e++;
t += this.IsDestroy(i) ? 1 : 0;
}
return Math.floor(t / e * 100);
},
IsAllReached: function() {
var e = 0, t = 0;
for (var i in a) {
e++;
t += this.IsDestroy(i) ? 1 : 0;
}
return t == e;
}
});
t.exports = s;
cc._RF.pop();
}, {
BaseModel: "BaseModel"
} ],
MonsterCollision: [ function(e, t) {
"use strict";
cc._RF.push(t, "62ccaEiQ31LYr6PhSxd+T0M", "MonsterCollision");
cc.Class({
extends: cc.Component,
properties: {
parent: cc.Node
},
onLoad: function() {
this.monster = this.parent.getComponent("Monster");
},
onCollisionEnter: function(e, t) {
if ("Hero" == e.node.group && 333 == e.tag) if (4444 == t.tag) {
this.monster && this.monster.Wakeup();
t.enabled = !1;
} else 6666 == t.tag && this.monster && this.monster.AttackReady();
},
onCollisionExit: function(e, t) {
"Hero" == e.node.group && 333 == e.tag && 6666 == t.tag && this.monster && this.monster.AttackNotReady();
}
});
cc._RF.pop();
}, {} ],
Monster: [ function(e, t) {
"use strict";
cc._RF.push(t, "38bdfzuLSZBjb9UjCuLemv4", "Monster");
var i = e("Walker"), a = e("Game"), s = e("MonsterCollision"), n = e("Direction"), o = e("AttackRect"), c = cc.Enum({
SLEEP: 0,
IDLE: 1,
WALK: 2,
ATTACK: 3,
DAMAGE: 4,
DEAD: 5
}), r = cc.Enum({
STAND: 0,
FREEDOM: 1,
CHASE: 2,
ESCAPE: 3
}), h = cc.Enum({
NONE: 0,
JUMP: 1,
RUSH: 2
});
cc.Class({
extends: i,
properties: {
defaultDir: {
type: n,
default: n.RANDOM
},
movePattern: {
type: r,
default: r.STAND
},
imageSleep: [ cc.SpriteFrame ],
idleSec: 3,
animeIdle: [ cc.AnimationClip ],
walkSec: 3,
animeWalk: [ cc.AnimationClip ],
attackMode: {
type: h,
default: h.NONE
},
attackRate: 30,
attackRectPrefab: {
type: cc.Prefab,
default: null
},
attackRectSize: cc.Size,
attackWait: .8,
animeAttack: [ cc.AnimationClip ],
seDamage: {
type: cc.AudioClip,
default: null
},
seIchigeki: {
type: cc.AudioClip,
default: null
},
seDead: {
type: cc.AudioClip,
default: null
},
checkMe: cc.Node,
collision: s,
material_brightness: cc.Material
},
onLoad: function() {
this._super();
this.enemy = this.node.getComponent("Enemy");
this.animation = this.node.getComponent(cc.Animation);
this.actionState = c.SLEEP;
this.actionCount = 0;
this.walkVec = cc.v2();
this.hitBackPower = 50;
this.hitBackCount = 0;
this.hitBackVec = cc.v2();
this.deadCallbackFunc = null;
this.deadCallbackTarget = null;
this.checkMe.active = !1;
this.sprite = this.node.getComponent(cc.Sprite);
this.material_default = null;
this.sprite && (this.material_default = this.sprite.getMaterial(0));
this.rigidBody = this.node.getComponent(cc.RigidBody);
this.attackRate = this.attackRate / 100;
this.attackRect = null;
this.attackReach = this.attackRectSize.width - this.attackRectSize.height / 2;
this.attackVec = cc.v2();
this.flagAttackReady = !1;
this.flagAttackDistance = !1;
this.direction = this.defaultDir == n.RANDOM ? Math.floor(4 * Math.random()) : this.defaultDir;
this.Sleep();
},
start: function() {
this.next_action();
},
update: function(e) {
this._super(e);
if (this.actionState == c.WALK && this.move(this.walkVec, 1)) {
this.change_anime();
this.change_dir_collision();
}
if (this.hitBackCount > 0) {
this.move(this.hitBackVec, this.hitBackPower);
this.hitBackCount--;
this.hitBackCount <= 0 && this.stop();
}
this.actionCount--;
this.actionCount <= 0 && this.next_action();
},
next_action: function() {
switch (this.actionState) {
case c.IDLE:
case c.DAMAGE:
this.Walk();
break;

case c.WALK:
this.flagAttackReady && Math.random() < this.attackRate ? this.Attack() : this.Idle();
break;

case c.ATTACK:
this.Idle();
}
},
change_anime: function() {
var e = null;
switch (this.actionState) {
case c.IDLE:
e = this.animeIdle[this.direction];
break;

case c.WALK:
e = this.animeWalk[this.direction];
break;

case c.ATTACK:
this.animation.pause();
this.sprite.spriteFrame = this.imageSleep[this.direction];
}
e && this.animation.play(e.name);
},
change_action: function(e, t) {
this.actionCount = t;
this.actionState = e;
this.change_anime();
},
change_dir_collision: function() {
var e = 0;
this.direction == n.RIGHT ? e = 90 : this.direction == n.DOWN ? e = 0 : this.direction == n.LEFT ? e = 270 : this.direction == n.UP && (e = 180);
this.collision.node.angle = e;
},
start_hitback: function(e) {
this.hitBackPower = 10 * e / this.speed;
this.hitBackCount = 5;
},
change_material_default: function() {
this.sprite && this.material_default && this.sprite.setMaterial(0, this.material_default);
},
change_material_brightness: function() {
this.sprite && this.material_brightness && this.sprite.setMaterial(0, this.material_brightness);
},
resume_anime: function() {
this.animation.resume();
},
physics_enable: function() {
this.rigidBody && (this.rigidBody.active = !0);
},
physics_disable: function() {
this.rigidBody && (this.rigidBody.active = !1);
},
invincible_enable: function() {
this.enemy.EnableInvincible();
},
invincible_disable: function() {
this.enemy.DisableInvincible();
},
IsSleep: function() {
return this.actionState == c.SLEEP;
},
Sleep: function() {
this.sprite.spriteFrame = this.imageSleep[this.direction];
this.change_dir_collision();
},
Wakeup: function() {
if (this.actionState == c.SLEEP) {
this.Idle();
this.checkMe.active = !0;
this.checkMe.runAction(cc.sequence(cc.delayTime(1), cc.removeSelf()));
}
},
Idle: function() {
this.stop();
this.change_action(c.IDLE, (.3 * Math.random() + .7) * this.idleSec * 60);
},
Walk: function() {
var e = this.movePattern;
e != r.CHASE && e != r.ESCAPE || Math.random() < .3 && (e = r.FREEDOM);
if (e != r.STAND) {
if (e == r.FREEDOM) {
var t = 6.28 * Math.random();
this.walkVec = cc.v2(Math.cos(t), Math.sin(t));
} else if (e == r.CHASE) {
var i = this.node.getPosition(), s = a.scene.hero.node.getPosition();
this.walkVec = s.sub(i).normalize();
} else if (e == r.ESCAPE) {
var n = this.node.getPosition(), o = a.scene.hero.node.getPosition();
this.walkVec = n.sub(o).normalize();
}
this.change_action(c.WALK, (.3 * Math.random() + .7) * this.walkSec * 60);
} else {
this.walkVec = cc.v2(0, 0);
this.actionCount = 60 * this.idleSec;
}
},
AttackReady: function() {
this.flagAttackReady = !0;
},
AttackNotReady: function() {
this.flagAttackReady = !1;
},
AttackDistance: function() {
this.flagAttackDistance = !0;
},
AttackNotDistance: function() {
this.flagAttackDistance = !1;
},
Attack: function() {
this.stop();
var e = 0, t = .8 + this.attackWait, i = this.node.getPosition(), s = a.scene.hero.node.getPosition().sub(i).normalize();
this.attackVec = s;
this.turnTarget(s);
var n = i.add(s.mul(this.attackReach));
this.create_attack_rect(i, s);
switch (this.attackMode) {
case h.JUMP:
this.node.runAction(cc.sequence(cc.delayTime(t), cc.callFunc(this.attack_start, this), cc.jumpTo(.4, n, 32, 1), cc.callFunc(this.attack_just, this), cc.jumpTo(.4, i, 32, 1), cc.callFunc(this.attack_finish, this)));
e = t + .4 + .4;
break;

case h.RUSH:
this.node.runAction(cc.sequence(cc.delayTime(t), cc.callFunc(this.attack_start, this), cc.moveTo(.1, n), cc.callFunc(this.attack_just, this), cc.delayTime(.6), cc.jumpTo(.6, i, 32, 1), cc.callFunc(this.attack_finish, this)));
e = t + .1 + .6 + .6;
}
this.change_action(c.ATTACK, 60 * e);
},
attack_start: function() {
this.physics_disable();
this.invincible_enable();
this.animeAttack.length > 0 && this.animation.play(this.animeAttack[this.direction].name);
},
attack_just: function() {
this.flagAttackDistance && a.scene.hero.Damage(this.enemy.attack, this.attackVec);
this.remove_attack_rect();
},
attack_finish: function() {
this.physics_enable();
this.invincible_disable();
},
create_attack_rect: function(e, t) {
if (this.attackRectPrefab) {
var i = cc.instantiate(this.attackRectPrefab);
if (i) {
a.scene.node.addChild(i);
var s = i.getComponent(o);
if (s) {
this.attackRect = s;
var n = Math.atan2(t.y, t.x), c = cc.misc.radiansToDegrees(n);
s.SetInfo(this, e, c, this.attackRectSize);
s.StartWarning();
}
}
}
},
remove_attack_rect: function() {
if (this.attackRect) {
this.attackRect.node.destroy();
this.attackRect = null;
}
},
SetHitBack: function(e) {
this.hitBackVec = e;
},
Damage: function() {
this.seDamage && a.sound.playSE(this.seDamage);
this.stop();
this.remove_attack_rect();
this.change_action(c.DAMAGE, 40);
this.start_hitback(50);
this.animation.pause();
this.node.stopAllActions();
this.node.runAction(cc.sequence(cc.callFunc(this.change_material_brightness, this), cc.delayTime(.1), cc.callFunc(this.change_material_default, this), cc.delayTime(.1), cc.callFunc(this.change_material_brightness, this), cc.delayTime(.1), cc.callFunc(this.change_material_default, this), cc.delayTime(.1), cc.callFunc(this.resume_anime, this)));
},
SetDeadCallback: function(e, t) {
this.deadCallbackFunc = e;
this.deadCallbackTarget = t;
},
Dead: function() {
this.seDamage && a.sound.playSE(this.seDamage);
this.stop();
this.remove_attack_rect();
this.change_action(c.DEAD, 1e3);
this.start_hitback(50);
this.animation.pause();
this.node.stopAllActions();
this.node.runAction(cc.sequence(cc.callFunc(this.change_material_brightness, this), cc.delayTime(.1), cc.callFunc(this.change_material_default, this), cc.delayTime(.1), cc.callFunc(this.change_material_brightness, this), cc.delayTime(.1), cc.callFunc(this.dead_start, this), cc.delayTime(1), cc.callFunc(this.dead_fadeout, this), cc.spawn(cc.fadeOut(.12), cc.scaleTo(.12, 3)), cc.removeSelf()));
},
Ichigeki: function() {
this.seIchigeki && a.sound.playSE(this.seIchigeki);
this.stop();
this.remove_attack_rect();
this.change_action(c.DEAD, 1e3);
this.start_hitback(70);
this.node.color = new cc.Color(255, 255, 0);
this.animation.pause();
this.node.stopAllActions();
this.node.runAction(cc.sequence(cc.callFunc(this.change_material_brightness, this), cc.delayTime(.3), cc.callFunc(this.dead_start, this), cc.delayTime(1), cc.callFunc(this.dead_fadeout, this), cc.spawn(cc.fadeOut(.12), cc.scaleTo(.12, 4)), cc.removeSelf()));
},
dead_start: function() {
this.enemy.HideHpGauge();
this.physics_disable();
},
dead_fadeout: function() {
this.seDead && a.sound.playSE(this.seDead);
this.enemy.DropItem();
this.dead_callback();
},
dead_callback: function() {
if (this.deadCallbackFunc && this.deadCallbackTarget) {
this.node.runAction(cc.callFunc(this.deadCallbackFunc, this.deadCallbackTarget));
this.deadCallbackFunc = null;
this.deadCallbackTarget = null;
}
}
});
cc._RF.pop();
}, {
AttackRect: "AttackRect",
Direction: "Direction",
Game: "Game",
MonsterCollision: "MonsterCollision",
Walker: "Walker"
} ],
MyHouseScene: [ function(e, t) {
"use strict";
cc._RF.push(t, "e78c5TlKplPHYyZ+wo7jSpI", "MyHouseScene");
var i = e("HouseScene"), a = e("Game");
cc.Class({
extends: i,
properties: {
villagerA: cc.Node,
villagerB: cc.Node,
villagerC: cc.Node,
villagerD: cc.Node,
villagerE: cc.Node,
wife: cc.Node,
daughter: cc.Node,
jonathan: cc.Node,
door: cc.Node,
trapRoom: cc.Node
},
onLoad: function() {
this._super();
},
start: function() {
this._super();
this.villagerA.active = a.monoris.IsDestroy("MonorisArea0");
this.villagerB.active = a.monoris.IsDestroy("MonorisArea1");
this.villagerC.active = a.monoris.IsDestroy("MonorisArea2");
this.villagerD.active = a.monoris.IsDestroy("MonorisArea3");
var e = a.monoris.IsDestroy("MonorisArea4");
this.villagerE.active = e;
this.wife.active = e;
this.daughter.active = e;
var t = a.IsTrueEnd();
this.jonathan.active = t;
this.door.active = !t;
this.trapRoom.active = t;
}
});
cc._RF.pop();
}, {
Game: "Game",
HouseScene: "HouseScene"
} ],
NewgameConfirmPopup: [ function(e, t) {
"use strict";
cc._RF.push(t, "2716bPjNTtGZoRf/5lBbpaX", "NewgameConfirmPopup");
var i = e("Popup"), a = e("Game"), s = e("Direction");
cc.Class({
extends: i,
Ok: function() {
this.Hide();
a.settingState(cc.v2(0, 0), s.UP);
a.scene.fadeCover.TransitionFade("TutorialScene", 3, new cc.Color(93, 26, 90));
a.newgame();
}
});
cc._RF.pop();
}, {
Direction: "Direction",
Game: "Game",
Popup: "Popup"
} ],
NotificationMode: [ function(e, t) {
"use strict";
cc._RF.push(t, "28970ArhnNHu43HQOAPKv2+", "NotificationMode");
var i = cc.Enum({
OFF: 0,
MODE1: 1,
MODE2: 2,
ALWAYS: 99
});
t.exports = i;
cc._RF.pop();
}, {} ],
NotificationPopup: [ function(e, t) {
"use strict";
cc._RF.push(t, "a6f2crgTzxMv7w3OIQ83Oug", "NotificationPopup");
var i = e("Popup"), a = e("NotificationMode"), s = e("AppPlatform"), n = e("Game");
cc.Class({
extends: i,
properties: {
spriteCursor: cc.Node
},
ctor: function() {
this.flagUseOk = !1;
},
onLoad: function() {
this._super();
this.posCursor = this.spriteCursor.getPosition();
this.renew_cursor();
n.explorer.IsFirstSetting() || (this.spriteCursor.active = !1);
},
PressAlways: function() {
if (!this.IsNotAvailableButton()) {
this.set_notification_mode(a.ALWAYS);
this.Hide();
}
},
PressMode1: function() {
if (!this.IsNotAvailableButton()) {
this.set_notification_mode(a.MODE1);
this.Hide();
}
},
PressMode2: function() {
if (!this.IsNotAvailableButton()) {
this.set_notification_mode(a.MODE2);
this.Hide();
}
},
PressOff: function() {
if (!this.IsNotAvailableButton()) {
this.set_notification_mode(a.OFF);
this.Hide();
}
},
set_notification_mode: function(e) {
n.explorer.SetNotificationMode(e);
e !== a.ALWAYS && e !== a.MODE1 && e !== a.MODE2 || s.InitLocalPush();
},
renew_cursor: function() {
var e = n.explorer.GetNotificationMode(), t = 0;
e === a.ALWAYS ? t = 0 : e === a.MODE1 ? t = 1 : e === a.MODE2 ? t = 2 : e === a.OFF && (t = 3);
this.spriteCursor.y = this.posCursor.y - 25 * t;
}
});
cc._RF.pop();
}, {
AppPlatform: "AppPlatform",
Game: "Game",
NotificationMode: "NotificationMode",
Popup: "Popup"
} ],
Object: [ function(e, t) {
"use strict";
cc._RF.push(t, "c610cRSUG9GNJOga/9ZKCOv", "Object");
cc.Class({
extends: cc.Component,
properties: {
modelName: ""
},
onLoad: function() {
var e = Math.round(this.node.x), t = Math.round(this.node.y);
this.node.position = cc.v2(e, t);
},
start: function() {
this.refreshZIndex();
},
refreshZIndex: function() {
this.node.zIndex = -this.node.y;
}
});
cc._RF.pop();
}, {} ],
OpenBoxScene: [ function(e, t) {
"use strict";
cc._RF.push(t, "e8ef6GB7OlJD57oNf5RFdV8", "OpenBoxScene");
var i = e("Game"), a = e("FadeCover");
cc.Class({
extends: cc.Component,
properties: {
nodeBase: cc.Node,
nodeBox: cc.Sprite,
frameBoxs: [ cc.SpriteFrame ],
nodeShadow: cc.Node,
particleStar: cc.ParticleSystem,
nodeNew: cc.Node,
buttonNext: cc.Button,
buttonFinish: cc.Button,
buttonSkip: cc.Button,
nodeWindow: cc.Node,
frameRect: cc.SpriteFrame,
labelComp: cc.Label,
labelExplain: cc.Label,
fadeCover: a
},
onLoad: function() {
this.artifact = i.getArtifact();
this.artifactMax = this.artifact.getMax();
this.artifactSprite = null;
this.artifactPos = cc.v2(0, 0);
this.nodeNew.zIndex = 10;
this.nodeBox.spriteFrame = this.frameBoxs[i.getArtifactId()];
var e = i.makeKeyRate;
e >= 90 && (e = 100);
var t;
t = this.artifact.getCompRate() >= 100 ? 1 : e >= 100 ? 300 : Math.floor(this.artifactMax * e * .01);
this.artifactIdx = 0;
for (var a = 0; a < t; a++) {
this.artifactIdx = Math.floor(Math.random() * this.artifactMax);
if (!this.artifact.isHave(this.artifactIdx)) break;
}
var s = this, n = this.artifact.getSpriteName(this.artifactIdx);
cc.resources.load(n, cc.SpriteFrame, function(e, t) {
if (!e && t) {
var i = new cc.Node(), a = i.addComponent(cc.Sprite);
a.spriteFrame = t;
i.scale = 0;
s.nodeBase.addChild(i);
s.artifactSprite = a;
}
});
this.renew_comp_rate();
this.make_artifact();
this.flagNew = this.artifact.doHave(this.artifactIdx);
if (this.flagNew) this.labelExplain.string = i.getLocalizedStr("makekey_nohave", "未入手のものが出ました！"); else {
var o = i.getArtifact().getSellPrice();
i.coin.saveCurrency(o);
var c = i.getLocalizedStr("makekey_duplicate_all");
this.labelExplain.string = c.replace("9999", o);
}
1 == this.artifact.getHaveCount() && 0 == i.inAppReview.IsTriggered("minibox_1st") && i.inAppReview.SetReserve("minibox_1st");
i.item.useNum(this.artifact.getMiniBoxTag(), 0, 1);
},
start: function() {
this.show_box();
},
show_box: function() {
this.nodeBox.node.runAction(cc.sequence(cc.delayTime(.5), cc.moveTo(1, cc.v2(0, 0)).easing(cc.easeIn(3)), cc.jumpBy(.5, cc.v2(0, 0), 50, 1), cc.jumpBy(.3, cc.v2(0, 0), 20, 1), cc.delayTime(.7), cc.callFunc(this.shake_box, this)));
},
shake_box: function() {
this.nodeBox.node.runAction(cc.sequence(cc.moveBy(.1, cc.v2(8, 0)), cc.moveBy(.1, cc.v2(-16, 0)), cc.moveBy(.1, cc.v2(16, 0)), cc.moveBy(.1, cc.v2(-8, 0)), cc.delayTime(.7), cc.callFunc(this.open_box, this)));
},
open_box: function() {
this.nodeBox.node.runAction(cc.scaleTo(.3, 0));
this.nodeShadow.runAction(cc.scaleTo(.3, 0));
this.particleStar.resetSystem();
this.artifactSprite && this.artifactSprite.node.runAction(cc.scaleTo(1.5, 6).easing(cc.easeBounceOut()));
if (this.flagNew) {
this.nodeNew.active = !0;
this.nodeNew.runAction(cc.sequence(cc.delayTime(1.5), cc.fadeTo(0, 255)));
}
this.node.runAction(cc.sequence(cc.delayTime(2), cc.callFunc(this.show_next, this)));
},
show_next: function() {
i.EnablePress();
this.buttonNext.node.active = !0;
this.buttonSkip.node.active = !1;
},
PressNext: function() {
i.IsNotPress() || this.press_next();
},
press_next: function() {
this.nodeShadow.active = !1;
this.nodeBox.node.active = !1;
this.particleStar.stopSystem();
this.particleStar.node.active = !1;
this.nodeNew.active = !1;
this.buttonNext.node.active = !1;
this.show_window();
},
make_artifact: function() {
for (var e = this, t = 0, i = 0, a = this, s = function(s) {
var n = cc.v2(20 * i - 70, -24 * t + 37), o = e.artifact.isHave(s);
s == e.artifactIdx && (e.artifactPos = n);
var c = new cc.Node(), r = c.addComponent(cc.Sprite);
r.sizeMode = cc.Sprite.SizeMode.CUSTOM;
r.spriteFrame = a.frameRect;
c.setContentSize(cc.size(18, 18));
c.position = n;
c.opacity = 100;
a.nodeWindow.addChild(c);
if (++i >= 8) {
t++;
i = 0;
}
if (!o) return "continue";
var h = e.artifact.getSpriteName(s);
cc.resources.load(h, cc.SpriteFrame, function(e, t) {
if (!e && t) {
var i = new cc.Node();
i.addComponent(cc.Sprite).spriteFrame = t;
i.position = n;
a.nodeWindow.addChild(i);
}
});
}, n = 0; n < this.artifactMax; n++) s(n);
},
show_window: function() {
this.nodeWindow.active = !0;
this.nodeWindow.runAction(cc.sequence(cc.moveTo(.4, cc.v2(0, 0)).easing(cc.easeBackOut()), cc.delayTime(1), cc.callFunc(this.show_comp, this)));
this.artifactSprite && this.artifactSprite.node.runAction(cc.sequence(cc.delayTime(.8), cc.spawn(cc.moveTo(.6, this.artifactPos), cc.scaleTo(.6, 1))));
},
show_comp: function() {
this.renew_comp_rate();
this.artifactSprite && this.artifactSprite.node.runAction(cc.repeatForever(cc.blink(1, 2)));
this.labelExplain.node.active = !0;
i.achievement && i.achievement.Unlock("try_artifact");
if (i.achievement) {
var e = this.artifact.getCompRate(), t = i.achievement.ArtifactTagToAchievementTag(i.getArtifactTag());
i.achievement.Progress(t, e);
}
this.node.runAction(cc.sequence(cc.delayTime(.5), cc.callFunc(this.show_finish, this)));
},
renew_comp_rate: function() {
var e = this.artifact.getCompRate();
this.labelComp.string = i.getLocalizedStr("artifact_comp", "コンプリート率") + ": " + e + "%";
},
show_finish: function() {
i.EnablePress();
this.buttonFinish.node.active = !0;
},
PressFinish: function() {
i.IsNotPress() || this.fadeCover.PopScene(1, new cc.Color(255, 255, 255));
},
PressSkip: function() {
if (!i.IsNotPress()) {
this.node.stopAllActions();
this.nodeBox.node.stopAllActions();
this.buttonSkip.node.active = !1;
if (this.artifactSprite) {
this.artifactSprite.node.stopAllActions();
this.artifactSprite.node.scale = 6;
}
this.press_next();
}
}
});
cc._RF.pop();
}, {
FadeCover: "FadeCover",
Game: "Game"
} ],
OptionMenu: [ function(e, t) {
"use strict";
cc._RF.push(t, "690864BO9dD8I9t2rLMk7ND", "OptionMenu");
var i = e("Game");
cc.Class({
extends: cc.Component,
properties: {
buttonArrow: cc.Button,
spriteArrow: cc.Sprite
},
onLoad: function() {
this.flagEasing = !1;
this.flagShow = !1;
this.HideOptionMenu();
},
PressArrow: function() {
this.flagEasing || i.scene.IsPopup() || (0 == this.flagShow ? this.ShowOptionMenu() : this.HideOptionMenu());
},
PressConfig: function() {
if (!i.IsNotPress() && !i.scene.IsPopup()) {
this.ShowConfig();
this.HideOptionMenu();
}
},
ShowOptionMenu: function() {
if (!this.flagEasing || 1 != this.flagShow) {
this.flagEasing = !0;
this.node.runAction(cc.sequence(cc.moveTo(.3, 38, this.node.y).easing(cc.easeBackIn()), cc.callFunc(this.shou_option_finish, this)));
}
},
shou_option_finish: function() {
this.flagEasing = !1;
this.flagShow = !0;
this.spriteArrow.node.rotation = 180;
i.EnablePress();
},
HideOptionMenu: function() {
if (!this.flagEasing || 0 != this.flagShow) {
this.flagEasing = !0;
this.node.runAction(cc.sequence(cc.moveTo(.3, 19, this.node.y).easing(cc.easeBackIn()), cc.callFunc(this.hide_option_finish, this)));
}
},
hide_option_finish: function() {
this.flagEasing = !1;
this.flagShow = !1;
this.spriteArrow.node.rotation = 0;
},
ShowConfig: function() {
i.scene.manager.ShowConfigPopup();
}
});
cc._RF.pop();
}, {
Game: "Game"
} ],
Pet: [ function(e, t) {
"use strict";
cc._RF.push(t, "b2c83RktYVH+ZzunZ/xapXB", "Pet");
var i = e("Resource"), a = e("ResourceState"), s = e("CommandType");
cc.Class({
extends: i,
progress: function(e) {
e >= this.reviveInterval && this.change_state(a.REVIVE);
},
getAvailableCommand: function() {
return this.state >= a.REVIVE ? s.COLLECT : s.NONE;
},
changeLock: function(e) {
this._super(e);
var t = this.node.getComponent(cc.RigidBody);
t && (t.type = e ? cc.RigidBodyType.Static : cc.RigidBodyType.Dynamic);
}
});
cc._RF.pop();
}, {
CommandType: "CommandType",
Resource: "Resource",
ResourceState: "ResourceState"
} ],
PioneerData: [ function(e, t) {
"use strict";
cc._RF.push(t, "5c6e81vPbpKoKnUhqGT7Lvs", "PioneerData");
var i = e("BaseModel"), a = e("SaveData"), s = {
Area0: [ "6DYJNKLgfSztWZSigLNh", "4AG59m2f4fURhfKAHyxB", "FJ6Qz4srsCZgWbtUkMfV", "884ikslghwiehrirw3hfkjwf", "65LxnHfb3L9iRAc6Wxjt", "P2zgxau58dFkG3pCURzj", "wfHdapdLE9PYCTMjCsYc", "YtQj5hZRGDjNeVJYSjKz", "EzgNfKFXr7sEeBPRAmg7", "SbS9655Erzs3a6692kCJ", "5r6NSTdp5B5y8Cg2pEuL", "y2sgNB5AH6VtHC34PSwL", "iKWjKYUTRGgenXhWhZeB", "MdQZzRsyBrhX2ES9aLEu", "Gg3V8JVPknGucH6fwrEM", "XG27n3kafed3K3TDeRFJ", "uBL8zBNMz2ps3a7YyY9s", "bh2bzkQeuKJuLKefkyU4", "LNkwShhrjyggmeNa9HNK", "P3Jut699pDX6rujwpei8", "6afU3XDzWRLpaGeQh2WT", "ayFkRNysLiCCM8XT9D6K", "GkTye435PaKthypTUPX8", "Ku3A3SUnYgYPEmAnB4eL", "xrjKAasyeWXAJsKBuNYa" ],
Area1: [ "s7SQ6cftbuJkFuMJuaC4", "c6m3A4PJzCTFmiDs87b2", "CCZZxgAZubUyTXKuYX6s", "F5rZnNBBaw39rabpXQJ3", "L8bENeV6yzYJFeNCWKnJ", "s96WMwMUx87ipm3nJVkd", "zBE9mx6AU4skh3VefPuH", "kcVNhQPtsnLjugPLuMUp", "CkbBZS4XeQtr53DkTFaj", "9eggnAjXia6fFJ8mwkWV", "gUBg4he7Ayp5tHG5fw6G", "mX5hCSBC8rJSeABXZhjT", "T6897xT9m2LtpXmXaiTJ", "H9RTekK3aY9BsUTsMXy3", "6xF7HuV2pPM83Fct56pm", "Qmh3bU2UeiYUUgmCABc4", "YEarDf74ZUrn5Lidrw59", "Ar3F6ryWbgLd6Q3pnZEP", "XVZptkAARGBQzzNDbix4", "JiFtHMBhYxSsTx4H5ZF6", "zjjAAe54gzHXGTsSwXhp", "Gig8VThpgakp5mPmFshn", "zBhVG9MnnmRDb7bCTBBn", "bANKap9mT3nATmPYS6ig", "paU8TdrpVcdB9EkNj5aG", "8RV9xWHzAjSVRB5wnai4", "uckCnBa7gPMgcSWjC4Ph" ],
Area2_0: [ "Xs9DNyfdEiJJW8Vgtcje", "HWJkgPGyMnhKXQfsaepA", "GSJYVka8gwwiJQCMSnx2", "S3EHeUeik7QMUmUf5d39", "CPXGfUdXF6KEC7hbZ7A9", "Pz3EtB7tp7b9HzL6Zhm3", "wMNA6dkaHgHWCB7y7NaG", "NMgjHF2UX5uig5xRmkLX", "sWrKaeUSgGxXY4QW6QKf", "fjPPsSLpae4BtAwCBZCe", "LSntMSS6AznVg56jMiCm", "ak7G3jDnH7Pf9gmA8ye8", "cKm8MbbnspkJeL84CAnK", "Kp298uKgx2VTDT9MEA9L", "ZxQKhseXRZgpTjkrChh2", "UeihENy6WYMX8esfjcmu", "YThg3GdMHPZBLUJJk6pW", "ES6UFuZZaJBw9XPtYQxE", "ehyrLujguHCbR3ixZVPA" ],
Area2_1: [ "mM9VMQD5BWHQdQ5CgYRc", "z4KdjrGAYKe5NLPfBLCK", "RxLFEA3bMVbKttxFbXsU", "MspSsV9QWXxHfHShzfW2", "8RV2ADydER4rn77BnyPu", "HuVAuRgghz2LCLFjJUba", "55ES96U37MRbhLR3nDa2", "5Zy3jc2jinQduiwNaZue", "6cfuAkiAnDZ6tEK8jAJp", "tZjmLMwpE6Aj9zXFTAgB", "p6Pz3CsGr7DnRLeinBfV", "PV8TTHjVnLGBfyzHW8TT", "XBtjs9VGBsdTRjDCuNs5", "5ff69fxnXBpuwSPhX9Ne", "HYsGTVatyWg7mMH2Ajyb", "WKe3P3tjPYM8m3zuGFMz" ],
Area3: [ "JzY5Q45V5bFErKbSJyeh", "9aXCy5gRSppKLkFtEMUs", "cZS5XXBQsdmsKUChiEQw", "pdBWD8YHn9e9XTHhtLHs", "SxnKQHbZjABPwznWfbzA", "Hcc9YGsh7Pz9QWNCBDBc", "PnSaYKdnYLXApBPecUJF", "bRE7S2LUibMtpxshPp6d", "3btt3nSXBFJD366xLaFS", "pVASsgxmf9VJu35c4AGU", "uRdBNpRU6LVQR3DR9Cps", "Yik97iBxSuEMbdx2TMH2", "cXj5GMTpXANwDPfXKZWf", "tWswefcayAt7CSwxCw6i", "rmJ5RrVewzD339hkKAP5", "cEL7UBrHKz7mfYc2yHez", "uKe4mZXYH2drm62eSssQ", "CxTUttj4r4Z2LzscYzkL", "jmRZ52SVwKw2Z8E8Cduk", "aj2VfZAEdtV2V8Bz7rMm", "TWiweF4u5SjZCRJcaK5P", "fXLFnNHZjmZcxxdD4Lmr", "8NKxVerCrTiHKfLJibXU", "XrNTbBntjY4gB36JugFd", "ChErtx6gWMmeyVhQGk8e", "HruKhpDiMsn3kzDMu4QQ", "Re3LxUhFSsFCP7dMa23s", "ksarnCARwrct933hduPk", "EaFBhcKmMpBfzYNA5icC", "cA6WdAcUHeMUAwGW6mp9" ],
Area4: [ "cs5USbrc47kPfuAkXaMx", "efWiKRLzQTXig7WRmwC2", "4Y6FAWLPLYYBKp8z7CVN", "jhg5EAZD2g8CZNw7Ngyd", "hBRJEU522ksH3GJhmBhr", "hkELusYgVDNxWV2DU6i5", "gZkfypYcEJYG9p494Cxn", "yXbXCwyXmYsrfft8cm7r", "iUYbcUYHutJyLQSusAtG", "39gUCsW4msYt9kNyctNA", "j2rVWZzXLm97ZzmJceRJ", "VWGz6zMJbQxUVeMfgnaG", "AYkg2KJzKgAfiWsK3x88", "FJn2wTTwyQkndCUE9mpy", "Snh89yzKbuwhHjByTzMb", "JmSr5JVxwVtgsLmKJnGN", "CWWLi6mTe2QMeigD4KVY", "TpCVAy4XE4B9rYDN2FJE", "sK3hzYahhet8ZQ6xifUT", "ETzmGsxhfK6P6GrGpi23", "jaw8ktcupu3dhtez2bz6", "af2bd92pkmgsnjkbw9g5", "rr2zn36ujp2957jeakgs", "m5idzdydshwepzaj9rjz", "X63xLndMgieFUpX5BCrz", "QVVHX8zHjDZhkCAsKUmB", "XuVJ6Bk6cfZTkCy8Ymt4", "5AziXenBEw2TZjeetNhh", "7HmrzVWGurEmBE48MR5z", "PAxA37LJUpyFgfA7j4XZ", "kXTckwzxS7hfg8prKP6F" ]
}, n = cc.Class({
extends: i,
init: function(e) {
this._super(e, "PioneerData");
},
load: function() {},
reset: function() {
for (var e in s) for (var t = s[e], i = t.length, n = 0; n < i; n++) a.saveBoolean(t[n] + ".unlock", !1);
},
newgame: function() {
this.reset();
},
CalcRate: function(e) {
if (e in s) {
for (var t = s[e], i = t.length, n = 0, o = 0; o < i; o++) a.loadBoolean(t[o] + ".unlock", !1) && n++;
return Math.floor(n / i * 100);
}
return 0;
},
CalcAllRate: function() {
var e = 0, t = 0;
for (var i in s) {
e++;
t += this.CalcRate(i);
}
return Math.floor(t / e);
}
});
t.exports = n;
cc._RF.pop();
}, {
BaseModel: "BaseModel",
SaveData: "SaveData"
} ],
PioneeringRate: [ function(e, t) {
"use strict";
cc._RF.push(t, "edde1uNEopGt5uA73f6cLBd", "PioneeringRate");
var i = e("TrapSign"), a = e("Unlock"), s = e("House"), n = e("Game");
cc.Class({
extends: i,
properties: {
unlockRate: 80,
unlockBukken: {
type: s,
default: null
},
pioneerTag: ""
},
onLoad: function() {
this._super();
this.unlocks = [];
if ("" == this.pioneerTag) for (var e = this.node.parent.children, t = 0; t < e.length; t++) {
var i = e[t].getComponent(a);
if (i) {
this.unlocks.push(i);
cc.log("'" + i.saveKey + "',");
}
}
this.achievementTag = "";
n.achievement && (this.achievementTag = n.achievement.ProgressAreaTagToAchievementTag(this.pioneerTag));
},
showBalloon: function() {
var e = 0;
if ("" == this.pioneerTag) {
var t = this.unlocks.length;
if (0 == t) return;
for (var i = 0, a = 0; a < t; a++) this.unlocks[a].IsUnlock() && i++;
e = Math.floor(i / t * 100);
} else e = n.pioneerData.CalcRate(this.pioneerTag);
var s = n.getLocalizedStr("pioneer_rate_main"), o = s.replace("9999", e), c = "";
if (this.unlockBukken) {
this.unlockRate <= e && this.unlockBukken.Unlock();
this.unlockBukken.IsLock() && (c = (s = n.getLocalizedStr("pioneer_rate_sub")).replace("9999", this.unlockRate));
}
n.achievement && n.achievement.Progress(this.achievementTag, e);
this.hideBalloon();
this.balloon = n.scene.manager.ShowBalloon(this.node, cc.v2(-12, 15), o + c, !0);
}
});
cc._RF.pop();
}, {
Game: "Game",
House: "House",
TrapSign: "TrapSign",
Unlock: "Unlock"
} ],
Plants: [ function(e, t) {
"use strict";
cc._RF.push(t, "03559f0SVRPsLmSXTaTY9sq", "Plants");
var i = e("Resource"), a = e("ResourceState"), s = e("CommandType");
cc.Class({
extends: i,
properties: {
markSprite: {
type: cc.SpriteFrame,
default: null
},
useMinibox: !0
},
onLoad: function() {
this._super();
this.isMinibox = this.useMinibox;
this.spriteFrame = null;
var e = this.node.getComponent(cc.Sprite);
e && (this.spriteFrame = e.spriteFrame);
},
refreshView: function() {
var e = this.state != a.NONE, t = this.node.getComponent(cc.Sprite);
t && (t.spriteFrame = e ? this.spriteFrame : this.markSprite);
var i = this.node.getComponent(cc.RigidBody);
i && (i.active = e);
},
progress: function(e) {
e >= this.reviveInterval && this.change_state(a.REVIVE);
},
getAvailableCommand: function() {
return this.state >= a.REVIVE ? s.AXE : s.NONE;
}
});
cc._RF.pop();
}, {
CommandType: "CommandType",
Resource: "Resource",
ResourceState: "ResourceState"
} ],
PlatformFacebook: [ function(e, t) {
"use strict";
cc._RF.push(t, "bca4a67WkhK/oCUCH+56pE/", "PlatformFacebook");
var i = e("AdsState"), a = e("CloudSave"), s = "undefined" != typeof FBInstant, n = !1, o = !1, c = !1, r = !1, h = "", u = "", l = null, p = {}, d = {}, m = !1, f = "", g = {
isFacebook: function() {
return cc.sys.isBrowser && s;
},
callMethod: function(e) {
if (e in this == 1) {
for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++) i[a - 1] = arguments[a];
return this[e].apply(this, i);
}
return !1;
},
initPlatform: function() {
f = FBInstant.player.getID();
a.setPlayerID(f);
a.loadSnapshot();
},
InitAdsSDK: function() {
var e = FBInstant.getSupportedAPIs();
n = e.includes("loadBannerAdAsync") && e.includes("hideBannerAdAsync");
o = e.includes("getInterstitialAdAsync");
c = e.includes("getRewardedVideoAsync");
cc.AppPlatform.SuccessInitAdsSDK();
},
CreateBannerAds: function(e, t, i) {
h = i;
},
ShowBannerAds: function() {
if (n && !r) {
r = !0;
FBInstant.loadBannerAdAsync(h);
}
},
HideBannerAds: function() {
if (n) {
r = !1;
FBInstant.hideBannerAdAsync();
}
},
CreateInterstitialAds: function(e, t) {
u = t;
},
IsAvailableInterstitialAds: function() {
return null !== l;
},
LoadInterstitialAds: function(e) {
if (o && !this.IsAvailableInterstitialAds(e)) {
cc.AppPlatform.SetAdsState(e, i.LOADING);
FBInstant.getInterstitialAdAsync(u).then(function(e) {
return (l = e).loadAsync();
}).then(function() {
cc.log("Interstitial preloaded");
cc.AppPlatform.SetAdsState(e, i.READY);
}).catch(function(t) {
console.error("Interstitial failed to preload: " + t.message);
l = null;
cc.AppPlatform.SetAdsState(e, i.ERROR);
});
}
},
ShowInterstitialAds: function(e) {
if (o && this.IsAvailableInterstitialAds(e)) {
cc.AppPlatform.SetAdsState(e, i.NONE);
l.showAsync().then(function() {
cc.log("Interstitial ad finished successfully");
l = null;
cc.AppPlatform.CloseInterstitialAds(e);
}).catch(function(t) {
console.error("Interstitial ad failed: " + t.message);
l = null;
cc.AppPlatform.CloseInterstitialAds(e);
});
}
},
get_rewarded: function(e) {
return e in d ? d[e] : null;
},
CreateRewardedAds: function(e, t) {
p[e] = t;
d[e] = null;
},
IsAvailableRewardedAds: function(e) {
return null !== this.get_rewarded(e);
},
LoadRewardedAds: function(e) {
if (c) {
var t = p[e];
if (t && !this.IsAvailableRewardedAds(e)) {
cc.AppPlatform.SetAdsState(e, i.LOADING);
FBInstant.getRewardedVideoAsync(t).then(function(t) {
d[e] = t;
return t.loadAsync();
}).then(function() {
cc.AppPlatform.SetAdsState(e, i.READY);
cc.log("Rewarded video preloaded");
}).catch(function(t) {
console.error("Rewarded video failed to preload: " + t.message);
d[e] = null;
cc.AppPlatform.SetAdsState(e, i.ERROR);
});
}
}
},
ShowRewardedAds: function(e) {
if (c) {
var t = this.get_rewarded(e);
if (t && this.IsAvailableRewardedAds(e)) {
cc.AppPlatform.SetAdsState(e, i.NONE);
t.showAsync().then(function() {
cc.log("Rewarded video watched successfully");
d[e] = null;
cc.AppPlatform.SuccessRewardedAds(e);
cc.AppPlatform.CloseRewardedAds(e);
}).catch(function(t) {
console.error("Rewarded video failed: " + t.message);
d[e] = null;
cc.AppPlatform.CloseRewardedAds(e);
});
}
}
},
IsPurchaseAvailable: function() {
return m;
},
PurchaseRegister: function() {
m = !1;
FBInstant.getSupportedAPIs().includes("payments.getCatalogAsync") ? FBInstant.payments.onReady(function() {
cc.log("AAABBB: Payments Ready!");
m = !0;
cc.PurchaseManager.initSuccessed();
}) : cc.PurchaseManager.initFailed();
},
PurchaseUnregister: function() {
m = !1;
},
PurchaseFetchStart: function() {
FBInstant.payments.getCatalogAsync().then(function(e) {
for (var t = 0; t < e.length; t++) {
var i = e[t];
cc.PurchaseManager.fetchProduct(i.productID, i.title, i.description, 1, i.price);
}
cc.PurchaseManager.fetchSuccessed();
}).catch(function() {
cc.PurchaseManager.fetchFailed();
});
},
PurchaseRefresh: function() {},
PurchaseBuy: function(e) {
FBInstant.payments.purchaseAsync({
productID: e
}).then(function(t) {
if (t.productID == e) {
cc.log("AAABBB: purchaseAsync success! " + e);
cc.PurchaseManager.purchased(e);
} else cc.PurchaseManager.failed();
}).catch(function(e) {
"USER_INPUT" == e.code ? cc.PurchaseManager.canceled() : cc.PurchaseManager.failed();
});
},
PurchaseRestore: function() {
FBInstant.payments.getPurchasesAsync().then(function(e) {
for (var t = 0; t < e.length; t++) {
var i = e[t];
cc.PurchaseManager.restored(i.productID);
}
cc.PurchaseManager.restoreSuccessed();
}).catch(function() {
cc.PurchaseManager.restoreFailed();
});
},
CheckUMP: function() {
cc.AppPlatform.SuccessCheckUMP();
},
ShareDialog: function(e) {
if ("undefined" != typeof FBInstant && FBInstant.shareAsync) {
var t = e;
FBInstant.shareAsync({
intent: "SHARE",
image: "data:image/png;base64,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",
text: t,
data: {
from: "signboard",
scene: "farm",
action: "share"
}
}).then(function() {
console.log("share success");
}).catch(function(e) {
console.log("share error:", e);
});
}
}
};
t.exports = g;
cc._RF.pop();
}, {
AdsState: "AdsState",
CloudSave: "CloudSave"
} ],
PlatformTikTok: [ function(e, t) {
"use strict";
cc._RF.push(t, "7578dCW5fBH255OjYeXQy/p", "PlatformTikTok");
var i = e("AdsState"), a = "undefined" != typeof TTMinis && TTMinis.game, s = !1, n = !1, o = "", c = null, r = {}, h = {}, u = !1, l = {
isTikTok: function() {
return a;
},
callMethod: function(e) {
if (e in this == 1) {
for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++) i[a - 1] = arguments[a];
return this[e].apply(this, i);
}
return !1;
},
initPlatform: function() {
FBInstant.player.getID();
},
InitAdsSDK: function() {
s = a && "function" == typeof TTMinis.game.createInterstitialAd;
n = a && "function" == typeof TTMinis.game.createRewardedVideoAd;
cc.AppPlatform.SuccessInitAdsSDK();
},
CreateBannerAds: function() {},
ShowBannerAds: function() {},
HideBannerAds: function() {},
CreateInterstitialAds: function(e, t) {
o = t;
},
IsAvailableInterstitialAds: function() {
return null !== c;
},
LoadInterstitialAds: function(e) {
if (s && !this.IsAvailableInterstitialAds(e)) {
cc.AppPlatform.SetAdsState(e, i.LOADING);
try {
var t = TTMinis.game.createInterstitialAd({
adUnitId: o
});
c = t;
cc.AppPlatform.SetAdsState(e, i.READY);
cc.log("Interstitial preloaded");
} catch (t) {
console.error("Interstitial failed to preload:", t);
c = null;
cc.AppPlatform.SetAdsState(e, i.ERROR);
}
}
},
ShowInterstitialAds: function(e) {
if (s && this.IsAvailableInterstitialAds(e)) {
var t = c;
cc.AppPlatform.SetAdsState(e, i.NONE);
c = null;
var a = function i() {
t.offClose(i);
t.offError(n);
cc.log("Interstitial ad finished successfully");
cc.AppPlatform.CloseInterstitialAds(e);
}, n = function i(s) {
t.offError(i);
t.offClose(a);
console.error("Interstitial ad failed:", s);
cc.AppPlatform.CloseInterstitialAds(e);
};
t.onClose(a);
t.onError(n);
t.show().then(function() {
cc.log("Interstitial ad displayed");
}).catch(function(i) {
t.offClose(a);
t.offError(n);
console.error("Interstitial display failed:", i);
cc.AppPlatform.CloseInterstitialAds(e);
});
}
},
get_rewarded: function(e) {
return e in h ? h[e] : null;
},
CreateRewardedAds: function(e, t) {
r[e] = t;
h[e] = null;
},
IsAvailableRewardedAds: function(e) {
return null !== this.get_rewarded(e);
},
LoadRewardedAds: function(e) {
if (n) {
var t = r[e];
if (t && !this.IsAvailableRewardedAds(e)) {
cc.AppPlatform.SetAdsState(e, i.LOADING);
try {
var a = TTMinis.game.createRewardedVideoAd({
adUnitId: t
});
h[e] = a;
cc.AppPlatform.SetAdsState(e, i.READY);
cc.log("Rewarded video preloaded");
} catch (t) {
console.error("Rewarded video failed to preload:", t);
h[e] = null;
cc.AppPlatform.SetAdsState(e, i.ERROR);
}
}
}
},
ShowRewardedAds: function(e) {
if (n) {
var t = this.get_rewarded(e);
if (t && this.IsAvailableRewardedAds(e)) {
cc.AppPlatform.SetAdsState(e, i.NONE);
h[e] = null;
var a = function i(a) {
t.offClose(i);
t.offError(s);
if (a.isEnded) {
cc.log("Rewarded video watched successfully");
cc.AppPlatform.SuccessRewardedAds(e);
} else cc.log("Rewarded video closed before completion");
cc.AppPlatform.CloseRewardedAds(e);
}, s = function i(s) {
t.offError(i);
t.offClose(a);
console.error("Rewarded video failed:", s);
cc.AppPlatform.CloseRewardedAds(e);
};
t.onClose(a);
t.onError(s);
t.show().then(function() {
cc.log("Rewarded video ad displayed");
}).catch(function(i) {
t.offClose(a);
t.offError(s);
console.error("Rewarded video display failed:", i);
cc.AppPlatform.CloseRewardedAds(e);
});
}
}
},
IsPurchaseAvailable: function() {
return u;
},
PurchaseRegister: function() {
u = !1;
FBInstant.getSupportedAPIs().includes("payments.getCatalogAsync") ? FBInstant.payments.onReady(function() {
cc.log("AAABBB: Payments Ready!");
u = !0;
cc.PurchaseManager.initSuccessed();
}) : cc.PurchaseManager.initFailed();
},
PurchaseUnregister: function() {
u = !1;
},
PurchaseFetchStart: function() {
FBInstant.payments.getCatalogAsync().then(function(e) {
for (var t = 0; t < e.length; t++) {
var i = e[t];
cc.PurchaseManager.fetchProduct(i.productID, i.title, i.description, 1, i.price);
}
cc.PurchaseManager.fetchSuccessed();
}).catch(function() {
cc.PurchaseManager.fetchFailed();
});
},
PurchaseRefresh: function() {},
PurchaseBuy: function(e) {
FBInstant.payments.purchaseAsync({
productID: e
}).then(function(t) {
if (t.productID == e) {
cc.log("AAABBB: purchaseAsync success! " + e);
cc.PurchaseManager.purchased(e);
} else cc.PurchaseManager.failed();
}).catch(function(e) {
"USER_INPUT" == e.code ? cc.PurchaseManager.canceled() : cc.PurchaseManager.failed();
});
},
PurchaseRestore: function() {
FBInstant.payments.getPurchasesAsync().then(function(e) {
for (var t = 0; t < e.length; t++) {
var i = e[t];
cc.PurchaseManager.restored(i.productID);
}
cc.PurchaseManager.restoreSuccessed();
}).catch(function() {
cc.PurchaseManager.restoreFailed();
});
},
CheckUMP: function() {
cc.AppPlatform.SuccessCheckUMP();
},
ShareDialog: function(e) {
if ("undefined" != typeof FBInstant && FBInstant.shareAsync) {
var t = e;
FBInstant.shareAsync({
intent: "SHARE",
image: "data:image/png;base64,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",
text: t,
data: {
from: "signboard",
scene: "farm",
action: "share"
}
}).then(function() {
console.log("share success");
}).catch(function(e) {
console.log("share error:", e);
});
}
}
};
t.exports = l;
cc._RF.pop();
}, {
AdsState: "AdsState"
} ],
PlayTime: [ function(e, t) {
"use strict";
cc._RF.push(t, "26e47wxkuVPfbVWm587cmk0", "PlayTime");
var i = e("Counter"), a = cc.Class({
extends: i,
init: function(e) {
this._super(e, "PlayTime", 0);
this.playStart = 0;
this.playLaunch = 0;
},
load: function() {
this._super();
this.startTime();
this.playLaunch = this.playStart;
},
getTime: function() {
return this.getCount();
},
startTime: function() {
this.playStart = this.get_now_time();
},
saveTime: function() {
var e = this.get_now_time();
if (!(e <= this.playStart)) {
var t = e - this.playStart;
this.addCount(t);
this.playStart = e;
}
},
getPlayLaunchTime: function() {
return this.get_now_time() - this.playLaunch;
},
get_now_time: function() {
return Math.floor(Date.now() / 1e3);
}
});
t.exports = a;
cc._RF.pop();
}, {
Counter: "Counter"
} ],
PopupCallback: [ function(e, t) {
"use strict";
cc._RF.push(t, "5759cFX/N1Nb7uOqmyzvdAP", "PopupCallback");
var i = e("Popup");
cc.Class({
extends: i,
ctor: function() {
this.callbackHideFunc = null;
this.callbackHideTarget = null;
this.callbackCloseFunc = null;
this.callbackCloseTarget = null;
},
SetCallbackHide: function(e, t) {
this.callbackHideFunc = e;
this.callbackHideTarget = t;
},
SetCallbackClose: function(e, t) {
this.callbackCloseFunc = e;
this.callbackCloseTarget = t;
},
Hide: function() {
if (0 == this._super()) return !1;
this.callbackHideFunc && this.callbackHideTarget && this.callbackHideFunc.call(this.callbackHideTarget);
return !0;
},
hide_finish: function() {
this.callbackCloseFunc && this.callbackCloseTarget && this.callbackCloseFunc.call(this.callbackCloseTarget);
this._super();
}
});
cc._RF.pop();
}, {
Popup: "Popup"
} ],
PopupPurchase: [ function(e, t) {
"use strict";
cc._RF.push(t, "d936df0H5tDv4QNNlAGt4CY", "PopupPurchase");
var i = e("Popup"), a = e("Game"), s = e("AppPlatform"), n = e("PurchaseManager"), o = e("PurchaseResult"), c = e("PurchaseContentType"), r = [ cc.color(255, 255, 255), cc.color(210, 210, 210), cc.color(255, 210, 0), cc.color(127, 255, 255) ], h = [ {
type: c.LINE_SPACE
}, {
type: c.TITLE,
title: "purchase_restore_title"
}, {
type: c.TEXT,
text: "purchase_restore_text"
}, {
type: c.BUTTON,
label: "purchase_restore_button",
width: 120,
tag: "restore"
} ], u = [ {
type: c.LINE_SPACE
}, {
type: c.TITLE,
title: "purchase_error_title"
}, {
type: c.TEXT,
text: "purchase_error_text"
} ];
cc.Class({
extends: i,
properties: {
contents: cc.Node,
prefabTitle: cc.Prefab,
prefabText: cc.Prefab,
prefabSprite: cc.Prefab,
prefabButton: cc.Prefab,
prefabRank: cc.Prefab,
prefabEditName: cc.Prefab,
coverIndicator: cc.Node
},
ctor: function() {
this.purchaseItems = null;
this.explainOrders = [];
this.orderMax = 0;
this.orderIdx = 0;
this.baseY = 0;
this.lastOrder = c.NONE;
this.lastNode = null;
this.flagProcessing = !1;
this.flagUseOk = !1;
this.flagRestore = !1;
},
onLoad: function() {
this._super();
this.indicatorOn();
n.init();
cc.director.getScheduler().schedule(this.checkResult, this, 1, cc.macro.REPEAT_FOREVER, 0, !1);
},
Hide: function() {
if (0 != this.isEnableAction()) {
this._super();
n.deinit();
this.callbackHidePopup && this.callbackHidePopup();
}
},
callbackHidePopup: null,
SetCallbackHidePopup: function(e) {
this.callbackHidePopup = e;
},
RefreshAll: function() {
cc.isValid(this) && cc.isValid(this.node) && this.node.runAction(cc.callFunc(this.buildAll, this));
},
indicatorOn: function() {
this.coverIndicator.active = !0;
this.flagProcessing = !0;
},
indicatorOff: function() {
this.coverIndicator.active = !1;
this.flagProcessing = !1;
a.EnablePress();
},
isEnableAction: function() {
return 1 != this.flagProcessing;
},
isEnableButton: function() {
return 0 != this.isEnableAction() && !this.IsNotAvailableButton();
},
addRestoreMenu: function() {
this.explainOrders = this.explainOrders.concat(h);
},
buildAll: function() {
this.explainOrders = [];
0 == n.isReady() ? this.explainOrders = this.explainOrders.concat(u) : this.make_contents_order();
this.orderMax = this.explainOrders.length;
this.orderIdx = 0;
this.baseY = 0;
this.lastOrder = c.NONE;
this.lastNode = null;
this.contents.destroyAllChildren();
this.buildNode();
},
buildNode: function() {
if (this.orderIdx >= this.orderMax) this.buildNext(); else {
var e = this.explainOrders[this.orderIdx];
this.lastNode = null;
this.lastOrder = e.type;
this.orderIdx++;
switch (this.lastOrder) {
case c.TITLE:
this.buildTitle(a.getLocalizedStr(e.title));
return;

case c.TEXT:
this.buildText(a.getLocalizedStr(e.text));
return;

case c.SPRITE:
this.buildSprite(e.sprite);
return;

case c.LINE_SPACE:
this.baseY -= 12;
break;

case c.BUTTON:
var t = this.make_button_string(e.tag, e.label);
this.buildButton(t, e.width, e.tag);
return;

case c.RANK:
this.buildRank();
return;

case c.PREFAB:
this.buildPrefab(e.prefab);
return;
}
null == this.lastNode && this.buildNext();
}
},
buildNext: function() {
if (null != this.lastNode) {
var e = this.lastOrder == c.TITLE || this.lastOrder == c.TEXT || this.lastOrder == c.RANK ? a.fontScale : 1;
this.baseY -= this.lastNode.height * e;
this.lastNode = null;
}
if (this.orderIdx < this.orderMax) this.node.runAction(cc.sequence(cc.delayTime(.01), cc.callFunc(this.buildNode, this))); else {
this.contents.height = -this.baseY;
this.indicatorOff();
}
},
buildTitle: function(e) {
var t = cc.instantiate(this.prefabTitle);
if (t) {
this.lastNode = t;
this.contents.addChild(t);
t.setPosition(cc.v2(0, this.baseY));
var i = t.getComponent(cc.Label);
if (i) {
i.string = e;
i._forceUpdateRenderData();
this.buildNext();
}
}
},
buildText: function(e) {
var t = cc.instantiate(this.prefabText);
if (t) {
this.lastNode = t;
this.contents.addChild(t);
t.setPosition(cc.v2(0, this.baseY));
var i = t.getComponent(cc.Label);
if (i) {
i.string = e;
i._forceUpdateRenderData();
this.buildNext();
}
}
},
buildSprite: function(e) {
var t = cc.instantiate(this.prefabSprite);
if (t) {
this.lastNode = t;
this.contents.addChild(t);
this.baseY -= 4;
t.setPosition(cc.v2(0, this.baseY));
this.baseY -= 4;
var i = t.getComponent(cc.Sprite);
if (i) {
t.on(cc.Node.EventType.SIZE_CHANGED, this.buildNext, this);
i.spriteFrame = e;
}
}
},
buildButton: function(e, t, i) {
var a = cc.instantiate(this.prefabButton);
if (a) {
this.lastNode = a;
this.contents.addChild(a);
a.setPosition(cc.v2(0, this.baseY));
a.width = t;
this.baseY -= 2;
var s = a.getComponent(cc.Button);
s && this.setting_button(s, i);
var n = cc.find("Background/Label", a);
if (n) {
var o = n.getComponent(cc.Label);
o && (o.string = e);
}
this.buildNext();
}
},
buildRank: function() {
var e = cc.instantiate(this.prefabRank);
if (e) {
this.lastNode = e;
this.contents.addChild(e);
e.setPosition(cc.v2(0, this.baseY));
var t = e.getComponent(cc.Label);
if (t) {
var i = a.purchase.GetSponserRank(), s = r[i];
e.color = s;
e.runAction(cc.repeatForever(cc.sequence(cc.tintTo(.6, new cc.Color(255, 255, 255)), cc.tintTo(.6, s))));
t.string = a.purchase.GetSponserRankStr();
t._forceUpdateRenderData();
this.buildNext();
}
}
},
buildPrefab: function(e) {
var t = cc.instantiate(e);
if (t) {
this.lastNode = t;
this.contents.addChild(t);
t.setPosition(cc.v2(0, this.baseY));
this.buildNext();
}
},
purchaseStart: function(e) {
if (0 != this.isEnableAction()) {
this.indicatorOn();
n.buy(e);
}
},
restoreStart: function() {
if (!this.flagRestore && 0 != this.isEnableAction()) {
this.flagRestore = !0;
this.indicatorOn();
n.restore();
}
},
restore_finish: function() {
a.purchase.SyncServer();
},
hide_banner_ads: function() {
if (a.purchase.IsRemoveAds()) {
var e = a.getBannerTag();
s.HideBannerAds(e);
}
},
checkResult: function() {
switch (n.getResultCode()) {
case o.PurchaseResultNone:
return;

case o.PurchaseResultInitialized:
n.fetch();
return;

case o.PurchaseResultInitFailed:
this.RefreshAll();
break;

case o.PurchaseResultFetchSuccessed:
this.RefreshAll();
this.node.runAction(cc.sequence(cc.delayTime(.1), cc.callFunc(this.refreshPurchase, this)));
break;

case o.PurchaseResultFetchFailed:
this.RefreshAll();
break;

case o.PurchaseResultPurchased:
this.RefreshAll();
this.hide_banner_ads();
this.flagCloudSave = !0;
break;

case o.PurchaseResultFailed:
case o.PurchaseResultCanceled:
break;

case o.PurchaseResultRestoreSuccessed:
this.restore_finish();
this.RefreshAll();
this.hide_banner_ads();
this.flagCloudSave = !0;
break;

case o.PurchaseResultRestoreFailed:
case o.PurchaseResultDeferred:
}
this.indicatorOff();
},
refreshPurchase: function() {
n.refresh();
},
setSponserName: function() {
var e = cc.instantiate(this.prefabEditName);
if (e) {
a.scene.camera.node.addChild(e);
var t = e.getComponent("EditNamePopup");
t && t.ShowWithPopup(this);
}
},
make_contents_order: function() {},
make_button_string: function() {},
setting_button: function() {}
});
cc._RF.pop();
}, {
AppPlatform: "AppPlatform",
Game: "Game",
Popup: "Popup",
PurchaseContentType: "PurchaseContentType",
PurchaseManager: "PurchaseManager",
PurchaseResult: "PurchaseResult"
} ],
PopupReward: [ function(e, t) {
"use strict";
cc._RF.push(t, "48fabJeJeFCz6kbaTgxWsIl", "PopupReward");
var i = e("Popup"), a = e("Game"), s = e("AppPlatform");
cc.Class({
extends: i,
properties: {
rewardedName: "",
buttonOk: cc.Button,
labelOk: cc.Label,
buttonConfig: cc.Button
},
onLoad: function() {
this._super();
this.buttonConfig.node.active = !1;
this.isUseVideo() && s.LoadRewardedAds(this.rewardedName);
},
Show: function() {
if (this._super()) {
var e = !1;
this.isUseVideo() ? (e = s.IsAdsStateReady(this.rewardedName)) && (e = s.IsAvailableRewardedAds(this.rewardedName)) : e = !0;
this.customButtonOk(e);
if (!e) if (a.flagGooglePCGames) a.labelEffectError(this.labelOk); else {
a.labelEffectLoading(this.labelOk);
cc.director.getScheduler().schedule(this.checkAdsState, this, .1, cc.macro.REPEAT_FOREVER, .5, !1);
}
this.showSub();
return !0;
}
return !1;
},
Ok: function() {
this.isUseVideo() ? s.ShowRewardedAds(this.rewardedName) : this.okSkipSub();
this.Hide();
},
Cancel: function() {
this.cancelSub();
this.Hide();
},
PressConfig: function() {
if (!this.IsNotAvailableButton()) {
this.buttonConfig.node.active = !1;
a.scene.manager.ShowUMPPopup();
}
},
checkAdsState: function() {
if (s.IsAdsStateReady(this.rewardedName)) {
cc.director.getScheduler().unschedule(this.checkAdsState, this);
this.customButtonOk(!0);
a.labelEffectReady(this.labelOk);
} else if (s.IsAdsStateNotReady(this.rewardedName)) {
cc.director.getScheduler().unschedule(this.checkAdsState, this);
a.labelEffectError(this.labelOk);
cc.sys.isNative && s.IsNetworked() && s.IsCustomUMP() && (this.buttonConfig.node.active = !0);
}
},
showSub: function() {},
okSkipSub: function() {},
cancelSub: function() {},
isUseVideo: function() {
return !s.isWebTest() && !a.purchase.IsSkipVideo();
},
customButtonOk: function(e) {
this.buttonOk.interactable = e;
this.flagUseOk = e;
if (a.purchase.IsSkipVideo()) {
var t = this.buttonOk.node.getChildByName("Background");
t && (t.color = new cc.color(0, 255, 0));
}
}
});
cc._RF.pop();
}, {
AppPlatform: "AppPlatform",
Game: "Game",
Popup: "Popup"
} ],
Popup: [ function(e, t) {
"use strict";
cc._RF.push(t, "70525IOhONMwIEwFFrvCk+2", "Popup");
var i = e("Game");
cc.Class({
extends: cc.Component,
properties: {
window: cc.Node,
cover: {
type: cc.Node,
default: null
}
},
ctor: function() {
this.flagOpen = !1;
this.flagShow = !1;
this.flagCloudSave = !1;
this.flagUseOk = !0;
this.flagUseCancel = !0;
this.flagUseTouchHide = !0;
},
onLoad: function() {
this.window.scale = 0;
this.cover && (this.cover.opacity = 0);
},
IsOpen: function() {
return this.flagOpen;
},
IsShow: function() {
return this.flagShow;
},
Show: function() {
if (1 == this.flagOpen) return !1;
this.flagOpen = !0;
this.node.active = !0;
this.touch_on();
this.cover && this.cover.runAction(cc.fadeTo(.1, 127));
this.window.runAction(cc.sequence(cc.scaleTo(.4, 1).easing(cc.easeInOut(3)), cc.callFunc(this.show_finish, this)));
return !0;
},
show_finish: function() {
this.flagShow = !0;
i.EnablePress();
i.scene && i.scene.PopupRegist(this);
},
Hide: function() {
if (0 == this.flagShow) return !1;
this.flagShow = !1;
i.scene && i.scene.PopupUnregist();
this.cover && this.cover.runAction(cc.fadeTo(.1, 0));
this.window.runAction(cc.sequence(cc.scaleTo(.1, 0), cc.callFunc(this.hide_finish, this)));
return !0;
},
hide_finish: function() {
this.cloudSave();
this.touch_off();
this.flagOpen = !1;
this.node.active = !1;
i.EnablePress();
this.node.destroy();
},
PressOk: function() {
this.flagUseOk && (this.IsNotAvailableButton() || this.Ok());
},
PressCancel: function() {
this.flagUseCancel && (this.IsNotAvailableButton() || this.Cancel());
},
Ok: function() {},
Cancel: function() {
this.Hide();
},
touch_on: function() {
this.node.on(cc.Node.EventType.TOUCH_START, function(e) {
e.stopPropagationImmediate();
e.unuse();
this.touchStart();
}, this);
this.node.on(cc.Node.EventType.TOUCH_MOVE, function(e) {
e.stopPropagationImmediate();
e.unuse();
this.touchMove();
}, this);
this.node.on(cc.Node.EventType.TOUCH_END, function(e) {
e.stopPropagationImmediate();
e.unuse();
this.touchEnd();
}, this);
this.node.on(cc.Node.EventType.TOUCH_CANCEL, function(e) {
e.stopPropagationImmediate();
e.unuse();
this.touchCancel();
}, this);
i.scene && i.scene.PauseInput();
i.scene && i.scene.hero.DisableDamage();
},
touch_off: function() {
this.node.off(cc.Node.EventType.TOUCH_START);
this.node.off(cc.Node.EventType.TOUCH_MOVE);
this.node.off(cc.Node.EventType.TOUCH_END);
this.node.off(cc.Node.EventType.TOUCH_CANCEL);
i.scene && i.scene.ResumeInput();
i.scene && i.scene.hero.EnableDamage();
},
touchStart: function() {},
touchMove: function() {},
touchEnd: function() {
this.flagUseTouchHide && this.Cancel();
},
touchCancel: function() {},
IsNotAvailableButton: function() {
return 0 == this.flagShow || i.IsNotPress();
},
cloudSave: function() {
this.flagCloudSave && i.savedGames && i.savedGames.sendData();
}
});
cc._RF.pop();
}, {
Game: "Game"
} ],
PrivateAreaPopup: [ function(e, t) {
"use strict";
cc._RF.push(t, "928dfBeWEZKUoeqyNddD49R", "PrivateAreaPopup");
var i = e("PopupReward"), a = e("Game");
cc.Class({
extends: i,
okSkipSub: function() {
if (a.scene.targetPrivateArea) {
a.scene.targetPrivateArea.OpenGateKey();
a.scene.targetPrivateArea.OpenArea();
}
},
cancelSub: function() {
a.scene.targetPrivateArea = null;
}
});
cc._RF.pop();
}, {
Game: "Game",
PopupReward: "PopupReward"
} ],
PrivateArea: [ function(e, t) {
"use strict";
cc._RF.push(t, "e4083Jyr/tAh4uWx7pI35cw", "PrivateArea");
var i = e("Gate"), a = e("CommandType"), s = e("Game"), n = e("SaveData"), o = e("Resource"), c = (e("ResourceState"), 
e("ResourceManager")), r = (e("AppPlatform"), cc.Enum({
CLOSE: 0,
READY: 1,
OPEN: 2
}));
cc.Class({
extends: i,
properties: {
checkMe: cc.Node,
balloon: cc.Node,
label: cc.Label,
rect: cc.Node,
reviveInterval: 600,
timeLimit: 30,
returnPos: {
type: cc.Vec,
default: cc.v2(0, 0)
},
resources: [ o ]
},
onLoad: function() {
this._super();
this.limitCount = 0;
this.flagGateKey = !1;
this.areaState = r.CLOSE;
this.startTime = n.loadNumber(this.savekey + ".startTime", 0);
this.refreshView();
var e = this.node.parent.getComponent(c);
e && e.RegistResource(this);
},
CheckStatePoll: function(e) {
this.areaState == r.CLOSE && this.progress(e - this.startTime);
},
OpenGateKey: function() {
this.flagGateKey = !0;
},
OpenArea: function() {
this.node.runAction(cc.callFunc(this._openArea, this));
},
_openArea: function() {
s.scene.targetPrivateArea = null;
this.reset_time();
if (0 != this.flagGateKey) {
this.flagGateKey = !1;
if (this.areaState == r.READY) {
this.changeState(r.OPEN);
this.limitCount = this.timeLimit;
cc.director.getScheduler().schedule(this.updateLimitCount, this, 1, !1);
this.balloon.active = !0;
this.label.string = "" + this.limitCount;
}
} else this.changeState(r.CLOSE);
},
progress: function(e) {
e >= this.reviveInterval + this.timeLimit && this.revive();
},
revive: function() {
this.changeState(r.READY);
for (var e = 0; e < this.resources.length; e++) this.resources[e].revive();
},
reset_time: function() {
this.startTime = Math.floor(Date.now() / 1e3);
n.saveNumber(this.savekey + ".startTime", this.startTime);
},
getAvailableCommand: function() {
return this.areaState == r.READY || this.areaState == r.CLOSE && this.messages.length > 0 ? a.EVENT : a.NONE;
},
execCommand: function(e) {
if (e == a.EVENT) if (this.areaState == r.CLOSE && this.messages.length > 0) {
var t = s.getLocalizedStr(this.messages[this.mesIdx++], "まだ準備中みたい");
s.scene.hero.ShowSerif(t);
this.mesIdx >= this.messages.length && (this.mesIdx = 0);
} else if (this.areaState == r.READY) {
s.scene.targetPrivateArea = this;
s.scene.manager.ShowPrivateAreaPopup();
}
},
changeState: function(e) {
if (this.areaState != e) {
this.areaState = e;
this.refreshView();
return !0;
}
return !1;
},
refreshView: function() {
this.checkMe.active = this.areaState == r.READY;
this.balloon.active = this.areaState == r.OPEN;
this.SetLock(this.areaState != r.OPEN);
},
updateLimitCount: function() {
this.limitCount--;
this.label.string = "" + this.limitCount;
if (this.limitCount < 0) {
this.limitCount = 0;
cc.director.getScheduler().unschedule(this.updateLimitCount, this);
this.balloon.active = !1;
this.changeState(r.CLOSE);
var e = this.rect.getBoundingBox();
e.origin = this.rect.parent.convertToWorldSpaceAR(e.origin);
var t = s.scene.hero.node.parent.convertToWorldSpaceAR(s.scene.hero.node.position);
e.contains(t) && (s.scene.hero.node.position = this.returnPos);
}
}
});
cc._RF.pop();
}, {
AppPlatform: "AppPlatform",
CommandType: "CommandType",
Game: "Game",
Gate: "Gate",
Resource: "Resource",
ResourceManager: "ResourceManager",
ResourceState: "ResourceState",
SaveData: "SaveData"
} ],
PurchaseBukkenPopup: [ function(e, t) {
"use strict";
cc._RF.push(t, "2a574iT9iBKeIWUmwEe/Wjx", "PurchaseBukkenPopup");
var i = e("PopupPurchase"), a = e("Game"), s = e("PurchaseManager"), n = e("PurchaseContentType");
cc.Class({
extends: i,
properties: {
prefabBonus: [ cc.Prefab ]
},
ctor: function() {
this.product_name = "";
},
onLoad: function() {
this.purchaseItems = [];
this._super();
},
ShowWithBukkenTag: function(e) {
this.Show() && this.set_bukken_tag(e);
},
make_contents_order: function() {
for (var e = 0; e < this.purchaseItems.length; e++) {
var t = this.purchaseItems[e], i = s.getProductData(t.tag);
null == i && (i = {
price: "ERROR"
});
var a = [ {
type: n.TITLE,
title: t.title
}, {
type: n.TEXT,
text: t.text
}, {
type: n.PREFAB,
prefab: t.prefab
}, {
type: n.BUTTON,
label: i.price,
width: 80,
tag: t.tag
} ];
this.explainOrders = this.explainOrders.concat(a);
}
this.addRestoreMenu();
},
make_button_string: function(e, t) {
var i = a.getLocalizedStr(t);
e == this.product_name && a.purchase.IsSkipBukken(this.product_name) && (i = a.getLocalizedStr("purchase_paid"));
return i;
},
setting_button: function(e, t) {
if (t == this.product_name) {
e.interactable = !a.purchase.IsSkipBukken(this.product_name);
e.node.on("click", function() {
0 != this.isEnableButton() && this.purchaseStart(this.product_name);
}, this);
} else if ("restore" == t) {
e.interactable = !a.purchase.IsSkipBukken(this.product_name);
e.node.on("click", function() {
0 != this.isEnableButton() && this.restoreStart();
}, this);
}
},
set_bukken_tag: function(e) {
this.product_name = e;
for (var t = 0, i = 0; i <= 8; i++) if ("house" + i == e) {
t = i;
break;
}
var s = a.bukken.GetData(e);
if (null != s) {
var n = a.getLocalizedStr("skip_bukken_title"), o = a.getLocalizedStr("skip_bukken_text").replace("XXXX", a.getLocalizedStr(s.name)), c = this.prefabBonus[t];
this.purchaseItems.push({
tag: e,
title: n,
text: o,
prefab: c
});
}
}
});
cc._RF.pop();
}, {
Game: "Game",
PopupPurchase: "PopupPurchase",
PurchaseContentType: "PurchaseContentType",
PurchaseManager: "PurchaseManager"
} ],
PurchaseContentType: [ function(e, t) {
"use strict";
cc._RF.push(t, "738c7CxazZD853PdDDxF4T4", "PurchaseContentType");
var i = cc.Enum({
NONE: 0,
TITLE: 1,
TEXT: 2,
SPRITE: 3,
LINE_SPACE: 4,
BUTTON: 5,
RANK: 6,
PREFAB: 7
});
t.exports = i;
cc._RF.pop();
}, {} ],
PurchaseDungeonPopup: [ function(e, t) {
"use strict";
cc._RF.push(t, "d9a8fHOWT5Ix53o9f10gbj1", "PurchaseDungeonPopup");
var i = e("PopupPurchase"), a = e("Game"), s = e("PurchaseManager"), n = e("PurchaseContentType"), o = [ {
tag: "dungeon_amulet",
title: "dungeon_amulet_title",
text: "dungeon_amulet_text"
} ];
cc.Class({
extends: i,
onLoad: function() {
this.purchaseItems = o;
this._super();
},
make_contents_order: function() {
for (var e = 0; e < this.purchaseItems.length; e++) {
var t = this.purchaseItems[e], i = s.getProductData(t.tag);
null == i && (i = {
price: "ERROR"
});
var o = a.getLocalizedStr(t.title), c = a.getLocalizedStr(t.text), r = [ {
type: n.TITLE,
title: o
}, {
type: n.TEXT,
text: c
}, {
type: n.BUTTON,
label: i.price,
width: 80,
tag: t.tag
} ];
this.explainOrders = this.explainOrders.concat(r);
}
this.addRestoreMenu();
},
make_button_string: function(e, t) {
var i = a.getLocalizedStr(t);
"dungeon_amulet" == e && a.purchase.IsDungeonAmulet() && (i = a.getLocalizedStr("purchase_paid"));
return i;
},
setting_button: function(e, t) {
if ("dungeon_amulet" == t) {
e.interactable = !a.purchase.IsDungeonAmulet();
e.node.on("click", function() {
0 != this.isEnableButton() && this.purchaseStart("dungeon_amulet");
}, this);
} else if ("restore" == t) {
e.interactable = !a.purchase.IsDungeonAmulet();
e.node.on("click", function() {
0 != this.isEnableButton() && this.restoreStart();
}, this);
}
}
});
cc._RF.pop();
}, {
Game: "Game",
PopupPurchase: "PopupPurchase",
PurchaseContentType: "PurchaseContentType",
PurchaseManager: "PurchaseManager"
} ],
PurchaseManager: [ function(e, t) {
"use strict";
cc._RF.push(t, "4175cc72o5NFYAVZawYaAcq", "PurchaseManager");
var i = e("PurchaseState"), a = e("PurchaseResult"), s = e("PurchaseType"), n = e("Game"), o = e("AppPlatform"), c = e("ToolLevel"), r = [ {
name: "remove_ads",
product_id: "jp.coffeebreakin.app.minifarm.removeads",
type: s.PurchaseTypeNonConsumable
}, {
name: "skip_video",
product_id: "jp.coffeebreakin.app.minifarm.skipvideo",
type: s.PurchaseTypeNonConsumable
}, {
name: "dungeon_amulet",
product_id: "jp.coffeebreakin.app.minifarm.dungeonamulet",
type: s.PurchaseTypeNonConsumable
}, {
name: "tool_copper",
product_id: "jp.coffeebreakin.app.minifarm.toolcopper",
type: s.PurchaseTypeNonConsumable
}, {
name: "tool_silver",
product_id: "jp.coffeebreakin.app.minifarm.toolsilver",
type: s.PurchaseTypeNonConsumable
}, {
name: "tool_gold",
product_id: "jp.coffeebreakin.app.minifarm.toolgold",
type: s.PurchaseTypeNonConsumable
}, {
name: "tool_ruby",
product_id: "jp.coffeebreakin.app.minifarm.toolruby",
type: s.PurchaseTypeNonConsumable
}, {
name: "tool_diamond",
product_id: "jp.coffeebreakin.app.minifarm.tooldiamond",
type: s.PurchaseTypeNonConsumable
}, {
name: "house0",
product_id: "jp.coffeebreakin.app.minifarm.house0",
type: s.PurchaseTypeNonConsumable
}, {
name: "house1",
product_id: "jp.coffeebreakin.app.minifarm.house1",
type: s.PurchaseTypeNonConsumable
}, {
name: "house2",
product_id: "jp.coffeebreakin.app.minifarm.house2",
type: s.PurchaseTypeNonConsumable
}, {
name: "house3",
product_id: "jp.coffeebreakin.app.minifarm.house3",
type: s.PurchaseTypeNonConsumable
}, {
name: "house4",
product_id: "jp.coffeebreakin.app.minifarm.house4",
type: s.PurchaseTypeNonConsumable
}, {
name: "house5",
product_id: "jp.coffeebreakin.app.minifarm.house5",
type: s.PurchaseTypeNonConsumable
}, {
name: "house6",
product_id: "jp.coffeebreakin.app.minifarm.house6",
type: s.PurchaseTypeNonConsumable
}, {
name: "house7",
product_id: "jp.coffeebreakin.app.minifarm.house7",
type: s.PurchaseTypeNonConsumable
}, {
name: "house8",
product_id: "jp.coffeebreakin.app.minifarm.house8",
type: s.PurchaseTypeNonConsumable
} ], h = {
stateCode: i.PurchaseStateNone,
resultCode: a.PurchaseResultNone,
flagInitialized: !1,
purchaseConfigData: r,
configNum: r.length,
products: {},
isAvailable: function() {
return !!o.isWebTest() || (0 != n.flagGooglePCGames || 0 != o.IsNetworked()) && 0 != o.IsPurchaseAvailable();
},
isReady: function() {
return this.flagInitialized && this.stateCode == i.PurchaseStateReady;
},
getResultCode: function() {
if (this.resultCode == a.PurchaseResultNone) return a.PurchaseResultNone;
var e = this.resultCode;
this.resultCode = a.PurchaseResultNone;
return e;
},
getProductData: function(e) {
return e in this.products ? this.products[e] : null;
},
init: function() {
this.stateCode = i.PurchaseStateInitializing;
this.resultCode = a.PurchaseResultNone;
o.PurchaseRegister();
o.isWebTest() && this.initSuccessed();
},
initSuccessed: function() {
this.stateCode = i.PurchaseStateNone;
this.resultCode = a.PurchaseResultInitialized;
this.flagInitialized = !0;
},
initFailed: function() {
this.stateCode = i.PurchaseStateError;
this.resultCode = a.PurchaseResultInitFailed;
this.flagInitialized = !1;
},
deinit: function() {
this.stateCode = i.PurchaseStateNone;
this.resultCode = a.PurchaseResultNone;
this.flagInitialized = !1;
o.PurchaseUnregister();
},
fetch: function() {
if (0 != this.isAvailable()) {
this.stateCode = i.PurchaseStateFetching;
this.resultCode = a.PurchaseResultNone;
this.products = {};
for (var e = [], t = [], s = 0; s < this.configNum; s++) {
e[s] = this.purchaseConfigData[s].product_id;
t[s] = this.purchaseConfigData[s].type;
}
o.PurchaseFetch(e, t);
o.isWebTest() && this.fetchSuccessed();
} else this.fetchFailed();
},
fetchProduct: function(e, t, i, a, s) {
var n = this.getNameByProductId(e);
if ("" != n) {
var o = {};
o.product_id = e;
o.title = t;
o.description = i;
o.value = a;
o.price = s;
this.products[n] = o;
}
},
fetchSuccessed: function() {
this.stateCode = i.PurchaseStateReady;
this.resultCode = a.PurchaseResultFetchSuccessed;
},
fetchFailed: function() {
this.stateCode = i.PurchaseStateError;
this.resultCode = a.PurchaseResultFetchFailed;
},
refresh: function() {
o.PurchaseRefresh();
},
buy: function(e) {
if (0 != this.isAvailable() && 0 != this.isReady()) if (o.isWebTest()) {
this.activateCustom(e);
this.resultCode = a.PurchaseResultPurchased;
} else {
this.stateCode = i.PurchaseStatePurchasing;
this.resultCode = a.PurchaseResultNone;
var t = this.getProductData(e);
null != t && o.PurchaseBuy(t.product_id);
} else this.failed();
},
purchased: function(e) {
this.activate(e);
this.stateCode = i.PurchaseStateReady;
this.resultCode = a.PurchaseResultPurchased;
},
failed: function() {
this.stateCode = i.PurchaseStateReady;
this.resultCode = a.PurchaseResultFailed;
},
canceled: function() {
this.stateCode = i.PurchaseStateReady;
this.resultCode = a.PurchaseResultCanceled;
},
deferred: function() {
this.stateCode = i.PurchaseStateReady;
this.resultCode = a.PurchaseResultDeferred;
},
restore: function() {
if (0 != this.isAvailable() && 0 != this.isReady()) {
this.stateCode = i.PurchaseStateRestoring;
this.resultCode = a.PurchaseResultNone;
o.PurchaseRestore();
if (o.isWebTest()) {
this.activateAllProducts();
this.restoreSuccessed();
}
} else this.restoreFailed();
},
restored: function(e) {
this.activate(e);
},
restoreSuccessed: function() {
this.stateCode = i.PurchaseStateReady;
this.resultCode = a.PurchaseResultRestoreSuccessed;
},
restoreFailed: function() {
this.stateCode = i.PurchaseStateReady;
this.resultCode = a.PurchaseResultRestoreFailed;
},
getNameByProductId: function(e) {
for (var t = "", i = 0; i < this.configNum; i++) if (this.purchaseConfigData[i].product_id == e) {
t = this.purchaseConfigData[i].name;
break;
}
return t;
},
activate: function(e) {
var t = this.getNameByProductId(e);
"" != t && this.activateCustom(t);
},
activateAllProducts: function() {
for (var e = 0; e < this.configNum; e++) this.activateCustom(this.purchaseConfigData[e].name);
},
activateCustom: function(e) {
var t = this.stateCode != i.PurchaseStateRestoring;
"remove_ads" === e ? n.purchase.DoRemoveAds(t) : "skip_video" === e ? n.purchase.DoSkipVideo(t) : "dungeon_amulet" === e ? n.purchase.DoDungeonAmulet(t) : "tool_copper" === e ? n.purchase.DoSkipUpgrade(t, c.COPPER) : "tool_silver" === e ? n.purchase.DoSkipUpgrade(t, c.SILVER) : "tool_gold" === e ? n.purchase.DoSkipUpgrade(t, c.GOLD) : "tool_ruby" === e ? n.purchase.DoSkipUpgrade(t, c.RUBY) : "tool_diamond" === e ? n.purchase.DoSkipUpgrade(t, c.DIAMOND) : "house0" !== e && "house1" !== e && "house2" !== e && "house3" !== e && "house4" !== e && "house5" !== e && "house6" !== e && "house7" !== e && "house8" !== e || n.purchase.DoSkipBukken(t, e);
}
};
t.exports = h;
cc._RF.pop();
}, {
AppPlatform: "AppPlatform",
Game: "Game",
PurchaseResult: "PurchaseResult",
PurchaseState: "PurchaseState",
PurchaseType: "PurchaseType",
ToolLevel: "ToolLevel"
} ],
PurchasePopup2: [ function(e, t) {
"use strict";
cc._RF.push(t, "767f4abzDRF1YqaGiPzFUXa", "PurchasePopup2");
var i = e("PopupPurchase"), a = e("Game"), s = e("PurchaseManager"), n = e("PurchaseContentType"), o = [ {
tag: "remove_ads",
title: "remove_ads_title",
text: "remove_ads_text"
}, {
tag: "skip_video",
title: "skip_video_title",
text: "skip_video_text"
} ], c = [ {
tag: "remove_ads",
title: "warppass_title",
text: "warppass_text"
}, {
tag: "skip_video",
title: "rewardpass_title",
text: "rewardpass_text"
} ], r = [ {
type: n.TITLE,
title: "purchase_intro_title"
}, {
type: n.TEXT,
text: "purchase_intro_text"
}, {
type: n.LINE_SPACE
}, {
type: n.TITLE,
title: "purchase_credits_title"
}, {
type: n.TEXT,
text: "purchase_credits_text"
} ], h = [ {
type: n.TEXT,
text: "purchase_your_rank"
}, {
type: n.RANK
}, {
type: n.LINE_SPACE
}, {
type: n.TEXT,
text: "purchase_regist_name"
}, {
type: n.BUTTON,
label: "purchase_no_name",
width: 120,
tag: "sponser_name"
} ], u = [ {
type: n.LINE_SPACE
}, {
type: n.TITLE,
title: "purchase_platinum_title"
}, {
type: n.TEXT,
text: "purchase_platinum_text"
} ];
cc.Class({
extends: i,
onLoad: function() {
this.purchaseItems = a.flagGooglePCGames ? c : o;
this._super();
},
make_contents_order: function() {
this.explainOrders = a.purchase.IsSponsor() ? h.concat() : r.concat();
for (var e = 0; e < this.purchaseItems.length; e++) {
var t = this.purchaseItems[e], i = s.getProductData(t.tag);
null == i && (i = {
price: "ERROR"
});
var o = a.getLocalizedStr(t.title), c = a.getLocalizedStr(t.text), l = [ {
type: n.LINE_SPACE
}, {
type: n.TITLE,
title: o
}, {
type: n.TEXT,
text: c
}, {
type: n.BUTTON,
label: i.price,
width: 80,
tag: t.tag
} ];
this.explainOrders = this.explainOrders.concat(l);
}
this.explainOrders = this.explainOrders.concat(u);
this.addRestoreMenu();
},
make_button_string: function(e, t) {
var i = a.getLocalizedStr(t);
if ("sponser_name" == e) {
var s = a.purchase.GetCreditName();
"" != s && (i = s);
} else "remove_ads" == e ? a.purchase.IsRemoveAds() && (i = a.getLocalizedStr("purchase_paid")) : "skip_video" == e && a.purchase.IsSkipVideo() && (i = a.getLocalizedStr("purchase_paid"));
return i;
},
setting_button: function(e, t) {
if ("remove_ads" == t) {
e.interactable = !a.purchase.IsRemoveAds();
e.node.on("click", function() {
0 != this.isEnableButton() && this.purchaseStart("remove_ads");
}, this);
} else if ("skip_video" == t) {
e.interactable = !a.purchase.IsSkipVideo();
e.node.on("click", function() {
0 != this.isEnableButton() && this.purchaseStart("skip_video");
}, this);
} else if ("restore" == t) {
e.interactable = !a.purchase.IsRemoveAds() || !a.purchase.IsSkipVideo();
e.node.on("click", function() {
0 != this.isEnableButton() && this.restoreStart();
}, this);
} else "sponser_name" == t && e.node.on("click", function() {
0 != this.isEnableButton() && this.setSponserName();
}, this);
}
});
cc._RF.pop();
}, {
Game: "Game",
PopupPurchase: "PopupPurchase",
PurchaseContentType: "PurchaseContentType",
PurchaseManager: "PurchaseManager"
} ],
PurchaseResult: [ function(e, t) {
"use strict";
cc._RF.push(t, "b3e09R36rxHtoPT3BQxg82r", "PurchaseResult");
var i = cc.Enum({
PurchaseResultNone: 0,
PurchaseResultInitialized: 1,
PurchaseResultInitFailed: 2,
PurchaseResultFetchSuccessed: 3,
PurchaseResultFetchFailed: 4,
PurchaseResultPurchased: 5,
PurchaseResultFailed: 6,
PurchaseResultCanceled: 7,
PurchaseResultRestoreSuccessed: 8,
PurchaseResultRestoreFailed: 9,
PurchaseResultDeferred: 10
});
t.exports = i;
cc._RF.pop();
}, {} ],
PurchaseSign: [ function(e, t) {
"use strict";
cc._RF.push(t, "a6b38Rl/+JBe4emktgLMxFy", "PurchaseSign");
var i = e("TrapPopup"), a = e("CommandType"), s = e("Game");
cc.Class({
extends: i,
properties: {
bargain_sign_tag: ""
},
onLoad: function() {
this._super();
0 == this.IsPurchaseEnable() && this.node.destroy();
},
execCommand: function(e) {
e == a.EVENT && s.scene.manager.ShowBargainSignPopup(this.bargain_sign_tag);
},
IsPurchaseEnable: function() {
return !0;
}
});
cc._RF.pop();
}, {
CommandType: "CommandType",
Game: "Game",
TrapPopup: "TrapPopup"
} ],
PurchaseState: [ function(e, t) {
"use strict";
cc._RF.push(t, "ddf79Dz0bhLu7hExmLv8n5S", "PurchaseState");
var i = cc.Enum({
PurchaseStateNone: 0,
PurchaseStateInitializing: 1,
PurchaseStateFetching: 2,
PurchaseStateReady: 3,
PurchaseStatePurchasing: 4,
PurchaseStateRestoring: 5,
PurchaseStateError: 6
});
t.exports = i;
cc._RF.pop();
}, {} ],
PurchaseToolPopup: [ function(e, t) {
"use strict";
cc._RF.push(t, "c334aOMuAJGZaUJ4Rq/GsQy", "PurchaseToolPopup");
var i = e("PopupPurchase"), a = e("Game"), s = e("PurchaseManager"), n = e("PurchaseContentType"), o = e("ToolLevel"), c = [ {
tool_lv: o.COPPER,
tag: "tool_copper"
}, {
tool_lv: o.SILVER,
tag: "tool_silver"
}, {
tool_lv: o.GOLD,
tag: "tool_gold"
}, {
tool_lv: o.RUBY,
tag: "tool_ruby"
}, {
tool_lv: o.DIAMOND,
tag: "tool_diamond"
} ];
cc.Class({
extends: i,
properties: {
prefabBonus: [ cc.Prefab ]
},
ctor: function() {
this.toolLevel = o.STONE;
this.product_name = "";
},
onLoad: function() {
this.purchaseItems = [];
this._super();
},
ShowWithToolLevel: function(e) {
this.Show() && this.set_tool_lv(e);
},
make_contents_order: function() {
for (var e = 0; e < this.purchaseItems.length; e++) {
var t = this.purchaseItems[e], i = s.getProductData(t.tag);
null == i && (i = {
price: "ERROR"
});
var a = [ {
type: n.TITLE,
title: t.title
}, {
type: n.TEXT,
text: t.text
}, {
type: n.PREFAB,
prefab: t.prefab
}, {
type: n.BUTTON,
label: i.price,
width: 80,
tag: t.tag
} ];
this.explainOrders = this.explainOrders.concat(a);
}
this.addRestoreMenu();
},
make_button_string: function(e, t) {
var i = a.getLocalizedStr(t);
e == this.product_name && a.purchase.IsSkipUpgrade(this.toolLevel) && (i = a.getLocalizedStr("purchase_paid"));
return i;
},
setting_button: function(e, t) {
if (t == this.product_name) {
e.interactable = !a.purchase.IsSkipUpgrade(this.toolLevel);
e.node.on("click", function() {
0 != this.isEnableButton() && this.purchaseStart(this.product_name);
}, this);
} else if ("restore" == t) {
e.interactable = !a.purchase.IsSkipUpgrade(this.toolLevel);
e.node.on("click", function() {
0 != this.isEnableButton() && this.restoreStart();
}, this);
}
},
set_tool_lv: function(e) {
this.toolLevel = e;
for (var t = 0; t < c.length; t++) if (c[t].tool_lv == e) {
this.product_name = c[t].tag;
var i = a.getLocalizedStr("skip_upgrade_title"), s = a.getLocalizedStr("skip_upgrade_text").replace("XXXX", a.getToolName(e)), n = this.prefabBonus[e];
this.purchaseItems.push({
tag: this.product_name,
title: i,
text: s,
prefab: n
});
break;
}
}
});
cc._RF.pop();
}, {
Game: "Game",
PopupPurchase: "PopupPurchase",
PurchaseContentType: "PurchaseContentType",
PurchaseManager: "PurchaseManager",
ToolLevel: "ToolLevel"
} ],
PurchaseType: [ function(e, t) {
"use strict";
cc._RF.push(t, "a460f1tq/RCbakr7cFWGgal", "PurchaseType");
var i = cc.Enum({
PurchaseTypeNone: 0,
PurchaseTypeConsumable: 1,
PurchaseTypeNonConsumable: 2,
PurchaseTypeSubscription: 3
});
t.exports = i;
cc._RF.pop();
}, {} ],
Purchase: [ function(e, t) {
"use strict";
cc._RF.push(t, "666e0fmpn5FWJm5/7QfHZbZ", "Purchase");
var i = e("BaseModel"), a = e("SponserRank"), s = e("ToolLevel"), n = [ "sponser_none", "sponser_silver", "sponser_gold", "sponser_platinum" ], o = cc.Enum({
NONE: 0,
AMULET: 1,
TOOL: 2,
BUKKEN: 3
}), c = cc.Class({
extends: i,
init: function(e) {
this._super(e, "Purchase");
this.flagRemoveAds = !1;
this.flagSkipVideo = !1;
this.flagDungeonAmulet = !1;
this.flagSkipUpgrade = [];
this.flagSkipBukken = [];
this.creditName = "";
this.uid = "";
this.sponserList = [];
},
load: function() {
this.flagRemoveAds = this.loadBoolean(".flagRemoveAds", !1);
this.flagSkipVideo = this.loadBoolean(".flagSkipVideo", !1);
this.flagDungeonAmulet = this.loadBoolean(".flagDungeonAmulet", !1);
for (var e = s.COPPER; e <= s.DIAMOND; e++) this.flagSkipUpgrade[e] = this.loadBoolean(".flagSkipUpgrade." + e, !1);
for (var t = 0; t <= 8; t++) {
var i = "house" + t;
this.flagSkipBukken[i] = this.loadBoolean(".flagSkipBukken." + i, !1);
}
this.creditName = this.loadString(".creditName", "");
this.uid = this.loadString(".uid", "");
},
IsRemoveAds: function() {
return this.flagRemoveAds;
},
DoRemoveAds: function(e) {
if (!this.flagRemoveAds) {
this.flagRemoveAds = !0;
this.saveBoolean(".flagRemoveAds", !0);
e && this.send_server();
}
},
IsSkipVideo: function() {
return this.flagSkipVideo;
},
DoSkipVideo: function(e) {
if (!this.flagSkipVideo) {
this.flagSkipVideo = !0;
this.saveBoolean(".flagSkipVideo", !0);
e && this.send_server();
}
},
IsDungeonAmulet: function() {
return this.flagDungeonAmulet;
},
DoDungeonAmulet: function(e) {
if (!this.flagDungeonAmulet) {
this.flagDungeonAmulet = !0;
this.saveBoolean(".flagDungeonAmulet", !0);
e && this.send_purchase_log(o.AMULET, "");
}
},
IsSkipUpgrade: function(e) {
return this.flagSkipUpgrade[e];
},
DoSkipUpgrade: function(e, t) {
if (!this.flagSkipUpgrade[t]) {
this.flagSkipUpgrade[t] = !0;
this.saveBoolean(".flagSkipUpgrade." + t, !0);
var i = "";
switch (t) {
case s.COPPER:
i = "copper";
break;

case s.SILVER:
i = "silver";
break;

case s.GOLD:
i = "gold";
break;

case s.RUBY:
i = "ruby";
break;

case s.DIAMOND:
i = "diamond";
}
e && this.send_purchase_log(o.TOOL, i);
}
},
IsSkipBukken: function(e) {
return this.flagSkipBukken[e];
},
DoSkipBukken: function(e, t) {
if (!this.flagSkipBukken[t]) {
this.flagSkipBukken[t] = !0;
this.saveBoolean(".flagSkipBukken." + t, !0);
e && this.send_purchase_log(o.BUKKEN, t);
}
},
IsAllPurchased: function() {
return this.flagRemoveAds && this.flagSkipVideo && this.flagDungeonAmulet;
},
IsSponsor: function() {
return this.flagRemoveAds || this.flagSkipVideo;
},
GetSponserRank: function() {
var e = a.NONE;
this.flagRemoveAds && (e = a.SILVER);
this.flagSkipVideo && (e = a.GOLD);
this.flagRemoveAds && this.flagSkipVideo && (e = a.PLATINUM);
return e;
},
GetSponserRankStrByRank: function(e) {
return this.game.getLocalizedStr(n[e]) + (e == a.NONE ? "" : this.game.getLocalizedStr("sponser_suffix"));
},
GetSponserRankStr: function() {
var e = this.GetSponserRank();
return this.GetSponserRankStrByRank(e);
},
GetCreditName: function() {
return this.creditName;
},
SetCreditName: function(e, t) {
this.creditName = e;
this.saveString(".creditName", this.creditName);
t && this.send_server();
},
GetUserID: function() {
return this.uid;
},
generate_user_id: function() {
if ("" == this.uid) {
this.uid = this.game.GenerateRandomStr(32);
this.saveString(".uid", this.uid);
}
},
SyncServer: function() {
this.send_server();
},
send_server: function() {
if (!this.game.debug) {
var e = this.GetSponserRank();
if (e != a.NONE) {
var t = encodeURIComponent(this.GetCreditName());
this.generate_user_id();
var i = "https://cobbee.net/app/minifarm/regist.php?ud=" + this.uid + "&cn=" + t + "&rk=" + e, s = new XMLHttpRequest();
if (s) {
s.open("GET", i);
s.send();
}
}
}
},
send_purchase_log: function(e, t) {
if (!this.game.debug) {
this.generate_user_id();
var i = "https://cobbee.net/app/minifarm/purchase_log.php?ud=" + this.uid + "&no=" + e + "&tg=" + t, a = new XMLHttpRequest();
if (a) {
a.open("GET", i);
a.send();
}
}
},
RequestSponserList: function() {
this.sponserList = [];
var e = encodeURI("https://cobbee.net/app/minifarm/credits.php"), t = new XMLHttpRequest();
if (t) {
var i = this;
t.onreadystatechange = function() {
if (4 == t.readyState && t.status >= 200 && t.status < 400) {
var e = t.responseText;
i.sponserList = e.split(/\n/);
}
};
t.open("GET", e);
t.send();
}
},
GetSponserList: function() {
return this.sponserList;
}
});
t.exports = c;
cc._RF.pop();
}, {
BaseModel: "BaseModel",
SponserRank: "SponserRank",
ToolLevel: "ToolLevel"
} ],
QuestCell: [ function(e, t) {
"use strict";
cc._RF.push(t, "cef65qsFU5CPrXXrRyjlbhS", "QuestCell");
var i = e("Game"), a = e("CoinLabel"), s = e("ItemInfo");
cc.Class({
extends: cc.Component,
properties: {
coinLabel: a,
prefabItemInfo: cc.Prefab
},
onLoad: function() {
this.itemInfos = [];
for (var e = 0; e < 6; e++) {
var t = cc.instantiate(this.prefabItemInfo);
if (t) {
this.node.addChild(t);
t.setPosition(cc.v2(18 * e - 70, -11));
t.color = new cc.Color(255, 255, 255);
var i = t.getComponent(s);
i && (this.itemInfos[e] = i);
}
}
},
PressCell: function() {
if (!i.IsNotPress()) {
var e = this.node.questIdx;
i.scene.manager.ShowRequestPopup(e);
}
},
ClearInfo: function() {
for (var e = 0; e < this.itemInfos.length; e++) this.itemInfos[e].node.active = !1;
},
SetInfo: function(e) {
var t = i.getQuest().GetQuestData(e);
if (null != t) {
var a = i.getQuest().GetCheckResult(e), s = t.urgent, n = t.coin * (1 == s ? 2 : 1);
this.coinLabel.SetCoin(n);
this.coinLabel.SetColor(1 == s ? new cc.Color(0, 255, 0) : new cc.Color(0, 0, 0));
for (var o = 0; o < t.items.length; o++) {
this.itemInfos[o].node.active = !1;
var c = t.items[o];
if (c && "" != c.tag) {
var r = a.items[o];
this.itemInfos[o].node.active = !0;
this.itemInfos[o].SetTag(c.tag);
this.itemInfos[o].SetRank(c.rank);
this.itemInfos[o].SetNum(c.val);
this.itemInfos[o].SetNumColor(r ? new cc.Color(0, 0, 0) : new cc.Color(255, 0, 0));
}
}
}
}
});
cc._RF.pop();
}, {
CoinLabel: "CoinLabel",
Game: "Game",
ItemInfo: "ItemInfo"
} ],
QuestMap0: [ function(e, t) {
"use strict";
cc._RF.push(t, "bc89da5thZM+qaazFwA314u", "QuestMap0");
var i = e("Quest"), a = e("RequestType"), s = [ {
name: "quest_want_0",
type: a.WANT,
items: [ {
tag: "Wood",
per: 100,
min: 7,
max: 32
} ]
}, {
name: "quest_want_3",
type: a.WANT,
items: [ {
tag: "Wool",
per: 100,
min: 2,
max: 7
} ]
}, {
name: "quest_want_4",
type: a.WANT,
items: [ {
tag: "Milk",
per: 100,
min: 1,
max: 4
} ]
}, {
name: "quest_want_8",
type: a.WANT,
items: [ {
tag: "Radish",
per: 100,
min: 8,
max: 16
} ]
}, {
name: "quest_want_9",
type: a.WANT,
items: [ {
tag: "Tomato",
per: 100,
min: 6,
max: 12
} ]
}, {
name: "quest_want_10",
type: a.WANT,
items: [ {
tag: "Carrot",
per: 100,
min: 2,
max: 5
} ]
}, {
name: "quest_want_11",
type: a.WANT,
items: [ {
tag: "Corn",
per: 100,
min: 4,
max: 8
} ]
}, {
name: "quest_want_15",
type: a.WANT,
items: [ {
tag: "BlueBerry",
per: 100,
min: 4,
max: 8
} ]
}, {
name: "quest_want_16",
type: a.WANT,
items: [ {
tag: "StrawBerry",
per: 100,
min: 2,
max: 7
} ]
}, {
name: "quest_want_20",
type: a.WANT,
items: [ {
tag: "Orange",
per: 100,
min: 3,
max: 9
} ]
}, {
name: "quest_want_21",
type: a.WANT,
items: [ {
tag: "Apple",
per: 100,
min: 3,
max: 9
} ]
}, {
name: "quest_want_26",
type: a.WANT,
items: [ {
tag: "Stone",
per: 100,
min: 6,
max: 15
} ]
}, {
name: "quest_want_27",
type: a.WANT,
items: [ {
tag: "Copper",
per: 100,
min: 1,
max: 9
} ]
}, {
name: "quest_want_28",
type: a.WANT,
items: [ {
tag: "Silver",
per: 100,
min: 1,
max: 7
} ]
}, {
name: "quest_eat_6",
type: a.EAT,
items: [ {
tag: "Radish",
per: 100,
min: 8,
max: 14
}, {
tag: "Tomato",
per: 100,
min: 7,
max: 10
}, {
tag: "Carrot",
per: 100,
min: 2,
max: 4
} ]
}, {
name: "quest_eat_3",
type: a.EAT,
items: [ {
tag: "Tomato",
per: 100,
min: 6,
max: 12
}, {
tag: "Corn",
per: 100,
min: 3,
max: 6
} ]
}, {
name: "quest_eat_8",
type: a.EAT,
items: [ {
tag: "BlueBerry",
per: 100,
min: 5,
max: 7
}, {
tag: "StrawBerry",
per: 100,
min: 3,
max: 5
} ]
}, {
name: "quest_eat_8",
type: a.EAT,
items: [ {
tag: "Orange",
per: 100,
min: 5,
max: 8
}, {
tag: "Apple",
per: 100,
min: 3,
max: 6
} ]
}, {
name: "quest_drink_1",
type: a.DRINK,
items: [ {
tag: "Tomato",
per: 100,
min: 8,
max: 14
}, {
tag: "Carrot",
per: 70,
min: 4,
max: 7
}, {
tag: "Radish",
per: 100,
min: 4,
max: 8
} ]
}, {
name: "quest_drink_2",
type: a.DRINK,
items: [ {
tag: "BlueBerry",
per: 100,
min: 12,
max: 20
}, {
tag: "StrawBerry",
per: 100,
min: 6,
max: 9
} ]
}, {
name: "quest_drink_3",
type: a.DRINK,
items: [ {
tag: "Milk",
per: 100,
min: 3,
max: 5
}, {
tag: "Orange",
per: 100,
min: 5,
max: 8
}, {
tag: "Apple",
per: 100,
min: 3,
max: 5
}, {
tag: "Corn",
per: 100,
min: 3,
max: 5
} ]
}, {
name: "quest_repair_0",
type: a.REPAIR,
items: [ {
tag: "Wood",
per: 100,
min: 14,
max: 28
}, {
tag: "Stone",
per: 100,
min: 8,
max: 16
}, {
tag: "Copper",
per: 30,
min: 1,
max: 5
} ]
}, {
name: "quest_repair_1",
type: a.REPAIR,
items: [ {
tag: "Wood",
per: 100,
min: 8,
max: 16
}, {
tag: "Stone",
per: 100,
min: 14,
max: 28
}, {
tag: "Wool",
per: 50,
min: 5,
max: 9
} ]
}, {
name: "quest_repair_2",
type: a.REPAIR,
items: [ {
tag: "Wood",
per: 100,
min: 14,
max: 28
}, {
tag: "Stone",
per: 100,
min: 14,
max: 28
}, {
tag: "Wool",
per: 100,
min: 5,
max: 9
}, {
tag: "Copper",
per: 30,
min: 3,
max: 5
} ]
}, {
name: "quest_make_0",
type: a.MAKE,
items: [ {
tag: "Wool",
per: 100,
min: 8,
max: 15
}, {
tag: "Silver",
per: 30,
min: 1,
max: 3
} ]
}, {
name: "quest_make_2",
type: a.MAKE,
items: [ {
tag: "Wood",
per: 100,
min: 12,
max: 20
}, {
tag: "Copper",
per: 100,
min: 3,
max: 5
} ]
}, {
name: "quest_make_3",
type: a.MAKE,
items: [ {
tag: "Wood",
per: 100,
min: 12,
max: 20
}, {
tag: "Silver",
per: 100,
min: 2,
max: 4
} ]
}, {
name: "quest_make_4",
type: a.MAKE,
items: [ {
tag: "Wood",
per: 100,
min: 12,
max: 20
}, {
tag: "Stone",
per: 100,
min: 12,
max: 20
}, {
tag: "Copper",
per: 70,
min: 3,
max: 5
} ]
} ];
cc.Class({
extends: i,
init: function(e) {
this._super(e, "Map0", s);
}
});
cc._RF.pop();
}, {
Quest: "Quest",
RequestType: "RequestType"
} ],
QuestMap1: [ function(e, t) {
"use strict";
cc._RF.push(t, "5012dbpM+pInIyLI/IFw+bu", "QuestMap1");
var i = e("Quest"), a = e("RequestType"), s = [ {
name: "quest_want_0",
type: a.WANT,
items: [ {
tag: "Wood",
per: 100,
min: 30,
max: 70
} ]
}, {
name: "quest_want_3",
type: a.WANT,
items: [ {
tag: "Wool",
per: 100,
min: 12,
max: 28
} ]
}, {
name: "quest_want_4",
type: a.WANT,
items: [ {
tag: "Milk",
per: 100,
min: 4,
max: 8
} ]
}, {
name: "quest_want_5",
type: a.WANT,
items: [ {
tag: "Cheese",
per: 100,
min: 3,
max: 9
} ]
}, {
name: "quest_want_7",
type: a.WANT,
items: [ {
tag: "Egg",
per: 100,
min: 3,
max: 6
} ]
}, {
name: "quest_want_9",
type: a.WANT,
items: [ {
tag: "Tomato",
per: 100,
min: 8,
max: 16
} ]
}, {
name: "quest_want_10",
type: a.WANT,
items: [ {
tag: "Carrot",
per: 100,
min: 6,
max: 12
} ]
}, {
name: "quest_want_11",
type: a.WANT,
items: [ {
tag: "Corn",
per: 100,
min: 6,
max: 12
} ]
}, {
name: "quest_want_15",
type: a.WANT,
items: [ {
tag: "BlueBerry",
per: 100,
min: 8,
max: 16
} ]
}, {
name: "quest_want_16",
type: a.WANT,
items: [ {
tag: "StrawBerry",
per: 100,
min: 8,
max: 16
} ]
}, {
name: "quest_want_17",
type: a.WANT,
items: [ {
tag: "Grape",
per: 100,
min: 4,
max: 10
} ]
}, {
name: "quest_want_20",
type: a.WANT,
items: [ {
tag: "Orange",
per: 100,
min: 6,
max: 15
} ]
}, {
name: "quest_want_21",
type: a.WANT,
items: [ {
tag: "Apple",
per: 100,
min: 6,
max: 15
} ]
}, {
name: "quest_want_22",
type: a.WANT,
items: [ {
tag: "Pear",
per: 100,
min: 3,
max: 6
} ]
}, {
name: "quest_want_26",
type: a.WANT,
items: [ {
tag: "Stone",
per: 100,
min: 30,
max: 70
} ]
}, {
name: "quest_want_27",
type: a.WANT,
items: [ {
tag: "Copper",
per: 100,
min: 5,
max: 15
} ]
}, {
name: "quest_want_28",
type: a.WANT,
items: [ {
tag: "Silver",
per: 100,
min: 3,
max: 12
} ]
}, {
name: "quest_want_29",
type: a.WANT,
items: [ {
tag: "Gold",
per: 100,
min: 1,
max: 5
} ]
}, {
name: "quest_eat_4",
type: a.EAT,
items: [ {
tag: "Radish",
per: 100,
min: 5,
max: 9
}, {
tag: "Tomato",
per: 100,
min: 10,
max: 15
}, {
tag: "Carrot",
per: 100,
min: 4,
max: 8
}, {
tag: "Egg",
per: 100,
min: 1,
max: 3
} ]
}, {
name: "quest_eat_3",
type: a.EAT,
items: [ {
tag: "Tomato",
per: 100,
min: 6,
max: 10
}, {
tag: "Corn",
per: 100,
min: 5,
max: 8
}, {
tag: "Cheese",
per: 100,
min: 5,
max: 8
} ]
}, {
name: "quest_eat_8",
type: a.EAT,
items: [ {
tag: "BlueBerry",
per: 100,
min: 8,
max: 16
}, {
tag: "StrawBerry",
per: 100,
min: 6,
max: 12
} ]
}, {
name: "quest_eat_9",
type: a.EAT,
items: [ {
tag: "Orange",
per: 100,
min: 4,
max: 10
}, {
tag: "Apple",
per: 100,
min: 4,
max: 10
}, {
tag: "Grape",
per: 100,
min: 4,
max: 10
} ]
}, {
name: "quest_eat_8",
type: a.EAT,
items: [ {
tag: "Apple",
per: 100,
min: 7,
max: 15
}, {
tag: "Pear",
per: 100,
min: 5,
max: 9
} ]
}, {
name: "quest_drink_1",
type: a.DRINK,
items: [ {
tag: "Tomato",
per: 100,
min: 7,
max: 11
}, {
tag: "Carrot",
per: 100,
min: 6,
max: 9
}, {
tag: "Radish",
per: 100,
min: 5,
max: 12
} ]
}, {
name: "quest_drink_2",
type: a.DRINK,
items: [ {
tag: "BlueBerry",
per: 100,
min: 14,
max: 26
}, {
tag: "StrawBerry",
per: 100,
min: 8,
max: 16
} ]
}, {
name: "quest_drink_3",
type: a.DRINK,
items: [ {
tag: "Milk",
per: 100,
min: 5,
max: 9
}, {
tag: "Orange",
per: 100,
min: 8,
max: 14
}, {
tag: "Apple",
per: 100,
min: 6,
max: 10
}, {
tag: "Corn",
per: 100,
min: 4,
max: 7
} ]
}, {
name: "quest_repair_0",
type: a.REPAIR,
items: [ {
tag: "Wood",
per: 100,
min: 20,
max: 40
}, {
tag: "Stone",
per: 100,
min: 15,
max: 30
}, {
tag: "Copper",
per: 100,
min: 3,
max: 7
} ]
}, {
name: "quest_repair_1",
type: a.REPAIR,
items: [ {
tag: "Wood",
per: 100,
min: 15,
max: 30
}, {
tag: "Stone",
per: 100,
min: 25,
max: 50
}, {
tag: "Wool",
per: 100,
min: 7,
max: 13
} ]
}, {
name: "quest_repair_2",
type: a.REPAIR,
items: [ {
tag: "Wood",
per: 100,
min: 25,
max: 50
}, {
tag: "Stone",
per: 100,
min: 25,
max: 50
}, {
tag: "Wool",
per: 100,
min: 8,
max: 16
}, {
tag: "Copper",
per: 100,
min: 7,
max: 11
} ]
}, {
name: "quest_make_0",
type: a.MAKE,
items: [ {
tag: "Wool",
per: 100,
min: 14,
max: 26
}, {
tag: "Silver",
per: 100,
min: 3,
max: 6
} ]
}, {
name: "quest_make_1",
type: a.MAKE,
items: [ {
tag: "Copper",
per: 100,
min: 8,
max: 14
}, {
tag: "Silver",
per: 70,
min: 4,
max: 8
}, {
tag: "Gold",
per: 50,
min: 1,
max: 2
} ]
}, {
name: "quest_make_2",
type: a.MAKE,
items: [ {
tag: "Wood",
per: 100,
min: 18,
max: 30
}, {
tag: "Copper",
per: 100,
min: 5,
max: 8
} ]
}, {
name: "quest_make_3",
type: a.MAKE,
items: [ {
tag: "Wood",
per: 100,
min: 22,
max: 36
}, {
tag: "Silver",
per: 100,
min: 2,
max: 4
} ]
}, {
name: "quest_make_4",
type: a.MAKE,
items: [ {
tag: "Wood",
per: 100,
min: 16,
max: 24
}, {
tag: "Stone",
per: 100,
min: 16,
max: 24
}, {
tag: "Copper",
per: 100,
min: 5,
max: 9
} ]
}, {
name: "quest_make_5",
type: a.MAKE,
items: [ {
tag: "StrawBerry",
per: 100,
min: 8,
max: 12
}, {
tag: "BlueBerry",
per: 100,
min: 6,
max: 9
}, {
tag: "Orange",
per: 100,
min: 4,
max: 6
}, {
tag: "Apple",
per: 100,
min: 2,
max: 4
} ]
} ];
cc.Class({
extends: i,
init: function(e) {
this._super(e, "Map1", s);
}
});
cc._RF.pop();
}, {
Quest: "Quest",
RequestType: "RequestType"
} ],
QuestMap2: [ function(e, t) {
"use strict";
cc._RF.push(t, "f6bb2VGwVNKbJfv6DOhSkKn", "QuestMap2");
var i = e("Quest"), a = e("RequestType"), s = [ {
name: "quest_want_0",
type: a.WANT,
items: [ {
tag: "Wood",
per: 100,
min: 30,
max: 90
} ]
}, {
name: "quest_want_1",
type: a.WANT,
items: [ {
tag: "Wood1",
per: 100,
min: 30,
max: 90
} ]
}, {
name: "quest_want_3",
type: a.WANT,
items: [ {
tag: "Wool",
per: 100,
min: 12,
max: 36
} ]
}, {
name: "quest_want_4",
type: a.WANT,
items: [ {
tag: "Milk",
per: 100,
min: 10,
max: 30
} ]
}, {
name: "quest_want_5",
type: a.WANT,
items: [ {
tag: "Cheese",
per: 100,
min: 4,
max: 12
} ]
}, {
name: "quest_want_6",
type: a.WANT,
items: [ {
tag: "Butter",
per: 100,
min: 3,
max: 9
} ]
}, {
name: "quest_want_7",
type: a.WANT,
items: [ {
tag: "Egg",
per: 100,
min: 6,
max: 18
} ]
}, {
name: "quest_want_8",
type: a.WANT,
items: [ {
tag: "Radish",
per: 100,
min: 16,
max: 48
} ]
}, {
name: "quest_want_9",
type: a.WANT,
items: [ {
tag: "Tomato",
per: 100,
min: 12,
max: 36
} ]
}, {
name: "quest_want_10",
type: a.WANT,
items: [ {
tag: "Carrot",
per: 100,
min: 8,
max: 24
} ]
}, {
name: "quest_want_11",
type: a.WANT,
items: [ {
tag: "Corn",
per: 100,
min: 8,
max: 24
} ]
}, {
name: "quest_want_12",
type: a.WANT,
items: [ {
tag: "RedRadish",
per: 100,
min: 6,
max: 18
} ]
}, {
name: "quest_want_13",
type: a.WANT,
items: [ {
tag: "Cactus0",
per: 100,
min: 6,
max: 18
} ]
}, {
name: "quest_want_14",
type: a.WANT,
items: [ {
tag: "Mushroom0",
per: 100,
min: 5,
max: 15
} ]
}, {
name: "quest_want_15",
type: a.WANT,
items: [ {
tag: "BlueBerry",
per: 100,
min: 12,
max: 36
} ]
}, {
name: "quest_want_16",
type: a.WANT,
items: [ {
tag: "StrawBerry",
per: 100,
min: 12,
max: 36
} ]
}, {
name: "quest_want_17",
type: a.WANT,
items: [ {
tag: "Grape",
per: 100,
min: 8,
max: 24
} ]
}, {
name: "quest_want_18",
type: a.WANT,
items: [ {
tag: "PineApple",
per: 100,
min: 6,
max: 18
} ]
}, {
name: "quest_want_20",
type: a.WANT,
items: [ {
tag: "Orange",
per: 100,
min: 9,
max: 27
} ]
}, {
name: "quest_want_21",
type: a.WANT,
items: [ {
tag: "Apple",
per: 100,
min: 9,
max: 27
} ]
}, {
name: "quest_want_22",
type: a.WANT,
items: [ {
tag: "Pear",
per: 100,
min: 3,
max: 9
} ]
}, {
name: "quest_want_23",
type: a.WANT,
items: [ {
tag: "Coconut",
per: 100,
min: 9,
max: 27
} ]
}, {
name: "quest_want_26",
type: a.WANT,
items: [ {
tag: "Stone",
per: 100,
min: 24,
max: 72
} ]
}, {
name: "quest_want_27",
type: a.WANT,
items: [ {
tag: "Copper",
per: 100,
min: 6,
max: 18
} ]
}, {
name: "quest_want_28",
type: a.WANT,
items: [ {
tag: "Silver",
per: 100,
min: 5,
max: 15
} ]
}, {
name: "quest_want_29",
type: a.WANT,
items: [ {
tag: "Gold",
per: 100,
min: 4,
max: 12
} ]
}, {
name: "quest_want_31",
type: a.WANT,
items: [ {
tag: "Ruby",
per: 100,
min: 1,
max: 3
} ]
}, {
name: "quest_want_32",
type: a.WANT,
items: [ {
tag: "Marble0",
per: 100,
min: 2,
max: 6
} ]
}, {
name: "quest_eat_11",
type: a.EAT,
items: [ {
tag: "Milk",
per: 100,
min: 3,
max: 6
}, {
tag: "Egg",
per: 100,
min: 4,
max: 8
} ]
}, {
name: "quest_eat_1",
type: a.EAT,
items: [ {
tag: "Cheese",
per: 100,
min: 6,
max: 12
}, {
tag: "Milk",
per: 100,
min: 3,
max: 6
}, {
tag: "Butter",
per: 100,
min: 3,
max: 6
} ]
}, {
name: "quest_eat_12",
type: a.EAT,
items: [ {
tag: "Butter",
per: 100,
min: 3,
max: 6
}, {
tag: "Corn",
per: 100,
min: 6,
max: 12
} ]
}, {
name: "quest_eat_14",
type: a.EAT,
items: [ {
tag: "Egg",
per: 100,
min: 4,
max: 8
}, {
tag: "Cheese",
per: 100,
min: 3,
max: 6
}, {
tag: "Butter",
per: 100,
min: 3,
max: 6
}, {
tag: "RedRadish",
per: 100,
min: 8,
max: 16
} ]
}, {
name: "quest_eat_3",
type: a.EAT,
items: [ {
tag: "Radish",
per: 100,
min: 10,
max: 20
}, {
tag: "RedRadish",
per: 100,
min: 6,
max: 12
}, {
tag: "Cactus0",
per: 100,
min: 6,
max: 12
} ]
}, {
name: "quest_eat_8",
type: a.EAT,
items: [ {
tag: "Tomato",
per: 100,
min: 12,
max: 24
}, {
tag: "StrawBerry",
per: 100,
min: 8,
max: 16
}, {
tag: "Orange",
per: 100,
min: 6,
max: 12
} ]
}, {
name: "quest_eat_6",
type: a.EAT,
items: [ {
tag: "Carrot",
per: 100,
min: 6,
max: 12
}, {
tag: "Radish",
per: 100,
min: 6,
max: 12
}, {
tag: "Tomato",
per: 100,
min: 6,
max: 12
}, {
tag: "Egg",
per: 100,
min: 3,
max: 6
} ]
}, {
name: "quest_eat_4",
type: a.EAT,
items: [ {
tag: "Corn",
per: 100,
min: 8,
max: 16
}, {
tag: "Tomato",
per: 100,
min: 8,
max: 16
}, {
tag: "Cheese",
per: 100,
min: 2,
max: 4
}, {
tag: "Mushroom0",
per: 100,
min: 5,
max: 10
} ]
}, {
name: "quest_eat_5",
type: a.EAT,
items: [ {
tag: "RedRadish",
per: 100,
min: 10,
max: 20
}, {
tag: "Radish",
per: 100,
min: 20,
max: 40
}, {
tag: "Carrot",
per: 100,
min: 15,
max: 30
} ]
}, {
name: "quest_eat_13",
type: a.EAT,
items: [ {
tag: "Cactus0",
per: 100,
min: 12,
max: 24
}, {
tag: "Corn",
per: 100,
min: 7,
max: 14
}, {
tag: "Butter",
per: 100,
min: 3,
max: 6
} ]
}, {
name: "quest_eat_7",
type: a.EAT,
items: [ {
tag: "Mushroom0",
per: 100,
min: 8,
max: 16
}, {
tag: "Milk",
per: 100,
min: 12,
max: 24
}, {
tag: "Butter",
per: 100,
min: 4,
max: 8
} ]
}, {
name: "quest_eat_9",
type: a.EAT,
items: [ {
tag: "Grape",
per: 100,
min: 12,
max: 24
}, {
tag: "PineApple",
per: 100,
min: 8,
max: 16
}, {
tag: "StrawBerry",
per: 100,
min: 10,
max: 20
}, {
tag: "Orange",
per: 100,
min: 10,
max: 20
}, {
tag: "Pear",
per: 100,
min: 6,
max: 12
} ]
}, {
name: "quest_eat_10",
type: a.EAT,
items: [ {
tag: "PineApple",
per: 100,
min: 8,
max: 16
}, {
tag: "Coconut",
per: 100,
min: 12,
max: 24
}, {
tag: "Cactus0",
per: 100,
min: 10,
max: 20
} ]
}, {
name: "quest_eat_8",
type: a.EAT,
items: [ {
tag: "Apple",
per: 100,
min: 12,
max: 24
}, {
tag: "Pear",
per: 100,
min: 6,
max: 12
}, {
tag: "BlueBerry",
per: 100,
min: 14,
max: 28
} ]
}, {
name: "quest_make_5",
type: a.EAT,
items: [ {
tag: "BlueBerry",
per: 100,
min: 10,
max: 20
}, {
tag: "Grape",
per: 100,
min: 8,
max: 16
} ]
}, {
name: "quest_make_5",
type: a.EAT,
items: [ {
tag: "Orange",
per: 100,
min: 15,
max: 30
}, {
tag: "Apple",
per: 100,
min: 12,
max: 24
} ]
}, {
name: "quest_drink_0",
type: a.DRINK,
items: [ {
tag: "StrawBerry",
per: 100,
min: 15,
max: 30
}, {
tag: "Milk",
per: 100,
min: 10,
max: 20
} ]
}, {
name: "quest_drink_4",
type: a.DRINK,
items: [ {
tag: "Pear",
per: 100,
min: 6,
max: 12
}, {
tag: "Apple",
per: 100,
min: 12,
max: 24
}, {
tag: "Grape",
per: 100,
min: 8,
max: 16
} ]
}, {
name: "quest_drink_3",
type: a.DRINK,
items: [ {
tag: "Coconut",
per: 100,
min: 15,
max: 30
}, {
tag: "PineApple",
per: 100,
min: 6,
max: 12
} ]
}, {
name: "quest_repair_0",
type: a.REPAIR,
items: [ {
tag: "Wood1",
per: 100,
min: 30,
max: 60
}, {
tag: "Wood",
per: 100,
min: 40,
max: 80
}, {
tag: "Coconut",
per: 100,
min: 20,
max: 40
}, {
tag: "Stone",
per: 100,
min: 20,
max: 40
} ]
}, {
name: "quest_repair_2",
type: a.MAKE,
items: [ {
tag: "Wood",
per: 100,
min: 60,
max: 120
}, {
tag: "Wood1",
per: 100,
min: 40,
max: 80
}, {
tag: "Stone",
per: 100,
min: 30,
max: 60
}, {
tag: "Marble0",
per: 100,
min: 10,
max: 20
} ]
}, {
name: "quest_make_10",
type: a.MAKE,
items: [ {
tag: "Wool",
per: 100,
min: 8,
max: 16
}, {
tag: "Coconut",
per: 100,
min: 4,
max: 8
}, {
tag: "Gold",
per: 100,
min: 6,
max: 12
}, {
tag: "Ruby",
per: 100,
min: 2,
max: 4
} ]
}, {
name: "quest_make_2",
type: a.MAKE,
items: [ {
tag: "Stone",
per: 100,
min: 20,
max: 40
}, {
tag: "Wood",
per: 100,
min: 40,
max: 80
}, {
tag: "Wool",
per: 100,
min: 20,
max: 40
} ]
}, {
name: "quest_make_1",
type: a.MAKE,
items: [ {
tag: "Copper",
per: 100,
min: 20,
max: 40
}, {
tag: "Marble0",
per: 100,
min: 4,
max: 8
} ]
}, {
name: "quest_make_6",
type: a.MAKE,
items: [ {
tag: "Silver",
per: 100,
min: 14,
max: 28
}, {
tag: "Gold",
per: 100,
min: 7,
max: 14
} ]
}, {
name: "quest_make_7",
type: a.MAKE,
items: [ {
tag: "Gold",
per: 100,
min: 15,
max: 30
}, {
tag: "Silver",
per: 100,
min: 15,
max: 30
}, {
tag: "Copper",
per: 100,
min: 15,
max: 30
}, {
tag: "Ruby",
per: 100,
min: 2,
max: 4
} ]
}, {
name: "quest_make_8",
type: a.MAKE,
items: [ {
tag: "Ruby",
per: 100,
min: 1,
max: 2
}, {
tag: "Gold",
per: 100,
min: 12,
max: 24
}, {
tag: "Silver",
per: 100,
min: 12,
max: 24
} ]
}, {
name: "quest_make_3",
type: a.MAKE,
items: [ {
tag: "Marble0",
per: 100,
min: 14,
max: 28
}, {
tag: "Wood",
per: 100,
min: 20,
max: 40
}, {
tag: "Wood1",
per: 100,
min: 20,
max: 40
} ]
} ];
cc.Class({
extends: i,
init: function(e) {
this._super(e, "Map2", s);
}
});
cc._RF.pop();
}, {
Quest: "Quest",
RequestType: "RequestType"
} ],
QuestMap3: [ function(e, t) {
"use strict";
cc._RF.push(t, "c96f42pNJ5Dd65GCqgL27Fv", "QuestMap3");
var i = e("Quest"), a = e("RequestType"), s = [ {
name: "quest_want_0",
type: a.WANT,
items: [ {
tag: "Wood",
per: 100,
min: 30,
max: 90
} ]
}, {
name: "quest_want_1",
type: a.WANT,
items: [ {
tag: "Wood1",
per: 100,
min: 30,
max: 90
} ]
}, {
name: "quest_want_2",
type: a.WANT,
items: [ {
tag: "Wood2",
per: 100,
min: 30,
max: 90
} ]
}, {
name: "quest_want_3",
type: a.WANT,
items: [ {
tag: "Wool",
per: 100,
min: 15,
max: 45
} ]
}, {
name: "quest_want_4",
type: a.WANT,
items: [ {
tag: "Milk",
per: 100,
min: 20,
max: 60
} ]
}, {
name: "quest_want_5",
type: a.WANT,
items: [ {
tag: "Cheese",
per: 100,
min: 10,
max: 30
} ]
}, {
name: "quest_want_6",
type: a.WANT,
items: [ {
tag: "Butter",
per: 100,
min: 10,
max: 30
} ]
}, {
name: "quest_want_7",
type: a.WANT,
items: [ {
tag: "Egg",
per: 100,
min: 30,
max: 90
} ]
}, {
name: "quest_want_8",
type: a.WANT,
items: [ {
tag: "Radish",
per: 100,
min: 30,
max: 90
} ]
}, {
name: "quest_want_9",
type: a.WANT,
items: [ {
tag: "Tomato",
per: 100,
min: 30,
max: 90
} ]
}, {
name: "quest_want_10",
type: a.WANT,
items: [ {
tag: "Carrot",
per: 100,
min: 30,
max: 90
} ]
}, {
name: "quest_want_11",
type: a.WANT,
items: [ {
tag: "Corn",
per: 100,
min: 30,
max: 90
} ]
}, {
name: "quest_want_12",
type: a.WANT,
items: [ {
tag: "RedRadish",
per: 100,
min: 30,
max: 90
} ]
}, {
name: "quest_want_13",
type: a.WANT,
items: [ {
tag: "Cactus0",
per: 100,
min: 30,
max: 90
} ]
}, {
name: "quest_want_14",
type: a.WANT,
items: [ {
tag: "Mushroom0",
per: 100,
min: 40,
max: 120
} ]
}, {
name: "quest_want_15",
type: a.WANT,
items: [ {
tag: "BlueBerry",
per: 100,
min: 30,
max: 90
} ]
}, {
name: "quest_want_16",
type: a.WANT,
items: [ {
tag: "StrawBerry",
per: 100,
min: 30,
max: 90
} ]
}, {
name: "quest_want_17",
type: a.WANT,
items: [ {
tag: "Grape",
per: 100,
min: 20,
max: 60
} ]
}, {
name: "quest_want_18",
type: a.WANT,
items: [ {
tag: "PineApple",
per: 100,
min: 20,
max: 60
} ]
}, {
name: "quest_want_19",
type: a.WANT,
items: [ {
tag: "Muscat",
per: 100,
min: 6,
max: 18
} ]
}, {
name: "quest_want_20",
type: a.WANT,
items: [ {
tag: "Orange",
per: 100,
min: 20,
max: 60
} ]
}, {
name: "quest_want_21",
type: a.WANT,
items: [ {
tag: "Apple",
per: 100,
min: 20,
max: 60
} ]
}, {
name: "quest_want_22",
type: a.WANT,
items: [ {
tag: "Pear",
per: 100,
min: 20,
max: 60
} ]
}, {
name: "quest_want_23",
type: a.WANT,
items: [ {
tag: "Coconut",
per: 100,
min: 30,
max: 90
} ]
}, {
name: "quest_want_24",
type: a.WANT,
items: [ {
tag: "Banana",
per: 100,
min: 10,
max: 30
} ]
}, {
name: "quest_want_25",
type: a.WANT,
items: [ {
tag: "Peach",
per: 100,
min: 9,
max: 27
} ]
}, {
name: "quest_want_26",
type: a.WANT,
items: [ {
tag: "Stone",
per: 100,
min: 30,
max: 90
} ]
}, {
name: "quest_want_27",
type: a.WANT,
items: [ {
tag: "Copper",
per: 100,
min: 30,
max: 90
} ]
}, {
name: "quest_want_28",
type: a.WANT,
items: [ {
tag: "Silver",
per: 100,
min: 30,
max: 90
} ]
}, {
name: "quest_want_29",
type: a.WANT,
items: [ {
tag: "Gold",
per: 100,
min: 20,
max: 60
} ]
}, {
name: "quest_want_30",
type: a.WANT,
items: [ {
tag: "Diamond",
per: 100,
min: 3,
max: 9
} ]
}, {
name: "quest_want_31",
type: a.WANT,
items: [ {
tag: "Ruby",
per: 100,
min: 5,
max: 15
} ]
}, {
name: "quest_want_32",
type: a.WANT,
items: [ {
tag: "Marble0",
per: 100,
min: 10,
max: 30
} ]
}, {
name: "quest_want_33",
type: a.WANT,
items: [ {
tag: "Starfish",
per: 100,
min: 5,
max: 15
} ]
}, {
name: "quest_want_34",
type: a.WANT,
items: [ {
tag: "Shell",
per: 100,
min: 5,
max: 15
} ]
}, {
name: "quest_eat_0",
type: a.EAT,
items: [ {
tag: "Banana",
per: 100,
min: 6,
max: 12
}, {
tag: "Butter",
per: 100,
min: 3,
max: 6
}, {
tag: "Cheese",
per: 100,
min: 6,
max: 12
}, {
tag: "Egg",
per: 100,
min: 6,
max: 12
} ]
}, {
name: "quest_eat_2",
type: a.EAT,
items: [ {
tag: "Peach",
per: 100,
min: 6,
max: 12
}, {
tag: "Butter",
per: 100,
min: 3,
max: 6
}, {
tag: "Milk",
per: 100,
min: 6,
max: 12
}, {
tag: "Egg",
per: 100,
min: 6,
max: 12
} ]
}, {
name: "quest_eat_4",
type: a.EAT,
items: [ {
tag: "Starfish",
per: 100,
min: 5,
max: 10
}, {
tag: "Radish",
per: 100,
min: 10,
max: 20
}, {
tag: "Tomato",
per: 100,
min: 10,
max: 20
}, {
tag: "Carrot",
per: 100,
min: 10,
max: 20
}, {
tag: "Corn",
per: 100,
min: 10,
max: 20
} ]
}, {
name: "quest_eat_7",
type: a.EAT,
items: [ {
tag: "Mushroom0",
per: 100,
min: 24,
max: 48
}, {
tag: "Milk",
per: 100,
min: 12,
max: 24
}, {
tag: "Butter",
per: 100,
min: 4,
max: 8
}, {
tag: "Cheese",
per: 100,
min: 6,
max: 12
} ]
}, {
name: "quest_eat_9",
type: a.EAT,
items: [ {
tag: "Grape",
per: 100,
min: 12,
max: 24
}, {
tag: "PineApple",
per: 100,
min: 8,
max: 16
}, {
tag: "StrawBerry",
per: 100,
min: 10,
max: 20
}, {
tag: "Orange",
per: 100,
min: 10,
max: 20
}, {
tag: "Pear",
per: 100,
min: 6,
max: 12
} ]
}, {
name: "quest_eat_10",
type: a.EAT,
items: [ {
tag: "PineApple",
per: 100,
min: 8,
max: 16
}, {
tag: "Coconut",
per: 100,
min: 12,
max: 24
}, {
tag: "Cactus0",
per: 100,
min: 10,
max: 20
} ]
}, {
name: "quest_drink_4",
type: a.DRINK,
items: [ {
tag: "Pear",
per: 100,
min: 6,
max: 12
}, {
tag: "Apple",
per: 100,
min: 12,
max: 24
}, {
tag: "Grape",
per: 100,
min: 8,
max: 16
} ]
}, {
name: "quest_drink_5",
type: a.DRINK,
items: [ {
tag: "Muscat",
per: 100,
min: 8,
max: 16
}, {
tag: "Grape",
per: 100,
min: 8,
max: 16
} ]
}, {
name: "quest_repair_0",
type: a.REPAIR,
items: [ {
tag: "Wood1",
per: 100,
min: 30,
max: 60
}, {
tag: "Wood",
per: 100,
min: 40,
max: 80
}, {
tag: "Coconut",
per: 100,
min: 20,
max: 40
}, {
tag: "Stone",
per: 100,
min: 20,
max: 40
} ]
}, {
name: "quest_repair_2",
type: a.MAKE,
items: [ {
tag: "Wood1",
per: 100,
min: 60,
max: 120
}, {
tag: "Wood2",
per: 100,
min: 40,
max: 80
}, {
tag: "Stone",
per: 100,
min: 30,
max: 60
}, {
tag: "Marble0",
per: 100,
min: 10,
max: 20
} ]
}, {
name: "quest_make_7",
type: a.MAKE,
items: [ {
tag: "Shell",
per: 100,
min: 10,
max: 20
}, {
tag: "Copper",
per: 100,
min: 10,
max: 20
}, {
tag: "Wool",
per: 100,
min: 15,
max: 30
} ]
}, {
name: "quest_make_9",
type: a.MAKE,
items: [ {
tag: "Ruby",
per: 100,
min: 1,
max: 2
}, {
tag: "Gold",
per: 100,
min: 12,
max: 24
}, {
tag: "Silver",
per: 100,
min: 12,
max: 24
} ]
}, {
name: "quest_make_9",
type: a.MAKE,
items: [ {
tag: "Diamond",
per: 100,
min: 1,
max: 2
}, {
tag: "Gold",
per: 100,
min: 12,
max: 24
}, {
tag: "Silver",
per: 100,
min: 12,
max: 24
} ]
}, {
name: "quest_make_3",
type: a.MAKE,
items: [ {
tag: "Marble0",
per: 100,
min: 14,
max: 28
}, {
tag: "Wood1",
per: 100,
min: 20,
max: 40
}, {
tag: "Wood2",
per: 100,
min: 20,
max: 40
} ]
} ];
cc.Class({
extends: i,
init: function(e) {
this._super(e, "Map3", s);
}
});
cc._RF.pop();
}, {
Quest: "Quest",
RequestType: "RequestType"
} ],
QuestMap4: [ function(e, t) {
"use strict";
cc._RF.push(t, "c99b8g2oKtPjohbQSsXIRvK", "QuestMap4");
var i = e("Quest"), a = e("RequestType"), s = [ {
name: "quest_want_0",
type: a.WANT,
items: [ {
tag: "Wood",
per: 100,
min: 50,
max: 150
} ]
}, {
name: "quest_want_1",
type: a.WANT,
items: [ {
tag: "Wood1",
per: 100,
min: 50,
max: 150
} ]
}, {
name: "quest_want_2",
type: a.WANT,
items: [ {
tag: "Wood2",
per: 100,
min: 50,
max: 150
} ]
}, {
name: "quest_want_wood3",
type: a.WANT,
items: [ {
tag: "Wood3",
per: 100,
min: 50,
max: 150
} ]
}, {
name: "quest_want_3",
type: a.WANT,
items: [ {
tag: "Wool",
per: 100,
min: 50,
max: 150
} ]
}, {
name: "quest_want_4",
type: a.WANT,
items: [ {
tag: "Milk",
per: 100,
min: 50,
max: 150
} ]
}, {
name: "quest_want_5",
type: a.WANT,
items: [ {
tag: "Cheese",
per: 100,
min: 50,
max: 150
} ]
}, {
name: "quest_want_6",
type: a.WANT,
items: [ {
tag: "Butter",
per: 100,
min: 50,
max: 150
} ]
}, {
name: "quest_want_7",
type: a.WANT,
items: [ {
tag: "Egg",
per: 100,
min: 50,
max: 150
} ]
}, {
name: "quest_want_8",
type: a.WANT,
items: [ {
tag: "Radish",
per: 100,
min: 50,
max: 150
} ]
}, {
name: "quest_want_9",
type: a.WANT,
items: [ {
tag: "Tomato",
per: 100,
min: 50,
max: 150
} ]
}, {
name: "quest_want_10",
type: a.WANT,
items: [ {
tag: "Carrot",
per: 100,
min: 50,
max: 150
} ]
}, {
name: "quest_want_11",
type: a.WANT,
items: [ {
tag: "Corn",
per: 100,
min: 50,
max: 150
} ]
}, {
name: "quest_want_12",
type: a.WANT,
items: [ {
tag: "RedRadish",
per: 100,
min: 50,
max: 150
} ]
}, {
name: "quest_want_13",
type: a.WANT,
items: [ {
tag: "Cactus0",
per: 100,
min: 50,
max: 150
} ]
}, {
name: "quest_want_14",
type: a.WANT,
items: [ {
tag: "Mushroom0",
per: 100,
min: 60,
max: 180
} ]
}, {
name: "quest_want_15",
type: a.WANT,
items: [ {
tag: "BlueBerry",
per: 100,
min: 50,
max: 150
} ]
}, {
name: "quest_want_16",
type: a.WANT,
items: [ {
tag: "StrawBerry",
per: 100,
min: 50,
max: 150
} ]
}, {
name: "quest_want_17",
type: a.WANT,
items: [ {
tag: "Grape",
per: 100,
min: 50,
max: 150
} ]
}, {
name: "quest_want_18",
type: a.WANT,
items: [ {
tag: "PineApple",
per: 100,
min: 50,
max: 150
} ]
}, {
name: "quest_want_19",
type: a.WANT,
items: [ {
tag: "Muscat",
per: 100,
min: 50,
max: 150
} ]
}, {
name: "quest_want_20",
type: a.WANT,
items: [ {
tag: "Orange",
per: 100,
min: 50,
max: 150
} ]
}, {
name: "quest_want_21",
type: a.WANT,
items: [ {
tag: "Apple",
per: 100,
min: 50,
max: 150
} ]
}, {
name: "quest_want_22",
type: a.WANT,
items: [ {
tag: "Pear",
per: 100,
min: 50,
max: 150
} ]
}, {
name: "quest_want_23",
type: a.WANT,
items: [ {
tag: "Coconut",
per: 100,
min: 50,
max: 150
} ]
}, {
name: "quest_want_24",
type: a.WANT,
items: [ {
tag: "Banana",
per: 100,
min: 30,
max: 90
} ]
}, {
name: "quest_want_25",
type: a.WANT,
items: [ {
tag: "Peach",
per: 100,
min: 30,
max: 90
} ]
}, {
name: "quest_want_cherry",
type: a.WANT,
items: [ {
tag: "Cherry",
per: 100,
min: 30,
max: 90
} ]
}, {
name: "quest_want_26",
type: a.WANT,
items: [ {
tag: "Stone",
per: 100,
min: 50,
max: 150
} ]
}, {
name: "quest_want_27",
type: a.WANT,
items: [ {
tag: "Copper",
per: 100,
min: 50,
max: 150
} ]
}, {
name: "quest_want_28",
type: a.WANT,
items: [ {
tag: "Silver",
per: 100,
min: 50,
max: 150
} ]
}, {
name: "quest_want_29",
type: a.WANT,
items: [ {
tag: "Gold",
per: 100,
min: 50,
max: 150
} ]
}, {
name: "quest_want_30",
type: a.WANT,
items: [ {
tag: "Diamond",
per: 100,
min: 10,
max: 30
} ]
}, {
name: "quest_want_orichalcum",
type: a.WANT,
items: [ {
tag: "Orichalcum",
per: 100,
min: 5,
max: 15
} ]
}, {
name: "quest_want_31",
type: a.WANT,
items: [ {
tag: "Ruby",
per: 100,
min: 30,
max: 90
} ]
}, {
name: "quest_want_32",
type: a.WANT,
items: [ {
tag: "Marble0",
per: 100,
min: 40,
max: 120
} ]
}, {
name: "quest_want_33",
type: a.WANT,
items: [ {
tag: "Starfish",
per: 100,
min: 30,
max: 90
} ]
}, {
name: "quest_want_34",
type: a.WANT,
items: [ {
tag: "Shell",
per: 100,
min: 30,
max: 90
} ]
}, {
name: "quest_eat_0",
type: a.EAT,
items: [ {
tag: "Cherry",
per: 100,
min: 6,
max: 12
}, {
tag: "Milk",
per: 100,
min: 10,
max: 20
}, {
tag: "Cheese",
per: 100,
min: 10,
max: 20
}, {
tag: "BlueBerry",
per: 100,
min: 15,
max: 30
}, {
tag: "Muscat",
per: 100,
min: 10,
max: 20
}, {
tag: "Banana",
per: 100,
min: 10,
max: 20
} ]
}, {
name: "quest_eat_9",
type: a.EAT,
items: [ {
tag: "Cherry",
per: 100,
min: 6,
max: 12
}, {
tag: "Peach",
per: 100,
min: 10,
max: 20
}, {
tag: "Coconut",
per: 100,
min: 30,
max: 60
}, {
tag: "StrawBerry",
per: 100,
min: 20,
max: 40
}, {
tag: "Orange",
per: 100,
min: 20,
max: 40
}, {
tag: "Grape",
per: 100,
min: 15,
max: 30
} ]
}, {
name: "quest_eat_2",
type: a.EAT,
items: [ {
tag: "Cherry",
per: 100,
min: 6,
max: 12
}, {
tag: "Egg",
per: 100,
min: 20,
max: 40
}, {
tag: "Butter",
per: 100,
min: 15,
max: 30
}, {
tag: "PineApple",
per: 100,
min: 10,
max: 20
}, {
tag: "Apple",
per: 100,
min: 20,
max: 40
}, {
tag: "Pear",
per: 100,
min: 20,
max: 40
} ]
}, {
name: "quest_eat_4",
type: a.EAT,
items: [ {
tag: "Radish",
per: 100,
min: 50,
max: 100
}, {
tag: "Tomato",
per: 100,
min: 50,
max: 100
}, {
tag: "Carrot",
per: 100,
min: 50,
max: 100
}, {
tag: "RedRadish",
per: 100,
min: 50,
max: 100
}, {
tag: "Corn",
per: 100,
min: 50,
max: 100
}, {
tag: "Mushroom0",
per: 100,
min: 100,
max: 200
} ]
}, {
name: "quest_repair_1",
type: a.REPAIR,
items: [ {
tag: "Wood3",
per: 100,
min: 30,
max: 60
}, {
tag: "Wood1",
per: 100,
min: 50,
max: 100
}, {
tag: "Shell",
per: 100,
min: 20,
max: 40
}, {
tag: "Starfish",
per: 100,
min: 20,
max: 40
}, {
tag: "Cactus0",
per: 100,
min: 30,
max: 60
} ]
}, {
name: "quest_make_3",
type: a.MAKE,
items: [ {
tag: "Wood3",
per: 100,
min: 30,
max: 60
}, {
tag: "Wood2",
per: 100,
min: 50,
max: 100
}, {
tag: "Marble0",
per: 100,
min: 30,
max: 60
}, {
tag: "Stone",
per: 100,
min: 50,
max: 100
} ]
}, {
name: "quest_make_2",
type: a.MAKE,
items: [ {
tag: "Wood3",
per: 100,
min: 30,
max: 60
}, {
tag: "Wood",
per: 100,
min: 60,
max: 120
}, {
tag: "Copper",
per: 100,
min: 50,
max: 100
}, {
tag: "Wool",
per: 100,
min: 50,
max: 100
} ]
}, {
name: "quest_make_9",
type: a.MAKE,
items: [ {
tag: "Orichalcum",
per: 100,
min: 3,
max: 6
}, {
tag: "Diamond",
per: 100,
min: 12,
max: 24
}, {
tag: "Gold",
per: 100,
min: 30,
max: 60
} ]
}, {
name: "quest_make_8",
type: a.MAKE,
items: [ {
tag: "Orichalcum",
per: 100,
min: 3,
max: 6
}, {
tag: "Ruby",
per: 100,
min: 20,
max: 40
}, {
tag: "Silver",
per: 100,
min: 50,
max: 100
} ]
} ];
cc.Class({
extends: i,
init: function(e) {
this._super(e, "Map4", s);
}
});
cc._RF.pop();
}, {
Quest: "Quest",
RequestType: "RequestType"
} ],
QuestPopup: [ function(e, t) {
"use strict";
cc._RF.push(t, "4e87dNUKl5CGImiaWJsoOlW", "QuestPopup");
var i = e("Popup"), a = e("Game"), s = (e("SaveData"), e("QuestCell"));
e("AppPlatform");
cc.Class({
extends: i,
properties: {
questCell: cc.Prefab,
contents: cc.Node,
buttonRefresh: cc.Button,
labelTitle: cc.Label
},
onLoad: function() {
this._super();
this.flagCloudSave = !0;
this.flagUseOk = !1;
this.cells = [];
for (var e = a.getQuest().GetQuestLimit(), t = 0; t < e; t++) {
var i = cc.instantiate(this.questCell);
if (i) {
this.contents.addChild(i);
i.setPosition(cc.v2(-1.5, -28 * t));
i.questIdx = t;
var n = i.getComponent(s);
n && (this.cells[t] = n);
}
}
},
start: function() {
this.node.active = !1;
},
Show: function() {
if (this._super()) {
this.refresh();
this.labelTitle.string = a.getLocalizedStr("quest_label");
}
},
hide_finish: function() {
this.cloudSave();
this.touch_off();
this.flagOpen = !1;
this.node.active = !1;
a.EnablePress();
},
RefreshList: function() {
for (var e = this.cells.length, t = a.getQuest().GetNum(), i = 0; i < e; i++) {
var s = this.cells[i];
if (i < t) {
s.node.active = !0;
s.ClearInfo();
s.SetInfo(i);
} else s.node.active = !1;
}
this.contents.height = 28 * t;
},
PressRefresh: function() {
a.IsNotPress() || a.scene.manager.ShowRefreshPopup();
},
PressHelp: function() {
this.IsNotAvailableButton() || a.tutorial.ShowExplainPopup("quest");
},
RewardAdsSuccess: function() {
this.node.runAction(cc.callFunc(this._rewardAdsSuccess, this));
},
RewardAdsClose: function() {
this.node.runAction(cc.callFunc(this._rewardAdsClose, this));
},
_rewardAdsSuccess: function() {
a.getQuest().RefreshAllQuest();
this.RefreshList();
},
_rewardAdsClose: function() {
a.getQuest().ResetRewardTime();
},
refresh: function() {
this.RefreshList();
}
});
cc._RF.pop();
}, {
AppPlatform: "AppPlatform",
Game: "Game",
Popup: "Popup",
QuestCell: "QuestCell",
SaveData: "SaveData"
} ],
Quest: [ function(e, t) {
"use strict";
cc._RF.push(t, "31717FYceZHSKKNI/4UlHJr", "Quest");
var i = e("BaseModel"), a = (e("RequestType"), e("ItemRank"), [ "quest_str_want", "quest_str_make", "quest_str_repair", "quest_str_eat", "quest_str_drink" ]), s = [ "です", "よー！", "わ", "のじゃ", "のぢゃ", "っス", "な", "ぜ", "ッピ", "バブ", "ニャン", "ワン" ];
cc.Class({
extends: i,
init: function(e, t, i) {
this._super(e, "Quest." + t);
this.refreshTime = 0;
this.refreshInterval = 120;
this.questMaster = [];
this.questList = [];
this.questLimit = 10;
this.requestTemplates = i;
this.rewardTime = 0;
for (var a = 0; a < this.questLimit; a++) {
var s = {
idx: a,
time: 0,
coin: 0,
message: "",
urgent: 0,
items: [ {
tag: "",
rank: 0,
val: 0
}, {
tag: "",
rank: 0,
val: 0
}, {
tag: "",
rank: 0,
val: 0
}, {
tag: "",
rank: 0,
val: 0
}, {
tag: "",
rank: 0,
val: 0
}, {
tag: "",
rank: 0,
val: 0
} ],
req_name: "",
req_type: 0
};
this.questMaster.push(s);
}
},
load: function() {
this.refreshTime = this.loadNumber("refreshTime", 0);
this.rewardTime = this.loadNumber("rewardTime", 0);
for (var e = 0; e < this.questLimit; e++) {
var t = this.questMaster[e];
t.time = this.loadNumber("questMaster.time." + e, 0);
if (0 != t.time) {
var i = this.loadString("questMaster.str." + e, "");
this.string_to_quest(t, i);
}
}
this.questList = [];
for (var a = 0; a < this.questLimit; a++) 0 != this.questMaster[a].time && this.questList.push(a);
var s = this;
this.questList.sort(function(e, t) {
var i = s.GetQuestData(e), a = s.GetQuestData(t);
return null == i || null == a ? 0 : i.time - a.time;
});
},
reset: function() {
this.refreshTime = 0;
this.saveNumber("refreshTime", 0);
this.rewardTime = 0;
this.saveNumber("rewardTime", 0);
this.questList = [];
for (var e = 0; e < this.questLimit; e++) {
this.questMaster[e].time = 0;
this.saveNumber("questMaster.time." + e, 0);
this.saveString("questMaster.str." + e, "");
}
},
newgame: function() {
this.reset();
},
GetNum: function() {
return this.questList.length;
},
GetQuestLimit: function() {
return this.questLimit;
},
GetQuestData: function(e) {
var t = this.get_master_idx(e);
return -1 != t ? this.questMaster[t] : null;
},
GetQuestMessage: function(e) {
var t = this.GetQuestData(e);
if (null == t) return "ERROR";
if ("" == t.req_name) return t.message;
var i = 1 == t.urgent ? "[" + this.game.getLocalizedStr("quest_urgent") + "] " : "", n = this.game.getLocalizedStr(t.req_name), o = this.game.getLocalizedStr(a[t.req_type] + "_all").replace("XXXX", n), c = "";
if (this.game.isJapanese()) {
var r = Math.floor(Math.random() * s.length);
c = s[r];
}
return i + o + c;
},
GetCheckResult: function(e) {
var t = {
all: !1,
items: [ !1, !1, !1, !1, !1, !1 ]
}, i = this.GetQuestData(e);
if (null == i) return t;
for (var a = !1, s = 0; s < i.items.length; s++) {
var n = i.items[s];
if (n && "" != n.tag) {
var o = this.game.item.getNum(n.tag, n.rank) >= n.val;
t.items[s] = o;
o || (a = !0);
}
}
t.all = !a;
return t;
},
ExecQuest: function(e) {
var t = this.GetQuestData(e);
if (null == t) return !1;
var i = t.coin * (1 == t.urgent ? 2 : 1);
this.game.coin.saveCurrency(i);
for (var a = 0; a < t.items.length; a++) {
var s = t.items[a];
s && "" != s.tag && this.game.item.useNum(s.tag, s.rank, s.val);
}
this.remove_quest(e);
return !0;
},
RefreshQuestWithOption: function(e, t) {
for (var i = Math.floor(this.refreshTime / this.refreshInterval) * this.refreshInterval + this.refreshInterval, a = !1, s = 0; s < this.questLimit && !(i > e); s++) {
this.questList.length >= this.questLimit && this.remove_quest(0);
var n = !1;
if (t > 0) {
var o = s + t;
if (Math.random() * this.questLimit < o) {
n = !0;
t--;
}
}
this.add_quest(n);
i += this.refreshInterval;
a = !0;
}
if (a) {
this.refreshTime = e;
this.saveNumber("refreshTime", this.refreshTime);
}
return a;
},
RefreshQuest: function(e) {
return this.RefreshQuestWithOption(e, 0);
},
RefreshAllQuest: function() {
this.refreshTime = 0;
var e = Math.floor(Date.now() / 1e3);
this.RefreshQuestWithOption(e, 1);
},
GetRewardTime: function() {
return this.rewardTime;
},
ResetRewardTime: function() {
this.rewardTime = Math.floor(Date.now() / 1e3);
this.saveNumber("rewardTime", this.rewardTime);
},
get_master_idx: function(e) {
if (e >= 0 && e < this.questList.length) {
var t = this.questList[e];
if (t >= 0 && t < this.questLimit) return t;
}
return -1;
},
get_empty_master: function() {
for (var e = 0; e < this.questLimit; e++) {
var t = this.questMaster[e];
if (0 == t.time) return t;
}
return null;
},
clear_quest_data: function(e) {
e.coin = 0;
e.message = "";
e.urgent = 0;
for (var t = 0; t < 6; t++) {
e.items[t].tag = "";
e.items[t].rank = 0;
e.items[t].val = 0;
}
e.req_name = "";
e.req_type = 0;
},
add_quest: function(e) {
var t = this.get_empty_master();
if (null != t) {
this.clear_quest_data(t);
var i = Date.now();
t.time = i;
this.make_quest_data(t, e);
this.questList.push(t.idx);
this.saveNumber("questMaster.time." + t.idx, t.time);
var a = this.quest_to_string(t);
this.saveString("questMaster.str." + t.idx, a);
}
},
remove_quest: function(e) {
var t = this.GetQuestData(e);
if (null != t) {
var i = t.idx;
t.time = 0;
this.saveNumber("questMaster.time." + i, 0);
this.questList.splice(e, 1);
}
},
quest_to_string: function(e) {
var t = "" + e.coin;
t += "," + e.message;
t += "," + e.urgent;
for (var i = 0; i < 6; i++) {
t += "," + e.items[i].tag;
t += "," + e.items[i].rank;
t += "," + e.items[i].val;
}
return (t += "," + e.req_name) + "," + e.req_type;
},
string_to_quest: function(e, t) {
var i = t.split(",");
e.coin = i[0] - 0;
e.message = i[1];
e.urgent = i[2] - 0;
for (var a = 3, s = 0; s < 6; s++) {
e.items[s].tag = i[a++];
e.items[s].rank = i[a++] - 0;
e.items[s].val = i[a++] - 0;
}
if (!(a >= i.length)) {
e.req_name = i[a++];
e.req_type = i[a++] - 0;
}
},
make_quest_data: function(e, t) {
var i = this.requestTemplates[Math.floor(Math.random() * this.requestTemplates.length)];
e.urgent = t ? 1 : Math.random() < .2 ? 1 : 0;
e.req_name = i.name;
e.req_type = i.type;
for (var a = 0, s = 0, n = 0; n < i.items.length; n++) {
var o = i.items[n];
if (!(o.per < 100 * Math.random())) {
this.game.item.getRank(o.tag);
var c = Math.round(Math.random() * (o.max - o.min) + o.min);
e.items[s].tag = o.tag;
e.items[s].rank = 0;
e.items[s].val = c;
a += c * this.game.item.getPrice(o.tag) * 1;
s++;
}
}
e.coin = a;
}
});
cc._RF.pop();
}, {
BaseModel: "BaseModel",
ItemRank: "ItemRank",
RequestType: "RequestType"
} ],
RandomDrop: [ function(e, t) {
"use strict";
cc._RF.push(t, "e0f16m3p4tGW7Ckobv42f7q", "RandomDrop");
var i = e("Resource"), a = e("ResourceState"), s = e("CommandType"), n = e("Game"), o = e("SaveData");
cc.Class({
extends: i,
properties: {
dropItems: [ cc.Prefab ]
},
ctor: function() {
this.item = null;
this.dropIdx = 0;
},
onLoad: function() {
this._super();
this.reviveInterval > 0 && (this.reviveInterval = this.recalc_interval(this.reviveInterval));
this.dropIdx = o.loadNumber(this.savekey + ".dropIdx", 0);
},
progress: function(e) {
if (e >= this.reviveInterval) {
this.select_drop_idx();
this.change_state(a.REVIVE);
}
},
getAvailableCommand: function() {
return this.state >= a.REVIVE ? s.HOE : s.NONE;
},
refreshView: function() {
if (null == this.item && this.state >= a.REVIVE) {
var e = cc.instantiate(this.dropItems[this.dropIdx]);
if (e) {
this.node.addChild(e);
this.item = e;
}
}
},
drop_item: function() {
var e = this.item.parent.convertToWorldSpaceAR(this.item.getPosition());
this.item.parent = null;
n.scene.node.addChild(this.item);
this.item.setPosition(this.node.parent.convertToNodeSpaceAR(e));
var t = this.item.getComponent("DropItem");
t && t.drop();
this.item = null;
},
select_drop_idx: function() {
this.dropIdx = Math.floor(Math.random() * this.dropItems.length);
o.saveNumber(this.savekey + ".dropIdx", this.dropIdx);
}
});
cc._RF.pop();
}, {
CommandType: "CommandType",
Game: "Game",
Resource: "Resource",
ResourceState: "ResourceState",
SaveData: "SaveData"
} ],
RefreshPopup: [ function(e, t) {
"use strict";
cc._RF.push(t, "24998CHqmxFEZToYEFuZQAd", "RefreshPopup");
var i = e("PopupReward"), a = e("Game");
cc.Class({
extends: i,
okSkipSub: function() {
if (a.scene.questPopup) {
a.scene.questPopup.RewardAdsSuccess();
a.scene.questPopup.RewardAdsClose();
}
}
});
cc._RF.pop();
}, {
Game: "Game",
PopupReward: "PopupReward"
} ],
RemoteLock: [ function(e, t) {
"use strict";
cc._RF.push(t, "8d577YzLalF/5nHg3CDJwh6", "RemoteLock");
var i = e("SaveData"), a = e("Game");
cc.Class({
extends: cc.Component,
properties: {
saveKey: ""
},
onLoad: function() {
this.lock = !0;
"" != this.saveKey && (this.lock = i.loadBoolean(this.saveKey + ".lock", !0));
},
start: function() {
this.refresh();
},
refresh: function() {
var e = this.node.getComponent("Gimmick");
e && e.SetLock(this.lock);
},
IsLock: function() {
return this.lock;
},
SetLock: function(e) {
if (this.lock != e) {
this.lock = e;
"" != this.saveKey && i.saveBoolean(this.saveKey + ".lock", this.lock);
}
},
ChangeLock: function(e) {
this.SetLock(e);
this.refresh();
},
OpenLock: function() {
this.SetLock(!1);
this.close_up();
},
close_up: function() {
a.scene.PauseInput();
a.scene.CameraModeFree();
a.scene.hero.DisableCollider();
var e = a.scene.camera.node.position, t = this.node.position;
a.scene.camera.node.runAction(cc.sequence(cc.moveTo(2, t).easing(cc.easeInOut(3)), cc.delayTime(.5), cc.callFunc(this.refresh, this), cc.delayTime(.5), cc.callFunc(this.cloud_save, this), cc.moveTo(2, e).easing(cc.easeInOut(3)), cc.callFunc(this.close_up_finish, this)));
},
close_up_finish: function() {
a.scene.ResumeInput();
a.scene.CameraModeTracking();
a.scene.hero.EnableCollider();
},
cloud_save: function() {
"" != this.saveKey && a.savedGames && a.savedGames.sendData();
}
});
cc._RF.pop();
}, {
Game: "Game",
SaveData: "SaveData"
} ],
RemoteSwitch: [ function(e, t) {
"use strict";
cc._RF.push(t, "d50eb0Wv25LGa2RGYB2YGXi", "RemoteSwitch");
var i = e("Gimmick"), a = e("CommandType"), s = e("RemoteLock");
cc.Class({
extends: i,
properties: {
removeLock: s
},
onLoad: function() {
this._super();
},
getAvailableCommand: function() {
return a.EVENT;
},
execCommand: function(e) {
if (e == a.EVENT) {
var t = this.removeLock.IsLock();
this.removeLock.SetLock(!t);
}
}
});
cc._RF.pop();
}, {
CommandType: "CommandType",
Gimmick: "Gimmick",
RemoteLock: "RemoteLock"
} ],
RequestPopup: [ function(e, t) {
"use strict";
cc._RF.push(t, "66f7eu0UCxIbb7RXPD5HHkU", "RequestPopup");
var i = e("Popup"), a = e("Game"), s = e("CoinLabel"), n = e("ItemInfo");
cc.Class({
extends: i,
properties: {
titleLabel: cc.Label,
coinLabel: s,
prefabItemInfo: cc.Prefab,
buttonOk: cc.Button,
x2Arrow: cc.Node,
x2Label: s
},
onLoad: function() {
this._super();
this.questIdx = 0;
this.itemInfos = [];
for (var e = 0; e < 6; e++) {
var t = cc.instantiate(this.prefabItemInfo);
if (t) {
this.window.addChild(t);
t.setPosition(cc.v2(18 * e - 45, 0));
t.color = new cc.Color(245, 189, 126);
var i = t.getComponent(n);
i && (this.itemInfos[e] = i);
}
}
},
Ok: function() {
a.achievement && a.achievement.Unlock("try_request");
a.getQuest().ExecQuest(this.questIdx);
a.scene.questPopup && a.scene.questPopup.RefreshList();
a.scene.ui.RefreshCoin();
this.Hide();
},
SetInfo: function(e) {
var t = a.getQuest().GetQuestData(e);
if (null != t) {
var i = a.getQuest().GetCheckResult(e);
this.titleLabel.string = a.getQuest().GetQuestMessage(e);
this.coinLabel.SetCoin(t.coin);
var s = t.urgent;
this.x2Arrow.active = 1 == s;
if (1 == s) {
this.x2Label.SetCoin(2 * t.coin);
this.x2Arrow.x = this.coinLabel.node.x + this.coinLabel.GetWidth() + 2;
}
for (var n = 0; n < t.items.length; n++) {
this.itemInfos[n].node.active = !1;
var o = t.items[n];
if (o && "" != o.tag) {
var c = i.items[n];
this.itemInfos[n].node.active = !0;
this.itemInfos[n].SetTag(o.tag);
this.itemInfos[n].SetRank(o.rank);
this.itemInfos[n].SetNum(o.val);
this.itemInfos[n].SetNumColor(c ? new cc.Color(255, 255, 255) : new cc.Color(240, 0, 0));
}
}
this.buttonOk.interactable = i.all;
this.flagUseOk = i.all;
}
},
ShowWithIdx: function(e) {
if (this.Show()) {
this.questIdx = e;
this.clear_info();
this.SetInfo(e);
}
},
clear_info: function() {
this.titleLabel.string = "エラー";
this.coinLabel.SetCoin(0);
for (var e = 0; e < this.itemInfos.length; e++) this.itemInfos[e].Reset();
this.buttonOk.interactable = !1;
}
});
cc._RF.pop();
}, {
CoinLabel: "CoinLabel",
Game: "Game",
ItemInfo: "ItemInfo",
Popup: "Popup"
} ],
RequestType: [ function(e, t) {
"use strict";
cc._RF.push(t, "79c6acWbYlEgqS0f/AtRksr", "RequestType");
var i = cc.Enum({
WANT: 0,
MAKE: 1,
REPAIR: 2,
EAT: 3,
DRINK: 4,
MAX: 5
});
t.exports = i;
cc._RF.pop();
}, {} ],
ResetConfirmPopup: [ function(e, t) {
"use strict";
cc._RF.push(t, "14982HxIjBJZ7CNrHqrGzgW", "ResetConfirmPopup");
var i = e("Popup"), a = e("Game"), s = e("Direction");
cc.Class({
extends: i,
properties: {
titleLabel: cc.Label
},
Show: function() {
if (this._super()) {
var e = this.titleLabel.node.getBoundingBox();
this.window.height = e.height + 34;
return !0;
}
return !1;
},
Ok: function() {
this.Hide();
a.scene.HideBannerAds();
a.scene.HideUI();
a.settingState(cc.v2(0, 0), s.UP);
a.scene.fadeCover.TransitionFade("TutorialScene", 3, new cc.Color(67, 255, 222));
a.resetAll();
}
});
cc._RF.pop();
}, {
Direction: "Direction",
Game: "Game",
Popup: "Popup"
} ],
ResetPopup: [ function(e, t) {
"use strict";
cc._RF.push(t, "87191s/Qb5MtIKwEsof5UWE", "ResetPopup");
var i = e("Popup"), a = e("Game");
cc.Class({
extends: i,
properties: {
titleLabel: cc.Label,
popupResetConfirm: cc.Prefab
},
Show: function() {
if (this._super()) {
var e = this.titleLabel.node.getBoundingBox();
this.window.height = e.height + 34;
return !0;
}
return !1;
},
Ok: function() {
this.Hide();
var e = cc.instantiate(this.popupResetConfirm);
if (e) {
a.scene.camera.node.addChild(e);
var t = e.getComponent(i);
t && t.Show();
}
}
});
cc._RF.pop();
}, {
Game: "Game",
Popup: "Popup"
} ],
ResidentPopup: [ function(e, t) {
"use strict";
cc._RF.push(t, "b7c27126hdFSp3PRXnW9qXK", "ResidentPopup");
var i = e("Popup"), a = e("Game"), s = e("CoinLabel");
cc.Class({
extends: i,
properties: {
labelName: cc.Label,
labelMessage: cc.Label,
labelLvHelp: cc.Label,
buttonLvHelp: cc.Button,
coinLabelHelp: s,
labelLvBox: cc.Label,
buttonLvBox: cc.Button,
coinLabelBox: s
},
ctor: function() {
this.lvHelp = null;
this.lvBox = null;
this.flagUseOk = !1;
this.residentTag = "";
},
onLoad: function() {
this._super();
this.strLvHelp = a.getLocalizedStr("resident_lv_help", "お手伝いレベル") + ": ";
this.strLvBox = a.getLocalizedStr("resident_lv_box", "収納ボックスレベル") + ": ";
},
Cancel: function() {
this.Hide();
if (a.achievement) {
var e = a.resident.CalcLvMaxRate(this.residentTag), t = a.achievement.ResidentTagToAchievementTag(this.residentTag);
a.achievement.Progress(t, e);
}
},
PressLvHelp: function() {
this.IsNotAvailableButton() || this.levelUp(this.lvHelp, this.labelLvHelp);
},
PressLvBox: function() {
this.IsNotAvailableButton() || this.levelUp(this.lvBox, this.labelLvBox);
},
PressHelp: function() {
this.IsNotAvailableButton() || a.tutorial.ShowExplainPopup("resident");
},
levelUp: function(e, t) {
if (e) {
var i = e.getRemainExp();
if (0 == e.isMaxLevel() && a.coin.getValue() >= i) {
e.incLevel();
a.coin.useCurrency(i);
a.scene.manager.SeLvup();
a.scene.ui.RefreshCoin();
this.renew();
if (t) {
t.node.runAction(cc.sequence(cc.jumpBy(.4, cc.v2(0, 0), 6, 2), cc.callFunc(this.levelUp_finish, this)));
return;
}
}
a.EnablePress();
}
},
levelUp_finish: function() {
a.EnablePress();
},
renew: function() {
this.renewLvHelp();
this.renewLvBox();
},
renewLvHelp: function() {
if (null != this.lvHelp) {
var e = this.lvHelp.getRemainExp(), t = 0 == this.lvHelp.isMaxLevel() && a.coin.getValue() >= e;
this.labelLvHelp.string = this.strLvHelp + this.lvHelp.getLevel();
this.buttonLvHelp.interactable = t;
this.coinLabelHelp.SetCoin(e);
}
},
renewLvBox: function() {
if (null != this.lvBox) {
var e = this.lvBox.getRemainExp(), t = 0 == this.lvBox.isMaxLevel() && a.coin.getValue() >= e;
this.labelLvBox.string = this.strLvBox + this.lvBox.getLevel();
this.buttonLvBox.interactable = t;
this.coinLabelBox.SetCoin(e);
}
},
ShowWithTag: function(e) {
if (this.Show()) {
this.residentTag = e;
var t = a.resident.GetName(e), i = a.resident.GetMessage(e);
this.lvHelp = a.resident.GetLvHelp(e);
this.lvBox = a.resident.GetLvBox(e);
this.labelName.string = t;
this.labelMessage.string = i;
this.renewLvHelp();
this.renewLvBox();
}
}
});
cc._RF.pop();
}, {
CoinLabel: "CoinLabel",
Game: "Game",
Popup: "Popup"
} ],
Resident: [ function(e, t) {
"use strict";
cc._RF.push(t, "b4ad1HIfG1NUKrsBQi687V7", "Resident");
var i = e("BaseModel"), a = e("Level"), s = {
Resident_A: {
name: "レッドウッド",
name_tag: "resident_a_name",
message: "「いい村だね。収穫を手伝うよ。集めたものは牧場前の箱に入れておくからね。」",
message_tag: "resident_a_mes",
lvHelpBase: 10,
lvHelpRate: 40,
lvBoxBase: 10,
lvBoxRate: 40
},
Resident_B: {
name: "オルダー",
name_tag: "resident_b_name",
message: "「こんにちは。私は大陸からやってきたの。少しだけど収穫のお手伝いをさせてもらうわ。」",
message_tag: "resident_b_mes",
lvHelpBase: 20,
lvHelpRate: 45,
lvBoxBase: 20,
lvBoxRate: 45
},
Resident_C: {
name: "アガチス",
name_tag: "resident_c_name",
message: "「広くて住みやすそうだね。僕に何か手伝えることはあるかな？」",
message_tag: "resident_c_mes",
lvHelpBase: 30,
lvHelpRate: 50,
lvBoxBase: 30,
lvBoxRate: 50
},
Resident_D: {
name: "ペルポック",
name_tag: "resident_d_name",
message: "「開放的で気に入ったよ。ラクダの世話やヤシの実の収穫で忙しくなりそうだ。」",
message_tag: "resident_d_mes",
lvHelpBase: 40,
lvHelpRate: 55,
lvBoxBase: 40,
lvBoxRate: 55
},
Resident_E: {
name: "ジャラ",
name_tag: "resident_e_name",
message: "「うす暗いところが好きなんだ。ここは最高だね。拾ったものは収納ボックスに入れておくよ。」",
message_tag: "resident_e_mes",
lvHelpBase: 50,
lvHelpRate: 60,
lvBoxBase: 50,
lvBoxRate: 60
},
Resident_F: {
name: "チーク",
name_tag: "resident_f_name",
message: "「ここにすむのだ。おふろがさいこうなのだ。」",
message_tag: "resident_f_mes",
lvHelpBase: 60,
lvHelpRate: 65,
lvBoxBase: 60,
lvBoxRate: 65
},
Resident_G: {
name: "メルサワ",
name_tag: "resident_g_name",
message: "「やあ。2階の眺めが最高だね。住むからには手伝わせてもらうよ。」",
message_tag: "resident_g_mes",
lvHelpBase: 70,
lvHelpRate: 70,
lvBoxBase: 70,
lvBoxRate: 70
},
Resident_H: {
name: "ラミン",
name_tag: "resident_h_name",
message: "「ここでカフェをやろうと思うんだ。お客さんくるかな。」",
message_tag: "resident_h_mes",
lvHelpBase: 80,
lvHelpRate: 75,
lvBoxBase: 80,
lvBoxRate: 75
},
Resident_I: {
name: "マドローナ",
name_tag: "resident_i_name",
message: "「なかなか興味深い場所ね。しばらくこの土地について研究させてもらうわ。」",
message_tag: "resident_i_mes",
lvHelpBase: 90,
lvHelpRate: 80,
lvBoxBase: 90,
lvBoxRate: 80
}
}, n = {
Resident_A: [ {
item: "Wood",
rate: 20
}, {
item: "Wool",
rate: 6
}, {
item: "Milk",
rate: 4
}, {
item: "Radish",
rate: 7
}, {
item: "Tomato",
rate: 6
}, {
item: "Carrot",
rate: 3
}, {
item: "Corn",
rate: 4
}, {
item: "BlueBerry",
rate: 4
}, {
item: "StrawBerry",
rate: 4
}, {
item: "Orange",
rate: 6
}, {
item: "Apple",
rate: 3
}, {
item: "Stone",
rate: 15
}, {
item: "Copper",
rate: 4
}, {
item: "Silver",
rate: 2
} ],
Resident_B: [ {
item: "Wood",
rate: 10
}, {
item: "Milk",
rate: 4
}, {
item: "Egg",
rate: 3
}, {
item: "Tomato",
rate: 4
}, {
item: "Carrot",
rate: 4
}, {
item: "BlueBerry",
rate: 4
}, {
item: "Grape",
rate: 2
}, {
item: "Orange",
rate: 3
}, {
item: "Apple",
rate: 3
}, {
item: "Stone",
rate: 6
}, {
item: "Copper",
rate: 3
}, {
item: "Silver",
rate: 2
} ],
Resident_C: [ {
item: "Wood",
rate: 10
}, {
item: "Wool",
rate: 3
}, {
item: "Milk",
rate: 1
}, {
item: "Cheese",
rate: 1
}, {
item: "Egg",
rate: 2
}, {
item: "Corn",
rate: 2
}, {
item: "StrawBerry",
rate: 4
}, {
item: "Grape",
rate: 2
}, {
item: "Apple",
rate: 3
}, {
item: "Pear",
rate: 3
}, {
item: "Copper",
rate: 3
}, {
item: "Silver",
rate: 2
}, {
item: "Gold",
rate: 1
} ],
Resident_D: [ {
item: "Wood1",
rate: 50
}, {
item: "Coconut",
rate: 25
}, {
item: "Cactus0",
rate: 20
}, {
item: "Butter",
rate: 4
}, {
item: "Silver",
rate: 6
}, {
item: "Gold",
rate: 4
}, {
item: "RedRadish",
rate: 16
}, {
item: "PineApple",
rate: 12
} ],
Resident_E: [ {
item: "Mushroom0",
rate: 25
}, {
item: "Gold",
rate: 3
}, {
item: "Egg",
rate: 4
}, {
item: "Marble0",
rate: 2
}, {
item: "Ruby",
rate: 1
} ],
Resident_F: [ {
item: "Wood1",
rate: 20
}, {
item: "Wood2",
rate: 15
}, {
item: "Banana",
rate: 9
}, {
item: "PineApple",
rate: 8
}, {
item: "Grape",
rate: 7
}, {
item: "Pear",
rate: 5
}, {
item: "Starfish",
rate: 9
}, {
item: "Shell",
rate: 9
}, {
item: "Mushroom0",
rate: 8
}, {
item: "Silver",
rate: 5
}, {
item: "Marble0",
rate: 3
}, {
item: "Ruby",
rate: 2
}, {
item: "Diamond",
rate: 1
} ],
Resident_G: [ {
item: "Wood2",
rate: 20
}, {
item: "Grape",
rate: 11
}, {
item: "Muscat",
rate: 6
}, {
item: "Peach",
rate: 4
}, {
item: "Mushroom0",
rate: 12
}, {
item: "Marble0",
rate: 3
}, {
item: "Ruby",
rate: 2
}, {
item: "Diamond",
rate: 1
} ],
Resident_H: [ {
item: "Stone",
rate: 7
}, {
item: "Wood",
rate: 15
}, {
item: "Milk",
rate: 6
}, {
item: "Wool",
rate: 6
}, {
item: "Orange",
rate: 6
}, {
item: "Copper",
rate: 4
}, {
item: "Apple",
rate: 6
}, {
item: "Wood1",
rate: 10
}, {
item: "Coconut",
rate: 5
}, {
item: "Silver",
rate: 3
}, {
item: "Cactus0",
rate: 5
}, {
item: "Butter",
rate: 5
}, {
item: "Radish",
rate: 7
}, {
item: "Tomato",
rate: 7
} ],
Resident_I: [ {
item: "Egg",
rate: 24
}, {
item: "Corn",
rate: 24
}, {
item: "Carrot",
rate: 24
}, {
item: "BlueBerry",
rate: 24
}, {
item: "StrawBerry",
rate: 24
}, {
item: "Grape",
rate: 15
}, {
item: "Starfish",
rate: 10
}, {
item: "Shell",
rate: 10
}, {
item: "Wood2",
rate: 28
}, {
item: "Pear",
rate: 12
}, {
item: "Peach",
rate: 7
}, {
item: "Cheese",
rate: 13
}, {
item: "Banana",
rate: 10
}, {
item: "Gold",
rate: 9
}, {
item: "Mushroom0",
rate: 21
}, {
item: "Orichalcum",
rate: 1
}, {
item: "Ruby",
rate: 3
}, {
item: "Wood3",
rate: 30
}, {
item: "Cherry",
rate: 18
}, {
item: "RedRadish",
rate: 8
}, {
item: "PineApple",
rate: 8
}, {
item: "Muscat",
rate: 7
}, {
item: "Marble0",
rate: 4
}, {
item: "Diamond",
rate: 2
} ]
}, o = cc.Class({
extends: i,
init: function(e) {
this._super(e, "Resident");
this.residentData = s;
for (var t in this.residentData) {
var i = this.residentData[t];
i.unlock = !1;
i.lvHelp = new a();
i.lvHelp.init(this.baseKey + "." + t, "lvHelp", 1, 99, i.lvHelpBase, i.lvHelpRate);
this.addModel(t + "_lvHelp", i.lvHelp);
i.lvBox = new a();
i.lvBox.init(this.baseKey + "." + t, "lvBox", 1, 99, i.lvBoxBase, i.lvBoxRate);
this.addModel(t + "_lvBox", i.lvBox);
i.stockNum = 0;
i.startTime = 0;
i.newgame = !1;
}
this.itemDataMaxs = [];
for (var o in n) {
for (var c = 0, r = 0; r < n[o].length; r++) c += n[o][r].rate;
this.itemDataMaxs[o] = c;
}
},
load: function() {
for (var e in this.residentData) {
var t = this.residentData[e];
t.unlock = this.loadBoolean(e + ".unlock", !1);
t.stockNum = this.loadNumber(e + ".stockNum", 0);
t.startTime = this.loadNumber(e + ".startTime", 0);
t.newgame = this.loadBoolean(e + ".newgame", !1);
}
},
reset: function() {
for (var e in this.residentData) {
var t = this.residentData[e];
t.unlock = !1;
this.saveBoolean(e + ".unlock", !1);
t.lvHelp.reset();
t.lvBox.reset();
t.stockNum = 0;
this.saveNumber(e + ".stockNum", 0);
t.startTime = 0;
this.saveNumber(e + ".startTime", 0);
t.newgame = !0;
this.saveBoolean(e + ".newgame", !0);
}
},
newgame: function() {
for (var e in this.residentData) {
var t = this.residentData[e];
t.unlock = !1;
this.saveBoolean(e + ".unlock", !1);
t.newgame = !0;
this.saveBoolean(e + ".newgame", !0);
}
},
GetData: function(e) {
return e in this.residentData ? this.residentData[e] : null;
},
GetName: function(e) {
return e in this.residentData ? this.game.getLocalizedStr(this.residentData[e].name_tag, this.residentData[e].name) : "";
},
GetMessage: function(e) {
return e in this.residentData ? this.game.getLocalizedStr(this.residentData[e].message_tag, this.residentData[e].message) : "";
},
GetLvHelp: function(e) {
return e in this.residentData ? this.residentData[e].lvHelp : null;
},
GetLvBox: function(e) {
return e in this.residentData ? this.residentData[e].lvBox : null;
},
IsUnlock: function(e) {
return e in this.residentData && this.residentData[e].unlock;
},
DoUnlock: function(e) {
if (e in this.residentData && 0 == this.residentData[e].unlock) {
this.residentData[e].unlock = !0;
this.saveBoolean(e + ".unlock", !0);
}
},
IsNewgame: function(e) {
return e in this.residentData && this.residentData[e].newgame;
},
DoNewgame: function(e) {
if (e in this.residentData && 1 == this.residentData[e].newgame) {
this.residentData[e].newgame = !1;
this.saveBoolean(e + ".newgame", !1);
}
},
GetItemData: function(e) {
return e in n ? n[e] : null;
},
GetItemRateMax: function(e) {
return e in n ? this.itemDataMaxs[e] : 0;
},
CheckStock: function(e, t) {
if (e in this.residentData) {
var i = this.residentData[e], a = 360 - 315 * i.lvHelp.getLevel() / i.lvHelp.getLevelMax(), s = t - i.startTime;
if (s < a) return i.stockNum;
var n = Math.floor(s / a), o = i.lvBox.getLevel(), c = i.lvBox.getLevelMax(), r = Math.floor(70 * o / c) + 10;
if (n > 0) {
i.stockNum += n;
i.stockNum > r && (i.stockNum = r);
this.saveNumber(e + ".stockNum", i.stockNum);
i.startTime = t;
this.saveNumber(e + ".startTime", i.startTime);
}
return i.stockNum;
}
return 0;
},
GetStockNum: function(e) {
return e in this.residentData ? this.residentData[e].stockNum : 0;
},
ClearStockNum: function(e) {
if (e in this.residentData) {
this.residentData[e].stockNum = 0;
this.saveNumber(e + ".stockNum", 0);
}
},
CalcCompleteRate: function() {
var e = 0, t = 0;
for (var i in this.residentData) {
e++;
this.residentData[i].unlock && t++;
}
return Math.floor(t / e * 100);
},
CalcLvMaxRate: function(e) {
var t = this.GetLvHelp(e), i = this.GetLvBox(e);
return null == t || null == i ? 0 : Math.floor((t.getLevel() + i.getLevel()) / 2 * 100 / 99);
}
});
t.exports = o;
cc._RF.pop();
}, {
BaseModel: "BaseModel",
Level: "Level"
} ],
ResourceManager: [ function(e, t) {
"use strict";
cc._RF.push(t, "69294DzeCpKmaQTfy8FhZXM", "ResourceManager");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {
this.resourceList = [];
this.dropItemList = [];
},
start: function() {
cc.director.getScheduler().schedule(this.updateResources, this, 1, !1);
},
updateResources: function() {
for (var e = Math.floor(Date.now() / 1e3), t = 0; t < this.resourceList.length; t++) this.resourceList[t].CheckStatePoll(e);
for (var i = 0; i < this.dropItemList.length; i++) this.dropItemList[i].CheckStatePoll(e);
},
RegistResource: function(e) {
-1 == this.resourceList.indexOf(e) && this.resourceList.push(e);
},
UnregistResource: function(e) {
var t = this.resourceList.indexOf(e);
-1 != t && this.resourceList.splice(t, 1);
},
RegistDropItem: function(e) {
-1 == this.dropItemList.indexOf(e) && this.dropItemList.push(e);
},
UnregistDropItem: function(e) {
var t = this.dropItemList.indexOf(e);
-1 != t && this.dropItemList.splice(t, 1);
},
CollectDropItem: function() {
for (var e = 0; e < this.dropItemList.length; e++) this.dropItemList[e].finish();
this.dropItemList = [];
}
});
cc._RF.pop();
}, {} ],
ResourceState: [ function(e, t) {
"use strict";
cc._RF.push(t, "2162bjMjj9PS4RdvxXRMlwn", "ResourceState");
var i = cc.Enum({
NONE: 0,
GROWING: 1,
REVIVE: 2
});
t.exports = i;
cc._RF.pop();
}, {} ],
Resource: [ function(e, t) {
"use strict";
cc._RF.push(t, "a9734lEvE1Eb557KgKINO0S", "Resource");
var i = e("SaveData"), a = e("Gimmick"), s = e("HpGauge"), n = e("ResourceState"), o = e("ResourceManager"), c = e("CommandType"), r = e("Game");
cc.Class({
extends: a,
properties: {
useSave: !0,
reviveInterval: 60,
dropItem: {
type: cc.Prefab,
default: null
},
dropNum: 1,
hpGauge: {
type: s,
default: null
},
hp: 3,
seDamage: {
type: cc.AudioClip,
default: null
},
checkMe: {
type: cc.Node,
default: null
}
},
onLoad: function() {
this._super();
null != this.dropItem && this.reviveInterval > 0 && (this.reviveInterval = this.recalc_interval(this.reviveInterval));
this.state = n.REVIVE;
this.startTime = 0;
if (this.useSave) {
this.state = i.loadNumber(this.savekey + ".state", n.REVIVE);
this.startTime = i.loadNumber(this.savekey + ".startTime", 0);
}
this.checkMe && (this.checkMe.active = !1);
this.isMinibox = !0;
var e = this.node.parent.getComponent(o);
e && e.RegistResource(this);
},
start: function() {
this._super();
this.change_view();
},
refreshView: function() {},
progress: function() {},
getHp: function() {
return this.hp;
},
changeLock: function(e) {
this.node.opacity = e ? 100 : 255;
var t = this.node.getComponent("Animal");
t && (t.enabled = !e);
e ? this.checkMe && (this.checkMe.active = !1) : this.change_view();
},
getAvailableCommand: function() {
return c.NONE;
},
execCommand: function() {
this.seDamage && r.sound.playSE(this.seDamage);
if (this.hpGauge) {
var e = 1;
this.getHp() == this.hpGauge.getHp() && (e = r.getToolFirstDamage());
this.hpGauge.damage(e);
if (0 == this.hpGauge.isDead()) return;
}
this.drop_item();
this.finish();
},
CheckStatePoll: function(e) {
this.reviveInterval < 0 || this.state >= n.REVIVE || this.progress(e - this.startTime);
},
change_state: function(e) {
if (this.state != e) {
this.state = e;
this.useSave && i.saveNumber(this.savekey + ".state", this.state);
this.change_view();
return !0;
}
return !1;
},
change_view: function() {
this.hpGauge && this.hpGauge.setHp(this.getHp());
this.checkMe && (this.checkMe.active = this.state == n.REVIVE);
this.refreshView();
},
reset_time: function() {
this.startTime = Math.floor(Date.now() / 1e3);
this.useSave && i.saveNumber(this.savekey + ".startTime", this.startTime);
},
get_drop_num: function() {
var e = this.dropNum + Math.floor(Math.random() * this.dropNum);
Math.random() < .04 && (e *= 4);
return e;
},
drop_item: function() {
if (null != this.dropItem) {
for (var e = this.get_drop_num(), t = 0; t < e; t++) {
var i = cc.instantiate(this.dropItem);
if (i) {
r.scene.node.addChild(i);
i.setPosition(this.node.position);
var a = i.getComponent("DropItem");
a && a.drop();
}
}
if (this.isMinibox) {
var s = .01 + .01 * r.dungeon.getSoilRate();
if (Math.random() < s) {
var n = r.getMiniBoxPrefab();
if (n) {
var o = cc.instantiate(n);
if (o) {
r.scene.node.addChild(o);
o.setPosition(this.node.position);
var c = o.getComponent("DropItem");
c && c.drop();
}
}
}
}
}
},
finish: function() {
this.change_state(n.NONE);
this.hpGauge && this.hpGauge.hide();
this.reset_time();
},
revive: function() {
this.progress(this.reviveInterval + 1e3);
},
reset: function() {
this.state = n.REVIVE;
this.startTime = 0;
if (this.useSave) {
i.saveNumber(this.savekey + ".state", n.REVIVE);
i.saveNumber(this.savekey + ".startTime", 0);
}
this.change_view();
},
recalc_interval: function(e) {
return Math.floor(e * (1 - .5 * r.dungeon.getSoilRate()));
}
});
cc._RF.pop();
}, {
CommandType: "CommandType",
Game: "Game",
Gimmick: "Gimmick",
HpGauge: "HpGauge",
ResourceManager: "ResourceManager",
ResourceState: "ResourceState",
SaveData: "SaveData"
} ],
ReviewPopup: [ function(e, t) {
"use strict";
cc._RF.push(t, "2dc79rxb6tPla6wD2CpWQAv", "ReviewPopup");
var i = e("Popup"), a = e("AppPlatform");
cc.Class({
extends: i,
properties: {
titleLabel: cc.Label
},
onLoad: function() {
this._super();
},
SetText: function(e) {
this.titleLabel.string = e;
this.titleLabel._forceUpdateRenderData();
var t = this.titleLabel.node.getBoundingBox();
this.window.height = t.height + 36;
},
Ok: function() {
a.isFacebook() || (cc.sys.os === cc.sys.OS_IOS ? cc.sys.openURL("https://apps.apple.com/us/app/id1534460779?action=write-review") : cc.sys.os === cc.sys.OS_ANDROID && cc.sys.openURL("https://play.google.com/store/apps/details?id=jp.coffeebreakin.app.minifarm"));
this.Hide();
}
});
cc._RF.pop();
}, {
AppPlatform: "AppPlatform",
Popup: "Popup"
} ],
ReviewSign: [ function(e, t) {
"use strict";
cc._RF.push(t, "cd003HPM0JNNq3fMw2FQRsq", "ReviewSign");
var i = e("TrapPopup"), a = e("CommandType"), s = e("Game");
cc.Class({
extends: i,
properties: {
text: "",
review_tag: ""
},
execCommand: function(e) {
e == a.EVENT && s.scene.manager.ShowReviewPopupByTag(this.review_tag);
}
});
cc._RF.pop();
}, {
CommandType: "CommandType",
Game: "Game",
TrapPopup: "TrapPopup"
} ],
Rock: [ function(e, t) {
"use strict";
cc._RF.push(t, "fb630alz89B0Jh1vcG/XIkU", "Rock");
var i = e("Resource"), a = e("ResourceState"), s = e("CommandType");
cc.Class({
extends: i,
properties: {
markSprite: {
type: cc.SpriteFrame,
default: null
}
},
onLoad: function() {
this._super();
this.spriteFrame = null;
var e = this.node.getComponent(cc.Sprite);
e && (this.spriteFrame = e.spriteFrame);
},
refreshView: function() {
var e = this.state != a.NONE, t = this.node.getComponent(cc.Sprite);
t && (t.spriteFrame = e ? this.spriteFrame : this.markSprite);
var i = this.node.getComponent(cc.RigidBody);
i && (i.active = e);
},
progress: function(e) {
e >= this.reviveInterval && this.change_state(a.REVIVE);
},
getAvailableCommand: function() {
return this.state >= a.REVIVE ? s.PICKAXE : s.NONE;
}
});
cc._RF.pop();
}, {
CommandType: "CommandType",
Resource: "Resource",
ResourceState: "ResourceState"
} ],
RoomType: [ function(e, t) {
"use strict";
cc._RF.push(t, "8afb19+I0BNA4fX8B0cI3ga", "RoomType");
var i = cc.Enum({
NONE: 0,
STAIR: 1,
ROCK: 2,
TREE: 3,
CROP: 4,
CHEST: 5,
MONSTER: 6
});
t.exports = i;
cc._RF.pop();
}, {} ],
SafeArea: [ function(e, t) {
"use strict";
cc._RF.push(t, "461e0diOQFG+p07p0EnMXx+", "SafeArea");
cc.Class({
extends: cc.Component,
onLoad: function() {
this.safeAreaRect = new cc.Rect(0, 0, 0, 0);
this.safeOffset = cc.v2(0, 0);
this.safeMarginTop = 0;
this.safeMarginBottom = 0;
this.safeMarginLeft = 0;
this.safeMarginRight = 0;
},
start: function() {
var e = cc.view.getVisibleSize();
this.node.setContentSize(e);
if (cc.sys.isNative) {
this.safeAreaRect = cc.sys.getSafeAreaRect();
this.safeOffset = cc.v2((2 * this.safeAreaRect.x - e.width + this.safeAreaRect.width) / 2, (2 * this.safeAreaRect.y - e.height + this.safeAreaRect.height) / 2);
this.safeMarginTop = e.height - this.safeAreaRect.height - this.safeAreaRect.y;
this.safeMarginBottom = this.safeAreaRect.y;
this.safeMarginLeft = this.safeAreaRect.x;
this.safeMarginRight = e.width - this.safeAreaRect.width - this.safeAreaRect.x;
if (this.safeMarginTop + this.safeMarginBottom + this.safeMarginLeft + this.safeMarginRight > 0) {
var t = this.node.position;
this.node.setContentSize(new cc.Size(this.safeAreaRect.width, this.safeAreaRect.height));
this.node.setPosition(cc.v2(t.x + this.safeOffset.x, t.y + this.safeOffset.y));
}
}
}
});
cc._RF.pop();
}, {} ],
SaveData: [ function(e, t) {
"use strict";
cc._RF.push(t, "ced82wyK6BMvplbFCsD2i10", "SaveData");
var i = cc.Class({
statics: {
saveNumber: function(e, t) {
cc.sys.localStorage.setItem(e, t);
},
loadNumber: function(e, t) {
var i = cc.sys.localStorage.getItem(e);
return null !== i ? Number(i) : t;
},
saveBoolean: function(e, t) {
cc.sys.localStorage.setItem(e, t);
},
loadBoolean: function(e, t) {
var i = cc.sys.localStorage.getItem(e);
return null === i ? t : "true" === i;
},
saveString: function(e, t) {
cc.sys.localStorage.setItem(e, t);
},
loadString: function(e, t) {
var i = cc.sys.localStorage.getItem(e);
return null !== i ? i : t;
}
}
});
t.exports = i;
cc._RF.pop();
}, {} ],
SavedGamesChecker: [ function(e, t) {
"use strict";
cc._RF.push(t, "a56c1R0KmNELaJAaIn/45ID", "SavedGamesChecker");
var i = e("Game"), a = e("SavedGamesState");
cc.Class({
extends: cc.Component,
properties: {
labelSync: cc.Label
},
onLoad: function() {
this.callbackFunc = null;
this.callbackTarget = null;
this.flagReload = !1;
},
CheckStart: function(e, t) {
this.node.active = !0;
this.callbackFunc = e;
this.callbackTarget = t;
this.flagReload = !1;
var a = i.savedGames.getSavedGamesState();
this.checkData(a);
},
CheckStartWithReload: function() {
this.CheckStart(this.reloadScene, this);
},
checkData: function(e) {
if (e == a.NONE || e == a.NODATA || e == a.ERROR) this.checkFinish(); else if (e == a.LOADING) {
this.node.opacity = 255;
cc.director.getScheduler().schedule(this.checking, this, .5, cc.macro.REPEAT_FOREVER, 0, !1);
} else if (e == a.READY) {
this.flagReload = i.savedGames.pullData();
this.checkFinish();
}
},
checking: function() {
var e = i.savedGames.getSavedGamesState();
if (e != a.LOADING) {
cc.director.getScheduler().unschedule(this.checking, this);
this.checkData(e);
}
},
checkFinish: function() {
i.savedGames.clearSavedGamesState();
this.callbackTarget && this.callbackFunc && this.callbackTarget.node.runAction(cc.callFunc(this.callbackFunc, this.callbackTarget));
},
reloadScene: function() {
if (this.flagReload) {
var e = i.getStateSceneName();
cc.director.loadScene(e);
} else this.node.destroy();
},
ShowIndicator: function(e) {
this.node.active = !0;
this.node.opacity = 255;
this.node.runAction(cc.sequence(cc.delayTime(e), cc.callFunc(this.remove_indicator, this)));
},
remove_indicator: function() {
this.node.destroy();
}
});
cc._RF.pop();
}, {
Game: "Game",
SavedGamesState: "SavedGamesState"
} ],
SavedGamesState: [ function(e, t) {
"use strict";
cc._RF.push(t, "3d98d1joelHDq8nMjlUNkWM", "SavedGamesState");
var i = cc.Enum({
NONE: 0,
LOADING: 1,
NODATA: 2,
READY: 3,
ERROR: 4
});
t.exports = i;
cc._RF.pop();
}, {} ],
SavedGames: [ function(e, t) {
"use strict";
cc._RF.push(t, "7d110727+5BJJckmraxQszn", "SavedGames");
var i = e("BaseModel"), a = e("AppPlatform"), s = e("SavedGamesState"), n = e("CloudSave"), o = cc.Class({
extends: i,
init: function(e) {
this._super(e, "SavedGames");
this.flagAvailable = a.isAndroid() || a.isFacebook();
this.flagMyCloudSave = a.isFacebook();
this.timeStamp = 0;
},
isSavedGames: function() {
return this.flagAvailable;
},
isMyCloudSave: function() {
return this.flagMyCloudSave;
},
getSavedGamesState: function() {
return this.flagMyCloudSave ? n.getSavedGamesState() : a.GetSavedGamesState();
},
clearSavedGamesState: function() {
this.flagMyCloudSave ? n.clearSavedGamesState() : a.ClearSavedGamesState();
},
getAllKeyValue: function() {
for (var e = cc.sys.localStorage.length, t = "", i = 0; i < e; i++) {
"" !== t && (t += "\n");
var a = cc.sys.localStorage.key(i);
if ("" !== a) {
var s = cc.sys.localStorage.getItem(a);
null != s && (t += a + "=" + s);
}
}
return t;
},
writeKeyValueList: function(e) {
for (var t = e.split(/\n/), i = 0; i < t.length; i++) {
var a = t[i];
if ("" !== a) {
var s = a.split(/=/), n = s[0], o = s[1];
"" !== n && cc.sys.localStorage.setItem(n, o);
}
}
},
pushData: function() {
0 != this.isSavedGames() && 0 != this.game.isTutorial() && (this.flagMyCloudSave ? n.pushSaveData(this.game.playTime.getTime()) : a.PushSaveData(this.game.playTime.getTime()));
},
sendData: function() {
if (0 != this.isSavedGames() && 0 != this.isEnableSendData() && 0 != this.game.isTutorial()) {
this.game.saveLater();
this.game.playTime.saveTime();
this.flagMyCloudSave ? n.sendSaveData(this.game.playTime.getTime()) : a.SendSaveData(this.game.playTime.getTime());
this.renewTimeStamp();
}
},
pullData: function() {
if (0 == this.isSavedGames()) return !1;
var e = this.flagMyCloudSave ? n.getLoadPlayTime() : a.GetLoadPlayTime(), t = this.game.playTime.getTime();
if (e <= t) {
cc.log("AAABBB: loadPlayTime(" + e + ") <= lastPlayTime(" + t + ")");
return !1;
}
this.flagMyCloudSave ? n.writeLoadData() : a.WriteLoadData();
cc.log("AAABBB: game reload !!!!!");
this.game.load();
return !0;
},
checkData: function() {
0 != this.isSavedGames() && this.getSavedGamesState() != s.NONE && this.game.scene && this.game.scene.manager.ShowSavedGamesChecker();
},
isEnableSendData: function() {
return this.get_now_time() >= this.timeStamp + 180;
},
renewTimeStamp: function() {
this.timeStamp = this.get_now_time();
},
get_now_time: function() {
return Math.floor(Date.now() / 1e3);
}
});
t.exports = o;
cc._RF.pop();
}, {
AppPlatform: "AppPlatform",
BaseModel: "BaseModel",
CloudSave: "CloudSave",
SavedGamesState: "SavedGamesState"
} ],
SettingScene: [ function(e, t) {
"use strict";
cc._RF.push(t, "1b05cYHf+hIbbrqP4x+5nAK", "SettingScene");
cc.Class({
extends: cc.Component,
properties: {
popupLang: cc.Prefab
},
onLoad: function() {
this.node.runAction(cc.sequence(cc.delayTime(.2), cc.callFunc(this.showLang, this)));
},
showLang: function() {
if (this.popupLang) {
var e = cc.instantiate(this.popupLang);
if (e) {
this.node.addChild(e);
var t = e.getComponent("LangPopup");
if (t) {
t.flagUseCancel = !1;
t.flagUseTouchHide = !1;
t.SetCallbackOk(this.callbackLang, this);
t.Show();
}
}
}
},
callbackLang: function() {
cc.director.loadScene("IntroScene");
}
});
cc._RF.pop();
}, {} ],
SharePopup: [ function(e, t) {
"use strict";
cc._RF.push(t, "29df35KYYtFZrBqvI63yFjU", "SharePopup");
var i = e("Popup"), a = e("AppPlatform"), s = e("Game");
cc.Class({
extends: i,
properties: {
titleLabel: cc.Label
},
onLoad: function() {
this._super();
this.shareText = "";
if (a.isFacebook()) this.shareText = s.getLocalizedStr("share_text_fb", "I made a nice little farm! 🌱"); else {
var e = s.getLocalizedStr("share_text_native", "Mini Mini Farm");
this.shareText = e + "\n\nAppStore:\nhttps://apps.apple.com/us/app/id1534460779\n\nGooglePlay:\nhttps://play.google.com/store/apps/details?id=jp.coffeebreakin.app.minifarm";
}
},
start: function() {
this.SetText(s.getLocalizedStr("share_popup_text"));
},
SetText: function(e) {
this.titleLabel.string = e;
this.titleLabel._forceUpdateRenderData();
var t = this.titleLabel.node.getBoundingBox();
this.window.height = t.height + 36;
},
Ok: function() {
a.ShareDialog(this.shareText);
this.Hide();
}
});
cc._RF.pop();
}, {
AppPlatform: "AppPlatform",
Game: "Game",
Popup: "Popup"
} ],
ShopDirectPopup: [ function(e, t) {
"use strict";
cc._RF.push(t, "0cb326BYw9AFrE4xjMv0xa/", "ShopDirectPopup");
var i = e("Popup"), a = e("ItemInfo"), s = e("Game");
cc.Class({
extends: i,
properties: {
buttonOk: cc.Button,
prefabItemInfo: cc.Prefab,
nodeArrow: cc.Node,
prefabPlus: cc.Prefab
},
ctor: function() {
this.targetShopDirect = null;
},
Ok: function() {
this.targetShopDirect && this.targetShopDirect.Buy();
this.Hide();
},
ShowWithInfo: function(e, t, i, a, s, n, o) {
this.Show() && this.SetInfo(e, t, i, a, s, n, o);
},
SetInfo: function(e, t, i, a, n, o, c) {
this.targetShopDirect = e;
for (var r = !0, h = cc.v2(28 * (t.length - 1) / 2, 0), u = 0; u < t.length; u++) {
var l = s.item.getNum(t[u], i[u]) >= a[u];
l || (r = !1);
this.addItemInfo(t[u], i[u], a[u], cc.v2(-20 - 28 * u, 0).add(h), l);
u >= 1 && this.addPlus(cc.v2(-6 - 28 * u, 0).add(h));
}
this.addItemInfo(n, o, c, cc.v2(20, 0).add(h), !0);
this.nodeArrow.setPosition(this.nodeArrow.position.add(h));
this.buttonOk.interactable = r;
this.flagUseOk = r;
},
addItemInfo: function(e, t, i, s, n) {
var o = cc.instantiate(this.prefabItemInfo);
if (o) {
this.window.addChild(o);
o.setPosition(s);
o.color = new cc.Color(213, 165, 112);
var c = o.getComponent(a);
if (c) {
c.SetTag(e);
c.SetRank(t);
c.SetNum(i);
c.SetNumColor(n ? new cc.Color(255, 255, 255) : new cc.Color(240, 0, 0));
}
}
},
addPlus: function(e) {
var t = cc.instantiate(this.prefabPlus);
if (t) {
this.window.addChild(t);
t.setPosition(e);
}
}
});
cc._RF.pop();
}, {
Game: "Game",
ItemInfo: "ItemInfo",
Popup: "Popup"
} ],
ShopDirect: [ function(e, t) {
"use strict";
cc._RF.push(t, "9588bhgMjVPq5jUIjrDFwUR", "ShopDirect");
var i = e("Gimmick"), a = e("CommandType"), s = e("ItemRank"), n = e("ShopDirectPopup"), o = e("Game");
cc.Class({
extends: i,
properties: {
popupShopDirect: cc.Prefab,
seDrop: cc.AudioClip,
inputItemTags: [ cc.String ],
inputItemRanks: {
type: s,
default: []
},
inputNums: [ cc.Integer ],
outputItemTag: "",
outputItemRank: {
type: s,
default: s.NONE
},
outputNum: 0,
outputDropItem: cc.Prefab
},
onLoad: function() {
this._super();
cc.assert(this.inputItemTags.length == this.inputItemRanks.length && this.inputItemTags.length == this.inputNums.length, "ERROR: ShopDirect invalid args.");
},
getAvailableCommand: function() {
return a.EVENT;
},
execCommand: function(e) {
if (e == a.EVENT && this.popupShopDirect) {
var t = cc.instantiate(this.popupShopDirect);
if (t) {
o.scene.camera.node.addChild(t);
var i = t.getComponent(n);
i && i.ShowWithInfo(this, this.inputItemTags, this.inputItemRanks, this.inputNums, this.outputItemTag, this.outputItemRank, this.outputNum);
}
}
},
Buy: function() {
for (var e = 0; e < this.inputItemTags.length; e++) o.item.useNum(this.inputItemTags[e], this.inputItemRanks[e], this.inputNums[e]);
this.drop_item();
},
drop_item: function() {
var e = cc.instantiate(this.outputDropItem);
if (e) {
o.scene.node.addChild(e);
e.setPosition(cc.v2(this.node.position.x, this.node.position.y + 6));
var t = e.getComponent("DropItem");
if (t) {
t.SetRank(this.outputItemRank);
t.drop();
this.seDrop && o.sound.playSE(this.seDrop);
}
}
}
});
cc._RF.pop();
}, {
CommandType: "CommandType",
Game: "Game",
Gimmick: "Gimmick",
ItemRank: "ItemRank",
ShopDirectPopup: "ShopDirectPopup"
} ],
ShowBannerAds: [ function(e, t) {
"use strict";
cc._RF.push(t, "095fegdhABLzJKIzIxOPYaE", "ShowBannerAds");
var i = e("Game"), a = e("AppPlatform");
cc.Class({
extends: cc.Component,
onLoad: function() {
this.flagAdjust = !1;
this.flagCheckTime = !1;
this.showAds();
},
showAds: function() {
if (!i.purchase.IsRemoveAds()) {
if (a.isAndroid() && a.IsInstant()) {
var e = i.getDelayBannerAds();
if (e > 0) {
this.node.runAction(cc.sequence(cc.delayTime(e), cc.callFunc(this.showAds2, this)));
return;
}
}
i.tutorial.IsTutorialArea1() || this.showAds2();
}
},
showAds2: function() {
a.ShowBannerAds(i.getBannerTag());
}
});
cc._RF.pop();
}, {
AppPlatform: "AppPlatform",
Game: "Game"
} ],
SignLang: [ function(e, t) {
"use strict";
cc._RF.push(t, "5c0a3HCI6hGo5KIpbcO7gNu", "SignLang");
var i = e("Gimmick"), a = e("CommandType"), s = e("Game");
cc.Class({
extends: i,
properties: {
seOn: cc.AudioClip
},
onLoad: function() {
this._super();
this.flag1stTime = !1;
this.flagChanged = !1;
this.langCode = "";
this.balloon = null;
this.animation = this.node.getComponent(cc.Animation);
},
getAvailableCommand: function() {
return a.EVENT;
},
execCommand: function(e) {
e == a.EVENT && this.change();
},
change: function() {
this.animation.play("SignLang");
s.sound.playSE(this.seOn);
if (0 == this.flag1stTime) {
this.flag1stTime = !0;
this.langCode = s.getLang();
} else {
this.langCode = s.nextLangCode(this.langCode);
this.flagChanged = !0;
}
this.showBalloon();
},
showBalloon: function() {
this.hideBalloon();
var e = s.getLangString(this.langCode);
this.balloon = s.scene.manager.ShowBalloon(this.node, cc.v2(-12, 16), e, !0);
},
hideBalloon: function() {
if (this.balloon) {
this.balloon.hide();
this.balloon = null;
}
},
collisionExit: function() {
this.hideBalloon();
this.flagChanged && "" != this.langCode && this.langCode != s.getLang() && s.setLang(this.langCode);
this.flag1stTime = !1;
this.flagChanged = !1;
}
});
cc._RF.pop();
}, {
CommandType: "CommandType",
Game: "Game",
Gimmick: "Gimmick"
} ],
SkillPopup: [ function(e, t) {
"use strict";
cc._RF.push(t, "d9421LxqqBMarAtYRo6IrXd", "SkillPopup");
var i = e("Popup"), a = e("CoinLabel"), s = e("Game");
cc.Class({
extends: i,
properties: {
windowSub: cc.Node,
labelSkillName: cc.Label,
labelSkillText: cc.Label,
labelSub: cc.Label,
labelCoin: a,
btLvup: cc.Button
},
onLoad: function() {
this._super();
this.skillTag = "";
this.windowSub.scale = 0;
},
Ok: function() {
this.btLvup.node.active && this.btLvup.interactable ? this.levelUp() && this.showLvupInfo() : this.Hide();
s.EnablePress();
},
show_finish: function() {},
show_finish_2: function() {
this.flagShow = !0;
s.EnablePress();
s.scene.PopupRegist(this);
},
Hide: function() {
if (this._super()) {
this.windowSub.runAction(cc.scaleTo(.1, 0));
this.window.opacity = 255;
return !0;
}
return !1;
},
ShowWithTag: function(e, t) {
this.skillTag = e;
if (this.Show()) {
var i = s.dungeon.isLearnedSkill(this.skillTag);
this.labelSkillName.string = "「" + s.dungeon.getSkillName(this.skillTag) + "」";
this.labelSkillText.string = s.dungeon.getSkillText(this.skillTag);
i ? this.showLvupInfo() : this.labelSub.string = s.getReplacedStr("skill_reach", "9999", t);
this.windowSub.runAction(cc.sequence(cc.delayTime(.06), cc.scaleTo(.4, 1).easing(cc.easeInOut(3)), cc.callFunc(this.show_finish_2, this)));
}
},
showLvupInfo: function() {
var e = s.dungeon.getSkillRate(this.skillTag);
this.labelSub.string = s.getReplacedStr("skill_learned", "9999", e);
var t = s.dungeon.getSkillLevelModel(this.skillTag), i = t.diffExpNext(), a = s.coin.getValue() >= i;
this.labelCoin.node.active = !t.isMaxLevel();
this.labelCoin.SetCoin(i);
this.btLvup.node.active = !t.isMaxLevel();
this.btLvup.interactable = a;
},
levelUp: function() {
var e = s.dungeon.getSkillLevelModel(this.skillTag);
if (e.isMaxLevel()) return !1;
var t = e.diffExpNext();
if (!(s.coin.getValue() >= t)) return !1;
e.incLevel();
this.labelSub.node.runAction(cc.jumpBy(.4, cc.v2(0, 0), 6, 2));
s.scene.manager.SeLvup();
s.coin.useCurrency(t);
s.scene.ui.RefreshCoin();
return !0;
}
});
cc._RF.pop();
}, {
CoinLabel: "CoinLabel",
Game: "Game",
Popup: "Popup"
} ],
SkipFinalPopup: [ function(e, t) {
"use strict";
cc._RF.push(t, "e204eaARjVGvKCcfXbkvMlM", "SkipFinalPopup");
var i = e("Popup"), a = e("Game"), s = e("Direction");
cc.Class({
extends: i,
Ok: function() {
this.Hide();
a.scene.fadeCover.FadeOutIn(.4, new cc.Color(255, 255, 255), this.move, this, this.finish, this);
},
move: function() {
a.scene.hero.RestorePos(cc.v2(-67, 746), s.UP);
},
finish: function() {}
});
cc._RF.pop();
}, {
Direction: "Direction",
Game: "Game",
Popup: "Popup"
} ],
SoilLevel: [ function(e, t) {
"use strict";
cc._RF.push(t, "6bc257zW0xCh6gPcl3eFjRD", "SoilLevel");
var i = e("Level2"), a = cc.Class({
extends: i,
getLevel: function() {
return this.lvNow - 1;
}
});
t.exports = a;
cc._RF.pop();
}, {
Level2: "Level2"
} ],
SoundSign: [ function(e, t) {
"use strict";
cc._RF.push(t, "43fbd0AZWRDVqTUL2o4rO0u", "SoundSign");
var i = e("Gimmick"), a = e("CommandType"), s = e("Game"), n = e("AppPlatform");
cc.Class({
extends: i,
properties: {
seOn: cc.AudioClip
},
onLoad: function() {
this._super();
this.animation = this.node.getComponent(cc.Animation);
this.renew();
},
getAvailableCommand: function() {
return a.EVENT;
},
execCommand: function(e) {
e == a.EVENT && this.change();
},
renew: function() {
var e = s.sound.isSoundEnable();
this.animation.play(e ? "SoundSign_on" : "SoundSign_off");
},
change: function() {
var e = !s.sound.isSoundEnable();
s.sound.setSoundEnable(e);
n.SetMuteAds(!e);
e && s.sound.playSE(this.seOn);
this.renew();
}
});
cc._RF.pop();
}, {
AppPlatform: "AppPlatform",
CommandType: "CommandType",
Game: "Game",
Gimmick: "Gimmick"
} ],
Sound: [ function(e, t) {
"use strict";
cc._RF.push(t, "fe2f1VpfGZH+qjR74BmKVtb", "Sound");
var i = e("BaseModel"), a = cc.Class({
extends: i,
init: function(e) {
this._super(e, "Sound");
this.soundEnable = !0;
this.soundPause = !1;
this.bgmVolume = 1;
},
load: function() {
this.soundEnable = this.loadBoolean("soundEnable", this.soundEnable);
},
isSoundEnable: function() {
return this.soundEnable;
},
setSoundEnable: function(e) {
if (this.soundEnable !== e) {
this.soundEnable = e;
this.saveBoolean("soundEnable", this.soundEnable);
cc.audioEngine.setMusicVolume(this.soundEnable ? this.bgmVolume : 0);
cc.audioEngine.setEffectsVolume(this.soundEnable ? 1 : 0);
}
},
preload: function(e) {
!0 === this.soundEnable && cc.audioEngine.preload(e);
},
playSEWithVolume: function(e, t) {
!0 === this.soundEnable && !1 === this.soundPause && cc.audioEngine.play(e, !1, t);
},
playSE: function(e) {
this.playSEWithVolume(e, 1);
},
playBGMWithVolume: function(e, t) {
if (!0 === this.soundEnable && !1 === this.soundPause) {
this.bgmVolume = t;
cc.audioEngine.setMusicVolume(this.soundEnable ? this.bgmVolume : 0);
cc.audioEngine.playMusic(e, !0);
}
},
playBGM: function(e) {
this.playBGMWithVolume(e, 1);
},
stopBGM: function() {
!0 === this.soundEnable && cc.audioEngine.stopMusic();
},
pauseAll: function() {
if (!0 === this.soundEnable) {
this.soundPause = !0;
cc.audioEngine.pauseAll();
}
},
resumeAll: function() {
if (!0 === this.soundEnable) {
this.soundPause = !1;
cc.audioEngine.resumeAll();
}
}
});
t.exports = a;
cc._RF.pop();
}, {
BaseModel: "BaseModel"
} ],
SponserRank: [ function(e, t) {
"use strict";
cc._RF.push(t, "49d603KCDBMGbVmy4pXm3Hp", "SponserRank");
var i = cc.Enum({
NONE: 0,
SILVER: 1,
GOLD: 2,
PLATINUM: 3
});
t.exports = i;
cc._RF.pop();
}, {} ],
StatusPopup: [ function(e, t) {
"use strict";
cc._RF.push(t, "a2fd0VOXtFB56EGmgUNojJl", "StatusPopup");
var i = e("Popup"), a = e("ItemRank"), s = e("Game");
cc.Class({
extends: i,
properties: {
labelLvLife: cc.Label,
buttonLvLife: cc.Button,
numPotionLife: cc.Label,
labelLvStamina: cc.Label,
buttonLvStamina: cc.Button,
numPotionStamina: cc.Label,
labelLvSpeed: cc.Label,
buttonLvSpeed: cc.Button,
numPotionSpeed: cc.Label
},
ctor: function() {
this.flagUseOk = !1;
},
onLoad: function() {
this._super();
this.stLife = s.dungeon.getStatusLife();
this.stStamina = s.dungeon.getStatusStamina();
this.stSpeed = s.dungeon.getStatusSpeed();
this.strLvLife = s.getLocalizedStr("status_life") + " Lv.";
this.strLvStamina = s.getLocalizedStr("status_stamina") + " Lv.";
this.strLvSpeed = s.getLocalizedStr("status_speed") + " Lv.";
this.needItemLife = "PotionLife";
this.needItemStamina = "PotionStamina";
this.needItemSpeed = "PotionSpeed";
this.renew();
},
PressLvLife: function() {
this.IsNotAvailableButton() || this.levelUp(this.stLife, this.labelLvLife, this.needItemLife);
},
PressLvStamina: function() {
this.IsNotAvailableButton() || this.levelUp(this.stStamina, this.labelLvStamina, this.needItemStamina);
},
PressLvSpeed: function() {
this.IsNotAvailableButton() || this.levelUp(this.stSpeed, this.labelLvSpeed, this.needItemSpeed);
},
levelUp: function(e, t, i) {
if (e) {
if (s.isAvailableLvup(e, i)) {
e.incLv();
s.item.useNum(i, a.NONE, s.USE_POTION_NUM);
s.scene.manager.SeLvup();
this.renew();
if (t) {
t.node.runAction(cc.sequence(cc.jumpBy(.4, cc.v2(0, 0), 6, 2), cc.callFunc(this.levelUp_finish, this)));
return;
}
}
s.EnablePress();
}
},
levelUp_finish: function() {
s.EnablePress();
},
renew: function() {
this.renewLvLife();
this.renewLvStamina();
this.renewLvSpeed();
this.renewNumPotionLife();
this.renewNumPotionStamina();
this.renewNumPotionSpeed();
},
renewLvLife: function() {
var e = s.isAvailableLvupLife();
this.labelLvLife.string = this.strLvLife + this.stLife.getLv();
this.buttonLvLife.interactable = e;
},
renewLvStamina: function() {
var e = s.isAvailableLvupStamina();
this.labelLvStamina.string = this.strLvStamina + this.stStamina.getLv();
this.buttonLvStamina.interactable = e;
},
renewLvSpeed: function() {
var e = s.isAvailableLvupSpeed();
this.labelLvSpeed.string = this.strLvSpeed + this.stSpeed.getLv();
this.buttonLvSpeed.interactable = e;
},
renewNumPotionLife: function() {
this.numPotionLife.string = s.item.getNum(this.needItemLife, a.NONE);
},
renewNumPotionStamina: function() {
this.numPotionStamina.string = s.item.getNum(this.needItemStamina, a.NONE);
},
renewNumPotionSpeed: function() {
this.numPotionSpeed.string = s.item.getNum(this.needItemSpeed, a.NONE);
}
});
cc._RF.pop();
}, {
Game: "Game",
ItemRank: "ItemRank",
Popup: "Popup"
} ],
Status: [ function(e, t) {
"use strict";
cc._RF.push(t, "e2c528vYSlJLon4zP+4EpJz", "Status");
var i = e("LevelEasy"), a = cc.Class({
extends: i,
init: function(e, t, i, a, s, n) {
this._super(e + ".Status", t, i, a);
this.stBase = s;
this.stRange = n;
this.stMax = s;
this.stNow = s;
},
load: function() {
this._super();
this.renewStatus();
},
reset: function() {
this._super();
this.renewStatus();
},
renewStatus: function() {
this.stMax = this.stBase + Math.floor(this.stRange * this.getLvScale());
this.stNow = this.stMax;
},
incLv: function() {
this._super();
this.renewStatus();
},
isFull: function() {
return this.stNow >= this.stMax;
},
isEmpty: function() {
return this.stNow <= 0;
},
getStatus: function() {
return this.stNow;
},
getStatusMax: function() {
return this.stMax;
},
getStatusScale: function() {
return this.stNow / this.stMax;
},
fullRecovery: function() {
this.stNow = this.stMax;
},
recover: function(e) {
this.stNow += e;
this.stNow > this.stMax && (this.stNow = this.stMax);
},
consume: function(e) {
this.stNow -= e;
if (this.stNow < 0) {
this.stNow = 0;
return !0;
}
return !1;
}
});
t.exports = a;
cc._RF.pop();
}, {
LevelEasy: "LevelEasy"
} ],
StorageBox: [ function(e, t) {
"use strict";
cc._RF.push(t, "bb491BImidJ9IXwRWnNLzCf", "StorageBox");
var i = e("Gimmick"), a = e("CommandType"), s = e("Game");
cc.Class({
extends: i,
properties: {
residentTag: "",
spriteOpen: cc.SpriteFrame,
spriteClose: cc.SpriteFrame,
checkMe: cc.Node,
dropItem: cc.Prefab,
seDrop: cc.AudioClip
},
ctor: function() {
this.flagOpen = !0;
this.itemNum = 0;
this.rateMax = 0;
this.itemData = null;
},
onLoad: function() {
this._super();
if (0 != s.resident.IsUnlock(this.residentTag)) {
this.rateMax = s.resident.GetItemRateMax(this.residentTag);
this.itemData = s.resident.GetItemData(this.residentTag);
if (null != this.itemData) {
this.boxOpen();
var e = this.node.parent.getComponent("ResourceManager");
e && e.RegistResource(this);
} else this.disable();
} else this.disable();
},
CheckStatePoll: function(e) {
s.resident.CheckStock(this.residentTag, e) > 0 && 1 == this.flagOpen && this.boxClose();
},
getAvailableCommand: function() {
return 0 == this.flagOpen ? a.EVENT : a.NONE;
},
execCommand: function(e) {
if (e == a.EVENT && 0 == this.flagOpen) {
this.itemNum = s.resident.GetStockNum(this.residentTag);
s.resident.ClearStockNum(this.residentTag);
this.boxOpen();
}
},
update: function() {
if (this.itemNum > 0) {
for (var e = "", t = 0, i = Math.random() * this.rateMax, a = 0; a < this.itemData.length; a++) if (i <= (t += this.itemData[a].rate)) {
e = this.itemData[a].item;
break;
}
var n = s.scene.manager.AddDropItem(e, s.scene.node);
if (n) {
n.node.setPosition(this.node.position);
this.seDrop && s.sound.playSE(this.seDrop);
this.drop(n);
}
this.itemNum--;
}
},
disable: function() {
var e = this.node.getComponent(cc.Collider);
e && (e.enabled = !1);
this.boxOpen();
},
changeSprite: function(e) {
this.flagOpen = !e;
var t = this.node.getComponent(cc.Sprite);
t && (t.spriteFrame = e ? this.spriteClose : this.spriteOpen);
this.checkMe.active = e;
},
boxOpen: function() {
this.changeSprite(!1);
},
boxClose: function() {
this.changeSprite(!0);
},
drop: function(e) {
var t = 20 + 70 * Math.random(), i = 6.28 * Math.random(), a = cc.v2(Math.cos(i) * t, Math.sin(i) * t);
e.node.runAction(cc.sequence(cc.jumpBy(.6, a, 80, 1), cc.callFunc(e.drop_end, e)));
}
});
cc._RF.pop();
}, {
CommandType: "CommandType",
Game: "Game",
Gimmick: "Gimmick"
} ],
StoryCutin: [ function(e, t) {
"use strict";
cc._RF.push(t, "02c8bDlmG5Pe7GidTB4Br2s", "StoryCutin");
var i = e("Game");
cc.Class({
extends: cc.Component,
properties: {
cover: cc.Node,
label: cc.Label,
buttonSkip: cc.Button
},
ctor: function() {
this.flagShow = !1;
this.texts = [];
this.textMax = 0;
this.textIdx = 0;
this.str = "";
this.strLen = 0;
this.strIdx = 0;
this.callbackTarget = null;
this.callbackFunc = null;
},
onLoad: function() {
this.node.zIndex = 2e3;
this.cover.opacity = 0;
this.label.string = "";
},
Show: function(e, t, i) {
this.texts = e;
this.textMax = e.length;
this.callbackTarget = t;
this.callbackFunc = i;
this.touch_on();
this.cover && this.cover.runAction(cc.sequence(cc.fadeTo(.1, 140), cc.callFunc(this.show_finish, this)));
},
show_finish: function() {
this.flagShow = !0;
i.EnablePress();
this.buttonSkip.node.active = !0;
this.next_str();
i.scene.PopupRegist(this);
},
next_str: function() {
if (!(this.textIdx >= this.textMax)) {
this.str = i.getLocalizedStr(this.texts[this.textIdx++], "ERROR");
this.strLen = this.str.length;
this.strIdx = 0;
this.label.node.runAction(cc.repeat(cc.sequence(cc.callFunc(this.show_char, this), cc.delayTime(.07)), this.strLen));
}
},
show_char: function() {
if (!(this.strIdx >= this.strLen)) {
var e = this.str.slice(0, ++this.strIdx);
this.label.string = e;
}
},
show_str_all: function() {
this.strIdx = this.strLen;
this.label.string = this.str;
},
process_story: function() {
0 != this.flagShow && (this.strIdx < this.strLen ? this.show_str_all() : this.textIdx >= this.textMax ? this.Hide() : this.strIdx >= this.strLen && this.next_str());
},
Hide: function() {
if (0 == this.flagShow) return !1;
this.flagShow = !1;
this.buttonSkip.node.active = !1;
i.scene.PopupUnregist();
this.cover && this.cover.runAction(cc.sequence(cc.fadeTo(.1, 0), cc.callFunc(this.hide_finish, this)));
return !0;
},
hide_finish: function() {
this.touch_off();
i.EnablePress();
this.callbackTarget && this.callbackFunc && this.callbackTarget.node.runAction(cc.callFunc(this.callbackFunc, this.callbackTarget));
this.node.destroy();
},
touch_on: function() {
i.scene.PauseInput();
this.node.on(cc.Node.EventType.TOUCH_START, function(e) {
e.stopPropagationImmediate();
e.unuse();
this.touchStart();
}, this);
this.node.on(cc.Node.EventType.TOUCH_MOVE, function(e) {
e.stopPropagationImmediate();
e.unuse();
this.touchMove();
}, this);
this.node.on(cc.Node.EventType.TOUCH_END, function(e) {
e.stopPropagationImmediate();
e.unuse();
this.touchEnd();
}, this);
this.node.on(cc.Node.EventType.TOUCH_CANCEL, function(e) {
e.stopPropagationImmediate();
e.unuse();
this.touchCancel();
}, this);
},
touch_off: function() {
this.node.off(cc.Node.EventType.TOUCH_START);
this.node.off(cc.Node.EventType.TOUCH_MOVE);
this.node.off(cc.Node.EventType.TOUCH_END);
this.node.off(cc.Node.EventType.TOUCH_CANCEL);
i.scene.ResumeInput();
},
touchStart: function() {},
touchMove: function() {},
touchEnd: function() {
this.process_story();
},
touchCancel: function() {},
IsNotAvailableButton: function() {
return 0 == this.flagShow || i.IsNotPress();
},
PressSkip: function() {
this.IsNotAvailableButton() || this.Hide();
},
PressOk: function() {
this.process_story();
},
PressCancel: function() {}
});
cc._RF.pop();
}, {
Game: "Game"
} ],
StoryScene: [ function(e, t) {
"use strict";
cc._RF.push(t, "09374X52NtGWazHxQ/S+qoi", "StoryScene");
var i = e("Game"), a = e("FadeCover");
cc.Class({
extends: cc.Component,
properties: {
label: cc.Label,
buttonSkip: cc.Button,
fadeCover: a
},
ctor: function() {
this.flagShow = !1;
this.texts = [];
this.textMax = 0;
this.textIdx = 0;
this.str = "";
this.strLen = 0;
this.strIdx = 0;
},
onLoad: function() {
var e = i.story.GetStoryTag(), t = i.story.GetTexts(e);
this.Show(t);
},
Show: function(e) {
this.texts = e;
this.textMax = e.length;
this.input_on();
this.node.runAction(cc.sequence(cc.delayTime(1.8), cc.callFunc(this.show_finish, this)));
},
show_finish: function() {
this.flagShow = !0;
i.EnablePress();
this.buttonSkip.node.active = !0;
this.next_str();
},
next_str: function() {
if (!(this.textIdx >= this.textMax)) {
this.str = i.getLocalizedStr(this.texts[this.textIdx++], "ERROR");
this.strLen = this.str.length;
this.strIdx = 0;
this.label.node.runAction(cc.repeat(cc.sequence(cc.callFunc(this.show_char, this), cc.delayTime(.09)), this.strLen));
}
},
show_char: function() {
if (!(this.strIdx >= this.strLen)) {
var e = this.str.slice(0, ++this.strIdx);
this.label.string = e;
}
},
show_str_all: function() {
this.strIdx = this.strLen;
this.label.string = this.str;
},
process_story: function() {
0 != this.flagShow && (this.strIdx < this.strLen ? this.show_str_all() : this.textIdx >= this.textMax ? this.Hide() : this.strIdx >= this.strLen && this.next_str());
},
Hide: function() {
if (0 != this.flagShow) {
this.flagShow = !1;
this.buttonSkip.node.active = !1;
this.node.runAction(cc.sequence(cc.delayTime(.6), cc.callFunc(this.hide_finish, this)));
}
},
hide_finish: function() {
this.input_off();
i.EnablePress();
i.story.PopNextScene(this.fadeCover);
},
input_on: function() {
this.node.on(cc.Node.EventType.TOUCH_START, function(e) {
e.stopPropagationImmediate();
e.unuse();
this.touchStart();
}, this);
this.node.on(cc.Node.EventType.TOUCH_MOVE, function(e) {
e.stopPropagationImmediate();
e.unuse();
this.touchMove();
}, this);
this.node.on(cc.Node.EventType.TOUCH_END, function(e) {
e.stopPropagationImmediate();
e.unuse();
this.touchEnd();
}, this);
this.node.on(cc.Node.EventType.TOUCH_CANCEL, function(e) {
e.stopPropagationImmediate();
e.unuse();
this.touchCancel();
}, this);
cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
},
input_off: function() {
this.node.off(cc.Node.EventType.TOUCH_START);
this.node.off(cc.Node.EventType.TOUCH_MOVE);
this.node.off(cc.Node.EventType.TOUCH_END);
this.node.off(cc.Node.EventType.TOUCH_CANCEL);
cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
},
touchStart: function() {},
touchMove: function() {},
touchEnd: function() {
this.process_story();
},
touchCancel: function() {},
onKeyUp: function(e) {
switch (e.keyCode) {
case cc.macro.KEY.enter:
this.process_story();
}
},
IsNotAvailableButton: function() {
return 0 == this.flagShow || i.IsNotPress();
},
PressSkip: function() {
this.IsNotAvailableButton() || this.Hide();
}
});
cc._RF.pop();
}, {
FadeCover: "FadeCover",
Game: "Game"
} ],
Story: [ function(e, t) {
"use strict";
cc._RF.push(t, "1eb41CgaXtCw7Sm65Py8UCl", "Story");
var i = e("BaseModel"), a = {
area1_0: [ "cutin_area1_0_0", "cutin_area1_0_1", "cutin_area1_0_2" ],
area1_1: [ "cutin_area1_1_0", "cutin_area1_1_1", "cutin_area1_1_2" ],
area2_0: [ "cutin_area2_0_0", "cutin_area2_0_1", "cutin_area2_0_2" ],
area2_1: [ "cutin_area2_1_0", "cutin_area2_1_1" ],
area3_1: [ "cutin_area3_1_0", "cutin_area3_1_1", "cutin_area3_1_2" ],
area4_1: [ "cutin_area4_1_0", "cutin_area4_1_1" ],
area5_0: [ "cutin_area5_0_0", "cutin_area5_0_1" ],
area5_1: [ "cutin_area5_1_0", "cutin_area5_1_1", "cutin_area5_1_2" ],
area1_story: [ "area1_story_0", "area1_story_1", "area1_story_2", "area1_story_3", "area1_story_4" ],
area2_story: [ "area2_story_0", "area2_story_1", "area2_story_2", "area2_story_3" ],
area3_story: [ "area3_story_0", "area3_story_1", "area3_story_2", "area3_story_3" ],
area4_story: [ "area4_story_0", "area4_story_1", "area4_story_2" ],
area5_story: [ "area5_story_0", "area5_story_1", "area5_story_2", "area5_story_3" ]
}, s = cc.Class({
extends: i,
init: function(e) {
this._super(e, "Story");
this.flagReadons = [];
this.storyTag = "";
this.sceneName = "";
this.interval = 0;
this.color = cc.Color.WHITE;
},
load: function() {
for (var e in a) this.flagReadons[e] = this.loadBoolean(".readon." + e, !1);
},
reset: function() {
for (var e in a) {
this.flagReadons[e] = !1;
this.saveBoolean(".readon." + e, !1);
}
},
newgame: function() {
this.reset();
},
IsReadon: function(e) {
return e in this.flagReadons && this.flagReadons[e];
},
DoReadon: function(e) {
if (e in this.flagReadons) {
this.flagReadons[e] = !0;
this.saveBoolean(".readon." + e, !0);
}
},
GetTexts: function(e) {
return e in a ? a[e] : [];
},
GetStoryTag: function() {
return this.storyTag;
},
PushStoryScene: function(e, t, i) {
this.storyTag = t;
this.sceneName = i;
e.TransitionFade("StoryScene", 1.2, new cc.Color(170, 116, 66));
},
PopNextScene: function(e) {
this.storyTag = "";
e.TransitionFade(this.sceneName, 1.2, new cc.Color(170, 116, 66));
}
});
t.exports = s;
cc._RF.pop();
}, {
BaseModel: "BaseModel"
} ],
SwordDesk: [ function(e, t) {
"use strict";
cc._RF.push(t, "a193cpIIepIqJ4oBQrbfosG", "SwordDesk");
var i = e("Gimmick"), a = e("CommandType"), s = e("SwordPopup"), n = e("CheckMe"), o = e("Game");
cc.Class({
extends: i,
properties: {
swordTag: "",
nodeSword: cc.Node,
popupSword: cc.Prefab,
checkMe: n
},
onLoad: function() {
this._super();
this.nodeSword.runAction(cc.repeatForever(cc.sequence(cc.moveBy(1, cc.v2(0, 3)), cc.moveBy(1, cc.v2(0, -3)))));
},
getAvailableCommand: function() {
return a.EVENT;
},
execCommand: function(e) {
e == a.EVENT && this.showPopup();
},
showPopup: function() {
var e = cc.instantiate(this.popupSword);
if (e) {
o.scene.camera.node.addChild(e);
var t = e.getComponent(s);
t && t.ShowWithTag(this.swordTag);
}
}
});
cc._RF.pop();
}, {
CheckMe: "CheckMe",
CommandType: "CommandType",
Game: "Game",
Gimmick: "Gimmick",
SwordPopup: "SwordPopup"
} ],
SwordPopup: [ function(e, t) {
"use strict";
cc._RF.push(t, "a6a49HhBjlLi6I0Llvosf5q", "SwordPopup");
var i = e("Popup"), a = e("ItemRank"), s = e("ItemInfo"), n = e("Game");
cc.Class({
extends: i,
properties: {
windowSub: cc.Node,
labelName: cc.Label,
labelText: cc.Label,
labelLv: cc.Label,
btLvup: cc.Button,
nodeBase: cc.Node,
prefabItemInfo: cc.Prefab,
prefabPlus: cc.Prefab
},
ctor: function() {
this.swordTag = "";
this.swordLv = null;
},
onLoad: function() {
this._super();
this.windowSub.scale = 0;
},
Ok: function() {
this.btLvup.node.active && this.btLvup.interactable && this.levelUp() && this.showLvupInfo();
n.EnablePress();
},
Show: function() {
if (this._super()) {
this.windowSub.runAction(cc.sequence(cc.delayTime(.06), cc.scaleTo(.4, 1).easing(cc.easeInOut(3)), cc.callFunc(this.show_finish_2, this)));
return !0;
}
return !1;
},
show_finish: function() {},
show_finish_2: function() {
this.flagShow = !0;
n.EnablePress();
n.scene.PopupRegist(this);
},
Hide: function() {
if (this._super()) {
this.windowSub.runAction(cc.scaleTo(.1, 0));
this.window.opacity = 255;
return !0;
}
return !1;
},
ShowWithTag: function(e) {
this.swordTag = e;
this.swordLv = n.dungeon.getSwordLevel(this.swordTag);
if (this.Show()) {
this.labelName.string = "「" + n.dungeon.getSwordName(this.swordTag) + "」";
this.labelText.string = n.dungeon.getSwordText(this.swordTag);
if (!this.swordLv) return;
this.showLvupInfo();
}
},
showLvupInfo: function() {
var e = this.swordLv.getLv(), t = n.dungeon.getSwordAttack(this.swordTag);
this.labelLv.string = "Lv." + e + " (Max." + this.swordLv.getLvMax() + ")   Attack: " + t;
this.btLvup.node.active = !this.swordLv.isLvMax();
this.nodeBase.removeAllChildren();
if (!this.swordLv.isLvMax()) {
for (var i = !0, s = n.dungeon.getSwordMaterials(this.swordTag), o = 0; o < s.length; o++) {
var c = s[o].item, r = n.item.getNum(c, a.NONE), h = n.dungeon.getNeedMaterialNum(this.swordTag, s[o]), u = r >= h;
u || (i = !1);
this.addItemInfo(c, a.NONE, h, cc.v2(28 * o, 0), u);
o >= 1 && this.addPlus(cc.v2(28 * o - 14, 0));
}
this.nodeBase.setPosition(28 * (s.length - 1) / -2, this.nodeBase.position.y);
this.btLvup.interactable = i;
}
},
addItemInfo: function(e, t, i, a, n) {
var o = cc.instantiate(this.prefabItemInfo);
if (o) {
this.nodeBase.addChild(o);
o.setPosition(a);
o.color = new cc.Color(213, 165, 112);
var c = o.getComponent(s);
if (c) {
c.SetTag(e);
c.SetRank(t);
c.SetNum(i);
c.SetNumColor(n ? new cc.Color(255, 255, 255) : new cc.Color(240, 0, 0));
}
}
},
addPlus: function(e) {
var t = cc.instantiate(this.prefabPlus);
if (t) {
this.nodeBase.addChild(t);
t.setPosition(e);
}
},
levelUp: function() {
if (this.swordLv.isLvMax()) return !1;
for (var e = !0, t = n.dungeon.getSwordMaterials(this.swordTag), i = [], s = 0; s < t.length; s++) {
var o = t[s].item, c = n.item.getNum(o, a.NONE), r = n.dungeon.getNeedMaterialNum(this.swordTag, t[s]);
c >= r || (e = !1);
i.push({
tag: o,
num: r
});
}
if (!e) return !1;
this.swordLv.incLv();
this.labelLv.node.runAction(cc.jumpBy(.4, cc.v2(0, 0), 6, 2));
n.scene.manager.SeLvup();
for (var h = 0; h < i.length; h++) n.item.useNum(i[h].tag, a.NONE, i[h].num);
return !0;
}
});
cc._RF.pop();
}, {
Game: "Game",
ItemInfo: "ItemInfo",
ItemRank: "ItemRank",
Popup: "Popup"
} ],
TabletSupport: [ function(e, t) {
"use strict";
cc._RF.push(t, "47699pmYI1BmpmtKTiyyxaJ", "TabletSupport");
cc.Class({
extends: cc.Component,
onLoad: function() {
var e = cc.view.getCanvasSize(), t = cc.view.getDesignResolutionSize();
if (e.height / e.width < t.height / t.width) {
var i = this.node.getComponent(cc.Canvas);
if (i) {
i.fitHeight = !0;
i.fitWidth = !1;
var a = cc.view.getVisibleSize();
this.node.setPosition(.5 * a.width, .5 * a.height);
this.node.setContentSize(a);
}
}
}
});
cc._RF.pop();
}, {} ],
ToolLevel: [ function(e, t) {
"use strict";
cc._RF.push(t, "393423VH05IjZFXAA+M960u", "ToolLevel");
var i = cc.Enum({
STONE: 0,
COPPER: 1,
SILVER: 2,
GOLD: 3,
RUBY: 4,
DIAMOND: 5
});
t.exports = i;
cc._RF.pop();
}, {} ],
ToolPopup: [ function(e, t) {
"use strict";
cc._RF.push(t, "f9700DEPjlCGKfhLzhdFzBl", "ToolPopup");
var i = e("Popup"), a = e("Game"), s = e("ToolLevel"), n = [ {
spd: 0,
atk: 0
}, {
spd: 10,
atk: 1
}, {
spd: 20,
atk: 2
}, {
spd: 30,
atk: 3
}, {
spd: 40,
atk: 4
}, {
spd: 50,
atk: 5
} ], o = null;
cc.Class({
extends: i,
ctor: function() {
this.targetChestTool = null;
this.needToolLv = s.STONE;
this.availableToolLv = s.STONE;
},
properties: {
explainLabel: cc.Label,
statusLabel: cc.Label,
needToolLabel: cc.Label,
availableToolLabel: cc.Label,
needToolSprite: cc.Sprite,
availableToolSprite: cc.Sprite,
buttonOk: cc.Button,
popupPurchase: cc.Prefab,
toolSprites: [ cc.SpriteFrame ]
},
Ok: function() {
if (this.targetChestTool.isHaveTool()) {
var e = cc.instantiate(this.popupPurchase);
if (e) {
a.scene.camera.node.addChild(e);
var t = e.getComponent("PurchaseToolPopup");
if (t) {
o = this;
t.SetCallbackHidePopup(function() {
o.CallbackHidePurchasePopup();
});
t.ShowWithToolLevel(this.availableToolLv);
}
}
} else a.scene.manager.ShowMessage(a.getLocalizedStr("skip_upgrade_reject"));
},
ShowWithInfo: function(e, t, i) {
if (this.Show()) {
this.targetChestTool = e;
this.needToolLv = t;
this.availableToolLv = i;
this.statusLabel.string = this.make_hint_text();
this.needToolLabel.string = a.getToolName(t);
this.availableToolLabel.string = a.getToolName(i);
this.needToolSprite.spriteFrame = this.toolSprites[t];
this.availableToolSprite.spriteFrame = this.toolSprites[i];
this.explainLabel._forceUpdateRenderData();
var s = this.explainLabel.node.getBoundingBox();
this.window.height = s.height + 121;
}
},
CallbackHidePurchasePopup: function() {
if (a.purchase.IsSkipUpgrade(this.availableToolLv)) {
this.targetChestTool.openChestByPurchase();
this.Cancel();
}
},
make_hint_text: function() {
var e = n[this.availableToolLv];
return "・" + a.getLocalizedStr("tool_up_spd") + " " + e.spd + "%UP\n・" + a.getLocalizedStr("tool_up_atk") + " +" + e.atk;
}
});
cc._RF.pop();
}, {
Game: "Game",
Popup: "Popup",
ToolLevel: "ToolLevel"
} ],
TrapArtifact: [ function(e, t) {
"use strict";
cc._RF.push(t, "27ef0BTseJJ9LwS8CgfsLAK", "TrapArtifact");
var i = e("TrapPopup"), a = e("CommandType"), s = e("Game");
cc.Class({
extends: i,
properties: {
artifactTag: ""
},
execCommand: function(e) {
e == a.EVENT && s.scene.manager.ShowArtifactPopup(this.artifactTag);
}
});
cc._RF.pop();
}, {
CommandType: "CommandType",
Game: "Game",
TrapPopup: "TrapPopup"
} ],
TrapClerk: [ function(e, t) {
"use strict";
cc._RF.push(t, "c844d6KMzROWbrgey6lh9uA", "TrapClerk");
var i = e("Gimmick"), a = e("Popup"), s = e("CommandType"), n = e("Game"), o = e("CheckMe");
cc.Class({
extends: i,
properties: {
popup: {
type: cc.Prefab,
default: null
},
stepTrigger: !1,
checkme: o
},
onLoad: function() {
this._super();
var e = n.isAvailableLvupLife(), t = n.isAvailableLvupStamina(), i = n.isAvailableLvupSpeed();
this.checkme.node.active = e || t || i;
},
getAvailableCommand: function() {
return this.stepTrigger ? s.NONE : s.EVENT;
},
execCommand: function(e) {
if (e == s.EVENT) {
this.show_popup();
this.checkme.node.active = !1;
}
},
collisionEnter: function() {
this.stepTrigger && this.show_popup();
},
show_popup: function() {
if (this.popup) {
var e = cc.instantiate(this.popup);
if (e) {
n.scene.camera.node.addChild(e);
var t = e.getComponent(a);
t && t.Show();
}
}
}
});
cc._RF.pop();
}, {
CheckMe: "CheckMe",
CommandType: "CommandType",
Game: "Game",
Gimmick: "Gimmick",
Popup: "Popup"
} ],
TrapInAppReview: [ function(e, t) {
"use strict";
cc._RF.push(t, "42db4D9A1hN5ohM6/eElAti", "TrapInAppReview");
var i = e("Gimmick"), a = e("Game");
cc.Class({
extends: i,
properties: {
saveTag: ""
},
ctor: function() {
this.countTrap = 0;
},
onLoad: function() {
this._super();
cc.assert("" !== this.saveTag, "ERROR! saveTag is empty.");
this.flagFire = a.inAppReview.IsTriggered(this.saveTag);
this.flagFire && this.node.destroy();
},
collisionEnter: function() {
this.countTrap++;
if (2 == this.countTrap && 0 == this.flagFire) {
this.flagFire = !0;
a.inAppReview.DoTriggered(this.saveTag);
a.scene.ShowInAppReview();
}
}
});
cc._RF.pop();
}, {
Game: "Game",
Gimmick: "Gimmick"
} ],
TrapItem: [ function(e, t) {
"use strict";
cc._RF.push(t, "829f9Ml1Q1H+oGwp9Cz8lPM", "TrapItem");
var i = e("TrapPopup"), a = e("CommandType"), s = e("Game");
cc.Class({
extends: i,
properties: {
itemMode: 1
},
execCommand: function(e) {
e == a.EVENT && s.scene.manager.ShowItemPopup(this.itemMode);
}
});
cc._RF.pop();
}, {
CommandType: "CommandType",
Game: "Game",
TrapPopup: "TrapPopup"
} ],
TrapJonathan: [ function(e, t) {
"use strict";
cc._RF.push(t, "7d3762VpzxMMrx2EpezzA+i", "TrapJonathan");
var i = e("TrapSerif"), a = e("Game");
cc.Class({
extends: i,
properties: {
jonathanTag: "",
messageNum: 0,
messagePrefix: ""
},
onLoad: function() {
this._super();
},
collisionEnter: function() {
if (1 != this.flagFire) {
a.scene.hero.ShowSerif(a.getLocalizedStr(this.messagePrefix + this.mesIdx));
this.mesIdx++;
if (this.mesIdx >= this.messageNum) {
this.mesIdx = 0;
a.jonathan.DoReadon(this.jonathanTag);
}
}
}
});
cc._RF.pop();
}, {
Game: "Game",
TrapSerif: "TrapSerif"
} ],
TrapLight: [ function(e, t) {
"use strict";
cc._RF.push(t, "e20c8oH6l1HdosvHJp0vjXz", "TrapLight");
var i = e("Gimmick"), a = e("Game");
cc.Class({
extends: i,
onLoad: function() {
this._super();
},
collisionEnter: function() {
a.scene.hero.LightOn();
},
collisionExit: function() {
a.scene.hero.LightOff();
}
});
cc._RF.pop();
}, {
Game: "Game",
Gimmick: "Gimmick"
} ],
TrapPointer: [ function(e, t) {
"use strict";
cc._RF.push(t, "03880W9Nb5BZIpdBk3umXew", "TrapPointer");
var i = e("Gimmick");
e("Game");
cc.Class({
extends: i,
properties: {
pointer: cc.Node
},
collisionEnter: function() {
this.pointer.active && (this.pointer.active = !1);
}
});
cc._RF.pop();
}, {
Game: "Game",
Gimmick: "Gimmick"
} ],
TrapPopup: [ function(e, t) {
"use strict";
cc._RF.push(t, "c6eeercBMlIEou8n2GEbmu3", "TrapPopup");
var i = e("Gimmick"), a = e("Popup"), s = e("CommandType"), n = e("Game");
cc.Class({
extends: i,
properties: {
popup: {
type: cc.Prefab,
default: null
},
stepTrigger: !1
},
getAvailableCommand: function() {
return this.stepTrigger ? s.NONE : s.EVENT;
},
execCommand: function(e) {
e == s.EVENT && this.show_popup();
},
collisionEnter: function() {
this.stepTrigger && this.show_popup();
},
show_popup: function() {
if (this.popup) {
var e = cc.instantiate(this.popup);
if (e) {
n.scene.camera.node.addChild(e);
var t = e.getComponent(a);
t && t.Show();
}
}
}
});
cc._RF.pop();
}, {
CommandType: "CommandType",
Game: "Game",
Gimmick: "Gimmick",
Popup: "Popup"
} ],
TrapQuest: [ function(e, t) {
"use strict";
cc._RF.push(t, "6dabcJBQP9A2436o8orPGE4", "TrapQuest");
var i = e("Gimmick"), a = e("CommandType"), s = e("Game");
e("SaveData");
cc.Class({
extends: i,
properties: {
checkMe: cc.Node,
questTag: ""
},
onLoad: function() {
this._super();
this.checkMe.active = !1;
s.setQuestTag(this.questTag);
var e = this.node.parent.getComponent("ResourceManager");
e && e.RegistResource(this);
},
CheckStatePoll: function(e) {
s.scene.questPopup && s.scene.questPopup.IsOpen() || s.getQuest().RefreshQuest(e) && (this.checkMe.active = !0);
},
getAvailableCommand: function() {
return a.EVENT;
},
execCommand: function(e) {
if (e == a.EVENT) {
this.checkMe.active = !1;
s.scene.questPopup && s.scene.questPopup.Show();
}
}
});
cc._RF.pop();
}, {
CommandType: "CommandType",
Game: "Game",
Gimmick: "Gimmick",
SaveData: "SaveData"
} ],
TrapResident: [ function(e, t) {
"use strict";
cc._RF.push(t, "7faffgvjQVEQ727QWLm+oPp", "TrapResident");
var i = e("TrapPopup"), a = e("CommandType"), s = e("Game");
cc.Class({
extends: i,
properties: {
residentTag: ""
},
execCommand: function(e) {
e == a.EVENT && s.scene.manager.ShowResidentPopup(this.residentTag);
}
});
cc._RF.pop();
}, {
CommandType: "CommandType",
Game: "Game",
TrapPopup: "TrapPopup"
} ],
TrapRoom: [ function(e, t) {
"use strict";
cc._RF.push(t, "ef07e2y/qdJwYfWlh3IJ34r", "TrapRoom");
var i = e("Gimmick"), a = (e("FadeCover"), e("Game")), s = e("Direction"), n = cc.Enum({
IMMEDIATE: 0,
FADE: 1,
TWEEN: 2
});
cc.Class({
extends: i,
properties: {
moveMode: {
type: n,
default: n.IMMEDIATE
},
cameraPosX: 0,
cameraPosY: 0,
interval: .4,
color: cc.Color.BLACK,
heroPosX: 0,
heroPosY: 0,
heroDir: {
type: s,
default: s.DOWN
}
},
ctor: function() {
this.flagTransition = !1;
},
onLoad: function() {
this._super();
},
collisionEnter: function() {
if (!this.flagTransition) {
this.flagTransition = !0;
switch (this.moveMode) {
case n.IMMEDIATE:
this.moveImmediate();
break;

case n.FADE:
this.moveFade();
break;

case n.TWEEN:
this.moveTween();
}
}
},
pauseInput: function() {
a.scene.PauseInput();
},
resumeInput: function() {
a.scene.ResumeInput();
this.flagTransition = !1;
},
move: function() {
a.scene.hero.RestorePos(cc.v2(this.heroPosX, this.heroPosY), this.heroDir);
a.scene.camera.node.position = cc.v2(this.cameraPosX, this.cameraPosY);
},
moveImmediate: function() {
this.pauseInput();
this.move();
this.resumeInput();
},
moveFade: function() {
this.pauseInput();
a.scene.fadeCover.FadeOutIn(this.interval, this.color, this.move, this, this.resumeInput, this);
},
moveTween: function() {
this.pauseInput();
a.scene.hero.node.runAction(cc.sequence(cc.scaleTo(.2, 0), cc.delayTime(this.interval), cc.callFunc(this.move, this), cc.scaleTo(.2, 1), cc.callFunc(this.resumeInput, this)));
a.scene.camera.node.runAction(cc.sequence(cc.delayTime(.2), cc.moveTo(this.interval, cc.v2(this.cameraPosX, this.cameraPosY)).easing(cc.easeInOut(3))));
}
});
cc._RF.pop();
}, {
Direction: "Direction",
FadeCover: "FadeCover",
Game: "Game",
Gimmick: "Gimmick"
} ],
TrapScene: [ function(e, t) {
"use strict";
cc._RF.push(t, "5ec78PhwpxKBb3fKJ2MFAsl", "TrapScene");
var i = e("Gimmick"), a = (e("FadeCover"), e("Game")), s = e("Direction");
cc.Class({
extends: i,
properties: {
sceneName: "",
interval: 1,
color: cc.Color.WHITE,
heroPosX: 0,
heroPosY: 0,
heroDir: {
type: s,
default: s.DOWN
},
storyTag: ""
},
ctor: function() {
this.flagTransition = !1;
},
onLoad: function() {
this._super();
},
collisionEnter: function() {
if (!this.flagTransition) {
this.flagTransition = !0;
a.settingState(cc.v2(this.heroPosX, this.heroPosY), this.heroDir);
if ("" != this.storyTag && 0 == a.story.IsReadon(this.storyTag)) {
a.story.DoReadon(this.storyTag);
a.story.PushStoryScene(a.scene.fadeCover, this.storyTag, this.sceneName);
} else a.scene.fadeCover.TransitionFade(this.sceneName, this.interval, this.color);
}
}
});
cc._RF.pop();
}, {
Direction: "Direction",
FadeCover: "FadeCover",
Game: "Game",
Gimmick: "Gimmick"
} ],
TrapSerif: [ function(e, t) {
"use strict";
cc._RF.push(t, "78b06FIY5hHPqgKZNiJ+TiR", "TrapSerif");
var i = e("Gimmick"), a = (e("CommandType"), e("Game")), s = e("SaveData"), n = cc.Enum({
RELOAD: 0,
REPEAT: 1,
ONCE: 2
});
cc.Class({
extends: i,
properties: {
kidokuType: {
type: n,
default: n.RELOAD
},
messages: [ cc.String ]
},
ctor: function() {
this.flagFire = !1;
this.mesIdx = 0;
},
onLoad: function() {
this._super();
s.loadBoolean(this.savekey + ".kidoku", !1) && this.disable();
},
collisionEnter: function() {
if (1 != this.flagFire) {
a.scene.hero.ShowSerif(a.getLocalizedStr(this.messages[this.mesIdx++]));
this.mesIdx >= this.messages.length && (this.mesIdx = 0);
if (this.kidokuType == n.RELOAD) this.flagFire = !0; else if (this.kidokuType == n.ONCE) {
this.flagFire = !0;
s.saveBoolean(this.savekey + ".kidoku", !0);
}
}
},
collisionExit: function() {
a.scene.hero.HideSerif();
this.kidokuType != n.RELOAD && this.kidokuType != n.ONCE || this.disable();
},
disable: function() {
this.flagFire = !0;
this.enabled = !1;
this.node.active = !1;
}
});
cc._RF.pop();
}, {
CommandType: "CommandType",
Game: "Game",
Gimmick: "Gimmick",
SaveData: "SaveData"
} ],
TrapSign: [ function(e, t) {
"use strict";
cc._RF.push(t, "f96617S/6hAPrVKriBTUjJs", "TrapSign");
var i = e("Gimmick"), a = e("CommandType"), s = e("Game");
cc.Class({
extends: i,
properties: {
balloonWidth: 0,
offsetScaleX: 1,
messages: [ cc.String ]
},
onLoad: function() {
this._super();
this.balloon = null;
this.mesIdx = 0;
},
getAvailableCommand: function() {
return a.EVENT;
},
execCommand: function(e) {
e == a.EVENT && (this.balloon ? this.hideBalloon() : this.showBalloon());
},
showBalloon: function() {
this.hideBalloon();
var e = s.getLocalizedStr(this.messages[this.mesIdx++]);
0 != this.balloonWidth ? this.balloon = s.scene.manager.ShowBalloonWithWidth(this.node, cc.v2(-12, 15), this.balloonWidth, e, !0) : 1 != this.offsetScaleX ? this.balloon = s.scene.manager.ShowBalloonWithOffsetX(this.node, cc.v2(-12, 15), this.offsetScaleX, e, !0) : this.balloon = s.scene.manager.ShowBalloon(this.node, cc.v2(-12, 15), e, !0);
this.mesIdx >= this.messages.length && (this.mesIdx = 0);
},
hideBalloon: function() {
if (this.balloon) {
this.balloon.hide();
this.balloon = null;
}
},
collisionExit: function() {
this.hideBalloon();
}
});
cc._RF.pop();
}, {
CommandType: "CommandType",
Game: "Game",
Gimmick: "Gimmick"
} ],
TrapStoryCutin: [ function(e, t) {
"use strict";
cc._RF.push(t, "e0fc4Q1t9JPQ6O0oY2cxofO", "TrapStoryCutin");
var i = e("Gimmick"), a = (e("CommandType"), e("Game")), s = cc.Enum({
RELOAD: 0,
REPEAT: 1,
ONCE: 2
});
cc.Class({
extends: i,
properties: {
kidokuType: {
type: s,
default: s.RELOAD
},
cutinTag: ""
},
onLoad: function() {
this._super();
this.flagFire = !1;
a.story.IsReadon(this.cutinTag) && this.disable();
},
collisionEnter: function() {
if (1 != this.flagFire) {
a.scene.manager.ShowStoryCutin(this.cutinTag, null, null);
if (this.kidokuType == s.RELOAD) this.disable(); else if (this.kidokuType == s.ONCE) {
this.disable();
a.story.DoReadon(this.cutinTag);
}
}
},
disable: function() {
this.flagFire = !0;
this.enabled = !1;
this.node.active = !1;
}
});
cc._RF.pop();
}, {
CommandType: "CommandType",
Game: "Game",
Gimmick: "Gimmick"
} ],
TrapVehicleDefault: [ function(e, t) {
"use strict";
cc._RF.push(t, "3e57cZ2giRBgrTaXx4m+tCg", "TrapVehicleDefault");
var i = e("Game"), a = e("Vehicle"), s = e("BoardingPoint");
cc.Class({
extends: cc.Component,
properties: {
vehicles: [ a ],
defaultPoints: [ s ]
},
onLoad: function() {
var e = this.node.getBoundingBox();
if (this.vehicles.length == this.defaultPoints.length) {
var t = i.scene.hero.node.position;
if (e.contains(t)) for (var a = 0; a < this.vehicles.length; a++) this.defaultPoints[a].ConnectVehicle(this.vehicles[a]);
this.node.destroy();
} else {
cc.log("ERROR: TrapVehicleDefault() rect=" + e);
this.node.destroy();
}
}
});
cc._RF.pop();
}, {
BoardingPoint: "BoardingPoint",
Game: "Game",
Vehicle: "Vehicle"
} ],
TrapVehicleRide: [ function(e, t) {
"use strict";
cc._RF.push(t, "325641RwLlO+bsXyJxxz3lg", "TrapVehicleRide");
var i = e("Game"), a = e("Vehicle");
cc.Class({
extends: cc.Component,
properties: {
vehicle: a
},
onLoad: function() {
var e = i.scene.hero.node.position;
this.node.getBoundingBox().contains(e) && i.scene.hero.RideOnImmediate(this.vehicle);
this.node.destroy();
}
});
cc._RF.pop();
}, {
Game: "Game",
Vehicle: "Vehicle"
} ],
Tree: [ function(e, t) {
"use strict";
cc._RF.push(t, "ab374XMj6FMnYJpVMYogu9a", "Tree");
var i = e("SaveData"), a = e("Resource"), s = e("ResourceState"), n = e("CommandType"), o = e("Game"), c = cc.Enum({
NONE: s.NONE,
GROWING: s.GROWING,
COMPLETE: s.REVIVE,
STUMP: 3
}), r = cc.Enum({
SMALL: 0,
MIDDLE: 1,
LARGE: 2,
FRUITS: 3
}), h = {
Tree0: [ cc.v2(1, 14), cc.v2(-11, 29), cc.v2(12, 26) ],
Tree1: [ cc.v2(5.5, 30), cc.v2(-5.5, 29), cc.v2(.5, 26) ],
Tree3: [ cc.v2(0, 14), cc.v2(-11, 29), cc.v2(13, 26) ],
Tree4: [ cc.v2(1, 22) ],
Tree5: [ cc.v2(1, 14), cc.v2(-11, 29), cc.v2(12, 26) ]
}, u = {
Tree0: [ cc.v2(5, -26), cc.v2(-10, -33), cc.v2(9, -26) ],
Tree1: [ cc.v2(11, -31.5), cc.v2(-8, -32.5), cc.v2(4, -37.5) ],
Tree3: [ cc.v2(5, -27), cc.v2(-10, -34), cc.v2(9, -27) ],
Tree4: [ cc.v2(16, -30) ],
Tree5: [ cc.v2(5, -26), cc.v2(-10, -33), cc.v2(9, -26) ]
};
cc.Class({
extends: a,
properties: {
treeSprite: [ cc.SpriteFrame ],
stumpSprite: [ cc.SpriteFrame ],
markSprite: {
type: cc.SpriteFrame,
default: null
},
fruitsPrefab: {
type: cc.Prefab,
default: null
},
fruitsMarkSprite: {
type: cc.SpriteFrame,
default: null
},
seDropFruits: cc.AudioClip,
fruitsInterval: 60
},
onLoad: function() {
this._super();
null != this.fruitsPrefab && this.fruitsInterval > 0 && (this.fruitsInterval = this.recalc_interval(this.fruitsInterval));
this.level = this.isFruits() ? r.FRUITS : r.LARGE;
this.useSave && (this.level = i.loadNumber(this.savekey + ".level", this.isFruits() ? r.FRUITS : r.LARGE));
this.fruits = [];
this.fruitsPos = h[this.modelName];
this.fruitsDropPos = u[this.modelName];
var e = r.LARGE + 1;
this.hpAdd = this.hp - e;
this.hpAdd < 0 && (this.hpAdd = 0);
this.growIntervals = [ Math.floor(.2 * this.reviveInterval), Math.floor(.6 * this.reviveInterval), this.reviveInterval ];
},
refreshView: function() {
var e = this.state != s.NONE, t = this.node.getComponent(cc.RigidBody);
t && (t.active = e);
var i = this.node.getComponent(cc.Sprite);
if (i) {
var a = this.level;
a > r.LARGE && (a = r.LARGE);
this.state == c.NONE ? i.spriteFrame = this.markSprite ? this.markSprite : null : this.state == c.STUMP ? i.spriteFrame = this.stumpSprite[a] : a == r.LARGE && this.isFruits() && this.fruitsMarkSprite ? i.spriteFrame = this.fruitsMarkSprite : i.spriteFrame = this.treeSprite[a];
}
if (this.isFruits() && this.fruits.length <= 0 && this.level >= r.FRUITS) for (var n = 0; n < this.fruitsPos.length; n++) {
var o = cc.instantiate(this.fruitsPrefab);
if (o) {
this.node.addChild(o);
o.setPosition(this.fruitsPos[n]);
this.fruits.push(o);
}
}
},
progress: function(e) {
if (this.level == r.LARGE && this.isFruits()) e >= this.fruitsInterval && this.change_state_with_lv(c.COMPLETE, r.FRUITS); else if (e >= this.growIntervals[r.LARGE]) if (this.isFruits()) if (e >= this.growIntervals[r.LARGE] + this.fruitsInterval) this.change_state_with_lv(c.COMPLETE, r.FRUITS); else {
this.change_state_with_lv(c.GROWING, r.LARGE);
this.reset_time();
} else this.change_state_with_lv(c.COMPLETE, r.LARGE); else e >= this.growIntervals[r.MIDDLE] ? this.change_state_with_lv(c.GROWING, r.MIDDLE) : e >= this.growIntervals[r.SMALL] && this.change_state_with_lv(c.GROWING, r.SMALL);
},
getAvailableCommand: function() {
return this.state >= c.GROWING ? n.AXE : n.NONE;
},
getHp: function() {
return this.state == c.STUMP ? 1 : this.level + 1 + this.hpAdd;
},
change_level: function(e) {
if (this.level != e) {
this.level = e;
this.useSave && i.saveNumber(this.savekey + ".level", this.level);
this.change_view();
}
},
change_state_with_lv: function(e, t) {
var a = !1;
if (this.level != t) {
this.level = t;
this.useSave && i.saveNumber(this.savekey + ".level", this.level);
a = !0;
}
0 == this.change_state(e) && 1 == a && this.change_view();
},
get_drop_num: function() {
var e = this.level + 1, t = e;
if (this.state != c.STUMP) {
t = this.dropNum * t * 2 / 3;
e = Math.floor(Math.random() * t + t);
}
return e;
},
execCommand: function(e) {
if (e != n.NONE) if (this.state != c.COMPLETE || this.level != r.FRUITS) this._super(e); else {
this.change_state_with_lv(c.GROWING, r.LARGE);
this.reset_time();
for (var t = 0; t < this.fruits.length; t++) {
var i = this.fruits[t], a = i.parent.convertToWorldSpaceAR(i.getPosition());
i.parent = null;
o.scene.node.addChild(i);
i.setPosition(this.node.parent.convertToNodeSpaceAR(a));
this.drop_fruits(i, t);
}
this.fruits = [];
this.seDropFruits && o.sound.playSE(this.seDropFruits);
}
},
finish: function() {
if (this.state >= c.GROWING && this.state <= c.COMPLETE) this.change_state(c.STUMP); else {
this.change_level(r.SMALL);
this._super();
}
},
revive: function() {
this.isFruits() ? this.change_state_with_lv(c.COMPLETE, r.FRUITS) : this.change_state_with_lv(c.COMPLETE, r.LARGE);
},
reset: function() {
this._super();
this.revive();
},
isFruits: function() {
return null != this.fruitsPrefab;
},
drop_fruits: function(e, t) {
var i = this.fruitsDropPos[t], a = e.getComponent("DropItem");
e.runAction(cc.sequence(cc.jumpBy(.4, i, 40, 1), cc.callFunc(a.drop_end, a)));
},
changeStump: function() {
this.change_state_with_lv(c.STUMP, r.LARGE);
}
});
cc._RF.pop();
}, {
CommandType: "CommandType",
Game: "Game",
Resource: "Resource",
ResourceState: "ResourceState",
SaveData: "SaveData"
} ],
TutorialCommand: [ function(e, t) {
"use strict";
cc._RF.push(t, "420ecuXNw5DDq08ZBfDFjXC", "TutorialCommand");
var i = cc.Enum({
NONE: 0,
WAIT: 1,
CAMERA: 2,
MESSAGE: 3,
BACK: 4
});
t.exports = i;
cc._RF.pop();
}, {} ],
TutorialMesPopup: [ function(e, t) {
"use strict";
cc._RF.push(t, "ff01eAbrx1LkZ0Q5i1/T7BS", "TutorialMesPopup");
var i = e("Popup"), a = e("Game");
cc.Class({
extends: i,
properties: {
titleLabel: cc.Label
},
hide_finish: function() {
a.tutorial.nextCommand();
this._super();
},
Ok: function() {
this.Cancel();
},
ShowWithText: function(e) {
this.Show() && (this.titleLabel.string = e);
}
});
cc._RF.pop();
}, {
Game: "Game",
Popup: "Popup"
} ],
TutorialPopup: [ function(e, t) {
"use strict";
cc._RF.push(t, "6b09c1rI4pEjqmwXL3f3P4B", "TutorialPopup");
var i = e("Popup"), a = e("Game");
cc.Class({
extends: i,
properties: {
tutorialTag: ""
},
Ok: function() {
this.Hide();
a.tutorial.StartTutorial(this.tutorialTag);
}
});
cc._RF.pop();
}, {
Game: "Game",
Popup: "Popup"
} ],
TutorialScene: [ function(e, t) {
"use strict";
cc._RF.push(t, "096c1NrQtxIm5fEvuEaQtBi", "TutorialScene");
var i = e("BaseScene"), a = e("Game");
cc.Class({
extends: i,
properties: {
seBird: cc.AudioClip,
pointer: cc.Node
},
ctor: function() {
this.flagFinish = !1;
},
onEnter: function() {
this._super();
this.node.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(this.playPointer, this)));
},
start: function() {
this._super();
this.node.runAction(cc.sequence(cc.delayTime(2), cc.callFunc(this.playSe, this)));
},
playSe: function() {
a.sound.playSE(this.seBird);
},
playPointer: function() {
this.pointer.active = !0;
this.pointer.getComponent(cc.Animation).play();
},
onCollisionEnter: function(e) {
if ("Hero" == e.node.group && 333 == e.tag && 0 == this.flagFinish) {
this.flagFinish = !0;
a.doTutorial();
a.tutorial.SetTutorialArea1(!0);
}
}
});
cc._RF.pop();
}, {
BaseScene: "BaseScene",
Game: "Game"
} ],
Tutorial: [ function(e, t) {
"use strict";
cc._RF.push(t, "67bebXcaeVFTK/1qskTlAq2", "Tutorial");
var i = e("BaseModel"), a = e("TutorialCommand"), s = {
move: [ {
cmd: a.WAIT,
interval: .6
}, {
cmd: a.MESSAGE,
tag: "tutorial_1st_0",
text: "ミニミニ農園へようこそ！"
}, {
cmd: a.MESSAGE,
tag: "tutorial_1st_1",
text: "これからあなたは、"
}, {
cmd: a.MESSAGE,
tag: "tutorial_1st_2",
text: "彼を操作して、"
}, {
cmd: a.MESSAGE,
tag: "tutorial_1st_3",
text: "未開の地を開拓していきます。"
}, {
cmd: a.CAMERA,
pos: cc.v2(2, 128)
}, {
cmd: a.MESSAGE,
tag: "tutorial_1st_4",
text: "この草木もそうですが、"
}, {
cmd: a.MESSAGE,
tag: "tutorial_1st_5",
text: "木や岩、畑などに体当たりすると、"
}, {
cmd: a.MESSAGE,
tag: "tutorial_1st_6",
text: "自動的にアクションが行われます。"
}, {
cmd: a.BACK
}, {
cmd: a.MESSAGE,
tag: "tutorial_1st_7",
text: "画面をグリグリと指で動かして、"
}, {
cmd: a.MESSAGE,
tag: "tutorial_1st_8",
text: "彼を移動させ、"
}, {
cmd: a.MESSAGE,
tag: "tutorial_1st_9",
text: "どんどん奥へ進んでみましょう。"
} ],
area1: [ {
cmd: a.WAIT,
interval: .6
}, {
cmd: a.MESSAGE,
tag: "tutorial_area0_0",
text: "ここがあなたの担当区域です。"
}, {
cmd: a.CAMERA,
pos: cc.v2(-143, 100)
}, {
cmd: a.MESSAGE,
tag: "tutorial_area0_1",
text: "このエリアでは、この家を買うことが目標となります。"
}, {
cmd: a.CAMERA,
pos: cc.v2(-216, -135)
}, {
cmd: a.MESSAGE,
tag: "tutorial_area0_2",
text: "まずは近くの畑や、"
}, {
cmd: a.CAMERA,
pos: cc.v2(-87, -20)
}, {
cmd: a.MESSAGE,
tag: "tutorial_area0_3",
text: "木などから素材を集めましょう。"
}, {
cmd: a.MESSAGE,
tag: "tutorial_area0_4",
text: "素材は時間が経つと復活します。"
}, {
cmd: a.CAMERA,
pos: cc.v2(-34, 70)
}, {
cmd: a.MESSAGE,
tag: "tutorial_area0_5",
text: "この木のように半透明になっているものは、"
}, {
cmd: a.MESSAGE,
tag: "tutorial_area0_6",
text: "コインを支払うと利用可能になります。"
}, {
cmd: a.CAMERA,
pos: cc.v2(-64, -106)
}, {
cmd: a.MESSAGE,
tag: "tutorial_area0_7",
text: "このポストで村人と素材の交換ができ、"
}, {
cmd: a.MESSAGE,
tag: "tutorial_area0_8",
text: "コインを稼ぐことができます。"
}, {
cmd: a.CAMERA,
pos: cc.v2(395, -156)
}, {
cmd: a.MESSAGE,
tag: "tutorial_area0_9",
text: "コインを沢山稼いで、行ける範囲を増やしていき、"
}, {
cmd: a.CAMERA,
pos: cc.v2(-143, 100)
}, {
cmd: a.MESSAGE,
tag: "tutorial_area0_10",
text: "いつか家を買いましょう。"
}, {
cmd: a.CAMERA,
pos: cc.v2(-8, 224)
}, {
cmd: a.MESSAGE,
tag: "tutorial_area0_11",
text: "すると次のエリアに進めるようになります。"
}, {
cmd: a.MESSAGE,
tag: "tutorial_area0_12",
text: "(すぐに家は買えませんので、空き時間にのんびりコツコツとお楽しみください！)"
}, {
cmd: a.BACK
}, {
cmd: a.MESSAGE,
tag: "tutorial_area0_13",
text: "それでは開拓がんばってください！"
} ]
}, n = cc.Class({
extends: i,
init: function(e) {
this._super(e, "Tutorial");
this.flagReadons = [];
this.tutorialTag = "";
this.commands = null;
this.commandMax = 0;
this.commandIdx = 0;
this.popup = null;
this.flagArea1 = !1;
},
load: function() {
this.load_readon("fishing");
this.load_readon("artifact");
this.load_readon("house");
this.load_readon("pioneer");
this.load_readon("quest");
this.load_readon("warp");
this.load_readon("resident");
this.load_readon("animal_explorers");
},
load_readon: function(e) {
this.flagReadons[e] = this.loadBoolean(".readon." + e, !1);
},
reset: function() {
for (var e in this.flagReadons) {
this.flagReadons[e] = !1;
this.saveBoolean(".readon." + e, !1);
}
this.tutorialTag = "";
this.commands = null;
this.commandMax = 0;
this.commandIdx = 0;
this.popup = null;
this.flagArea1 = !1;
},
IsReadon: function(e) {
return e in this.flagReadons && this.flagReadons[e];
},
DoReadon: function(e) {
if (e in this.flagReadons) {
this.flagReadons[e] = !0;
this.saveBoolean(".readon." + e, !0);
}
},
ShowExplainPopup: function(e) {
this.game.scene.manager.ShowExplainPopup(e);
},
ShowExplainPopupOnce: function(e) {
if (0 == this.IsReadon(e)) {
this.ShowExplainPopup(e);
this.DoReadon(e);
}
},
pauseGame: function() {
this.game.scene.PauseInput();
this.game.scene.CameraModeFree();
},
resumeGame: function() {
if ("area1" == this.tutorialTag) {
this.game.achievement && this.game.achievement.Unlock("try_tutorial");
this.game.scene.ShowBannerAds();
}
this.game.scene.ResumeInput();
this.game.scene.CameraModeTracking();
},
nextCommand: function() {
if (9999 != this.commandIdx) {
this.popup = null;
if (this.commandIdx >= this.commandMax) this.resumeGame(); else {
var e = this.commands[this.commandIdx++];
switch (e.cmd) {
case a.WAIT:
this.waitTime(e.interval);
break;

case a.MESSAGE:
this.showMessage(e.text, e.tag);
break;

case a.CAMERA:
this.moveCamera(e.pos);
break;

case a.BACK:
this.moveCamera(this.game.scene.hero.node.position);
}
this.commandIdx >= this.commandMax && this.game.scene.ui.HideSkipButton();
}
}
},
waitTime: function(e) {
this.game.scene.camera.node.runAction(cc.sequence(cc.delayTime(e), cc.callFunc(this.nextCommand, this)));
},
moveCamera: function(e) {
this.game.scene.camera.node.runAction(cc.sequence(cc.moveTo(1.2, e).easing(cc.easeInOut(3)), cc.delayTime(.1), cc.callFunc(this.nextCommand, this)));
},
showMessage: function(e, t) {
this.popup = this.game.scene.manager.ShowTutorialMesPopup(this.game.getLocalizedStr(t, e));
},
StartTutorial: function(e) {
if (e in s) {
this.tutorialTag = e;
this.commands = s[e];
this.commandMax = this.commands.length;
this.commandIdx = 0;
this.pauseGame();
this.nextCommand();
this.game.scene.ui.ShowSkipButton();
}
},
AbortTutorial: function() {
this.game.scene.ui.HideSkipButton();
this.commandIdx = 9999;
if (this.popup) {
this.popup.Hide();
this.popup = null;
}
this.game.scene.camera.node.stopAllActions();
this.game.scene.camera.node.runAction(cc.sequence(cc.moveTo(.6, this.game.scene.hero.node.position), cc.callFunc(this.resumeGame, this)));
},
CheckTutorialArea1: function() {
if (this.flagArea1) {
this.flagArea1 = !1;
return !this.game.Is2ndPlay();
}
return !1;
},
IsTutorialArea1: function() {
return this.flagArea1 && !this.game.Is2ndPlay();
},
SetTutorialArea1: function(e) {
this.flagArea1 = e;
},
CheckTutorialMove: function() {
return !this.game.Is2ndPlay();
}
});
t.exports = n;
cc._RF.pop();
}, {
BaseModel: "BaseModel",
TutorialCommand: "TutorialCommand"
} ],
UI: [ function(e, t) {
"use strict";
cc._RF.push(t, "47681N0e9JF1ahrn9aVHxFt", "UI");
var i = e("MiniInfo"), a = e("Game"), s = e("Unlock"), n = e("AppPlatform"), o = e("OptionMenu"), c = e("DungeonUI");
cc.Class({
extends: cc.Component,
properties: {
miniInfo: {
type: i,
default: null
},
dungeonUI: {
type: c,
default: null
},
optionMenu: {
type: o,
default: null
},
buttonSkip: {
type: cc.Button,
default: null
},
buttonReset: {
type: cc.Button,
default: null
},
buttonLang: {
type: cc.Button,
default: null
},
labelLang: {
type: cc.Label,
default: null
},
buttonUnlock: {
type: cc.Button,
default: null
},
buttonSaved: {
type: cc.Button,
default: null
},
buttonNewgame: {
type: cc.Button,
default: null
}
},
onLoad: function() {
this.node.zIndex = 1e3;
this.optionMenu && (this.optionMenu.node.active = !0);
this.buttonSkip && (this.buttonSkip.node.active = !1);
this.buttonReset && (this.buttonReset.node.active = a.debug);
this.buttonLang && (this.buttonLang.node.active = a.debug);
this.labelLang && a.debug && (this.labelLang.string = a.getLang());
this.buttonUnlock && (this.buttonUnlock.node.active = a.debug);
this.buttonSaved && (this.buttonSaved.node.active = a.debug && a.savedGames.isSavedGames());
this.buttonNewgame && (this.buttonNewgame.node.active = a.debug);
},
ShowSkipButton: function() {
this.buttonSkip && (this.buttonSkip.node.active = !0);
},
HideSkipButton: function() {
this.buttonSkip && (this.buttonSkip.node.active = !1);
},
PressSkip: function() {
if (!a.IsNotPress()) {
a.tutorial.AbortTutorial();
a.EnablePress();
}
},
PressReset: function() {
a.resetDebug();
},
PressLang: function() {
a.nextLang();
this.labelLang && (this.labelLang.string = a.getLang());
},
PressUnlock: function() {
for (var e = a.scene.node.children, t = 0; t < e.length; t++) {
var i = e[t].getComponent(s);
i && i.UnlockDebug();
}
},
PressSaved: function() {
n.ShowSavedGamesUI();
},
PressNewgame: function() {
a.newgameDebug();
},
HideOptionMenu: function() {
this.optionMenu && this.optionMenu.HideOptionMenu();
},
RefreshCoin: function() {
this.miniInfo && this.miniInfo.RefreshCoin();
},
RefreshEx: function() {
this.dungeonUI && this.dungeonUI.RefreshEx();
},
RefreshFloor: function() {
this.dungeonUI && this.dungeonUI.RefreshFloor();
},
RefreshLife: function() {
this.dungeonUI && this.dungeonUI.RefreshLife();
},
RefreshStamina: function() {
this.dungeonUI && this.dungeonUI.RefreshStamina();
},
BlinkLifeGauge: function() {
this.dungeonUI && this.dungeonUI.BlinkLifeGauge();
},
BlinkStaminaGauge: function() {
this.dungeonUI && this.dungeonUI.BlinkStaminaGauge();
}
});
cc._RF.pop();
}, {
AppPlatform: "AppPlatform",
DungeonUI: "DungeonUI",
Game: "Game",
MiniInfo: "MiniInfo",
OptionMenu: "OptionMenu",
Unlock: "Unlock"
} ],
UMPPopup: [ function(e, t) {
"use strict";
cc._RF.push(t, "33512qntaFJ6r67WqTMOo81", "UMPPopup");
var i = e("Popup"), a = e("AppPlatform");
cc.Class({
extends: i,
properties: {},
Ok: function() {
cc.sys.isNative && a.CustomUMP();
this.Hide();
}
});
cc._RF.pop();
}, {
AppPlatform: "AppPlatform",
Popup: "Popup"
} ],
UnlockPopup: [ function(e, t) {
"use strict";
cc._RF.push(t, "339b5sRKrNDyr69kP5Dc6jb", "UnlockPopup");
var i = e("Popup"), a = e("Game"), s = e("CoinLabel");
cc.Class({
extends: i,
properties: {
titleLabel: cc.Label,
coinLabel: s,
buttonOk: cc.Button
},
ctor: function() {
this.targetUnlock = null;
},
Ok: function() {
if (this.targetUnlock) {
this.targetUnlock.Unlock();
a.scene.ui.RefreshCoin();
this.flagCloudSave = !0;
this.Hide();
}
},
SetInfo: function(e, t) {
this.titleLabel.string = e;
this.coinLabel.SetCoin(t);
var i = a.coin.getValue() < t;
this.coinLabel.SetColor(i ? new cc.Color(240, 0, 0) : new cc.Color(255, 255, 255));
this.buttonOk.interactable = !i;
this.flagUseOk = !i;
},
ShowWithUnlock: function(e) {
if (e) {
this.targetUnlock = e;
if (this.Show()) {
var t = this.targetUnlock.GetTitle(), i = this.targetUnlock.GetNeedCoin();
this.SetInfo(t, i);
}
}
}
});
cc._RF.pop();
}, {
CoinLabel: "CoinLabel",
Game: "Game",
Popup: "Popup"
} ],
Unlock: [ function(e, t) {
"use strict";
cc._RF.push(t, "92285tDFOhDo5zgst5byn4x", "Unlock");
var i = e("Game"), a = e("SaveData");
cc.Class({
extends: cc.Component,
properties: {
saveKey: "",
title: "ひとこと",
needCoin: 0
},
onLoad: function() {
this.unlock = a.loadBoolean(this.saveKey + ".unlock", !1);
},
start: function() {
this.refresh();
},
refresh: function() {
var e = this.node.getComponent("Gimmick");
e && e.SetLock(!this.unlock);
this.unlock && (this.enabled = !1);
},
GetTitle: function() {
return i.getLocalizedStr(this.title);
},
GetNeedCoin: function() {
return this.needCoin;
},
IsUnlock: function() {
return this.unlock;
},
Unlock: function() {
if (!this.unlock && i.coin.getValue() >= this.needCoin) {
i.coin.useCurrency(this.needCoin);
this.unlock = !0;
a.saveBoolean(this.saveKey + ".unlock", !0);
this.refresh();
"65LxnHfb3L9iRAc6Wxjt" === this.saveKey && i.achievement && i.achievement.Unlock("try_unlock");
}
},
UnlockDebug: function() {
if (!this.unlock) {
this.unlock = !0;
a.saveBoolean(this.saveKey + ".unlock", !0);
this.refresh();
}
},
Lock: function() {
this.unlock = !1;
a.saveBoolean(this.saveKey + ".unlock", !1);
this.refresh();
},
show_review: function() {
i.scene.manager.ShowReviewPopupByTag("area1_first_gate");
}
});
cc._RF.pop();
}, {
Game: "Game",
SaveData: "SaveData"
} ],
Vehicle: [ function(e, t) {
"use strict";
cc._RF.push(t, "74a87ZdRw1McashJ4/XPoFT", "Vehicle");
var i = e("Gimmick"), a = (e("CommandType"), e("Game"));
cc.Class({
extends: i,
properties: {},
onLoad: function() {
this._super();
},
refreshZIndex: function() {
this.node.zIndex = -this.node.y - 100;
},
collisionEnter: function() {
a.scene.hero.RideOn(this);
},
GetRidePos: function() {
return this.node.position;
},
updateVehicle: function(e) {
this.node.position = e.node.position;
this.refreshZIndex();
}
});
cc._RF.pop();
}, {
CommandType: "CommandType",
Game: "Game",
Gimmick: "Gimmick"
} ],
Walker: [ function(e, t) {
"use strict";
cc._RF.push(t, "644bcp6Nl9IpbyY4bKP57wb", "Walker");
var i = e("Object"), a = e("Direction");
cc.Class({
extends: i,
properties: {
speed: 100
},
ctor: function() {
this.direction = a.DOWN;
this.flagMoving = !1;
},
onLoad: function() {
this._super();
this.body = this.node.getComponent(cc.RigidBody);
},
update: function() {
this.refreshZIndex();
},
getSpeed: function() {
return this.speed;
},
setSpeed: function(e) {
this.speed = e;
},
getDirection: function() {
return this.direction;
},
change_dir: function(e) {
if (this.direction == e) return !1;
this.direction = e;
return !0;
},
isMoving: function() {
return this.flagMoving;
},
move: function(e, t) {
this.flagMoving = !0;
this.body.linearVelocity = e.mul(t * this.speed);
var i = Math.atan2(e.y, e.x), s = cc.misc.radiansToDegrees(-i) % 360, n = this.direction;
n = s > -135 && s <= -45 ? a.UP : s > -45 && s <= 45 ? a.RIGHT : s > 45 && s <= 135 ? a.DOWN : a.LEFT;
return this.change_dir(n);
},
turnTarget: function(e) {
var t = Math.atan2(e.y, e.x), i = cc.misc.radiansToDegrees(-t) % 360, s = i - 90, n = i + 90, o = 0;
this.direction == a.RIGHT ? o = 0 : this.direction == a.DOWN ? o = 90 : this.direction == a.LEFT ? o = 180 : this.direction == a.UP && (o = 270);
i < 0 && (o -= 360);
(o < s || o > n) && this.move(e, 0);
},
stop: function() {
this.body.linearVelocity = cc.v2(0, 0);
this.flagMoving = !1;
}
});
cc._RF.pop();
}, {
Direction: "Direction",
Object: "Object"
} ],
WarpCell: [ function(e, t) {
"use strict";
cc._RF.push(t, "42292jBAs1Poo0KwuuqS/Hn", "WarpCell");
var i = e("Game");
cc.Class({
extends: cc.Component,
properties: {
labelName: cc.Label,
spriteAds: cc.Sprite
},
ctor: function() {
this.warpTag = "";
this.isAds = !1;
this.warpPopup = null;
},
PressCell: function() {
i.IsNotPress() || this.warpPopup && this.warpPopup.SetWarp(this.warpTag, this.isAds);
},
SetInfo: function(e, t, a) {
this.warpTag = e;
this.isAds = t;
this.warpPopup = a;
this.labelName.string = i.warpData.GetName(this.warpTag);
this.spriteAds.node.active = this.isAds;
}
});
cc._RF.pop();
}, {
Game: "Game"
} ],
WarpData: [ function(e, t) {
"use strict";
cc._RF.push(t, "a48e8+HWgdAmoNP9WvSMd6v", "WarpData");
var i = e("BaseModel"), a = {
Area1_center: {
name: "エリア1: 中央広場",
name_tag: "warp_area0_center",
area_id: 1,
scene: "Map0Scene",
pos: cc.v2(200, 12),
unlock: !1
},
Area1_right: {
name: "エリア1: 右のほう",
name_tag: "warp_area0_right",
area_id: 1,
scene: "Map0Scene",
pos: cc.v2(378, 106),
unlock: !1
},
Area1_left: {
name: "エリア1: 左のほう",
name_tag: "warp_area0_left",
area_id: 1,
scene: "Map0Scene",
pos: cc.v2(-552, -46),
unlock: !1
},
Area1_up: {
name: "エリア1: 上のほう",
name_tag: "warp_area0_up",
area_id: 1,
scene: "Map0Scene",
pos: cc.v2(-400, 400),
unlock: !1
},
Area1_down: {
name: "エリア1: 下のほう",
name_tag: "warp_area0_down",
area_id: 1,
scene: "Map0Scene",
pos: cc.v2(126, -460),
unlock: !1
},
Area2_house1: {
name: "エリア2: 森に囲まれた家",
name_tag: "warp_area1_forest",
area_id: 2,
scene: "Map1Scene",
pos: cc.v2(-16, 48),
unlock: !1
},
Area2_private: {
name: "エリア2: プライベート農園",
name_tag: "warp_area1_private",
area_id: 2,
scene: "Map1Scene",
pos: cc.v2(352, -356),
unlock: !1
},
Area2_left: {
name: "エリア2: 川沿いのとこ",
name_tag: "warp_area1_river",
area_id: 2,
scene: "Map1Scene",
pos: cc.v2(-336, -78),
unlock: !1
},
Area2_house2: {
name: "エリア2: 広そうな家",
name_tag: "warp_area1_house1",
area_id: 2,
scene: "Map1Scene",
pos: cc.v2(128, 214),
unlock: !1
},
Area2_up: {
name: "エリア2: 洋なしの木",
name_tag: "warp_area1_pear",
area_id: 2,
scene: "Map1Scene",
pos: cc.v2(-272, 288),
unlock: !1
},
Area3_center: {
name: "エリア3: 真ん中",
name_tag: "warp_area2_center",
area_id: 3,
scene: "Map2-0Scene",
pos: cc.v2(-96, -94),
unlock: !1
},
Area3_right: {
name: "エリア3: 右のほう",
name_tag: "warp_area2_right",
area_id: 3,
scene: "Map2-0Scene",
pos: cc.v2(334, 128),
unlock: !1
},
Area3_left: {
name: "エリア3: 左のほう",
name_tag: "warp_area2_left",
area_id: 3,
scene: "Map2-0Scene",
pos: cc.v2(-360, 108),
unlock: !1
},
Area3_under: {
name: "エリア3: 地下",
name_tag: "warp_area2_under",
area_id: 3,
scene: "Map2-1Scene",
pos: cc.v2(-34, 56),
unlock: !1
},
Area4_bottom: {
name: "エリア4: 下のほう",
name_tag: "warp_area3_bottom",
area_id: 4,
scene: "Map3-0Scene",
pos: cc.v2(142, -460),
unlock: !1
},
Area4_island: {
name: "エリア4: はぐれ島",
name_tag: "warp_area3_island",
area_id: 4,
scene: "Map3-0Scene",
pos: cc.v2(504, 578),
unlock: !1
},
Area4_lake: {
name: "エリア4: 湖の奥",
name_tag: "warp_area3_lake",
area_id: 4,
scene: "Map3-0Scene",
pos: cc.v2(-308, 314),
unlock: !1
},
Area5_ladder: {
name: "エリア5: 下層部",
name_tag: "warp_area4_ladder",
area_id: 5,
scene: "Map4-0Scene",
pos: cc.v2(-464, -204),
unlock: !1
},
Area5_underpass: {
name: "エリア5: 廃墟",
name_tag: "warp_area4_underpass",
area_id: 5,
scene: "Map4-1Scene",
pos: cc.v2(-18, -232),
unlock: !1
},
Area5_garden: {
name: "エリア5: 上層部",
name_tag: "warp_area4_garden",
area_id: 5,
scene: "Map4-0Scene",
pos: cc.v2(-304, 340),
unlock: !1
},
Area5_town: {
name: "エリア5: タウン",
name_tag: "warp_area4_town",
area_id: 5,
scene: "Map4-0Scene",
pos: cc.v2(458, 218),
unlock: !1
}
}, s = cc.Class({
extends: i,
init: function(e) {
this._super(e, "WarpData");
this.portalData = a;
this.isLoadAds = !1;
},
load: function() {
for (var e in this.portalData) this.portalData[e].unlock = this.loadBoolean(e + ".unlock", !1);
},
reset: function() {
for (var e in this.portalData) {
this.portalData[e].unlock = !1;
this.saveBoolean(e + ".unlock", !1);
}
this.isLoadAds = !1;
},
newgame: function() {
this.reset();
},
GetData: function(e) {
return e in this.portalData ? this.portalData[e] : null;
},
GetName: function(e) {
return e in this.portalData ? this.game.getLocalizedStr(this.portalData[e].name_tag, this.portalData[e].name) : "";
},
GetSceneName: function(e) {
return e in this.portalData ? this.portalData[e].scene : "";
},
GetPos: function(e) {
if (e in this.portalData) {
var t = this.portalData[e].pos;
return cc.v2(t.x, t.y + -24);
}
return cc.v2(0, 0);
},
IsUnlock: function(e) {
return e in this.portalData && this.portalData[e].unlock;
},
DoUnlock: function(e) {
if (e in this.portalData && 0 == this.portalData[e].unlock) {
this.portalData[e].unlock = !0;
this.saveBoolean(e + ".unlock", !0);
}
},
GetAvailableList: function(e) {
var t = 1, i = this.GetData(e);
null !== i && (t = i.area_id);
var a = [];
this.isLoadAds = !1;
for (var s in this.portalData) if (s != e && 1 == this.portalData[s].unlock) {
var n = this.portalData[s].area_id != t;
!this.isLoadAds && n && (this.isLoadAds = !0);
a.push({
tag: s,
ad: n
});
}
return a;
},
IsLoadAds: function() {
return this.isLoadAds;
}
});
t.exports = s;
cc._RF.pop();
}, {
BaseModel: "BaseModel"
} ],
WarpPopup: [ function(e, t) {
"use strict";
cc._RF.push(t, "835c2E05y1LrZspL+QoDzjN", "WarpPopup");
var i = e("Popup"), a = e("Game"), s = e("WarpCell"), n = e("AppPlatform");
cc.Class({
extends: i,
properties: {
warpCell: cc.Prefab,
contents: cc.Node
},
ctor: function() {
this.flagWarp = !1;
this.warpDstTag = "";
this.isAds = !1;
this.flagUseOk = !1;
},
PressHelp: function() {
this.IsNotAvailableButton() || a.tutorial.ShowExplainPopup("warp");
},
hide_finish: function() {
if (1 == this.flagWarp) {
if (a.scene && a.scene.targetWarpPortal) {
this.isAds && a.scene.targetWarpPortal.ReserveAds();
a.scene.targetWarpPortal.WarpStart(this.warpDstTag);
}
this.flagWarp = !1;
this.warpDstTag = "";
}
this._super();
},
ShowWithMyTag: function(e) {
if (1 == this.refreshList(e)) {
!a.warpData.IsLoadAds() || a.purchase.IsRemoveAds() || a.flagGooglePCGames || n.LoadInterstitialAds("warp");
return this.Show();
}
return !1;
},
refreshList: function(e) {
var t = a.warpData.GetAvailableList(e);
if (null == t || 0 == t.length) {
a.scene.manager.ShowMessage(a.getLocalizedStr("warp_no_portal", "まだワープ先がありません。他のワープポータルも起動しよう！"));
return !1;
}
for (var i = !a.purchase.IsRemoveAds() && !a.flagGooglePCGames, n = t.length, o = 0; o < n; o++) {
var c = cc.instantiate(this.warpCell);
if (c) {
c.setPosition(cc.v2(-1.5, -24 * o));
this.contents.addChild(c);
var r = c.getComponent(s);
r && r.SetInfo(t[o].tag, t[o].ad && i, this);
}
}
this.contents.height = 24 * n;
return !0;
},
SetWarp: function(e, t) {
this.flagWarp = !0;
this.warpDstTag = e;
this.isAds = t;
this.Hide();
}
});
cc._RF.pop();
}, {
AppPlatform: "AppPlatform",
Game: "Game",
Popup: "Popup",
WarpCell: "WarpCell"
} ],
WarpPortal: [ function(e, t) {
"use strict";
cc._RF.push(t, "d33a9BX5RtAnLQ2QUctUT+C", "WarpPortal");
var i = e("Gimmick"), a = e("CommandType"), s = e("Game"), n = e("Direction"), o = e("AppPlatform");
cc.Class({
extends: i,
properties: {
checkMe: cc.Node,
portalTag: ""
},
onLoad: function() {
this._super();
this.warpDstTag = "";
this.flagOpenPortal = !1;
this.achievementTag = "";
s.achievement && (this.achievementTag = s.achievement.WarpPortalTagToAchievementTag(this.portalTag));
this.isAds = !1;
},
start: function() {
this._super();
var e = s.warpData.IsUnlock(this.portalTag);
this.flagOpenPortal = e;
this.change_view(e);
},
getAvailableCommand: function() {
return a.EVENT;
},
execCommand: function(e) {
if (e == a.EVENT) {
if (0 == this.flagOpenPortal) this.OpenPortal(); else if (s.flagGooglePCGames && 0 == s.purchase.IsRemoveAds()) s.scene.manager.ShowMessage(s.getLocalizedStr("warp_no_warppass")); else {
s.scene.targetWarpPortal = this;
s.scene.manager.ShowWarpPopup(this.portalTag);
}
s.achievement && s.achievement.Unlock(this.achievementTag);
}
},
change_view: function(e) {
this.checkMe.active = !e;
if (e) {
var t = this.node.getComponent(cc.Animation);
t && t.play("WarpPortal");
}
},
OpenPortal: function() {
this.open_portal();
var e = s.warpData.GetName(this.portalTag), t = s.getLocalizedStr("warp_unlock_all").replace("XXXX", e);
s.scene.manager.ShowAlert(t);
},
open_portal: function() {
s.warpData.DoUnlock(this.portalTag);
this.flagOpenPortal = !0;
this.change_view(!0);
s.scene.manager.SeLaunchPortal();
},
WarpStart: function(e) {
s.scene.targetWarpPortal = null;
this.warpDstTag = e;
s.scene.PauseInput();
s.scene.hero.WarpIn(this.node.position);
this.node.runAction(cc.sequence(cc.delayTime(.2), cc.callFunc(this.warp_se, this), cc.delayTime(.6), cc.callFunc(this.warp_transition, this)));
},
warp_se: function() {
s.scene.manager.SeWarp();
},
warp_transition: function() {
var e = s.warpData.GetSceneName(this.warpDstTag), t = s.warpData.GetPos(this.warpDstTag);
s.settingState(t, n.DOWN);
s.scene.fadeCover.TransitionFade(e, .8, new cc.Color(0, 0, 0));
!this.isAds || s.purchase.IsRemoveAds() || s.flagGooglePCGames || o.IsAvailableInterstitialAds("warp") && this.node.runAction(cc.sequence(cc.delayTime(.6), cc.callFunc(this.show_ads, this)));
},
show_ads: function() {
o.ShowInterstitialAds("warp");
},
ReserveAds: function() {
this.isAds = !0;
}
});
cc._RF.pop();
}, {
AppPlatform: "AppPlatform",
CommandType: "CommandType",
Direction: "Direction",
Game: "Game",
Gimmick: "Gimmick"
} ]
}, {}, [ "Animal", "AnimalExplorers", "BoardingPoint", "Bush", "ButtonNewgame", "CheckMe", "Chest", "ChestBonus", "ChestReward", "ChestTools", "Cloud", "Crop", "DropDebris", "DropItem", "AttackRect", "BossWinStair", "ChestDungeon", "ChestSkill", "Dungeon", "DungeonHole", "DungeonManager", "DungeonRoom", "Enemy", "FloorLock", "Furnace", "Monster", "MonsterCollision", "SoilLevel", "SwordDesk", "TrapClerk", "EndingSkip", "EnvironmentalBGM", "EnvironmentalSound", "Field", "FishingSpot", "Gate", "Gimmick", "Hero", "House", "Interior", "InteriorRate", "Kira0", "MapManager", "MiniBoxGirl", "MonorisObj", "MonorisPot", "Object", "Pet", "PioneeringRate", "Plants", "ArtifactPopup", "BackgamePopup", "BackupPopup", "BargainSignPopup", "ChestRewardPopup", "ConfigPopup", "DungeonResultPopup", "DungeonRewardPopup", "DungeonSoilPopup", "DungeonStairsPopup", "DungeonStartPopup", "EditNamePopup", "ExplainPopup", "ExplorerResultPopup", "ExplorerSelectTimePopup", "ExplorerSelectTypePopup", "FishingCmdPopup", "FishingPopup", "FishingRewardPopup", "FurnacePopup", "HousePopup", "ItemPopup", "LangCell", "LangPopup", "MakeKeyPopup", "MessagePopup", "NewgameConfirmPopup", "NotificationPopup", "Popup", "PopupCallback", "PopupPurchase", "PopupReward", "PrivateAreaPopup", "PurchaseBukkenPopup", "PurchaseDungeonPopup", "PurchasePopup2", "PurchaseToolPopup", "QuestCell", "QuestPopup", "RefreshPopup", "RequestPopup", "ResetConfirmPopup", "ResetPopup", "ResidentPopup", "ReviewPopup", "SharePopup", "ShopDirectPopup", "SkillPopup", "SkipFinalPopup", "StatusPopup", "SwordPopup", "ToolPopup", "TutorialMesPopup", "TutorialPopup", "UMPPopup", "UnlockPopup", "WarpCell", "WarpPopup", "PrivateArea", "PurchaseSign", "RandomDrop", "RemoteLock", "RemoteSwitch", "Resource", "ResourceManager", "ReviewSign", "Rock", "ShopDirect", "SignLang", "SoundSign", "StorageBox", "TrapArtifact", "TrapInAppReview", "TrapItem", "TrapJonathan", "TrapLight", "TrapPointer", "TrapPopup", "TrapQuest", "TrapResident", "TrapRoom", "TrapScene", "TrapSerif", "TrapSign", "TrapStoryCutin", "TrapVehicleDefault", "TrapVehicleRide", "Tree", "BackKey", "Balloon", "CoinLabel", "DungeonUI", "FadeCover", "GaugeBar", "HideBannerAds", "HpGauge", "ItemInfo", "LevelInfo", "LocalizeTag", "MiniInfo", "OptionMenu", "SafeArea", "SavedGamesChecker", "ShowBannerAds", "StoryCutin", "TabletSupport", "UI", "Unlock", "Vehicle", "Walker", "WarpPortal", "AdsState", "CheckType", "CommandType", "Direction", "DropItemType", "ExplainType", "ExplorerState", "FishSize", "ItemRank", "NotificationMode", "PurchaseContentType", "PurchaseResult", "PurchaseState", "PurchaseType", "RequestType", "ResourceState", "RoomType", "SavedGamesState", "SponserRank", "ToolLevel", "TutorialCommand", "Achievement", "Artifact", "BaseModel", "Bukken", "CloudSave", "Counter", "Crash", "Currency", "Explorer", "FishData", "FishingSpotData", "Game", "InAppReview", "Item", "Item2", "Jonathan", "Level", "Level2", "LevelEasy", "Monoris", "PioneerData", "PlayTime", "Purchase", "PurchaseManager", "Quest", "QuestMap0", "QuestMap1", "QuestMap2", "QuestMap3", "QuestMap4", "Resident", "SaveData", "SavedGames", "Sound", "Status", "Story", "Tutorial", "WarpData", "AppPlatform", "PlatformFacebook", "PlatformTikTok", "BaseCampScene", "BaseScene", "DungeonBossScene", "DungeonResultScene", "DungeonScene", "EndingScene", "HevenScene", "HouseScene", "IntroScene", "LaunchScene", "MakeKeyScene", "Map0Scene", "MyHouseScene", "OpenBoxScene", "SettingScene", "StoryScene", "TutorialScene" ]);
