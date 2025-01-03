import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId} from '../env'

const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  token:"sk7kd1QVQPX5EwHOlmYBTxk97Ftd5F30zCH7TIog6sQr4PWm0pQ78IgiDWqU5TpHvETl9BTtQXnesrZW33M6q7aamZISIRuJDrlapPKApLhPtWV8w6DbkAR7amNTe2XrWUAFCCMcfl5n0pllIyhbAciRrNvptUz20QZvdGxykqHy642FWTFl" // Set to false if statically generating pages, using ISR or tag-based revalidation
})
export default sanityClient;