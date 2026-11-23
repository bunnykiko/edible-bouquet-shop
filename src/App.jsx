import React, { useState, useEffect } from 'react';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Link, 
  useNavigate, 
  useLocation 
} from 'react-router-dom';
import { 
  ShoppingBag, 
  ChevronDown, 
  Heart, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Truck,
  ArrowLeft,
  SlidersHorizontal,
  Check,
  CheckCircle2,
  MapPin,
  Sparkle,
  X,
  Plus
} from 'lucide-react';

// ДАННЫЕ ДЛЯ КАТАЛОГА 
const PRODUCTS_DATA = [
  {
    id: 1,
    title: "Золотой сад",
    category: "Фрукты",
    price: 4500,
    desc: "Солнечная подборка глазированных абрикосов, яблок сорта Honeycrisp и спелого инжира.",
    tag: "фрукты",
    image: "/zolotoy-sad.jpg",
    image: "/золотой сад.jpg"
  },
  {
    id: 2,
    title: "Полночный трюфель",
    category: "Шоколад",
    price: 5200,
    desc: "Насыщенная клубника в темном шоколаде в сочетании с глубокими нотами бельгийского какао.",
    tag: "шоколад",
    image: "/Полночный трюфель.jpeg"
  },
  {
    id: 3,
    title: "Пастельная мечта",
    category: "Сладости",
    price: 3800,
    desc: "Авторские леденцы ручной работы и нежные кондитерские изделия в пастельных тонах.",
    tag: "сладости",
    image: "/пастельная мечта.jpg"
  },
  {
    id: 4,
    title: "Ягодный восторг",
    category: "Фрукты",
    price: 4100,
    desc: "Свежие лесные ягоды, бережно уложенные среди сезонных полевых цветов и зелени.",
    tag: "фрукты",
    image: "/ягодный восторг.jpg"
  },
  {
    id: 5,
    title: "Набор «Влюбленность»",
    category: "Подарки",
    price: 6000,
    desc: "Романтическая композиция из шоколадных сердец, маршмеллоу и свежей клубники.",
    tag: "подарки",
    image: "/набор влюбленность.jpg"
  },
  {
    id: 6,
    title: "Слоновая кость",
    category: "Спецзаказ",
    price: 6500,
    desc: "Изысканные экзотические фрукты в белом шоколаде и свежие белые розы для особых случаев.",
    tag: "спецзаказ",
    image: "/слоновая кость.jpg"
  },
  {
    id: 7,
    title: "Мясной Пир",
    category: "Мясные букеты",
    price: 5900,
    desc: "Мужской сытный букет из премиальных охотничьих колбасок, сыра чеддер и хрустящего багета.",
    tag: "мясные",
    image: "/мясной пир.jpg"
  },
  {
    id: 8,
    title: "Таежный Охотник",
    category: "Мясные букеты",
    price: 7200,
    desc: "Богатая композиция со сыровяленым балыком, розмарином, перчиками чили и копченым сыром.",
    tag: "мясные",
    image: "/таежный охотник.jpg"
  }
];

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// ГЛАВНАЯ СТРАНИЦА 
function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <>
      <div className="min-h-[calc(100vh-76px)] flex flex-col justify-between">
        <main className="container mx-auto px-6 flex-grow flex flex-col items-center justify-center text-center py-12">
          <span className="text-[10px] sm:text-xs font-bold tracking-[0.25em] text-[#D67B5C] uppercase mb-6 block">
            Авторские съедобные композиции
          </span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-normal leading-[1.15] mb-6 max-w-4xl">
            Букеты, которые <br />
            <span className="text-[#D67B5C] italic font-medium">хочется съесть</span>
          </h1>
          <p className="text-[#5C524E] max-w-xl text-sm sm:text-base leading-relaxed mb-10 font-light">
            Собрание шедевров из фруктов, шоколада и конфет, созданных, чтобы восхищать взгляд и дарить истинный вкус.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full sm:w-auto">
            <Link 
              to="/catalog"
              className="w-full sm:w-auto text-center px-8 py-4 bg-[#D67B5C] text-white font-medium rounded-full shadow-lg shadow-[#D67B5C]/20 hover:bg-[#c26849] hover:shadow-xl transition-all duration-300"
            >
              Смотреть коллекции
            </Link>
            <Link 
              to="/custom"
              className="w-full sm:w-auto text-center px-8 py-4 border border-[#2D221E]/10 rounded-full font-medium hover:bg-[#2D221E]/5 transition-all duration-300"
            >
              Индивидуальный заказ
            </Link>
          </div>
        </main>

        <div className="flex justify-center pb-8 animate-bounce">
          <div className="flex flex-col items-center gap-1 text-[#D67B5C]/60">
            <ChevronDown className="w-5 h-5 stroke-[1.5]" />
          </div>
        </div>
      </div>

      <section className="py-24 bg-[#FAF6F2] border-t border-[#2D221E]/5">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 text-center">
          <div className="flex flex-col items-center max-w-xs mx-auto">
            <div className="w-16 h-16 rounded-full bg-[#D67B5C]/10 flex items-center justify-center mb-6 text-[#D67B5C]">
              <Sparkles className="w-6 h-6 stroke-[1.5]" />
            </div>
            <h3 className="font-serif text-xl font-bold mb-3">Свежесть и качество</h3>
            <p className="text-[#5C524E] text-xs sm:text-sm leading-relaxed font-light">
              Мы отбираем только лучшие органические фрукты и премиальный шоколад для каждого букета.
            </p>
          </div>
          <div className="flex flex-col items-center max-w-xs mx-auto">
            <div className="w-16 h-16 rounded-full bg-[#D67B5C]/10 flex items-center justify-center mb-6 text-[#D67B5C]">
              <ShieldCheck className="w-6 h-6 stroke-[1.5]" />
            </div>
            <h3 className="font-serif text-xl font-bold mb-3">Ручная работа</h3>
            <p className="text-[#5C524E] text-xs sm:text-sm leading-relaxed font-light">
              Каждая композиция создается вручную нашими мастерами-флористами и шоколатье.
            </p>
          </div>
          <div className="flex flex-col items-center max-w-xs mx-auto">
            <div className="w-16 h-16 rounded-full bg-[#D67B5C]/10 flex items-center justify-center mb-6 text-[#D67B5C]">
              <Truck className="w-6 h-6 stroke-[1.5]" />
            </div>
            <h3 className="font-serif text-xl font-bold mb-3">Бережная доставка</h3>
            <p className="text-[#5C524E] text-xs sm:text-sm leading-relaxed font-light">
              Доставка с температурным режимом гарантирует, что ваш подарок прибудет в идеальном виде.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#FAF6F2]">
        <div className="container mx-auto px-6">
          <div className="mb-12 text-center md:text-left">
            <h2 className="font-serif text-4xl md:text-5xl font-medium mb-4">Наши коллекции</h2>
            <p className="text-[#5C524E] max-w-md text-sm font-light">
              Ознакомьтесь с подборкой наших популярных съедобных букетов ручной работы.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCTS_DATA.slice(0, 3).map((product) => (
              <div key={product.id} className="group flex flex-col justify-between">
                <div className="relative aspect-[4/5] rounded-[24px] overflow-hidden mb-5 bg-[#FAF6F2]">
                  {product.image ? (
                    <img 
                      src={product.image} 
                      alt={product.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    />
                  ) : (
                    <div className={`w-full h-full bg-gradient-to-tr ${product.bgGradient} flex items-center justify-center transition-transform duration-700 group-hover:scale-105`}>
                      <span className="font-serif italic text-[#2D221E]/30 text-lg">{product.title}</span>
                    </div>
                  )}
                  <span className="absolute top-4 left-4 bg-[#FAF6F2] text-[#D67B5C] font-semibold text-[9px] uppercase tracking-wider px-3 py-1.5 rounded-full">
                    {product.tag}
                  </span>
                </div>
                <div>
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="font-serif text-lg font-bold text-[#2D221E]">{product.title}</h3>
                    <span className="font-bold text-sm text-[#2D221E]">{product.price} ₽</span>
                  </div>
                  <p className="text-[#5C524E] text-[13px] font-light">{product.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-16">
            <Link 
              to="/catalog"
              className="flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-[#D67B5C] hover:text-[#c26849] transition-colors group"
            >
              Посмотреть все коллекции
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 bg-[#F4EDE6] border-t border-b border-[#2D221E]/5">
        <div className="container mx-auto px-6 max-w-4xl text-center flex flex-col items-center">
          <span className="font-serif text-7xl text-[#D67B5C]/30 leading-none h-8 select-none">“</span>
          <blockquote className="font-serif text-2xl md:text-3.5xl lg:text-4xl text-[#2D221E] leading-relaxed italic mb-8 max-w-3xl">
            «Самый лучший подарок — это тот, который можно разделить, попробовать и запомнить. Вкус <span className="text-[#D67B5C] font-semibold">&</span> Букет идеально передает эту магию».
          </blockquote>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#E5D0C2] overflow-hidden flex items-center justify-center">
              <span className="text-xs font-bold text-[#2D221E]/60">ЕР</span>
            </div>
            <div className="text-left">
              <h4 className="font-bold text-sm text-[#2D221E]">Елена Россети</h4>
              <p className="text-[11px] text-[#D67B5C] uppercase tracking-wider font-semibold">Флорист-дизайнер</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// СТРАНИЦА КАТАЛОГА 
function CatalogPage({ activeCategory, setActiveCategory, onAddToCart }) {
  const filteredProducts = activeCategory === "Все" 
    ? PRODUCTS_DATA 
    : PRODUCTS_DATA.filter(p => p.category === activeCategory);

  const getCategoryCount = (catName) => {
    if (catName === "Все") return PRODUCTS_DATA.length;
    return PRODUCTS_DATA.filter(p => p.category === catName).length;
  };

  return (
    <div className="container mx-auto px-6 py-12 flex-grow">
      <Link 
        to="/"
        className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-[#5C524E]/60 hover:text-[#D67B5C] mb-8 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" /> Назад на главную
      </Link>

      <div className="flex flex-col lg:flex-row gap-12 items-start">

        <div className="w-full lg:flex-grow order-2 lg:order-1">
          <div className="flex justify-between items-baseline mb-8 border-b border-[#2D221E]/5 pb-4">
            <h1 className="font-serif text-3xl md:text-4xl">Все коллекции</h1>
            <span className="text-xs text-[#5C524E]/60 font-light">Найдено: {filteredProducts.length}</span>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <div key={product.id} className="group flex flex-col justify-between">
                  <div className="relative aspect-[4/5] rounded-[24px] overflow-hidden mb-5 bg-[#FAF6F2]">
                    {product.image ? (
                      <img 
                        src={product.image} 
                        alt={product.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                      />
                    ) : (
                      <div className={`w-full h-full bg-gradient-to-tr ${product.bgGradient} flex items-center justify-center transition-transform duration-700 group-hover:scale-105`}>
                        <span className="font-serif italic text-[#2D221E]/30 text-lg">{product.title}</span>
                      </div>
                    )}

                    <span className="absolute top-4 left-4 bg-[#FAF6F2] text-[#D67B5C] font-semibold text-[9px] uppercase tracking-wider px-3 py-1.5 rounded-full shadow-sm">
                      {product.category}
                    </span>
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                      <button 
                        onClick={() => onAddToCart(product)} 
                        className="w-12 h-12 rounded-full bg-white text-[#2D221E] flex items-center justify-center shadow-md hover:scale-110 active:scale-95 transition-all"
                      >
                        <ShoppingBag className="w-5 h-5 stroke-[1.5]" />
                      </button>
                      <button className="w-12 h-12 rounded-full bg-white text-[#2D221E] flex items-center justify-center shadow-md hover:scale-110 active:scale-95 transition-all">
                        <Heart className="w-5 h-5 stroke-[1.5]" />
                      </button>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-baseline mb-2">
                      <h3 className="font-serif text-lg font-bold text-[#2D221E]">{product.title}</h3>
                      <span className="font-bold text-sm text-[#2D221E]">{product.price} ₽</span>
                    </div>
                    <p className="text-[#5C524E] text-[13px] font-light leading-relaxed">{product.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-[#F4EDE6]/30 rounded-3xl border border-dashed border-[#2D221E]/10">
              <p className="text-sm text-[#5C524E]">В этой категории пока нет букетов.</p>
            </div>
          )}
        </div>

        <aside className="w-full lg:w-64 order-1 lg:order-2 lg:sticky lg:top-28 bg-[#F4EDE6]/60 p-6 md:p-8 rounded-[32px] border border-[#2D221E]/5">
          <div className="flex items-center gap-2 mb-6 text-[#D67B5C]">
            <SlidersHorizontal className="w-4 h-4" />
            <h3 className="font-serif text-lg font-bold text-[#2D221E]">Фильтрация</h3>
          </div>

          <div className="flex flex-row lg:flex-col flex-wrap gap-2 lg:gap-3">
            {["Все", "Фрукты", "Шоколад", "Сладости", "Мясные букеты"].map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`flex-grow lg:flex-grow-0 flex items-center justify-between px-4 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-all text-left ${
                    isActive 
                      ? "bg-[#D67B5C] text-white shadow-md shadow-[#D67B5C]/25" 
                      : "bg-white/50 text-[#5C524E] hover:bg-white hover:text-[#2D221E] border border-[#2D221E]/5"
                  }`}
                >
                  <span>{cat}</span>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full ${isActive ? "bg-white/20 text-white" : "bg-[#2D221E]/5 text-[#5C524E]/70"}`}>
                    {getCategoryCount(cat)}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="border-t border-[#2D221E]/10 mt-8 pt-6">
            <h4 className="font-serif text-sm font-bold mb-2">Особый случай?</h4>
            <p className="text-xs text-[#5C524E]/70 leading-relaxed font-light mb-4">
              Мы с удовольствием соберем индивидуальную композицию по вашим пожеланиям!
            </p>
            <Link 
              to="/custom"
              className="w-full text-center block py-3 bg-[#D67B5C]/10 text-[#D67B5C] hover:bg-[#D67B5C] hover:text-white transition-all text-xs font-bold uppercase tracking-wider rounded-full"
            >
              Запустить Конструктор
            </Link>
          </div>
        </aside>

      </div>
    </div>
  );
}

// СТРАНИЦА: КОНСТРУКТОР БУКЕТОВ 
function CustomOrderPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const [activeTab, setActiveTab] = useState('Фрукты');
  const [packaging, setPackaging] = useState('Коробка');
  const [wrapColor, setWrapColor] = useState('Крафт');

  const [boxSlots, setBoxSlots] = useState(Array(9).fill(null));
  const [activeSlotIndex, setActiveSlotIndex] = useState(0); 

  // КАТАЛОГ ИНГРЕДИЕНТОВ
  const INGREDIENTS_BY_CATEGORIES = {
    'Фрукты': [
      { id: 'strawberry', label: 'Свежая клубника', icon: '🍓', price: 90, image: '/ingredients/клубника.png' },
      { id: 'grapes', label: 'Зеленый виноград', icon: '🍇', price: 60, image: '/ingredients/виноград.png' },
      { id: 'figs', label: 'Свежий инжир', icon: '🥝', price: 120, image: '/ingredients/figs.png' },
      { id: 'blueberries', label: 'Спелая голубика (горсть)', icon: '🫐', price: 80, image: '/ingredients/голубика.png' }
    ],
    'Шоколад': [
      { id: 'strawberry-milk', label: 'Клубника в молочном шоколаде', icon: '🍓🍫', price: 130, image: '/ingredients/клубника в молочном шоколаде.png' },
      { id: 'strawberry-white', label: 'Клубника в белом шоколаде', icon: '🍓🥛', price: 140, image: '/ingredients/клубника в белом шоколаде.png' },
      { id: 'chocolate-bar', label: 'Плитки шоколада', icon: '🍫', price: 100, image: '/ingredients/плитки шоколада.png' }
    ],
    'Сладости': [
      { id: 'marshmallow', label: 'Маршмеллоу (палочка)', icon: '🍡', price: 50, image: '/ingredients/маршмеллоу.png' },
      { id: 'macarons', label: 'Макаруны (1 шт)', icon: '🍪', price: 120, image: '/ingredients/макаруны.png' },
      { id: 'lollipop', label: 'Леденцы', icon: '🍭', price: 70, image: '/ingredients/леденцы.png' }
    ],
    'Мясо и Сыры': [
      { id: 'sausages', label: 'Охотничья колбаска', icon: '🥓', price: 120, image: '/ingredients/охотничьи колбаски.png' },
      { id: 'cheddar', label: 'Сыр Чеддер (порция)', icon: '🧀', price: 90, image: '/ingredients/сыр чеддер.png' },
      { id: 'baguette', label: 'Мини-багет', icon: '🥖', price: 70, image: '/ingredients/багет.png' }
    ],
    'Цветы и Декор': [
      { id: 'white-roses', label: 'Белые розы (1 шт)', icon: '🌹', price: 250, image: '/ingredients/белые розы.png' },
      { id: 'pink-flowers', label: 'Розовые цветы (веточка)', icon: '🌸', price: 120, image: '/ingredients/розоые цветы.png' },
      { id: 'mint', label: 'Свежая мята', icon: '🌿', price: 40, image: '/ingredients/веточки мяты.png' }
    ]
  };

  const WRAP_COLORS = {
    'Крафт': 'bg-[#E5D0C2] border-[#C8B09F] text-[#5C524E]',
    'Белый': 'bg-white border-gray-200 text-gray-400',
    'Нежно-розовый': 'bg-[#FBCFE8] border-[#F472B6] text-[#F472B6]',
    'Шоколадный': 'bg-[#4B3621] border-[#2C1D11] text-white/30'
  };

  const getBasePrice = () => {
    if (packaging === 'Корзина') return 1200;
    if (packaging === 'Коробка') return 600;
    return 800;
  };

  const basePrice = getBasePrice();
  const addonsPrice = boxSlots.reduce((sum, item) => sum + (item ? item.price : 0), 0);
  const totalPrice = basePrice + addonsPrice;

  const handleSelectIngredient = (ingredient) => {
    const newSlots = [...boxSlots];
    newSlots[activeSlotIndex] = ingredient;
    setBoxSlots(newSlots);

    const nextEmpty = newSlots.findIndex((slot, idx) => slot === null && idx > activeSlotIndex);
    if (nextEmpty !== -1) {
      setActiveSlotIndex(nextEmpty);
    } else {
      const anyEmpty = newSlots.findIndex(slot => slot === null);
      if (anyEmpty !== -1) {
        setActiveSlotIndex(anyEmpty);
      } else {
        setActiveSlotIndex((activeSlotIndex + 1) % 9);
      }
    }
  };

  const handleClearSlot = (index, e) => {
    e.stopPropagation(); 
    const newSlots = [...boxSlots];
    newSlots[index] = null;
    setBoxSlots(newSlots);
    setActiveSlotIndex(index); 
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="container mx-auto px-6 py-12 flex-grow">

      <Link 
        to="/"
        className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-[#5C524E]/60 hover:text-[#D67B5C] mb-10 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" /> Вернуться назад
      </Link>

      {!isSubmitted ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          <div className="lg:col-span-5 lg:sticky lg:top-28 flex flex-col items-center">
            
            <div className="w-full bg-[#F4EDE6] rounded-[36px] p-8 border border-[#2D221E]/5 text-center shadow-xl relative overflow-hidden flex flex-col justify-between aspect-square">
              
              <div className="absolute top-6 left-6 text-[#D67B5C]/30">
                <Sparkle className="w-8 h-8 fill-[#D67B5C]/10" />
              </div>

              <div>
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#D67B5C]">Интерактивный состав</span>
                <h4 className="font-serif text-lg text-[#2D221E] mt-1">Визуализация набора</h4>
              </div>

              <div className="relative w-full flex-grow flex flex-col items-center justify-center min-h-[260px]">

                <div className="absolute top-0 text-[10px] text-[#5C524E]/60 italic">
                  Выберите ячейку в коробке, затем укажите ингредиент справа
                </div>

                <div className="absolute inset-0 flex items-center justify-center pb-24">
                  {packaging !== 'Коробка' ? (
                    <div className="flex flex-wrap items-center justify-center gap-3.5 max-w-[280px] px-2 mt-6">
                      {boxSlots.map((addon, index) => {
                        if (!addon) return null;
                        const isActive = activeSlotIndex === index;
                        return (
                          <div 
                            key={index} 
                            onClick={() => setActiveSlotIndex(index)}
                            className={`w-14 h-14 rounded-full bg-white border flex items-center justify-center shadow-md relative cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                              isActive ? 'ring-2 ring-[#D67B5C] scale-110 z-10' : 'border-[#2D221E]/10'
                            }`}
                          >
                            <img src={addon.image} alt={addon.label} className="w-12 h-12 object-contain" />
                            <button 
                              onClick={(e) => handleClearSlot(index, e)}
                              className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full p-0.5 hover:bg-red-600 transition-colors"
                            >
                              <X className="w-3 h-3" />
                            </button>
                          </div>
                        );
                      })}
                      {boxSlots.filter(Boolean).length === 0 && (
                        <div className="text-xs text-[#5C524E]/40 animate-pulse text-center">
                          Собери свой букет!
                        </div>
                      )}
                    </div>
                  ) : (

                    <div className="grid grid-cols-3 gap-2.5 bg-white/15 p-4 rounded-3xl border border-white/40 max-w-[260px] shadow-inner mt-6">
                      {boxSlots.map((addon, index) => {
                        const isActive = activeSlotIndex === index;
                        return (
                          <div 
                            key={index}
                            onClick={() => setActiveSlotIndex(index)}
                            className={`w-14 h-14 rounded-2xl flex items-center justify-center relative overflow-hidden cursor-pointer transition-all duration-200 border ${
                              isActive 
                                ? 'bg-white ring-2 ring-[#D67B5C] scale-105 z-10 shadow-lg' 
                                : 'bg-[#FAF6F2]/30 hover:bg-white/40 border-[#2D221E]/5'
                            }`}
                          >
                            {addon ? (
                              <div className="relative w-full h-full flex items-center justify-center group">
                                <img src={addon.image} alt={addon.label} className="w-12 h-12 object-contain" />
                                <button 
                                  onClick={(e) => handleClearSlot(index, e)}
                                  className="absolute top-0.5 right-0.5 w-4 h-4 bg-[#2D221E]/20 hover:bg-red-500 hover:text-white text-[#2D221E] rounded-full flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
                                  title="Очистить"
                                >
                                  <X className="w-2.5 h-2.5" />
                                </button>
                              </div>
                            ) : (
                              <Plus className={`w-4 h-4 transition-colors ${isActive ? 'text-[#D67B5C]' : 'text-[#2D221E]/20'}`} />
                            )}
                            <span className="absolute bottom-0.5 right-1.5 text-[7px] text-[#2D221E]/30 font-bold select-none">
                              {index + 1}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  )}

                </div>

                <div className="absolute bottom-2 flex flex-col items-center w-full">
                  
                  {packaging === 'Букет' && (
                    <div className="flex flex-col items-center">
                      <div className={`w-32 h-20 rounded-t-full rotate-180 opacity-95 transition-all duration-500 border-2 ${WRAP_COLORS[wrapColor]?.split(' ')[0]} ${WRAP_COLORS[wrapColor]?.split(' ')[1]}`} />
                      <div className="w-4 h-10 bg-[#2D221E]/10 rounded-full -mt-2 border border-[#2D221E]/10 flex items-center justify-center">
                        <span className="text-[8px] text-[#2D221E]/40 font-bold">🎀</span>
                      </div>
                    </div>
                  )}

                  {packaging === 'Корзина' && (
                    <div className="flex flex-col items-center">
                      <div className="w-24 h-14 rounded-t-full border-4 border-[#8B5A2B]/40 -mb-6" />
                      <div className="w-28 h-12 bg-[#A0522D] rounded-b-xl border-t border-[#8B5A2B] shadow-md flex items-center justify-center relative">
                        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(0,0,0,0.1)_25%,transparent_25%,transparent_50%,rgba(0,0,0,0.1)_50%,rgba(0,0,0,0.1)_75%,transparent_75%,transparent)] bg-[length:12px_12px]" />
                        <span className="text-[9px] uppercase font-bold tracking-widest text-white/50 z-10">Premium</span>
                      </div>
                    </div>
                  )}

                  {packaging === 'Коробка' && (
                    <div className="flex flex-col items-center">
                      <div className={`w-36 h-28 border-4 rounded-3xl opacity-90 transition-all duration-500 flex flex-col justify-between p-2 relative shadow-lg ${WRAP_COLORS[wrapColor]?.split(' ')[0]} ${WRAP_COLORS[wrapColor]?.split(' ')[1]}`}>

                        <div className="absolute inset-y-0 left-1/2 w-4 -translate-x-1/2 bg-white/25 border-l border-r border-white/10" />
                        <div className="absolute inset-x-0 top-1/2 h-4 -translate-y-1/2 bg-white/25 border-t border-b border-white/10" />
  
                        <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-5 h-3 rounded-full bg-[#D67B5C] border border-[#2D221E]/10 shadow-sm flex items-center justify-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
                        </div>

                        <div className="w-full h-full rounded-2xl bg-white/10 border border-white/20 backdrop-blur-[1px] flex items-center justify-center">
                          <span className={`text-[8px] uppercase tracking-wider font-bold opacity-45`}>chocolate box</span>
                        </div>
                      </div>
                    </div>
                  )}

                </div>

              </div>

              <div className="border-t border-[#2D221E]/10 pt-4">
                <span className="text-xs text-[#5C524E]/60 font-light block mb-1">Сумма сборки</span>
                <span className="font-serif text-3xl font-bold text-[#D67B5C]">{totalPrice} ₽</span>
              </div>

            </div>

            <p className="text-[11px] text-[#5C524E]/60 font-light mt-4 text-center max-w-xs leading-relaxed">
              *Все элементы укладываются вручную нашими мастерами в соответствии со строгими правилами санитарии и эстетики.
            </p>
          </div>

          <div className="lg:col-span-7 bg-white rounded-[36px] p-8 md:p-12 border border-[#2D221E]/5 shadow-sm space-y-10">
            
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-[#2D221E] mb-3">Ваш персональный микс</h2>
              <p className="text-sm text-[#5C524E] font-light leading-relaxed">
                Свободно добавляйте любые компоненты. Создайте уникальное сочетание вкусов и красок.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex justify-between items-baseline border-b border-[#2D221E]/5 pb-2">
                <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-[#D67B5C]">
                  Шаг 1. Наполнение ячейки №{activeSlotIndex + 1}
                </h3>
                <button 
                  type="button"
                  onClick={() => setBoxSlots(Array(9).fill(null))}
                  className="text-[10px] uppercase tracking-wider font-bold text-red-500 hover:text-red-700 transition-colors"
                >
                  Очистить всё
                </button>
              </div>

              <div className="flex flex-wrap gap-2 border-b border-[#2D221E]/5 pb-4">
                {Object.keys(INGREDIENTS_BY_CATEGORIES).map((catName) => (
                  <button
                    key={catName}
                    type="button"
                    onClick={() => setActiveTab(catName)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all border ${
                      activeTab === catName
                        ? "bg-[#D67B5C] border-[#D67B5C] text-white"
                        : "bg-[#FAF6F2] border-[#2D221E]/10 text-[#5C524E] hover:border-[#D67B5C]"
                    }`}
                  >
                    {catName}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {INGREDIENTS_BY_CATEGORIES[activeTab].map((addon) => {
                  const count = boxSlots.filter(s => s && s.id === addon.id).length;
                  
                  return (
                    <button
                      key={addon.id}
                      type="button"
                      onClick={() => handleSelectIngredient(addon)}
                      className={`flex items-center justify-between p-3.5 rounded-xl border transition-all text-xs ${
                        count > 0 
                          ? "bg-[#D67B5C]/5 border-[#D67B5C]/40 text-[#2D221E]" 
                          : "bg-[#FAF6F2] border-[#2D221E]/10 text-[#5C524E] hover:border-[#D67B5C]/50"
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span className="text-xl">{addon.icon}</span>
                        <span className="font-semibold text-left">{addon.label}</span>
                        {count > 0 && (
                          <span className="bg-[#D67B5C] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                            {count} шт
                          </span>
                        )}
                      </span>
                      <span className="font-bold text-[#5C524E]">+{addon.price} ₽</span>
                    </button>
                  );
                })}
              </div>

              {boxSlots.filter(Boolean).length > 0 && (
                <div className="bg-[#FAF6F2] p-6 rounded-2xl border border-[#2D221E]/5 space-y-3">
                  <h4 className="text-[10px] font-bold uppercase tracking-wider text-[#5C524E]">Итоговый состав набора:</h4>
                  <div className="flex flex-wrap gap-2">
                    {Array.from(new Set(boxSlots.filter(Boolean).map(s => s.id))).map((id) => {
                      const item = boxSlots.find(s => s && s.id === id);
                      const count = boxSlots.filter(s => s && s.id === id).length;
                      return (
                        <span 
                          key={id} 
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#2D221E]/5 text-xs text-[#2D221E] font-medium"
                        >
                          <span>{item.icon}</span>
                          <span>{item.label}</span>
                          <span className="text-[#D67B5C] font-bold">x{count}</span>
                        </span>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-6">
              <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-[#D67B5C] border-b border-[#2D221E]/5 pb-2">Шаг 2. Формат оформления и Цвет</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#5C524E] mb-2">Формат набора</label>
                  <div className="grid grid-cols-3 gap-2">
                    {['Букет', 'Корзина', 'Коробка'].map((p) => (
                      <button
                        key={p}
                        type="button"
                        onClick={() => setPackaging(p)}
                        className={`py-3 px-2 rounded-xl text-xs font-semibold transition-all border ${
                          packaging === p 
                            ? "bg-[#2D221E] border-[#2D221E] text-white" 
                            : "bg-[#FAF6F2] border-[#2D221E]/10 text-[#5C524E]"
                        }`}
                      >
                        {p} {p === 'Букет' ? '💐' : p === 'Корзина' ? '🧺' : '🎁'}
                      </button>
                    ))}
                  </div>
                </div>

                {packaging !== 'Корзина' && (
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#5C524E] mb-2">
                      {packaging === 'Коробка' ? 'Цвет коробки' : 'Цвет упаковки'}
                    </label>
                    <div className="flex gap-2">
                      {['Крафт', 'Белый', 'Нежно-розовый', 'Шоколадный'].map((color) => {
                        const colorsHex = {
                          'Крафт': '#E5D0C2',
                          'Белый': '#ffffff',
                          'Нежно-розовый': '#FBCFE8',
                          'Шоколадный': '#4B3621'
                        };
                        return (
                          <button
                            key={color}
                            type="button"
                            onClick={() => setWrapColor(color)}
                            className={`w-10 h-10 rounded-full border-2 transition-all relative flex items-center justify-center ${
                              wrapColor === color ? "border-[#D67B5C] scale-110" : "border-transparent"
                            }`}
                            style={{ backgroundColor: colorsHex[color] }}
                          >
                            {wrapColor === color && (
                              <Check className={`w-4 h-4 ${color === 'Белый' ? 'text-black' : 'text-white'}`} />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-6 pt-4">
              <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-[#D67B5C] border-b border-[#2D221E]/5 pb-2">Шаг 3. Данные получателя</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#5C524E] mb-2">Ваше имя</label>
                  <input 
                    type="text" 
                    required 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Например, Мария"
                    className="w-full px-4 py-3 rounded-xl bg-[#FAF6F2] border border-[#2D221E]/10 text-sm focus:outline-none focus:border-[#D67B5C]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#5C524E] mb-2">Номер телефона</label>
                  <input 
                    type="tel" 
                    required 
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+7 (999) 000-00-00"
                    className="w-full px-4 py-3 rounded-xl bg-[#FAF6F2] border border-[#2D221E]/10 text-sm focus:outline-none focus:border-[#D67B5C]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#5C524E] mb-2">Адрес доставки</label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-3.5 w-4 h-4 text-[#5C524E]/40" />
                  <input 
                    type="text" 
                    required 
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Укажите город, улицу, дом, квартиру"
                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-[#FAF6F2] border border-[#2D221E]/10 text-sm focus:outline-none focus:border-[#D67B5C]"
                  />
                </div>
              </div>

              <div className="border-t border-[#2D221E]/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <span className="text-xs text-[#5C524E]/60 font-light">Сметная стоимость заказа:</span>
                  <div className="font-serif text-3xl font-bold text-[#2D221E]">{totalPrice} ₽</div>
                </div>

                <button
                  type="submit"
                  onClick={handleFormSubmit}
                  disabled={boxSlots.filter(Boolean).length === 0 || !name || !phone || !address}
                  className="w-full md:w-auto px-10 py-4 bg-[#D67B5C] text-white font-medium rounded-full shadow-lg shadow-[#D67B5C]/20 hover:bg-[#c26849] hover:shadow-xl transition-all duration-300 disabled:bg-[#2D221E]/10 disabled:text-[#5C524E]/40 disabled:shadow-none disabled:cursor-not-allowed"
                >
                  Оформить микс-заказ
                </button>
              </div>

            </form>

          </div>
        </div>
      ) : (

        <div className="max-w-xl mx-auto bg-white rounded-[40px] p-12 text-center border border-[#2D221E]/5 shadow-xl py-16 flex flex-col items-center">
          <CheckCircle2 className="w-20 h-24 text-[#D67B5C] stroke-[1.2] mb-6 animate-bounce" />
          <h2 className="font-serif text-4xl mb-4">Ваш личный набор принят!</h2>
          <p className="text-sm text-[#5C524E] leading-relaxed font-light mb-8 max-w-sm">
            {name}, наш флорист-координатор уже приступает к согласованию вашего уникального рецепта. Мы создадим идеальный <span className="font-semibold text-[#2D221E]">«{packaging}»</span> из выбранного вами набора.
          </p>
          <div className="bg-[#FAF6F2] rounded-2xl p-6 w-full text-left space-y-3 border border-[#2D221E]/5 mb-10 text-xs text-[#5C524E]">
            <div><strong>Заказчик:</strong> {name}</div>
            <div><strong>Телефон для связи:</strong> {phone}</div>
            <div><strong>Адрес доставки:</strong> {address}</div>
            <div><strong>Состав микса:</strong> {
              Array.from(new Set(boxSlots.filter(Boolean).map(s => s.id)))
                .map(id => {
                  const item = boxSlots.find(s => s && s.id === id);
                  const count = boxSlots.filter(s => s && s.id === id).length;
                  return `${item.label} (x${count})`;
                }).join(', ')
            }</div>
            {packaging !== 'Корзина' && <div><strong>Цвет {packaging === 'Коробка' ? 'коробки' : 'бумаги'}:</strong> {wrapColor}</div>}
            <div className="border-t border-[#2D221E]/10 pt-2 text-[#D67B5C] font-bold text-sm">
              Итоговая сметная сумма: {totalPrice} ₽
            </div>
          </div>
          <Link 
            to="/"
            className="px-10 py-4 bg-[#2D221E] text-white hover:bg-[#453631] text-xs font-bold uppercase tracking-wider rounded-full transition-colors"
          >
            Отлично, вернуться на главную
          </Link>
        </div>
      )}

    </div>
  );
}

export default function App() {
    const [activeCategory, setActiveCategory] = useState("Все");

  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const cartTotalCount = cart.reduce((sum, item) => sum + item.count, 0);
  const cartTotalPrice = cart.reduce((sum, item) => sum + (item.price || 0) * item.count, 0);

  const cartCount = cartTotalCount;

  const addToCart = (product) => {
    if (!product) return;
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, count: item.count + 1 } : item
        );
      }
      return [...prevCart, { ...product, count: 1 }];
    });
    setIsCartOpen(true);
  };

  const incrementCart = () => setIsCartOpen(true);

  const updateCount = (id, delta) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => {
          if (item.id === id) {
            const newCount = item.count + delta;
            return newCount > 0 ? { ...item, count: newCount } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[#FAF6F2] text-[#2D221E] font-sans selection:bg-[#D67B5C]/20 flex flex-col">

        <header className="sticky top-0 z-50 w-full bg-[#FAF6F2]/50 backdrop-blur-lg border-b border-[#2D221E]/5 transition-all duration-300">
          <div className="container mx-auto px-6 py-4 flex items-center justify-between">
            
            <Link to="/" className="flex items-center gap-2 cursor-pointer">
              <span className="font-serif text-2xl font-bold text-[#D67B5C] tracking-wide">
                Вкус <span className="italic font-normal text-[#2D221E]">&</span> Букет
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              <Link to="/catalog" className="text-xs font-semibold tracking-[0.15em] uppercase hover:text-[#D67B5C] transition-colors">
                Коллекции
              </Link>
              <Link to="/custom" className="text-xs font-semibold tracking-[0.15em] uppercase hover:text-[#D67B5C] transition-colors">
                Конструктор
              </Link>
              <Link to="/#about" className="text-xs font-semibold tracking-[0.15em] uppercase hover:text-[#D67B5C] transition-colors">
                О нас
              </Link>
              <Link to="/#contacts" className="text-xs font-semibold tracking-[0.15em] uppercase hover:text-[#D67B5C] transition-colors">
                Контакты
              </Link>
            </nav>

            <div className="relative cursor-pointer group" onClick={incrementCart}>
              <ShoppingBag className="w-6 h-6 stroke-[1.5] group-hover:text-[#D67B5C] transition-colors" />
              <span className="absolute -top-1 -right-1 bg-[#D67B5C] text-white text-[9px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            </div>

          </div>
        </header>

        <Routes>
          <Route path="/" element={<HomePage onAddToCart={addToCart} />} />
          <Route 
            path="/catalog" 
            element={
              <CatalogPage 
                activeCategory={activeCategory} 
                setActiveCategory={setActiveCategory} 
                onAddToCart={addToCart}
              />
            } 
          />
          <Route path="/custom" element={<CustomOrderPage />} />
        </Routes>

        <footer id="contacts" className="bg-[#2D221E] text-[#FAF6F2]/80 py-20 border-t border-white/5 mt-auto">
          <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
            
            <div className="md:col-span-5 flex flex-col justify-between">
              <div>
                <Link to="/" className="font-serif text-2xl font-bold text-[#D67B5C] tracking-wide block mb-6">
                  Вкус <span className="italic font-normal text-white">&</span> Букет
                </Link>
                <p className="text-sm font-light text-[#FAF6F2]/60 leading-relaxed max-w-sm mb-8">
                  Создаем незабываемые съедобные впечатления с 2018 года. Мы верим, что подарки должны быть такими же вкусными, как и красивыми.
                </p>
              </div>
              
              <div className="flex items-center gap-4">
                <a href="#" className="w-10 h-10 rounded-full border border-white/10 hover:border-[#D67B5C] hover:text-[#D67B5C] flex items-center justify-center transition-all">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/10 hover:border-[#D67B5C] hover:text-[#D67B5C] flex items-center justify-center transition-all">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m22 2-7 20-4-9-9-4Z"/>
                    <path d="M22 2 11 13"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/10 hover:border-[#D67B5C] hover:text-[#D67B5C] flex items-center justify-center transition-all">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                </a>
              </div>
            </div>

            <div className="md:col-span-3 md:col-start-7">
              <h4 className="text-xs font-bold tracking-[0.2em] text-white uppercase mb-6">Магазин</h4>
              <ul className="space-y-3 text-sm font-light text-[#FAF6F2]/60">
                <li><Link to="/catalog" onClick={() => setActiveCategory("Фрукты")} className="hover:text-[#D67B5C] transition-colors">Фруктовые букеты</Link></li>
                <li><Link to="/catalog" onClick={() => setActiveCategory("Шоколад")} className="hover:text-[#D67B5C] transition-colors">В шоколаде</Link></li>
                <li><Link to="/catalog" onClick={() => setActiveCategory("Сладости")} className="hover:text-[#D67B5C] transition-colors">Сладкие наборы</Link></li>
                <li><Link to="/catalog" onClick={() => setActiveCategory("Мясные букеты")} className="hover:text-[#D67B5C] transition-colors">Мясные букеты</Link></li>
              </ul>
            </div>

            <div className="md:col-span-3">
              <h4 className="text-xs font-bold tracking-[0.2em] text-white uppercase mb-6">Поддержка</h4>
              <ul className="space-y-3 text-sm font-light text-[#FAF6F2]/60">
                <li><a href="#" className="hover:text-[#D67B5C] transition-colors">Доставка</a></li>
                <li><a href="#" className="hover:text-[#D67B5C] transition-colors">Возврат</a></li>
                <li><a href="#" className="hover:text-[#D67B5C] transition-colors">Статус заказа</a></li>
                <li><a href="#" className="hover:text-[#D67B5C] transition-colors">FAQ</a></li>
              </ul>
            </div>

          </div>

          <div className="container mx-auto px-6 mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-light text-[#FAF6F2]/40">
            <span>© {new Date().getFullYear()} Вкус & Букет. Все права защищены.</span>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-white transition-colors">Публичная оферта</a>
            </div>
          </div>
        </footer>

      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
            onClick={() => setIsCartOpen(false)}
          />

          <div className="relative w-full max-w-md bg-[#FAF6F2] h-full shadow-2xl flex flex-col z-10">
            <div className="p-6 border-b border-[#2D221E]/10 flex items-center justify-between">
              <h3 className="font-serif text-2xl text-[#2D221E]">
                Корзина {cartTotalCount > 0 && `(${cartTotalCount})`}
              </h3>
              <button
                type="button"
                onClick={() => setIsCartOpen(false)}
                className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-[#2D221E]/10 text-[#5C524E] text-lg"
              >
                ✕
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center text-[#5C524E]">
                  <span className="text-4xl mb-3">🧺</span>
                  <p className="font-serif text-xl text-[#2D221E] mb-1">Ваша корзина пуста</p>
                  <p className="text-xs">Выберите букет из каталога</p>
                </div>
              ) : (
                cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 bg-white/80 p-3.5 rounded-2xl border border-[#2D221E]/5 items-center"
                  >
                    <img
                      src={item.image}
                      alt={item.title || item.name}
                      className="w-16 h-16 rounded-xl object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-serif text-base text-[#2D221E] truncate">
                        {item.title || item.name}
                      </h4>
                      <p className="text-sm font-semibold text-[#D67B5C]">
                        {item.price ? `${item.price.toLocaleString('ru-RU')} ₽` : ''}
                      </p>
                      {/* Кнопки - 1 + */}
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          type="button"
                          onClick={() => updateCount(item.id, -1)}
                          className="w-6 h-6 rounded bg-[#FAF6F2] hover:bg-[#EAE2D9] text-[#2D221E] flex items-center justify-center text-xs font-bold"
                        >
                          -
                        </button>
                        <span className="text-xs font-medium text-[#2D221E]">{item.count}</span>
                        <button
                          type="button"
                          onClick={() => updateCount(item.id, 1)}
                          className="w-6 h-6 rounded bg-[#FAF6F2] hover:bg-[#EAE2D9] text-[#2D221E] flex items-center justify-center text-xs font-bold"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => updateCount(item.id, -item.count)}
                      className="text-xs text-[#5C524E]/60 hover:text-red-500 p-1"
                    >
                      ✕
                    </button>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-6 border-t border-[#2D221E]/10 bg-white/50 space-y-4">
                <div className="flex justify-between items-baseline">
                  <span className="text-sm text-[#5C524E]">Итого к оплате:</span>
                  <span className="font-serif text-2xl font-bold text-[#2D221E]">
                    {cartTotalPrice.toLocaleString('ru-RU')} ₽
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    alert(`Спасибо! Ваш заказ на сумму ${cartTotalPrice.toLocaleString('ru-RU')} ₽ принят. Мы скоро свяжемся с вами!`);
                    setCart([]);
                    setIsCartOpen(false);
                  }}
                  className="w-full py-3.5 bg-[#D67B5C] hover:bg-[#c26a4c] text-white rounded-xl text-sm font-medium tracking-wide uppercase shadow-lg transition-colors"
                >
                  Оформить заказ
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  </Router>
  );
}