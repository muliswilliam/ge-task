import { CodegenConfig } from '@graphql-codegen/cli'
 
const config: CodegenConfig = {
  schema: process.env.NEXT_PUBLIC_GRAPHQL_URL,
  ignoreNoDocuments: true, // for better experience with the watcher
  documents: ['./**/*.tsx', './**/*.ts'],
  generates: {
    './gql/': {
      preset: 'client'
    }
  }
}
 
export default config