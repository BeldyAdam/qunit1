function szamolas(a, b){
    if (a === undefined || b === undefined || arguments.length > 2)
    return "Két paraméter megadása szükséges!";
    if (isNaN(a) || isNaN (b))
        return "Szám legyen mindkét paraméter!";
    return Number(a) + Number(b);
}