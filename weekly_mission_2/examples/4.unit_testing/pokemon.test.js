import Pokemon from './pokemon.js'

test("1) Creating a new Pokemon", () => {
    const pikachu = new Pokemon('Pikachu')
    expect(pikachu.name).toBe('Pikachu');
});