import { formatCurrency } from '../../utils/helpers';
import Button from '../../ui/Button';
import { useDispatch, useSelector } from 'react-redux';
import {
  addItem,
  decreaseItemQuantity,
  getItemQuantity,
  increaseItemQuantity,
} from '../cart/cartSlice';

function MenuItem({ pizza }) {
  const dispatch = useDispatch();

  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  const currQuantity = useSelector(getItemQuantity(id));

  const handleAddToCart = () => {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice,
    };
    dispatch(addItem(newItem));
  };

  let buttonContainer = null;

  if (!soldOut && currQuantity) {
    buttonContainer = (
      <div className="flex flex-row items-center gap-1">
        <Button type="small" onClick={() => dispatch(increaseItemQuantity(id))}>
          +
        </Button>
        <p className="rounded-xl bg-stone-300 px-3 py-1 text-stone-800 md:px-4 md:py-2">
          {currQuantity}
        </p>
        <Button type="small" onClick={() => dispatch(decreaseItemQuantity(id))}>
          -
        </Button>
      </div>
    );
  } else if (!soldOut) {
    buttonContainer = (
      <Button type="small" onClick={handleAddToCart}>
        Add to Cart
      </Button>
    );
  }

  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut && 'opacity-50 grayscale'}`}
      />
      <div className="flex grow flex-col pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {ingredients.join(', ')}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}

          {buttonContainer}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
