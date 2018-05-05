/******************************************************************************
 *  Purpose         :This is for getting unique values from json file.
 *  @description
 *  @file           :uniqueFilter.js
 *  @author         : Gayatri Kawade
 *  @version        : 1.0
 *  @since          : 16-04-2018
 ******************************************************************************/
 /*
  * @description unique filter to get the unique values from json file.
  * @param {array} filteredArray to store the unique elements.
  * @var {boolean} flag Boolean default false.
  */
myApp.filter('unique', function() {
  return function(jsonData, key) {
    var filteredArray = [];
    if (jsonData != undefined) {
      for (var i = 0; i < jsonData.length; i++) {
        var item = jsonData[i];
        var flag = false;
        if (i == 0) {
          filteredArray.push(item);
        } else {
          for (var j = 0; j < filteredArray.length; j++) {
            var filteredItem = filteredArray[j];
            if (item.specs[key] == filteredItem.specs[key]) {
              flag = true;
            }
          }
          if (!flag) {
            filteredArray.push(item);
          }
        }
      }
    }
    return filteredArray;
  };
});
