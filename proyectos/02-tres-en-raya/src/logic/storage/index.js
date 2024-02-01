export const saveGameToLocalStorage = ({board, turn}) => {
    window.localStorage.setItem('board', JSON.stringify(board)) // hay que guardar un string, no vale el newBoard directamente
    window.localStorage.setItem('turn', turn)
}

export const resetGameLocalStorage = () => {
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
}