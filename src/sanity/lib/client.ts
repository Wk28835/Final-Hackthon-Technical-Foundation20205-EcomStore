import { createClient } from 'next-sanity'

import { apiVersion} from '../env'

const sanityClient = createClient({
  projectId:"z2gphn7f",
  dataset:"production",
  apiVersion,
  useCdn: true,
  token:"skj2Js3hygUf7H6s3sgT34zrxoewdnr9B5uW62SiS3pugONyC1u09CrZilXEmzGpGE0dX17NBhdF3nWuVn55FREQlUYEt653qvMH5KlEgysTtAPCdF53npikHfRo9JreA2DUtVH5zjtxftqnTtldvcbUu3SaYAzdIWuC1ZqnjjAt2QSSR5jt"
})
export default sanityClient;
