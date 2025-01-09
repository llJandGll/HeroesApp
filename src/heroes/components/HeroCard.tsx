import React from "react"
import { Dc, Marvel } from "../interfaces"
import { ArrowUpRight } from 'lucide-react'
import './HeroCard.css'
import { Characters } from "./Characters"
import { Link } from "react-router"

import 'animate.css';
export const HeroCard: React.FC<Dc | Marvel> = ({ 
  id, 
  superhero, 
  publisher, 
  alter_ego, 
  // first_appearance, 
  characters 
}) => {
  return (
    <article className="card animate__animated animate__fadeIn">
      <div className="card__inner">
        <div className="card__box">
          <div className="card__image-wrapper">
            <img 
              src={`heroes-images/${id}.jpg`} 
              alt={superhero} 
              className="card__image"
            />
          </div>
          <div className="card__icon">
            <Link to={`/hero/${id}`} className="card__icon-box">
              <ArrowUpRight className="card__icon-arrow" />
            </Link>
          </div>
        </div>
      </div>
      <div className="card__content">
        <h3 className="card__title">{superhero}</h3>
        <p className="card__description">{alter_ego}</p>
        <ul className="card__tags">
          <li className={`card__tag card__tag--${publisher.toLowerCase()}`}>
            {publisher}
          </li>
          < Characters characters={ characters } alter_ego={ alter_ego } />
        </ul>
      </div>
    </article>
  )
}

