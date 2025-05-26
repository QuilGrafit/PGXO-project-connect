
if (typeof gdjs.evtsExt__WortalSDK__ShowRewardedAd !== "undefined") {
  gdjs.evtsExt__WortalSDK__ShowRewardedAd.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__WortalSDK__ShowRewardedAd = {};


gdjs.evtsExt__WortalSDK__ShowRewardedAd.userFunc0x1084dd8 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const desc = eventsFunctionContext.getArgument("Description");
gdjs._wortalExtension.shouldRewardPlayer = false;

function resetAdState() {
    gdjs._wortalExtension.hasAdJustFinishedShowing = true;
    gdjs._wortalExtension.isShowingAd = false;
    eventsFunctionContext.task.resolve();
}

Wortal.ads.showRewarded(desc,
    () => {
        gdjs._wortalExtension.hasAdJustFinishedShowing = false;
        gdjs._wortalExtension.isShowingAd = true;
    },
    resetAdState,
    resetAdState,
    () => {
        gdjs._wortalExtension.shouldRewardPlayer = true;
        resetAdState();
    },
    () => {
        resetAdState();
        gdjs._wortalExtension.hasAdJustFinishedShowing = false;
    },
);
};
gdjs.evtsExt__WortalSDK__ShowRewardedAd.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__WortalSDK__ShowRewardedAd.userFunc0x1084dd8(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__WortalSDK__ShowRewardedAd.func = function(runtimeScene, Description, parentEventsFunctionContext) {
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
if (argName === "Description") return Description;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__WortalSDK__ShowRewardedAd.eventsList0(runtimeScene, eventsFunctionContext);


return eventsFunctionContext.task
}

gdjs.evtsExt__WortalSDK__ShowRewardedAd.registeredGdjsCallbacks = [];