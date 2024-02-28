import React from 'react'
import Accordion from '../components/Accordion/Accordion'

export default function CompoundComponents() {
  return (
    <Accordion className="accordion">
      <Accordion.Item
        id="experience"
        className="accordion-item"
      >
        <Accordion.Title className="accordion-item-title">
          We got 20 years of experience.
        </Accordion.Title>
        <Accordion.Content className="accordion-item-content">
          <article>
            <p>You can&apos;t go wrong with us.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur nam cumque recusandae similique cupiditate velit
              delectus repudiandae, repellendus esse veritatis unde quos,
              officiis ad doloremque enim necessitatibus corporis veniam nihil!
            </p>
          </article>
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item
        className="accordion-item"
        id="guides"
      >
        <Accordion.Title className="accordion-item-title">
          We are working with local guides.
        </Accordion.Title>
        <Accordion.Content className="accordion-item-content">
          <article>
            <p>We are not doing this along from our office.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              quidem quos velit aliquid voluptatibus odio necessitatibus soluta,
              obcaecati non excepturi nemo, eligendi unde nihil earum, molestias
              asperiores facere placeat reiciendis?
            </p>
          </article>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>
  )
}
