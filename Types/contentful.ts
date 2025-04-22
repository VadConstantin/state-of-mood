import { Asset, Entry, EntrySkeletonType } from 'contentful';

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
// also known as Mini Modules


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



export interface ModuleFiveFieds {
  name: string
  type: string
  plainImages: boolean
  images: Array<Asset>
  backgroundColorForText?: string
  textColor?: string
  firstImageBackgroundColor?: string
  secondImageBackgroundColor?: string
  tag?: string
  isTextBefore?: string
  firstLineTitle?: string
  secondLineTitle?: string
  middleTitle?: string
  description?: string
}

export interface IModuleFive extends EntrySkeletonType<ModuleFiveFieds> {}



export interface CaseStudyPageFieds {
  name: string
  slug: string
  modules: Array<IModuleFive>
}

export interface ICaseStudyPage extends EntrySkeletonType<CaseStudyPageFieds> {}


interface ModuleSixFields {
  name: string
  firstLineTitle: string
  secondLineTitle: string
  description: string
  keyWord1?: string
  keyWord2?: string
  keyWord3?: string
  keyWord4?: string
  keyWord5?: string
  picture1: Asset
  picture2: Asset
  picture3: Asset
  picture4: Asset
  picture5: Asset
  picture6: Asset
  picture7: Asset
  picture8: Asset
  picture9: Asset
}

export interface IModuleSix extends EntrySkeletonType<ModuleSixFields> {}


interface ModuleSevenFields {
  name: string
  type: "Font" | "Color" | "Palette"
  backgroundColor: string
  firstLineTitle: string
  secondLineTitle: string
  imagesForFontType: Array<Asset>
  colorsForColorType: string
  imagesForPaletteType: Array<Asset>
}

export interface IModuleSeven extends EntrySkeletonType<ModuleSevenFields> {}


interface ModuleEightFields {
  name: string;
  firstLineTitle: string
  secondLineTitle: string
  description: string
  images: Array<Asset>
  keyWord1?: string
  keyWord2?: string
  keyWord3?: string
  keyWord4?: string
  keyWord5?: string
}

export interface IModuleEight extends EntrySkeletonType<ModuleEightFields> {}


interface ModuleNineFields {
  name: string
  type: string
  firstLineTitle: string
  secondLineTitle: string
  description?: string
  images: Array<Asset>
}

export interface IModuleNine extends EntrySkeletonType<ModuleNineFields> {}


interface ModuleTenFields {
  name: string
  type: string
  firstLineTitle: string
  secondLineTitle: string
  description?: string
  images: Array<Asset>
}

export interface IModuleTen extends EntrySkeletonType<ModuleTenFields> {}


interface ModuleElevenFields {
  name: string
  type: string
  displayButton: boolean
  line1: string
  line2?: string
  line3?: string
  line4?: string
  line5?: string
  line6?: string
  line7?: string
}

export interface IModuleEleven extends EntrySkeletonType<ModuleElevenFields> {}


interface ModuleTwelveFields {
  name: string
  type: string
  backgroundColor: string
  fontColor: string
  description: string
  firstLineTitle: string
  secondLineTitle: string
  images: Array<Asset>
}

export interface IModuleTwelve extends EntrySkeletonType<ModuleTwelveFields> {}