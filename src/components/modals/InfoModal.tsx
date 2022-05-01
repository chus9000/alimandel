import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="Como jugar" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Adivina la palabra en 6 intentos. Después de cada intento, el color de las letras cambiará para mostrarte como de cerca estuviste de acertar.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="T"
          status="correct"
        />
        <Cell value="E" />
        <Cell value="L" />
        <Cell value="A" />
        <Cell value="S" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        La letra T está en la palabra y está en la posición justa.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="M" />
        <Cell value="A" />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="T"
          status="present"
        />
        <Cell value="O" />
        <Cell value="N" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        La letra T está en la palabra, pero en otra posición.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="V" />
        <Cell value="A" />
        <Cell value="G" />
        <Cell isRevealing={true} isCompleted={true} value="U" status="absent" />
        <Cell value="E" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        La letra U no está en la palabra en ninguna posición.
      </p>

      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
        Esta es una versión open source del juego de adivinar palabras que todos conocemos y amamos -{' '}
        <a
          href="https://github.com/cwackerfuss/react-wordle"
          className="underline font-bold"
        >
          puedes ver el código aquí
        </a>{' '}
      </p>
    </BaseModal>
  )
}
