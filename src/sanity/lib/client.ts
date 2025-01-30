import { createClient } from 'next-sanity'

import { apiVersion} from '../env'

const sanityClient = createClient({
  projectId:"z2gphn7f",
  dataset:"production",
  apiVersion,
  useCdn: true,
  token:"sk3e8CFcZPizQLDnlfsjibLdoou5xMgsPubHlFfF4KgCgRksJDtJM4XQAkgj3kyZbu4OxKDDOm12GS6lGnRmkYgs05OnJApRuRHdM8JPMiwtglr72UpQ0C3QU2DnvqN2p4vWNBjVOKeIWBVO3GtS6t8L1A1jQU4c3kI1JHvHE37ogmP6618y"
})
export default sanityClient;
