import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { formatCurrency } from '../../utils/helpers';
import {
  decreaseItemQuantity,
  deleteItem,
  increaseItemQuantity,
} from './cartSlice';

function CartItem({ item }) {
  const dispatch = useDispatch();
  const { pizzaId, name, quantity, totalPrice, unitPrice } = item;

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <div className="flex flex-col items-center gap-1">
          <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
          <p className="text-xs font-medium text-stone-400">
            {quantity} &times; {formatCurrency(unitPrice)}
          </p>
        </div>
        <Button
          type="small"
          onClick={() => dispatch(increaseItemQuantity(pizzaId))}
        >
          +
        </Button>
        <Button
          type="small"
          onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
        >
          -
        </Button>
        <Button type="small" onClick={() => dispatch(deleteItem(pizzaId))}>
          delete
        </Button>
      </div>
    </li>
  );
}

export default CartItem;
