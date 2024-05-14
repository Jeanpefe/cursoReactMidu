import {describe, it, expect, beforeEach} from 'vitest'
import {render, screen, cleanup} from '@testing-library/react'
import { Router } from './Router'

describe('Router', () => {
    beforeEach(() => { //limpia la pantalla antes de cada test
        cleanup()
    })

    it('should render without problems', () => {
        render(<Router routes={[]} />) //probamos a renderizar sin nada
        expect(true).toBeTruthy()
    })
    it('should render 404 if no routes match', () => {
        render(<Router routes={[]} defaultComponent={() => <h1>404</h1>} />)
        console.log(screen.debug()) //hacemos un console log del html renderizado en la pantalla
        expect(screen.getByText('404')).toBeTruthy()
    })
})