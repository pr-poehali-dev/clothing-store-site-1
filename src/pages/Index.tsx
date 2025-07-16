import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const ClothingStore = () => {
  const [cartItems, setCartItems] = useState(0);

  const products = [
    {
      id: 1,
      name: "Стильная футболка",
      price: "2,990 ₽",
      originalPrice: "3,990 ₽",
      category: "Мужская",
      image: "/img/445c114f-cc98-4b70-a3e2-54940830a071.jpg",
      sizes: ["XS", "S", "M", "L", "XL"],
      colors: ["Черный", "Белый", "Серый"],
      discount: "-25%"
    },
    {
      id: 2,
      name: "Элегантное платье",
      price: "5,490 ₽",
      originalPrice: "",
      category: "Женская",
      image: "/img/ae6acf6f-aa15-4c4f-9831-4e796c7cda17.jpg",
      sizes: ["XS", "S", "M", "L"],
      colors: ["Розовый", "Синий", "Черный"],
      discount: ""
    },
    {
      id: 3,
      name: "Классические джинсы",
      price: "4,290 ₽",
      originalPrice: "5,990 ₽",
      category: "Мужская",
      image: "/img/dc55e1bb-d81d-418c-8c62-a4fdeb27a982.jpg",
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Синий", "Черный"],
      discount: "-28%"
    },
    {
      id: 4,
      name: "Летняя блузка",
      price: "3,290 ₽",
      originalPrice: "",
      category: "Женская",
      image: "/img/ae6acf6f-aa15-4c4f-9831-4e796c7cda17.jpg",
      sizes: ["XS", "S", "M", "L"],
      colors: ["Белый", "Бежевый", "Голубой"],
      discount: ""
    },
    {
      id: 5,
      name: "Спортивная толстовка",
      price: "3,790 ₽",
      originalPrice: "4,990 ₽",
      category: "Мужская",
      image: "/img/445c114f-cc98-4b70-a3e2-54940830a071.jpg",
      sizes: ["S", "M", "L", "XL"],
      colors: ["Серый", "Черный", "Темно-синий"],
      discount: "-24%"
    },
    {
      id: 6,
      name: "Вечернее платье",
      price: "7,990 ₽",
      originalPrice: "",
      category: "Женская",
      image: "/img/ae6acf6f-aa15-4c4f-9831-4e796c7cda17.jpg",
      sizes: ["XS", "S", "M", "L"],
      colors: ["Черный", "Красный", "Темно-синий"],
      discount: ""
    }
  ];

  const addToCart = () => {
    setCartItems(prev => prev + 1);
  };

  return (
    <div className="min-h-screen">
      {/* Gradient Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 opacity-90"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-orange-400 via-red-500 to-yellow-500 opacity-60 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-cyan-400 via-teal-500 to-green-500 opacity-40 mix-blend-color-dodge"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 bg-white/10 backdrop-blur-lg border-b border-white/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Shirt" size={32} className="text-white" />
              <h1 className="text-2xl font-bold text-white">FashionStore</h1>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-white hover:text-white/80 transition-colors font-medium">Главная</a>
              <a href="#" className="text-white hover:text-white/80 transition-colors font-medium">Мужская</a>
              <a href="#" className="text-white hover:text-white/80 transition-colors font-medium">Женская</a>
              <a href="#" className="text-white hover:text-white/80 transition-colors font-medium">Доставка</a>
              <a href="#" className="text-white hover:text-white/80 transition-colors font-medium">Поддержка</a>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                <Icon name="Search" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="relative text-white hover:bg-white/20" onClick={addToCart}>
                <Icon name="ShoppingBag" size={20} />
                {cartItems > 0 && (
                  <Badge className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {cartItems}
                  </Badge>
                )}
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                <Icon name="User" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl font-bold text-white mb-6 font-['Montserrat']">
            Стильная одежда
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Европейские размеры • Быстрая доставка • Гарантия качества
          </p>
          <Button size="lg" className="bg-white text-purple-600 hover:bg-white/90 font-semibold px-8 py-3">
            Смотреть каталог
            <Icon name="ArrowRight" size={20} className="ml-2" />
          </Button>
        </div>
      </section>

      {/* Product Grid */}
      <section className="relative z-10 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-12 font-['Montserrat']">
            Популярные товары
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {products.map((product) => (
              <Card key={product.id} className="group bg-white/95 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-white">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {product.discount && (
                    <Badge className="absolute top-4 left-4 bg-red-500 text-white font-semibold">
                      {product.discount}
                    </Badge>
                  )}
                  <Badge className="absolute top-4 right-4 bg-purple-600 text-white">
                    {product.category}
                  </Badge>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 font-['Montserrat']">{product.name}</h3>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl font-bold text-purple-600">{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-lg line-through text-gray-500">{product.originalPrice}</span>
                    )}
                  </div>

                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-700 mb-2">Размеры (EU):</p>
                    <div className="flex flex-wrap gap-1">
                      {product.sizes.map((size) => (
                        <Badge key={size} variant="outline" className="text-xs px-2 py-1">
                          {size}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-700 mb-2">Цвета:</p>
                    <div className="flex flex-wrap gap-1">
                      {product.colors.map((color) => (
                        <Badge key={color} variant="secondary" className="text-xs px-2 py-1">
                          {color}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button 
                      className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold"
                      onClick={addToCart}
                    >
                      <Icon name="ShoppingCart" size={16} className="mr-2" />
                      В корзину
                    </Button>
                    <Button variant="outline" size="icon" className="border-purple-600 text-purple-600 hover:bg-purple-50">
                      <Icon name="Heart" size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center text-white">
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon name="Truck" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2 font-['Montserrat']">Быстрая доставка</h3>
              <p className="text-white/80">Доставка по России от 1-3 дней</p>
            </div>
            
            <div className="text-center text-white">
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2 font-['Montserrat']">Гарантия качества</h3>
              <p className="text-white/80">100% гарантия на всю продукцию</p>
            </div>
            
            <div className="text-center text-white">
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon name="Headphones" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2 font-['Montserrat']">Поддержка 24/7</h3>
              <p className="text-white/80">Всегда готовы помочь с выбором</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-black/20 backdrop-blur-lg border-t border-white/20 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Shirt" size={24} className="text-white" />
                <h3 className="text-xl font-bold text-white">FashionStore</h3>
              </div>
              <p className="text-white/70">Стильная одежда для современных людей</p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Каталог</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/70 hover:text-white transition-colors">Мужская одежда</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors">Женская одежда</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors">Аксессуары</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Помощь</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/70 hover:text-white transition-colors">Доставка</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors">Возврат</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors">Размерная сетка</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Контакты</h4>
              <ul className="space-y-2">
                <li className="text-white/70">+7 (800) 555-0123</li>
                <li className="text-white/70">info@fashionstore.ru</li>
                <li className="text-white/70">Москва, ул. Модная, 1</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p className="text-white/70">&copy; 2024 FashionStore. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ClothingStore;