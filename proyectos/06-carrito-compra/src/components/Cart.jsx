import { CartIcon, ClearCartIcon, RemoveFromCartIcon } from "./icons";
import { useId } from "react";

export function Cart () {
	const cartCheckBoxId = useId()
	return (
		<>
			<label className="cart-button" htmlFor={cartCheckBoxId}>
				<CartIcon />
			</label>
			<input id={cartCheckBoxId} type="checkbox" hidden></input>

			<aside className="cart">
				<ul>
					<li>
						<img src='https://i.pinimg.com/474x/c4/86/5b/c4865b31956c0571ac923bdce5934419.jpg'></img>
					</li>
					<div>
						<strong>Objeto - €999</strong>
					</div>

					<footer>
						<small>
							Cantidad: 1
						</small>
					</footer>
				</ul>

				<button>
					<ClearCartIcon />
				</button>
			</aside>
		</>
	)
}
