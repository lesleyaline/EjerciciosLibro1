function randomElem(theArray: any[]): any{
    let randomIndex = Math.floor(Math.random()*theArray.length);
    return theArray[randomIndex];
}
let colors:string[]= ['violet', 'indigo', 'blue','green'];
let randomColor =randomElem(colors);