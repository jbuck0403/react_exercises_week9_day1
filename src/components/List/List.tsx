import "./List.css";

interface ListProps {
  listItems: string[];
}

const List = (props: ListProps) => {
  const title = (str: string) => {
    return str[0].toUpperCase() + str.slice(1);
  };

  const displayList = () => {
    const formatListItem = (item: string) => {
      return `${item}`;
    };
    return props.listItems.map((item, idx) => {
      return (
        <li key={idx} className="list-item">
          {title(formatListItem(item))}
        </li>
      );
    });
  };
  return <ol>{displayList()}</ol>;
};
export default List;
