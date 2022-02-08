import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'
import {
  HOW_TO_PLAY,
  HELP_FIRST_BLOCK,
  HELP_SECOND_BLOCK,
  HELP_THIRD_BLOCK,
  HELP_FOURTH_BLOCK,
} from '../../constants/strings'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title={HOW_TO_PLAY} isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        {HELP_FIRST_BLOCK}
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="G" status="correct" />
        <Cell value="A" />
        <Cell value="T" />
        <Cell value="O" />
        <Cell value="S" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        {HELP_SECOND_BLOCK}
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="V" />
        <Cell value="O" />
        <Cell value="C" status="present" />
        <Cell value="A" />
        <Cell value="L" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        {HELP_THIRD_BLOCK}
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="C" />
        <Cell value="A" />
        <Cell value="N" />
        <Cell value="T" status="absent" />
        <Cell value="O" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        {HELP_FOURTH_BLOCK}
      </p>
    </BaseModal>
  )
}
