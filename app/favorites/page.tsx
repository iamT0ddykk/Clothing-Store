import { Card } from "../Components/Card";
import { PresetComponent } from "../Components/PresetComponent";
import { itemsInfo } from "../items/itemsInfo";

export default function Favorites() {
  return (
    <>
      <PresetComponent>
        <div className="p-5">
          {" "}
          <h1 className="text-4xl font-bold">Suas Roupas Favoritas</h1>
          <div className="flex">
            {itemsInfo.map((item) => {
              return (
                <Card
                  key={item.id}
                  img={item.img}
                  title={item.title}
                  subtitle={item.subtitle}
                  price={item.price}
                  id={item.id}
                ></Card>
              );
            })}
          </div>
        </div>
      </PresetComponent>
    </>
  );
}
