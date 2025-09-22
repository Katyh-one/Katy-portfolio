import { HeroView } from "./Hero.view";
import { useHeroContent } from "./hook/hook";

export const HeroController: React.FC = () => {
    const { data, loading, error } = useHeroContent();

    if(!data || loading || error) {
        return null;
    }
  return <HeroView data={data} />;
}