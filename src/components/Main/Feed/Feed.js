import React from 'react'
import FeedContainer from './styles'

import axios from 'axios'
import md5 from 'md5'

const Feed = () => {

  const [personagens, setPersonagens] = React.useState([]);


  const ts = Number(new Date());
  const publicKey ='4767b208db33c1f5d476c04ea093dbc7';
  const privateKey = 'ada0945a61416be4367fe752a009be0e8238e30c';
  const hash = md5(ts + privateKey + publicKey);


  React.useEffect(() =>{

    const fetchItems = async ()=>{

      const result = await axios(`http://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`)
      setPersonagens(result.data.data.results)
      console.log(result.data.data.results)
    }

    fetchItems();
  }, [])


  return (
    <FeedContainer>
      {personagens.map((personagem)=>(
        <div key={personagem.id}>
            <p >{personagem.title}</p>
            <img src={`${personagem.thumbnail.path}.${personagem.thumbnail.extension}`} alt="" />
        </div>
      ))}
    </FeedContainer>
  )
}

export default Feed;