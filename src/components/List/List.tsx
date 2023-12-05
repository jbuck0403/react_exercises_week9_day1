import "./List.css";

interface ListProps {
  listItems: string[];
}

const List = (props: ListProps) => {
  const displayList = () => {
    const formatListItem = (item: string) => {
      return `${item}`;
    };
    return props.listItems.map((item, idx) => {
      return (
        <li key={idx} className="list-item">
          {formatListItem(item)}
        </li>
      );
    });
  };
  return <ol>{displayList()}</ol>;
};
export default List;
