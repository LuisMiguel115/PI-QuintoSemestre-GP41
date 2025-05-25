import Menu from '../../components/menu';
import { useParams } from 'react-router-dom';
import Tarefas from '../../components/Tarefas'
import Cabecalho from '../../components/cabecalho'
import  ModalTarefa  from '../../components/modalTarefa';
import './Index.css';

const Index = () => {
const {idParam} = useParams();

  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        <Menu selecionado='home' />
        <div className='dashboard-content-center'>
        <Cabecalho/>
        <Tarefas fklista = {idParam}/>
        <ModalTarefa fklista = {idParam}/>
        </div>
      </div>
    </div>
  );
};

export default Index;