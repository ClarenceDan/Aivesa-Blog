import React from 'react'
import clsx from 'clsx'
import Translate, { translate } from '@docusaurus/Translate'

import styles from './styles.module.scss'

import WebDeveloperSvg from '@site/static/svg/undraw_web_developer.svg'
import OpenSourceSvg from '@site/static/svg/undraw_open_source.svg'
import SpiderSvg from '@site/static/svg/undraw_spider.svg'
import SectionTitle from '../SectionTitle'

type FeatureItem = {
  title: string
  Svg: React.ComponentType<React.ComponentProps<'svg'>>
  description: JSX.Element
}

const FeatureList: FeatureItem[] = [
  {
    title: translate({
      id: 'homepage.feature.developer',
      message: '全面的知识库',
    }),
    Svg: WebDeveloperSvg,
    description: (
      <>
        Aivesa 知识库学习并吸收了大量学习资料，并基于自身产品实践进行优化，从而提供更贴近使用环境的知识库内容。
      </>
    ),
  },
  {
    title: translate({
      id: 'homepage.feature.spider',
      message: '人工智能探索',
    }),
    Svg: SpiderSvg,
    description: (
      <>
        Aivesa致力于探索人类与人工智能之间的联系，希望能简化人类与人工智能交流的过程。
      </>
    ),
  },
  {
    title: translate({
      id: 'homepage.feature.enthusiast',
      message: '开源爱好者',
    }),
    Svg: OpenSourceSvg,
    description: (
      <>
        Aivesa 基于开源社区成长，我们将所有受益的开源代码列出在 Friends 页面。
      </>
    ),
  },
]

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col', styles.feature)}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--left padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section
      className={clsx(styles.featureContainer, 'container padding-vert--sm')}
    >
      <SectionTitle icon={'ri:map-pin-user-line'}>
        <Translate id="homepage.feature.title">Feature</Translate>
      </SectionTitle>
      <div className={clsx('row', styles.features)}>
        {FeatureList.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </div>
    </section>
  )
}
