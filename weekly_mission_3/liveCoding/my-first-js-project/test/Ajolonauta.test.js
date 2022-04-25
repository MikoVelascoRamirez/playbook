const Ajolonauta = require("../app/Ajolonauta");

const woopa = new Ajolonauta("Woopy");

describe("Pruebas de unidad para Ajolonauta", () => {
    //Pruebas -> test

    test('1. Verificando que el ajolonauta no esté vacío', () => {
        
        //Código que servirá de prueba

        //Validamos la prueba
        expect(woopa.name).not.toBeUndefined();
    });

    test('2. Verificando que el nombre del ajolonauta sea una cadena', () => {
        
        //Código que servirá de prueba

        //Validamos la prueba
        expect(typeof woopa.name).toBe("string");
    });

    test('3. Verificando que el nombre del ajolonauta sea "Woppy"', () => {
        
        //Código que servirá de prueba        

        //Validamos la prueba
        expect(woopa.name).toBe("Woopy");
    });
});