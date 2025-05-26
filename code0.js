gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code = {};
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.localVariables = [];
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDUserNameObjects1= [];
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDUserNameObjects2= [];
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDTGObjects1= [];
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDTGObjects2= [];


gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.mapOfGDgdjs_9546_95951041_95951077_95951079_95951099_95951084_95951103_95951085_95951085_95951072_95951103_959532_95951089_95951094_95951077_95951085_95951072Code_9546GDTGObjects1Objects = Hashtable.newFrom({"TG": gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDTGObjects1});
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtsExt__TelegramMiniAppSDK__InitializeAndGetUserData.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("TG"), gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDTGObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.mapOfGDgdjs_9546_95951041_95951077_95951079_95951099_95951084_95951103_95951085_95951085_95951072_95951103_959532_95951089_95951094_95951077_95951085_95951072Code_9546GDTGObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Right");
}
if (isConditionTrue_0) {
{gdjs.evtsExt__TelegramMiniAppSDK__CloseMiniApp.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("UserName"), gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDUserNameObjects1);
{for(var i = 0, len = gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDUserNameObjects1.length ;i < len;++i) {
    gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDUserNameObjects1[i].setBBText("User: " + runtimeScene.getGame().getVariables().getFromIndex(1).getAsString() + gdjs.evtTools.string.newLine() + "UserID: " + runtimeScene.getGame().getVariables().getFromIndex(0).getAsString());
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.anyKeyReleased(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtsExt__TelegramMiniAppSDK__InitializeAndGetUserData.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};

gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDUserNameObjects1.length = 0;
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDUserNameObjects2.length = 0;
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDTGObjects1.length = 0;
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDTGObjects2.length = 0;

gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.eventsList0(runtimeScene);
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDUserNameObjects1.length = 0;
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDUserNameObjects2.length = 0;
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDTGObjects1.length = 0;
gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code.GDTGObjects2.length = 0;


return;

}

gdjs['_1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code'] = gdjs._1041_1077_1079_1099_1084_1103_1085_1085_1072_1103_32_1089_1094_1077_1085_1072Code;
