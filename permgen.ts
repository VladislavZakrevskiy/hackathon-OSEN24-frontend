import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
    overwrite: true,
    schema: 'schema.graphql',
    documents: ['src/graphql/**/*.graphql'],
    generates: {
        './requests-for-merge.json': {
            plugins: ['perm-plugin.js']
        }
    }
}

export default config