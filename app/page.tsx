import { Card } from "@/components";

export default function Home(): React.JSX.Element {
  return (
    <>
      <Card
        title={"Как работать с CSS Grid"}
        paragraph={
          "Грид-раскладка (CSS Grid Layout) представляет собой двумерную систему сеток в CSS. Гриды подойдут и для верстки основных областей страницы.."
        }
        imageUrl={"/Image.jpg"}
        likeCount={5}
        lastTime={"1 месяц назад"}
        spendTime={"3 минуты"}
        href={"#"}
      ></Card>
    </>
  );
}
