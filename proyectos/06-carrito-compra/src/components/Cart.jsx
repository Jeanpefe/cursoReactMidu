import { CartIcon, ClearCartIcon, RemoveFromCartIcon } from "./icons";
import { useId } from "react";

export function Cart () {
    const cartCheckboxId = useId()
    return (
    <>
        <label className="cart-button" htmlFor={cartCheckboxId}>
            <CartIcon />
        </label>
        <input id={cartCheckboxId} type='checkbox' hidden/>

        <aside className='cart'>
            <ul>
                <li>
                    <img 
                        src="https://i.pinimg.com/474x/c4/86/5b/c4865b31956c0571ac923bdce5934419.jpg"
                    />

                    <div>
                        <strong>iPhone</strong> - €1499
                    </div>

                    <footer>
                        <small>
                            Cantidad: 1
                        </small>
                        <button>+</button>
                    </footer>
                </li>
            </ul>

            <button>
                <ClearCartIcon />
            </button>
        </aside>
    </>
    )
}
