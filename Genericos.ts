function randomStrElem(theArray: string[]): string{
    let randomIndex = Math.floor(Math.random()*theArray.length);
    return theArray[randomIndex];
}
let colors:string[]= ['violet', 'indigo', 'blue','green'];
let randomColor: string =randomStrElem(colors);