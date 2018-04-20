myApp.filter('unique', function() {
  return function(datas, key) {
    var filteredArray = [];
    if (datas != undefined) {
      for (var i = 0; i < datas.length; i++) {
        var item = datas[i];
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
