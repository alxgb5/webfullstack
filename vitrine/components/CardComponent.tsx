type CardComponentProps = {
  intro: string;
  title: string;
}

const CardComponent: React.FC<CardComponentProps> = (props) => {
  const { intro, title } = props; 
  return (
    <div className="card">
      <section>
        <p className="intro">
          <span className="arrow">▷</span> <span dangerouslySetInnerHTML={{ __html: intro }}></span>
        </p>
        <hr className="divider" />
      </section>
      <section>
        <h1>{title}</h1>

        {props.children}
      </section>
    </div>
  )
}

export default CardComponent;