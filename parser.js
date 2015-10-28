var parser = function(string, map) {
  for (var item in map) {
    for(var key in map[item]) {
      string = string.replace(new RegExp('\\{{2}\\s' + item + '\\.'+ key +'\\s\\}{2}', 'g'), map[item][key]);
    }
    string = string.replace(new RegExp('\\{{2}\\s' + item + '\\.[a-zA-Z0-9-_]+\\s\\}{2}', 'g'), '<nothing>');
  }
  return string.replace(/\{{2}\s[0-9A-Fa-f]{8}\.[a-zA-Z0-9-_]+\s\}{2}/g, '<nothing>');;
};

module.exports = parser;