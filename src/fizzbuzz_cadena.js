import fizzbuzz from "./fizzbuzz.js";
function fizzbuzz_cadena(num) {
    let cadena = "";
    let i = 0;
    for (i = 1; i <= num; i++)
    {
        if (cadena == "")
        {
            cadena =  fizzbuzz(i).toString();
        }
        else
        {
            cadena = cadena +"," + fizzbuzz(i).toString();
        }
    }
    return cadena;
}
export default fizzbuzz_cadena;