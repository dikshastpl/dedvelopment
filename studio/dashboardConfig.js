export default {
  widgets: [
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
                  buildHookId: '60af5a51048f1d00cd9b9829',
                  title: 'Sanity Studio',
                  name: 'dedvelopment-studio',
                  apiId: '6d34876e-b153-4f07-86df-4d48419e3f10'
                },
                {
                  buildHookId: '60af5a51e27ddf00a015b98f',
                  title: 'Blog Website',
                  name: 'dedvelopment',
                  apiId: '763b4f17-e7b6-423a-b5e2-7cc9331614c8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dikshastpl/dedvelopment',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://dedvelopment.netlify.app', category: 'apps'}
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
