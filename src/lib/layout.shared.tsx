import { Logo } from '@/components/logo';
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: <Logo />,
    },
    githubUrl: 'https://github.com/jamiedavenport/feedback',
    links: [
      {
        text: 'Sign Up',
        url: 'https://tally.so/r/3xeovk',
        type: 'button'
      },
    ],
  };
}
