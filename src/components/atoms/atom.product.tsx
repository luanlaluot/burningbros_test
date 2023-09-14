import React, { ForwardedRef } from "react";
import { CurrencyHelper } from "../../helpers";

const Product = React.forwardRef(
  (props: { item: any }, ref: ForwardedRef<HTMLDivElement>) => {
    const { item } = props;
    return (
      <div
        ref={ref}
        className="flex row p-6 bg-slate-300 cursor-pointer hover:bg-slate-200"
      >
        <img
          alt={item.thumbnail}
          src={item.thumbnail}
          className="object-cover min-w-[100px] min-h-[100px] h-[100px] w-[100px] max-h-[100px] max-w-[100px] rounded-lg"
        />

        <div className="ml-5 gap-2">
          <div className="mb-2">
            <p className="inline p-2 text-sm bg-red-600 mb-2 text-white rounded-md">
              - {item.discountPercentage} %
            </p>
          </div>
          <p className="mb-2 text-lg font-semibold">{item.title}</p>
          <p className="mb-2 text-sm">{item.description}</p>
          <p className="mb-2 text-2xl font-semibold">
            {CurrencyHelper.dollarFormatter(item.price)}
          </p>
        </div>
      </div>
    );
  }
);

export default Product;
