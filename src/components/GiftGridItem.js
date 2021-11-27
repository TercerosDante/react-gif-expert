export const GiftGridItem = ({ title, url }) => {
  return (
    <div className='card animate__animated animate__zoomInDown'>
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
}
