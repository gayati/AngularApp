/******************************************************************************
 *  Purpose         :
 *  @description
 *  @file           :userFilter.js
 *  @overview       :
 *  @author         : Gayatri Kawade
 *  @version        : 1.0
 *  @since          : 16-04-2018
 ******************************************************************************/
// myApp.filter('selectFilter', function() {
//   return function(jsonData, manufacturerList, storageList, cameraList, osList) {
//     var tempArray = [];
//     var selectArray = [];
//     var loopingFunction = function(list, jsonData, key) {
//       for (var i = 0; i < jsonData.length; i++) {
//         var item = jsonData[i];
//         for (var j = 0; j < list.length; j++) {
//           var selectItem = list[j];
//           if (item.specs[key] == selectItem) {
//             selectArray.push(item);
//           }
//         }
//       }
//     }
//     if (jsonData != undefined) {
//       if (manufacturerList.length > 0 || storageList.length > 0 || cameraList.length > 0 || osList.length > 0) {
//         var key = "manufacturer";
//         loopingFunction(manufacturerList, jsonData, key);
//         if (selectArray.length > 0) {
//           tempArray = selectArray;
//           selectArray = [];
//         } else {
//           tempArray = jsonData;
//         }
//         if (storageList.length > 0) {
//           key = "storage";
//           loopingFunction(storageList, tempArray, key);
//           tempArray = selectArray;
//           selectArray = [];
//         }
//         if (cameraList.length > 0) {
//           key = "camera";
//           loopingFunction(cameraList, tempArray, key);
//           tempArray = selectArray;
//           selectArray = [];
//         }
//         if (osList.length > 0) {
//           key = "os";
//           loopingFunction(osList, tempArray, key);
//           tempArray = selectArray;
//           selectArray = [];
//         }
//       } else {
//         tempArray = jsonData;
//       }
//     }
//     return tempArray;
//
//
//   };
//
// });

    // 
