myApp.filter('selectfilter', function() {

  return function(jsondata, manufacturerlist) {
      var selectArray = [];
    if (jsondata != undefined) {
      for (var i = 0; i < jsondata.length; i++) {
        var item = jsondata[i];
        for (var j = 0; j < manufacturerlist.length; j++) {
          var selectitem = manufacturerlist[j];
        //  console.log(item.specs.manufacturer+" "+selectitem);
          if (item.specs.manufacturer == selectitem) {
            selectArray.push(item);
          }
        }
      }
    }
   if(selectArray.length > 0){
    return selectArray;
  }else{
    return jsondata;
  }
  };

});
