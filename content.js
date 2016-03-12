var elements = document.getElementsByTagName('*');

function toTitleCase(str){
    return str.replace(new RegExp('\\w+', 'g'), function(thing){
        return thing.charAt(0).toUpperCase() + thing.substr(1).toLowerCase();
    });
}

var wordsToReplace = [
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
    ['worst', 'best'],
    ['large|big', 'small'],
    ['larger|bigger', 'smaller'],
    ['largest|biggest', 'smallest'],
    ['small', 'big'],
    ['smaller', 'bigger'],
    ['smallest', 'biggest'],
    ['under', 'over'],
    ['over', 'under'],
    ['new', 'old'],
    ['old', 'new'],
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
    ['love', 'hate'],
    ['hate', 'love'],
    ['above', 'below'],
    ['below', 'above'],
    ['will', 'won\'t'],
    ['may be', 'may not be'],
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
    ['beautiful|pretty', 'ugly'],
    ['ugly', 'beautiful'],
    ['download', 'upload'],
    ['upload', 'download'],
    ['future', 'past'],
    ['enable', 'disable'],
    ['disable', 'enable'],
    ['year', 'decade'],
    ['years', 'decades'],
    ['month', 'year'],
    ['months', 'years'],
    ['week', 'month'],
    ['weeks', 'months'],
    ['day', 'week'],
    ['days', 'weeks'],
    ['everything', 'nothing'],
    ['nothing', 'everything'],
    ['import', 'export'],
    ['export', 'import'],
    ['imports', 'exports'],
    ['exports', 'imports'],
    ['imported', 'exported'],
    ['exported', 'imported'],
    ['existing', 'new'],
    ['related', 'unrelated'],
    ['temporary', 'permanent'],
    ['permanent', 'temporary'],
    ['push', 'pull'],
    ['pull', 'push'],
    ['deep', 'shallow'],
    ['shallow', 'deep'],
    ['happy', 'sad'],
    ['sad|angry', 'happy'],
    [' not ', ' '],
    ['great', 'mediocre'],
    ['secure', 'insecure'],
    ['insecure', 'secure'],
    ['securely', 'insecurely'],
    ['insecurely', 'securely'],
    ['security', 'insecurity'],
    ['insecurity', 'security'],
    ['ascending', 'descending'],
    ['descending', 'ascending'],
    ['ascended', 'descended'],
    ['descended', 'ascended'],
    ['ascend', 'descend'],
    ['descend', 'ascend'],
    ['add', 'remove'],
    ['remove', 'add'],
    ['added', 'removed'],
    ['removed', 'added'],
    ['addition', 'removal'],
    ['removal', 'addition'],
    ['wins', 'loses'],
    ['won', 'lost'],
    ['cannot', 'can'],
    ['encrypt', 'decrypt'],
    ['decrypt', 'encrypt'],
    ['encrypted', 'decrypted'],
    ['decrypted', 'encrypted'],
    ['encryption', 'decryption'],
    ['decryption', 'encryption'],
    ['correct', 'incorrect'],
    ['incorrect', 'correct'],
    ['frequent', 'infrequent'],
    ['infrequent', 'frequent'],
    ['correctly', 'incorrectly'],
    ['incorrectly', 'correctly'],
    ['frequently', 'infrequently'],
    ['infrequently', 'frequently'],
    ['strong', 'weak'],
    ['weak', 'strong'],
    ['stronger', 'weaker'],
    ['weaker', 'stronger'],
    ['strongest', 'weakest'],
    ['weakest', 'strongest'],
    ['strengthen', 'weaken'],
    ['weaken', 'strengthen'],
    ['true', 'false'],
    ['false', 'true'],
    ['truth', 'lie'],
    ['slow', 'fast'],
    ['fast', 'slow'],
    ['slower', 'faster'],
    ['faster', 'slower'],
    ['slowest', 'fastest'],
    ['fastest', 'slowest']
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
                    globalSearchString += wordToReplace[0] + '|' + toTitleCase(wordToReplace[0]) + '|' + wordToReplace[0].toUpperCase() + '|';
                }
                replacedText = replacedText.replace(new RegExp('\\b(' + globalSearchString.substring(0, globalSearchString.length - 1) + ')\\b', 'g'), 'WAIT$1WAIT');
                for(var k = 0; k < wordsToReplace.length; k++){
                    var wordToReplace = wordsToReplace[k];
                    replacedText = replacedText
                        .replace(new RegExp('WAIT(' + wordToReplace[0] + ')WAIT', 'g'), wordToReplace[1])
                        .replace(new RegExp('WAIT(' + toTitleCase(wordToReplace[0]) + ')WAIT', 'g'), toTitleCase(wordToReplace[1]))
                        .replace(new RegExp('WAIT(' + wordToReplace[0].toUpperCase() + ')WAIT', 'g'), wordToReplace[1].toUpperCase());
                }
                if(replacedText !== text){
                    element.replaceChild(document.createTextNode(replacedText), node);
                }
            }
        }
    }
}