import CategoriesCompony from "./components/home/CategoriesCompony";
import Componies from "./components/home/Componies";
import FindeCompony from "./components/home/FindeCompony";
import HomeHeroSec from "./components/home/HomeHeroSec";
import HomeTitel from "./components/home/HomeTitel";
import Jobopportunities from "./components/home/Jobopportunities";
import Numbercontent from "./components/home/Numbercontent";

async function getData() {
  return {
    investors: 200,
    activeCompanies: 120,
    investmentAmount: 5000
  };
}

export default async function Home() {
  const data = await getData();
  return (
    <main>
      <HomeTitel />
      <HomeHeroSec />
      <Numbercontent data={data} />
      <FindeCompony />
      <CategoriesCompony />
      <Componies />
      {/* <Jobopportunities /> */}
    </main>
  );
}
