import { Asset, EntrySkeletonType } from 'contentful';

export interface NavigationFields {
  name: string
  locale: string
  logo?: Asset
  navCategories: Array<INavcategory>
}
export interface INavigation extends EntrySkeletonType<NavigationFields> {}



export interface NavCategoryFields {
  name: string
  numberInMenu: string
  links: Array<INavLink>
}
export interface INavcategory extends EntrySkeletonType<NavCategoryFields> {}



export interface NavLinkFields {
  name: string
  slug: string
}
export interface INavLink extends EntrySkeletonType<NavLinkFields> {}



export interface ModuleOneFields {
  name: string
  titleFirstLine: string
  titleSecondLine?: string
  tag: string
  linkTitle: string
  backgroundColor: string
  firstPicture: Asset
  secondPicture: Asset
  linkSlug: string
  stampForSecondPicture?: Asset
}

export interface IModuleOne extends EntrySkeletonType<ModuleOneFields> {}


export interface WeeklySelectionModuleFields {
  name: string
  picture: Asset
  title: string
  description: string
  tag: string
  slug: string
}

export interface IWeeklySelectionModule extends EntrySkeletonType<WeeklySelectionModuleFields> {}


export interface ModuleTwoFields {
  name: string
  titleFirstLine: string
  titleSecondLine?: string
  description: string
  backgroundColor: string
  weeklySelectionModules: Array<IWeeklySelectionModule>
}

export interface IModuleTwo extends EntrySkeletonType<ModuleTwoFields> {}



export interface ModuleThreeFields {
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



export interface HomePageFields {
  name: string
  modulesOne: Array<IModuleOne>
  moduleTwo: IModuleTwo
  moduleThree: IModuleThree
}

export interface IHomePage extends EntrySkeletonType<HomePageFields> {}



export interface WhatWeDoPageFields {
  name: string
  bannerImage: Asset
  bannerRectangleColor: string
  bannerTextColor: string
  bannerMainTitle: string
  bannerSecondTitle: string
  bannerDescription: string
  moduleFour: IModuleFour
}

export interface IWhatWeDoPage extends EntrySkeletonType<WhatWeDoPageFields> {}



export interface ModuleFourFields {
  name: string
  backgroundColor: string
  textColor: string
  lineColor: string
  leftText: string
  rightText: string
  firstPartPicture: Asset
  firstPartFirstLineTitle: string
  firstPartSecondLineTitle?: string
  firstPartMiddleTitle: string
  firstPartTags: string
  firstPartDescription: string
  firstPartWorkTogetherLinkSlug: string
  firstPartSeeCaseStudyLinkSlug: string
  secondPartPicture: Asset
  secondPartFirstLineTitle: string
  secondPartSecondLineTitle?: string
  secondPartMiddleTitle: string
  secondPartTags: string
  secondPartDescription: string
  secondPartWorkTogetherLinkSlug: string
  secondPartSeeCaseStudyLinkSlug: string
}

export interface IModuleFour extends EntrySkeletonType<ModuleFourFields> {}