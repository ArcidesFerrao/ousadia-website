import { getBannerAds } from "@/actions/promo";
import { Block } from "./Block";

export const Banner = async () => {
  const bannerAds = await getBannerAds();
  return (
    <div className="sec-banner bg0 p-t-80 p-b-50">
      <div className="container">
        <div className="row">
          {bannerAds &&
            bannerAds.map((ad) => (
              <Block
                key={ad.id}
                title={ad.title}
                details={ad.description}
                url={`/categorias/${ad.categoryId}`}
                imageUrl={ad.imageUrl}
              />
            ))}
          {/* <Block
            title="Collabs"
            details="Mais Recentes"
            url="/produtos"
            imageUrl="/images/banner-02.jpg"
          /> */}
          <Block
            title="Bones"
            details="Nova Trend"
            url="/produtos"
            imageUrl="/images/banner-03.jpg"
          />
        </div>
      </div>
    </div>
  );
};
