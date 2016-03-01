// var fr=[[1],[2],[3],[4,5]];
var a = [1,5,7,8,13,15,16,23,26,35,32,41];
var b = [0,2,5,6,7,15,18,21,25,31,34,41,49,50];
var c = [5,10,15,20,25,30,35,40,45,50];

var fr = [a, b, c];
var route = {};
for(var i=0;i<fr.length;i++){
        com(i, i);
}
// print out all routes
var i=0;
for(var key in route){
    console.log("combination pair ", key, ++i);
}
// make a combination
// origin: first departure
// depart: transferring departure.
function com(origin, depart){
        
        if(depart > fr.length-1) { 
            return; 
        } 
        if(Array.isArray(fr[depart])){
            
            for(var i=0;i<fr[depart].length;i++){
                
                if(keyPair(origin, fr[depart][i])){
                    com(origin, fr[depart][i]);
                }
            }
        }else{
            if(keyPair(origin, fr[depart])){
                    com(origin, fr[depart]);
                }
        }
}
// if (depart, arrive) is already made.. or if depart == arrive .. then return false
// otherwise make new keyPair
function keyPair(depart, arrive){
    var key = "" + depart + arrive;
    
    if(depart == arrive || route[key] != undefined){
        return false;
    }else{
        route[key] = true;
        return true;
    }
}