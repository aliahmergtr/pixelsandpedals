import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { Router } from './Router';
import { HeaderMegaMenu } from './components/HeaderMegaMenu/HeaderMegaMenu';
import '@mantine/carousel/styles.css';
import { HeroImageRight } from './components/HeroImageRight/HeroImageRight';

export default function App() {
  return (
    <MantineProvider defaultColorScheme="light">
      <HeaderMegaMenu />
      <HeroImageRight />
      <Router />
    </MantineProvider>
  );
}