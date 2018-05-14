import React from 'react'
import { ListGroupItem } from 'reactstrap'

const Article = (poto) => 
<ListGroupItem>
    <img src={poto.picture} alt={poto.name} />
</ListGroupItem>

export default Article