import { debounce } from "lodash";
import React, { ChangeEvent, ForwardedRef } from "react";

const DEBOUNCE_SEARCH_SECOND = 500;
const SearchInput = React.forwardRef(
  (
    {
      value,
      onChangeText,
    }: { value: string; onChangeText(searchText: string): void },
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
      return onChangeText(event.target.value);
    };
    const debouncedOnChange = debounce(onChange, DEBOUNCE_SEARCH_SECOND);
    return (
      <input
        ref={ref}
        className="p-5 mb-5"
        placeholder="Search..."
        onChange={debouncedOnChange}
      />
    );
  }
);

export default SearchInput;
