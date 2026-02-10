import sharp from 'sharp'
import { migrations } from './migrations'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { buildConfig } from 'payload'

export default buildConfig({
    // If you'd like to use Rich Text, pass your editor here
    editor: lexicalEditor(),
    // Define and configure your collections in this array
    collections: [
        {
            slug: 'blog',
            fields: [
                {
                    name: 'title',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'slug',
                    unique: true,
                    type: 'text',
                    required: true,
                },
                {
                    name: 'status',
                    type: 'select',
                    options: [
                        {
                            value: 'draft',
                            label: 'Draft',
                        },
                        {
                            value: 'published',
                            label: 'Published',
                        },
                        {
                            value: 'hidden',
                            label: 'Hidden',
                        },
                    ],
                    required: true,
                },
                {
                    name: 'content',
                    type: 'richText',
                    required: true,
                },
                {
                    name: 'thumbnail',
                    type: 'upload',
                    required: true,
                    relationTo: 'media',
                },
                {
                    name: 'shortDescription',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'minutesToRead',
                    type: 'number',
                    label: 'Total minutes to read',
                },
                {
                    name: 'featured',
                    type: 'checkbox',
                    label: 'Featured on home page and top of blog site',
                },
            ],
        },
        {
            slug: 'media',
            access: {
                read: () => true,
            },
            upload: {
                staticDir: 'media',
                imageSizes: [
                    {
                        name: 'thumbnail',
                        width: 400,
                        height: 300,
                        position: 'centre',
                    },
                    {
                        name: 'card',
                        width: 768,
                        height: 1024,
                        position: 'centre',
                    },
                    {
                        name: 'tablet',
                        width: 1024,
                        // By specifying `undefined` or leaving a height undefined,
                        // the image will be sized to a certain width,
                        // but it will retain its original aspect ratio
                        // and calculate a height automatically.
                        height: undefined,
                        position: 'centre',
                    },
                ],
                adminThumbnail: 'thumbnail',
                mimeTypes: ['image/*'],
            },
            fields: [
                {
                    name: 'alt',
                    type: 'text',
                },
            ],
        },
    ],

    routes: {
        admin: '/cms',
        api: '/api/cms',
    },

    // Your Payload secret - should be a complex and secure string, unguessable
    secret: process.env.PAYLOAD_SECRET || '',
    // Whichever Database Adapter you're using should go here
    // Mongoose is shown as an example, but you can also use Postgres
    db: postgresAdapter({
        pool: {
            connectionString: process.env.DATABASE_URL || '',
        },
        prodMigrations: migrations,
    }),
    // If you want to resize images, crop, set focal point, etc.
    // make sure to install it and pass it to the config.
    // This is optional - if you don't need to do these things,
    // you don't need it!
    sharp,
})
