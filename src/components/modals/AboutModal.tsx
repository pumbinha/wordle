import { BaseModal } from './BaseModal'
import {
  ABOUT_GAME_MESSAGE,
  ABOUT_FIRST_BLOCK,
  ABOUT_SECOND_BLOCK,
  ABOUT_THIRD_BLOCK,
} from '../../constants/strings'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const AboutModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal
      title={ABOUT_GAME_MESSAGE}
      isOpen={isOpen}
      handleClose={handleClose}
    >
      <p className="text-sm text-gray-500">
        {ABOUT_FIRST_BLOCK}
        <br />
        <br />
        <a
          href="https://github.com/hannahcode/wordle"
          className="underline font-bold"
        >
          {ABOUT_SECOND_BLOCK}
        </a>{' '}
        <br />
        <br />o <br />
        <br />{' '}
        <a
          href="https://www.powerlanguage.co.uk/wordle/"
          className="underline font-bold"
        >
          {ABOUT_THIRD_BLOCK}
        </a>
      </p>
    </BaseModal>
  )
}
