export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61577d4e249c585197d37f3d',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-jpuq6moe',
                  apiId: 'eec7dc7a-d50d-4fb6-b93d-646a2d2f1f68'
                },
                {
                  buildHookId: '61577d4eb9cd90447467c169',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-7ek53ixk',
                  apiId: '7b194006-b9e3-4084-9bc3-a8e20d990b9f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Gants102/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-7ek53ixk.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
