'use client'

import { env } from '@env'
import { Media, Product } from '@payload-types'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'

import { useUser } from '@/context/UserContext'
import getSlugs from '@/utils/getSlugs'
import { useMetadata } from '@/utils/metadataContext'

// Define cart item type
interface CartItem extends Product {
  quantity: number
}

const Products = ({ productsData }: { productsData: Product[] }) => {
  const { redirectionLinks, stripeConnect } = useMetadata()
  const [cart, setCart] = useState<CartItem[]>([])
  const [showCart, setShowCart] = useState(false)
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({})
  const { user: contextData } = useUser()

  // Load cart from localStorage on component mount
  useEffect(() => {
    const savedCart = localStorage.getItem('cart')
    if (savedCart) {
      setCart(JSON.parse(savedCart))
    }
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  console.log({ contextData })
  // Add to cart handler
  const addToCart = (product: Product) => {
    const quantity = quantities[product.id] || 1
    const existingCartItemIndex = cart.findIndex(item => item.id === product.id)

    if (existingCartItemIndex > -1) {
      const updatedCart = [...cart]
      updatedCart[existingCartItemIndex].quantity += quantity
      setCart(updatedCart)
    } else {
      setCart([...cart, { ...product, quantity }])
    }

    setQuantities(prev => ({ ...prev, [product.id]: 1 }))
  }

  // Remove item from cart
  const removeFromCart = (productId: number) => {
    setCart(cart.filter(item => item.id !== productId))
  }

  // Update quantity in cart
  const updateCartItemQuantity = (productId: number, newQuantity: number) => {
    const updatedCart = cart.map(item =>
      item.id === productId ? { ...item, quantity: newQuantity } : item,
    )
    setCart(updatedCart)
  }

  // Calculate total price
  const calculateTotal = () => {
    return cart
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2)
  }

  // Buy Now functionality
  const buyNow = async (product: Product) => {
    const payload = {
      userId: 6,
      country: stripeConnect?.country,
      products: [
        {
          name: product.name,
          price: product.price,
          quantity: quantities[product.id] || 1,
        },
      ],
    }

    try {
      const response = await axios.post(
        `${env.NEXT_PUBLIC_PUBLIC_URL}/api/v1/stripe/purchaseProducts`,
        payload,
      )
      console.log(response)
      if (response.data?.sessionUrl) {
        window.location.href = response.data.sessionUrl
      }
    } catch (error) {
      console.error('Error during Buy Now:', error)
    }
  }

  // Buy All Items functionality
  const buyAllItems = async () => {
    const payload = {
      userId: 6,
      country: stripeConnect?.country,
      products: cart.map(item => ({
        name: item.name,
        price: item.price,
        quantity: item.quantity,
      })),
    }

    try {
      const response = await axios.post(
        `${env.NEXT_PUBLIC_PUBLIC_URL}/api/v1/stripe/purchaseProducts`,
        payload,
      )

      console.log({ response })
      if (response.data?.sessionUrl) {
        window.location.href = response.data.sessionUrl
      }
    } catch (error) {
      console.error('Error during Buy All Items:', error)
    }
  }

  // Render cart modal
  const renderCartModal = () => {
    if (!showCart) return null

    return (
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          width: '400px',
          height: '100%',
          backgroundColor: 'white',
          boxShadow: '-2px 0 5px rgba(0,0,0,0.1)',
          zIndex: 1000,
          padding: '20px',
          overflowY: 'auto',
        }}>
        <h2>Your Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <>
            {cart.map(item => (
              <div
                className='text-black'
                key={item.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '10px',
                  borderBottom: '1px solid #eee',
                  paddingBottom: '10px',
                  color: 'black',
                }}>
                <Image
                  src={(item.productImage as Media)?.url || ''}
                  alt={item.name}
                  width={50}
                  height={50}
                />
                <div style={{ marginLeft: '10px', flexGrow: 1 }}>
                  <h4 style={{ color: 'black' }}>{item.name}</h4>
                  <p>
                    ${item.price} x {item.quantity}
                  </p>
                </div>
                <div>
                  <button onClick={() => removeFromCart(item.id)}>
                    Remove
                  </button>
                </div>
              </div>
            ))}
            <div style={{ marginTop: '20px', color: 'black' }}>
              <h3 style={{ color: 'black' }}>Total: ${calculateTotal()}</h3>
              <Button onClick={buyAllItems}>Buy All Items</Button>
            </div>
          </>
        )}
        <Button variant='secondary' onClick={() => setShowCart(false)}>
          Close Cart
        </Button>
      </div>
    )
  }

  return (
    <>
      <Button onClick={() => setShowCart(true)}>View Cart {cart.length}</Button>

      <section className='blog-page-area py-130 rpy-100 rel z-1'>
        <div className='container-1290 container'>
          <div className='row'>
            {productsData?.map(product => (
              <div key={product.id} className='col-xl-4 col-md-6'>
                <div className='blog-item wow fadeInUp delay-0-2s'>
                  <div className='image'>
                    <Image
                      src={(product?.productImage as Media)?.url || ''}
                      alt={(product?.productImage as Media)?.alt || ''}
                      height={300}
                      width={410}
                    />
                  </div>
                  <div className='flex gap-4'>
                    <h4>
                      <Link
                        legacyBehavior
                        href={`${getSlugs({ redirectionLinks })?.blog}${product?.slug}`}>
                        {product?.name}
                      </Link>
                    </h4>
                    <div>${product.price}</div>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                    }}>
                    <input
                      type='number'
                      min='1'
                      value={quantities[product.id] || 1}
                      onChange={e =>
                        setQuantities(prev => ({
                          ...prev,
                          [product.id]: parseInt(e.target.value),
                        }))
                      }
                      style={{ width: '40px', height: '20px', color: 'black' }}
                    />
                    <Button onClick={() => addToCart(product)}>
                      Add to Cart
                    </Button>
                    <Button onClick={() => buyNow(product)}>Buy Now</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {renderCartModal()}
    </>
  )
}

export default Products
