import StartContentComponent from './StartContentComponent'

export default function StartContent (): JSX.Element {
  return (
    <>
      <section className="container my-24 mx-auto md:px-6">
        <StartContentComponent
          title="Thats the news!"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quae nulla saepe rerum aspernatur odio amet perferendis tempora mollitia? Ratione unde magni omnis quaerat blanditiis cumque dolore placeat rem dignissimos?"
          img="/img/strawberry1.PNG"
        />

        <StartContentComponent
          title="Thats the news!"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quae nulla saepe rerum aspernatur odio amet perferendis tempora mollitia? Ratione unde magni omnis quaerat blanditiis cumque dolore placeat rem dignissimos?"
          img="/img/strawberry2.JPG"
        />

        <StartContentComponent
          title="Thats the news!"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quae nulla saepe rerum aspernatur odio amet perferendis tempora mollitia? Ratione unde magni omnis quaerat blanditiis cumque dolore placeat rem dignissimos?"
          img="/img/strawberry3.JPG"
        />

        <StartContentComponent
          title="Thats the news!"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quae nulla saepe rerum aspernatur odio amet perferendis tempora mollitia? Ratione unde magni omnis quaerat blanditiis cumque dolore placeat rem dignissimos?"
          img="/img/strawberry4.JPG"
        />

        <StartContentComponent
          title="Thats the news!"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quae nulla saepe rerum aspernatur odio amet perferendis tempora mollitia? Ratione unde magni omnis quaerat blanditiis cumque dolore placeat rem dignissimos?"
          img="/img/strawberry5.JPG"
        />
      </section>
    </>
  )
}
