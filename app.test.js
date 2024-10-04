const suma = require('../PIC/src/app');  

test('debería devolver 4 al sumar 2 + 2', () => {
    expect(suma(2, 2)).toBe(4);
});
