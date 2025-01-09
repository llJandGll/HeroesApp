import { Navigate, useParams, useNavigate } from "react-router";
import { Dc, Marvel } from "../interfaces";
import { getHeroById } from "../helpers/getHeroById";
import { ArrowLeft } from 'lucide-react';
import './HeroPage.css';
import { Characters } from "../components/Characters";
import { useMemo } from "react";

export const HeroPage = () => {
  const { heroId } = useParams();
  const navigate = useNavigate();

  const hero: Marvel | Dc = useMemo(() => getHeroById(heroId as string), [heroId]);

  if (!hero) {
    return <Navigate to="/" />
  }

  const onNavigateBack = () => {
    navigate(-1);
  }

  return (
    <div className="hero-page">
      <button 
        className="hero-page__back"
        onClick={onNavigateBack}
      >
        <ArrowLeft className="hero-page__back-icon" />
        Back
      </button>

      <div className="hero-detail animate__animated animate__fadeInLeft">
        <div className="hero-detail__image-container">
          <img 
            src={`/heroes-images/${hero.id}.jpg`}
            alt={hero.superhero}
            className="hero-detail__image"
          />
          <div className="hero-detail__publisher-tag">
            {hero.publisher}
          </div>
        </div>

        <div className="hero-detail__content">
          <div className="hero-detail__header">
            <h1 className="hero-detail__title">{hero.superhero}</h1>
            <p className="hero-detail__alter-ego">{hero.alter_ego}</p>
          </div>

          <div className="hero-detail__info">
            <div className="hero-detail__info-item">
              <h3 className="hero-detail__info-title">First Appearance</h3>
              <p className="hero-detail__info-text">{hero.first_appearance}</p>
            </div>

            
            <Characters characters={hero.characters} alter_ego={hero.alter_ego} />
          </div>
        </div>
      </div>
    </div>
  )
}
