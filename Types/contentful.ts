import { Entry, Asset, EntryFields, EntrySkeletonType } from 'contentful';

export interface NavigationFields {
  name: string
  locale: string
  logo?: Asset
  navCategories: Array<INavcategory>
}
export interface INavigation extends EntrySkeletonType<NavigationFields> {}



interface NavCategoryFields {
  name: string
  numberInMenu: string
  links: Array<INavLink>
}
export interface INavcategory extends EntrySkeletonType<NavCategoryFields> {}



interface NavLinkFields {
  name: string
  slug: string
}
export interface INavLink extends EntrySkeletonType<NavLinkFields> {}