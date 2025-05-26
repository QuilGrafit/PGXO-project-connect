
if (typeof gdjs.evtsExt__WortalSDK__LogLevelEnd !== "undefined") {
  gdjs.evtsExt__WortalSDK__LogLevelEnd.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__WortalSDK__LogLevelEnd = {};


gdjs.evtsExt__WortalSDK__LogLevelEnd.userFunc0x150b3c8 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const level = eventsFunctionContext.getArgument("Level");
const score = eventsFunctionContext.getArgument("Score");
const wasCompleted = eventsFunctionContext.getArgument("WasCompleted");
const wasCompletedBool = (wasCompleted == "completed");
Wortal.analytics.logLevelEnd(level, score, wasCompletedBool);
};
gdjs.evtsExt__WortalSDK__LogLevelEnd.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__WortalSDK__LogLevelEnd.userFunc0x150b3c8(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__WortalSDK__LogLevelEnd.func = function(runtimeScene, Level, Score, WasCompleted, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("WortalSDK"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("WortalSDK"),
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
if (argName === "Level") return Level;
if (argName === "Score") return Score;
if (argName === "WasCompleted") return WasCompleted;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__WortalSDK__LogLevelEnd.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__WortalSDK__LogLevelEnd.registeredGdjsCallbacks = [];