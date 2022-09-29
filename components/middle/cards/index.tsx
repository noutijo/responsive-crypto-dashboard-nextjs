import CardItem from "./CardItem";

export default function Cards() {
  return (
    <>
      <div className="mt-4 grid grid-cols-[1fr] lg:grid-cols-[1fr_1fr_1fr] gap-6">
        <CardItem />
        <CardItem />
        <CardItem />
      </div>
    </>
  );
}
