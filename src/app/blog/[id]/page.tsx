import Image from "next/image";
import React from "react";
import {notFound} from 'next/navigation'

async function getData(id:number) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { cache: 'no-store' })
 
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    // throw new Error('Failed to fetch data')
    return notFound()
  }
 
  return res.json()
}


const BlogId = async ({params:{id}}:{params:{id:number}}) => {
  // console.log(id)
  const data = await getData(id)
  return (
    <div className="flex flex-col gap-10 py-10">
      <div className="flex items-center gap-4">
        <div className="flex-1 flex flex-col justify-center gap-5">
          <h1 className="text-4xl font-bold">{data.title}</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem corporis hic corrupti rem recusandae id, quam vel
            fuga asperiores soluta laudantium, sapiente voluptates atque?
            Fugiat, dolore reiciendis? Porro architecto enim suscipit dolorem
            explicabo laboriosam autem aliquid dolore sit, omnis aut?
          </p>
          <div className="flex items-center gap-2 ">
            <div className="w-10 h-10 relative rounded-full overflow-hidden">
              <Image fill={true} className="object-cover grayscale" src={`https://images.pexels.com/photos/16971294/pexels-photo-16971294/free-photo-of-woman-posing-on-dessert.jpeg?auto=compress&cs=tinysrgb&w=600`} alt="" />
            </div>
            <span className="text-">Jone Doe</span>
          </div>
        </div>
        <div className="w-[500px] h-[250px] relative flex-1 rounded-xl overflow-hidden">
          <Image fill={true} className="object-cover" src={`https://images.pexels.com/photos/91409/pexels-photo-91409.jpeg?auto=compress&cs=tinysrgb&w=600`} alt="" />
        </div>
      </div>
      <div>
        Lorem ipsum ':smile:' dolor sit amet consectetur adipisicing elit. Obcaecati
        dolores atque velit iste, excepturi culpa quidem est recusandae dolor
        quasi cumque illo at esse? Rerum perspiciatis reprehenderit ad nam
        molestiae pariatur doloribus voluptatibus ut repellendus, quasi iusto
        tempora corrupti porro modi eveniet quae dicta fugit officia ex
        cupiditate eos! Nobis excepturi ea impedit. Fuga eius ullam adipisci
        <br />
        <br />
        architecto dolore assumenda, corrupti ipsa. Voluptas recusandae alias
        ullam modi iusto quo rem quod veniam, ipsum dignissimos, debitis nobis
        esse officia dicta quia incidunt ea hic reiciendis, similique cumque
        neque! Ipsam voluptatibus perspiciatis facere dolores sequi dolorem.
        Provident distinctio aperiam pariatur quibusdam a sit atque tempore
        nulla architecto aliquid quas porro eligendi accusantium consequuntur
        magnam quos laborum, repellendus praesentium. Esse quae recusandae
        <br />
        <br />
        quidem in, accusamus officiis vero quos cupiditate asperiores quis rem
        quo! Ad, sequi! Tempore ipsa vitae quae minus assumenda error enim
        deserunt, quidem rerum totam perferendis animi impedit consequatur aut
        numquam necessitatibus suscipit? Tenetur atque recusandae officia
        deleniti quod quasi cupiditate inventore a, ullam molestiae aperiam
        quis? Ad adipisci culpa impedit dolores libero, ullam temporibus
        architecto quia id nisi quis, modi harum repellendus odit saepe earum
        <br />
        <br />
        voluptas dolore excepturi, similique molestias numquam suscipit
        consequatur officiis! Sunt officia neque laborum delectus esse.
      </div>
    </div>
  );
};

export default BlogId;
