import Banner from './components/Banner/index';
import People from './components/People/index';
import Features from './components/Features/index';
import Business from './components/Business/index';
import Pricing from './components/Pricing/index';


export default function Home() {
  return (
    <main>
      <Banner />
      <Business />
      <People />
      <Features />
      <Pricing />
    </main>
  )
}
