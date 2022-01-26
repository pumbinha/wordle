import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const AboutModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal
      title="Acerca de Wordle (ES)"
      isOpen={isOpen}
      handleClose={handleClose}
    >
      <p className="text-sm text-gray-500">
        Éste es un clon open source del juego Wordle
        <br />
        <br />
        <a
          href="https://github.com/hannahcode/wordle"
          className="underline font-bold"
        >
          Accede al código fuente aquí
        </a>{' '}
        <br />
        <br />o <br />
        <br />{' '}
        <a
          href="https://www.powerlanguage.co.uk/wordle/"
          className="underline font-bold"
        >
          Juega al original aquí
        </a>
      </p>
    </BaseModal>
  )
}
