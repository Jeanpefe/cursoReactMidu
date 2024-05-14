import {describe, it, expect} from 'vitest'
import {render, screen} from '@testing-library/react'
import { Router } from './Router'

describe('Router', () => {
    it('should render without problems', () => {
        render(<Router routes={[]} />) //probamos a renderizar sin nada
        expect(true).toBeTruthy()
    })
    it('should render 404 if no routes match', () => {
        render(<Router routes={[]} defaultComponent={() => <h1>404</h1>} />)
        console.log(screen.debug()) //hacemos un console log del html renderizado en la pantalla
    })
})