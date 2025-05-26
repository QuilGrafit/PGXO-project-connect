
if (typeof gdjs.evtsExt__WortalSDK__PostStatsAsync !== "undefined") {
  gdjs.evtsExt__WortalSDK__PostStatsAsync.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__WortalSDK__PostStatsAsync = {};


gdjs.evtsExt__WortalSDK__PostStatsAsync.userFunc0x1538228 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const level = eventsFunctionContext.getArgument("Level");
const value = eventsFunctionContext.getArgument("Value");
const payloadVar = eventsFunctionContext.getArgument("Payload");
const payloadAsObj = gdjs._wortalExtension.gdevelopToJsObject(payloadVar);

const postStats = payload => {
    Wortal.stats.postStatsAsync(level, value, payload)
        .then(() => {
            console.log("Stats posted successfully");
        })
        .catch(() => {
            console.warn("Failed to post stats");
        })
        .finally(() => eventsFunctionContext.task.resolve());
};

const payload = gdjs._wortalExtension.isObjectEmpty(payloadAsObj) ? undefined : payloadAsObj;
postStats(payload);
};
gdjs.evtsExt__WortalSDK__PostStatsAsync.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__WortalSDK__PostStatsAsync.userFunc0x1538228(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__WortalSDK__PostStatsAsync.func = function(runtimeScene, Level, Value, Payload, parentEventsFunctionContext) {
var eventsFunctionContext = {
  task: new gdjs.ManuallyResolvableTask(),
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
if (argName === "Value") return Value;
if (argName === "Payload") return Payload;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__WortalSDK__PostStatsAsync.eventsList0(runtimeScene, eventsFunctionContext);


return eventsFunctionContext.task
}

gdjs.evtsExt__WortalSDK__PostStatsAsync.registeredGdjsCallbacks = [];