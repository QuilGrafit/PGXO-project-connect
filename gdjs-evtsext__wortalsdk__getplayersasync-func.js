
if (typeof gdjs.evtsExt__WortalSDK__GetPlayersAsync !== "undefined") {
  gdjs.evtsExt__WortalSDK__GetPlayersAsync.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__WortalSDK__GetPlayersAsync = {};


gdjs.evtsExt__WortalSDK__GetPlayersAsync.userFunc0x1281898 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const playersVar = eventsFunctionContext.getArgument("ConnectedPlayersVariable");
Wortal.context.getPlayersAsync().then((players) => {
    if(players && players.length) {
        gdjs._wortalExtension.setResultToVarableCallback(players, playersVar);       
    }
})
.catch(error => {
    console.error("Error while getting connected players:", error);
})
.finally(() => eventsFunctionContext.task.resolve());
};
gdjs.evtsExt__WortalSDK__GetPlayersAsync.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__WortalSDK__GetPlayersAsync.userFunc0x1281898(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__WortalSDK__GetPlayersAsync.func = function(runtimeScene, ConnectedPlayersVariable, parentEventsFunctionContext) {
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
if (argName === "ConnectedPlayersVariable") return ConnectedPlayersVariable;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__WortalSDK__GetPlayersAsync.eventsList0(runtimeScene, eventsFunctionContext);


return eventsFunctionContext.task
}

gdjs.evtsExt__WortalSDK__GetPlayersAsync.registeredGdjsCallbacks = [];