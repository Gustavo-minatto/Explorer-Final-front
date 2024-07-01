import { Container, Content, Banner } from './styles';
import { Header } from '../../Components/Header';
import { Card } from '../../Components/Card';
import { Footer } from '../../Components/Footer';

import banner from '../../assets/banner.svg';

import { useState, useEffect, useRef } from 'react';

import { api } from '../../services/api';

export function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [mainDishes, setMainDishes] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [desserts, setDesserts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchResultsDish, setSearchResultsDish] = useState([]);
  const [searchResultsDrink, setSearchResultsDrink] = useState([]);
  const [searchResultsDessert, setSearchResultsDessert] = useState([]);

  const contentRefDish = useRef(null);
  const contentRefDrink = useRef(null);
  const contentRefDessert = useRef(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const mainResponse = await api.get(`/getters/main`);
        const drinkResponse = await api.get(`/getters/drink`);
        const dessertResponse = await api.get(`/getters/dessert`);

        setMainDishes(mainResponse.data);
        setDrinks(drinkResponse.data);
        setDesserts(dessertResponse.data);

        setSearchResultsDish(mainResponse.data);
        setSearchResultsDrink(drinkResponse.data);
        setSearchResultsDessert(dessertResponse.data);

        setLoading(false);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    if (!loading) {
      let resultsMainDishes = mainDishes.filter(dish => dish.name.toLowerCase().includes(searchTerm.toLowerCase()));
      let resultsDrinks = drinks.filter(drink => drink.name.toLowerCase().includes(searchTerm.toLowerCase()));
      let resultsDesserts = desserts.filter(dessert => dessert.name.toLowerCase().includes(searchTerm.toLowerCase()));

      setSearchResultsDish(resultsMainDishes);
      setSearchResultsDrink(resultsDrinks);
      setSearchResultsDessert(resultsDesserts);
    }
  }, [searchTerm, mainDishes, drinks, desserts, loading]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const scrollLeft = (ref) => {
    if (ref.current) {
      ref.current.scrollBy({
        left: -200,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = (ref) => {
    if (ref.current) {
      ref.current.scrollBy({
        left: 200,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Container>
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <Content>
        <Banner>
          <div>
            <img src={banner} alt="Imagem de comidas apetitosas." />
          </div>

          <div className="banner">
            <h1>Sabores inigualáveis</h1>
            <h3>Sinta o cuidado do preparo com ingredientes selecionados</h3>
          </div>
        </Banner>

        <h1>Refeições</h1>

        <div className="carousel-wrapper">
          <button className="carousel-arrow left" onClick={() => scrollLeft(contentRefDish)}>{'<'}</button>
          <div className="carousel" ref={contentRefDish}>
            {searchResultsDish.length > 0 &&
              searchResultsDish.map((dish, index) => (
                <Card key={dish.id} data={dish} />
              ))}
          </div>
          <button className="carousel-arrow right" onClick={() => scrollRight(contentRefDish)}>{'>'}</button>
        </div>

        <h1>Sobremesas</h1>

        <div className="carousel-wrapper">
          <button className="carousel-arrow left" onClick={() => scrollLeft(contentRefDessert)}>{'<'}</button>
          <div className="carousel" ref={contentRefDessert}>
            {searchResultsDessert.length > 0 &&
              searchResultsDessert.map((dessert, index) => (
                <Card key={dessert.id} data={dessert} />
              ))}
          </div>
          <button className="carousel-arrow right" onClick={() => scrollRight(contentRefDessert)}>{'>'}</button>
        </div>

        <h1>Bebidas</h1>

        <div className="carousel-wrapper">
          <button className="carousel-arrow left" onClick={() => scrollLeft(contentRefDrink)}>{'<'}</button>
          <div className="carousel" ref={contentRefDrink}>
            {searchResultsDrink.length > 0 &&
              searchResultsDrink.map((drink, index) => (
                <Card key={drink.id} data={drink} />
              ))}
          </div>
          <button className="carousel-arrow right" onClick={() => scrollRight(contentRefDrink)}>{'>'}</button>
        </div>
      </Content>

      <Footer />
    </Container>
  );
}
