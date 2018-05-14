import React from 'react'
import { ListGroupItem } from 'reactstrap'
import potos from '../data/dataArticle';

const poto = potos[0]

const Article = (poto) => 
<ListGroupItem>
    <img src={poto.picture} alt={poto.name} />
</ListGroupItem>

export default Article