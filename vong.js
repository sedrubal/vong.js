var worde = {
  'deines': 'deim',
  'deiner': 'deim',
  'deine': 'deim',
  'dein': 'deim',
  'seines': 'vong s1',
  'seiner': 'vong s1',
  'seine': 'vong s1',
  'eines': 'vong 1',
  'einem': '1',
  'einen': '1',
  'eine': '1',
  'eins': '1',
  'ein': '1',
  '\<von\>': 'vong',
  'leben': 'life',
  'bin': 'bim',
  'zum': 'vong',
  'mm': 'm',
  'nn': 'n',
  'll': 'l',  // Knal
  'tt': 't',  // kaput
  'el ': 'l ',  // schnel
  'aut ': 'aud ',  // jemand haud
  'ist': 'isd',
  'nicht': 'nit',
  'geht': 'walkt',
  'läuft': 'walkt',
  'rennt': 'walkt',
  'zeit': 'time',
  'sprache': 'language',
  'spast': 'spasd',
  'spastmatiker': 'spasd',
  'spastmatisch veranlagt': 'spasd',
  'nett': 'nice',
  'toll': 'nice',
  'schön': 'nice',
  'freundlich': 'nice',
  'nicee': 'nice',  // workaround
  '( )?app': ' äpp',  // Whats äpp
  'dich': 'di',
  'hab': 'han',
  'en ': 'em ', // habem
  'ev': 'ew',  // kewin
  'ie': 'i',
  'haha': 'lol',
  ':)': 'lol',
  ':D': 'lol',
}

/* Text Knoten zurueckbekomem */
function getAllTextNodes(){
  var result = [];

  (function scanSubTree(node){
    if(node.childNodes.length) 
      for(var i = 0; i < node.childNodes.length; i++) 
        scanSubTree(node.childNodes[i]);
    else if(node.nodeType == Node.TEXT_NODE) 
      result.push(node);
  })(document);

  return result;
}

/* escape regexp */
function quote(str){
  return (str+'').replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
}

/* dem erstem Buchstaben gros machem */
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/* vong */
function vongify() {
  getAllTextNodes().forEach(function(node){
    for (var word in worde) {
      if (worde.hasOwnProperty(word)) {
        var vongword = worde[word];
        node.nodeValue = node.nodeValue.replace(new RegExp(quote(word), 'g'), vongword);
        node.nodeValue = node.nodeValue.replace(new RegExp(capitalize(quote(word)), 'g'), capitalize(vongword));
      }
    }
  });
}

vongify();
