package com.selflearning.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.selflearning.exception.CartItemException;
import com.selflearning.exception.UserException;
import com.selflearning.model.Cart;
import com.selflearning.model.CartItem;
import com.selflearning.model.Product;
import com.selflearning.model.User;
import com.selflearning.repository.CartItemRepository;
import com.selflearning.repository.CartRepository;

@Service
public class CartItemServiceImplementation implements CartItemService{
	
	@Autowired
	private CartItemRepository cartItemRepository;
	@Autowired
	private UserService userService;
	@Autowired
	private CartRepository cartRepository;

	@Override
	public CartItem createCartItem(CartItem cartItem) {
		// TODO Auto-generated method stub
		cartItem.setQuantity(1);
		cartItem.setPrice(cartItem.getProduct().getPrice() * cartItem.getQuantity());
		cartItem.setDiscountedPrice(cartItem.getProduct().getDiscountedPrice() * cartItem.getQuantity());
		
		CartItem createdCartItem = cartItemRepository.save(cartItem);
		return createdCartItem;
	}

	@Override
	public CartItem updateCartItem(Long userId, Long id, CartItem cartItem) throws CartItemException, UserException {
		// TODO Auto-generated method stub
		CartItem item = findCartItemById(id);
		User user = userService.findUserById(item.getUserId());
		
		if(user.getId().equals(userId)) {
			item.setQuantity(cartItem.getQuantity());
			item.setPrice(item.getQuantity() * item.getProduct().getPrice());
			item.setDiscountedPrice(item.getProduct().getDiscountedPrice() * item.getQuantity());
			CartItem updateCartItem = cartItemRepository.save(item);
			return updateCartItem;
		}
		throw new CartItemException("Item Not Found.");
	}

	@Override
	public CartItem isCartItemExisting(Cart cart, Product product, String size, Long userId) {
		// TODO Auto-generated method stub
		CartItem cartItem = cartItemRepository.isCartItemExist(cart, product, size, userId);
		return cartItem;
	}

	@Override
	public String removeCartItem(Long userId, Long CartIemId) throws CartItemException, UserException {
		// TODO Auto-generated method stub
		CartItem cartItem = findCartItemById(CartIemId);
		
		Cart cart = cartRepository.findByUserId(userId);
		
		User user = userService.findUserById(cartItem.getUserId());
		
		User requestUser = userService.findUserById(userId);
		
		if(user.getId().equals(requestUser.getId())) {
			cartItemRepository.deleteById(CartIemId);
		}else {
			throw new UserException("You can't remove other user item.");
		}
		
		recalculateCartTotals(cart);
		return "Item removed from Cart!";
	}
	
	// Helper method to recalculate cart totals
		private void recalculateCartTotals(Cart cart) {
		    int totalPrice = 0;
		    int totalDiscountedPrice = 0;
		    int totalItems = 0;

		    for (CartItem cartItem : cart.getCartItems()) {
		        totalPrice += cartItem.getPrice();
		        totalDiscountedPrice += cartItem.getDiscountedPrice();
		        totalItems += cartItem.getQuantity();
		    }

		    cart.setTotalPrice(totalPrice);
		    cart.setTotalDiscountedPrice(totalDiscountedPrice);
		    cart.setTotalItems(totalItems);
		    cart.setDiscount(totalPrice - totalDiscountedPrice);

		    // Save the updated cart
		    cartRepository.save(cart);
		}

	@Override
	public CartItem findCartItemById(Long cartItemId) throws CartItemException {
		// TODO Auto-generated method stub
		Optional<CartItem> optCart = cartItemRepository.findById(cartItemId);
		
		if(optCart.isPresent()) {
			return optCart.get();
		}
		throw new CartItemException("Item Not Found");	
	}

}
