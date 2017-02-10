
export const greeting = 'Hello world';



export const characterAt = greeting.charAt(4);



export const greetingArray = greeting.split("");



export const begins = (str, char) => { 
    return greetingArray.characterAt(0) === char.toLowerCase();
};



export const beginInsensitive = (str, char) => { 
    return greetingArray.characterAt(0) === char.toLowerCase();
};