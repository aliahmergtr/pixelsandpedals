import { HeaderTrack } from '@/components/HeaderForCarousels/HeaderTrack';
import { Welcome } from '../components/Welcome/Welcome';
import TrackPage from '../components/TrackSection/Track.page';
import BikeRestoration from '@/components/BikeRestorationSection/BikeRestoration.page';
import { HeaderBike } from '@/components/HeaderForCarousels/HeaderBike';

export function HomePage() {
  return (
    <>
      <HeaderBike />
      <BikeRestoration />
      <HeaderTrack />
      <TrackPage />
    </>
  );
}
