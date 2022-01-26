import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="Cómo jugar" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500">
        Adivina la palabra en seis intentos. Cada intento debe ser una palabra
        válida de 5 letras. Pulsa ENTER para enviar. Después de cada intento el
        color de las letras cambia para mostrar qué tan cerca estás de acertar
        la palabra.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="G" status="correct" />
        <Cell value="A" />
        <Cell value="T" />
        <Cell value="O" />
        <Cell value="S" />
      </div>
      <p className="text-sm text-gray-500">
        La letra G está en la palabra y en la posición correcta.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="V" />
        <Cell value="O" />
        <Cell value="C" status="present" />
        <Cell value="A" />
        <Cell value="L" />
      </div>
      <p className="text-sm text-gray-500">
        La letra C está en la palabra pero en la posición incorrecta.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="C" />
        <Cell value="A" />
        <Cell value="N" />
        <Cell value="T" status="absent" />
        <Cell value="O" />
      </div>
      <p className="text-sm text-gray-500">
        La letra O no está en la palabra. Puede haber letras repetidas.
      </p>
    </BaseModal>
  )
}
