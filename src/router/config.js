import GettingStarted from '@/pages/installtion/GettingStarted'
import AddReactToAWebsite from '@/pages/installtion/AddReactToAWebsite'
import CreateANewReactApp from '@/pages/installtion/CreateANewReactApp'
import CDNLinks from '@/pages/installtion/CDNLinks'

import HelloWorld from '@/pages/main-concepts/HelloWorld'
import IntroducingJSX from '@/pages/main-concepts/IntroducingJSX'
import RenderingElements from '@/pages/main-concepts/RenderingElements'
import ComponentsAndProps from '@/pages/main-concepts/ComponentsAndProps'
import StateAndLifecycle from '@/pages/main-concepts/StateAndLifecycle'
import HandingEvents from '@/pages/main-concepts/HandingEvents'
import ConditionalRendering from '@/pages/main-concepts/ConditionalRendering'
import ListsAndKeys from '@/pages/main-concepts/ListsAndKeys'
import Forms from '@/pages/main-concepts/Forms'
import LiftingStateUp from '@/pages/main-concepts/LiftingStateUp'
import CompositionVsInheritance from '@/pages/main-concepts/CompositionVsInheritance'
import ThinkingInReact from '@/pages/main-concepts/ThinkingInReact'

import Accessibility from '@/pages/advanced-guides/Accessibility'
import CodeSplitting from '@/pages/advanced-guides/CodeSplitting'
import Context from '@/pages/advanced-guides/Context'
import ErrorBoundaries from '@/pages/advanced-guides/ErrorBoundaries'
import ForwardingRefs from '@/pages/advanced-guides/ForwardingRefs'
import Fragments from '@/pages/advanced-guides/Fragments'
import HigherOrderComponents from '@/pages/advanced-guides/HigherOrderComponents'
import IntegratingWithOtherLibraries from '@/pages/advanced-guides/IntegratingWithOtherLibraries'
import JSXInDepth from '@/pages/advanced-guides/JSXInDepth'
import OptimizingPerformance from '@/pages/advanced-guides/OptimizingPerformance'
import Portals from '@/pages/advanced-guides/Portals'
import ReactWithoutES6 from '@/pages/advanced-guides/ReactWithoutES6'
import ReactWithoutJSX from '@/pages/advanced-guides/ReactWithoutJSX'
import Reconciliation from '@/pages/advanced-guides/Reconciliation'
import RefsAndTheDOM from '@/pages/advanced-guides/RefsAndTheDOM'
import RenderProps from '@/pages/advanced-guides/RenderProps'
import StaticTypeChecking from '@/pages/advanced-guides/StaticTypeChecking'
import StrictMode from '@/pages/advanced-guides/StrictMode'
import TypecheckingWithPropTypes from '@/pages/advanced-guides/TypecheckingWithPropTypes'
import UncontrolledComponents from '@/pages/advanced-guides/UncontrolledComponents'
import WebComponents from '@/pages/advanced-guides/WebComponents'

import ReactIntroduce from '@/pages/api-reference/ReactIntroduce'
import ReactComponent from '@/pages/api-reference/ReactComponent'
import ReactDOMIntroduce from '@/pages/api-reference/ReactDOMIntroduce'
import ReactDOMServerIntroduce from '@/pages/api-reference/ReactDOMServerIntroduce'
import DOMElements from '@/pages/api-reference/DOMElements'
import SyntheticEvent from '@/pages/api-reference/SyntheticEvent'
import TestUtilities from '@/pages/api-reference/TestUtilities'
import ShallowRender from '@/pages/api-reference/ShallowRender'
import TestRender from '@/pages/api-reference/TestRender'
import JSEnvironmentRequirements from '@/pages/api-reference/JSEnvironmentRequirements'
import Glossary from '@/pages/api-reference/Glossary'

import IntroducingHooks from '@/pages/hooks/IntroducingHooks'
import HooksAtAGlance from '@/pages/hooks/HooksAtAGlance'
import UsingTheStateHook from '@/pages/hooks/UsingTheStateHook'
import UsingTheEffectHook from '@/pages/hooks/UsingTheEffectHook'
import RulesOfHooks from '@/pages/hooks/RulesOfHooks'
import BuildingYourOwnHooks from '@/pages/hooks/BuildingYourOwnHooks'
import HooksAPIReference from '@/pages/hooks/HooksAPIReference'
import HooksFAQ from '@/pages/hooks/HooksFAQ'

import HowToContribute from '@/pages/contributing/HowToContribute'
import CodebaseOverview from '@/pages/contributing/CodebaseOverview'
import ImplementationNotes from '@/pages/contributing/ImplementationNotes'
import DesignPrinciples from '@/pages/contributing/DesignPrinciples'

import AJAXAndAPIs from '@/pages/faq/AJAXAndAPIs'
import BabelJSXAndBuildSteps from '@/pages/faq/BabelJSXAndBuildSteps'
import PassingFunctionsToComponents from '@/pages/faq/PassingFunctionsToComponents'
import ComponentState from '@/pages/faq/ComponentState'
import StylingAndCSS from '@/pages/faq/StylingAndCSS'
import FileStructure from '@/pages/faq/FileStructure'
import VersioningPolicy from '@/pages/faq/VersioningPolicy'
import VirtualDOMAndInternals from '@/pages/faq/VirtualDOMAndInternals'

const config = {
  // 'installtion':{
    GettingStarted,
    AddReactToAWebsite,
    CreateANewReactApp,
    CDNLinks,
  // },

  // 'main-concepts':{
    HelloWorld,
    IntroducingJSX,
    RenderingElements,
    ComponentsAndProps,
    StateAndLifecycle,
    HandingEvents,
    ConditionalRendering,
    ListsAndKeys,
    Forms,
    LiftingStateUp,
    CompositionVsInheritance,
    ThinkingInReact,
  // },

  // 'advanced-guides':{
    Accessibility,
    CodeSplitting,
    Context,
    ErrorBoundaries,
    ForwardingRefs,
    Fragments,
    HigherOrderComponents,
    IntegratingWithOtherLibraries,
    JSXInDepth,
    OptimizingPerformance,
    Portals,
    ReactWithoutES6,
    ReactWithoutJSX,
    Reconciliation,
    RefsAndTheDOM,
    RenderProps,
    StaticTypeChecking,
    StrictMode,
    TypecheckingWithPropTypes,
    UncontrolledComponents,
    WebComponents,
  // },

  // 'api-reference':{
    ReactIntroduce,
    ReactComponent,
    ReactDOMIntroduce,
    ReactDOMServerIntroduce,
    DOMElements,
    SyntheticEvent,
    TestUtilities,
    ShallowRender,
    TestRender,
    JSEnvironmentRequirements,
    Glossary,
  // },

  // 'hooks':{
    IntroducingHooks,
    HooksAtAGlance,
    UsingTheStateHook,
    UsingTheEffectHook,
    RulesOfHooks,
    BuildingYourOwnHooks,
    HooksAPIReference,
    HooksFAQ,
  // },

  // 'contributing': {
    HowToContribute,
    CodebaseOverview,
    ImplementationNotes,
    DesignPrinciples,
  // },

  // 'faq': {
    AJAXAndAPIs,
    BabelJSXAndBuildSteps,
    PassingFunctionsToComponents,
    ComponentState,
    StylingAndCSS,
    FileStructure,
    VersioningPolicy,
    VirtualDOMAndInternals,
  // }

}
export const menuConfig = [
  {
    title: '安装',
    icon: '',
    path: '/installtion',
    children: [
      {
        title: '开始',
        icon: '',
        path: 'GettingStarted',
        component: 'GettingStarted'
      },
      {
        title: '添加React网站',
        icon: '',
        path: 'AddReactToAWebsite',
        component: 'AddReactToAWebsite'
      },
      {
        title: '创建React项目',
        icon: '',
        path: 'CreateANewReactApp',
        component: 'CreateANewReactApp'
      },
      {
        title: 'CDN',
        icon: '',
        path: 'CDNLinks',
        component: 'CDNLinks'
      }
    ]
  },
  {
    title: '主要理念',
    icon: '',
    path: '/main-concepts',
    children: [
      {
        title: 'Hello World',
        icon: '',
        path: 'HelloWorld',
        component: 'HelloWorld'
      },
      {
        title: 'JSX简介',
        icon: '',
        path: 'IntroducingJSX',
        component: 'IntroducingJSX'
      },
      {
        title: '元素渲染',
        icon: '',
        path: 'RenderingElements',
        component: 'RenderingElements'
      },
      {
        title: 'Component & props',
        icon: '',
        path: 'ComponentsAndProps',
        component: 'ComponentsAndProps'
      },
      {
        title: 'state & 生命周期',
        icon: '',
        path: 'StateAndLifecycle',
        component: 'StateAndLifecycle'
      },
      {
        title: '事件处理',
        icon: '',
        path: 'HandingEvents',
        component: 'HandingEvents'
      },
      {
        title: '条件渲染',
        icon: '',
        path: 'ConditionalRendering',
        component: 'ConditionalRendering'
      },
      {
        title: '列表 & Keys',
        icon: '',
        path: 'ListsAndKeys',
        component: 'ListsAndKeys'
      },
      {
        title: '表单',
        icon: '',
        path: 'Forms',
        component: 'Forms'
      },
      {
        title: '状态提升',
        icon: '',
        path: 'LiftingStateUp',
        component: 'LiftingStateUp'
      },
      {
        title: '组合 VS 继承',
        icon: '',
        path: 'CompositionVsInheritance',
        component: 'CompositionVsInheritance'
      },
      {
        title: 'React理念',
        icon: '',
        path: 'ThinkingInReact',
        component: 'ThinkingInReact'
      },
    ]
  },
  {
    title: '高阶指引',
    icon: '',
    path: '/advanced-guides',
    children: [
      {
        title: '无障碍',
        icon: '',
        path: 'Accessibility',
        component: 'Accessibility'
      },
      {
        title: '代码分隔',
        icon: '',
        path: 'CodeSplitting',
        component: 'CodeSplitting'
      },
      {
        title: 'Context',
        icon: '',
        path: 'Context',
        component: 'Context'
      },
      {
        title: '错误边界',
        icon: '',
        path: 'ErrorBoundaries',
        component: 'ErrorBoundaries'
      },
      {
        title: 'Forwarding Refs',
        icon: '',
        path: 'ForwardingRefs',
        component: 'ForwardingRefs'
      },
      {
        title: '片段',
        icon: '',
        path: 'Fragments',
        component: 'Fragments'
      },
      {
        title: '高阶组件',
        icon: '',
        path: 'HigherOrderComponents',
        component: 'HigherOrderComponents'
      },
      {
        title: '集成其他库',
        icon: '',
        path: 'IntegratingWithOtherLibraries',
        component: 'IntegratingWithOtherLibraries'
      },
      {
        title: '深入理解JSX',
        icon: '',
        path: 'JSXInDepth',
        component: 'JSXInDepth'
      },
      {
        title: '性能优化',
        icon: '',
        path: 'OptimizingPerformance',
        component: 'OptimizingPerformance'
      },
      {
        title: '入口',
        icon: '',
        path: 'Portals',
        component: 'Portals'
      },
      {
        title: 'React不是用ES6',
        icon: '',
        path: 'ReactWithoutES6',
        component: 'ReactWithoutES6'
      },
      {
        title: 'React不使用JSX',
        icon: '',
        path: 'ReactWithoutJSX',
        component: 'ReactWithoutJSX'
      },
      {
        title: 'Reconciliation',
        icon: '',
        path: 'Reconciliation',
        component: 'Reconciliation'
      },
      {
        title: 'Refs & DOM',
        icon: '',
        path: 'RefsAndTheDOM',
        component: 'RefsAndTheDOM'
      },
      {
        title: 'Render Props',
        icon: '',
        path: 'RenderProps',
        component: 'RenderProps'
      },
      {
        title: '静态类型检查',
        icon: '',
        path: 'StaticTypeChecking',
        component: 'StaticTypeChecking'
      },
      {
        title: '静态mode',
        icon: '',
        path: 'StrictMode',
        component: 'StrictMode'
      },
      {
        title: '使用PropTypes进行类型检查',
        icon: '',
        path: 'TypecheckingWithPropTypes',
        component: 'TypecheckingWithPropTypes'
      },
      {
        title: '非受控组件',
        icon: '',
        path: 'UncontrolledComponents',
        component: 'UncontrolledComponents'
      },
      {
        title: 'Web组件',
        icon: '',
        path: 'WebComponents',
        component: 'WebComponents'
      }
    ]
  },
  {
    title: 'API参考',
    icon: '',
    path: '/api-reference',
    children: [
      {
        title: 'React',
        icon: '',
        path: 'ReactIntroduce',
        component: 'ReactIntroduce'
      },
      {
        title: 'React组件',
        icon: '',
        path: 'ReactComponent',
        component: 'ReactComponent'
      },
      {
        title: 'ReactDOM',
        icon: '',
        path: 'ReactDOMIntroduce',
        component: 'ReactDOMIntroduce'
      },
      {
        title: 'ReactDOMServer',
        icon: '',
        path: 'ReactDOMServerIntroduce',
        component: 'ReactDOMServerIntroduce'
      },
      {
        title: 'DOM元素',
        icon: '',
        path: 'DOMElements',
        component: 'DOMElements'
      },
      {
        title: '合成事件',
        icon: '',
        path: 'SyntheticEvent',
        component: 'SyntheticEvent'
      },
      {
        title: '功能测试',
        icon: '',
        path: 'TestUtilities',
        component: 'TestUtilities'
      },
      {
        title: 'Shallow Render',
        icon: '',
        path: 'ShallowRender',
        component: 'ShallowRender'
      },
      {
        title: 'Test Render',
        icon: '',
        path: 'TestRender',
        component: 'TestRender'
      },
      {
        title: 'JS环境要求',
        icon: '',
        path: 'JSEnvironmentRequirements',
        component: 'JSEnvironmentRequirements'
      },
      {
        title: '词汇表',
        icon: '',
        path: 'Glossary',
        component: 'Glossary'
      }
    ]
  },
  {
    title: 'Hooks',
    icon: '',
    path: '/hooks',
    children: [
      {
        title: 'Hooks介绍',
        icon: '',
        path: 'IntroducingHooks',
        component: 'IntroducingHooks'
      },
      {
        title: '初探Hooks',
        icon: '',
        path: 'HooksAtAGlance',
        component: 'HooksAtAGlance'
      },
      {
        title: 'State Hook的使用',
        icon: '',
        path: 'UsingTheStateHook',
        component: 'UsingTheStateHook'
      },
      {
        title: 'Effect Hook的使用',
        icon: '',
        path: 'UsingTheEffectHook',
        component: 'UsingTheEffectHook'
      },
      {
        title: 'Hooks规则',
        icon: '',
        path: 'RulesOfHooks',
        component: 'RulesOfHooks'
      },
      {
        title: '构建自定义Hooks',
        icon: '',
        path: 'BuildingYourOwnHooks',
        component: 'BuildingYourOwnHooks'
      },
      {
        title: 'Hooks API',
        icon: '',
        path: 'HooksAPIReference',
        component: 'HooksAPIReference'
      },
      {
        title: 'Hooks FAQ',
        icon: '',
        path: 'HooksFAQ',
        component: 'HooksFAQ'
      }
    ]
  },
  {
    title: '构建',
    icon: '',
    path: '/contributing',
    children: [
      {
        title: '怎么样构建',
        icon: '',
        path: 'HowToContribute',
        component: 'HowToContribute'
      },
      {
        title: '代码库概述',
        icon: '',
        path: 'CodebaseOverview',
        component: 'CodebaseOverview'
      },
      {
        title: '实施说明',
        icon: '',
        path: 'ImplementationNotes',
        component: 'ImplementationNotes'
      },
      {
        title: '设计原理',
        icon: '',
        path: 'DesignPrinciples',
        component: 'DesignPrinciples'
      }
    ]
  },
  {
    title: '常见疑难解答',
    icon: '',
    path: '/faq',
    children: [
      {
        title: '使用AJAX',
        icon: '',
        path: 'AJAXAndAPIs',
        component: 'AJAXAndAPIs'
      },
      {
        title: 'Babel JSX构建步骤',
        icon: '',
        path: 'BabelJSXAndBuildSteps',
        component: 'BabelJSXAndBuildSteps'
      },
      {
        title: '组件中传递方法',
        icon: '',
        path: 'PassingFunctionsToComponents',
        component: 'PassingFunctionsToComponents'
      },
      {
        title: '组件状态',
        icon: '',
        path: 'ComponentState',
        component: 'ComponentState'
      },
      {
        title: 'Style & CSS',
        icon: '',
        path: 'StylingAndCSS',
        component: 'StylingAndCSS'
      },
      {
        title: '文件结构',
        icon: '',
        path: 'FileStructure',
        component: 'FileStructure'
      },
      {
        title: '版本控制策略',
        icon: '',
        path: 'VersioningPolicy',
        component: 'VersioningPolicy'
      },
      {
        title: '虚拟DOM介绍',
        icon: '',
        path: 'VirtualDOMAndInternals',
        component: 'VirtualDOMAndInternals'
      }
    ]
  }
]

export default config