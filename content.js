var elements = document.getElementsByTagName('*');

function toTitleCase(str){
    return str.replace(new RegExp('\\w+', 'g'), function(thing){
        return thing.charAt(0).toUpperCase() + thing.substr(1).toLowerCase();
    });
}

var wordsToReplace = [
    ['up', 'down'],
    ['down', 'up'],
    ['left', 'right'],
    ['right', 'left'],
    ['north', 'south'],
    ['south', 'north'],
    ['east', 'west'],
    ['west', 'east'],
    ['before', 'after'],
    ['after', 'before'],
    ['always', 'never'],
    ['never', 'always'],
    ['start', 'end'],
    ['end', 'start'],
    ['started', 'ended'],
    ['ended', 'started'],
    ['starts', 'ends'],
    ['ends', 'starts'],
    ['most', 'least'],
    ['least', 'most'],
    ['more', 'less'],
    ['less', 'more'],
    ['good', 'bad'],
    ['bad', 'good'],
    ['better', 'worse'],
    ['worse', 'better'],
    ['best', 'worst'],
    ['worst', 'best']
    ['large|big', 'small'],
    ['small', 'big'],
    ['under', 'over'],
    ['over', 'under'],
    ['a new', 'an old'],
    ['an old', 'a new'],
    ['the new', 'the old'],
    ['the old', 'the new'],
    ['able', 'unable'],
    ['unable', 'able'],
    ['losing', 'winning'],
    ['winning', 'losing'],
    ['reduce', 'increase'],
    ['reduces', 'increases'],
    ['increases', 'reduces'],
    ['reduced', 'increased'],
    ['increased', 'reduced'],
    ['with', 'without'],
    ['without', 'with'],
    ['possible', 'impossible'],
    ['impossible', 'possible'],
    ['probable', 'improbable'],
    ['improbable', 'probable'],
    ['earliest', 'latest'],
    ['latest', 'earliest'],
    ['desert', 'dessert'],
    ['dessert', 'desert'],
    ['deserts', 'desserts'],
    ['desserts', 'deserts'],
    ['love','hate'],
    ['hate', 'love'],
    ['above', 'below'],
    ['below', 'above'],
    ['will', 'won\'t'],
    ['may be', 'may not be'],
    ['and', 'or'],
    ['success', 'failure'],
    ['failure', 'success'],
    ['upgrade', 'downgrade'],
    ['install', 'uninstall'],
    ['uninstall', 'install'],
    ['installs', 'uninstalls'],
    ['uninstalls', 'installs'],
    ['installed', 'uninstalled'],
    ['uninstalled', 'installed'],
    ['allow', 'deny'],
    ['deny', 'allow'],
    ['allows', 'denies'],
    ['denies', 'allows'],
    ['allowed', 'denied'],
    ['denied', 'allowed'],
    ['closed', 'open'],
    ['assigned', 'unassigned'],
    ['unassigned', 'assigned'],
    ['added', 'removed'],
    ['removed', 'added'],
    ['approved', 'rejected'],
    ['rejected', 'approved'],
    ['beautiful', 'ugly'],
    ['ugly', 'beautiful']
];

for(var i = 0; i < elements.length; i++){
    var element = elements[i];

    if(element.tagName !== "SCRIPT" && element.tagName !== "STYLE"){
        for(var j = 0; j < element.childNodes.length; j++){
            var node = element.childNodes[j];

            if(node.nodeType === 3){
                var text = node.nodeValue;
                var replacedText = text;
                var globalSearchString = '';
                for(var k = 0; k < wordsToReplace.length; k++){
                    var wordToReplace = wordsToReplace[k];
                    globalSearchString += wordToReplace[0] + '|';
                }
                replacedText = replacedText.replace(new RegExp('\\b(' + globalSearchString.substring(0, globalSearchString.length - 1) + ')\\b', 'gi'), 'WAIT$1WAIT');
                for(var k = 0; k < wordsToReplace.length; k++){
                    var wordToReplace = wordsToReplace[k];
                    replacedText = replacedText
                        .replace(new RegExp('WAIT' + wordToReplace[0] + 'WAIT', 'g'), wordToReplace[1])
                        .replace(new RegExp('WAIT' + toTitleCase(wordToReplace[0]) + 'WAIT', 'g'), toTitleCase(wordToReplace[1]));
                }
                if(replacedText !== text){
                    element.replaceChild(document.createTextNode(replacedText), node);
                }
            }
        }
    }
}