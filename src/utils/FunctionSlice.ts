/**
 * 
 * @param {string} txt
 * @param {number}  max
 * @returns 
 */
export function textslicer(txt:string,max:number =50){
if (txt.length>=max )return `${txt.slice(0,50)}...`
    return txt
}