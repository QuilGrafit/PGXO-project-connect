
if (typeof gdjs.evtsExt__WortalSDK__PostTournamentScoreAsync !== "undefined") {
  gdjs.evtsExt__WortalSDK__PostTournamentScoreAsync.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__WortalSDK__PostTournamentScoreAsync = {};


gdjs.evtsExt__WortalSDK__PostTournamentScoreAsync.userFunc0xd156e0 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const score = eventsFunctionContext.getArgument("Score");
Wortal.tournament.postScoreAsync(score)
.then(() => {
    console.error("Score posted");
})
.catch(error => {
    console.error("Error while posting score:", error);
})
.finally(() => eventsFunctionContext.task.resolve());
};
gdjs.evtsExt__WortalSDK__PostTournamentScoreAsync.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__WortalSDK__PostTournamentScoreAsync.userFunc0xd156e0(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__WortalSDK__PostTournamentScoreAsync.func = function(runtimeScene, Score, parentEventsFunctionContext) {
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
if (argName === "Score") return Score;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__WortalSDK__PostTournamentScoreAsync.eventsList0(runtimeScene, eventsFunctionContext);


return eventsFunctionContext.task
}

gdjs.evtsExt__WortalSDK__PostTournamentScoreAsync.registeredGdjsCallbacks = [];