export const GAME_TITLE = process.env.REACT_APP_GAME_NAME!

export const WIN_MESSAGES = ['¡Bien hecho!', '¡Muy bien!', '¡Maravilloso!']
export const GAME_COPIED_MESSAGE = 'Copiado en el portapapeles'
export const NOT_ENOUGH_LETTERS_MESSAGE = 'Pon alguna letra más, guapi'
export const WORD_NOT_FOUND_MESSAGE = 'Prueba una palabra de verdad, anda'
export const HARD_MODE_ALERT_MESSAGE =
  '¡El modo dificil solo se puede activar al principio!'
export const HARD_MODE_DESCRIPTION =
  'Las pistas tienes que utilizarse en los siguientes intentos'
export const HIGH_CONTRAST_MODE_DESCRIPTION = 'Para mejoras en la visión de colores'
export const CORRECT_WORD_MESSAGE = (solution: string) =>
  `La palabra era ${solution}`
export const WRONG_SPOT_MESSAGE = (guess: string, position: number) =>
  `Tienes que usar ${guess} en la posición ${position}`
export const NOT_CONTAINED_MESSAGE = (letter: string) =>
  `El intento tiene que tener la letra ${letter}`
export const ENTER_TEXT = 'Enter'
export const DELETE_TEXT = 'Borrar'
export const STATISTICS_TITLE = 'Estadísticas'
export const GUESS_DISTRIBUTION_TEXT = 'Distribución de intentos'
export const NEW_WORD_TEXT = 'Nueva palabra en'
export const SHARE_TEXT = 'Compartir'
export const TOTAL_TRIES_TEXT = 'Intentos totales'
export const SUCCESS_RATE_TEXT = 'Ratio de acierto'
export const CURRENT_STREAK_TEXT = 'Puntuación actual'
export const BEST_STREAK_TEXT = 'Mejor puntuación'
export const DISCOURAGE_INAPP_BROWSER_TEXT =
  "Estás usando un navegador embebido y puede darte problemas a la hora de compartir o guardar tus resultados. Para mejorar la experiencia usa el navegador por defecto de tu dispositivo."
