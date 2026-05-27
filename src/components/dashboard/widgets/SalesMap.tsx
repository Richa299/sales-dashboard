import worldMap from "../../../assets/sales-map.svg";

const SalesMap = () => {
  return (
    <div
      className="
        w-full
        h-full

        flex
        items-center
        justify-center
      "
    >
      <img
        src={worldMap}
        alt="world map"
        className="
          w-full
          h-auto
          object-contain
        "
      />
    </div>
  );
};

export default SalesMap;
