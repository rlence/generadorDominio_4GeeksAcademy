var pronoun = ['the','our'];
var adj = ['great', 'big' ];
var noun = ['jogger','racoon'];

for(let idxAdj = 0; idxAdj < adj.length; idxAdj++){
    
    for(let idxPronoun = 0; idxPronoun < adj.length; idxPronoun++){

        for(let idxNoun = 0; idxNoun < noun.length; idxNoun++){
            console.log(pronoun[idxPronoun] + adj[idxAdj] + noun[idxNoun] +'.com' )
        }
    }
}