export const GAME_TITLE = 'Wordle (ES)'

export const WIN_MESSAGES = ['¡Buen trabajo!', '¡Genial', '¡Bien hecho!']
export const GAME_COPIED_MESSAGE = 'Juego copiado en el portapapeles'
export const ABOUT_GAME_MESSAGE = 'Acerca de Wordle (ES)'
export const NOT_ENOUGH_LETTERS_MESSAGE = 'No hay suficientes letras'
export const WORD_NOT_FOUND_MESSAGE = 'Palabra no encontrada'
export const CORRECT_WORD_MESSAGE = (solution: string) =>
  `La palabra era ${solution}`
export const ENTER_TEXT = 'Enter'
export const DELETE_TEXT = 'Borrar'
export const STATISTICS_TITLE = 'Estadísticas'
export const GUESS_DISTRIBUTION_TEXT = 'Distribución de aciertos'
export const NEW_WORD_TEXT = 'Nueva palabra en'
export const SHARE_TEXT = 'Compartir'
export const TOTAL_TRIES_TEXT = 'Partidas jugadas'
export const SUCCESS_RATE_TEXT = 'Porcentaje de victorias'
export const CURRENT_STREAK_TEXT = 'Racha actual'
export const BEST_STREAK_TEXT = 'Mejor racha'
export const HOW_TO_PLAY = 'Cómo jugar'
export const HELP_FIRST_BLOCK =
  'Adivina la palabra en seis intentos. Cada intento debe ser una palabra válida de 5 letras. Pulsa ENTER para enviar. Después de cada intento el color de las letras cambia para mostrar qué tan cerca estás de acertar la palabra.'
export const HELP_SECOND_BLOCK =
  'La letra G está en la palabra y en la posición correcta.'
export const HELP_THIRD_BLOCK =
  'La letra C está en la palabra pero en la posición incorrecta.'
export const HELP_FOURTH_BLOCK =
  'La letra T no está en la palabra. Puede haber letras repetidas.'
export const ABOUT_FIRST_BLOCK = 'Éste es un clon open source del juego Wordle'
export const ABOUT_SECOND_BLOCK = 'Accede al código fuente aquí'
export const ABOUT_THIRD_BLOCK = 'Juega al original aquí'
