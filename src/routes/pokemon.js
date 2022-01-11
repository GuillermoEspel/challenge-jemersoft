const { Router } = require('express');
const router = Router();
const { getPokemons, getPokemon } = require('../controllers/pokemon');

/**
 * @swagger
 * components:
 *  schemas:
 *    Pokemon:
 *      type: object
 *      properties:
 *        id:
 *          type: string
 *          description: Auto generated ID
 *        name:
 *          type: string
 *          description: Name's Pokemon
 *        types:
 *          type: array
 *          description: Types of Pokemon
 *        weight:
 *          type: integer
 *          description: Weight's Pokemon
 *        abilities:
 *          type: array
 *          description: Abilities's Pokemon
 *        photo:
 *          type: string
 *          description: URL photo of Pokemon
 *      required:
 *        - id
 *        - name
 *  parameters:
 *    pokemonId:
 *      in: path
 *      name: id
 *      required: true
 *      schema:
 *        type: integer
 *      description: Pokemon ID
*/

/** 
 * @swagger
 * tags:
 *  name: Pokemons
 *  description: Pokemons endpoint
*/

/**
 * @swagger
 * /pokemon:
 *  get:
 *    summary: Return a Pokemon list.
 *    tags: [Pokemons]
 *    parameters:
 *      - in: query
 *        name: offset
 *        schema:
 *          type: integer
 *        description: Number of items to skip
 *      - in: query
 *        name: limit
 *        schema:
 *          type: integer
 *        description: Number of items to return
 *    responses:
 *      200:
 *        description: List of Pokemons
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                type: array
 *                items:
 *                  $ref: '#/components/schemas/Pokemon'
*/
router.get('/', async (req, res) => {
  getPokemons(req, res)
});

/**
 * @swagger
 * /pokemon/{id}:
 *  get:
 *    summary: Return a Pokemon by Id.
 *    tags: [Pokemons]
 *    parameters:
 *      - $ref: '#/components/parameters/pokemonId'
 *    responses:
 *      200:
 *        description: Pokemon by Id
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              items:
 *                type: object
 *                items:
 *                  $ref: '#/components/schemas/Pokemon'
*/
router.get('/:id', async (req, res) => {
  getPokemon(req, res)
});

module.exports = router;