export default {
    name: 'profile',
    title: 'Profile',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: "User's name",
            type: 'string'
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
            name: 'bio',
            title: 'Bio',
            type: 'array',
            of: [
                {
                    title: 'Block',
                    type: 'block',
                    styles: [{title: 'Normal', value: 'normal'}],
                    lists: []
                }
            ]
        }
    ]
}