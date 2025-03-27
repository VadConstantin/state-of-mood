import { createClient } from 'contentful';
import { Entry } from 'contentful';

import { INavLink, INavcategory, INavigation } from '../Types/contentful';

const contentful = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || '',
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || '',
})

export const enrichNavCategories = async (entry: Entry<INavigation>) => {
  await Promise.all(
    (entry.fields.navCategories as any).map(async (cat: any, index: any) => {

      if (cat.sys.contentType.sys.id == 'navCategory') {
        if ((cat.fields as any).links){
          console.log('LOL')
          const idsToGet = (cat.fields as any).links.map((link: any) => link.sys.id)

          console.log('ID des links ==>', idsToGet)

          const linksInfo = await contentful.getEntries<INavLink>({
            content_type: 'navLink',
            'sys.id[in]': idsToGet.join(',')
          });

          linksInfo.items.sort((itemA, itemB) =>
          idsToGet.indexOf(itemA.sys.id) < idsToGet.indexOf(itemB.sys.id) ? -1 : 1
          );
          
          ((entry.fields.navCategories[index] as any).fields).links = linksInfo.items
        }
      }
    })
  )
}

export const getNavigationData = async ():Promise<Entry<INavigation>> => {
  const entries = await contentful.getEntries<INavigation>({
    content_type: 'navigation'
  } as any)

  await enrichNavCategories(entries.items[0] as Entry<INavigation>)
  return entries.items[0]
}