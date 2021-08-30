import { Aluno } from "../Aluno"

const alunos = [
  { id: 1, nome: "Pedro", media: 7.5 },
  { id: 2, nome: "Paulo", media: 3.5 },
  { id: 3, nome: "Ruan", media: 1.5 }
]

export function ListaAlunos() {
  return (
    <>
      {
        alunos.map(aluno => {
          return (
            <Aluno key={aluno.id} nome={aluno.nome} media={aluno.media}/>
          )
        })
      }
    </>
  )
}