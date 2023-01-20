import '../styles/CardComponent.scss';
type CardComponentProps = {
  title: string;
  children: JSX.Element;
};

const CardComponent: React.FC<CardComponentProps> = (props) => {
  const { title, children } = props;
  return (
    <div className="card">
      <h1>{title}</h1>

      {children}
    </div>
  );
};

export default CardComponent;