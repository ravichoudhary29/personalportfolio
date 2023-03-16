import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import schemaTypes from 'all:part:@sanity/base/schema-type'

export default defineConfig({
  name: 'default',
  title: 'personalportfolio',
  projectId: '94ih7p01',
  dataset: 'production',
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
})
