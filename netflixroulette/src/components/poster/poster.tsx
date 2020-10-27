import * as React from 'react';
import posterNotAvailable from '../../../assets/image-not-available.png';

interface IPosterProps {
  classes: string,
  title: string,
  poster_path: string
}

const Poster:React.FC<IPosterProps> = ({title, poster_path, classes}) => {

  const [image, setImage ] = React.useState<string>(null);

  React.useEffect(() => {
    setImage(poster_path)
  }, [poster_path])

  return (
    <img className={classes}
      alt={`The movie titled: ${title}`}
      src={image}
      onError={() => setImage(posterNotAvailable)}
    />
  )
}

export default Poster;
