import { getBannerAds } from "@/actions/promo";
import { Block } from "./Block";

export const Banner = async () => {
  const bannerAds = await getBannerAds();
  return (
    <div className="sec-banner bg0 p-t-80 p-b-80">
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
            title="Bones"
            details="Nova Trend"
            url="/produtos"
            imageUrl="/images/banner-03.jpg"
          /> */}
        </div>
      </div>
    </div>
  );
};
