import { createClient } from 'contentful';
import { Entry } from 'contentful';

import { INavLink,
        INavcategory, 
        INavigation, 
        IHomePage, 
        IModuleTwo, 
        IWeeklySelectionModule, 
        IWhatWeDoPage, 
        IModuleFive,
        ICaseStudyPage, 
        IModuleThree,
        IThoughtsOnDesignPage,
        IArticlePage} from '../Types/contentful';

const contentful = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || '',
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || '',
})



const enrichModuleTwo = async (entry: Entry<IHomePage>) => {
  const moduleTwo = entry.fields.moduleTwo as any;

  if (moduleTwo?.sys?.contentType?.sys?.id === 'moduleTwo') {
    if (moduleTwo.fields?.weeklySelectionModules) {
      const idsToGet = moduleTwo.fields.weeklySelectionModules.map(
        (weeklyModule: any) => weeklyModule.sys.id
      );

      const weeklyModulesInfo = await contentful.getEntries<IWeeklySelectionModule>({
        content_type: 'weeklySelectionModule',
        'sys.id[in]': idsToGet.join(',')
      });

      weeklyModulesInfo.items.sort((itemA, itemB) =>
        idsToGet.indexOf(itemA.sys.id) < idsToGet.indexOf(itemB.sys.id) ? -1 : 1
      );

      moduleTwo.fields.weeklySelectionModules = weeklyModulesInfo.items;
    }
  }
};

// const enrichNavCategories = async (entry: Entry<INavigation>) => {
//   await Promise.all(
//     (entry.fields.navCategories as any).map(async (cat: any, index: any) => {

//       if (cat.sys.contentType.sys.id == 'navCategory') {
//         if ((cat.fields as any).links){

//           const idsToGet = (cat.fields as any).links.map((link: any) => link.sys.id)

//           const linksInfo = await contentful.getEntries<INavLink>({
//             content_type: 'navLink',
//             'sys.id[in]': idsToGet.join(',')
//           });

//           linksInfo.items.sort((itemA, itemB) =>
//             idsToGet.indexOf(itemA.sys.id) < idsToGet.indexOf(itemB.sys.id) ? -1 : 1
//           );
          
//           ((entry.fields.navCategories[index] as any).fields).links = linksInfo.items
//         }
//       }
//     })
//   )
// }


// export const getNavigationData = async ():Promise<Entry<INavigation>> => {
//   const entries = await contentful.getEntries<INavigation>({
//     content_type: 'navigation'
//   } as any)

//   await enrichNavCategories(entries.items[0] as Entry<INavigation>)
//   return entries.items[0]
// }

export const getNavigationData = async () => {
  return(
    {
      "metadata": {
          "tags": [],
          "concepts": []
      },
      "sys": {
          "space": {
              "sys": {
                  "type": "Link",
                  "linkType": "Space",
                  "id": "49dkaadk94op"
              }
          },
          "id": "5UxjUmwlosalUaINUBmi4Y",
          "type": "Entry",
          "createdAt": "2025-03-06T16:16:19.789Z",
          "updatedAt": "2025-03-06T16:16:19.789Z",
          "environment": {
              "sys": {
                  "id": "master",
                  "type": "Link",
                  "linkType": "Environment"
              }
          },
          "publishedVersion": 6,
          "revision": 1,
          "contentType": {
              "sys": {
                  "type": "Link",
                  "linkType": "ContentType",
                  "id": "navigation"
              }
          },
          "locale": "en-US"
      },
      "fields": {
          "name": "Main nav",
          "logo": {
              "metadata": {
                  "tags": [],
                  "concepts": []
              },
              "sys": {
                  "space": {
                      "sys": {
                          "type": "Link",
                          "linkType": "Space",
                          "id": "49dkaadk94op"
                      }
                  },
                  "id": "3ZmpymfNxbN80C7V5rmgXz",
                  "type": "Asset",
                  "createdAt": "2025-03-06T16:16:15.926Z",
                  "updatedAt": "2025-03-06T16:16:15.926Z",
                  "environment": {
                      "sys": {
                          "id": "master",
                          "type": "Link",
                          "linkType": "Environment"
                      }
                  },
                  "publishedVersion": 5,
                  "revision": 1,
                  "locale": "en-US"
              },
              "fields": {
                  "title": "Logo Provisoire",
                  "description": "",
                  "file": {
                      "url": "//images.ctfassets.net/49dkaadk94op/3ZmpymfNxbN80C7V5rmgXz/4c41a9be528090a29873ef62c9901464/Capture_d_écran_2025-03-06_à_17.15.52.png",
                      "details": {
                          "size": 12135,
                          "image": {
                              "width": 472,
                              "height": 230
                          }
                      },
                      "fileName": "Capture d’écran 2025-03-06 à 17.15.52.png",
                      "contentType": "image/png"
                  }
              }
          },
          "navCategories": [
              {
                  "metadata": {
                      "tags": [],
                      "concepts": []
                  },
                  "sys": {
                      "space": {
                          "sys": {
                              "type": "Link",
                              "linkType": "Space",
                              "id": "49dkaadk94op"
                          }
                      },
                      "id": "93C0nHV8aTcvq9uXhzD9P",
                      "type": "Entry",
                      "createdAt": "2025-03-06T16:03:51.235Z",
                      "updatedAt": "2025-03-26T16:54:20.503Z",
                      "environment": {
                          "sys": {
                              "id": "master",
                              "type": "Link",
                              "linkType": "Environment"
                          }
                      },
                      "publishedVersion": 7,
                      "revision": 2,
                      "contentType": {
                          "sys": {
                              "type": "Link",
                              "linkType": "ContentType",
                              "id": "navCategory"
                          }
                      },
                      "locale": "en-US"
                  },
                  "fields": {
                      "name": "Webzine",
                      "numberInMenu": "01",
                      "links": [
                          {
                              "metadata": {
                                  "tags": [],
                                  "concepts": []
                              },
                              "sys": {
                                  "space": {
                                      "sys": {
                                          "type": "Link",
                                          "linkType": "Space",
                                          "id": "49dkaadk94op"
                                      }
                                  },
                                  "id": "2OF6Ru1Z0EWzRIJhj2J7J7",
                                  "type": "Entry",
                                  "createdAt": "2025-03-06T16:02:43.165Z",
                                  "updatedAt": "2025-03-26T15:44:04.294Z",
                                  "environment": {
                                      "sys": {
                                          "id": "master",
                                          "type": "Link",
                                          "linkType": "Environment"
                                      }
                                  },
                                  "publishedVersion": 5,
                                  "revision": 2,
                                  "contentType": {
                                      "sys": {
                                          "type": "Link",
                                          "linkType": "ContentType",
                                          "id": "navLink"
                                      }
                                  },
                                  "locale": "en-US"
                              },
                              "fields": {
                                  "name": "moodboards",
                                  "slug": "moodboards"
                              }
                          },
                          {
                              "metadata": {
                                  "tags": [],
                                  "concepts": []
                              },
                              "sys": {
                                  "space": {
                                      "sys": {
                                          "type": "Link",
                                          "linkType": "Space",
                                          "id": "49dkaadk94op"
                                      }
                                  },
                                  "id": "5f9jiWHquCNBRYlQqztKEe",
                                  "type": "Entry",
                                  "createdAt": "2025-03-06T16:02:59.641Z",
                                  "updatedAt": "2025-03-26T15:45:16.082Z",
                                  "environment": {
                                      "sys": {
                                          "id": "master",
                                          "type": "Link",
                                          "linkType": "Environment"
                                      }
                                  },
                                  "publishedVersion": 4,
                                  "revision": 2,
                                  "contentType": {
                                      "sys": {
                                          "type": "Link",
                                          "linkType": "ContentType",
                                          "id": "navLink"
                                      }
                                  },
                                  "locale": "en-US"
                              },
                              "fields": {
                                  "name": "focus",
                                  "slug": "focus"
                              }
                          },
                          {
                              "metadata": {
                                  "tags": [],
                                  "concepts": []
                              },
                              "sys": {
                                  "space": {
                                      "sys": {
                                          "type": "Link",
                                          "linkType": "Space",
                                          "id": "49dkaadk94op"
                                      }
                                  },
                                  "id": "3EOXwKh6bo684E6JFjkU3M",
                                  "type": "Entry",
                                  "createdAt": "2025-03-06T16:03:17.972Z",
                                  "updatedAt": "2025-03-26T15:45:26.573Z",
                                  "environment": {
                                      "sys": {
                                          "id": "master",
                                          "type": "Link",
                                          "linkType": "Environment"
                                      }
                                  },
                                  "publishedVersion": 5,
                                  "revision": 2,
                                  "contentType": {
                                      "sys": {
                                          "type": "Link",
                                          "linkType": "ContentType",
                                          "id": "navLink"
                                      }
                                  },
                                  "locale": "en-US"
                              },
                              "fields": {
                                  "name": "thoughts on design",
                                  "slug": "thoughts-on-design"
                              }
                          }
                      ]
                  }
              },
              {
                  "metadata": {
                      "tags": [],
                      "concepts": []
                  },
                  "sys": {
                      "space": {
                          "sys": {
                              "type": "Link",
                              "linkType": "Space",
                              "id": "49dkaadk94op"
                          }
                      },
                      "id": "rKCjMGW0HJ9VJCapSp9Py",
                      "type": "Entry",
                      "createdAt": "2025-03-06T16:05:06.160Z",
                      "updatedAt": "2025-03-26T16:54:28.159Z",
                      "environment": {
                          "sys": {
                              "id": "master",
                              "type": "Link",
                              "linkType": "Environment"
                          }
                      },
                      "publishedVersion": 8,
                      "revision": 2,
                      "contentType": {
                          "sys": {
                              "type": "Link",
                              "linkType": "ContentType",
                              "id": "navCategory"
                          }
                      },
                      "locale": "en-US"
                  },
                  "fields": {
                      "name": "Le Studio",
                      "numberInMenu": "02",
                      "links": [
                          {
                              "metadata": {
                                  "tags": [],
                                  "concepts": []
                              },
                              "sys": {
                                  "space": {
                                      "sys": {
                                          "type": "Link",
                                          "linkType": "Space",
                                          "id": "49dkaadk94op"
                                      }
                                  },
                                  "id": "60OUlIMZnNRjPzqJvM1mKe",
                                  "type": "Entry",
                                  "createdAt": "2025-03-06T16:04:22.503Z",
                                  "updatedAt": "2025-03-26T15:45:46.021Z",
                                  "environment": {
                                      "sys": {
                                          "id": "master",
                                          "type": "Link",
                                          "linkType": "Environment"
                                      }
                                  },
                                  "publishedVersion": 6,
                                  "revision": 3,
                                  "contentType": {
                                      "sys": {
                                          "type": "Link",
                                          "linkType": "ContentType",
                                          "id": "navLink"
                                      }
                                  },
                                  "locale": "en-US"
                              },
                              "fields": {
                                  "name": "what we do",
                                  "slug": "what-we-do"
                              }
                          },
                          {
                              "metadata": {
                                  "tags": [],
                                  "concepts": []
                              },
                              "sys": {
                                  "space": {
                                      "sys": {
                                          "type": "Link",
                                          "linkType": "Space",
                                          "id": "49dkaadk94op"
                                      }
                                  },
                                  "id": "6SwUTV9pVFsiLd5Kv8Xk7e",
                                  "type": "Entry",
                                  "createdAt": "2025-03-06T16:04:40.271Z",
                                  "updatedAt": "2025-03-26T15:45:54.380Z",
                                  "environment": {
                                      "sys": {
                                          "id": "master",
                                          "type": "Link",
                                          "linkType": "Environment"
                                      }
                                  },
                                  "publishedVersion": 4,
                                  "revision": 2,
                                  "contentType": {
                                      "sys": {
                                          "type": "Link",
                                          "linkType": "ContentType",
                                          "id": "navLink"
                                      }
                                  },
                                  "locale": "en-US"
                              },
                              "fields": {
                                  "name": "cases study",
                                  "slug": "cases-study"
                              }
                          },
                          {
                              "metadata": {
                                  "tags": [],
                                  "concepts": []
                              },
                              "sys": {
                                  "space": {
                                      "sys": {
                                          "type": "Link",
                                          "linkType": "Space",
                                          "id": "49dkaadk94op"
                                      }
                                  },
                                  "id": "7832Y3grzCc1gSiBGJUJb8",
                                  "type": "Entry",
                                  "createdAt": "2025-03-06T16:05:01.186Z",
                                  "updatedAt": "2025-03-26T15:46:01.235Z",
                                  "environment": {
                                      "sys": {
                                          "id": "master",
                                          "type": "Link",
                                          "linkType": "Environment"
                                      }
                                  },
                                  "publishedVersion": 4,
                                  "revision": 2,
                                  "contentType": {
                                      "sys": {
                                          "type": "Link",
                                          "linkType": "ContentType",
                                          "id": "navLink"
                                      }
                                  },
                                  "locale": "en-US"
                              },
                              "fields": {
                                  "name": "portfolio",
                                  "slug": "portfolio"
                              }
                          }
                      ]
                  }
              },
              {
                  "metadata": {
                      "tags": [],
                      "concepts": []
                  },
                  "sys": {
                      "space": {
                          "sys": {
                              "type": "Link",
                              "linkType": "Space",
                              "id": "49dkaadk94op"
                          }
                      },
                      "id": "3owqZ69MqubX6BxG7Q0xwj",
                      "type": "Entry",
                      "createdAt": "2025-03-06T16:05:38.332Z",
                      "updatedAt": "2025-03-26T16:54:45.780Z",
                      "environment": {
                          "sys": {
                              "id": "master",
                              "type": "Link",
                              "linkType": "Environment"
                          }
                      },
                      "publishedVersion": 5,
                      "revision": 2,
                      "contentType": {
                          "sys": {
                              "type": "Link",
                              "linkType": "ContentType",
                              "id": "navCategory"
                          }
                      },
                      "locale": "en-US"
                  },
                  "fields": {
                      "name": "Contact",
                      "numberInMenu": "03",
                      "links": [
                          {
                              "metadata": {
                                  "tags": [],
                                  "concepts": []
                              },
                              "sys": {
                                  "space": {
                                      "sys": {
                                          "type": "Link",
                                          "linkType": "Space",
                                          "id": "49dkaadk94op"
                                      }
                                  },
                                  "id": "1tmPrAzOMmUImES0nEOWRe",
                                  "type": "Entry",
                                  "createdAt": "2025-03-06T16:05:35.793Z",
                                  "updatedAt": "2025-03-26T16:07:10.445Z",
                                  "environment": {
                                      "sys": {
                                          "id": "master",
                                          "type": "Link",
                                          "linkType": "Environment"
                                      }
                                  },
                                  "publishedVersion": 4,
                                  "revision": 2,
                                  "contentType": {
                                      "sys": {
                                          "type": "Link",
                                          "linkType": "ContentType",
                                          "id": "navLink"
                                      }
                                  },
                                  "locale": "en-US"
                              },
                              "fields": {
                                  "name": "contact",
                                  "slug": "contact"
                              }
                          }
                      ]
                  }
              }
          ]
      }
  }
  )
}

export const getHomePageData = async ():Promise<Entry<IHomePage>> => {
  const entries = await contentful.getEntries<IHomePage>({
    content_type: 'homePage'
  } as any)

  await enrichModuleTwo(entries.items[0])
  return entries.items[0]
}

export const getWhatWeDoPageData = async ():Promise<Entry<IWhatWeDoPage>> => {
  const entries = await contentful.getEntries<IWhatWeDoPage>({
    content_type: 'pageWhatWeDo'
  } as any)

  await enrichModuleThree(entries.items[0])
  return entries.items[0]
}

export const getCaseStudyData = async (slug: string): Promise<Entry<ICaseStudyPage>> => {
  const entries = await contentful.getEntries<ICaseStudyPage>({
    content_type: 'pageCaseStudy',
    'fields.slug': slug
  } as any)

  return  entries.items[0]
}

export const enrichModuleThree = async (entry: Entry<IWhatWeDoPage>) => {
  await Promise.all(
    (entry.fields.modules as any).map( async (module: any, index: any) => {
      if (module.sys.contentType.sys.id === 'moduleThree') {
        if (module.fields.type === 'Case 2') {
          if (module.fields.caseStudies) {
            const idsToGet = module.fields.caseStudies.map((caseStudy: any) => caseStudy.sys.id )
                
            const caseStudiesInfo = await contentful.getEntries<ICaseStudyPage>({
            content_type: 'pageCaseStudy',
            'sys.id[in]': idsToGet.join(',')
            })

            caseStudiesInfo.items.sort((itemA, itemB) =>
            idsToGet.indexOf(itemA.sys.id) < idsToGet.indexOf(itemB.sys.id) ? -1 : 1
            );

            ((entry.fields.modules[index] as any).fields).caseStudies = caseStudiesInfo.items

          }
        }
      }
    })
  )
}

export const getCasesStudyData = async (): Promise<Array<Entry<ICaseStudyPage>>> => {
  const entries = await contentful.getEntries<ICaseStudyPage>({
    content_type: 'pageCaseStudy'
  })

  return entries.items
}


export const getThoughtsOnDesignData = async (): Promise<Entry<IThoughtsOnDesignPage>> => {
  const entries = await contentful.getEntries<IThoughtsOnDesignPage>({
    content_type: 'pageThoughtsOnDesign'
  })

  return entries.items[0]
}


export const getArticlePageData = async (slug: string): Promise<Entry<IArticlePage>> => {
  const entries = await contentful.getEntries<IArticlePage>({
    content_type: 'pageArticle',
    'fields.slug': slug
  } as any)

  return entries.items[0]
}



