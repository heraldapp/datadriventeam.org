// Icons
import IconMagic from '~/icons/Magic';
import IconHandHoldingHeart from '~/icons/HandHoldingHeart';
import IconFire from '~/icons/Fire';
import IconChartLine from '~/icons/ChartLine';

// illustrations
import IllustrationCloche from '~/illustrations/Cloche';
import IllustrationPainting from '~/illustrations/Painting';
import IllustrationContract from '~/illustrations/Contract';
import IllustrationFlying from '~/illustrations/Flying';

export default {
  problem: {
    title: 'The Problem',
    description: `Everyone knows user feedback is an essential component to building products customer love. But how do you turn qualitative user feedback into quantifiable and actionable data?`,
    color: 'PURPLE_DARK',
    icon: IconFire,
    illustration: IllustrationFlying,
  },
  process: {
    title: 'The Process',
    description: `How do high-functioning startups deal with this problem? Insights from our conversations with 50+ founders and leaders at customer-obssessed companies.`,
    color: 'ORANGE',
    icon: IconMagic,
    illustration: IllustrationPainting,
  },
  implementation: {
    title: 'Implementation',
    description: `Let's implement these best practices with your team. We provide a step-by-step guide along with an Airtable template to become data driven with your own user feedback.`,
    color: 'BLUE_LIGHT',
    icon: IconChartLine,
    illustration: IllustrationContract,
  },
  help: {
    title: `How We Can Help`,
    description: `At Herald, we’re building software that helps your team quantify user feedback and bring these best practices to life. It’s the easiest way to stay data driven.`,
    color: 'PURPLE_LIGHT',
    icon: IconHandHoldingHeart,
    illustration: IllustrationCloche,
  },
};
