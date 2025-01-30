import { type SchemaTypeDefinition } from 'sanity'
import product from '../product'
import user from '../user'
import cart from '../cart'
import wish from '../wish'
import orders from '../orders'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product,user,cart,wish,orders],
}
