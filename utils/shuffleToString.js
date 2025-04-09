export default function shuffleToString(unshuffledArray) {
    var currentIndex = unshuffledArray.length;

    //While there remain elements to shuffle...
    while (currentIndex !=0) {
        //Pick a remaining element...
        var randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        //And swap it with the current element.
        [unshuffledArray[currentIndex], unshuffledArray[randomIndex]] = [unshuffledArray[randomIndex], unshuffledArray[currentIndex]];
    }
    //convert the array to a string and return it
    var shuffledString = unshuffledArray.join("");

    return shuffledString;
}