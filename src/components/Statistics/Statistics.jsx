import React from 'react';
import css from './Statistics.module.css';
import data from 'data/data.json';

export const Statistics = ({ title = false }) => {
  return (
    <div className={css.statisticsBase}>
      <section className={css.statistics}>
        {title && <h2 className={css.title}>{title}</h2>}

        <ul className={css.statList}>
          {data.map(stat => (
            <li className={css.item} key={stat.id}>
              <span className={css.label}>{stat.label}</span>
              <span className={css.quantity}>{stat.percentage}%</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};
