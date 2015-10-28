var parser = function(string, map) {
  for (var item in map) {
    for(var key in map[item]) {
      string = string.replace(new RegExp('\\{{2}\\s' + item + '\\.'+ key +'\\s\\}{2}', 'g'), map[item][key]);
    }
    string = string.replace(new RegExp('\\{{2}\\s' + item + '\\.[a-zA-Z1-9-_]+\\s\\}{2}', 'g'), '<nothing>');
  }
  return string;
};

module.exports = parser;