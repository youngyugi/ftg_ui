import DataLineChart from "@/components/chart";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface card_item {
  title: string;
  value: number;
}

const dashboard_items: card_item[] = [
  {
    title: "total phones",
    value: 72,
  },
  {
    title: "working phones",
    value: 64,
  },
  {
    title: "total groups",
    value: 8,
  },
  {
    title: "errors",
    value: 0,
  },
];

const Home = () => {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0 h-full">
      <div className="grid auto-rows-min gap-4 md:grid-cols-4">
        {dashboard_items.map((item) => {
          return (
            <Card
              key={item.title}
              className="rounded-xl bg-muted/50 flex flex-col">
              <CardHeader>
                <CardTitle className="capitalize">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex-1 flex justify-center items-center text-responsiveBody">
                  <p
                    className={
                      item.value > 0 && item.title != "errors"
                        ? "text-[#1ed760]"
                        : item.title == "errors" && item.value > 0
                          ? "text-red-500"
                          : "text-[#1ed760]"
                    }>
                    {item.value}
                  </p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
      <Card className="flex-grow rounded-xl bg-muted/50">
        <DataLineChart />
      </Card>
    </div>
  );
};

export default Home;
