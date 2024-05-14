import {describe, it, expect, beforeEach, vi} from 'vitest'
import {render, screen, cleanup} from '@testing-library/react'
import { Router } from './Router'
import { getCurrentPath } from './utils'

vi.mock('./utils.js', () => ({
    getCurrentPath: vi.fn()
}))

describe('Router', () => {
    beforeEach(() => { //limpia la pantalla antes de cada test
        cleanup()
        vi.clearAllMocks()
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
    it('should render the component of the first route that matches', () => {
        getCurrentPath.mockReturnValue('/about') //mockeamos que la ejecución del getCurrentPath en el router devuelva lo que queremos, en este caso /about
        const routes = [
            {
                path: '/',
                Component: () => <h1>Home</h1>
            },
            {
                path: '/about',
                Component: () => <h1>About</h1>
            }
        ]
        render(<Router routes={routes}/>)
        expect(screen.getByText('About')).toBeTruthy()
    })
})