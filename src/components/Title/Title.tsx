import "./Title.css";

interface TitleProps {
  list: string[];
  title: string;
}

const Title = (props: TitleProps) => {
  const titleText =
    props.list.length == 0 ? "Nothing to see here..." : props.title;
  return <h2 className="title">{titleText}</h2>;
};
export default Title;
