export default {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Project',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 96
            }
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options:
            {
                hotspot: true
            }
        },
        {
            name: 'profile',
            title: 'Profile',
            type: 'reference',
            to: {type: 'profile'}
        },
        {
            name: 'language',
            title: 'Language',
            type: 'string'
        },
        {
            name: 'more_info',
            title: 'More Info',
            type: 'text'
        },
        
        {
            name: 'duration',
            title: 'Duration',
            type: 'string'
        }
    ]
}
