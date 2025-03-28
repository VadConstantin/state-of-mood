import { Asset, EntrySkeletonType } from 'contentful';

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



interface ModuleOneFields {
  name: string
  titleFirstLine: string
  titleSecondLine?: string
  tag: string
  linkTitle: string
  backgroundColor: string
  firstPicture: Asset
  firstPictureRectangleColor: string
  secondPicture: Asset
  secondPictureRectangleColor: string
  linkSlug: string
  stampForSecondPicture?: Asset
}

export interface IModuleOne extends EntrySkeletonType<ModuleOneFields> {}


interface WeeklySelectionModuleFields {
  name: string
  picture: Asset
  title: string
  description: string
  tag: string
  slug: string
}

export interface IWeeklySelectionModule extends EntrySkeletonType<WeeklySelectionModuleFields> {}


interface ModuleTwoFields {
  name: string
  titleFirstLine: string
  titleSecondLine?: string
  description: string
  weeklySelectionModules: Array<IWeeklySelectionModule>
}

export interface IModuleTwo extends EntrySkeletonType<ModuleTwoFields> {}



interface ModuleThreeFields {
  name: string
  backgroundColor: string
  picture: Asset
  tag: string
  titleFirstLine: string
  titleSecondLine?: string
  description: string
  linkTitle: string
  linkSlug: string
}

export interface IModuleThree extends EntrySkeletonType<ModuleThreeFields> {}



interface HomePageFields {
  name: string
  modulesOne: Array<IModuleOne>
  moduleTwo: IModuleTwo
  moduleThree: IModuleThree
}

export interface IHomePage extends EntrySkeletonType<HomePageFields> {}