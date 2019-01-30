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
    title: 'Installtion',
    label: '安装',
    icon: '',
    path: '/installtion',
    children: [
      {
        title: 'Getting Started',
        label: '安装',
        icon: '',
        path: 'GettingStarted',
        component: 'GettingStarted'
      },
      {
        title: 'Add React To A Website',
        label: '添加React网站',
        icon: '',
        path: 'AddReactToAWebsite',
        component: 'AddReactToAWebsite'
      },
      {
        title: 'Create A New React App',
        label: '创建React项目',
        icon: '',
        path: 'CreateANewReactApp',
        component: 'CreateANewReactApp'
      },
      {
        title: 'CDN Links',
        label: 'CDN',
        icon: '',
        path: 'CDNLinks',
        component: 'CDNLinks'
      }
    ]
  },
  {
    title: 'Main Concepts',
    label: '主要理念',
    icon: '',
    path: '/main-concepts',
    children: [
      {
        title: 'Hello World',
        label: 'HelloWorld',
        icon: '',
        path: 'HelloWorld',
        component: 'HelloWorld'
      },
      {
        title: 'Introducing JSX',
        label: 'JSX简介',
        icon: '',
        path: 'IntroducingJSX',
        component: 'IntroducingJSX'
      },
      {
        title: 'Rendering Elements',
        label: '元素渲染',
        icon: '',
        path: 'RenderingElements',
        component: 'RenderingElements'
      },
      {
        title: 'Components And Props',
        label: 'Component & props',
        icon: '',
        path: 'ComponentsAndProps',
        component: 'ComponentsAndProps'
      },
      {
        title: 'State And Lifecycle',
        label: 'state & 生命周期',
        icon: '',
        path: 'StateAndLifecycle',
        component: 'StateAndLifecycle'
      },
      {
        title: 'Handing Events',
        label: '事件处理',
        icon: '',
        path: 'HandingEvents',
        component: 'HandingEvents'
      },
      {
        title: 'Conditional Rendering',
        label: '条件渲染',
        icon: '',
        path: 'ConditionalRendering',
        component: 'ConditionalRendering'
      },
      {
        title: 'Lists And Keys',
        label: '列表 & Keys',
        icon: '',
        path: 'ListsAndKeys',
        component: 'ListsAndKeys'
      },
      {
        title: 'Forms',
        label: '表单',
        icon: '',
        path: 'Forms',
        component: 'Forms'
      },
      {
        title: 'Lifting State Up',
        label: '状态提升',
        icon: '',
        path: 'LiftingStateUp',
        component: 'LiftingStateUp'
      },
      {
        title: 'Composition Vs Inheritance',
        label: '组合 VS 继承',
        icon: '',
        path: 'CompositionVsInheritance',
        component: 'CompositionVsInheritance'
      },
      {
        title: 'Thinking In React',
        label: 'React理念',
        icon: '',
        path: 'ThinkingInReact',
        component: 'ThinkingInReact'
      },
    ]
  },
  {
    title: 'Advanced Guides',
    label: '高阶指引',
    icon: '',
    path: '/advanced-guides',
    children: [
      {
        title: 'Accessibility',
        label: '无障碍',
        icon: '',
        path: 'Accessibility',
        component: 'Accessibility'
      },
      {
        title: 'Code Splitting',
        label: '代码分隔',
        icon: '',
        path: 'CodeSplitting',
        component: 'CodeSplitting'
      },
      {
        title: 'Context',
        label: 'Context',
        icon: '',
        path: 'Context',
        component: 'Context'
      },
      {
        title: 'Error Boundaries',
        label: '错误边界',
        icon: '',
        path: 'ErrorBoundaries',
        component: 'ErrorBoundaries'
      },
      {
        title: 'Forwarding Refs',
        label: 'Forwarding Refs',
        icon: '',
        path: 'ForwardingRefs',
        component: 'ForwardingRefs'
      },
      {
        title: 'Fragments',
        label: '片段',
        icon: '',
        path: 'Fragments',
        component: 'Fragments'
      },
      {
        title: 'Higher Order Components',
        label: '高阶组件',
        icon: '',
        path: 'HigherOrderComponents',
        component: 'HigherOrderComponents'
      },
      {
        title: 'Integrating With Other Libraries',
        label: '集成其他库',
        icon: '',
        path: 'IntegratingWithOtherLibraries',
        component: 'IntegratingWithOtherLibraries'
      },
      {
        title: 'JSX In Depth',
        label: '深入理解JSX',
        icon: '',
        path: 'JSXInDepth',
        component: 'JSXInDepth'
      },
      {
        title: 'Optimizing Performance',
        label: '性能优化',
        icon: '',
        path: 'OptimizingPerformance',
        component: 'OptimizingPerformance'
      },
      {
        title: 'Portals',
        label: '入口',
        icon: '',
        path: 'Portals',
        component: 'Portals'
      },
      {
        title: 'React Without ES6',
        label: 'React不是用ES6',
        icon: '',
        path: 'ReactWithoutES6',
        component: 'ReactWithoutES6'
      },
      {
        title: 'React Without JSX',
        label: 'React不使用JSX',
        icon: '',
        path: 'ReactWithoutJSX',
        component: 'ReactWithoutJSX'
      },
      {
        title: 'Reconciliation',
        label: 'Reconciliation',
        icon: '',
        path: 'Reconciliation',
        component: 'Reconciliation'
      },
      {
        title: 'Refs And The DOM',
        label: 'Refs & DOM',
        icon: '',
        path: 'RefsAndTheDOM',
        component: 'RefsAndTheDOM'
      },
      {
        title: 'Render Props',
        label: 'Render Props',
        icon: '',
        path: 'RenderProps',
        component: 'RenderProps'
      },
      {
        title: 'Static Type Checking',
        label: '静态类型检查',
        icon: '',
        path: 'StaticTypeChecking',
        component: 'StaticTypeChecking'
      },
      {
        title: 'Strict Mode',
        label: '静态mode',
        icon: '',
        path: 'StrictMode',
        component: 'StrictMode'
      },
      {
        title: 'Typechecking With PropTypes',
        label: '使用PropTypes进行类型检查',
        icon: '',
        path: 'TypecheckingWithPropTypes',
        component: 'TypecheckingWithPropTypes'
      },
      {
        title: 'Uncontrolled Components',
        label: '非受控组件',
        icon: '',
        path: 'UncontrolledComponents',
        component: 'UncontrolledComponents'
      },
      {
        title: 'Web Components',
        label: 'Web组件',
        icon: '',
        path: 'WebComponents',
        component: 'WebComponents'
      }
    ]
  },
  {
    title: 'API Reference',
    label: 'API参考',
    icon: '',
    path: '/api-reference',
    children: [
      {
        title: 'React',
        label: 'React',
        icon: '',
        path: 'ReactIntroduce',
        component: 'ReactIntroduce'
      },
      {
        title: 'React Component',
        label: 'React组件',
        icon: '',
        path: 'ReactComponent',
        component: 'ReactComponent'
      },
      {
        title: 'ReactDOM',
        label: 'ReactDOM',
        icon: '',
        path: 'ReactDOMIntroduce',
        component: 'ReactDOMIntroduce'
      },
      {
        title: 'ReactDOMServer',
        label: 'ReactDOMServer',
        icon: '',
        path: 'ReactDOMServerIntroduce',
        component: 'ReactDOMServerIntroduce'
      },
      {
        title: 'DOM Elements',
        label: 'DOM元素',
        icon: '',
        path: 'DOMElements',
        component: 'DOMElements'
      },
      {
        title: 'Synthetic Event',
        label: '合成事件',
        icon: '',
        path: 'SyntheticEvent',
        component: 'SyntheticEvent'
      },
      {
        title: 'Test Utilities',
        label: '功能测试',
        icon: '',
        path: 'TestUtilities',
        component: 'TestUtilities'
      },
      {
        title: 'Shallow Render',
        label: 'Shallow Render',
        icon: '',
        path: 'ShallowRender',
        component: 'ShallowRender'
      },
      {
        title: 'Test Render',
        label: 'Test Render',
        icon: '',
        path: 'TestRender',
        component: 'TestRender'
      },
      {
        title: 'JS Environment Requirements',
        label: 'JS环境要求',
        icon: '',
        path: 'JSEnvironmentRequirements',
        component: 'JSEnvironmentRequirements'
      },
      {
        title: 'Glossary',
        label: '词汇表',
        icon: '',
        path: 'Glossary',
        component: 'Glossary'
      }
    ]
  },
  {
    title: 'Hooks',
    label: 'Hooks',
    icon: '',
    path: '/hooks',
    children: [
      {
        title: 'Introducing',
        label: 'Hooks介绍',
        icon: '',
        path: 'IntroducingHooks',
        component: 'IntroducingHooks'
      },
      {
        title: 'Hooks At A Glance',
        label: '初探Hooks',
        icon: '',
        path: 'HooksAtAGlance',
        component: 'HooksAtAGlance'
      },
      {
        title: 'Using The State Hook',
        label: 'State Hook的使用',
        icon: '',
        path: 'UsingTheStateHook',
        component: 'UsingTheStateHook'
      },
      {
        title: 'Using The Effect Hook',
        label: 'Effect Hook的使用',
        icon: '',
        path: 'UsingTheEffectHook',
        component: 'UsingTheEffectHook'
      },
      {
        title: 'Rules Of Hooks',
        label: 'Hooks规则',
        icon: '',
        path: 'RulesOfHooks',
        component: 'RulesOfHooks'
      },
      {
        title: 'Building Your Own Hooks',
        label: '构建自定义Hooks',
        icon: '',
        path: 'BuildingYourOwnHooks',
        component: 'BuildingYourOwnHooks'
      },
      {
        title: 'Hooks API',
        label: 'Hooks API',
        icon: '',
        path: 'HooksAPIReference',
        component: 'HooksAPIReference'
      },
      {
        title: 'Hooks FAQ',
        label: 'Hooks FAQ',
        icon: '',
        path: 'HooksFAQ',
        component: 'HooksFAQ'
      }
    ]
  },
  {
    title: 'Contributing',
    label: '构建',
    icon: '',
    path: '/contributing',
    children: [
      {
        title: 'How To Contribute',
        label: '怎么样构建',
        icon: '',
        path: 'HowToContribute',
        component: 'HowToContribute'
      },
      {
        title: 'Codebase Overview',
        label: '代码库概述',
        icon: '',
        path: 'CodebaseOverview',
        component: 'CodebaseOverview'
      },
      {
        title: 'Implementation Notes',
        label: '实施说明',
        icon: '',
        path: 'ImplementationNotes',
        component: 'ImplementationNotes'
      },
      {
        title: 'Design Principles',
        label: '设计原理',
        icon: '',
        path: 'DesignPrinciples',
        component: 'DesignPrinciples'
      }
    ]
  },
  {
    title: 'FAQ',
    label: '常见疑难解答',
    icon: '',
    path: '/faq',
    children: [
      {
        title: 'AJAX And APIs',
        label: '使用AJAX',
        icon: '',
        path: 'AJAXAndAPIs',
        component: 'AJAXAndAPIs'
      },
      {
        title: 'Babel JSX And Build Steps',
        label: 'Babel JSX构建步骤',
        icon: '',
        path: 'BabelJSXAndBuildSteps',
        component: 'BabelJSXAndBuildSteps'
      },
      {
        title: 'Passing Functions To Components',
        label: '组件中传递方法',
        icon: '',
        path: 'PassingFunctionsToComponents',
        component: 'PassingFunctionsToComponents'
      },
      {
        title: 'Component State',
        label: '组件状态',
        icon: '',
        path: 'ComponentState',
        component: 'ComponentState'
      },
      {
        title: 'Styling And CSS',
        label: 'Style & CSS',
        icon: '',
        path: 'StylingAndCSS',
        component: 'StylingAndCSS'
      },
      {
        title: 'File Structure',
        label: '文件结构',
        icon: '',
        path: 'FileStructure',
        component: 'FileStructure'
      },
      {
        title: 'Versioning Policy',
        label: '版本控制策略',
        icon: '',
        path: 'VersioningPolicy',
        component: 'VersioningPolicy'
      },
      {
        title: 'Virtual DOM And Internals',
        label: '虚拟DOM介绍',
        icon: '',
        path: 'VirtualDOMAndInternals',
        component: 'VirtualDOMAndInternals'
      }
    ]
  }
]

export default config