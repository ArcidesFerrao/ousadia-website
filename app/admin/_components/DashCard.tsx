import Image from "next/image";

export const InfoTotalCard = ({
  title,
  amount,
  url,
}: {
  title: string;
  amount: number;
  url: string;
}) => {
  return (
    <div className="flex flex-col mb-4 gap-5 p-4 min-w-56 border rounded-md opacity-70 hover:opacity-95">
      <p className=" hover:underline">
        <a className="cursor " href={url}>
          {title}
        </a>
      </p>

      <div className="flex gap-2 justify-between">
        <h4>MZN</h4>
        <h4>{amount}.00</h4>
      </div>
    </div>
  );
};
export const InfoCard = ({
  title,
  value,
  url,
}: {
  title: string;
  value: number;
  url: string;
}) => {
  return (
    <div className="flex flex-col mb-4 gap-5 p-4 min-w-56 border rounded-md opacity-70 hover:opacity-95">
      <p className=" hover:underline">
        <a className="cursor " href={url}>
          {title}
        </a>
      </p>
      <h4>{value}</h4>
    </div>
  );
};

export const ProductDashCard = ({
  title,
  price,
  orders,
  imageUrl,
}: {
  title: string;
  price: number;
  orders: number;
  imageUrl: string;
}) => {
  return (
    <div className="flex gap-5 mb-4 p-4 min-w-40 border rounded-md opacity-70 hover:opacity-95">
      <Image src={imageUrl} width={80} height={80} alt="product preview" />
      <div className="flex flex-col gap-2 justify-between">
        <h6>{title}</h6>
        <h5>MZN {price}.00</h5>
        <p>{orders} pedidos</p>
      </div>
    </div>
  );
};

export const PromoCard = ({ promo }: { promo: string }) => {
  return (
    <div className="flex flex-col bg3 gap-5 px-4 py-2 rounded-sm min-w-40 opacity-70 hover:opacity-95">
      <h5>Top Bar Promo</h5>
      <p>{promo}</p>
    </div>
  );
};

export const BannerCard = ({
  imageUrl,
  title,
  detail,
}: {
  imageUrl: string;
  title: string;
  detail: string;
}) => {
  return (
    <div className="flex gap-5 bg3 p-4 mb-4 rounded-md border  min-w-64 opacity-70 hover:opacity-95 ">
      <Image src={imageUrl} alt="banner card image" width={100} height={80} />
      <div className="flex flex-col gap-5">
        <h5>{title}</h5>
        <p>{detail}</p>
      </div>
    </div>
  );
};

export const SliderCard = ({
  title,
  detail,
  imageUrl,
}: {
  title: string;
  detail: string;
  imageUrl: string;
}) => {
  return (
    <div className="bg3 flex gap-5 p-4 mb-4 rounded-md border  min-w-64 opacity-70 hover:opacity-95">
      <Image
        src={imageUrl}
        alt="slider image preview"
        width={100}
        height={80}
      />
      <div className="flex flex-col gap-2 justify-between">
        <h5>{title}</h5>
        <p>{detail}</p>
      </div>
    </div>
  );
};
