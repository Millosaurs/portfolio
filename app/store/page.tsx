'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from '@/components/ui/tooltip'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Image from 'next/image'
import Link from 'next/link'
import { ShoppingCart, X, Plus, Minus, Check } from 'lucide-react'
import placeholder from '../imgs/placeholder.jpg'

const storeData = {
  items: [
    {
      id: 1,
      name: 'Premium Code Review',
      price: 99.99,
      description: 'Comprehensive code review by senior developers',
      image: placeholder,
    },
    {
      id: 2,
      name: '1-on-1 Mentoring Session',
      price: 149.99,
      description: 'Personalized mentoring to boost your skills',
      image: placeholder,
    },
    {
      id: 3,
      name: 'Custom UI/UX Consultation',
      price: 299.99,
      description: 'Expert advice on UI/UX for your project',
      image: placeholder,
    },
    {
      id: 4,
      name: 'Frontend Performance Audit',
      price: 199.99,
      description: "Optimize your web app's frontend performance",
      image: placeholder,
    },
    {
      id: 5,
      name: 'React Component Library',
      price: 79.99,
      description: 'Reusable React components for rapid development',
      image: placeholder,
    },
    {
      id: 6,
      name: 'Advanced CSS Workshop',
      price: 129.99,
      description: 'Master cutting-edge CSS techniques',
      image: placeholder,
    },
  ],
}

export default function Store() {
  const [loading, setLoading] = useState(true)
  const [cart, setCart] = useState<Array<{ id: number; quantity: number }>>([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [discountCode, setDiscountCode] = useState('')
  const [appliedDiscount, setAppliedDiscount] = useState(0)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  const addToCart = (itemId: number) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === itemId)
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === itemId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      } else {
        return [...prevCart, { id: itemId, quantity: 1 }]
      }
    })
  }

  const removeFromCart = (itemId: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId))
  }

  const updateQuantity = (itemId: number, newQuantity: number) => {
    if (newQuantity < 1) {
      removeFromCart(itemId)
    } else {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === itemId ? { ...item, quantity: newQuantity } : item
        )
      )
    }
  }

  const totalCartItems = cart.reduce((total, item) => total + item.quantity, 0)

  const cartTotal = cart.reduce((total, item) => {
    const storeItem = storeData.items.find(
      (storeItem) => storeItem.id === item.id
    )
    return total + (storeItem ? storeItem.price * item.quantity : 0)
  }, 0)

  const discountedTotal = cartTotal * (1 - appliedDiscount)

  const applyDiscount = () => {
    if (discountCode === 'SAVE10') {
      setAppliedDiscount(0.1)
    } else {
      setAppliedDiscount(0)
    }
  }

  const handleCheckout = () => {
    console.log('Proceeding to checkout with items:', cart)
    console.log('Total price:', discountedTotal.toFixed(2))
  }

  const isItemInCart = (itemId: number) => cart.some((item) => item.id === itemId)

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white font-mono flex items-center justify-center">
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [-20, 0, -20] }}
          transition={{
            repeat: 1,
            duration: 0.6,
            ease: 'easeInOut',
          }}
          className="text-4xl"
        >
          &lt; &gt;
        </motion.div>
      </div>
    )
  }

  return (
    <TooltipProvider>
      <div className={`bg-black text-white font-mono ${isCartOpen ? 'blur-sm' : ''}`}>
      <motion.aside
            initial={{ x: "-100%" }}
            animate={{ x: sidebarOpen ? 0 : "-100%" }}
            transition={{ duration: 0.3 }}
            className="fixed left-0 top-0 bottom-0 w-64 bg-black text-white z-50 p-4 border-r border-white/10"
          >
            <Button
              onClick={() => setSidebarOpen(false)}
              className="absolute top-4 right-4 bg-transparent hover:bg-white/10"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </Button>
            <nav className="flex flex-col items-center mt-8 space-y-6">
              <div className="mb-4 flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  width="48px"
                  height="48px"
                  fillRule="nonzero"
                >
                  <g
                    fill="#ffffff"
                    fillRule="nonzero"
                    stroke="none"
                    strokeWidth="1"
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    strokeMiterlimit="10"
                    fontFamily="none"
                    fontWeight="none"
                    fontSize="none"
                    textAnchor="none"
                  >
                    <g transform="scale(5.33333,5.33333)">
                      <path d="M37,13l-8,-10l5.5,10l-9.5,9v-17l1,-2l-1.5,0.5l-0.5,-2.5l-0.5,2.5l-1.5,-0.5l1,2v17l-9.5,-9l5.5,-10l-8,10l11,10.5l-11,10.5l12,12l1,1l1,-1l12,-12l-11,-10.5zM14.5,34l8.5,-8.5v17.447zM33.5,34l-8.5,8.947v-17.447z"></path>
                    </g>
                  </g>
                </svg>
              </div>
              <ul className="space-y-4 text-center">
                <li>
                  <Link href="/" className="hover:text-gray-300">Home</Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-gray-300">About</Link>
                </li>
                <li>
                  <Link href="/projects" className="hover:text-gray-300">Projects</Link>
                </li>
                <li>
                  <Link href="/recent-work" className="hover:text-gray-300">Recent Work</Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-gray-300">Contact</Link>
                </li>
              </ul>
            </nav>
          </motion.aside>
        <div className="fixed top-4 left-4 z-50">
        <Button
              onClick={() => setSidebarOpen(true)}
              className="fixed top-4 left-4 z-40 bg-black text-white hover:bg-white hover:text-black"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </Button>
        </div>
      </div>
      <div className={` bg-black text-white font-mono ${isCartOpen ? 'blur-sm' : ''}`}>
      <header className="relative min-h-screen flex items-center justify-center">
      <div className="absolute inset-0">
    <Image
      src="https://e1.pxfuel.com/desktop-wallpaper/26/610/desktop-wallpaper-full-black-solid-black-amoled.jpg"
      alt="Hero background"
      layout="fill"
      objectFit="cover"
      quality={100}
    />
    <div className="absolute inset-0 bg-black bg-opacity-60"></div>
  </div>
  <div className="relative z-10 text-center">
    <motion.h1 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
    >
      Store
    </motion.h1>
  </div>
  <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
    <motion.div
      animate={{ y: [0, 10, 0] }}
      transition={{ repeat: Infinity, duration: 1.5 }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
        <path d="M12 5v14"></path>
        <path d="m19 12-7 7-7-7"></path>
      </svg>
    </motion.div>
  </div>
      </header>



        <div className="fixed top-4 right-4 z-50">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                size="icon"
                variant="outline"
                className="relative bg-black text-white hover:bg-white hover:text-black transition-colors"
                onClick={() => setIsCartOpen(true)}
              >
                <ShoppingCart className="h-6 w-6" />
                <AnimatePresence>
                  {totalCartItems > 0 && (
                    <motion.span
                      key="cart-count"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      className="absolute -top-2 -right-2 bg-white text-black text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center"
                    >
                      {totalCartItems}
                    </motion.span>
                  )}
                </AnimatePresence>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>View Cart</p>
            </TooltipContent>
          </Tooltip>
        </div>

       

        <div className="container mx-auto px-4 py-16">
          <motion.section 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-semibold mb-8 text-center">Available Items</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {storeData.items.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="relative overflow-hidden rounded-lg h-80 group"
                >
                  <Image 
                    src={item.image} 
                    alt={item.name} 
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent p-6 flex flex-col justify-end">
                    <h3 className="text-2xl font-semibold mb-2">{item.name}</h3>
                    <p className="text-sm text-gray-300 mb-4">{item.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold">${item.price.toFixed(2)}</span>
                      {isItemInCart(item.id) ? (
                        <Button 
                          size="sm" 
                          className="bg-green-500 text-white hover:bg-green-600 transition-colors"
                          onClick={() => addToCart(item.id)}
                        >
                          <Check className="mr-2 h-4 w-4" /> Added
                        </Button>
                      ) : (
                        <Button 
                          size="sm" 
                          className="bg-white text-black hover:bg-gray-200 transition-colors"
                          onClick={() => addToCart(item.id)}
                        >
                          <Plus className="mr-2 h-4 w-4" /> Add to Cart
                        </Button>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>

        <Dialog open={isCartOpen} onOpenChange={setIsCartOpen}>
  <DialogContent className="bg-black text-white p-4 sm:p-6 md:p-8 rounded-lg"> {/* Added padding for smaller devices */}
    <DialogHeader>
      <DialogTitle className="text-lg sm:text-xl">Your Cart</DialogTitle>
      <DialogDescription className="text-sm sm:text-base">
        Review your items and proceed to checkout.
      </DialogDescription>
    </DialogHeader>
    {cart.length === 0 ? (
      <div className="text-center py-8">
        <p className="text-xl font-semibold">Nothing to display</p>
        <p className="text-gray-400 mt-2">Your cart is empty. Add some items to get started!</p>
      </div>
    ) : (
      <>
        <div className="space-y-4">
          {cart.map((item) => {
            const storeItem = storeData.items.find(i => i.id === item.id);
            if (!storeItem) return null;
            return (
              <div key={item.id} className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold text-base">{storeItem.name}</h3>
                  <p className="text-sm text-gray-400">${storeItem.price.toFixed(2)} each</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Button size="sm" variant="outline" onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span>{item.quantity}</span>
                  <Button size="sm" variant="outline" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                    <Plus className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="destructive" onClick={() => removeFromCart(item.id)}>
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-4">
          <Label htmlFor="discount-code">Discount Code</Label>
          <div className="flex space-x-2">
            <Input
              id="discount-code"
              value={discountCode}
              onChange={(e) => setDiscountCode(e.target.value)}
              className="bg-gray-900 text-white"
            />
            <Button onClick={applyDiscount}>Apply</Button>
          </div>
        </div>
        <div className="mt-4 space-y-2">
          <p>Subtotal: ${cartTotal.toFixed(2)}</p>
          {appliedDiscount > 0 && (
            <p>Discount: -${(cartTotal * appliedDiscount).toFixed(2)}</p>
          )}
          <p className="text-xl font-bold">Total: ${discountedTotal.toFixed(2)}</p>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => setIsCartOpen(false)}>
            Continue Shopping
          </Button>
          <Button onClick={handleCheckout}>
            Checkout
          </Button>
        </DialogFooter>
      </>
    )}
  </DialogContent>
</Dialog>

        <footer className="bg-black text-white py-8 border-t border-white/10">
          <div className="flex flex-col container mx-auto px-4 text-center justify-between gap-2">
            <p>&copy; 2024 Sharan Shrivatsav. All rights reserved.</p>
            <p>k........</p>
          </div>
        </footer>
      </div>
    </TooltipProvider>
  )
}