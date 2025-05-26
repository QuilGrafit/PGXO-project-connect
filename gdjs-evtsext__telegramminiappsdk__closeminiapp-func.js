
if (typeof gdjs.evtsExt__TelegramMiniAppSDK__CloseMiniApp !== "undefined") {
  gdjs.evtsExt__TelegramMiniAppSDK__CloseMiniApp.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__TelegramMiniAppSDK__CloseMiniApp = {};


gdjs.evtsExt__TelegramMiniAppSDK__CloseMiniApp.userFunc0xb05538 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
window.Telegram.WebApp.close();
};
gdjs.evtsExt__TelegramMiniAppSDK__CloseMiniApp.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__TelegramMiniAppSDK__CloseMiniApp.userFunc0xb05538(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};gdjs.evtsExt__TelegramMiniAppSDK__CloseMiniApp.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__TelegramMiniAppSDK__IsRunningAsTelegramMiniApp.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__TelegramMiniAppSDK__CloseMiniApp.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__TelegramMiniAppSDK__CloseMiniApp.func = function(runtimeScene, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("TelegramMiniAppSDK"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("TelegramMiniAppSDK"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__TelegramMiniAppSDK__CloseMiniApp.eventsList1(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__TelegramMiniAppSDK__CloseMiniApp.registeredGdjsCallbacks = [];