import { createClient } from 'contentful';
import { Entry } from 'contentful';

import { INavLink, INavcategory, INavigation, IHomePage, IModuleTwo, IWeeklySelectionModule, IWhatWeDoPage } from '../Types/contentful';

const contentful = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || '',
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || '',
})

const enrichNavCategories = async (entry: Entry<INavigation>) => {
  await Promise.all(
    (entry.fields.navCategories as any).map(async (cat: any, index: any) => {

      if (cat.sys.contentType.sys.id == 'navCategory') {
        if ((cat.fields as any).links){

          const idsToGet = (cat.fields as any).links.map((link: any) => link.sys.id)

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


export const getNavigationData = async ():Promise<Entry<INavigation>> => {
  const entries = await contentful.getEntries<INavigation>({
    content_type: 'navigation'
  } as any)

  await enrichNavCategories(entries.items[0] as Entry<INavigation>)
  return entries.items[0]
}

export const getHomePageData = async ():Promise<Entry<IHomePage>> => {
  const entries = await contentful.getEntries<IHomePage>({
    content_type: 'homePage'
  }as any)

  await enrichModuleTwo(entries.items[0])
  return entries.items[0]
}

export const getWhatWeDoPageData = async ():Promise<Entry<IWhatWeDoPage>> => {
  const entries = await contentful.getEntries<IWhatWeDoPage>({
    content_type: 'pageWhatWeDo'
  }as any)

  return entries.items[0]
}

