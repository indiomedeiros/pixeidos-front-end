import { SearchEntryInput } from "./searchInputStyled";

export default function SearchInput(props) {
  return (
    <SearchEntryInput
      type={"text"}
      value={props.searchData}
      onChange={props.onChange}
      name={props.name}
      placeholder={props.placeholder}
      pattern={props.pattern}
      title= {props.title}
    />
  );
}
