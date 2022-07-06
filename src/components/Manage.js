import React from 'react';
import manage from '../utils/manage';

const Manage = () => {
  return (
    <section>
      <div className='section-center manage-center'>
        <div className='info-part'>
          <h2>What's different about Manage ?</h2>
          <p>
            Manage provides all the functionality your team , needs without the
            complexity.Our software is tailor-mage for modern digital product
            teams.
          </p>
        </div>
        <div className='info-list'>
          {manage.map((m, index) => {
            const { id, text, exp } = m;
            return (
              <article key={id}>
                <span>0{id}</span>
                <span>{text}</span>
                <p>{exp}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Manage;
