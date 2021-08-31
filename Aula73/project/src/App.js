import './App.css';
import { Aluno } from './components/Aluno';
import { Card } from './components/Card';
import { ComProps } from './components/ComProps';
import { Familia } from './components/Familia';
import { ListaAlunos } from './components/ListaAlunos';
import { MembroFamilia } from './components/MembroFamilia';
import { ParouImpar } from './components/ParouImpar';
import { PrimeiroComponente } from './components/PrimeiroComponente';
import { Notificacoes } from './components/Notificacoes'
import { ManipulandoEventos } from './components/ManipulandoEventos';
import { Relogio } from './components/Relogio';
import { ValorAleatorio } from './components/ValorAleatorio';
import { ComponentesControlados } from './components/ComponentesControlados'
import { Contador } from './components/Contador';

function App() {
    return (
        <div className="App">
            <h1>Hello World!</h1>

            <div className="cards">
                <Card titulo="Primeiro componente" cor="#F24464">
                    <PrimeiroComponente />
                </Card>

                <Card titulo="Componente com Props">
                    <ComProps mensagem="Estou sendo enviado pelas props" />
                    <ComProps mensagem="Uau Outra props" />
                </Card>

                <Card titulo="Aluno" cor="red">
                    <Aluno nome="Paulo" media={9.5} />
                    <Aluno nome="Rogerio" media={2.5} />
                    <Aluno nome="Pedro" media={1.5} />
                </Card>

                <Card titulo="Lista Alunos" cor="blue">
                    <ListaAlunos />
                </Card>

                <Card titulo="Familia" cor="green">
                    <Familia sobrenome="da Silva">
                        <MembroFamilia nome="Ana" />
                        <MembroFamilia nome="Paulo" />
                        <MembroFamilia nome="Rogerio" />
                    </Familia>
                </Card>

                <Card titulo="Renderização Condicional" cor="#F56667">
                    <ParouImpar numero="10" />
                    <ParouImpar numero="5" />
                    <hr />
                    <Notificacoes mensagens={["Oi"]} />
                </Card>

                <Card titulo="Manipulando Eventos">
                    <ManipulandoEventos />
                </Card>
                <Card titulo="State" cor="#5D5685">
                    <Relogio />
                    <hr />
                    <ValorAleatorio />
                </Card>
                <Card titulo="Componente Controlado">
                    <ComponentesControlados />
                </Card>
                <Card titulo="State Children">
                    <Contador />
                </Card>
            </div>
        </div>
    );
}

export default App;
