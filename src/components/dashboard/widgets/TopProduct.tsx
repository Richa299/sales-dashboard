const products = [
  {
    id: "01",
    name: "Home Decor Range",
    percentage: "45%",
    progress: 72,
    color: "#3B82F6",
  },
  {
    id: "02",
    name: "Disney Princess Pink Bag 18'",
    percentage: "29%",
    progress: 55,
    color: "#22C55E",
  },
  {
    id: "03",
    name: "Bathroom Essentials",
    percentage: "18%",
    progress: 48,
    color: "#8B5CF6",
  },
  {
    id: "04",
    name: "Apple Smartwatches",
    percentage: "25%",
    progress: 35,
    color: "#F59E0B",
  },
];

const TopProductsTable = () => {
  return (
    <div className="w-full h-full">
      <div
        className="
          grid
          grid-cols-[60px_1.8fr_1.4fr_100px]

          pb-[18px]
          border-b
          border-[#F5F5F7]

          mb-[18px]
        "
      >
        <span
          className="
            text-[13px]
            font-medium
            text-[#A3AED0]
          "
        >
          #
        </span>

        <span
          className="
            text-[13px]
            font-medium
            text-[#A3AED0]
          "
        >
          Name
        </span>

        <span
          className="
            text-[13px]
            font-medium
            text-[#A3AED0]
          "
        >
          Popularity
        </span>

        <span
          className="
            text-[13px]
            font-medium
            text-[#A3AED0]
          "
        >
          Sales
        </span>
      </div>

      <div className="flex flex-col gap-[26px]">
        {products.map((product) => (
          <div
            key={product.id}
            className="
              grid
              grid-cols-[60px_1.8fr_1.4fr_100px]

              items-center
            "
          >
            <span
              className="
                text-[14px]
                font-medium
                text-[#737791]
              "
            >
              {product.id}
            </span>

            <span
              className="
                text-[14px]
                font-medium
                text-[#151D48]
              "
            >
              {product.name}
            </span>

            <div
              className="
                w-[120px]
                h-[8px]

                rounded-full

                bg-[#F5F5F7]

                overflow-hidden
              "
            >
              <div
                className="h-full rounded-full"
                style={{
                  width: `${product.progress}%`,
                  backgroundColor: product.color,
                }}
              />
            </div>

            <div
              className="
                w-[56px]
                h-[28px]

                rounded-full
                border

                flex
                items-center
                justify-center

                text-[13px]
                font-medium
              "
              style={{
                borderColor: product.color,
                color: product.color,
              }}
            >
              {product.percentage}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopProductsTable;
