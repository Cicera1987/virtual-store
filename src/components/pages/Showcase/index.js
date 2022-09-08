import { ContaineItem, ItemProdutos } from './style'
import Catalogo from '../../molecules/Modal/ModalCreate/Catalogo'

const Showcase = ({products}) => {

  return (

    <ContaineItem>
        <ItemProdutos>
          <Catalogo key={products} produtcts={products} />
        </ItemProdutos>
      </ContaineItem>

  )
}

export default Showcase
