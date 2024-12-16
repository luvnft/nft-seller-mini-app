import { Link } from "react-router-dom";
import { CatalogItem as CatalogItemModel } from "@/types/CatalogItem";

export function CatalogItem({ data }: { data: CatalogItemModel }) {
  return (
    <Link
      to={`/catalog/${data.index}`}
      className="flex w-full flex-col overflow-hidden rounded-lg bg-card"
    >
      <img src={data.image} className="aspect-square w-full object-cover" />
      <div className="flex flex-col p-2">
        <p className="line-clamp-2 text-base font-semibold">{data.name}</p>
        <p className="text-tg-hint-foreground line-clamp-3 text-sm">
          {data.description}
        </p>
      </div>
    </Link>
  );
}
